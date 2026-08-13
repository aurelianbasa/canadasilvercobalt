# CHANGE REPORT — Website Remediation
**Nord Precious Metals Mining Inc. — response to OSC First Comment Letter, August 12, 2026**

Branch: `osc-comment-response/website-scrub` · Base: `master` · Prepared: August 13, 2026
Scope: comments 7–12, plus the fact sheet, drill-campaign totals, and infographic instructions.

**This report is the remediation exhibit. Every change is a literal before/after.**

---

## Summary

| | Count |
|---|---|
| Content/component files modified | 20 |
| Files deleted | 9 |
| Lines removed | 1,329 |
| Lines added | 53 |
| Video embeds removed | 133 |
| Assets deleted | 8 |

**Verification: zero occurrences of any ordered string remain in the rendered build output.** Two known, deliberate non-removals are listed in §9 with reasoning.

---

## 1. COMMENT 7 — Mineral estimates presented as current

### 1.1 `locales/en/home.json` (Home)

| Key | Before | After | Note |
|---|---|---|---|
| `heroDescription` | "Advancing **nearly 3 million ounces of silver** in historical Gowganda tailings toward near-term production. Cash flow is intended to fund discovery at Castle East, home of the **world's highest silver grades: 7.5 million ounces at 8,582 g/t**, a historical inferred resource. Anchored by TTL, the district's only permitted processor." | "Anchored by TTL, the district's only permitted processor." | Also addresses C10; the substitution phrase carries in `heroTitle`, so it is not repeated here |
| `infoBlock1Note` | "**7.5M oz resource expanding through 60,000m drilling.** Underground access to broken ore plus high-grade tailings." | "Underground access to broken ore plus high-grade tailings." | Letter anchor "Castle Complex — 7.5M oz resource expanding through 60,000m drilling" |
| `infoBlock3Note` | "Four historic mining leases consolidated. **Approximately 1.94 million tonnes of tailings with a historical silver resource.** Recovery Permit pathway advancing." | "Four historic mining leases consolidated. Recovery Permit pathway advancing." | |
| `silverDescription` | "**At 8,582 g/t silver, Castle East ranks among the world's highest-grade silver deposits. These grades, approximately 27 times the industry average, fundamentally alter project economics, requiring less tonnage and processing for equivalent metal production.** The integration with TTL creates a reflexive opportunity…" | "The integration with TTL creates a reflexive opportunity…" | |
| `silverInfo1` / `Note` / `Number` | "**CURRENT RESOURCE**" / "Inferred (expanding)" / "**7.5M oz**" | *(keys deleted; stat tile removed)* | Letter anchor "Current Resource — Inferred (expanding) 7.5 Moz" |
| `re2OxDescription` | "…four mining leases from Battery Mineral Resources, **adding approximately 1.94 million tonnes of historical silver tailings to the company's feed portfolio**. The Gowganda properties sit adjacent…" | "…four mining leases from Battery Mineral Resources. The Gowganda properties sit adjacent…" | |
| `re2OxInfo1` / `Note` | "Historical resource" / "**Approximately 3 million ounces of silver** in tailings from three past-producing mines…" | *(keys deleted; CheckItem removed)* | |
| `invest1Description` | "**7.5M oz resource expanding toward 30-100M oz** through aggressive drilling program." | *(key deleted; `<p>` removed — card retains title "Discovery Growth")* | **Visible gap — see §8** |
| `invest4Description` | "Gowganda acquisition adds four mining leases **and nearly 3M oz historical silver tailings** to the feed portfolio." | "Gowganda acquisition adds four mining leases to the feed portfolio." | |

### 1.2 `src/pages/index.js` (Home)

| Location | Before | After |
|---|---|---|
| lines 186–204 | Two stat tiles rendering `silverInfo1*` and `silverInfo2*` | Removed |
| line 216 | `<DataWrapper title='Resource Estimate' src='https://datawrapper.dwcdn.net/1telv/3/' />` | Removed (import dropped) — **chart still live at source, see §7** |
| line 218 | `<CheckItem title={t('re2OxInfo1')} description={t('re2OxInfo1Note')} />` | Removed; grid collapsed to one column |
| `Head()` meta description | "**Highest Silver grades in the world. Latest resource estimate at Castle East** marks first grassroots discovery in decades…" | "Nord Precious Metals is a Canadian junior mining company with a main focus on silver and gold but also with a valuable portfolio of critical mineral projects based in safe and ecologically responsible jurisdictions." *(reused verbatim from the existing /about meta description — not newly authored)* |

### 1.3 `locales/en/castle-east.json` (Castle East)

| Key | Before | After | Note |
|---|---|---|---|
| `heroTitle` | "**World's Highest Grade Silver Resource**" | "Castle East Discovery" | Letter anchor. Replacement reuses existing on-site wording (`isoModelTitle`, `heroSubtitle`). **Flagged §8** |
| `heroDescription` | "…richest silver intercepts ever drilled. **Initial resource of 7.56 million ounces at 8,582 g/t established from two vein sections.** December 2025 independent NI 43-101…" | "…richest silver intercepts ever drilled. December 2025 independent NI 43-101…" | |
| `stats1` | "Meters Drilled" | *(deleted)* | Drill-campaign total — see §5 |
| `stats4` | "g/t Silver (Resource Avg)" | *(deleted)* | |
| `silver` | "**Resource Expansion Potential**" | *(key deleted; `<h2>` removed)* | Letter anchor. **Visible gap — §8** |
| `silverDescription` | "**Current resource from only two vein sections (1A and 1B) of the Robinson Zone.** 29 total vein structures identified… 2km strike length… remains largely untested." | "29 total vein structures identified… 2km strike length… remains largely untested." | |
| `estimate` | "**Resource Parameters**" | *(deleted — replaced by document card, §1.5)* | Letter anchor |
| `estimateNote1` | "**258 g/t AgEq CUTOFF (3% NSR)**" | *(deleted)* | Letter anchor |
| `info2` | "**Resource Definition Drilling**" | *(key deleted; `<h2>` removed)* | Letter anchor |
| `info2Description` | "Systematic 25-50m spacing established **7.56M oz in 27,400 tonnes**. Average grade of **8,582 g/t** (250 oz/ton) ranks among **world's highest** silver resources." | *(key deleted; `<p>` removed — image retained)* | **Visible gap — §8** |

### 1.4 `src/pages/projects/castle-east/index.js`

| Location | Before | After |
|---|---|---|
| lines 173–181 | `<CountUp end={68000} />` + "Meters Drilled" tile | Removed |
| lines 203–211 | `<CountUp end={8582} />` + "g/t Silver (Resource Avg)" tile | Removed; stat grid `lg:grid-cols-4` → `lg:grid-cols-2` |
| line 342 | `<h2>{t('silver')}</h2>` | Removed |
| line 366 | `<DataWrapper title='Resource Estimate' src='https://datawrapper.dwcdn.net/F9ZAA/1/' />` | Removed (import dropped) — **chart still live, §7** |
| lines 396, 398 | `<h2>{t('info2')}</h2>`, `<p>{t('info2Description')}</p>` | Removed |

**Retained stat tiles:** `29` (Vein Structures) and `89,853` (g/t Silver, Peak) — drill results, not resource figures.

### 1.5 Retained 2020 resource report button — **and a mislabel corrected**

Per instruction, a download button for the 2020 resource report is retained and clarified.

**A defect was found and fixed.** The button previously read **"Download 2020 Resource Report"** but served `castle-east/resource-estimate.pdf`, which is **byte-identical** (MD5 `39f9f364…`) to `technical-report-2021-may.pdf` — the **May 2021** report. That document states on its face: *"It is not a mineral resource estimation update."* The button was therefore labelled as a 2020 resource estimate while delivering a 2021 exploration update.

| | Before | After |
|---|---|---|
| Heading | "Resource Parameters" | "JULY 2020" / "NI 43-101 Mineral Resource Estimate for Castle East" |
| Body | "258 g/t AgEq CUTOFF (3% NSR)" | *(removed)* |
| Disclaimer | "Mineral resources are not mineral reserves. Economic viability not demonstrated." | **retained unchanged** |
| Attribution | "**Resource basis:** Rachidi, M. 2020, NI 43-101 Technical Report, effective May 28, 2020. Most recent independent disclosure: Enright & Ronacher, Ronacher McKenzie Geoscience Inc., effective December 3, 2025." | "Rachidi, M. 2020, NI 43-101 Technical Report, effective May 28, 2020. Most recent independent disclosure: Enright & Ronacher, Ronacher McKenzie Geoscience Inc., effective December 3, 2025." |
| Button label | "Download 2020 Resource Report" | "Download" |
| **Button target** | `castle-east/resource-estimate.pdf` *(actually the May 2021 report)* | `technical-report-2020-july.pdf` *(the actual 2020 MRE: GoldMinds Geoservices / M. Rachidi, effective 28 May 2020, issued 13 July 2020)* |

All label strings are reused verbatim from existing published site copy (`technicalReport2` / `technicalReport2Date` on /investors and /projects). **No new copy was authored.**

The Castle East page separately and prominently links the **December 2025** Ronacher McKenzie report at the top of the page (`reportTitle` / `reportButton`), and all six technical reports remain listed on /investors and /projects. No filed technical document has been removed from the site.

### 1.6 Other Comment 7 removals

| File | Key | Before | After |
|---|---|---|---|
| `about.json` | `heroList1` | "**7.5M oz silver resource expanding toward 30-100M oz target at world's highest grades**" | *(deleted; CheckItem removed from `src/pages/about/index.js:44`)* |
| `about.json` | `heroList3` | "…adding **nearly 3M oz historical silver tailings**" | "…adding four historic mining leases" |
| `about.json` | `historyList3Description` | "…Intersected 89,853 g/t silver. **Defined initial 7.5M oz resource.** Identified multiple vein structures." | "…Intersected 89,853 g/t silver. Identified multiple vein structures." |
| `about.json` | `historyList4Description` | "…adding four mining leases **and nearly 3M oz historical silver**." | "…adding four mining leases." |
| `company-history.json` | `heroList4` | "**Resource Expansion**" | "Exploration Drilling" |
| `company-history.json` | `batteryDescription` | "…intersected 89,853 g/t silver, **defining an initial 7.5M oz resource. Ongoing 60,000m program targeting 30-100M oz.** Multiple vein structures…" | "…intersected 89,853 g/t silver. Multiple vein structures…" |
| `company-history.json` | `batteryList1` | "**7.5M oz at 8,582 g/t silver**" | *(deleted; CheckItem removed at `company-history/index.js:126`)* |
| `company-history.json` | `goldList1` | "Gowganda acquisition adds **~3M oz historical silver**" | "Gowganda acquisition adds four historic mining leases" |
| `management.json` | `memberStory3` | "…Published research on camp geology. **Instrumental in expanding resource from 2M to 7.5M oz.**" | "…Published research on camp geology." |
| `projects.json` | `project4Description` | "Four historic mining leases consolidating the Gowganda Silver Camp, **adding approximately 1.94 million tonnes of historical silver tailings**." | "Four historic mining leases consolidating the Gowganda Silver Camp." |
| `projects.json` | `re2OxDescription` | "…from Battery Mineral Resources, **adding approximately 1.94 million tonnes of historical silver tailings to the company's processing pipeline**. The properties include…" | "…from Battery Mineral Resources. The properties include…" |
| `gowganda-tailings.json` | `heroDescription` | "The Gowganda silver tailings **represent approximately 2.96 million contained ounces of silver in a historical NI 43-101 Indicated resource, supported by** four decades of… work by firms including Watts Griffis & McOuat, **Kilborn Limited,** and GeoVector Management." | "The Gowganda silver tailings are supported by four decades of… work by firms including Watts Griffis & McOuat and GeoVector Management." |
| `gowganda-tailings.json` | `timeline4Note` | "Metsolve thiosulfate testwork; 764 holes (3,012 m) integrated.**<br/>Indicated 1.94M t at 47.5 g/t Ag = 2.96M oz.<br/>80%+ non-cyanide silver recovery confirmed.**" | "Metsolve thiosulfate testwork; 764 holes (3,012 m) integrated." |
| `gowganda-tailings.json` | `resourceSubtitle` | "GEOVECTOR 2011 **RESOURCE**" | "GEOVECTOR 2011 TECHNICAL REPORT" |
| `gowganda-tailings.json` | `resourceTitle` | "**Indicated Resource Holds Steady Across a Wide Cutoff Range**" | "GeoVector Management 2011 NI 43-101 Technical Report" |
| `gowganda-tailings.json` | `resourceDescription` | "…into a block model using inverse distance squared interpolation. **The Indicated tonnage and contained silver ounces hold nearly flat from a 5 g/t cutoff up to 20 g/t — a signature of a well-distributed, homogeneous deposit…**" | "…into a block model using inverse distance squared interpolation." |
| `gowganda-tailings.json` | `resourceEstimateTitle`, `Note1`, `Note2`, `Note3` | "Indicated mineral resource (10 g/t Ag cutoff)" / "**Tonnage: 1.94 million tonnes**" / "**Grade: 47.5 g/t silver**" / "**Contained silver: approximately 2.96 million ounces**" | *(all four keys deleted; the entire estimate card removed from the page)* |
| `gowganda-tailings.json` | `resourceDisclaimer` | "Source: GeoVector… July 8, 2011 **(Table 4), Indicated Mineral Resource category.** Historical estimate; the Company is not treating it as a current mineral resource…" | "Source: GeoVector… July 8, 2011. Historical estimate; the Company is not treating it as a current mineral resource…" |
| `src/pages/projects/gowganda-tailings/index.js` | meta description | "Four decades of independent technical work on a **2.96 million ounce historical silver resource.** Updated mineral resource estimate underway…" | "Four decades of independent technical work at the Gowganda silver tailings. Updated mineral resource estimate underway…" |

---

## 2. COMMENT 8 — Kilborn 1987 feasibility study economics

**The entire "Historic Economics at Modelled Silver Prices" section is deleted. Nothing from it survives.**

### 2.1 `locales/en/gowganda-tailings.json` — keys deleted in full

| Key | Deleted content |
|---|---|
| `irrSubtitle` | "KILBORN 1987 FEASIBILITY" |
| `irrTitle` | "Historic Economics at Modelled Silver Prices" |
| `irrDescription` | "Kilborn Limited's 1987 feasibility study designed a **1,000 TPD** seasonal leach operation with **85%+ silver recovery**, a **seven-year production schedule** yielding approximately **2 million recoverable ounces**, and financial projections across a silver-price range of **US $6 to $12 per ounce**… At Kilborn's top case of US $12, the projected **internal rate of return was 49.3%**. **Silver today trades above US $78.**" |
| `irrStat1Label` / `Note` / `Number` | "Kilborn 1987 high case" / "IRR at modelled US $12/oz Ag" / "**49.3%**" |
| `irrStat2Label` / `Note` / `Number` | "Silver today" / "Approx. spot price, US$/oz" / "**~$78**" |
| `irrDisclaimer` | "Source: Kilborn Limited, **1,000 STPD** Tails Remilling Project Feasibility Study, April 1987 (at **US $4.7M capital cost**)…" |
| `kilbornReportDate` / `kilbornReportTitle` | "APRIL 1987" / "Kilborn Limited — 1,000 STPD Tails Remilling Project Feasibility Study" |
| `timeline2Year` / `Event` / `Note` | "1987" / "Kilborn Limited feasibility study" / "152 sonic holes (910 m). **1,000 TPD** seasonal leach designed. **85%+ recovery, IRR to 49.3% at US $12/oz Ag.**" |
| `doc3Source` / `doc3Title` | "Ontario Geological Survey • APRIL 1987" / "Kilborn Limited — 1,000 STPD Tails Remilling Project Feasibility Study" |

### 2.2 `locales/en/gowganda-tailings.json` — Kilborn references struck from surviving copy

| Key | Before | After |
|---|---|---|
| `timelineDescription` | "…Each successive program was conducted by a different firm, **and each confirmed the resource and the metallurgy. The consistency of silver recovery results — 82% (1981), 85%+ (1987), 80%+ (2007) — across different firms, methods, and decades provides meaningful confidence in the deposit's processing characteristics.**" | "…Each successive program was conducted by a different firm." |
| `processingBody1` | "…**Four** independent metallurgical test programmes conducted between 1981 and 2007 have **confirmed silver recoveries of 80–85%** through cyanide leaching (WGM / Lakefield, 1981; **Kilborn / Witteck, 1987**) and through thiosulfate leaching… **Kilborn's 1987 feasibility study designed a 1,000 TPD seasonal cyanide leach plant with Merrill-Crowe recovery.** These established processing baselines…" | "…Independent metallurgical test programmes have evaluated both cyanide leaching (WGM / Lakefield, 1981) and thiosulfate leaching (Temex / Metsolve, 2006–07), a non-cyanide alternative. These established processing baselines…" |
| `step3Description` | "…confirm the **1987 Kilborn and** 2007 Temex / Metsolve metallurgical results…" | "…confirm the 2007 Temex / Metsolve metallurgical results…" |
| `step4Description` | "…advance the Gowganda Silver Tailings to its next phase of project work, **drawing on Kilborn's 1987 engineering baseline and benchmarking against current silver prices and operating conditions**." | "…advance the Gowganda Silver Tailings to its next phase of project work." |

### 2.3 `src/pages/projects/gowganda-tailings/index.js`

| Location | Removed |
|---|---|
| lines 126–176 | Entire `{/* Kilborn 1987 IRR sensitivity */}` block: heading, description, both stat tiles, the Datawrapper chart, the Kilborn report download card (linking the Ontario Geological Survey PDF), and the disclaimer |
| line 158 | `<DataWrapper title='Kilborn 1987 IRR sensitivity' src='https://datawrapper.dwcdn.net/kf7dq/1/' />` — **chart still live at source, §7** |
| lines 99–103 | Timeline entry 2 (1987 Kilborn); grid `lg:grid-cols-5` → `lg:grid-cols-4` |
| lines 337–350 | Key-documents card 3 (Kilborn feasibility study) |

---

## 3. COMMENT 9 — Non-compliant exploration target

| File | Key | Before | After |
|---|---|---|---|
| `home.json` | `silverInfo2` / `Note` / `Number` | "**EXPLORATION TARGET**" / "Through drilling" / "**30-100M oz**" | *(keys deleted; stat tile removed from `src/pages/index.js`)* — letter anchor |
| `home.json` | `aboutDescription` | "Nord combines high-grade silver exploration at Castle East, **where drilling targets 30-100 million ounces,** with the district's only operating processing facility…" | "Nord combines high-grade silver exploration at Castle East with the district's only operating processing facility…" |
| `home.json` | `invest1Description` | "7.5M oz resource expanding toward **30-100M oz**…" | *(deleted — see §1.1)* |
| `about.json` | `heroList1` | "…expanding toward **30-100M oz target at world's highest grades**" | *(deleted — see §1.6)* — letter anchor |
| `company-history.json` | `batteryDescription` | "…Ongoing 60,000m program **targeting 30-100M oz**." | *(deleted — see §1.6)* |

---

## 4. COMMENT 10 — Production-timing language *(prudential softening — not an ordered removal)*

**Listed separately per instruction so counsel can distinguish ordered removals from prudential changes.**

Approved substitution phrase: *"advancing the Gowganda tailings project through permitting and technical evaluation"*

| File | Key | Before | After |
|---|---|---|---|
| `home.json` | `heroTitle` | "**Near-Term Silver Production** to Unlock District-Scale Value" | "Advancing the Gowganda Tailings Project Through Permitting and Technical Evaluation" |
| `home.json` | `heroDescription` | "Advancing nearly 3 million ounces… toward **near-term production**. **Cash flow is intended to fund discovery at Castle East**…" | "Anchored by TTL, the district's only permitted processor." (substitution phrase carried in `heroTitle`) |
| `about.json` | `heroDescription` | "…leverages existing infrastructure **to advance toward production** while expanding resources through aggressive drilling." | "…leverages existing infrastructure while advancing the Gowganda tailings project through permitting and technical evaluation." |
| `gowganda-tailings.json` | `processingBody5` | "…**allows the Company to advance toward production on multiple fronts** while each processing route serves the feed source…" | "…supports advancing the Gowganda tailings project through permitting and technical evaluation, with each processing route serving the feed source…" |

No instance of "first silver pour" or "first pour" was found anywhere in the repository.

---

## 5. Drill-campaign totals

| File | Location | Before | After |
|---|---|---|---|
| `home.json` | `infoBlock1Note` | "…expanding through **60,000m** drilling" | *(removed — §1.1)* |
| `about.json` | `values1Description` | "**60,000m drilling completed.** Multiple vein structures identified…" | "Multiple vein structures identified…" |
| `company-history.json` | `batteryDescription` | "Ongoing **60,000m** program…" | *(removed — §1.6)* |
| `castle-east/index.js` | line 176 | `<CountUp end={68000} />` "Meters Drilled" | *(tile removed — §1.4)* |

Note: the stated campaign size on the site (**68,000 m** in the Castle East counter) did not match the **60,000 m** figure used elsewhere. Both are removed pending the Company's reconciliation. Metres completed to date, as stated in dated news releases, remain untouched on those releases.

---

## 6. COMMENT 11 — Analyst reports · COMMENT 12 — Videos · Fact sheet

### 6.1 Comment 11 — Analyst reports

| File | Removed |
|---|---|
| `investors.json` | `analystReportsTitle`, `analystReportsDisclaimer`, `analystReport2Date` ("JULY 2026"), `analystReport2` ("Emerging Growth Research Analyst Report"), `analystReport1Date` ("APRIL 2026"), `analystReport1` ("Couloir Capital Analyst Report"), `analystReportButton` |
| `src/pages/investors/index.js` | Entire `<div id='analystReports'>` section (lines 438–486), both download buttons, and imports of `couloirCapitalPDF` and `emergingGrowthPDF` |
| `common.json` | `header.analystReports` ("Analyst Reports") |
| `src/components/header.js` | Desktop nav link (line 263) and mobile nav link (line 421) to `/investors#analystReports` |
| **Assets deleted** | `src/media/investors/emerging-growth.pdf`, `src/media/investors/couloir-capital.pdf` |

**Redirects: not implemented, per instruction.** Deleting the source files means the URLs stop resolving on the next deploy. Note these PDFs were served from webpack content-hashed paths (`/static/<name>-<hash>.pdf`), so no stable public URL existed to redirect.

### 6.2 Comment 12 — Videos

| File | Removed |
|---|---|
| `media.json` | `tabItem2` ("Videos"), `tab2Subtitle`, `tab2Title`, `tab2Category0`–`tab2Category7`, and **all 399 `video_*` keys** covering 133 videos from October 2017 through August 5, 2026 |
| `src/pages/media/index.js` | The Videos `<Tab>`; the entire second `<TabPanel>` (lines 366–1000) containing **133 `<CardVideo>` embeds**, every one a `youtube.com/embed/*` iframe; the `CardVideo` and `PosterImage` imports |
| `src/pages/index.js` | Homepage hero video: "Watch Latest Interview" button, `isOpenHeroPopup` state, the `<Dialog>` modal wrapping `youtube.com/embed/Qe5DekbNFW0`, and now-unused `Dialog`/`DialogPanel`/`AnimatePresence`/`RiPlayFill` imports |
| `home.json` | `heroButton` ("Watch Latest Interview") |
| `src/pages/projects/index.js` | TTL video modal: "Demonstration of the circuit" button, `isOpenTTLPopup` state, the `<Dialog>` modal wrapping `youtube.com/embed/9NsQ-Q7NiTU`, and unused imports |
| `projects.json` | `temiskamingButton2` ("Demonstration of the circuit") |
| `common.json` | `header.videos` ("Videos") |
| `src/components/header.js` | Desktop nav link (line 216) and mobile nav link (line 400) to `/media?tab=1` |
| **Files deleted** | `src/components/card-video.js` (the YouTube/commodity-tv embed component), `src/media/media/poster.webp`, `src/media/common/play.webp`, `src/media/common/default-poster.webp` |

**Route and sitemap:** the video library was **tab index 1 of `/media`**, never a standalone route. There is no page or route to delete and no sitemap entry to remove — the sitemap is auto-generated by `gatsby-plugin-sitemap` from the page graph and never contained a `/videos` entry. `/media` survives with Photos and Featured Articles. The Featured Articles tab moved from `?tab=2` to `?tab=1`; both nav links were renumbered accordingly.

**All outbound links to third-party video interviews are removed.** Zero `youtube.com/embed`, `youtu.be`, `vimeo`, or `wistia` references remain in the source or build output. The one surviving `youtube.com` string is the corporate channel link in the footer — see §9.

### 6.3 Fact sheet

| File | Removed |
|---|---|
| `investors.json` | `factSheet` ("Fact Sheet"), `factSheetButton` ("Download") |
| `src/pages/investors/index.js` | Fact Sheet card and download button (lines 1209–1216), `FactSheetPDF` import; the two-column grid collapsed to one column (the Presentation card remains) |
| **Asset deleted** | `src/media/investors/fact-sheet.pdf` |

Redirect not implemented, per instruction (same content-hashed path issue as §6.1).

---

## 7. Images and infographics

| Asset | What it displayed | Action |
|---|---|---|
| `src/media/projects/gowganda-tailings/grade-tonnage.svg` | Grade-tonnage curve rendering "1.95M t", "2.96M oz", "1.90M t", "2.94M oz", "0.31M oz", and the caption "Resource holds steady from 5 to 20 g/t cutoff" | **DELETED**; embed and import removed from the Gowganda page |
| `src/media/projects/castle-east/resource-estimate.pdf` | Duplicate (MD5-identical) of `technical-report-2021-may.pdf`, served under a "2020 Resource Report" label | **DELETED** — redundant copy; the May 2021 report remains available at `technical-report-2021-may.pdf` and is listed in the Technical Reports sections on /investors and /projects |
| `src/media/media/poster.webp`, `src/media/common/play.webp`, `src/media/common/default-poster.webp` | Video poster / play-button chrome | **DELETED** — orphaned by the video removal |

**Images inspected and retained** (no estimates, grades, Kilborn figures, or exploration target displayed): all Castle East photographs and NI 43-101 figures (`iso-model.webp`, `plan-view.webp`, `section-view.webp` — their captions carry **historical production** figures, not the 7.5 Moz estimate), all Gowganda maps and site views, all home and about photography.

### Externally hosted charts — CANNOT BE REMOVED FROM THIS REPOSITORY

Three Datawrapper embeds were removed from the site. **The charts remain publicly live at their `datawrapper.dwcdn.net` URLs** and must be unpublished from the Datawrapper account by hand:

| Chart | URL | Content |
|---|---|---|
| Home resource estimate | `https://datawrapper.dwcdn.net/1telv/3/` | Castle East resource estimate |
| Castle East resource estimate | `https://datawrapper.dwcdn.net/F9ZAA/1/` | Castle East resource estimate |
| Kilborn IRR sensitivity | `https://datawrapper.dwcdn.net/kf7dq/1/` | 1987 Kilborn IRR sensitivity |

**This is the only item in the entire scrub that could not be completed in the repository.**

---

## 8. Visible gaps requiring human-authored replacement copy

Per instruction, removals that leave a visible gap were left clean rather than backfilled with new technical copy. Each needs replacement text:

| Page | Gap |
|---|---|
| Home — "Why Nord Leads" | Card 1 "Discovery Growth" now has a **title and no body text**. |
| Home — Gowganda section | Two-item checklist reduced to one ("Processing pathway"); grid collapsed to single column. |
| Home — Building Value section | Section retains its heading and one sentence; the two stat tiles beneath are gone, leaving the left column short against the adjacent image. |
| Castle East — Silver section | Section now renders **description and image with no heading** (the heading was "Resource Expansion Potential"). |
| Castle East — second drill-core block | Renders **an image only** — heading and caption both removed. |
| Castle East — hero | Title replaced with "Castle East Discovery", reused from existing on-site wording. **Confirm this is acceptable or supply a preferred title.** |
| Castle East — stat band | Four tiles reduced to two; grid rebalanced to two columns. |
| Gowganda — timeline | Five milestones reduced to four; grid rebalanced. |
| Gowganda — GeoVector section | Section retains heading, one sentence, the SEDAR+ report link, and the disclaimer. The estimate card and grade-tonnage chart that formed its visual centre are gone. |
| Gowganda — key documents | Three document cards reduced to two. |
| Investors | The Analyst Reports section is gone entirely; the Fact Sheet / Presentation row is now a single card. |
| Media | Three tabs reduced to two. |

---

## 9. Deliberate non-removals — for counsel's review

Two strings from the Phase 0 search list survive in the build output. Both are intentional:

**1. Footer YouTube channel link** — `src/components/footer.js:93`, `https://www.youtube.com/@nordpreciousmetals`, label "YouTube", appears on all 18 pages.
Comment 12 orders removal of the video section, embeds, and outbound links to *third-party video interviews*. This is Nord's **own channel**, not a third-party interview. It is being addressed out-of-band by setting the channel's videos to private. **Retained pending instruction — say the word and it is a one-line removal.**

**2. `castle-mine.json:25`** — "Historic Mining Focused on Highest Grades", rendered on /projects/castle-mine.
Describes 1920s–1980s **mining practice** (selective, grade-driven extraction that left lower-grade material behind), not a Nord resource or grade claim. The section body makes this explicit. Retained as a qualitative historical description.

**3. Four surviving "resource expansion / resource definition" phrases — BORDERLINE, counsel should decide.**

The letter's named anchors were the *headings* "Resource Expansion Potential" and "Resource Definition Drilling"; both are removed. Four other instances of similar wording survive. Each describes **planned or ongoing activity and carries no quantity, grade, or estimate**, so none presents a mineral estimate as current. They were left in place rather than rewritten, because removing them would require re-authoring the surrounding sentences. Listed here so counsel can direct otherwise:

| Page | Key | Text |
|---|---|---|
| /projects/castle-east | `rampDescription` | "Planned ramp provides platform for **resource expansion** drilling and bulk sampling… Construction pending resource update and project financing." |
| /about | `values5Description` | "…Processing facility operational. Focus investment on **resource expansion**." |
| /about/company-history | `goldDescription` | "…continued **resource expansion** drilling, and federal innovation funding…" |
| /projects/gowganda-tailings | `consolidationDescription` | "…creating one consolidated platform for the next round of **resource definition** and recovery work." |

**4. `gowganda-tailings.json` `heroTitle`** — "District-Scale Silver Tailings. Four Decades of **Validated Metallurgy**." The recovery percentages that supported "validated" (82% / 85%+ / 80%+) were removed under Comment 8, so the claim now stands unsupported on the page. Not a named anchor and carries no figure, but worth a look.

### Items outside comments 7–12, flagged but not touched

- **`presentation.pdf` (repo root) and `src/media/investors/presentation.pdf`** — the August 2026 corporate presentation, still linked from the home page and /investors. It very likely repeats the 7.5 Moz estimate, the exploration target, and the Kilborn economics. It is a **document, not website copy**, and no comment orders its removal. **This is the largest remaining exposure on the site and counsel should review it.**
- **Featured Articles tab** (15 third-party press pieces: CBC, BNN Bloomberg, The Deep Dive, Canadian Mining Journal, CIM Magazine and others). Third-party **press coverage**, not analyst **research reports**. Comment 11 names only Emerging Growth and Couloir Capital.
- **Castle East meta description** — "Massive native silver grades up to 89,853 g/t (2,621 oz/ton) intersected during surface drilling…" A reported drill assay, not a resource estimate.
- **Bonanza-grade drill intercepts** retained site-wide (89,853 g/t, 70,380 g/t, 50,583 g/t, the 89,853 g/t home banner). Reported assay results from dated releases, not resource figures.
- **`common.json` `footer.disclosureText`** contains the word "analysts" inside the board-adopted Disclosure Policy. Legal text, untouched.
- **The dated news-release archive** (Contentful-hosted, `/news/*`) was not read, edited, or unlinked. Out of scope throughout.

---

## 10. Verification

### 10.1 Build

`gatsby build` completed successfully — **18 pages generated, 0 errors**. `npm run lint` reports **0 errors** (20 pre-existing Tailwind style warnings, none introduced by this change).

A key-integrity check confirms **no orphaned translation references** (no `t('key')` pointing at deleted copy) and **no unused locale keys** left behind.

> **Build caveat:** the repository has no `.env`, and `gatsby-source-contentful` requires `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`, so `npm run build` cannot run as-is in this environment. Verification builds were produced in a scratch copy with the Contentful and Algolia plugins stubbed out and the `/news/*` routes (Contentful-driven, out of scope) omitted. **The branch itself contains no such modification** — `gatsby-config.js` is untouched. A full build including the news archive should be run once before merge by someone with the credentials.

### 10.2 Build-output grep

The full Phase 0 string list was run against the rendered build output — 103 files, then again against **visible page text only** across all 18 pages (SVG path data, scripts, and styles stripped):

| Result | |
|---|---|
| `7.56`, `7,567,000`, `7.5 Moz`, `7.5M oz`, `8,582`, `27,400`, `32,900`, `258 g/t`, `world's highest`, `Kilborn`, `49.3`, `1,000 TPD`, `1,000 STPD`, `325,000`, `30-100`, `60,000`, `1.94`, `1,940,000`, `47.5`, `2.96`, `near-term`, `first silver pour`, `first pour`, `Couloir`, `Emerging Growth`, `analyst`, `fact sheet`, `youtu.be`, `vimeo`, `wistia`, `cash flow`, `exploration target`, `current resource` | **ZERO occurrences** |
| `highest grade` | 1 — `/projects/castle-mine/` only (§9, item 2) |
| `youtube` | 17 — the footer channel link on every page (§9, item 1) |
| `resource expansion` / `resource definition` | 4 — activity descriptions carrying no quantities (§9, item 3). The two named headings from the letter are gone. |

Raw-file matches on `7.56`, `1.94`, `47.5`, `2.96`, and `49.3` in `.js` bundles, `.js.map` sourcemaps, and `logo.svg` were individually inspected and are **SVG path coordinates and third-party vendor code**, not content. Example from `projects/castle-east/index.html`: `6.62665 3.20701 5.39332L5.44373 7.63C6.02952 8.21578 6.97927 8.21578 7.56505 7.63…` — icon geometry.

### 10.3 Screenshots

Eighteen full-page screenshots — before and after for each of the eight affected pages (Home, About, Company History, Projects, Castle East, Gowganda Tailings, Investors, Media), plus a dedicated pair for the media Videos tab — captured at 1440px width against the pre-edit `master` build and the post-edit branch build.

**Location: `~/Desktop/osc-remediation-screenshots/` (90 MB).** Deliberately **not committed** — binary images of this size do not belong in the site repository's history. Attach them to the response letter from that folder.

The Videos-tab pair is the clearest single piece of evidence for Comment 12: `/media/?tab=1` renders **23,379 px** tall before (133 video embeds) and **4,447 px** after (the Featured Articles tab, renumbered into that slot).

| Page | Before | After |
|---|---|---|
| Home | 8,275 px | 7,508 px |
| About | 6,571 px | 6,464 px |
| Company History | 5,397 px | 5,291 px |
| Projects | 4,507 px | 4,483 px |
| Castle East | 12,388 px | 11,680 px |
| Gowganda Tailings | 10,459 px | 7,790 px |
| Investors | 7,719 px | 7,163 px |
| Media (`?tab=1`) | 23,379 px | 4,447 px |

---

## 11. Human checklist — outside this PR

1. **Unpublish the three Datawrapper charts** (§7) — the only incomplete item in the scrub.
2. **Set all videos on the company YouTube channel to private** — Wayne.
3. **Decide on the footer YouTube channel link** (§9, item 1).
4. **Review the August 2026 corporate presentation PDF** (§9) — the largest remaining exposure.
5. **Reconcile the drill-campaign figure** (60,000 m vs 68,000 m, §5) before any replacement copy states a total.
6. **Supply replacement copy for the 12 visible gaps** (§8).
7. **Run a full build with Contentful credentials** and re-run the §10.2 grep including `/news/*` pages, where hits in dated releases are expected and acceptable.
8. **Purge CDN cache after deploy.**
9. **Counsel (Keith) sign-off on the PR diff before merge.** No direct pushes to production; this branch does not merge until that review is complete.
