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
