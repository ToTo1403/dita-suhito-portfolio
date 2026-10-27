# Screen Map

**Architecture source:** [architecture.md](architecture.md) · **Design basis:** [recon.md](recon.md)

## Routes and hierarchy

```text
/  Portfolio
├── SiteHeader
├── main
│   ├── HeroSection
│   ├── ProjectGrid (#projects)
│   │   └── ProjectCard × published project count
│   ├── ExpertiseSection (#expertise)
│   ├── ApproachSection (#approach; omit if no verified stories)
│   ├── AboutSection (#about)
│   └── ContactSection (#contact)
└── SiteFooter

/projects/[slug]/  Generated only for each published case study
├── SiteHeader
├── main
│   ├── BackToProjects
│   ├── ProjectCaseStudy
│   │   ├── CaseStudyHeader
│   │   ├── ProjectMedia (optional)
│   │   ├── Context / Problem (optional content required for publish)
│   │   ├── Role and Contribution
│   │   ├── Solution and Technical Decisions
│   │   ├── Architecture / Trade-offs (optional blocks)
│   │   ├── Testing and Maintenance (optional blocks)
│   │   ├── Evidence / Outcome (only when verified)
│   │   ├── Technologies and External Links
│   │   └── Related Projects (optional)
│   └── ContactSection (compact variant)
└── SiteFooter

/404.html
├── SiteHeader
├── main: NotFoundPage + link to /
└── SiteFooter
```

## Home screen sections

| Order | Section | Content | Primary action |
|---:|---|---|---|
| 1 | Header | Name/wordmark, section links, GitHub | Anchor navigation or external GitHub |
| 2 | Hero | Approved iOS developer positioning, expressive headline, native-engineering motif | Explore projects; GitHub |
| 3 | Selected projects | Published project cards with problem/solution/contribution summary, tags, approved image | Open case study or available source/demo |
| 4 | Expertise | Grouped Swift/UIKit, SwiftUI/concurrency, SDK, networking, modularization, testing/tooling | Read onward; no ranking interaction |
| 5 | Engineering approach | Verified short decisions or trade-off stories; hidden if no content | Optional relevant project link |
| 6 | About | Professional introduction, philosophy, optional learning direction | Optional verified professional link |
| 7 | Contact | GitHub and only supplied, verified channels | External profile or email |
| 8 | Footer | Section links, available social links, copyright year | Navigate or open external link |

## Responsive layouts

| Range | Layout and behavior |
|---|---|
| 320–479 CSS px | One-column document; compact inline links or accessible menu; hero copy before motif; stacked cards; media above card text; full-width buttons where needed; no fixed viewport height. |
| 480–899 CSS px | Fluid gutters; single column by default; project grid can become two columns only when cards preserve readable text and imagery. |
| 900+ CSS px | Centered editorial grid and max-width; hero can use copy/artwork columns; project section may use asymmetric rows; case study body remains narrow while media can span wider. |

At all sizes, document source order remains meaningful, media does not crop required information, focus indicators remain visible, and no information depends on hover. At 200% zoom and 320 CSS px the page must reflow without page-level horizontal scroll.

## Navigation flows

### Home to project

`Hero “Explore projects” → #projects → card → /projects/<slug>/ → “Back to projects” → /#projects`

If a project has no approved case study, the card may link to a verified repository or demo; otherwise it is informational and has no fake CTA.

### Reviewer scanning expertise

`Header “Expertise” → #expertise → grouped capabilities → optional approach story → project/contact`

### Contact

`Header “Contact” → #contact → GitHub (known supplied URL, verify before launch) + optional verified email/profiles`

### Case-study route navigation

Header section links point back to home anchors (for example `/#about`). The project page always offers a visible return link. Previous/next links are omitted unless a stable authored order exists.

## Interaction specifications

### Header / mobile menu

- Desktop: visible anchor navigation; if sticky behavior is approved, header offset is reflected in anchor scroll positioning.
- Mobile menu closed: labeled button with `aria-expanded="false"` and `aria-controls`.
- Open: links become visible, button announces expanded state. `Escape` closes and returns focus to trigger. Activating an anchor closes the menu. Tab sequence remains in DOM order. An optional click-outside close is only added if it does not interfere with touch use.
- Prefer native `<details>/<summary>` or CSS layout if it delivers the approved design accessibly; avoid a full-screen modal menu by default.

### Project card

- One primary case-study or project destination per card. A card without a valid destination is not presented as an interactive control.
- Hover and keyboard focus may change border/art crop/underline subtly; focus style is at least as clear as hover.
- Source/demo links remain separate and never nest within a parent anchor.

### Media

- Images and diagrams are static with useful alt/caption. Expand-to-lightbox is out of scope unless the design review finds it essential.
- Video uses user-initiated controls, poster, captions, transcript or summary; no autoplay.
- Missing media omits its frame completely. Broken optional media should not collapse text hierarchy; asset verification is a release check.

### Motion/theme

- Base state has all content visible. Motion is short, nonessential, and removed/reduced by `prefers-reduced-motion`.
- Theme toggle is not in release one. If added later, document system/light/dark states and preserve contrast.

## State coverage

| Component | States |
|---|---|
| SiteHeader | Default, optional scrolled style, menu closed/open on narrow viewport, keyboard focus |
| ProjectGrid | Populated list; hidden when no published entries (should be launch-blocked if projects are required); one item; multiple items |
| ProjectCard | Informational/no link, case study link, source/demo destination, hover/focus |
| ProjectMedia | Present, omitted, video paused/playing, media error fallback |
| Case study | Full approved content; optional blocks absent; unknown slug 404; long title |
| Contact | GitHub only; optional verified email/social channels present |
| 404 | Unknown route with home return link |

No artificial loading or API-error states: page content is built into static HTML. Draft projects are build-time excluded.

## Empty-state policy

- Empty project collection: do not render a decorative empty grid or fabricated examples. Treat as content not ready for portfolio release; alternatively ship a minimal identity page only if Dita explicitly chooses a placeholder launch.
- No approach story: omit approach section and anchor link.
- Missing media, email, biography optional sentence, learning statement, or demo: omit the related element.
- Case-study optional sections: omitted rather than shown as empty headings.

## Component hierarchy and ownership

The shared component contracts are detailed in [architecture.md](architecture.md). Content schemas and optional fields are in [data-model.md](data-model.md). All pages use the same `SiteLayout`, `SiteHeader`, and `SiteFooter`; project pages add the case-study template rather than duplicating the site shell.
