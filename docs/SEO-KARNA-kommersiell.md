# Коммерческое SEO-ядро + gap-анализ vs конкуренты (2026-10-09)

> Цель: запросы с **коммерческим/транзакционным** интентом (заказ, поставка, offert, поставщик) → лиды.
> Ключи — на шведском (google.se), пояснения — по-русски.
>
> **Методика и ограничения:** обход сайтов конкурентов (WebFetch: навигация, title, H1, структура категорий) +
> WebSearch (сервис ищет из US-локации → **реальные позиции google.se не проверены**, состав выдачи — ориентир).
> Спрос (low/med/high) — экспертная оценка на базе `docs/ARTIKELPLAN.md` (Keyword Planner 23.09) и GSC
> (`docs/next-level-worklog.md`), а не точные объёмы. Для точности: Keyword Planner «Start with a website» по доменам ниже.
>
> Шкала спроса (≈ в мес, вся Швеция): **high** ≥ 1 000 · **med** 100–1 000 · **low** < 100.
> Интент: **T** = транзакционный (заказать/купить/доставка/offert) · **CI** = commercial investigation (сравнить, цена, поставщик).

---

## 1. Конкуренты — что у них есть и под что заточены

| Конкурент | Модель | Сильные коммерческие страницы | Что важно для нас |
|---|---|---|---|
| **armeringdirekt.se** | webshop с ценами + Shopping; offert > 50 000 kr | title главной «Armering till platta & husgrund»; категории `/armeringsnat/` (5150, 6150, 9150/12150 fingerskarv), `/armeringsjarn/`, `/klippt-bockad-armering/` (title «Böja & Klippa armering – Bockad armeringsjärn», kantbalksbyglar/B/N/C-byglar с ценами), `/svetsad-armering/`, `/distansprodukter/` (distanskloss, distanslist, nätstöd, speedies), `/najtrad/`, `/poolarmering/`, `/armeringsverktyg/` | Главный конкурент по B2C/малому B2B. Frakt 249–2 999 kr («från 1 249»), **Norrland — только по запросу**. Блог — 3 поста (слабый). |
| **7-steelservice.se** (= Celsa Steel Service, Halmstad) | B2B-каталог, без цен | `/armering/` («Armering med mervärde och direkt leverans»), ILF – klippt och bockat, rakstål, coils, **rullarmering**, armeringsbalk, **rostfri armering**; nät: lagernät, **meganät, skarvnät, specialnät, väggnät, vägnät**; prefab: **prefabricerade armeringskorgar, bygelkorgar & kantbyglar, pålfundament/pålplintar, hissgropar, balkhörn, vindkraftsfundament**; tjänster: **förteckning (specning)**, färgsorterad armering, 3D; страницы по аудиториям (entreprenörer, prefabindustri, konstruktör) | Самая полная B2B-структура. Нет страниц городов, нет гайдов для частников. |
| **begroup.se** | дистрибьютор стали | `/produkter/armering` (kamstål, armeringsnät NK500AB-W, slätt, distanser, galvat kantbeslag), **«Inläggningsfärdig armering (ILF)»**, «Armeringsfabriken» | Термин **ILF** — стандарт B2B-рынка. |
| **stenastal.se** | B2B, «Beställ online / Få en offert» | `/armering/` → armeringsstål, armeringsnät, armeringscoil, armeringstillbehör, **ILF – iläggningsfärdigt armeringsstål** | ILF срок 10–12 раб. дней (по слагплану). |
| **tibnor.se** | B2B | «Inläggningsfärdig armering ILF», kamstål, armeringsnät, fingerskarvnät; PDF «typbeteckning bockning» | Norden + Baltikum. |
| **gothiaarmering.se** (Göteborg) | ILF-специалист, offert | **klippt-och-bockad-armering**, ILF, rakstål, armeringsnät, **armeringskorgar**, **armeringsförteckning**; «kostnadsfri offert», «korta leveranstider» | Прямой конкурент по Göteborg. |
| **brommastal.se** (Spånga/Stockholm) | stålcenter, offert | armeringsstål K500C-T, armeringsnät, **rostfri armering**; «**Stockholms billigaste armering**», «Prisgaranti i Stockholm», fast frakt 1 500 kr | Прямой конкурент по Stockholm. |
| **swestal.se** (Nybro) | локальный B2B | title «**Köp armering lokalt i Östra Småland och Blekinge**»; kamstål, nät, fingerskarvnät; ILF 10–14 дней; **только företag** | Пример гео-коммерческого title. |
| **armeco.se** | specning (ILF-спецификации) | одна страница: «speca armering», «armeringsspecare» | Почти нет SEO. |
| **thuresson.se** | бренд Villakorg® | «Grund & Armering», **Villakorg®** гайд, «från ritning till leverans» | Термин **villakorg** = votarmering к platta på mark. |
| **rebar.one** | EE/FI/EN, **нет шведской версии** | — | В Швеции органически отсутствует (подтверждено). |
| **Bauhaus / Hornbach / Byggmax / Biltema / Jula / Ahlsell** | розница с ценами | armeringsnät (kvarts/halv/helnät 5150/6150/8150), kamstål 2 м/6 м, villakorg, distanser (Eurospacers, speedies), najtråd | Доминируют по «X pris», «köpa X» в мелком объёме. **Туда не лезем** (без webshop не выиграть). |

**Вывод:** рынок делится на (а) розницу/webshop с ценами (B2C, мелкие объёмы) и (б) B2B-заводы ILF без контента для
частников/малых фирм. Наше окно — **средний сегмент**: «по ритнингу/спецификации, доставка по всей Швеции вкл. Norrland,
offert быстро» + сильный контент. Пробелы: **armeringsnät как отдельная коммерческая страница, ILF-терминология,
grund-/husgrundsarmering, pålarmering, B2B-лендинг «armeringsleverantör»**.

---

## 2. Коммерческое ядро — кластеры

Цель-страница: существующая или **NEW**. ⚠️ = риск каннибализации.

### K1. Klippt & bockad / ILF (главный денежный кластер)
- **Главный:** klippt och bockad armering — T — **med**
- Варианты: bockad armering · klippt bockat armering · kapad och bockad armering · **ILF armering** · **inläggningsfärdig armering** · iläggningsfärdig armering · beställa bockad armering · bockade armeringsjärn · armering efter ritning
- Цель: `/produkter/klippt-och-bockad` (ILF/inläggningsfärdig **отсутствуют на сайте полностью** → добавить)
- ⚠️ `/blogg/klippt-bockad-armering` (title «Bockning av armering – klippt & bockad efter lista») — по GSC «bockad armering» уходит в блог, продукт поз. 27. Блог держать на «bockning av armering / vad är», продукт — на «klippt och bockad armering / ILF / beställa».
- **Данные владельца (Keyword Planner SE, 12 мес):** bocka armeringsjärn **500/мес, конкуренция High** · по 50/мес: bockad armering, armering bockning, armerings bockning, armeringsjärn bockning, bocka armering, bocka armeringsjärn för hand / verktyg, bockade armeringsjärn, färdig bockad armering · «armering prefab» — нет данных.
- **Раздел интента внутри кластера:**
  - «bocka armeringsjärn (för hand/verktyg)», «bocka armering» = DIY (сам гну) → `/blogg/bocka-armeringsjarn` (владеет), сильный CTA «Låt oss bocka – skicka listan». High-конкуренция по CPC = коммерческий подтекст → блок-CTA обязателен.
  - «bockad armering», «färdig bockad armering», «bockade armeringsjärn», «armering(s) bockning», «armeringsjärn bockning» = заказ → **`/produkter/klippt-och-bockad`** (вписать в H1/H2/FAQ: «Färdig bockad armering», «Bockning av armeringsjärn efter lista»).

### K2. Armeringsnät (head term, сейчас без коммерческой страницы)
- **Главный:** armeringsnät — T/CI — **high**
- Варианты: armeringsnät 6150 · armeringsnät 5150 · armeringsnät 8150 · armeringsnät pris · köpa armeringsnät · armeringsnät leverans · helnät / halvnät / kvartsnät · fingerskarvnät / skarvnät · armeringsnät B500A/NK500AB-W · armeringsnät till platta
- Цель: **NEW `/produkter/armeringsnat`** (сейчас только `/produkter/svetsad-armering` = «specialnät»)
- ⚠️ `/blogg/armeringsnat-storlekar-och-matt` (info «storlekar & mått») и `/blogg/armeringsnat-eller-armeringsjarn`. Разделить: блог = «vilket nät/mått», продукт = «beställ nät + leverans, lagernät/specialnät/fingerskarv».

### K3. Armeringsjärn / kamstål / armeringsstål
- **Главный:** armeringsjärn — T/CI — **high** (info-смешанный)
- Варианты: kamstål B500B · armeringsstål · armeringsjärn 12 mm · armeringsjärn 6 meter / 12 meter · köpa armeringsjärn · armeringsjärn pris · kamstål pris per kg · armeringsjärn leverans · rakstål · armeringsstål K500C-T
- Цель: `/produkter/armeringsjarn` (+ `/produkter/armering-i-ringar` для coils/ringar)
- ⚠️ тройной риск: `/blogg/armeringsjarn-dimensioner`, `/blogg/armeringsstal` (B500B, vikt per meter), `/blogg/vad-kostar-armering`. В GSC `produkter/armeringsjarn` был Duplicate. Продукт должен владеть «köpa/leverans/6 m/12 m/rakstål», блоги — «dimensioner», «vikt per meter».

### K4. Byglar (крупный, уже частично покрыт)
- **Главный:** armeringsbyglar — T/CI — **med** (100–1K)
- Варианты: färdiga armeringsbyglar · u bygel armering · kantbalksbygel · b-bygel / n-bygel / c-bygel · bygelkorg · armeringsbyglar köpa · byglar armering pris
- Цель: `/produkter/byglar-och-hakar`
- ⚠️ `/blogg/armeringsbyglar` (533 visn.) и `/blogg/kantbalksbygel` сильнее продукта. Продукт: title с «Armeringsbyglar – färdiga byglar efter mått» + перелинковка из блога на «beställ».

### K5. Grund-/husgrundsarmering (villa, platta på mark) — пакет
- **Главный:** armering till platta på mark — T/CI — **med**
- Варианты: armering husgrund · armering till platta · armering grundplatta · **villakorg** · kantbalksarmering · votarmering · armeringspaket platta · armering till garageplatta (beställa) · armering bottenplatta
- Цель: **NEW `/produkter/grundarmering`** (пакет: nät + kantbalksbyglar/villakorg + distanser + najtråd по ритнингу/площади → offert)
- ⚠️ `/blogg/armering-till-betongplatta` (pelare), `/blogg/armering-till-garage`, `/blogg/kantbalksbygel`. Блоги = «hur armerar man», продукт = «beställ komplett armering till din platta». Armeringdirekt ставит это в title главной — сигнал спроса.

### K6. Armeringskorgar / pålarmering / prefab
- **Главный:** armeringskorgar — T — **med** (armeringskorg 100–1K)
- Варианты: armeringskorg · prefabricerade armeringskorgar · balkkorg · pelarkorg · **pålarmering** · pålkorg · armeringskorg påle · pålfundament armering · plintkorg · prefab armering
- Цель: `/produkter/armeringskorgar` + **NEW `/produkter/palarmering`** (pålkorgar, pålfundament, plintkorgar)
- ⚠️ **подтверждённая каннибализация** (GSC): «armeringskorgar» → `/blogg/armeringskorgar-palarmering` поз. 7,5 vs продукт поз. 21,9. Блог переименовать в инфо («Armeringskorg – typer och användning»), убрать «armeringskorgar» из title блога, плюральную форму отдать продукту; «pålarmering» — на новую страницу.

### K7. Distanser & tillbehör
- **Главный:** armeringsdistanser — T — **low–med**
- Варианты: distansklossar · distanskloss armering · nätstöd · armeringsstolar · markdistans · speedies · distanslist · najtråd · najtråd armering · armeringstillbehör
- Цель: `/produkter/distanser` (title «Distanser & armeringstillbehör – täckskikt» → добавить distansklossar / nätstöd / najtråd)
- ⚠️ `/blogg/distanser-tackskikt-armering` (täckskikt). Розница доминирует по «köpa» — ценность только как допродажа к заказу.

### K8. Armeringsspec / armeringsspecifikation från ritning (услуга: делаем спецификацию по чертежу клиента)
- **Главный:** armeringsspecifikation — T/CI — **low** (GSC 3 мес: armeringsspecifikation 55, armeringsspec 36, armeringsritning 38 показов, 0 кликов)
- Варианты: armeringsspec · armeringsspecifikation från ritning · armeringsritning · armeringsförteckning · förteckning armering · specning armering · speca armering · armeringsspecar / armeringsspecare (KP: нет данных) · ILF-specning · armeringsspecifikation pris
- **Где жить: NEW `/tjanster/armeringsspecifikation`** — «Armeringsspecifikation från ritning»: клиент шлёт konstruktionsritning (PDF/DWG/IFC) → мы делаем спецификацию/bockningslista → offert на изготовление (спец. бесплатно/зачитывается при заказе — [OWNER] подтвердить).
  Почему отдельно, а не на `/tjanster/bockningslista`: там **инструмент** «собери список сам» (интент: у меня есть размеры), а здесь **услуга** «у меня только чертёж». Разные интенты → одна страница не ловит оба (сейчас 0 кликов при показах). `/tjanster/bockningslista` оставить на «bockningslista armering / mall / typformer», с блоком «Har du bara ritning? → armeringsspecifikation».
- ⚠️ `/blogg/bockningslista-sa-gor-du` — сейчас title «Bockningslista (armeringsspecifikation) + mall» и раздел про armeringsspecifikation → после запуска новой страницы убрать «armeringsspecifikation» из title блога, оставить ссылку. `/tjanster/bockningslista` (metaTitle «Bockningslista & armeringsspecifikation») → убрать «armeringsspecifikation» из title.
- Термины **armeringsförteckning / specning** отсутствуют на сайте — у Gothia (`/vara-tjanster/armeringsforteckning/`), 7 Steel (`/tjanster/forteckning-av-armering/`), Armeco («speca armering», «armeringsspecare») есть.

### K9. Поставщик / B2B
- **Главный:** armeringsleverantör — CI — **low–med**
- Варианты: armering leverantör · armering grossist · armering till byggföretag · armering entreprenör · armering prefabindustri · armeringsfabrik · stålleverantör armering · armering företag
- Цель: **NEW** B2B-лендинг (напр. `/for-foretag` или `/armeringsleverantor`) — сейчас «armeringsleverantör» только в тексте
- ⚠️ нет.

### K10. Цена / offert
- **Главный:** armering pris — CI — **med**
- Варианты: vad kostar armering · armering pris per kg · armeringsjärn pris · kamstål pris · armeringsnät pris · armering offert · offert armering · bockad armering pris
- Цель: `/blogg/vad-kostar-armering` (+ `/offert`)
- ⚠️ `/blogg/bestalla-armering` пересекается по «beställa/köpa». Без публичных цен — честные **ориентиры/факторы цены** (kr/kg-диапазон рынка, frakt по объёму) — это и есть наше конкурентное преимущество vs «från 1 249 kr frakt».

### K11. Гео (существующие 12 городов)
- **Главный:** armering Stockholm — T — **low–med**
- Варианты: armering Göteborg · armering Malmö · armeringsjärn Stockholm · armeringsnät Göteborg · klippt och bockad armering Stockholm · armering leverans Norrland/Umeå/Sundsvall
- Цель: `/armering/[stad]`
- Конкуренты локальные: Bromma Stål (Stockholm, «billigaste armering», фикс 1 500 kr), Gothia (Göteborg), Swestål (Småland). Города 87 % одинаковые — нужен уникальный контент; **Norrland — наше УТП** (Armeringdirekt туда не возит).

### K12. Ниши (low, но почти без конкуренции)
- poolarmering / armering till pool (Armeringdirekt `/poolarmering/` — коммерческая) → сейчас только блог
- rostfri armering (7 Steel, Bromma) → только если производим [OWNER]
- 3D-bockning / bågbockning, lyftöglor, armering i ringar — уже есть продуктовые страницы
- hissgropar, balkhörn, vindkraftsfundament (7 Steel, B2B) — low

---

## 3. Gap-лист — топ-10 по приоритету

| # | Действие | Тип | Почему (1 строка) | У кого есть |
|---|---|---|---|---|
| 1 | **`/produkter/armeringsnat`** — lagernät 5150/6150/8150, hel/halv/kvartsnät, fingerskarv/skarvnät, specialnät, leverans | NEW | Head term с самым большим спросом, у нас нет коммерческой страницы (только «specialnät») | Armeringdirekt, 7 Steel, BE, Stena, Tibnor, Gothia, Swestål, вся розница |
| 2 | **`/produkter/grundarmering`** — «Armering till platta på mark / husgrund»: nät + kantbalksbyglar/villakorg + distanser + najtråd пакетом по ритнингу | NEW | Самый массовый проект частника/малой фирмы; Armeringdirekt держит это в title главной | Armeringdirekt, Thuresson (Villakorg®), Ahlsell/Hornbach (villakorg) |
| 3 | **`/produkter/klippt-och-bockad`** → добавить **ILF / inläggningsfärdig armering** в title/H2/FAQ; развести с блогом `klippt-bockad-armering` | RETARGET | ILF — стандартный B2B-термин у всех заводов, у нас 0 упоминаний; продукт поз. 27 из-за блога | BE, Stena, Tibnor, 7 Steel, Gothia |
| 4 | **`/produkter/palarmering`** (pålkorgar, pålfundament, plintkorgar) + убрать «armeringskorgar» из title блога `armeringskorgar-palarmering` | NEW + FIX | Подтверждённая каннибализация (блог 7,5 vs продукт 21,9); pålarmering не имеет страницы | 7 Steel (pålfundament/pålplintar), Gothia (armeringskorgar) |
| 5 | **B2B-лендинг «Armeringsleverantör för entreprenörer & prefab»** (объёмы, сроки, specning, CBAM/EPD, leveransplan) | NEW | Лиды с большим чеком; запросы leverantör/grossist/byggföretag без страницы | 7 Steel (entreprenörer/prefabindustri/konstruktör), BE, Stena |
| 6 | **`/blogg/vad-kostar-armering`** → коммерческий «Armering pris – så räknas offerten» (диапазоны kr/kg, frakt efter mängd vs 1 249/1 500 kr фикс) + CTA | RETARGET | Кластер «pris» (med) без страницы с ориентирами; frakt-прозрачность = наше УТП | Armeringdirekt (цены), Bromma (prisgaranti) |
| 7 | **`/produkter/armeringsjarn`** → «köpa armeringsjärn / kamstål B500B 6 & 12 m / rakstål / leverans», развести с 2 блогами | RETARGET | Тройная каннибализация (dimensioner, armeringsstal), был Duplicate в GSC | Armeringdirekt, Stena, Bromma, BE, Tibnor |
| 8 | **`/tjanster/armeringsspecifikation`** «Armeringsspecifikation från ritning» (+ armeringsspec, armeringsritning, armeringsförteckning, specning); убрать термин из title `/tjanster/bockningslista` и блога `bockningslista-sa-gor-du` | NEW + FIX | GSC: ~130 показов/3 мес, 0 кликов — интент «у меня только чертёж» не совпадает с инструментом bockningslista; вход для B2B-лидов с чертежами | Gothia, 7 Steel, Armeco |
| 9 | **`/produkter/distanser`** → «Distansklossar, nätstöd & najtråd» | RETARGET | Конкретные товарные имена вместо общего «tillbehör»; допродажа к заказу | Armeringdirekt (отдельные категории + najtråd), 7 Steel, Ahlsell |
| 10 | **Города Stockholm / Göteborg / Malmö + Norrland** — уникальный контент (сроки, frakt, объекты, Norrland-доставка) | RETARGET | 87 % одинаковые; локальные конкуренты (Bromma, Gothia, Swestål) берут гео-title | Bromma, Gothia, Swestål |

Резерв (после топ-10): коммерческая «Poolarmering» (Armeringdirekt `/poolarmering/`), rostfri armering [OWNER: производим?],
hissgropar/balkhörn (7 Steel), fästdon/ingjutningsgods [OWNER].

---

## 4. Карта каннибализации (что кому принадлежит)

| Запрос | Владелец (коммерция) | Блог (инфо) — НЕ таргетировать коммерческие формы |
|---|---|---|
| klippt och bockad armering, ILF, bockad armering | `/produkter/klippt-och-bockad` | `/blogg/klippt-bockad-armering` → «bockning av armering», «vad är» |
| armeringskorgar, prefab armeringskorg | `/produkter/armeringskorgar` | `/blogg/armeringskorgar-palarmering` → «armeringskorg typer/användning» (ед. ч.) |
| pålarmering, pålkorg | NEW `/produkter/palarmering` | тот же блог — ссылка на продукт |
| armeringsnät (+6150/5150, leverans) | NEW `/produkter/armeringsnat` | `/blogg/armeringsnat-storlekar-och-matt` → «storlekar, mått» |
| armeringsjärn köpa/leverans, kamstål | `/produkter/armeringsjarn` | `armeringsjarn-dimensioner` (dimensioner), `armeringsstal` (vikt/meter, B500B) |
| armeringsbyglar beställa, färdiga byglar | `/produkter/byglar-och-hakar` | `/blogg/armeringsbyglar`, `/blogg/kantbalksbygel` (typer, mått) |
| armering platta på mark/husgrund beställa | NEW `/produkter/grundarmering` | `armering-till-betongplatta`, `armering-till-garage` (hur armera) |
| armeringsspecifikation, armeringsspec, armeringsritning, armeringsförteckning | NEW `/tjanster/armeringsspecifikation` | `/blogg/bockningslista-sa-gor-du` → «bockningslista mall»; `/tjanster/bockningslista` → инструмент |
| bockad armering, färdig bockad armering, armeringsjärn bockning | `/produkter/klippt-och-bockad` | `/blogg/bocka-armeringsjarn` → «bocka för hand/verktyg, bockningsradie» |
| armering pris / offert | `/blogg/vad-kostar-armering` + `/offert` | `/blogg/bestalla-armering` → «steg för steg», без «pris» |

## 5. Не делать
- Чистые «köpa X / X pris» под мелкую розницу (kvartsnät, najtråd 1 рулон, kamstål 2 м) — выдача = Bauhaus/Hornbach/Byggmax/Biltema/Armeringdirekt с ценами; без webshop не выиграть. Брать их только как варианты на коммерческих страницах с «leverans/offert».
- Бренд-запросы конкурентов (byggmax armering и т.п.).
- Новые города (решение владельца 08.09) — только уникализация существующих.

## 6. Следующие шаги для уточнения
1. Keyword Planner «Start with a website»: armeringdirekt.se, 7-steelservice.se, gothiaarmering.se, brommastal.se → точные объёмы для K2/K5/K9.
2. GSC через 2–3 нед.: позиции «armeringsnät», «ILF armering», «armeringskorgar» после правок.
