# Content Review

This file tracks factual assumptions, unresolved links, missing assets, and information that should be confirmed before treating the portfolio as fully current.

## Source Material Used

- Primary content source: `jungjae01eng/jungjae01eng.github.io`, including `index.html`, `aril.html`, `srbl.html`, `mbl.html`, `kl.html`, public images, logos, and PDFs.
- Current implementation source: existing `codex/new-academic-portfolio` branch in `jungjae01.github.io`.
- Visual reference: `jindapark/jindapark.github.io`, used only for width, spacing, and academic presentation style.
- Paper-page structural reference: `https://haian-jin.github.io/ZipMap/`, used for high-level page hierarchy only.

## Items To Verify

- The old introduction said Jungjae was a "junior." The new version uses the time-stable phrase "Computer Engineering student at Boston University."
- The source portfolio lists expected graduation as May 2027. Confirm this is still correct.
- The source portfolio uses a Dropbox CV link. Confirm whether this is the preferred current CV URL or whether a local PDF should be added.
- The source portfolio uses the GitHub account `jungjae01eng`, while this target site is `jungjae01.github.io`. Confirm the preferred public GitHub profile link.
- The canonical URL `https://jungjae01.github.io/` returned GitHub Pages 404 before deployment. This is expected until the target repository is pushed and Pages is enabled.

## Project Inventory Issues

- The current project inventory includes 20 projects in the homepage project list, with one local page per project.
- Agentic Cloud Benchmark and Robot Bartender ran from January through May 2026, as confirmed by the portfolio owner. Public technical details, outcomes, repositories, and images remain unavailable; the site retains neutral descriptions and placeholders.
- Learning Robotics Systems with Deep Koopman Operators ran from January through May 2026 for ENG EC 523 Deep Learning. Autonomous Inventory Inspection Robot began in September 2026 for ENG EC 463 Senior Design. Both descriptions are intentionally empty until supplied.
- Agentic Cloud Benchmark has no verified technology labels beyond the Cloud Computing course context.
- FMUC GUI Interface has no public link in the source portfolio. The old source contains a commented-out duplicate QGIS paper link, which was not reused.
- Portfolio Website links to the current page anchor rather than an external repository because the old source used a self-link.
- The Desk Lamp Google Slides presentation link from the old portfolio returned HTTP 410 during automated checking, so it was omitted. The GitHub-hosted report link remains.
- Several Google Drive and Google Docs project links may require sharing permissions. External access should be checked from a signed-out browser.
- The Analysis of the Health of Low-Income Families Google Docs report returned HTTP 410 during automated checking, so the live report link was omitted while keeping the project entry.
- Tactical Combat Casualty Care is included because the user requested all projects; confirm whether this military project should remain public on an academic portfolio.
- Robotics End Effector corrects the old typo "Robootics End Effector."
- Local project images were copied only from Jungjae's prior public portfolio. Missing images use CSS placeholders instead of repeated `Unavailable.jpg` files.

## Research-Page Sources and Remaining Items

- The four publication/poster pages and ongoing NewTen project now share one research-page system and eight-section narrative. `RESEARCH_PAGE_ASSET_AUDIT.md` is the current source, claim, media, licensing, and test record.
- The AIS article’s final citation is *Advanced Intelligent Systems* 8(2), e202500696 (2026); its first-online date is October 30, 2025. The existing `04-...-2025` public route remains intact.
- The 2023 proceedings PDF supplies author initials, two institutional affiliations, and a maximum reported calibration MAE of 0.16 N. These replace unsupported expanded affiliation/error descriptions in the old page.
- The 2022 poster author list includes Sean Mori Carroll. The poster’s pressure characterization precedes the stabilizing-brace development; it does not establish closed-loop control or clinical efficacy.
- Device figures are reproduced whole with attribution under CC BY-NC-ND 4.0; AIS figures carry CC BY 4.0 attribution. The owner-supplied poster/HSMR PDFs contain no explicit blanket reuse license, which is recorded in the asset audit.
- NewTen is ongoing research and is listed under Research Posters at `papers/05-cmu-ri-newten-urop-2026/`. The owner-supplied `assets/documents/cmu-urop-poster.pdf` confirms the author order: Jungjae Lee, Uksang Yoo, Jean Oh, and Jeffrey Ichnowski. The owner confirms that the poster was presented at the 29th Undergraduate Research Symposium, Boston University, Boston, MA, in 2026. The page records that presentation without claiming peer-reviewed publication. Supplied media show simulation diagnostics with estimated routing, CPU transmission calculations, and Newton/Warp physics. Physical friction identification and held-out hardware prediction remain outstanding. No public NewTen paper, DOI, or verified public code release was supplied.
- Wiley’s supplemental ZIP could not be retrieved during verification. No unaudited journal video is embedded. The existing SRBL desktop/GUI simulation clip is excluded from paper results because it lacks a matching experimental-task record.
- The separate ARIL under-review titles/statuses remain listed without local paper pages. Author lists and unpublished technical materials remain unavailable.

## Omitted Or De-Emphasized Content

- Leadership, awards, gallery, and extracurricular sections from the old site are not included as standalone sections because the requested section order only allows Introduction, Education, Research Experience, Research Papers, and Projects.
- Gallery-only assets and unrelated extracurricular images were not imported.
- The Republic of Korea Army role is still omitted from Research Experience because it is not a research appointment, though the Tactical Combat Casualty Care project appears in Projects.

## Validation Notes

- Internal homepage and paper-page local `href`/`src` checks passed after the paper pages were added.
- Duplicate project detection found 20 unique `data-project-title` values and no duplicates.
- Responsive checks were run at 320px, 390px, 768px, 1024px, and 1440px.
- Homepage and paper pages showed no horizontal overflow in automated Chrome checks.
- Basic accessibility checks verified a skip link, one H1 per page, image alt text, visible focus CSS, semantic headings, and accessible copy buttons.
- Reduced-motion handling is included in both homepage and paper-page stylesheets.

