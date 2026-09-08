<?php
/**
 * sendmail.php – offertförfrågningar för armeringproffs.se (statisk sajt).
 *
 * Tar emot multipart/form-data från ContactForm (fetch POST /sendmail.php),
 * validerar, hanterar honeypot + ev. bifogad ritning/bockningslista och mejlar
 * förfrågan till företaget via PHP mail(). Svarar med JSON {ok:true|false}.
 *
 * [OWNER]:
 *  - $TO / $FROM måste vara adresser på egen domän (armeringproffs.se) för leverans.
 *  - PHP mail() måste vara aktiverat i DirectAdmin; kontrollera upload_max_filesize
 *    och post_max_size (≥ 12 MB) så att bifogad ritning (max 10 MB) kommer fram.
 */

header('Content-Type: application/json; charset=utf-8');

// --- Endast POST ---
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Konfiguration ---
$TO   = 'offert@armeringproffs.se';   // mottagare (byt vid behov)
$FROM = 'offert@armeringproffs.se';   // avsändare på egen domän (krävs för leverans)
$MAX_FILE_BYTES = 10 * 1024 * 1024;   // 10 MB
$ALLOWED_EXT = ['pdf','dwg','dxf','xls','xlsx','csv','doc','docx','png','jpg','jpeg','zip'];

// --- Honeypot: fylls det i av en bot – kvittera OK men skicka inget ---
if (!empty(trim($_POST['company_website'] ?? ''))) {
    echo json_encode(['ok' => true]);
    exit;
}

// --- Hjälpare ---
function field($k) {
    $v = $_POST[$k] ?? '';
    return is_string($v) ? trim($v) : '';
}
// Ta bort radbrytningar ur värden som hamnar i mejl-headers (anti-injection).
function clean_header($s) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', $s));
}

$name     = field('name');
$phone    = field('phone');
$email    = field('email');
$contact  = field('contact');
$location = field('location');
$quantity = field('quantity');
$message  = field('message');
$source   = field('source') !== '' ? field('source') : 'webbformulär';
$consent  = isset($_POST['consent']);

// Kompakt hero-form skickar ett kombinerat fält "contact" (telefon ELLER e-post).
if ($contact !== '') {
    if (strpos($contact, '@') !== false) {
        if ($email === '') $email = $contact;
    } else {
        if ($phone === '') $phone = $contact;
    }
}

// --- Validering: minst en kontaktuppgift + samtycke ---
if ($phone === '' && $email === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Telefon eller e-post krävs']);
    exit;
}
if (!$consent) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Samtycke krävs']);
    exit;
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Ogiltig e-post – behåll som text men använd inte i Reply-To.
    $reply = '';
} else {
    $reply = $email;
}

// --- Ev. bifogad fil ---
$attachment = null;
if (isset($_FILES['drawing']) && ($_FILES['drawing']['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_OK) {
    $f = $_FILES['drawing'];
    if ($f['size'] > $MAX_FILE_BYTES) {
        http_response_code(413);
        echo json_encode(['ok' => false, 'error' => 'Filen är för stor (max 10 MB)']);
        exit;
    }
    $origName = $f['name'];
    $ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
    if (!in_array($ext, $ALLOWED_EXT, true)) {
        http_response_code(415);
        echo json_encode(['ok' => false, 'error' => 'Otillåten filtyp']);
        exit;
    }
    if (is_uploaded_file($f['tmp_name'])) {
        $safeName = preg_replace('/[^A-Za-z0-9._-]/', '_', $origName);
        $attachment = [
            'name'    => $safeName !== '' ? $safeName : 'bilaga.' . $ext,
            'content' => file_get_contents($f['tmp_name']),
        ];
    }
}

// --- Bygg mejlet ---
$subject = 'Offertförfrågan (' . $source . ') – armeringproffs.se';

$lines = [];
$lines[] = 'Ny offertförfrågan från armeringproffs.se';
$lines[] = '';
if ($name !== '')     $lines[] = 'Namn/företag: ' . $name;
if ($phone !== '')    $lines[] = 'Telefon: ' . $phone;
if ($email !== '')    $lines[] = 'E-post: ' . $email;
if ($location !== '') $lines[] = 'Leveransort: ' . $location;
if ($quantity !== '') $lines[] = 'Mängd/dimension: ' . $quantity;
$lines[] = 'Källa: ' . $source;
if ($message !== '') {
    $lines[] = '';
    $lines[] = 'Meddelande:';
    $lines[] = $message;
}
$body = implode("\r\n", $lines);

$fromHeader  = clean_header($FROM);
$replyHeader = $reply !== '' ? clean_header($reply) : $fromHeader;

$headers  = 'From: Armeringsproffs <' . $fromHeader . '>' . "\r\n";
$headers .= 'Reply-To: ' . $replyHeader . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";

if ($attachment) {
    $boundary = '=_ap_' . bin2hex(random_bytes(8));
    $headers .= 'Content-Type: multipart/mixed; boundary="' . $boundary . '"' . "\r\n";

    $msg  = '--' . $boundary . "\r\n";
    $msg .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
    $msg .= 'Content-Transfer-Encoding: 8bit' . "\r\n\r\n";
    $msg .= $body . "\r\n\r\n";

    $msg .= '--' . $boundary . "\r\n";
    $msg .= 'Content-Type: application/octet-stream; name="' . $attachment['name'] . '"' . "\r\n";
    $msg .= 'Content-Transfer-Encoding: base64' . "\r\n";
    $msg .= 'Content-Disposition: attachment; filename="' . $attachment['name'] . '"' . "\r\n\r\n";
    $msg .= chunk_split(base64_encode($attachment['content'])) . "\r\n";
    $msg .= '--' . $boundary . '--';
} else {
    $headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
    $msg = $body;
}

// Subject med UTF-8-kodning (åäö).
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$ok = @mail($TO, $encodedSubject, $msg, $headers, '-f' . $fromHeader);

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'E-post kunde inte skickas']);
}
