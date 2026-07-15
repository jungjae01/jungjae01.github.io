# Jungjae Lee Portfolio

Static academic and engineering portfolio for Jungjae Lee, designed for GitHub Pages deployment from the repository root.

## Local preview

Open `index.html` directly in a browser, or serve the repository root with any static file server. A local server is optional because the site has no build step and no framework dependencies.

## Structure

- `index.html` contains the main portfolio content in this fixed order: Introduction, Education, Research Experience, Research Papers, Projects.
- `styles.css` defines the shared homepage layout. The main portfolio shell is capped at 860px to match the academic reference width.
- `script.js` provides optional progressive enhancement for muted media previews.
- `papers/shared/paper-page.css` and `papers/shared/paper-page.js` provide shared styling and behavior for all paper pages.
- `papers/<paper-slug>/index.html` contains one static project page per research paper.
- `assets/` contains selected Jungjae-owned images, logos, and documents copied from the public source portfolio.
- `CONTENT_REVIEW.md` lists factual assumptions, stale-looking items, and content that should be verified before long-term publication.

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
2. Link `../shared/paper-page.css` and `../shared/paper-page.js`.
3. Keep ordinary text in `.paper-shell` for the 860px readable width.
4. Use `.media-shell` only for larger figures or videos, up to approximately 1100px.
5. Include only verified links and public information.
6. Do not publish confidential under-review material, private repositories, private figures, or unpublished results.
7. Add a `Project Page` link from the homepage paper row to `/papers/<paper-slug>/`.
8. Record missing authors, affiliations, abstracts, BibTeX, assets, or redistribution questions in `CONTENT_REVIEW.md`.

## GitHub Pages deployment

1. Push this repository to `jungjae01/jungjae01.github.io`.
2. In GitHub, open Settings -> Pages.
3. Set the source to deploy from the `main` branch and repository root.
4. After the Pages build completes, the site should be available at `https://jungjae01.github.io/`.

No build step, package manager, framework, or generated artifacts are required.
