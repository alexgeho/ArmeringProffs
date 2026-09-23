# Armeringsproffs — статус проекта (handoff)

> ## ▶️ HANDOFF — НАЧНИ ОТСЮДА (последняя сессия: 2026-09-20, GSC)
>
> **KLART denna session:** 3 реальных фикса в sitemap/ссылках (коммит `88d5faf`, задеплоено) +
> 10 × Request Indexing в GSC + sitemap переотправлен (47→48 URL). Детали — в «🗒️ Лог сессии 2026-09-20» ниже.
>
> **🔜 NÄSTA STEG (по порядку, можно брать холодным стартом):**
> 1. **Дослать Request Indexing на 17 URL** — квота Google ~10-11/сутки, 20.09 исчерпана.
>    Точный список и процесс — в «🟢 Что могу сделать САМ» ниже. Кода не трогать, только GSC UI.
> 2. **Проверить результат** (не раньше 23-27.09): GSC → Indexing → Pages. Ждём рост «indexed»
>    (база 20.09: **28 indexed / 29 not indexed**) и что `lastmod` начал подтягивать краул.
> 3. **Усилить `/blogg/bockningslista-sa-gor-du/`** — GSC сам подсветил её как страницу со всплеском
>    показов. Единственный живой трафик-сигнал на сайте (всего 19 кликов). Контент + перелинковка.
>
> **🆕 2026-09-23 — анимированные «стальные» сцены на услугах (ТЗ `docs/tz-animationer-tjanster.md`):**
> ресёрч (NN/g и др.): картинка должна ОБЪЯСНЯТЬ, анимация — 1 раз при скролле, без scrolljacking/циклов;
> Recraft — только эскиз композиции, финал — ручной SVG. Сделана сцена A «bockningslista → bygel» на
> `/tjanster/bockningslista` (`components/steel-scenes.tsx` + `components/AnimatedScene.tsx`, CSS в `globals.css`,
> десктоп + отдельная мобильная раскладка). Дальше по плану: D (montage/плита), C (маршрут Эстония→паром→Швеция, УТП срок),
> Эскизы Recraft — у владельца на Desktop.
> ✅ Сцена A заменена на **кликабельную bockningslista** (`components/BockningslistaExplorer.tsx`): 6 позиций
> (rak/vinkel/bygel/U/Z/krok), клик → форма рисуется в стали с размерами. Геометрия параметрическая
> (`lib/rebar-shapes.ts`: форма + мм → изометрический path + размерные линии) — Recraft для этого НЕ нужен.
> Попутно: фикс горизонтального скролла на мобиле (hero-grid `grid-cols-1`) на tjanster/produkter/armering/offert/kontakt.
> ✅ Затем (тот же день) заменено на **все типформы по буквам** стандарта «Förteckning över bockning av stänger 2A, 1979»
> (A…XX + Special, 30 шт) — `components/BockningsformerExplorer.tsx` + `lib/bending-shapes.ts` (плоские — вид спереди,
> как в стандарте; SX/O/X/XX — изометрия). Рисунки свои, из стандарта только коды и буквы размеров.
> На `/tjanster/bockningslista` **тёмный hero с формой убран по просьбе владельца** → светлый H1+intro + инструмент +
> CTA «Skicka din bockningslista – begär offert» (/offert). Остальные tjanster-страницы — с прежним hero.
> 🔜 Шаг 2 (обсудить): посетитель вводит свои позиции (код + мм) → видит форму → отправляет список в offert.
>
> **⚠️ Öppna frågor / väntar på [OWNER]:**
> - **Проверить, что лид-мейл реально доходит** (`/offert` с вложением → `offert@armeringproffs.se`). P0, висит с 08.09.
> - **GA4:** пометить `generate_lead` как conversion (только через UI GA4).
> - **Реальные отзывы** в `config/reviews.ts` + `verified: true` → схема звёзд включится сама.
> - Решение по городам: **НЕ расширяем** (владелец, 08.09). Новые города не предлагать.
>
> **⚠️ При правке контента** — бампни соответствующую константу `UPDATED` в `app/sitemap.ts`,
> иначе `lastmod` начнёт врать и Google перестанет ему верить.

---

> **Главная цель: ЛИДЫ** (offertförfrågningar на prefab-арматуру по всей Швеции).
> **Лид = заполненная offert-форма** (с bockningslista/ritning) или звонок.
> Модель: **offert/под заказ, НЕ webshop, БЕЗ фиксированных цен** (решение владельца 2026-09-05).
> Обновлено: **2026-09-20** (сессия GSC: 3 фикса в коде + 10 Request Indexing). Сайт живой: **https://armeringproffs.se**.
>
> ⚙️ **АРХИТЕКТУРА (с 2026-09-08): ПОЛНОСТЬЮ СТАТИЧЕСКАЯ** (Next `output: 'export'` → `out/`) + PHP-мейлер.
> НЕТ Node/Passenger, НЕТ API-роутов, НЕТ `server.js`/`proxy.ts`. Форма постит на `public/sendmail.php`.
> Деплой: `git push` → `.github/workflows/deploy.yml` (сборка `out/` на раннере → rsync в докрут → smoke).
> Подробности + [OWNER]-омстелл → `docs/DEPLOY.md`. Детальный лог сессии → `docs/next-level-worklog.md`.
>
> 📄 Отдельный боевой план по запросу «klippt (och) bockad armering» → `docs/SLAGPLAN-klippt-bockad-armering.md`.

---

## 💡 Бизнес-модель / стратегический инсайт (от владельца, 2026-09-08)
Схема, под которую сайт уже построен (шведский бренд принимает лиды → эстонское юрлицо AGRY OÜ производит/поставляет):
- **Спрос высокий** — «заказов столько, что людей не хватает».
- **Дешёвое производство в Эстонии** — помещение с краном до ~2000 €/мес.
- **Логистика решена** — паром **каждый день Палдиски → Швеция**.
- **Приём заказов на шведскую фирму/бренд** (armeringproffs.se), производство в Эстонии.
- **Ключ к победе: попасть и в ЦЕНУ, и в СРОК доставки.**

**Референс/конкурент: `rebar.one` = Nordic Rebar** (эст. Reg.nr 14492018, Harjumaa):
B500B, cut&bent (d8–32), сварные корзины балок/колонн (до 15000×2500×1500 мм), крюки; редкие станки
**MEP36 Multiradius** («только 4 таких в Европе»); импорт из Turkey/Spain/Portugal → порт Muuga.
Языки сайта: EE/EN/**FI** — целятся на Финляндию, **цен и сроков на сайте НЕ показывают**. → **Швеция у них слабо охвачена = наше окно.**

**➡️ Вывод для сайта:** УТП «быстрый срок доставки» (ежедневный паром из Балтики) надо продавать ЯВНО —
в hero и на продуктовых. Сейчас акцент только на offert, скорость доставки не подчёркнута.

---

## 🧭 ПРОДОЛЖИТЬ ЗДЕСЬ (следующие шаги)

### 🔴 P0 — блокирует лиды, нужен ВЛАДЕЛЕЦ (я сделать не могу)
1. ⚠️ **Почта лидов — ПЕРЕЕХАЛА на PHP-мейлер 2026-09-08** (при миграции на статику).
   Форма → `public/sendmail.php` (PHP `mail()`, honeypot + валидация + вложение чертежа). Получатель/отправитель
   `offert@armeringproffs.se` (захардкожено в `sendmail.php`). Старый SMTP/Node-путь (`lib/mail.ts`,
   `app/api/lead`) УДАЛЁН. Endpoint проверен: POST без данных → 400 (PHP исполняется). 
   **➡️ [OWNER] финальная проверка:** заполни `/offert` с тестовым вложением и убедись, что письмо ДОШЛО.
   Если нет — проверь в DirectAdmin, что PHP `mail()` включён и `upload_max_filesize`/`post_max_size` ≥12 МБ.
2. **Реальные контакты** — частично готово 2026-09-06:
   - ✅ Юр.данные вписаны: `AGRY OÜ · Reg.nr 14785246 · VAT EE102510841` (эстонское юрлицо за брендом
     «Armeringsproffs»). В футере/контактах/интеграполиси + JSON-LD (`legalName`/`vatID`).
   - ✅ Адрес **скрыт по решению владельца** (юрлицо в Эстонии, сервис — вся Швеция). Фейк «Gatuadress 1»
     убран. Если захотят показать шведский адрес — заполнить `address.street/zip/city` в `config/site.ts`.
   - ✅ **Телефон вписан 2026-09-06:** `+46 72 858 99 75` (`tel:+46728589975`). Виден в шапке/CTA/футере/`/kontakt`
     + в JSON-LD (`telephone`).

**➡️ P0 ПОЛНОСТЬЮ ЗАКРЫТ. Сайт боевой по лидам.** Дальше — P1 (трафик/доверие).

### 🟠 P1 — трафик/доверие (в основном нужны твои данные)
3. **Google Business Profile** — бесплатно, локальные/«nära mig»-запросы, звонки. Нужны адрес/телефон + верификация.
4. **Каталоги** (hitta.se, eniro, allabolag, cylex, byggkataloger) — бесплатный авторитет/ссылки. Нужны данные бизнеса.
   → *Я могу подготовить GBP+каталоги-кит (готовый текст + список) с плейсхолдерами — попроси.*
5. **Реальные отзывы → звёзды.** Заменить плейсхолдеры в `config/reviews.ts` на настоящие + пометить
   `verified: true`. Тогда Review/AggregateRating-схема включится САМА (код-путь готов 2026-09-08:
   `reviewsSchema` в `lib/jsonld.tsx`, `verifiedReviews` в `config/reviews.ts`). Сейчас 0 verified → 0 схемы.
6. **GA4** — пометить `generate_lead` как **conversion** в интерфейсе GA4 (⚠️ только UI, кодом нельзя).
   ✅ `phone_click` — СДЕЛАНО (`components/PhoneClickTracker.tsx`, все `tel:`-ссылки, no-op без consent).
7. **Фото** для `armeringskorgar` и `svetsad-armering` (механизм готов: `product.image` в `config/products.ts`;
   TODO-заглушки с точным путём/форматом уже в файле; ТЗ по фото ниже).
8. **Meta Pixel** (retargeting) — вписать pixel-ID в `config/site.ts → metaPixelId` (код-путь + consent-gating готовы).

### 🟢 Что могу сделать САМ в след. раз (без твоих данных)
- ⏭️ **ДОСЛАТЬ Request Indexing в GSC (продолжить с этого!)** — 2026-09-20 квота снова исчерпана после 11 запросов.
  **Осталось 17 URL** (все со слэшем): города **uppsala, helsingborg, jonkoping, linkoping, norrkoping, umea,
  sundsvall**; блог **/blogg/, armering-till-garage, armering-till-pool, armeringsjarn-dimensioner,
  armeringsnat-storlekar-och-matt**; **kontakt, leverans, om-oss, omdomen, vanliga-fragor**.
  Процесс: GSC → строка «Inspect any URL» сверху → вставить URL со слэшем → Enter → **REQUEST INDEXING**.
  NB: «unknown to Google» запускает live-тест (~40-60 с), «Discovered» — быстрее. Лимит ~10-11/сутки.
- **Проверить индексацию в GSC** (через 3-7 дней) — подхватил ли Google 10 досланных 20.09 + заработал ли `lastmod`.
  ⚠️ URL с **trailing slash** (`/armering/stockholm/`); сервер отдаёт 301 без-слэш→со-слэш (проверено curl 2026-09-16), canonical/og:url корректны.
- Подготовить **GBP + каталоги-кит** (документ).
- Favicon / реальное лого (сейчас AGRY-эмблема).
- Ещё контент-гайды (кластеры: platta på mark grund, Eurokod/BBR täckskikt-krav, betongtrappa расширить).
- Обратные blog→city уже есть (контекстные ссылки в теле статей); при желании — усилить хаб-статью.

### ❄️ Заморожено (решение владельца 2026-09-05)
- **Google Ads** — пока не запускаем.
- **Google Shopping / индикативные «från»-цены** — не показываем цены → Shopping/Merchant отпадает.
  (Поэтому `offers` убран из разметки; если передумаем — вернуть валидные `price`, см. слагплан.)

---

## ✅ Сделано

### Сайт (Next.js 16, React 19, Tailwind 4, шведский контент)
- Страницы: `/` · `/produkter` + 5 категорий · **`/tjanster` + 2 услуги** · `/leverans` · `/offert` · `/kontakt`
  · `/om-oss` · `/integritetspolicy` · **`/armeringskalkylator`** · **`/vanliga-fragor`** · **`/omdomen`**
  · **`/armering/[stad]` × 12** · **`/blogg` — 17 гайдов**. (URL c trailing slash — статика.)
- **Offert-форма** (`components/ContactForm.tsx`): compact (hero) = имя(опц.) + Telefon/E-post(одно поле) + описание + загрузка ritning + согласие + honeypot; полная — на `/offert`/`/kontakt`. Бэкенд теперь **`public/sendmail.php`** (PHP mail(), не Node).
- SEO: уникальные meta/canonical/OG на всех, JSON-LD (Service/FAQPage/Breadcrumb/Organization/**WebSite**; Review/AggregateRating — код-путь, ждёт verified-отзывов), sitemap.xml (**~47 URL**), robots.txt, сгенерированный OG-образ, `metadataBase`.

### E-E-A-T / trust (2026-09-06, по мотивам аудита bygghub.nu)
- **Cookie-баннер (GDPR)** `components/CookieConsent.tsx`: GA грузится ТОЛЬКО после «Godkänn» (выбор в localStorage `ap-cookie-consent`). Из `app/layout.tsx` убрана безусловная загрузка GA. Форма шлёт `generate_lead` через `gtag?.()` — при «Avböj» безопасно no-op.
- **Отдельная страница FAQ** `/vanliga-fragor` (`app/vanliga-fragor/page.tsx`): расширил `config/faq.ts` 6→14 вопросов; на главной теперь тизер 6 + «Se alla vanliga frågor». FAQPage-схема на отдельной странице (полная), на главной — по тизеру.
- **Отдельная страница отзывов** `/omdomen` (`app/omdomen/page.tsx`): рендерит `config/reviews.ts`; т.к. отзывы пока «exempel» — честная пометка + БЕЗ Review/Rating-разметки (не кормим Google фейком). Ссылка «Läs fler omdömen» из секции на главной.
- **Футер**: год теперь динамический (`new Date().getFullYear()`), добавлен ряд ссылок (Om oss · Omdömen · Vanliga frågor · Kontakt · Integritetspolicy). Обе новые страницы в sitemap.
- Проверка ключевиков (глава 10 аудита): title/description/H1 уже содержат целевые запросы — правок не потребовалось.

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

### Инфраструктура / HTTPS / аналитика (обновлено 2026-09-08 — статика)
- **Хостинг:** статические файлы `out/` в докруте на Inleed (LiteSpeed/Apache), БЕЗ Node. Node.js-приложение
  в DirectAdmin **удалено** владельцем 2026-09-08 (сняло nproc/`cagefs_enter: Unable to fork`).
- **Автодеплой:** `git push`→`main` → `deploy.yml`: сборка `out/` на раннере → guard (secret `INLEED_DOCROOT`) →
  rsync `out/` (вкл. `.htaccess`+`sendmail.php`) в докрут → smoke-test (`scripts/smoke.sh`). Прогон #59 зелёный.
  Секреты в GitHub: `INLEED_SSH_KEY/HOST/USER/PORT` + **`INLEED_DOCROOT`** (`domains/armeringproffs.se/public_html`).
- **HTTPS + кэш:** `public/.htaccess` (force-HTTPS, DirectoryIndex, 404→/404.html, `ForceType` для OG-png,
  cache: hashed-assets immutable / HTML must-revalidate). `proxy.ts`/`server.js` больше НЕТ.
- **Свежесть:** обеспечивается полным ребилдом на деплое + HTML `must-revalidate` в `.htaccess` (ISR не нужен, убран).
- **GA4** `gaId: "G-730LFLXQCP"` + **Meta Pixel** (`metaPixelId`, пусто=выкл) — грузятся ТОЛЬКО после cookie-consent.

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
- Inleed SSH: `s154755@prime6.inleed.net:2020` (ключ `~/.ssh/inleed_deploy`). Используется rsync-деплоем.
- **Node.js-приложение УДАЛЕНО** (2026-09-08) — сайт статический. venv/App root больше не актуальны.
- **Docroot: `~/domains/armeringproffs.se/public_html`** (= GitHub secret `INLEED_DOCROOT` без `~/`: `domains/armeringproffs.se/public_html`). Сюда rsync-ится `out/`.
- Деплой: `git push` в `main` (или Actions → Run workflow). Проверка: `gh run watch <id> --exit-status` (или UI).
- Локальный прогон: `npm run build` → статика в `out/`; предпросмотр `npx serve out`. (Нет server.js/Node.)

---

## 🗒️ Лог сессии 2026-09-20 (GSC: 3 фикса в коде + 10 Request Indexing)
**Задача:** «GSC — иди и чини/улучшай».

**Динамика с 16.09 — растёт само:** было 24 indexed / 33 not indexed → стало **28 indexed / 29 not indexed**.
Причин «not indexed» 4 → 3: **«Duplicate, Google chose different canonical» ушла в 0** — прогноз прошлой
сессии подтвердился, Google сам переключился на trailing-slash версию. Чинить было нечего и правда.
Остались: Discovered 27 (очередь краулинга), Page with redirect 1 (http→https, норма), Crawled-not-indexed 1
(`/opengraph-image`, норма). **Настоящих ошибок по-прежнему нет.**

**🔧 НО нашёл 3 реальных дефекта в коде (коммит `88d5faf`, задеплоено):**
1. **`<lastmod>` отсутствовал у 30 из 47 URL в sitemap** — был только у блога (`p.updated ?? p.date`).
   Продуктовые, услуги, города и ВСЕ основные страницы — т.е. ровно те категории, что висят в «Discovered» —
   не слали Google никакого сигнала свежести. Проставлен по группам контента **честными датами**
   (`UPDATED` в `app/sitemap.ts`), НЕ датой билда: Google игнорирует lastmod, который считает недостоверным
   (иначе каждый деплой утверждал бы, что изменились все страницы). ⚠️ Константы надо бампать при правке контента.
2. **`/integritetspolicy/` вообще не было в sitemap**, хотя она линкуется с каждой формы и из cookie-баннера.
3. **22 из 51 страницы линковали `<a href="/integritetspolicy">` БЕЗ слэша** → 301 на каждый клик/краул.
   Причина: обычный `<a>` не нормализуется `trailingSlash: true` (в отличие от `next/link`). Исправлено в
   `components/ContactForm.tsx` (форма стоит почти на всех страницах) и `app/offert/page.tsx`.
   Пустая трата crawl budget на сайте, у которого проблема ровно в том, что Google жалеет на него краул.
   Проверено в `out/`: 48 loc, 0 без lastmod, 0 оставшихся бесслэшевых ссылок. Живой sitemap подтверждён curl.

**✅ Request Indexing — 10 URL** (приоритет по решению владельца: негео-рычаги, не города):
`/produkter/klippt-och-bockad/`, `/tjanster/`, `/tjanster/armeringsmontage/`, `/tjanster/bockningslista/`,
`/produkter/armeringskorgar/`, `/produkter/armeringsjarn/`, `/produkter/distanser/`, `/offert/`,
`/blogg/vad-kostar-armering/`, `/blogg/armering-atgang-per-m2/`.
На 11-м (`/kontakt/`) — **Quota Exceeded**. Остаток списка — в 🟢-разделе выше.

**✅ Sitemap переотправлен** после деплоя → «Success», **Discovered pages 47 → 48** (новая страница подхвачена сразу).

**Наблюдение:** у части URL инспекция пишет «No referring sitemaps detected», хотя URL в sitemap и у соседних
URL ситемап определяется нормально — это неконсистентность данных Google для незакрауленных URL, не баг конфига.

**Трафик:** Performance показывает **19 кликов** всего, заметный рост 15-18.09. GSC сам подсветил
`/blogg/bockningslista-sa-gor-du/` как страницу с всплеском показов — кандидат на усиление контентом/перелинковкой.

## 🗒️ Лог сессии 2026-09-16 (GSC-индексация — код НЕ трогали)
**Задача:** посмотреть отчёт индексации в Google Search Console и «поправить ошибки».
**Вывод: настоящих ошибок в коде НЕТ.** Робот прошёл: 24 indexed / 33 not indexed. Разобрал все 4 категории «not indexed»:
- **Page with redirect** (1) = `http://…/` → это force-HTTPS редирект. Норма.
- **Crawled – not indexed** (1) = `/opengraph-image` → динамич. OG-картинка, ей и не надо индексироваться. Норма.
- **Duplicate, Google chose different canonical** (1) = `/armeringskalkylator/` → исторический артефакт миграции 08.09:
  Google держится за без-слэш версию (знал её до миграции). Проверено `curl`: сервер отдаёт **301** без-слэш→со-слэш,
  а `<link canonical>`/`og:url` в HTML указывают на со-слэш. Т.е. **чинить нечего**, Google сам переключится.
- **Discovered – currently not indexed** (30) = города + блог/продукты, у всех **Last crawled = N/A** → это очередь
  краулинга Google для молодого сайта, НЕ баг. Лечится авторитетом (GBP/каталоги/ссылки) + временем, не кодом.

**Сделано (Request Indexing → priority crawl queue):** `/armeringskalkylator/`, `/armering/stockholm/`, `/armering/goteborg/`.
**Попутно:** при проверке `/armering/malmo/` и `/armering/uppsala/` — **malmö уже проиндексирован** (Google подхватывает сам).
**Стоп-фактор:** после 3 запросов Google выдал **Quota Exceeded** (дневной лимит). Остальное дослать завтра (см. 🟢-раздел выше).
**Код/деплой:** НЕ менялись. Работа только в GSC UI (браузер).

## 🗒️ Лог сессии 2026-09-08 (всё задеплоено)
**Бизнес-инсайт владельца** зафиксирован (Эстония→паром→шведский бренд, УТП цена+срок, конкурент rebar.one=Nordic Rebar) — см. раздел «💡 Бизнес-модель» выше.
**Доставка как УТП** на главной: hero-буллет «Korta leveranstider – hela Sverige» + USP-бар «Korta leveranstider / …vi håller både pris och leveranstid».
**SEO-архитектура — фикс внутренней перелинковки** (по карте: было 4 разрыва между кластерами):
1. Главная → блог: новый блок `GuidesTeaser` (4 кураторские гайды + «Se alla guider»). Раньше блог линковался только из хедера.
2. Город → блог: `GuidesTeaser` на всех 12 стр. городов (кластер city↔blog был разорван, 0 ссылок).
3. Продукт → города: новый `CityLinks` на продуктовых (12 городов + /leverans). Раньше продукты не линковали города.
4. Footer: `cities.slice(0,10)` → все 12 — Umeå/Sundsvall больше не сироты.
5. `WebSite` JSON-LD глобально (`websiteSchema`, publisher→#business) — якорь бренда в графе сущностей.
Все компоненты переиспользуемые (`components/sections.tsx`). `npm run build` — ✓ compiled.

**Решение по городам (владелец 2026-09-08):** НЕ расширять. Причина — нет физического присутствия в городах, «Armering i [ort]» без присутствия = риск doorway + ощущается как накрутка. Существующие 12 честно про доставку («vi levererar till…», адрес скрыт) → оставляем как есть, но фокус SEO уводим на честные негео-рычаги (продуктовые/национальные запросы + услуги + контент).

**Сервис-страницы (новый тип интента):** config-driven раздел `/tjanster` (зеркало `/produkter`):
- `config/services.ts` + `app/tjanster/page.tsx` (хаб) + `app/tjanster/[slug]/page.tsx`.
- 2 услуги: **armeringsmontage** (кладём/вяжем арматуру на месте) и **bockningslista** (составляем bockningslista из ritning + скачивание mall). Обе честные — реальная «full cykel»-услуга.
- Каждая: hero+форма, body, aside (includes + скачивание mall для bockningslista + калькулятор), related guides, Process, CityLinks, FAQ + Service/FAQPage/Breadcrumb JSON-LD.
- Связки: Header nav «Tjänster», Footer (колонка Produkter → подсписок Tjänster), sitemap (+3 URL).

**+3 гайда** (`config/blog.ts`, блог 14→17): `bockningslista-sa-gor-du`, `armering-till-betongtrappa`,
`armering-till-betonggolv` — с внутр. ссылками на новые услуги/продукты/калькулятор.

**Follow-up (проверка ревьюера) — тоже сделано 2026-09-08:**
- **Отзывы → звёзды (код-путь):** `reviewsSchema` + `verified`-флаг; схема только для настоящих отзывов ([OWNER] дать отзывы).
- **Блог→city контекстные ссылки:** в тело КАЖДОЙ из 17 статей — топикарелевантная фраза с 2 `/armering/[ort]`
  ссылками (плашка `CityLinks` оставлена). Покрытие: каждый город ≥2 входящих (Umeå/Sundsvall = 2).
- **Трекинг:** `PhoneClickTracker` (GA4 `phone_click`), Meta Pixel consent-gated (`metaPixelId`).
- **Cleanup:** удалены неиспользуемые `shutterstock_*.jpg` (−15 МБ); README переписан; deprecation-баннеры на
  старых доках (PLAN/keyword-mapping — они про СТАРЫЙ проект бетонных плит, НЕ актуальны).

**🏗️ БОЛЬШАЯ МИГРАЦИЯ 2026-09-08: Node/Passenger → полностью СТАТИКА + PHP-мейлер** (эталон villatak):
- `next.config`: `output:'export'` + `trailingSlash:true` + `images.unoptimized`. Удалены `server.js`,
  `proxy.ts`, `app/api/lead`, `lib/mail.ts`, ISR `revalidate` (16 стр.). `force-static` на og-image/robots/sitemap.
- Форма → `public/sendmail.php` (honeypot+валидация+вложение). `public/.htaccess` (HTTPS/404/cache/OG ForceType).
- `deploy.yml` переписан 2 раза: сначала (node_modules на раннере, без серверного npm), затем под СТАТИКУ
  (rsync `out/`, без ssh/npm/server, guard на `INLEED_DOCROOT`, retry, `cancel-in-progress:false`, `scripts/smoke.sh`).
- Владелец удалил Node.js-app в DirectAdmin; секрет `INLEED_DOCROOT` задан. **Прогон #59 зелёный, сайт live как статика.**
  Проверено live: 12 городов, страницы 200, `/omdomen` без AggregateRating, `sendmail.php` POST→400 (PHP работает).
- ⚠️ **Единственное незакрытое:** [OWNER] проверить, что письмо с формы реально ДОХОДИТ (см. P0 #1 выше).

📎 **Детальный пошаговый лог всех follow-up/deploy-раундов → `docs/next-level-worklog.md`.**

## 🗒️ Лог сессии 2026-09-06 (всё задеплоено)
По мотивам E-E-A-T-аудита (bygghub.nu): cookie-баннер GDPR (GA только после согласия) + отдельная FAQ-страница `/vanliga-fragor` (6→14 вопросов) + отдельная страница отзывов `/omdomen` + динамический год и ссылки в футере + обе страницы в sitemap. ⚠️ Панель Inleed выдавала `cagefs_enter: Unable to fork` (лимиты PMEM/процессов тарифа) — владелец написал в поддержку. NB: bygghub.nu на том же хосте `prime6.inleed.net` — аудит нашёл у него нестабильный SSL; проверить наш сертификат когда починят панель.

## 🗒️ Лог сессии 2026-09-05 (всё задеплоено)
Калькулятор-лид-магнит + шаблон bockningslista + GA4 `generate_lead` + **7 новых статей** (блог 7→14) +
**12 локальных страниц городов** + воронка калькулятора везде + GSC sitemap/индексация +
боевой план `SLAGPLAN-klippt-bockad-armering.md` + on-page-буст под «klippt och bockad» +
SEO-аудит с фиксами (Service-схема, скрыт фейк-NAP, anti-doorway).

## 🗒️ Лог сессии 2026-09-01
HTTPS force-redirect (`proxy.ts`), GA4, SVG-иллюстрации, реальные фото (WebP), hero-форма UX.
