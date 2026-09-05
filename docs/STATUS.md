# Armeringsproffs — статус проекта

> **Главная цель: ЛИДЫ** (offertförfrågningar на prefab-арматуру по всей Швеции).
> Всё ниже приоритизировано по влиянию на количество заявок.
> Обновлено: 2026-09-05.

---

## 🎯 Бизнес-цель
Сайт armeringproffs.se должен приносить **заявки на offert** (prefab-арматура: klippt & bockad,
armeringskorgar, svetsad armering/nät, kamstål, distanser) — модель offert/под заказ, не webshop.
Конкурент, которого обгоняем на инфо/prefab-запросах: **armeringdirekt.se**.

**Лид = заполненная offert-форма** (с bockningslista/ritning) или звонок.

---

## ✅ Сделано

### Сайт (Next.js 16, шведский контент)
- Полностью переделан из шаблона gjutabetongplatta → **Armeringsproffs / prefab armering / hela Sverige**.
- Страницы: `/` · `/produkter` + 5 категорий · `/leverans` · `/offert` · `/blogg` (7 armering-гайдов) · `/om-oss` · `/kontakt` · `/integritetspolicy`.
- **Offert-форма** с загрузкой ritning/bockningslista + поля mängd/leveransort.
- SEO: meta/canonical/OG на всех страницах, JSON-LD (Product/Service/FAQPage/Breadcrumb), FAQ, sitemap.xml, robots.txt, сгенерированный OG-образ.

### Визуал (сессия 2026-09-01)
- **SVG-иллюстрации** `components/illustrations.tsx` (бренд-палитра, вектор, лёгкие):
  hero-сетка, армокаркас, схема täckskikt/distanser, формы гибки, диаметры Ø6–Ø32, нахлёст сетки.
  Вставлены в главную (intro) и в 4 блог-статьи (новый блок `figure` в `config/blog.ts`).
- **Реальные фото (WebP, в `public/images/`, `next.config.ts` → `images.unoptimized`):**
  - hero главной — армокаркасы (`hero-armeringskorgar.webp`)
  - `/produkter/klippt-och-bockad` — гибка (`klippt-och-bockad-bockning.webp`)
  - `/produkter/armeringsjarn` — kamstål (`armeringsjarn-kamstal.webp`)
  - `/produkter/distanser` — сетка на дистанцерах (`distanser-armeringsnat.webp`)
  - `/leverans` — готовая плита (`leverans-betongplatta.webp`)
  - `/produkter` (обзор) — готовая плита (`produkter-betongplatta.webp`)
  - `/om-oss` — вязка сетки (`om-oss-armering-arbete.webp`)
  - Механизм: поле `product.image` в `config/products.ts` + `<Image>` в страницах.
- **Hero-форма — UX по best practices** (`components/ContactForm.tsx`, `app/api/lead/route.ts`):
  compact-версия = **Namn (необязательно)** · **Telefon / E-post (одно поле)** · Beskriv ditt projekt · загрузка ритнинга · согласие.
  Бэкенд раскладывает объединённый контакт по «@» (email→reply-to, иначе телефон); требуется только контакт.
  Полная форма (со всеми полями) осталась на `/offert` и `/kontakt`.
- **Hero:** тёмный градиент усилен слева (текст читается над фото); кнопка «Begär offert» скрыта на мобильном (форма и так под ней).

### Инфраструктура и деплой
- **GitHub:** github.com/alexgeho/ArmeringProffs (ветка `main`).
- **Хостинг:** Inleed Prime (DirectAdmin, prime6.inleed.net), пользователь `s154755`.
- **Node.js-приложение:** Node 20.20.2, Production, `server.js`, домен armeringproffs.se.
- **Автодеплой (CI/CD):** `.github/workflows/deploy.yml` — `git push` в `main` → сборка → rsync по SSH (порт **2020**) → рестарт Passenger. **Работает.**
- **Сайт живой на HTTPS:** https://armeringproffs.se (все маршруты 200).

### ✅ HTTPS (готово, сессия 2026-09-01)
- Let's Encrypt **wildcard `*.armeringproffs.se`** уже выпущен (действует до 2026-11-29).
- **Force HTTPS** сделан в коде через **`proxy.ts`** (в Next 16 это бывший `middleware`, переименован в `proxy`).
  Редирект 301 http→https по заголовку `X-Forwarded-Proto` (Passenger его шлёт корректно).
  ⚠️ Важно на будущее: редирект в `server.js` НЕ работает (Passenger не выполняет обёртку `createServer`) — только через `proxy.ts`.
- Проверено: `http://` → 301 → `https://` (200), петли нет.

### ✅ Аналитика (готово, сессия 2026-09-01)
- **Google Analytics 4** подключён: `gaId: "G-730LFLXQCP"` в `config/site.ts`, грузится через `next/script` (afterInteractive) в `app/layout.tsx`. Живой.
- ⚠️ Пока БЕЗ cookie-согласия (GDPR-баннер ещё нужен).

### ✅ Лид-магнит + контент + GSC (сессия 2026-09-05)
- **Google Search Console**: property `armeringproffs.se` подтверждена; **sitemap отправлена** (`/sitemap.xml`, 19+ URL). Статус «Couldn't fetch» — нормально сразу после отправки, подтянется. Данные индексации ещё «Processing» (сайт новый). Реальных ошибок пока нет.
- **Armeringskalkylator (лид-магнит)** — новая страница `/armeringskalkylator` (`app/armeringskalkylator/page.tsx` + client-компонент `components/ArmeringsKalkylator.tsx`). Вводишь размеры плиты → считает åtgång нят/кантъерн/дистансер → форма offert **уже префилл** беräкнингом (`source="kalkylator"`). Добавлена в nav (`Header.tsx`) и sitemap. SEO-контент + FAQ + JSON-LD.
- **GA4-событие конверсии**: `ContactForm.tsx` шлёт `gtag('event','generate_lead',{form_source})` при успешной отправке — закрывает P1 «offert skickad». (Осталось: пометить как conversion в GA4 UI.)
- **4 новые SEO-статьи** в `config/blog.ts` (блог 7 → 11): `armeringskorgar-palarmering`, `bestalla-armering` (commercial intent), `armering-till-garage`, `vad-kostar-armering` (pris intent). Все с внутренними ссылками на калькулятор/`/offert`/продукты + FAQ.
- ⚠️ **Ещё НЕ задеплоено** — нужен `git push` (см. лог ниже).

---

## 🚀 Следующие шаги (по приоритету для ЛИДОВ)

### 🔴 P0 — критично, без этого лиды теряются/не конвертируют
1. **SMTP — чтобы заявки доходили на почту.** ⚠️ Сейчас форма работает, но письма НЕ отправляются
   (SMTP не настроен → лид пишется только в лог сервера, см. `lib/mail.ts` / `app/api/lead/route.ts`). Нужно:
   - Создать ящик `info@armeringproffs.se` (DirectAdmin → E-mail Manager).
   - Добавить env (DirectAdmin → Setup Node.js App → Environment variables):
     `SMTP_HOST=mail.armeringproffs.se`, `SMTP_PORT=465`, `SMTP_SECURE=true`,
     `SMTP_USER=info@armeringproffs.se`, `SMTP_PASS=…`, `LEAD_TO`/`LEAD_FROM=info@armeringproffs.se`.
   - Restart приложения → тест-лид через /offert → проверить письмо.
2. **Реальные контакты** (сейчас плейсхолдеры в `config/site.ts` → бьют по доверию):
   телефон (`phone`/`phoneHref`), `orgNumber`, `address`. Видны в шапке/футере/CTA/JSON-LD.

### 🟠 P1 — включить поток трафика/заявок
3. ✅ **Google Search Console** — домен добавлен, **sitemap отправлена** (2026-09-05). Осталось: запросить
   индексацию главных URL (`/`, `/armeringskalkylator`, `/produkter/*`, новые статьи) через URL Inspection.
4. ✅ **GA4-событие «generate_lead»** — шлётся при успешной отправке формы (`ContactForm.tsx`).
   Осталось: пометить событие как **conversion** в GA4 UI + отслеживание кликов по телефону.
5. **Cookie-согласие (GDPR)** — GA ставит cookie; в ЕС нужен баннер. Вариант: грузить GA только после «Godkänn».
6. **Google Business Profile** — локальные/brand-запросы, звонки.
7. **Google Ads** — transaktions-запросы (*prefab armering*, *klippt och bockad armering*, *armeringskorgar*,
   *beställa armering*, *armeringsleverantör*). Landing = `/produkter/[slug]` или `/offert`.

### 🟡 P2 — доверие и органика (среднесрок)
8. **Фото на оставшиеся страницы:** `armeringskorgar` (сейчас переиспользован hero или SVG) и
   `svetsad-armering` (фото нет). ТЗ/ключевики для Shutterstock — ниже. Механизм готов (`product.image`).
9. **Реальные отзывы** — заменить плейсхолдеры в `config/reviews.ts` (помечены «exempel»).
10. **HSTS-заголовок** (опц.) — чтобы браузер сразу шёл по https (можно добавить в `proxy.ts`).
11. **Контент/SEO** — расширять armering-гайды, внутренняя перелинковка на /produkter и /offert.
12. **Favicon / реальное лого** вместо буквы «A».

---

## 🖼️ ТЗ по фото (Shutterstock) — что ещё нужно
Формат: горизонталь, ≥1600px, реальные «документальные» кадры (я ужимаю в WebP сам).
- **armeringskorgar:** `rebar cage`, `prefabricated rebar cage`, `pile/column reinforcement cage`; шв: `armeringskorg`, `pålarmering`, `pelararmering`.
- **svetsad armering / nät:** `welded wire mesh reinforcement`, `reinforcement mesh sheets stacked`; шв: `armeringsnät`, `svetsat armeringsnät`.
- Поиск английскими запросами, фильтр Orientation→Horizontal, тип Photo. Плюс «скандинавская» природа под «hela Sverige».

---

## 🔑 Ключевые доступы/факты (для деплоя)
- Репо: `github.com/alexgeho/ArmeringProffs`, ветка `main` → автодеплой.
- Inleed SSH: `s154755@prime6.inleed.net:2020` (ключ `~/.ssh/inleed_deploy`).
- App root: `/home/s154755/armeringproffs`, venv: `source /home/s154755/nodevenv/armeringproffs/20/bin/activate`.
- Docroot домена: `~/domains/armeringproffs.se/public_html`.
- Деплой: **`git push` в `main`** (или GitHub → Actions → «Deploy to Inleed» → Run workflow).
- Проверка деплоя локально: `gh run watch <id> --exit-status`.
- Локальный прогон прод-сборки: `npm run build` → `PORT=3111 node server.js`.

---

## 🧭 Продолжить в следующий раз (с чего начать)
1. [ ] **SMTP** → создать `info@armeringproffs.se` + env → лиды на почту (P0 #1).
2. [ ] **Реальные контакты** в `config/site.ts` (телефон/org.nr/адрес) (P0 #2).
3. [ ] **Google Search Console** + sitemap (сайт уже HTTPS).
4. [ ] **Событие «offert skickad»** в GA4 (в `ContactForm.tsx`).
5. [ ] Cookie-баннер для GA (GDPR).
6. [ ] Фото для `armeringskorgar` и `svetsad-armering` (см. ТЗ выше).

---

## 🗒️ Лог сессии 2026-09-05
- **GSC**: подтверждена property `armeringproffs.se`, отправлена `sitemap.xml`. Запрошена индексация (URL Inspection): `/armeringskalkylator`, `/blogg/vad-kostar-armering` (главная уже была indexed). Остальные новые URL подтянутся из sitemap.
- **Ещё контент (2-й заход)**: +2 статьи (`armering-till-plintar`, `armera-stodmur`) → блог 13 статей. Промо-блок калькулятора на `/blogg`.
- **Воронка/лид-магнит (3-й заход, юзер не за компом)**:
  - Скачиваемый **шаблон bockningslista** — `public/bockningslista-mall.csv` (text/csv), кнопка на `/offert`.
  - `KalkylatorPromo` секция на главной (после ProductsGrid).
  - `/offert`: 2 карточки-инструмента (калькулятор + скачать шаблон).
  - Продуктовые страницы (`produkter/[slug]`): CTA калькулятора в сайдбаре.
- **Локальные SEO-страницы (4-й заход)**: `app/armering/[slug]/page.tsx` — 12 городов (Stockholm, Göteborg, Malmö, Uppsala, Västerås, Örebro, Linköping, Helsingborg, Jönköping, Norrköping, Umeå, Sundsvall). Уникальный контент на город (län, landsdel, närliggande orter, локальный текст, локальный FAQ, Service JSON-LD areaServed=City). Данные в `config/cities.ts` (`cities[]` + `getCity`, `regions` производный). Перелинковка: футер и `/leverans` → страницы городов; города линкуют друг на друга. Добавлены в sitemap. Цель: запросы «armering [stad]».
- **Новое** (НЕ закоммичено/задеплоено на момент записи):
  - `app/armeringskalkylator/page.tsx` + `components/ArmeringsKalkylator.tsx` — лид-магнит-калькулятор.
  - `components/ContactForm.tsx` — проп `defaultMessage` (префилл) + GA4 `generate_lead`.
  - `components/Header.tsx` — пункт «Kalkylator» в nav.
  - `app/sitemap.ts` — добавлен `/armeringskalkylator`.
  - `config/blog.ts` — +4 статьи (armeringskorgar-palarmering, bestalla-armering, armering-till-garage, vad-kostar-armering) + ссылка на калькулятор в armering-atgang-per-m2.
  - `npm run build` — зелёный (32 страницы).
- **TODO деплой**: `git push` в `main` → автодеплой на Inleed.

## 🗒️ Лог сессии 2026-09-01 (последние коммиты)
- `732dee0` — SVG-иллюстрации (hero-mesh, армокаркас, täckskikt).
- `b21336e` — ещё SVG-схемы (гибка, диаметры Ø6–Ø32, нахлёст сетки).
- `0147bdc` — фото в hero + klippt-och-bockad; hero-форма урезана; `images.unoptimized`.
- `31068e8` — hero-форма UX: объединённое поле контакта, имя необязательно, контраст, скрытие кнопки на мобильном.
- `5f4478e` — фото на armeringsjarn, distanser, /leverans, /produkter, /om-oss.
- `b1c3129` — Google Analytics 4 (gtag через next/script).
- `8106a0f` — **HTTPS force-redirect через `proxy.ts`** (+ откат server.js, удалён debug-роут).
