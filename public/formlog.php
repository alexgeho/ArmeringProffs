<?php
/**
 * Anonym formulärstatistik: start / submit / fel (fältnamn) per sida.
 * Inga personuppgifter: inga fältvärden, ingen IP, inga cookies.
 * Skrivs utanför public_html: ../formlog/YYYY-MM.jsonl
 */
header('Content-Type: application/json; charset=utf-8');
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { http_response_code(405); exit; }
$raw = substr((string) file_get_contents('php://input'), 0, 2000);
$d = json_decode($raw, true);
if (!is_array($d)) { http_response_code(400); exit; }
$ev = (string) ($d['e'] ?? '');
if (!in_array($ev, ['start', 'submit', 'invalid', 'sent', 'error'], true)) { http_response_code(400); exit; }
$clean = function ($v, $n) { return substr(preg_replace('/[^\w\/\-.,:åäöÅÄÖ ]/u', '', (string) $v), 0, $n); };
$row = [
    't' => date('c'),
    'e' => $ev,
    'p' => $clean($d['p'] ?? '', 200),
    'f' => $clean($d['f'] ?? '', 60),
    'x' => $clean($d['x'] ?? '', 200),
    'm' => !empty($d['m']) ? 1 : 0,
];
$dir = dirname(__DIR__) . '/formlog';
if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
@file_put_contents($dir . '/' . date('Y-m') . '.jsonl', json_encode($row, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
http_response_code(204);
