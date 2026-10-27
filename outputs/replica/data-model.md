# Content and Data Model

**Storage:** local Astro content collections plus typed local site data. No API, database, or CMS. Schemas validate content during build; presentation reads only validated content.

## Content principles

- Separate content from components. Adding or editing a project changes a content file and its assets, not layout code.
- Drafts and unverified records are excluded from public lists and generated pages.
- Optional fields are genuinely optional. Components omit absent elements instead of rendering blank labels, empty image frames, or dead links.
- Write factual project outcomes only when evidence and permission exist. Do not add employers, clients, testimonials, metrics, or role claims without explicit support.
- The example below is schematic and illustrative of field shape only; it is not a real project and must never be added as production content.

## Type/schema sketch

The following TypeScript-like schema is a contract for implementation, not application code. Astro `defineCollection` and Zod can express these constraints; exact API syntax should follow the installed Astro version.

### Site profile (`src/data/site.ts`)

```ts
interface SiteProfile {
  name: string;                        // required: "Dita Suhito" (prompt supplied)
  roleLabel: string;                   // required for publish; approved wording
  headline: string;                    // required for publish; approved wording
  intro?: string;
  philosophy?: string;
  currentLearning?: string;
  location?: string;                   // omit unless approved
  email?: string;                      // omit until real address supplied and verified
  siteUrl?: string;                    // required before canonical/absolute social metadata
  socialLinks: Array<{
    label: string;
    href: string;                      // absolute HTTPS URL; validate protocol
    kind: "github" | "linkedin" | "mastodon" | "other";
    verified: boolean;
  }>;
  copyrightName?: string;              // default to name
}
```

Initial GitHub candidate is `https://github.com/ToTo1403`, as supplied by user. Mark it `verified: false` until checked before launch. Do not infer other social URLs from handle.

### Project frontmatter and body (`src/content/projects/<slug>.md`)

```ts
interface ProjectRecord {
  title: string;                       // required
  slug: string;                        // required, URL-safe, unique
  summary: string;                     // required concise card summary
  status: "draft" | "published";     // required; default draft
  verified: boolean;                   // required; must be true to publish
  sortOrder: number;                   // required stable display order
  problem?: string;                    // required for case-study publication
  solution?: string;                   // recommended; show only when supplied
  role?: string;                       // required for a detailed case study
  contribution?: string;               // required for a detailed case study
  technicalApproach?: string;
  decisions?: Array<{
    title: string;
    context?: string;
    decision: string;
    tradeoff?: string;
    consequence?: string;
  }>;
  testingAndMaintenance?: string;
  outcome?: string;                    // only if evidence is verifiable
  outcomeEvidence?: string;            // source/permission note, not necessarily public
  technologies: string[];              // [] allowed; avoid unsupported skill claims
  media?: ProjectMedia[];
  links?: ProjectLink[];
  featured?: boolean;                  // optional; default false
  publishedAt?: string;                // ISO date only if meaningful
  updatedAt?: string;
  relatedSlugs?: string[];
}

interface ProjectMedia {
  kind: "screenshot" | "diagram" | "video";
  src: string;                         // local path under public/images/projects/<slug>/
  alt: string;                         // required; empty string for decorative only
  caption?: string;
  width?: number;
  height?: number;
  poster?: string;                     // video only
  captionsSrc?: string;                // video captions track, if available
  transcript?: string;                 // or separate transcript content
  permission: "owned" | "approved";
  attribution?: string;                // required if license/permission requires it
}

interface ProjectLink {
  label: string;
  href: string;                        // HTTPS; reject javascript:/data: protocols
  kind: "github" | "demo" | "app-store" | "documentation" | "other";
  verified: boolean;                   // render only when true
}
```

**Body format:** Markdown/MDX supplies ordered case-study sections: context/problem, solution, decisions/architecture, testing/maintenance, evidence/outcomes if supported. Use headings and prose instead of a generic unstructured HTML blob. Optional sections are omitted when their content is absent. Avoid rich MDX components until a real case study needs one.

**Publish rule:** `status === 'published' && verified === true` is necessary but not sufficient. Content review must also confirm required project fields, exact contribution, functioning verified links, media rights, and no empty required sections. Schema refinements should enforce at least `problem`, `role`, `contribution`, and a summary before a case study is generated; optional outcome/media/source link do not block publication if absent.

### Expertise data (`src/data/expertise.ts`)

```ts
interface ExpertiseGroup {
  id: string;
  title: string;
  items: string[];
  description?: string;
}
```

Initial group topics come from the brief: Swift and UIKit; SwiftUI and Swift Concurrency/async-await; SDK/framework development; networking/API integration; modular architecture/feature flags; testing/developer tooling. The developer should approve final labels. Do not add levels or years.

### Engineering approach stories (`src/content/approach/` or typed local data)

```ts
interface ApproachStory {
  id: string;
  title: string;
  status: "draft" | "published";
  verified: boolean;
  context: string;
  decision: string;
  tradeoff: string;
  maintenanceOrTestingImpact?: string;
  projectSlug?: string;
}
```

Hide drafts/unverified stories. If no published stories exist, hide the section and its navigation link.

### Navigation/footer data

Navigation section IDs should be a small literal union: `projects | expertise | approach | about | contact`. Footer links reuse verified social records. Copyright year is computed at render time; copyright name uses approved profile name.

## Illustrative project data — NOT REAL CONTENT

The following example is deliberately generic and must not be mistaken for a real Dita project. It shows which fields may be omitted without breaking layout; keep this record out of the production content directory.

```yaml
# ILLUSTRATIVE ONLY — do not publish
slug: sample-networking-sdk
status: draft
verified: false
sortOrder: 99
title: "[Project title supplied by Dita]"
summary: "[One sentence describing verified context and contribution]"
problem: "[Problem statement to be supplied]"
solution: "[Optional verified solution description]"
role: "[Exact role to be supplied]"
contribution: "[Specific contribution to be supplied]"
technologies: []
media: []
links: []
```

## Asset and link conventions

- Asset path format: `/images/projects/<slug>/<descriptive-name>.<ext>`.
- Keep all case-study assets local to the site and referenced by stable paths. Avoid remote image URLs and external embed scripts.
- File names lowercase, hyphenated, descriptive, and free of private client/project identifiers unless publication is approved.
- Project links are HTTPS only, verified immediately before release, and accompanied by a human-readable label. Do not show an unverified link or empty CTA.
- GitHub profile URL is user-supplied but still needs live verification. Do not infer repository links from profile name.
- `alt` describes informative content in context. If a screenshot is only decoration, use empty alt and ensure it conveys no unique information.
- Permission/attribution fields support editorial review. Remove internal permission notes from rendered HTML unless attribution must be displayed.

## Empty and invalid content behavior

- No published projects: hide project grid; release acceptance should flag missing portfolio evidence rather than insert sample data.
- No media: omit media component and use text-first card/case-study layout.
- No links: omit link list; no disabled/fake buttons.
- No optional decision/test/outcome/about copy: omit that subsection.
- Invalid required fields, duplicate slugs, invalid URL schemes, unverified published links, or missing informative alt text should fail content validation or block the release review.
