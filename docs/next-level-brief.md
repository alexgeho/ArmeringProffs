# armeringproffs.se — персональный next-level бриф (SEO/growth)

> Заточен по аудиту 2026-09-08. Агент: прочти это + docs/STATUS.md +
> docs/SLAGPLAN-klippt-bockad-armering.md, веди docs/next-level-worklog.md. Автономно,
> owner-факт → [OWNER] + дальше. Стек: Next16 app router, бренд Armeringproffs (произв. AGRY OÜ).
> ⚠️ docs/PLAN.md, docs/keyword-mapping.md, README — СТАРЫЕ (описывают проект бетонных плит);
> истина в STATUS.md + SLAGPLAN.

**Что уже зрело (НЕ переделывай):** динамический sitemap/robots, уникальные meta/canonical/OG
(+ dynamic opengraph-image), schema (Organization/WebSite/Service/FAQ/Article/Breadcrumb),
уникальный контент на 5 продуктах + 12 городах, сильный калькулятор → offert (source=kalkylator),
GA4 (`G-730LFLXQCP`) только после consent, SMTP-лиды с загрузкой чертежа.

**Задачи (приоритет сверху):**
1. **Отзывы → звёзды.** `config/reviews.ts` = заглушки, схемы Review/AggregateRating НЕТ
   (правильно, чтобы не кормить Google фейком). Подготовь код-путь: как только владелец даёт
   реальные отзывы — эмить Review + AggregateRating. AC: схема появляется только для реальных
   отзывов; [OWNER: собрать реальные отзывы].
2. **Блог → city линки (разрыв графа).** 12 city-страниц получают 0 входящих из 14 статей
   блога. Добавь контекстные ссылки блог→`/armering/[stad]` + усиль блог→`/offert`. AC: у
   каждого города ≥2 входящих из блога, сирот нет.
3. **Расширь поверхность.** Мало страниц: 5 продуктов × 12 городов, нет product×city. Добавь
   города (Gävle/Karlstad/Luleå…) + оцени страницы `[product]-[stad]` под транзакционное
   «klippt och bockad armering {ort}». AC: +N городов, план/пилот product×city.
4. **Трекинг:** отметь `generate_lead` как conversion [OWNER: GA4 UI] + событие phone_click
   на клики по телефону. AC: phone_click шлётся, generate_lead помечен конверсией.
5. **Cleanup:** удали неиспользуемые `public/images/shutterstock_*.jpg` (10 МБ + 5.4 МБ);
   добавь 2 недостающих фото продуктов (armeringskorgar, svetsad-armering). Почини старые доки
   (PLAN/keyword-mapping/README) — сейчас про бетон. AC: мусорных JPG нет, у всех 5 продуктов фото.
6. **Ретаргет-пиксель Meta** consent-gated. ID → [OWNER].

**[OWNER] (главный рост):** Google Business Profile + каталоги (hitta/eniro/allabolag/cylex),
реальные отзывы (см. п.1), 2 фото продуктов.

**Верификация:** независимый агент-ревьюер проверит по AC + git diff (CONFIRMED/провал).
