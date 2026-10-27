# Page Design Specification

**Primary direction:** warm editorial light · **Audience:** hiring reviewers and engineers · **Status:** implementation handoff.

## Page concept

The page reads like a compact technical journal, not a service dashboard. Large serif statements set the pace; clean sans-serif copy explains the work; thin rules and small mono indices create technical precision. A consistent left edge anchors section headings and project copy. Project artwork provides visual texture while the page chrome stays calm.

## Hero content direction

Proposed first-pass copy, based only on supplied identity and specialization:

- Eyebrow: DITA SUHITO · IOS DEVELOPER
- Headline: **Native iOS engineering, from APIs to the app layer.**
- Support: “I work across Swift, UIKit, SwiftUI, and the systems that connect them.”
- Primary action: Explore projects → #projects
- Secondary action: GitHub → supplied profile URL, after verification

This copy contains no quantified or historical claim. Do not append years of experience, shipped-product claims, performance results, employers, clients, or other achievements.

## Desktop home layout: 1280–1440 px

1. **Header, 76–88 px high:** name wordmark left; Projects, Expertise, Approach, About links right; Contact action and GitHub text link at the end. A thin rule can span the content width. Header is static by default.
2. **Hero, around 590–680 px including breathing room:** copy takes 6–7 columns and visual composition 4–5. Positioning and headline precede the CTA row.
3. **Engineering motif:** composed vector/module map with generic relationships such as app → feature → client → service. No real project labels, fake code values, performance indicators, or assertions about Dita’s shipped architecture. The motif is a visual metaphor and may be omitted if it competes with the message.
4. **Selected projects:** section number, title, then up to three rows/cards. Combine image/diagram in 7 columns and text in 5 columns. Alternate only when order remains obvious. Use a surface close to canvas and fine rule, not heavy shadow.
5. **Expertise:** three editorial groups: App foundations; SDKs and systems; Quality and tooling. Skills come from the supplied brief; avoid levels and percentages.
6. **Engineering approach:** one to three short decision stories using Context / Decision / Trade-off. Hide section and navigation item if no verified stories exist.
7. **About:** concise introduction and philosophy in a narrow two-column layout. No portrait required; if none is approved, use typography and whitespace.
8. **Contact:** display heading, short invitation, GitHub and only verified email/professional links. Do not claim availability unless confirmed.
9. **Footer:** quiet rule, copyright, essential section links, GitHub.

## Project card

- Media first, default ratio 3:2. Use real screenshot or diagram around 720 × 480 source pixels, with 2× source where useful. Avoid cropping meaningful UI.
- Metadata: use a factual category only when known; otherwise use a simple index.
- Title: 28–36 px, maximum two lines at desktop.
- Description: problem/solution summary of 2–4 lines, followed by one explicit contribution line.
- Tags: up to four visible technologies. Omit excess tags instead of cluttering the card.
- CTA: “Read case study” only when a complete case study exists. Otherwise show verified repository/demo links separately. If no destination exists, the card is informational.
- Hover: underline, border/accent shift, or image scale ≤ 1.01. No card-wide lift or layout shift.

## Project case-study page

Use the shared header/footer, a reading-width narrative, and wider media. Max page width 1280 px, prose width 680–720 px, media up to 1100 px.

1. Back link: ← All projects → /#projects.
2. Heading: project name, concise summary, technologies, verified links.
3. Optional hero media. If absent, title leads directly into the story.
4. At a glance: role/contribution/timeframe only when supplied and confirmed.
5. Context and constraints.
6. Solution and architecture overview.
7. Key decisions: context, choice, alternative/trade-off, consequence.
8. Implementation details grounded in actual work; concise code excerpts only when real.
9. Testing and maintainability when information is supplied.
10. Outcome only when verified; omit heading when unavailable.
11. Gallery/diagrams with captions and explanatory prose; video with transcript/captions.
12. Links and return path to projects/contact.

## Section rhythm

- Content max width 1280 px. Section titles align to the shared left grid edge.
- Section top spacing: 112 px desktop, 88 px tablet, 72 px mobile.
- Each section has a compact eyebrow/number and heading; decorative graphics are not required everywhere.
- Keep at least 48 px between project media and text.
- Case-study prose uses 28–40 px between major sections and 20–28 px between paragraphs.
- Create asymmetry through grid spans, not arbitrary floating positions.

## 404 page

Use the shared shell, a clear “This page isn’t here” heading, a short explanation, and a Return to portfolio link. No illustration or animation required.

## Resolved design decisions

Light theme; serif display + sans body + mono annotations; cobalt accent; 1280 px content width; no theme toggle for release one; optional abstract engineering motif; story-first project cards; static header.

## Content still required

Approved headline and introduction/philosophy; project names and descriptions; exact contributions; project media and permissions; source/demo links; case-study facts/outcomes; email and additional profiles; domain; résumé decision; optional portrait and learning direction. These gaps do not change the visual system.

**Open design review choice:** include or omit the abstract architecture motif after screen review. If present, it must read as illustrative and not as evidence of shipped project work.
