#!/usr/bin/env bash
# Smoke-test för den statiska sajten efter deploy.
# Verifierar: färsk build live (alla 12 orter länkas från startsidan), stadssidor 200,
# /omdomen utan AggregateRating (platshållar-omdömen), nyckelsidor + sitemap 200,
# sendmail.php finns. Körs på runnern mot publik URL.
set -uo pipefail

BASE="${1:-https://armeringproffs.se}"
BASE="${BASE%/}"
fail=0
say() { printf '%s\n' "$*"; }

cb="cb=$(date +%s)"

# 1) Startsidan + alla 12 orter länkade (= färsk build + hel stads-graf).
home="$(curl -fsS "$BASE/?$cb" || true)"
if [ -z "$home" ]; then say "FEL: startsidan svarade inte"; fail=1; fi
for c in stockholm goteborg malmo uppsala vasteras orebro linkoping helsingborg jonkoping norrkoping umea sundsvall; do
  printf '%s' "$home" | grep -q "/armering/$c/" || { say "FEL: stad-länk saknas på startsidan: $c"; fail=1; }
done

# 2) Stadssidor svarar 200 (särskilt tidigare föräldralösa umeå/sundsvall).
for c in stockholm umea sundsvall; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "$BASE/armering/$c/")
  [ "$code" = "200" ] || { say "FEL: /armering/$c/ gav HTTP $code"; fail=1; }
done

# 3) /omdomen utan AggregateRating (omdömena är fortfarande platshållare).
om="$(curl -fsS "$BASE/omdomen/" || true)"
if printf '%s' "$om" | grep -q "AggregateRating"; then
  say "FEL: AggregateRating live trots platshållar-omdömen"; fail=1
fi

# 4) Nyckelsidor + sitemap/robots 200.
for p in "" "produkter/" "tjanster/" "tjanster/bockningslista/" "blogg/" "offert/" "sitemap.xml" "robots.txt"; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "$BASE/$p")
  [ "$code" = "200" ] || { say "FEL: /$p gav HTTP $code"; fail=1; }
done

# 5) sendmail.php finns (POST utan data ska ge 4xx, inte 404).
code=$(curl -s -o /dev/null -w '%{http_code}' -X POST "$BASE/sendmail.php")
[ "$code" = "404" ] && { say "FEL: sendmail.php saknas (404)"; fail=1; }

if [ "$fail" = "0" ]; then
  say "SMOKE OK: statisk sajt live, 12 orter länkade, /omdomen utan AggregateRating, sendmail.php på plats."
else
  say "SMOKE MISSLYCKADES."
  exit 1
fi
