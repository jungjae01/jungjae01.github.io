# Jungjae Lee Portfolio

Static academic and engineering portfolio for Jungjae Lee, designed for GitHub Pages deployment from the repository root.

## Local preview

Open `index.html` directly in a browser, or serve the repository root with any static file server. A local server is optional because the site has no build step and no framework dependencies.

## Structure

- `index.html` contains the main portfolio content in this fixed order: Introduction, Education, Research Experience, Research Papers, Research Posters, Projects.
- `styles.css` defines the shared homepage layout. The main portfolio shell is capped at 860px to match the academic reference width.
- `script.js` provides optional progressive enhancement for muted media previews.
- `papers/shared/research-page.css` and `papers/shared/research-page.js` provide one shared design system for the four publication/poster pages and the ongoing NewTen research project.
- `papers/<paper-slug>/index.html` contains one static research page; the existing numbered publication URLs are preserved. NewTen uses `papers/05-cmu-ri-newten-urop-2026/`, appears under Research Posters, and is labeled as a 2026 research poster presented at Boston University’s 29th Undergraduate Research Symposium. Its earlier route redirects to this page.
- `assets/` contains selected Jungjae-owned images, logos, and documents, including the supplied NewTen poster at `assets/documents/cmu-urop-poster.pdf`. Research images and videos live under `assets/images/research/`; the empty `assets/media/` directory has been removed.
- `CONTENT_REVIEW.md` lists factual assumptions and outstanding content questions.
- `RESEARCH_PAGE_ASSET_AUDIT.md` records research-page primary sources, claims, figure/video provenance, licensing, and verification.

## Project inventory organization

Projects are split into two visible subsections inside the main Projects section:

- Featured Projects: selective full-width image-and-text rows for current, research-oriented, robotics, systems, and software-heavy work.
- Additional Projects: compact rows for every remaining substantive project from the current implementation and prior portfolio source.

Do not remove older, introductory, fabrication-oriented, image-less, or in-progress projects merely because they are less current. Use a neutral CSS placeholder when a verified image is unavailable.

## Adding a project

1. Add a new `<article>` in `index.html` under either Featured Projects or Additional Projects.
2. Give it a unique `data-project-title` value for duplicate detection.
3. Include verified title, context, date, concise description, technologies, and links.
4. Add a local image under `assets/images/projects/` when a public Jungjae-owned image exists.
5. If the image or facts are missing, use a `.placeholder` figure and record the gap in `CONTENT_REVIEW.md`.
6. Keep ordering reverse-chronological within the relevant subsection.

## Paper-page convention

Each research-paper entry on the homepage links to a local page at:

```text
papers/<paper-slug>/index.html
```

The public GitHub Pages URL is:

```text
https://jungjae01.github.io/papers/<paper-slug>/
```

To add a new paper page:

1. Create `papers/<paper-slug>/index.html`.
2. Link only `../shared/research-page.css` and `../shared/research-page.js`; do not import another page’s stylesheet.
3. Use the eight-section research narrative beginning with System Overview. Keep ordinary copy in `.text-width` for a 740px readable width.
4. Place scientific figures/videos in `.media-width` (up to 1060px), retain their aspect ratios, and provide captions and full-resolution links. Videos belong beside methods or results.
5. Include only verified links and public information.
6. Use only public sources or owner-supplied materials approved for this portfolio. Distinguish ongoing project diagnostics from peer-reviewed publications, and keep private source/raw experiment records out of the site.
7. Add a `Project Page` link from the homepage paper row to `/papers/<paper-slug>/`.
8. Record source evidence, media dimensions/provenance, licensing, and missing materials in `RESEARCH_PAGE_ASSET_AUDIT.md`. Use accurate publication metadata/BibTeX for publications and project-status metadata for ongoing work.

## GitHub Pages deployment

1. Push this repository to `jungjae01/jungjae01.github.io`.
2. In GitHub, open Settings -> Pages.
3. Set the source to deploy from the `main` branch and repository root.
4. After the Pages build completes, the site should be available at `https://jungjae01.github.io/`.

No build step, package manager, framework, or generated artifacts are required.
