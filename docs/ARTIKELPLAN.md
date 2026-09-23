# План статей (по Keyword Planner, 2026-09-23)

Источник: 8 выгрузок Google Ads Keyword Planner (`~/Downloads/Keyword Stats 2026-09-23 at 21_*.csv`), Швеция,
период сен 2025 – авг 2026, 162 запроса.

> ⚠️ Без активных расходов Keyword Planner показывает **диапазоны**, а не точные числа:
> `500` = 100–1 000 в мес, `50` = 10–100 в мес. «Unknown» = слишком мало данных (не значит 0).
> Точнее — по показам в нашем Google Search Console.

## Главные выводы
- Крупные запросы (100–1 000/мес): **armeringsbyglar**, **u bygel / ubygel**, **bocka armeringsjärn**,
  **armeringskorg**, **armeringsjärn 12 mm**, **armeringsstål**.
- Больше всего «хвостов» у кластеров **skarvlängd / överlapp**, **plintar**, **platta på mark**, **bockningsradie**.
- `kantbalksbygel` +900 % за 3 мес — растущий запрос.
- Высокая ставка CPC (коммерческий спрос): **lyftögla betong** (1,1–2,3 $), **kantbalksbygel**, **armeringsbyglar**, **armeringskorg**.
- По 3D/bågbockning, vindkraft, ringar, bockningslista-мам — данных нет → хватает продуктовых страниц, статьи не нужны (bockningslista растёт по GSC — её усиливаем отдельно).
- `u bygel` смешан: половина запросов — крепёж (u bygel m8, thule, packline). В статье — только арматурный смысл.

## 🆕 Новые статьи (по приоритету)

| # | Статья (рабочий заголовок, sv) | Главный запрос | Кластер (дополнительные) | Ведёт на |
|---|---|---|---|---|
| 1 | Armeringsbyglar – alla typer, mått och när de används | armeringsbyglar (100–1K) | u bygel, ubygel, bygel armering, b/c/k/n/s bygel armering, färdiga armeringsbyglar, armeringsjärn byglar, kantbalksbygel | /produkter/byglar-och-hakar, /tjanster/bockningslista |
| 2 | Bocka armeringsjärn – för hand, med verktyg och rätt bockningsradie | bocka armeringsjärn (100–1K) | bocka armering, armeringsjärn bockning, bocka armeringsjärn för hand, verktyg bocka armeringsjärn, bockningsradie armering (+tabell), minsta bockningsradie | /produkter/klippt-och-bockad («låt oss bocka åt dig») |
| 3 | Skarvlängd och överlapp för armering – tabell Ø8–Ø25 | skarvlängd armering | beräkna skarvlängd, skarvlängd 10/12/16 mm, skarvlängder, överlapp armeringsjärn, överlapp/överlappning armeringsnät, hur mycket överlapp | /armeringskalkylator |
| 4 | Armeringsstål B500B – dimensioner, vikt och pris | armeringsstål (100–1K) + armeringsjärn 12 mm (100–1K) | armerings stål, armeringsstål 6/10/12 mm, 12 mm armeringsjärn, armeringsjärn 6 meter, ss 212540, vikt per meter, pris armeringsstål | /produkter/armeringsjarn, /armeringskalkylator#vikt-per-meter |
| 5 | Kantbalksbygel – mått, form och montage | kantbalksbygel (↑900 %) | — | /produkter/byglar-och-hakar |
| 6 | Lyftöglor i betong – dimension, placering och säkerhet | lyftögla betong | lyftöglor betong, lyftbygel | /produkter/lyftoglor |

## ♻️ Обновить существующие статьи (ключи уже близко)

| Статья | Добавить запросы |
|---|---|
| /blogg/armeringskorgar-palarmering | **armeringskorg** (100–1K), armeringskorgar, färdiga armeringskorgar, prefabricerad armering → в H1/заголовки |
| /blogg/armeringsjarn-dimensioner | armeringsjärn 12 mm, armeringsjärn 6 meter, vikt armeringsjärn per meter (или слить со статьёй #4) |
| /blogg/armering-till-plintar | armering plint(ar), armera betongplint, gjuta plintar armering / **utan armering** (отдельный раздел-ответ), armeringsjärn plintar |
| /blogg/armera-stodmur | stödmur armering, armera stödmur, gjuta stödmur armering |
| /blogg/armering-till-betongplatta | armera betongplatta, armering (av) platta på mark, armering grundplatta, armeringsnät platta på mark, armeringsritning platta på mark, armera grund |
| /blogg/armering-till-garage | armeringsnät garageplatta |
| /blogg/distanser-tackskikt-armering | täckskikt armering (betong) |
| /blogg/vad-kostar-armering + /blogg/bestalla-armering | köpa armering, köp armeringsjärn, armering pris per kg, armeringsstål pris, kamstål pris, armeringsleverantör |

## Не делать
- Статьи «armeringsstål byggmax / bauhaus / biltema», «armeringsbyglar byggmax» — брендовые запросы конкурентов.
- Отдельные статьи под Stockholm/Göteborg — есть страницы городов (решение владельца: города не расширяем).

## Порядок работы
1. Статьи 1–2 (самые большие запросы, прямо про наш продукт).
2. Обновление armeringskorgar-palarmering под «armeringskorg».
3. Статья 3 (много хвостов + ссылка на калькулятор).
4. Статьи 4–6, затем остальные обновления.
После публикации — Request Indexing в GSC и бамп `UPDATED` в `app/sitemap.ts`.
