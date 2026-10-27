# Responsive Specification

Breakpoints: 720 px and 1080 px, with a wide-screen refinement at 1440 px. These are layout transitions rather than device locks.

## Global rules

- Content max width 1280 px; reading width 680–720 px.
- Page gutters: 22 px at 375–430; 18 px below 375; 40 px tablet; 64 px desktop 1280–1440; 80 px at 1600+.
- No fixed-height sections. Use intrinsic media ratios, minmax(0, 1fr), and overflow-safe wrapping.
- Body copy is at least 16 px. Preserve semantic source order.
- Long diagrams stack or use a labeled keyboard-scrollable inner viewport; never cause page-level horizontal scroll.
- No essential content depends on hover.

## Representative viewports

| Viewport | Layout | Hero | Projects | Navigation and spacing |
|---|---|---|---|---|
| 375–430 mobile | One column, 22 px gutters | Headline 44–60 px; copy then visual; CTAs wrap naturally | One stacked card; 3:2 media; tags/actions wrap | Name + menu trigger; vertical menu. Sections 64–80 px apart; 44 px controls |
| 768–1024 tablet | 6–8 columns; 40 px gutters; max width 944 px | At 768 stack; above 900 may use 5/3 columns if legible | One-column rows around 768; two columns only near 900–1024 if text remains readable | Full links above about 900 only if they fit; section spacing 80–96 px |
| 1280–1440 desktop | 12-column concept; 64 px gutters; max width 1280 | Copy 7 columns, visual 5; headline 80–100 px | Editorial rows with 7/5 image/text split; alternate sparingly | Inline nav; sections 104–120 px apart |
| 1600+ wide | Center content at 1280 px; 80 px outside gutters | Keep composition anchored to max width | Keep text 420–500 px; preserve image ratio | Add outside whitespace, not stretched prose or oversized type |

## Typography by width

| Width | Hero | Section heading | Body |
|---|---:|---:|---:|
| ≤ 430 | 44–60 px | 34–42 px | 16–17 px |
| 431–767 | 56–72 px | 38–48 px | 17–18 px |
| 768–1079 | 64–82 px | 42–54 px | 17–18 px |
| 1080–1439 | 80–100 px | 48–60 px | 18 px |
| ≥ 1440 | max 104 px | max 60 px | 18 px |

Text wraps naturally; no fixed headline widths that cause clipped words. At 1600+, margins grow while typography stays capped.

## Hero changes

- At 820 px and below, stack copy, actions, then motif.
- Between 821–1079, split only if copy has at least 55% of inner width and motif at least 260 px; otherwise stack.
- At 1080+, use 7/5 columns. Align motif to headline/support height.
- On phones, headline/actions remain above the illustration; the motif must not push core message below the fold.

## Project cards and case studies

- ≤ 719: media, title, description, contribution, tags/actions vertically; no carousel.
- 720–1079: side-by-side editorial rows only above 850 px; otherwise stack.
- ≥ 1080: 7/5 media/text rows; alternate only while DOM order remains clear.
- Prose stays within 720 px at every size. Case media can extend to 1100 px desktop and full content width mobile.
- Code wraps or uses a labeled inner scroll area; never make the page wider. Two-panel diagrams become sequential labeled panels with a text explanation.

## Navigation changes

- 375–430: wordmark and menu trigger; list opens below header. No body lock or focus trap.
- 768: inline links if they fit with 44 px touch height; otherwise use same disclosure menu.
- 1024+: full links plus GitHub label. Measure available width instead of assuming all tablets can fit desktop nav.
- Active section marker is optional; if used, it has a non-color cue and does not shift layout.

## Acceptance checks

- No horizontal overflow at 320, 375, 430, 768, 1024, 1280, 1440, or 1600 CSS px.
- At 200% zoom, content reflows and navigation remains operable.
- At 375 px, headline and primary/secondary actions are visible without clipping; illustration remains secondary.
- Long titles, many tags, missing media, large diagrams, and long code do not break layout.
- Mobile menu works by keyboard/touch; cards work without hover.
