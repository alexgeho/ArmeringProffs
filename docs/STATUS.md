# Armeringsproffs — статус проекта

> **Главная цель: ЛИДЫ** (offertförfrågningar на prefab-арматуру по всей Швеции).
> Всё ниже приоритизировано по влиянию на количество заявок.
> Обновлено: 2026-08-31.

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

### Инфраструктура и деплой
- **GitHub:** github.com/alexgeho/ArmeringProffs (ветка `main`).
- **Хостинг:** Inleed Prime (DirectAdmin, prime6.inleed.net), пользователь `s154755`.
- **Node.js-приложение** создано: Node 20.20.2, Production, `server.js`, домен armeringproffs.se.
- **Автодеплой (CI/CD):** `.github/workflows/deploy.yml` — `git push` в `main` → сборка на GitHub → rsync на Inleed по SSH (порт **2020**) → рестарт Passenger. **Проверено, работает.**
- GitHub Secrets настроены (host/user/port/key/app-dir/activate).
- **Сайт живой:** http://armeringproffs.se (все маршруты 200).

---

## ⏳ В процессе
- **HTTPS-сертификат** — Let's Encrypt (`armeringproffs.se` + `*.armeringproffs.se`) выпускается в фоне (ACME включён, provisioning in progress). Как выпустится → включить «Force SSL with https redirect».

---

## 🚀 Следующие шаги (по приоритету для ЛИДОВ)

### 🔴 P0 — критично, без этого лиды теряются/не конвертируют
1. **SMTP — чтобы заявки доходили на почту.** ⚠️ Сейчас форма работает, но письма НЕ отправляются
   (SMTP не настроен → лид пишется только в лог сервера). Нужно:
   - Создать ящик `info@armeringproffs.se` (DirectAdmin → E-mail Manager).
   - Добавить env в Node-приложении (DirectAdmin → Setup Node.js App → Environment variables):
     `SMTP_HOST=mail.armeringproffs.se`, `SMTP_PORT=465`, `SMTP_SECURE=true`,
     `SMTP_USER=info@armeringproffs.se`, `SMTP_PASS=…`, `LEAD_TO`/`LEAD_FROM=info@armeringproffs.se`.
   - Restart приложения → отправить тестовый лид через /offert → проверить, что письмо пришло.
2. **Реальные контакты** (сейчас плейсхолдеры → бьют по доверию и конверсии):
   - Телефон, org.nr, адрес → в `config/site.ts`. Телефон виден в шапке/футере/CTA.
3. **HTTPS + Force-SSL редирект** — «Not Secure» отпугивает и роняет ранжирование.

### 🟠 P1 — включить поток трафика/заявок
4. **Google Search Console** — добавить домен, отправить `sitemap.xml`, запросить индексацию главных URL
   (`/`, `/produkter/klippt-och-bockad`, `/produkter/armeringskorgar`, `/blogg/klippt-bockad-armering`).
5. **Google Business Profile** (företagsprofil) — локальные/brand-запросы, звонки напрямую.
6. **Аналитика + цели:** GA4 или Plausible + событие «offert skickad» (отслеживать конверсии форм и звонки).
7. **Google Ads** — быстрый источник лидов на транзакционных запросах
   (*prefab armering*, *klippt och bockad armering*, *armeringskorgar*, *beställa armering*, *armeringsleverantör*).
   Landing = соответствующая `/produkter/[slug]` или `/offert`.

### 🟡 P2 — доверие и органика (среднесрок)
8. **Реальные отзывы** — заменить плейсхолдеры в `config/reviews.ts` (сейчас помечены «exempel»).
9. **Кейсы/референсы** — фото готовых korgar/bockad, логотипы клиентов → доверие B2B.
10. **Контент/SEO** — расширять armering-гайды под target-запросы, внутренняя перелинковка на /produkter и /offert.
11. **Микро-конверсии** — «Ladda upp bockningslista», клик-туел-звонок, sticky CTA на мобильном.
12. **Favicon/бренд-иконка**, реальное лого вместо буквы «A».

---

## 🔑 Ключевые доступы/факты (для деплоя)
- Репо: `github.com/alexgeho/ArmeringProffs`, ветка `main` → автодеплой.
- Inleed SSH: `s154755@prime6.inleed.net:2020` (ключ `~/.ssh/inleed_deploy`).
- App root: `/home/s154755/armeringproffs`, venv: `source /home/s154755/nodevenv/armeringproffs/20/bin/activate`.
- Docroot домена: `~/domains/armeringproffs.se/public_html` (заглушка переименована в `index.html.inleed-placeholder`).
- Деплой обновлений: **просто `git push` в `main`** (или GitHub → Actions → «Deploy to Inleed» → Run workflow).

---

## 🧭 Быстрый чек-лист «сделать сейчас»
- [ ] Создать `info@armeringproffs.se` + прописать SMTP env → **лиды на почту**
- [ ] Вписать реальные телефон / org.nr / адрес в `config/site.ts`
- [ ] Дождаться HTTPS-сертификата → включить Force-SSL
- [ ] Google Search Console + отправить sitemap
- [ ] Поставить аналитику + цель «offert skickad»
- [ ] (Опц.) Запустить Google Ads на transaktions-запросы
