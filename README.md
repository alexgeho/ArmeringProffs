# Agry Entreprenad AB — сайт (gjuta betongplatta, Stockholm)

Next.js 16 (App Router) + TypeScript + Tailwind v4. Локальный SEO-лендинг подрядчика
по заливке бетонных плит / фундаментов в Стокгольме. Тот же концерн / VPS, что и byggexp.se.

## Быстрый старт

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # прод-сборка
npm run start      # запуск прод-сборки
```

## Где что лежит (весь контент — в `config/`)

| Файл | Что редактировать |
|------|-------------------|
| `config/site.ts` | **Данные компании: телефон, email, org.nr, адрес, домен.** Всё помечено `TODO` |
| `config/services.ts` | Услуги (страницы `/tjanster/[slug]`): тексты, мета, «detta ingår» |
| `config/cities.ts` | Районы/города для гео-страниц `/omraden/[slug]` |
| `config/faq.ts` | Вопросы-ответы (идут в FAQ-схему JSON-LD) |
| `config/blog.ts` | Статьи блога `/blogg/[slug]` |
| `config/reviews.ts` | Отзывы — **сейчас плейсхолдеры, заменить на реальные** |

Изменил `config/*` → пересобрал (`npm run build`) → sitemap, меню, футер и разметка
обновляются автоматически.

## ⚠️ Что заполнить перед запуском (чек-лист)

- [ ] `config/site.ts` — реальные телефон, email, org.nr, адрес, домен (`url`)
- [ ] `config/reviews.ts` — реальные отзывы (не публиковать вымышленные)
- [ ] Ключевики из Google Ads → распределить по услугам/городам/статьям
- [ ] Форма заявки: отправка на email готова (SMTP через nodemailer) — заполнить SMTP-переменные из `.env.example` на VPS. Без них заявки просто логируются в консоль.
- [ ] Картинки: `public/og.jpg` (1200×630) и `public/logo.png` для соцсетей/разметки
- [ ] Проверить/дополнить `app/integritetspolicy/page.tsx`

## SEO, что уже сделано

- `lang="sv"`, пер-страничные `<title>`/`meta`/canonical/Open Graph
- JSON-LD: LocalBusiness (GeneralContractor), Service, FAQPage, Article, BreadcrumbList
- Динамические `sitemap.xml` и `robots.txt`
- Статическая генерация всех страниц (SSG) — быстро и хорошо для индексации
- Гео-страницы по районам Стокгольма (локальное SEO)
- Семантический HTML, доступность (focus-visible, aria)

## Документация

- `docs/PLAN.md` — живой SEO-план и прогресс (конкуренты, беклог статей, статус).
- `docs/DEPLOY.md` — плейбук миграции на хостинг + чек-лист индексации в GSC.
- `docs/keyword-mapping.md` — карта ключевиков: Google Ads + все 19 статей блога.

## Структура страниц (~56 маршрутов)

```
/                         главная
/tjanster                 список услуг
/tjanster/[slug]          6 услуг
/priser                   страница цен (ценовой кластер)
/omraden                  список районов
/omraden/[slug]           16 гео-страниц
/blogg  /blogg/[slug]     блог (19 статей: кластеры «Betong & grund» + «Armering»)
/om-oss  /kontakt  /offert  /integritetspolicy
/api/lead                 приём заявок (POST → email)
```

## Деплой на VPS (DirectAdmin + Node, как byggexp.se)

Домен: **gjutabetongplatta.se**. Приложение использует API-роут (форма заявки),
поэтому нужен Node-рантайм — запускаем через PM2 и проксируем на него веб-сервер
DirectAdmin (Apache/LiteSpeed). Node-приложение живёт **не** в `public_html`, а в
отдельной папке; `public_html` используется только для reverse-proxy.

### 1. Запуск Node-приложения (SSH)

```bash
# по SSH, вне public_html (напр. ~/apps/gjutabetongplatta)
git clone https://github.com/alexgeho/Gjutabetongplatta.git
cd Gjutabetongplatta
npm ci
npm run build

# порт выбрать свободный (byggexp скорее всего на 3000 → берём 3001)
PORT=3001 pm2 start "npm run start" --name gjutabetongplatta
pm2 save
pm2 startup     # автозапуск после перезагрузки VPS (выполнить выведенную команду)
```

SMTP для формы — задать переменные из `.env.example` (в `.env` в папке проекта,
либо в экосистемном конфиге PM2). Без них заявки логируются, письма не уходят.

### 2. Reverse proxy на домене

DirectAdmin по умолчанию отдаёт статику из `public_html`. Нужно направить
gjutabetongplatta.se на `127.0.0.1:3001`. **Проще всего — повторить ровно ту же
схему, что уже настроена для byggexp.se** (тот же VPS/панель).

**Apache** (Custom HTTPD Configurations в DirectAdmin для домена, секция `CUSTOM`):

```apache
ProxyRequests Off
ProxyPreserveHost On
ProxyPass / http://127.0.0.1:3001/
ProxyPassReverse / http://127.0.0.1:3001/
```

**OpenLiteSpeed/LiteSpeed** — добавить External App (Web Server → тип Web Server,
адрес `127.0.0.1:3001`) и Context `/` с этим handler'ом.

HTTPS — выпустить Let's Encrypt через панель DirectAdmin для домена.

### Обновление сайта

```bash
cd ~/apps/gjutabetongplatta/Gjutabetongplatta
git pull
npm ci
npm run build
pm2 restart gjutabetongplatta
```
