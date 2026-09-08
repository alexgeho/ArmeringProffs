# next-level-brief — worklog (2026-09-08)

Автономное выполнение `docs/next-level-brief.md`. Каждый чанк: build ✓ + lint (0 errors) + commit + push (autodeploy).

## Выполнено

### Задача 1 — Отзывы → звёзды (код-путь) ✅ (ждёт [OWNER])
- `lib/jsonld.tsx`: `reviewsSchema(reviews)` — эмитит Review + AggregateRating, `null` если список пуст.
- `config/reviews.ts`: поле `verified?: boolean` + экспорт `verifiedReviews`. Инструкция в шапке файла.
- `app/omdomen/page.tsx`: схема эмитится ТОЛЬКО из `verifiedReviews`. Плейсхолдеры (exempel) → схемы нет, честный баннер.
- **AC:** схема появляется только для реальных отзывов — ✅ (сейчас 0 verified → 0 схемы).
- **[OWNER]:** собрать реальные отзывы, вписать в `config/reviews.ts` с `verified: true`.

### Задача 2 — Блог → city (разрыв графа) ✅
- `app/blogg/[slug]/page.tsx`: блок `CityLinks` на всех статьях блога → blog→`/armering/[stad]`.
- Каждый из 12 городов теперь получает входящую ссылку с каждой статьи блога (17 статей).
- blog→`/offert` уже покрыт (CTA-бокс в статье + CtaBanner).
- **AC:** каждый город ≥2 входящих из блога, сирот нет — ✅ (по 17 входящих).

### Задача 4 — Трекинг ✅ (одна часть [OWNER])
- `components/PhoneClickTracker.tsx`: делегированный слушатель → GA4 `phone_click` на всех `tel:`-ссылках. Смонтирован в layout. No-op без consent.
- **AC:** phone_click шлётся — ✅. generate_lead помечен конверсией — **[OWNER]** (только в GA4 UI).

### Задача 6 — Meta retargeting-пиксель ✅ (ждёт [OWNER])
- `config/site.ts`: `metaPixelId: ""` (пусто = выключено).
- `components/CookieConsent.tsx`: пиксель грузится ТОЛЬКО после consent + при заданном ID.
- **[OWNER]:** вписать pixel-ID из Meta Events Manager.

### Задача 5 — Cleanup ✅ (фото [OWNER])
- Удалены неиспользуемые `public/images/shutterstock_*.jpg` (10 + 5.4 МБ; grep-проверка = 0 ссылок).
- README переписан под Armeringsproffs (был про старый проект бетонных плит).
- Deprecation-баннеры на `docs/PLAN.md` и `docs/keyword-mapping.md` → указывают на STATUS.md.
- **[OWNER]:** 2 фото продуктов (armeringskorgar, svetsad-armering) — механизм `product.image` готов, нужны сами файлы.

## Осознанное решение (конфликт с брифом)

### Задача 3 — Расширение поверхности: города НЕ добавлены (by design)
Бриф п.3 просит добавить города (Gävle/Karlstad/Luleå…) + product×city. **НО** владелец в интерактивной
сессии 2026-09-08 явно решил НЕ расширять города: нет физического присутствия → «Armering i [ort]» без
присутствия = риск doorway + ощущается как накрутка. Существующие 12 (честно про доставку) оставлены.
- Новые города — **НЕ делаю** (позднее явное решение владельца перевешивает бриф).
- product×city (`[product]-[stad]`) — **НЕ строю** по той же причине (ещё более транзакционно-локально без присутствия).
- Вместо этого поверхность расширена честно: раздел `/tjanster` (+3 URL) и +3 гайда (сделано ранее в этой же сессии).
- См. память `armeringproffs-business-model.md` и STATUS.md (раздел «Решение по городам»).

## Не в scope этой сессии (пред-существующее)
- lint: 1 warning в `components/ArmeringsKalkylator.tsx` (useMemo natKey) — пред-существующий, поведение калькулятора не трогал.

---

# Follow-up раунд (2026-09-08, по проверке)

### FU-1 — Прод-кэш без ревалидации → правки не доезжали ✅
Проблема: страницы отдавались с `Cache-Control: s-maxage=31536000` (immutable, 1 год) → SEO-правки (в т.ч. footer со всеми 12 городами) не доходили до live-кэша; umeå+sundsvall оставались осиротевшими на проде.
- Добавлен `export const revalidate = 3600` на все 16 роутов (`app/**/page.tsx`).
- Build-вывод подтверждает `Revalidate 1h` на всех страницах → заголовок теперь `s-maxage=3600, stale-while-revalidate`.
- **AC:** адекватный revalidate + после ребилда все 12 городов получают входящие live (footer + контекстные ссылки) — ✅.

### FU-2 — Блог→city: контекстные ссылки вместо только-плашки ✅
Проблема: единственные blog→city ссылки были site-wide плашкой `CityLinks` (Google обесценивает boilerplate).
- В тело каждой из 17 статей добавлена топикарелевантная фраза с 2 контекстными `/armering/[stad]`-ссылками (плашка `CityLinks` оставлена).
- Распределение проверено: каждый город ≥2 входящих (umeå+sundsvall = 2, остальные = 3), каждая статья ≥1.
- **AC:** у каждой статьи ≥1 контекстная city-ссылка в теле; у каждого города ≥2 входящих — ✅.

### FU-3 — 2 фото продуктов → [OWNER]
- Механизм `product.image` готов; добавлены явные `TODO [OWNER]`-заглушки в `config/products.ts` (armeringskorgar, svetsad-armering) с точным путём/форматом.
- **[OWNER]:** прислать 2 горизонтальных фото ≥1600px → в `public/images/`, заполнить `image:`.

### FU-4 — Расширение городов/product×city → закрыто (owner-confirmed) ✅
- Отмена расширения городов подтверждена владельцем в интерактивной сессии 2026-09-08: на вопрос «что делаем с 12 городами» выбран ответ **«Оставить как есть, не расширять»** (anti-doorway, нет физического присутствия). product×city не строим по той же причине.
- **Пункт закрыт.** Поверхность растёт честно: `/tjanster` + гайды (не гео-фейк).

**Follow-up: 6 коммитов ранее + ISR + контекстные ссылки + фото-заглушки/worklog. build ✓, lint 0 errors.**

---

# Deploy-раунд (2026-09-08) — убрать серверный npm

Проблема: `deploy.yml` гонял `npm ci --omit=dev` НА СЕРВЕРЕ при каждом деплое → на shared-хостинге Inleed это спавнит слишком много процессов и бьётся в nproc (`cagefs_enter: Unable to fork`).

### D-1 — Сборка зависимостей на раннере, node_modules по rsync ✅
- Раннер: `npm ci` (full) → `npm run build` → `npm prune --omit=dev` (prod-only, но с optionalDeps = нативный SWC).
- Проверка артефактов на раннере: `.next/BUILD_ID`, `node_modules/next`, `@next/swc-linux-x64-gnu` (linux x64 = как сервер, glibc→gnu, sharp не нужен т.к. `images.unoptimized`).
- Rsync: `./` включая **node_modules** (убран из exclude), защищены `/.env` и `/tmp/` (restart-файл сервера).
- Server-ssh шаг: ТОЛЬКО `touch tmp/restart.txt` + manifest-проверка (`.next/BUILD_ID`, `node_modules/next`). **npm/build на сервере нет.**
- **AC:** server-ssh без npm/build ✅; node_modules в rsync ✅; smoke-test добавлен ✅.

### D-2 — Устойчивость к nproc/ssh-сбоям ✅
- `concurrency.cancel-in-progress: false` (деплои køируются, не убивают друг друга mid-rsync).
- Retry (`nick-fields/retry@v3`, 3 попытки) на rsync И на ssh-restart шагах.
- SSH-ключ через `webfactory/ssh-agent`.

### D-3 — Smoke-test свежей сборки live ✅
- Cache-bustнутый `curl "$SITE_URL/?cb=<run_id>-<i>"` (обходит s-maxage/ISR) в цикле (12×10с), grep BUILD_ID в HTML → падает если live не отдаёт новую сборку. BUILD_ID реально присутствует в prerendered HTML (проверено).

### D-4 — [OWNER]-заметка (drift) 
Вписана в `docs/DEPLOY.md` (шапка): DirectAdmin instances=1, idle-timeout (кастстарт норм), `pkill -f server.js` при зомби, не пушить залпом (køируется + retry, но всё же).

**YAML провалидирован (jobs: build-deploy). Код приложения не менялся → build/lint без изменений (0 errors).**
