# Design System — Dita Suhito Portfolio

**Version:** 1.0 proposal · **Date:** 2026-10-27 · **Status:** ready for design/build handoff  
**Parent decisions:** warm editorial light direction from recon.md; static Astro boundaries from architecture.md.

## Direction

A warm, editorial portfolio for a native iOS engineer: paper-like background, near-black typography, a compact cobalt accent, expressive serif display type, clean sans-serif body text, thin rules, and small monospaced annotations. Technical character comes from a purposeful module/network diagram and real project material. No generic gradient fields, dashboards, fake terminals, glass panels, or particle effects.

## Theme decision

| Treatment | Strengths | Risks | Decision |
|---|---|---|---|
| Warm light | Comfortable for case studies; clear contrast for screenshots and diagrams; distinct from common navy developer templates | Needs restrained neutrals to avoid a generic paper theme | Primary and only first-release theme |
| Graphite dark | Native-tool atmosphere; colorful app captures can pop | Familiar portfolio trope; long technical copy needs careful contrast | Alternative only; no first-release theme toggle |

## Color tokens

These values are the implementation source of truth. Contrast ratios are approximate calculations against the warm canvas; verify final colors/surfaces during build QA.

| Token | Hex | Use | Approx. contrast on canvas #F7F5F0 |
|---|---:|---|---:|
| --color-canvas | #F7F5F0 | Page background | — |
| --color-surface | #FFFEFB | Card or inset surface | — |
| --color-ink | #1E2222 | Body and headline text | 14.8:1 |
| --color-muted | #555E60 | Supporting text and labels | 6.1:1 |
| --color-subtle | #687174 | Metadata when readable size permits | 4.6:1 |
| --color-accent | #294DA8 | Links, primary CTA, active marker | 7.1:1 |
| --color-accent-hover | #1D397F | Hover and pressed CTA | 9.9:1 |
| --color-accent-soft | #E9EDF7 | Decorative badge or inset fill; text remains ink | — |
| --color-line | #D8D7D1 | Decorative rules and card border | 1.4:1; never sole state cue |
| --color-focus | #173C99 | 2–3 px focus outline | 9.0:1 |
| --color-on-accent | #FFFFFF | Text on accent button (against #294DA8) | 7.7:1 |

Contrast estimates are rounded. Do not lower text or focus opacity. Accent-soft is a decorative fill; foreground text uses ink or muted. Thin decorative lines need not meet text contrast, but control states must be distinguishable through more than color.

## Typography

Use local/system stacks; no remote font service. If a licensed local display face is selected later, include it and its license in public/fonts. Otherwise system fallbacks are intended.

| Role | Font stack | Weight | Size and line-height | Use |
|---|---|---:|---|---|
| Display | Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia, serif | 500–600 | clamp(3rem, 6.3vw, 6.5rem) / 0.98–1.03 | Hero and case-study title |
| Mobile H1 | Same display stack | 500–600 | clamp(2.75rem, 11vw, 4rem) / 1.0 | Widths up to 430 px |
| H2 | Display stack | 500–600 | clamp(2.15rem, 4vw, 3.75rem) / 1.05 | Section titles |
| H3 | Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif | 600 | 1.25–1.5rem / 1.2 | Project/card titles |
| Body | Same sans stack | 400–450 | 1rem–1.125rem / 1.6–1.7 | Explanatory copy |
| Small/label | Same sans stack | 550–650 | 0.8125–0.9375rem / 1.4 | Navigation, tags, captions |
| Technical | ui-monospace, SFMono-Regular, Menlo, Consolas, monospace | 450–600 | 0.75–0.8125rem / 1.45 | Actual code and supplemental annotations |

Body copy remains at least 16 px. Keep prose around 58–72 characters per line and case-study body at 68ch maximum. Use sentence case; no all-caps paragraphs or thin text weights. Technical annotations must not carry essential prose.

## Spacing and grid

Base unit: 4 px.

| Token | Value |
|---|---:|
| space-1 | 4 px |
| space-2 | 8 px |
| space-3 | 12 px |
| space-4 | 16 px |
| space-5 | 24 px |
| space-6 | 32 px |
| space-7 | 48 px |
| space-8 | 64 px |
| space-9 | 88 px |
| space-10 | 120 px |

- Main content max width: 1280 px; article text width: 680–720 px; hero copy width: 610 px.
- Page gutters: 64 px at 1280–1440, 80 px at 1600+, 40 px tablet, 22 px at 375–430, 18 px below 375.
- Desktop uses a 12-column conceptual grid with 20–24 px gutters. Hero copy spans 6–7 columns and motif 4–5.
- At 720 px and below, use a single-column stack. At narrower sizes, content order remains semantic.
- Section gap: 104–128 px desktop, 80–96 px tablet, 64–80 px mobile.
- Card gap: 24–32 px desktop, 20–24 px tablet, 16 px mobile.
- Buttons at least 48 px tall; compact controls at least 44 × 44 px. Anchor target scroll margin equals header height plus 16 px.

## Borders, radius, elevation

- One-pixel neutral rules; use them to structure the editorial page.
- Radius: 2 px on buttons/media, 4 px maximum for cards; technology tags may be pill-shaped.
- Default shadow: none. Optional card hover shadow only if design review approves: very soft, low opacity, no layout movement.
- Focus: 2 px solid focus color with 2 px offset.
- Avoid glass, floating panels, deep shadows, and decorative card-on-card nesting.

## Iconography and project media

- Inline SVG line icons only for arrows, GitHub, external link, and menu. 20–24 px box, 1.75 px stroke, currentColor.
- Primary actions retain a text label; icon-only controls must have an accessible name.
- Use a recognizable GitHub mark only beside visible “GitHub” text.
- Project art must be approved screenshots, diagrams, package/module maps, or actual code excerpts. No generated product UI presented as shipped work.
- If no image exists, use typographic card layout with no empty frame.
- Project media defaults to 4:3 or 3:2; case study media may vary. Crop only decorative context. Device frames only for real app screenshots.
- Informative images receive alt text and a caption when needed. A decorative hero motif uses empty alt and is not the sole location of information.

## Motion and state

- Hover/focus transitions: 120–180 ms. Mobile menu: at most 220 ms.
- Use opacity and transform of no more than 4 px. No parallax, scroll hijacking, continuous motion, or delayed entrance.
- Content is visible immediately; motion is progressive enhancement.
- Reduced motion removes movement and smooth scrolling.
- Links use accent and underline in prose. Header hover adds an underline/marker. Focus-visible uses a high-contrast outline. Pressed state darkens accent briefly. Missing actions are omitted, never shown disabled.

## Token names

Implement centralized custom properties in src/styles/tokens.css for color roles, font stacks, text styles, space-1 through space-10, container widths, gutters, radii, and motion duration/easing. The five design specs define their values and application. No production CSS is created in this stage.
