# Portfolio Architecture

**Status:** architecture proposal · **Date:** 2026-10-27 · **Scope:** implementation-ready, static-first architecture; no application code created.

## Decision summary

- **Framework:** Astro, static output, TypeScript. This continues the recon recommendation. Keep all portfolio content server-rendered at build time and add client JavaScript only for the small mobile navigation control if CSS and native disclosure semantics do not suffice.
- **Routing:** `/` for the portfolio, `/projects/[slug]/` for published case studies, framework-generated 404. Do not create project pages until their stories are sufficiently complete and verified.
- **Rendering/data:** local typed content modules and Markdown/MDX content. No runtime API calls, server routes, database, CMS, auth, analytics, or paid services.
- **Styling:** component-scoped or global CSS with centralized custom properties. No UI component framework.
- **Hosting:** Vercel static deployment from Git. Static Astro deploys without a Vercel adapter per the current [Vercel Astro guide](https://vercel.com/docs/frameworks/frontend/astro).

## Framework evaluation

| Option | Fit | Trade-off | Decision |
|---|---|---|---|
| **Astro static** | Editorial content, project stories, static HTML, minimal client JS, static media, no backend | The developer may need to learn Astro if unfamiliar; interactive islands require deliberate opt-in | **Selected.** It preserves the recon choice and fits the content model with the least browser runtime. |
| **Next.js App Router with `output: 'export'`** | Familiar React component model, typed project pages, Vercel support, exported static HTML; the official guide confirms `next build` emits an `out/` directory and dynamic routes need build-time parameters | React/Next runtime and conventions are more than this mostly static portfolio needs. Static export excludes server-dependent features and built-in image optimization without a custom loader. No advantage requires these trade-offs today. | Viable alternative if Dita specifically prefers React/Next or later needs a richer React UI. Not selected for first release. |

Next.js static export is technically compatible with Vercel and can use App Router Server Components at build time. The [official static export guide](https://nextjs.org/docs/app/guides/static-exports) documents `output: 'export'`, the generated `out` folder, and export limitations; Vercel’s [Next.js guide](https://vercel.com/docs/frameworks/nextjs) documents integrated deployment. The project currently has no application code or framework, so no migration cost favors Next.js. Astro stays the smaller fit for the stated content-first, no-backend scope. Revisit only if the design stage calls for meaningful React-only interaction.

## Repository and top-level structure

The inspected workspace contains only the reconnaissance deliverables; there is no source app, asset library, package manifest, or initialized Git repository. This is the proposed structure for implementation. Architecture documents stay in `outputs/replica/` during this planning stage; the build stage can create the app at the workspace root and retain the planning folder.

```text
/
├── public/
│   ├── favicon.svg
│   ├── og/portfolio-card.png
│   ├── images/projects/<slug>/
│   └── fonts/                         # only if licensed local font files are selected
├── src/
│   ├── content/
│   │   ├── config.ts                  # Astro content collection schemas
│   │   ├── projects/                  # one Markdown/MDX case study per project
│   │   └── approach/                  # optional verified engineering stories
│   ├── data/
│   │   ├── site.ts                    # identity, links, about and learning content
│   │   └── expertise.ts               # grouped capabilities
│   ├── layouts/
│   │   ├── SiteLayout.astro
│   │   └── CaseStudyLayout.astro
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── MobileNav.astro            # isolated interaction only if necessary
│   │   ├── HeroSection.astro
│   │   ├── ProjectGrid.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectMedia.astro
│   │   ├── ExpertiseSection.astro
│   │   ├── ApproachSection.astro
│   │   ├── AboutSection.astro
│   │   ├── ContactSection.astro
│   │   ├── SiteFooter.astro
│   │   └── SkipLink.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/[slug].astro
│   │   └── 404.astro
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       └── utilities.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Do not create empty folders or placeholder application files during architecture. The tree shows intended boundaries, not work performed.

## Routing and page composition

- `/`: one editorial page with in-page anchor sections `#projects`, `#expertise`, `#approach`, `#about`, `#contact`.
- `/projects/[slug]/`: pre-rendered only for published content collection entries. The dynamic route maps the slug to a static page at build time.
- `/404.html`: useful not-found page emitted as static HTML and served by Vercel for unknown routes.
- No separate `/now`, blog, API routes, redirect middleware, or client-side router in release one.

## Component boundaries and interfaces

All content is passed as props or imported from typed local modules. Visual components do not fetch data or own project policy. Astro components are static by default. The only client directive, if required, belongs to `MobileNav`; do not hydrate every component.

| Component | Responsibility / contract |
|---|---|
| `SiteLayout` | HTML document, language, metadata defaults, global CSS, skip link, header/footer slots. Receives page title, description, optional canonical URL and social image. |
| `SiteHeader` | Display name/wordmark, anchor navigation, GitHub link. Has compact/scrolled styling without JS-dependent content. On case-study routes, section links point to `/#...`. |
| `MobileNav` | Optional small stateful menu; open/closed, Escape, outside dismissal if designed, focus behavior, `aria-expanded`/`aria-controls`. If the visual design can use a CSS-only/native disclosure cleanly, omit the hydrated component. |
| `HeroSection` | Identity, approved positioning, two calls to action, decorative or factual engineering visual with accessible alternative. No invented metrics or activity indicators. |
| `ProjectGrid` | Receives a list of published project summaries, renders cards in stable content order. Empty collection renders no section; no false “coming soon” cards. |
| `ProjectCard` | Receives summary, technology tags, optional media, optional case-study/source/demo links. Excludes absent fields. Uses one primary card link and avoids nested anchors. |
| `ProjectMedia` | Responsive image/diagram/video rendering. Receives media kind, local path, alt text, optional caption, width/height or aspect ratio, and poster/caption tracks for video. Empty media yields no empty frame. |
| `[slug]` case-study route | Queries published project entries at build time and passes content to `CaseStudyLayout`. Unknown slug returns `undefined` from static route generation; draft entries are not generated. |
| `CaseStudyLayout` / `ProjectCaseStudy` | Page heading, metadata, structured story sections, optional media, technologies, outbound links, return link. Content blocks render only when present. |
| `ExpertiseSection` | Renders grouped capability lists from a typed constant. No scores, bars, or unsupported seniority language. |
| `ApproachSection` | Renders verified decision stories or principles. If no stories exist, hide the section rather than show an empty shell. |
| `AboutSection` | Renders approved introduction/philosophy and optional current learning statement. Optional statement omitted cleanly. |
| `ContactSection` | GitHub is the known configured destination; other links are conditional on verified data. Email is omitted until supplied. |
| `SiteFooter` | Simple anchor links, available socials, dynamic year. No invented accounts or location. |
| `404` | Clear not-found text, return-to-home link, same shell and metadata. |

## Design tokens and layout

Centralize final values in `src/styles/tokens.css`. Design stage should define and validate values; the values below preserve recon direction and remain provisional.

- Color roles: `--color-canvas`, `--color-surface`, `--color-ink`, `--color-muted`, `--color-line`, `--color-accent`, `--color-focus`.
- Type: `--font-display`, `--font-body`, `--font-mono`; locally hosted licensed font or system fallback, no remote font dependency.
- Type scale: fluid `clamp()` values for display and section headings; body remains comfortably readable; code/annotation type never carries essential prose.
- Spacing: named scale from tight inline gap through large section spacing; define page gutters and content max-width.
- Shape/elevation: subtle border radius and low/no shadow; avoid glass panels and heavy gradients.
- Motion: transition duration/easing tokens and `@media (prefers-reduced-motion: reduce)` override. Base content must be visible before and without motion.
- Grid: centered max-width container; desktop twelve-column conceptual grid with project media allowed to break beyond body text measure; single-column stack at small widths.

## Data flow

1. `src/content/projects/*.md` entries are validated by Astro content schema during development/build.
2. The home page queries entries marked `status: 'published'`, projects only summary fields into `ProjectGrid`, and emits section only when at least one item exists.
3. The dynamic project route uses the same published collection to generate case-study pages. Markdown content supplies the detailed narrative.
4. Site-wide approved identity, social destinations, about text, and footer are imported from `src/data/site.ts`.
5. Expertise groups and approach stories use local typed data. Missing optional copy produces omission, not fallback claims.
6. Media points to local assets in `public/` or Astro-imported assets for build-time sizing. Remote image hosts are excluded unless a future content requirement justifies them.

There are no client fetches, API keys, secrets, CMS credentials, or private data in the shipped site.

## Asset strategy

- Store assets by project slug under `public/images/projects/<slug>/`; keep portfolio-level assets under `public/images/`.
- Use supplied and permitted screenshots, original diagrams, or annotated crops. Record source/permission in the content authoring notes, not as user-facing copy unless attribution is required.
- Prefer AVIF/WebP variants where the build workflow supports them; retain a broadly supported fallback. Set intrinsic dimensions/aspect ratio to prevent layout shift; lazy-load below-fold images.
- Screenshots must have descriptive alt text when they convey UI or architecture; decorative visuals use empty alt and must not repeat nearby copy. Diagrams need a text explanation in the case-study body.
- Videos use a poster, user-initiated playback, captions, and transcript or equivalent summary. Do not autoplay or load third-party embeds on page load.
- Use the existing reference notes under `outputs/replica/screens/` as research records only. Do not copy reference-site assets.

## Navigation and interaction

- Main navigation uses native links to section IDs. Anchor targets account for any sticky header via `scroll-margin-top`.
- Mobile menu opens with a named button, exposes `aria-expanded`, closes on Escape, and returns focus to the button. Choosing a section closes menu and allows the native anchor navigation. If a `<details>` pattern meets the design, prefer it over a JS state machine.
- Focus indication is visible and not color-only. Hover effects have equivalent focus styles. No critical content requires interaction to reveal it.
- Project cards have one clear primary destination. Optional GitHub/demo actions sit separately outside the card link boundary.
- No search, filtering, modal gallery, theme toggle, animations on scroll, or client-side route loading in first release.

## Responsive strategy

- 320–479 CSS px: one column, 16–24 px gutters, vertical project cards, responsive media before text, navigation scroll row or compact menu, no fixed-height hero.
- 480–899 px: fluid gutters, content constrained to readable measure, two cards only if each remains legible.
- 900 px and up: centered max-width editorial grid; hero copy and motif may sit in two columns; project cards can alternate/asymmetrically pair visual and text while preserving order and reading flow.
- Use responsive type/spacing, `minmax(0, 1fr)`, intrinsic media ratios, and overflow-safe code blocks. At narrow widths, code may wrap or use an explicitly labeled horizontal scroll region; page itself must not overflow.
- Validate reflow at 320 CSS px, 200% zoom, portrait/landscape mobile, and desktop. Hover is never required.

## Accessibility, SEO, and quality

- Semantic landmarks, one `h1` per route, logical heading order, skip link, unique IDs, meaningful link text, keyboard operation, visible focus, touch targets, and AA contrast for text/controls.
- Honor reduced-motion. Avoid forced smooth scrolling when reduced motion is requested. Ensure mobile menu state is announced.
- Every informative asset has alternative text; video includes captions; diagrams have prose explanation. No content is encoded solely in color or image.
- `SiteLayout` sets unique title and description, `lang="en"` unless locale changes, Open Graph/Twitter metadata using approved image, favicon, and canonical URL only once a production domain is known. The head uses absolute production image URLs derived from one site URL constant.
- Add `robots.txt` and sitemap only when routes and canonical domain are known; do not publish preview host URLs as canonical.
- Performance goal: static HTML, no third-party scripts, no large framework client bundle, no layout shift from media, no auto-play assets. Use Lighthouse as a manual release check, not as a promise of exact scores.

## Test and verification strategy

Architecture stage defines, but does not run, checks. Keep dependencies limited. Before deployment, implement and run:

1. Type/schema check: `npx astro check` (add `@astrojs/check` and TypeScript only if included in the selected Astro setup).
2. Production build: `npm run build` (expected static output under `dist/`).
3. Local preview: `npm run preview` and inspect `/`, each generated project page, and 404 behavior.
4. Link/content check: every published internal route resolves; external links are verified; drafts/unverified content do not render; absent fields produce no empty elements.
5. Accessibility review: keyboard-only nav/menu, visible focus, reduced motion, screen-reader landmark/heading scan, contrast check, 320px reflow and 200% zoom.
6. Visual QA: desktop and mobile screenshots against approved design; check long titles, no media, one project, and many project cards.
7. Lighthouse or equivalent manual audit on production preview for performance, accessibility, SEO, and best practices; fix material regressions before production.

## Deployment architecture

- Vercel project connected to the Git repository, with framework preset Astro and no server adapter. Production branch and preview behavior are configured in Vercel after repository setup.
- Build command: `npm run build`; output directory: `dist`; install from the committed lockfile.
- Static assets served through Vercel CDN; no server functions or environment variables required.
- Commit generated preview metadata only if intentionally needed; do not commit `.vercel/` project identifiers unless repository policy requests it.
- Vercel plan quotas and current terms are external and can change. Confirm the Hobby account remains appropriate before production deployment; this architecture does not require paid services.

## Risks and trade-offs

| Risk | Mitigation |
|---|---|
| Real project stories/media are missing | Schema supports drafts; publish only complete, approved items; no invented projects. Site can launch with fewer than two projects if Dita chooses, though evidence depth will be lower. |
| Astro is unfamiliar | Keep conventions small and use standard content collections; no custom build pipeline. If the design stage needs substantial React UI, re-evaluate Next.js before implementation. |
| Static export constrains future dynamic features | No current requirement needs runtime behavior. Revisit framework/deployment only if a concrete feature needs a backend. |
| No confirmed domain/email/secondary profiles | Omit those values from the public site; use GitHub only after profile verification. |
| Design uses screenshots/diagrams that may be confidential | Obtain permission and scrub sensitive data before assets are added. |
| External plan limits may change | Check Vercel’s current plan terms before go-live; avoid paid integrations and server features. |

## Provenance and unresolved decisions

**Known:** Dita Suhito, supplied GitHub URL, iOS technology/specialty areas, Vercel Hobby/$0 target, static/no-backend preference, no existing app. The prompt supplies the display name; the GitHub URL is user-supplied but still should be verified before publication.

**Assumed:** English copy; Astro TypeScript implementation; warm light palette; Astro content collections for case studies; one-page home plus project routes; public image assets are locally hosted.

**Required later:** exact headline and bio, project names and details, contribution statements, outcomes if any, screenshots/media permissions, email and professional URLs, domain, résumé decision, final token values, and preference for Astro versus Next.js if Dita has an existing framework preference.

## References

- [Astro on Vercel](https://vercel.com/docs/frameworks/frontend/astro)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- Recon source: [recon.md](recon.md), [features.csv](features.csv), [screens/README.md](screens/README.md)
