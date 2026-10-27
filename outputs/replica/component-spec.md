# Component Design and Behavior Specification

Component contracts follow architecture.md. Sizes are CSS pixels at desktop base unless noted. Color, type, and spacing values are in design-system.md.

## Shared primitives

### SectionIntro
Inputs: section ID, optional ordinal, eyebrow, heading, optional one-sentence description. Renders a semantic section heading with stable anchor ID; ordinal is nonessential. No icon by default. Acceptance: no duplicate IDs and proper heading order.

### ActionLink
Inputs: label, href, variant (primary, secondary, text), optional external flag and icon. Primary is cobalt fill with white label, 48–52 px high, and 20–24 px horizontal padding. Secondary is transparent with ink border or underline. Text action is an accent underlined link. External links communicate destination and new-tab behavior accessibly. Missing href means no control.

### TechnologyTag
Receives one approved label. Uses compact neutral text and restrained border. No skill-rating dots, years, or rainbow of category colors. Missing tags mean no tag group.

## SiteHeader and MobileNav

### SiteHeader
Inputs: name, route context, navigation items, verified social links. Desktop height 76–88 px; name left, section links right, GitHub action last. Wordmark is styled text, not a fabricated logo. Home links use section IDs; case-study links point to /#section.

Header is static by default. Optional active-section styling may be implemented only if reliable; otherwise omit it. States: default, hover, focus-visible, narrow menu closed/open.

### MobileNav
Use a 44 × 44 px minimum named button with aria-expanded and aria-controls. Open state displays a simple vertical link list below the header, not a full-screen overlay. Enter/Space toggles. Escape closes and returns focus to trigger. Selecting a link closes the menu. No focus trap. Hidden links are removed from tab order while closed. Prefer native disclosure/CSS behavior; otherwise use one small controller, no menu library.

## HeroSection

Inputs: approved name, role label, headline, support copy, primary/secondary links, optional visual. Desktop layout: text spans 6–7 columns and visual 4–5; mobile stacks text before motif. CTAs remain outside the graphic.

Visual is an abstract module/network diagram without fake code, metrics, screenshots, or assertion about shipped architecture. If decorative, hide it from assistive technology. If it conveys structure, label it illustrative and provide a text explanation. Public release requires approved headline and copy; no fallback factual claims.

## ProjectGrid and ProjectCard

### ProjectGrid
Receives published project summaries in stable order. Desktop uses editorial rows; mobile stacks. Empty list hides the section and its navigation link. No carousel.

### ProjectCard
Inputs: title, summary, problem/solution synopsis, contribution, technology tags, optional media, optional case-study/source/demo links. Order: media → title/summary → contribution → tags → available actions.

A card with a case study has one primary destination. Source/demo links are separate sibling controls, never nested anchors. Without a destination, render as noninteractive content. Optional fields disappear cleanly. Publication requires verified core contribution facts.

States: default, hover, focus-visible, active/pressed. Hover adds subtle underline/border/accent or art scale ≤ 1.01. Focus is at least as clear as hover. No dead CTA.

## ProjectMedia

Inputs: kind, source, alt, optional caption, dimensions, poster/captions/transcript for video. Responsive frame with intrinsic ratio; choose object-fit per asset. Device frame only for real app screenshot.

States: present, omitted, video paused/playing, media failure fallback. No autoplay or spinner for static images. Failure must not remove project text. Diagrams need explanatory prose; captions associate accessibly.

## ProjectCaseStudy

Inputs: validated project entry and Markdown body. Composition: back link, title, summary, optional technologies/links, optional hero media, ordered story sections, return/contact action.

Supported blocks: context, constraints, role/contribution, approach, decision, implementation, testing/maintenance, outcome, media. Render only nonempty blocks. Outcome requires evidence. Acceptance: no empty headings; one H1; contribution easy to find; long code/media responsive; absence of screenshots does not break the hierarchy.

## ExpertiseSection

Receives typed expertise groups. Three columns desktop, two tablet, one mobile. Each group has a title, optional short explanation, and list. No scores, bars, years, or seniority claims. Group ordering is data-defined.

## ApproachSection

Receives verified/published stories. Vertical numbered list; each uses Context, Decision, Trade-off labels. Optional testing/maintenance impact follows. Hide section and nav link when empty. Each story shows problem → decision → trade-off.

## AboutSection

Inputs: approved introduction, philosophy, optional learning direction, optional approved portrait. Narrow text column with philosophy paragraph. No generated default portrait. Omit absent text. Hide entire section/nav item if all content is missing.

## ContactSection

Inputs: verified contact/social links and approved short invitation. Display heading, short line, GitHub and optional email. Visible text labels accompany icons. Omit missing channels. GitHub is not considered verified until checked before publication.

## SiteFooter and NotFoundPage

Footer receives name, section links, verified social links, and current year. Uses fine top rule; copyright left and repeated links right on desktop; stacked on mobile. No unlabeled icons.

404 uses shared shell, clear heading, short explanation, and home link. Keep semantic landmarks and working navigation.

## Component acceptance

- Shared layout and header/footer across home, case study, and 404.
- No data fetching or artificial loading states.
- Missing optional fields suppress their UI.
- Native links/buttons, accessible names, visible focus, and equivalent hover/focus cues.
- Responsive dimensions follow responsive-spec.md; reduced motion and state colors follow interaction-spec.md.
