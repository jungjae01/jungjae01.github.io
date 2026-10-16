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

## Paper-Page Issues

- Six local paper pages were created for all research-paper entries currently shown on the homepage.
- The Advanced Intelligent Systems entry is dated October 30, 2025 in the source portfolio. Confirm final citation details, volume, issue, article number, and BibTeX.
- The Device paper page links both ScienceDirect and a local PDF. Confirm whether the local PDF is permitted for redistribution on this GitHub Pages site.
- The AHA vascular poster PDF is included from the source repository. Confirm whether public redistribution is acceptable.
- Wiley, ResearchGate, LinkedIn, ScienceDirect, and some GitHub/Google links may block automated link checkers. They should be spot-checked manually in a browser if publication-link accuracy is critical.
- The source portfolio lists "Beyond Destinations: Instruction-Aware Graph Path Planning and Navigation with OpenStreetMap" as under review without authors, venue, affiliations, abstract, figures, PDF, repository, results, or BibTeX. The local page intentionally stays minimal.
- The ARIL page lists "REACTOR" as "Manuscript In Preparation," while the home page says "Manuscript In Progress." The new site uses "manuscript in progress." Confirm preferred wording.
- The ARIL page title contained "Affordance-awareContextual" without a space. The new site corrects it to "Affordance-aware Contextual." Confirm the exact manuscript title.
- REACTOR has no verified authors, affiliations, venue, abstract, figures, manuscript PDF, code, results, or BibTeX. The local page intentionally avoids confidential details.
- Under-review and manuscript-stage pages do not expose private manuscripts, private figures, private repositories, or non-public quantitative results.
- Published pages use citation text rather than verified BibTeX because BibTeX entries were not available in the source portfolio.

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

