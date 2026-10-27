# Interaction and Motion Specification

The portfolio is primarily a static reading experience. Prefer native links/buttons and browser navigation. JavaScript is limited to the mobile menu only if the approved design needs it.

## Navigation and anchors

- Header/footer navigation uses native anchors to unique section IDs.
- Smooth scrolling is allowed only when reduced motion is not requested. Otherwise scrolling is immediate.
- Case-study links target home anchors such as /#projects or /#about. Back link targets /#projects.
- Anchor scroll margin equals header height plus 16 px. Header is static by default.
- If current-section highlighting is implemented, use aria-current=location only for the actual current section, add an underline/marker beyond color, and avoid announcements on each scroll tick.

## Actions and external links

- Primary Explore projects link targets #projects.
- Secondary GitHub link has visible text and an optional external icon. The supplied destination must be verified before publication.
- Email appears only when supplied and verified; use a mailto link and readable label.
- External links communicate purpose and whether they open a new tab. New-tab links use safe rel attributes and accessible new-tab notice; same-tab is preferred for GitHub.
- Use HTTPS except verified mailto. Invalid/unknown destinations do not render.

## Mobile menu

- Closed: named button “Open navigation,” aria-expanded=false, aria-controls references nav.
- Open: button says “Close navigation,” aria-expanded=true; links appear below header in DOM order.
- Enter/Space toggles. Escape closes and returns focus to trigger. Selecting a link closes menu and performs native navigation.
- No focus trap because menu is not modal. Hidden links are excluded from tab order.
- Native details/summary or CSS behavior is preferred if it meets the specification. No menu library.
- Optional animation ≤ 220 ms and ≤ 4 px; removed for reduced motion.

## Project cards and case studies

- A card with case-study route has one primary link. Repository/demo links are sibling controls, never nested anchors.
- A card without a destination is noninteractive; hover must not imply clickability.
- Hover changes underline/border/accent subtly; keyboard focus is at least as clear.
- No delayed preview, autoplay, expansion, or hover-only details.
- Missing tags/media/links omit the element; no disabled or fake CTA.
- Images are passive; no lightbox for first release. Video is user-initiated, with captions and transcript/summary; no autoplay. Interactive diagram zoom is out of scope.

## State styling

| Element | Default | Hover | Focus-visible | Pressed | Missing destination |
|---|---|---|---|---|---|
| Body link | Cobalt, underlined | Darker accent, stronger underline | 2 px focus outline + 2 px offset | Dark accent | Plain text |
| Header link | Ink | Underline or short accent marker | Outline and underline | Accent marker | Omit |
| Primary CTA | White on cobalt, 48–52 px | Darker cobalt | High-contrast outline | Dark accent; ≤1 px shift | Omit |
| Project card link | Ink title, quiet border | Subtle border/underline and art scale ≤1.01 | Clear ring | Underline/accent | Noninteractive article |
| Menu trigger | Visible icon and accessible name | Subtle tint | Focus ring | State change | Not applicable |

Focus uses 2 px solid focus color with 2 px offset. Do not signal states only by color. Never suppress focus during transitions.

## Motion

- Hover/focus transition 120–180 ms; menu up to 220 ms.
- Opacity and transforms up to 4 px only. No parallax, scroll hijacking, continuous motion, code typing, blinking cursor, animated counters, or section-reveal delay.
- Static content appears immediately.
- Reduced-motion mode removes movement and smooth scroll, while preserving all content and active/focus distinction.

## Accessibility requirements

- Native links/buttons with accessible names; skip link to main; one H1 per page; ordered headings; labeled nav landmarks.
- Keyboard operation, visible focus, no trap, no hidden content required for comprehension.
- Click targets at least 44 × 44 px for menu/icon controls.
- Link distinction does not rely on color alone. Normal text contrast ≥ 4.5:1; large text ≥ 3:1; verify component/control focus contrast during build QA.
- Images/diagrams have alternatives; decorative motif is hidden from assistive technology and not the sole source of information. Video has captions and transcript/summary.

## Verification checklist

- [ ] Entire site navigable by keyboard.
- [ ] Skip link appears on focus and reaches main.
- [ ] Menu state is announced, Escape closes it and returns focus, selection closes it.
- [ ] Anchors land below header and remain visible.
- [ ] Every external destination is verified and purpose is clear.
- [ ] Cards without URLs do not look/behave like controls.
- [ ] No nested anchors; repository/demo actions are independently focusable.
- [ ] Reduced motion removes nonessential movement and smooth scrolling.
- [ ] No content requires hover, animation completion, or click to appear.
- [ ] Focus and contrast are legible across all component states.
