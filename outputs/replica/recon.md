# Replica Recon — iOS Developer Portfolio

**Status:** reconnaissance complete · **Date:** 2026-10-26  
**Scope:** evidence-based content, interaction, visual, and technical brief. No application code was created.

## Executive recommendation

Build a compact, editorial one-page portfolio with optional project case-study pages once real project information is supplied. Use a warm off-white canvas, near-black type, and one restrained Swift-inspired cobalt/blue-violet accent. Keep the layout quiet enough for technical writing, then give project artwork a precise, modular visual system: cropped device screens, API/data-flow diagrams, package maps, and annotated code excerpts only when real assets exist. Use large editorial typography, a narrow reading measure, a strong grid, fine rules, and tiny monospaced metadata. Avoid a full-screen fake terminal or app dashboard.

This light direction is the stronger fit for a portfolio whose main proof will be readable case studies and technical decisions. The dark option remains a reasonable alternate theme, but the inspected dark reference is very legible because of disciplined type and spacing; its darkness itself is not the source of quality. A warm surface will differentiate the portfolio from the familiar navy developer template while preserving a technical character through annotations, grid geometry, and the accent.

## Evidence and assumptions

### Verified from the supplied brief

- Role: iOS developer; stated technologies include Swift, UIKit, SwiftUI, Swift Concurrency, async/await.
- Stated areas: iOS SDK development, API integration, modular architecture, networking, feature flags, and developer tooling.
- GitHub URL supplied: <https://github.com/ToTo1403>. The URL is included as a configured destination, but the profile page could not be retrieved during this research run; profile details and repositories remain unverified.
- Hosting target: Vercel Hobby, with no required paid services.
- Workspace inspection found no existing app, package manifest, source files, reusable components, assets, routes, or Git repository. The supplied workspace contained only empty `outputs/` and `work/` folders.

### Verified by live inspection on 2026-10-26

Four portfolio or technical publishing sites were opened and reviewed in the browser. The viewport screenshot was captured for Brittany Chiang’s site at the available browser viewport (849 px wide; full height shown in tool output). No screenshot image export was available to place into this deliverable; the visual evidence and URL notes are recorded in [screens/README.md](screens/README.md).

1. **Brittany Chiang** — <https://brittanychiang.com/>  
   Live page presents a clear name/role/value proposition, social links, a long single-page structure, About, Experience, Projects, Writing, and a full project archive. Project cards include concise descriptions, technologies, and imagery. The page has a dark navy foundation with a calm type scale and large gaps. Adapt: make identity and specialty immediately scannable; keep section navigation and case studies content-led; show contribution and stack together; give each project a custom, meaningful visual. Avoid copying its fixed layout, colors, or content.

2. **Josh W. Comeau** — <https://www.joshwcomeau.com/>  
   Live page leads with an editorial content index and provides clear category navigation, summaries, and “read more” links. Topics and tutorials are organized so technical work feels approachable and explorable. Adapt: create strong entry points for project detail and engineering notes; write informative link labels and short summaries; use subtle personality in small interaction details. Avoid turning the portfolio into a blog-first product before there is enough writing.

3. **Maggie Appleton** — <https://maggieappleton.com/>  
   Live page uses a compact but rich navigation across essays, notes, patterns, talks, podcasts, library, and “now”; it frames work as a growing knowledge garden and makes content types legible. Adapt: a modest “currently learning” or engineering notes area can add a sense of ongoing practice, provided it contains real material. Its distinctive illustration-led identity is not a direct visual template for this portfolio.

4. **Lee Robinson** — <https://leerob.com/>  
   Live page is highly concise: identity and bio, followed by topic groupings and selected writing. Adapt: keep the top of the portfolio brief, make expertise browsable by subject, and let detailed writing carry depth. The page is intentionally minimal; this portfolio still needs stronger project artwork and explicit contribution context.

**Adjacent technical-content reference:** **Swift by Sundell** — <https://www.swiftbysundell.com/> was inspected for how long-form Swift material uses headings, code samples, and explanatory text. It is a technical publication rather than a personal portfolio and informs case-study readability only.

### Assumptions requiring confirmation

- The site is intended to support hiring conversations and demonstrate engineering depth; target audience and desired role are not explicitly specified.
- English is assumed for the first release; locale preference is unknown.
- A light theme with optional system/dark theme support is proposed, not a verified preference.
- Astro is recommended as a static-first implementation choice, not a requirement. Vercel documents zero-configuration deployment for static Astro apps; server features require an adapter. See [Vercel’s Astro guide](https://vercel.com/docs/frameworks/frontend/astro).
- There is no verified email address, LinkedIn, résumé, App Store profile, project list, or project outcome. Do not publish empty links or placeholders as if they were facts.

## Information gaps to resolve before content lock

1. Preferred display name, pronouns (optional), location/time zone (optional), and exact role/positioning sentence.
2. Target role or audience and whether the site should prioritize job search, consulting, open-source credibility, or a mix.
3. Two or three publishable projects: project title, user/problem context, status, role and exact contribution, constraints, approach, trade-offs, verified result if any, tech, links, and permission to show work.
4. For each project: approved screenshots, diagrams, demo video, app store URL, package page, or source repository. Confirm any confidentiality restrictions.
5. About copy: personal motivation and development philosophy, in the developer’s own words.
6. Current learning direction, only if the developer wants it published.
7. Verified contact email and any professional links besides GitHub.
8. Whether a résumé/CV should be linked, and the approved file/version.
9. Domain name, if already owned; otherwise Vercel’s generated domain is sufficient for a first deployment.
10. Preferred light/dark default and any accessibility preferences beyond the recommended baseline.

## Experience definition

### Page inventory

| Page / route | Release | Purpose and content |
|---|---|---|
| `/` Portfolio | First release | Single-page experience with hero, selected projects, expertise, engineering approach, about, contact, and footer. Sticky or compact header links use in-page anchors. |
| `/projects/[slug]` Case study | First release only for projects with sufficient verified detail; otherwise defer | A repeatable, readable project narrative: context/problem, constraints, role, solution, architecture/technical decisions, trade-offs, testing/maintenance, evidence, technology, links, related work. Avoid thin pages with mostly placeholders. |
| `/now` or `/notes` | Later | Optional current learning or technical writing, only after there is useful real content. Could also be a section on the home page initially. |
| `404` | First release | Clear not-found message and link back to portfolio. |

### Navigation

- Header: wordmark/display name; links to Projects, Expertise, Approach, About; a compact “Contact” action. GitHub is an external secondary link.
- Header links on the home page scroll to section anchors and preserve a visible focus ring. On case studies, navigation returns to home sections.
- Case-study pages show “Back to projects” and optional previous/next links only if ordering is meaningful.
- Footer repeats essential section links, GitHub, and copyright year. A contact email appears only after verification.
- Mobile navigation can remain an inline scrollable/compact link row if it fits; otherwise use a clearly labeled menu button with open/closed state and Escape handling.

### Primary user flows

1. **Hiring reviewer:** land → understand specialty and seniority-neutral positioning → open selected project → inspect role, technical choices, trade-offs, evidence → GitHub or contact.
2. **Engineer/recruiter scanning:** land → jump to Expertise → inspect specific areas → open relevant case study → follow source/project link when available.
3. **Project-first visitor:** use “Explore projects” → scan visual cards and tags → open a detail page → return to project list or reach contact.
4. **Mobile visitor:** use visible section navigation or menu → read vertically stacked projects and case studies → use large touch targets for external links.

### Section content and behavior

- **Hero:** developer name and concise iOS engineering position; headline with a concrete craft-oriented statement; primary “Explore projects” anchor; secondary GitHub link. Visual device is a native engineering motif (e.g. composed interface fragments and a typed request/response or module graph) built only from truthful, legible content. No invented terminal output.
- **Selected Projects:** 2–3 cards maximum in the first release. Each card has a project image or diagram, title, short problem and solution summary, verified contribution, and relevant technology tags. Project detail links and source/demo links appear only if available. When there are no approved projects, keep an explicit content placeholder in the source model and do not ship a fabricated card.
- **Engineering Expertise:** grouped capabilities, not progress bars: Swift / UIKit; SwiftUI / concurrency; SDK and framework design; networking / API integration; modularization; testing and developer tooling. These are brief-supplied expertise areas, not claims of years or proficiency rank.
- **Engineering Approach:** concise principles and one or more mini case-study excerpts describing context, decision, trade-off, test/maintenance consequence. Use real examples only; otherwise show this area as pending in editable content data and defer publication until authored.
- **About:** brief introduction, engineering philosophy, optional current learning item. Keep personal details optional.
- **Contact:** GitHub; email and other links only after supplied and verified. If no email is available, use GitHub as the sole contact route.
- **Footer:** simple navigation, GitHub, copyright. No fabricated location, company, or social accounts.

### Interaction and state inventory

- Header: default, scrolled, mobile-menu closed/open; active anchor treatment if it remains useful without scroll-jank.
- Links: default, hover, keyboard focus, active/pressed, visited; external links have clear destination cues and safe new-tab behavior when appropriate.
- Project card: default, hover/focus (subtle elevation/outline/art crop), unavailable link omitted. The full card should not contain nested competing links.
- Case study: normal content, media expanded/lightbox only if it adds value, video poster/play/loading/error with captions and transcript where needed.
- Optional theme control: light/dark/system states only if included; preference persistence must not block rendering. Theme control is out of first-release scope unless user preference warrants it.
- Reduced motion: all nonessential transitions and reveal motion disabled; content remains present without animation.
- No-results, error, and loading states are unnecessary for static content except media; local navigation should not show artificial loading spinners.

### Responsive behavior

- Small screens (320–479 CSS px): one-column layout; avoid horizontal scrolling; hero headline wraps naturally; inline section links scroll or collapse into a semantic menu; project media above card copy; code and diagrams scale within viewport.
- Medium (480–899 px): one- or two-column project grid depending on readability; keep case-study body to a readable measure; navigation remains compact.
- Large (900+ px): centered max-width editorial grid with generous margins; two-column hero (copy plus engineering artifact) and asymmetric project composition; case-study media can span wider than text.
- Use fluid type and spacing with sensible clamps; avoid fixed viewport-height sections; test at 200% zoom and text enlargement. No important content depends on hover.

### Reusable components

`SiteHeader`, `MobileNav`, `SectionHeading`, `ProjectCard`, `TechnologyTag`, `ProjectMedia` (image/diagram/video), `CaseStudyHeader`, `CaseStudySection`, `CodeSample`, `DecisionCallout`, `ExpertiseGroup`, `ExternalLink`, `ContactBlock`, `SiteFooter`, `SkipLink`, `ThemeControl` (optional), `NotFoundPage`.

Editable content should be represented as structured local data/Markdown frontmatter: global identity/contact, projects, expertise groupings, approach stories, about copy, navigation, footer. Include content fields such as `status: draft | published`, `verified: true | false`, link/media alt text, and attribution/permission notes. Omit drafts and unverified claims from public output.

## Visual direction

### Recommended: warm editorial light

- Foundation: warm paper/off-white (`#F6F4EF` direction), ink graphite (`#17191D`), muted gray for supporting text, hairline neutral borders.
- Accent: restrained blue-violet/cobalt used for links, tiny state markers, and one motif; final color values must pass contrast checks.
- Type: expressive sans or serif display face paired with a highly readable neutral sans for body; system/monospaced face only for compact technical labels and actual code. Prefer locally hosted or system fonts to reduce third-party requests.
- Grid: 12-column desktop concept, narrow reading measure for explanatory copy, aligned section labels, generous vertical rhythm; one visual break per section, not a new decorative device every screen.
- Project media: consistent art direction but case-specific visuals. Use real app captures where allowed, vector architecture diagrams, package/module maps, or cropped source excerpts. Always include captions and alt text.
- Motion: short opacity/transform transitions for links/cards; restrained reveal only when motion is enabled. No scroll hijacking, parallax dependency, particle field, or animated background.

### Alternative considered: graphite dark

A graphite surface with ivory text and a mint or cyan accent can feel native to developer tools and resembles Brittany Chiang’s observed dark navy treatment. It risks looking like a familiar portfolio preset and reduces comfort for dense case-study reading if contrast and line length are not carefully tuned. Keep as a possible optional theme after the base design is validated.

## Technical investigation and recommendation

### Repository findings

The current directory is empty apart from generated `outputs/` and `work/` folders. No framework, package manager, application, routing, build command, assets, or deployment config exists. No repository is initialized here. Therefore there are no components or project files to preserve or extend.

### First-release architecture recommendation

- **Astro, static output**, with a small amount of vanilla CSS/TypeScript only where interaction needs it. Astro fits a content-led portfolio and Vercel documents static deployment with zero configuration. Avoid a server adapter, functions, database, CMS subscription, analytics dependency, and runtime API calls in the initial build.
- Content in typed local data and Markdown/MDX case studies, depending on how much structured narrative is needed. Keep project metadata and media references easy to edit.
- Use semantic HTML and CSS grid/flexbox; use a small number of reusable components. Avoid a UI framework unless interaction needs grow.
- Public assets checked into the static site with responsive image sizes, modern formats where supported, explicit dimensions, descriptive alt text, and lazy loading below the fold.
- Build commands should be the framework defaults (`npm run dev`, `npm run build`, `npm run preview`) once implementation begins. No current commands exist to inspect.
- Vercel Git integration can produce preview deployments on commits/PRs; a static Astro site needs no paid backend. Confirm account limits and plan terms at implementation/deployment time because they can change. Relevant official docs: [Astro on Vercel](https://vercel.com/docs/frameworks/frontend/astro), [Vercel deployment methods](https://vercel.com/docs/deployments).

## Accessibility and performance requirements

- Semantic landmarks, one `h1`, ordered headings, skip link, keyboard-operable navigation, visible focus, sufficient contrast, meaningful link text, and no hover-only content.
- Honor `prefers-reduced-motion`; avoid auto-playing media. Provide video captions and transcript or textual summary.
- Ensure responsive reflow at 320 CSS px and browser zoom; do not encode text in images. Images and diagrams need useful alt text; decorative artwork uses empty alt.
- Keep shipped JavaScript minimal; render primary text and navigation in static HTML. Use self-hosted fonts or system fallbacks, responsive images, explicit image dimensions, lazy-load noncritical media, and avoid third-party embeds until click-to-load.
- Set title, description, canonical URL once a domain is known, Open Graph image from approved portfolio artwork, and a favicon. Provide a useful 404 route.
- Keep links and contact methods honest and current. No external analytics or backend is needed for release one.

## Prioritized first release

### P0 — required to ship

1. Identity and positioning content approved.
2. Responsive single-page portfolio with hero, selected projects, expertise, approach, about, contact, footer.
3. Two strong, verified project stories with approved media and working source/details links; if fewer exist, publish fewer rather than fabricating.
4. Keyboard and reduced-motion accessibility baseline; metadata, 404, and deployment configuration.
5. GitHub link verified by the developer; email withheld until supplied.

### P1 — quality improvements if content and time allow

1. Dedicated project pages for all selected projects.
2. Bespoke diagrams or screenshots with captions and alt text.
3. Tiny motion refinements, theme toggle, and a curated writing/notes section.

### Defer

CMS, backend, user accounts, search, analytics, newsletter, comments, dynamic GitHub API widgets, project filters, elaborate animation, and multiple themes. These add maintenance without establishing the core portfolio story.

## Next stage

Proceed to `/replica-architect` using this brief. Before architecture is locked, obtain the missing identity and project materials—especially two or three publishable projects with exact contribution and media permissions. The architecture stage can then translate the page inventory, component list, content model, and P0 acceptance criteria into a build plan without inventing content.
