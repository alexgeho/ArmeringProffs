# Armeringsproffs — статус проекта (handoff)

> **Главная цель: ЛИДЫ** (offertförfrågningar на prefab-арматуру по всей Швеции).
> **Лид = заполненная offert-форма** (с bockningslista/ritning) или звонок.
> Модель: **offert/под заказ, НЕ webshop, БЕЗ фиксированных цен** (решение владельца 2026-09-05).
> Обновлено: **2026-09-05**. Сайт живой: **https://armeringproffs.se**.
>
> 📄 Отдельный боевой план по запросу «klippt (och) bockad armering» → `docs/SLAGPLAN-klippt-bockad-armering.md`.

---

## 🧭 ПРОДОЛЖИТЬ ЗДЕСЬ (следующие шаги)

### 🔴 P0 — блокирует лиды, нужен ВЛАДЕЛЕЦ (я сделать не могу)
1. **SMTP — заявки НЕ доходят на почту, только пишутся в лог сервера** (`lib/mail.ts`, `app/api/lead/route.ts`).
   Это блокер №1 — форма работает, но письма не уходят. Нужно в DirectAdmin (Inleed):
   - Создать ящик `info@armeringproffs.se` (E-mail Manager).
   - Setup Node.js App → Environment variables:
     `SMTP_HOST=mail.armeringproffs.se`, `SMTP_PORT=465`, `SMTP_SECURE=true`,
     `SMTP_USER=info@armeringproffs.se`, `SMTP_PASS=…`, `LEAD_TO=info@armeringproffs.se`, `LEAD_FROM=info@armeringproffs.se`.
   - Restart приложения → тест-лид через `/offert` → проверить письмо.
2. **Реальные контакты** в `config/site.ts`: `phone`/`phoneHref`, `orgNumber`, `address`.
   Сейчас плейсхолдеры. Как впишешь реальные — телефон/адрес **автоматически** вернутся и в JSON-LD
   (сейчас скрыты, чтобы не отдавать Google фейковый NAP). Видны в шапке/футере/CTA.

### 🟠 P1 — трафик/доверие (в основном нужны твои данные)
3. **Google Business Profile** — бесплатно, локальные/«nära mig»-запросы, звонки. Нужны адрес/телефон + верификация.
4. **Каталоги** (hitta.se, eniro, allabolag, cylex, byggkataloger) — бесплатный авторитет/ссылки. Нужны данные бизнеса.
   → *Я могу подготовить GBP+каталоги-кит (готовый текст + список) с плейсхолдерами — попроси.*
5. **Реальные отзывы** — заменить плейсхолдеры в `config/reviews.ts` (помечены «exempel»).
6. **GA4** — пометить событие `generate_lead` как **conversion** в интерфейсе GA4 + добавить отслеживание кликов по телефону.
7. **Cookie-согласие (GDPR)** — GA ставит cookie; в ЕС нужен баннер (вариант: грузить GA только после «Godkänn»).
8. **Фото** для `armeringskorgar` и `svetsad-armering` (механизм готов: `product.image` в `config/products.ts`; ТЗ ниже).

### 🟢 Что могу сделать САМ в след. раз (без твоих данных)
- **Проверить индексацию в GSC** (через пару дней) — реально ли индексируются калькулятор/статьи/города; подстроить.
- Подготовить **GBP + каталоги-кит** (документ).
- Favicon / реальное лого вместо буквы «A».
- Ещё контент/перелинковка (отдача убывает — основы уже сделаны).
- (опц.) HSTS-заголовок — ⚠️ осторожно, `proxy.ts` — критичный https-редирект, не ломать.

### ❄️ Заморожено (решение владельца 2026-09-05)
- **Google Ads** — пока не запускаем.
- **Google Shopping / индикативные «från»-цены** — не показываем цены → Shopping/Merchant отпадает.
  (Поэтому `offers` убран из разметки; если передумаем — вернуть валидные `price`, см. слагплан.)

---

## ✅ Сделано

### Сайт (Next.js 16, React 19, Tailwind 4, шведский контент)
- Страницы: `/` · `/produkter` + 5 категорий · `/leverans` · `/offert` · `/kontakt` · `/om-oss` · `/integritetspolicy`
  · **`/armeringskalkylator`** · **`/armering/[stad]` × 12** · **`/blogg` — 14 гайдов**.
- **Offert-форма** (`components/ContactForm.tsx`): compact (hero) = имя(опц.) + Telefon/E-post(одно поле) + описание + загрузка ritning + согласие; полная — на `/offert`/`/kontakt`. Бэкенд `app/api/lead/route.ts`.
- SEO: уникальные meta/canonical/OG на всех, JSON-LD (Service/FAQPage/Breadcrumb/Organization), sitemap.xml (**39 URL**), robots.txt, сгенерированный OG-образ, `metadataBase`.

### Лид-магниты и воронка (2026-09-05)
- **Armeringskalkylator** `/armeringskalkylator` (`app/armeringskalkylator/page.tsx` + `components/ArmeringsKalkylator.tsx`):
  размеры плиты → åtgång нят/кантъерн/дистансер → **форма offert префилл расчётом** (`defaultMessage`, `source="kalkylator"`).
  Выведен: nav (`Header.tsx`), промо на главной (`KalkylatorPromo` в `sections.tsx`), `/offert`, сайдбар продуктовых, промо на `/blogg`.
- **Шаблон bockningslista** — `public/bockningslista-mall.csv` (скачивание с `/offert`).
- **GA4 конверсия**: `ContactForm.tsx` шлёт `gtag('event','generate_lead',{form_source})` при успешной отправке.

### Контент — блог 14 статей (`config/blog.ts`)
armering-till-betongplatta, armeringsnat-storlekar-och-matt, armeringsjarn-dimensioner, armering-till-pool,
armering-atgang-per-m2, distanser-tackskikt-armering, klippt-bockad-armering, **armeringskorgar-palarmering**,
**bestalla-armering**, **armering-till-garage**, **vad-kostar-armering**, **armering-till-plintar**, **armera-stodmur**,
**armeringsnat-eller-armeringsjarn**. Все с внутренними ссылками на калькулятор/`/offert`/продукты + FAQ.

### Локальные SEO-страницы — 12 городов (`app/armering/[slug]/page.tsx`, `config/cities.ts`)
Stockholm, Göteborg, Malmö, Uppsala, Västerås, Örebro, Linköping, Helsingborg, Jönköping, Norrköping, Umeå, Sundsvall.
Уникальный контент на город: `angle`, `intro2`, `sectors` (användningsområden), `nearby`, локальный FAQ, Service JSON-LD (areaServed=City).
Перелинковка: футер + `/leverans` → города; города → соседние по landsdel + хаб. Anti-doorway сделан (см. SEO-аудит).

### Инфраструктура / HTTPS / аналитика
- **Автодеплой:** `git push` в `main` → GitHub Actions `.github/workflows/deploy.yml` → rsync SSH (порт 2020) → рестарт Passenger. Работает.
- **HTTPS:** Let's Encrypt wildcard (до 2026-11-29). Force-redirect в **`proxy.ts`** (Next 16, бывший middleware) по `X-Forwarded-Proto`.
  ⚠️ Редирект в `server.js` НЕ работает (Passenger не выполняет `createServer`) — только через `proxy.ts`.
- **GA4** подключён: `gaId: "G-730LFLXQCP"` (`config/site.ts`) через `next/script` в `app/layout.tsx`.

### Google Search Console (2026-09-05)
- Property `armeringproffs.se` подтверждена. **Sitemap отправлена** (39 URL).
- Запрошена индексация (URL Inspection): `/armeringskalkylator`, `/blogg/vad-kostar-armering`, `/blogg/bestalla-armering`
  (главная и `/produkter/klippt-och-bockad` уже были indexed). ⚠️ **Дневной лимит ручных запросов исчерпан** — остальное подтянется из sitemap.

---

## 🔎 SEO-аудит (2026-09-05, проверено на живом сайте)
- ✅ robots.txt (allow, sitemap, host); sitemap 39 URL, 0 дублей; канонические на всех; 404 работает; HTTPS; по 1 H1; уникальные title/description; `robots: index,follow`; OG; metadataBase.
- 🔧 **Исправлено:** невалидная Product-разметка (`offers` без цены) → на продуктовых **Service** (`lib/jsonld.tsx serviceSchema`); из Organization-разметки убран фейковый телефон-плейсхолдер (`localBusinessSchema` скрывает плейсхолдеры).
- 🔧 **Anti-doorway** для 12 городов: добавлены `intro2` + `sectors` (уникальны на город), сокращён in-content список городов до соседних. Проходит тест «убери название города → уникальное остаётся».
- ℹ️ **FAQ rich results убраны Google 7 мая 2026** — FAQPage больше не даёт сниппетов (но валидна, оставили; полезна для AI).
- ⚠️ `images.unoptimized: true` (`next.config.ts`) — компромисс шаред-хостинга; образа заранее WebP, CLS ок. Для max CWV — вынести на CDN.

---

## 🖼️ ТЗ по фото (Shutterstock) — что ещё нужно
Формат: горизонталь, ≥1600px, реальные «документальные» кадры (я ужимаю в WebP). Механизм: `product.image` в `config/products.ts`.
- **armeringskorgar:** `rebar cage`, `prefabricated rebar cage`, `pile/column reinforcement cage`; шв: `armeringskorg`, `pålarmering`.
- **svetsad armering / nät:** `welded wire mesh reinforcement`, `reinforcement mesh sheets stacked`; шв: `armeringsnät`, `svetsat armeringsnät`.

---

## 🔑 Ключевые доступы/факты
- Репо: `github.com/alexgeho/ArmeringProffs`, ветка `main` → автодеплой. Коммит+пуш разрешён без спроса (я делаю сам).
- Inleed SSH: `s154755@prime6.inleed.net:2020` (ключ `~/.ssh/inleed_deploy`).
- App root: `/home/s154755/armeringproffs`; venv: `source /home/s154755/nodevenv/armeringproffs/20/bin/activate`; Node 20.20.2.
- Docroot: `~/domains/armeringproffs.se/public_html`.
- Деплой: `git push` в `main`. Проверка: `gh run watch <id> --exit-status`.
- Локальный прогон: `npm run build` → `PORT=3111 node server.js` (⚠️ curl с `-H 'X-Forwarded-Proto: https'`, иначе 301; убивай старый сервер `pkill -f server.js` перед новым запуском).

---

## 🗒️ Лог сессии 2026-09-05 (всё задеплоено)
Калькулятор-лид-магнит + шаблон bockningslista + GA4 `generate_lead` + **7 новых статей** (блог 7→14) +
**12 локальных страниц городов** + воронка калькулятора везде + GSC sitemap/индексация +
боевой план `SLAGPLAN-klippt-bockad-armering.md` + on-page-буст под «klippt och bockad» +
SEO-аудит с фиксами (Service-схема, скрыт фейк-NAP, anti-doorway).

## 🗒️ Лог сессии 2026-09-01
HTTPS force-redirect (`proxy.ts`), GA4, SVG-иллюстрации, реальные фото (WebP), hero-форма UX.
