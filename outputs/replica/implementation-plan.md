# Implementation Plan

**Status:** planned only; website implementation has not started. Each milestone produces a reviewable checkpoint. Do not invent missing personal or project content to make a milestone appear complete.

## Milestones and dependencies

### M0 — Confirm content and setup boundaries

**Depends on:** architecture approval.

- Confirm display/role/headline wording and English-language assumption.
- Verify GitHub profile destination. Collect project records, exact contribution, permitted imagery, and external links. Ask whether any project material is confidential.
- Confirm domain or allow Vercel generated domain for first preview. Confirm Astro preference; Next.js static export remains a documented viable alternative.
- Create/initialize repository only when implementation stage begins; no source code is part of these architecture artifacts.

**Acceptance:** content gaps are recorded as known/assumed/required; no unverified claim is used as production copy; selected framework and package manager are agreed.

### M1 — Create static Astro foundation

**Depends on:** M0 framework choice.

- Initialize Astro + TypeScript with static output and minimal dependencies.
- Add global layout, design token stylesheet, semantic document shell, skip link, base metadata, 404 page, and local dev/build/preview scripts.
- Configure Vercel static output; do not add adapter, API routes, secrets, or backend.

**Acceptance:** app builds to static files; `/` and 404 render; no unnecessary client JavaScript; install/build scripts and lockfile are committed.

### M2 — Define typed content and asset pipeline

**Depends on:** M1.

- Add profile/expertise/approach data structures and Astro project collection schema from `data-model.md`.
- Add only real, approved records. Mark all unfinished items draft; make draft exclusion explicit.
- Organize optimized media and document alt text/caption/permissions.

**Acceptance:** malformed required content fails validation; draft/unverified items generate no public page; missing optional fields do not produce empty elements; asset paths resolve.

### M3 — Build portfolio shell and section components

**Depends on:** M1 and approved design direction; may use content fixtures locally but fixtures are not public copy.

- Implement SiteHeader, HeroSection, ProjectGrid/Card, ExpertiseSection, ApproachSection, AboutSection, ContactSection, SiteFooter.
- Apply tokens and editorial grid from approved design specification.
- Implement the narrow-screen menu only if required by final design; prefer the simplest accessible native behavior.

**Acceptance:** order matches screen map; all navigation destinations work; external links render only when verified; project/approach sections disappear cleanly when empty; layout remains usable at mobile widths.

### M4 — Build generated project case studies

**Depends on:** M2 and at least one complete approved project story.

- Generate `/projects/[slug]/` only for published entries.
- Build shared case-study header/body/media/decision callouts and return navigation.
- Render optional sections only when content exists.

**Acceptance:** published slugs resolve; drafts do not; unknown slug returns 404; context, contribution, decision, and trade-off are easy to scan; absent outcomes/media/links do not break the layout.

### M5 — Accessibility, responsive, and content QA

**Depends on:** M3 and M4.

- Review keyboard navigation, menu state, focus visibility, headings/landmarks, color contrast, reduced motion, image alternatives, video alternatives, zoom/reflow, touch target size.
- Inspect desktop, medium, 320px mobile, and 200% zoom. Review long project names and missing media state.
- Check all content and external links with Dita; confirm consent for every published asset and project claim.

**Acceptance:** no keyboard traps; no hidden-by-motion content; no page-level horizontal overflow at 320 CSS px; all media is authorized and described; all links work or are omitted; no fabricated claims remain.

### M6 — SEO, performance, and production build review

**Depends on:** M5 and production domain decision.

- Add final page titles/descriptions, approved social preview, favicon, canonical base URL when domain is verified, robots/sitemap if appropriate.
- Build and preview the production output. Inspect headers, routes, image loading, 404, and social metadata.
- Run an accessibility/performance audit and fix material findings.

**Acceptance:** static build passes; metadata points to production URLs only; social image is approved; no external runtime services are required.

### M7 — Vercel preview and production deployment

**Depends on:** M6, repository, Vercel account, final approvals.

- Connect Git repo to Vercel, set Astro preset and `npm run build`/`dist` if auto-detection does not supply them.
- Review generated preview deployment before production. Confirm current Vercel plan/quotas remain suitable.
- Promote to production only after Dita reviews the preview and approves final content/domain.

**Acceptance:** preview and production routes work; case-study URLs are included; metadata/canonical use correct domain; no build or console errors; site works without paid services.

## Verification commands (to run during implementation)

Commands below assume Astro project initialization and scripts have been created; none have been executed in this architecture-only stage.

```sh
npm install
npx astro check
npm run build
npm run preview
```

For manual production checks, visit `/`, every published `/projects/<slug>/`, and an unknown URL. Confirm output exists under `dist/`, links/media are correct, drafts are absent, keyboard interaction works, and layout passes the responsive/accessibility checks above. A browser-based Lighthouse audit is a final diagnostic rather than a numeric guarantee.

## Vercel deployment checklist

- [ ] Git repository contains app and committed lockfile.
- [ ] Vercel project is connected to the intended repository and production branch.
- [ ] Framework preset detects Astro; build command is `npm run build`; output is `dist`.
- [ ] No server adapter, function, environment secret, paid API, database, or third-party runtime dependency is required.
- [ ] Preview deployment reviewed at mobile and desktop sizes.
- [ ] GitHub, any email, external links, project claims, project media, and permissions verified.
- [ ] Canonical URL and social metadata use the final domain only; generated preview URLs are not canonical.
- [ ] 404 page, sitemap/robots behavior, favicon, and social preview checked.
- [ ] Vercel Hobby plan terms/limits checked at deployment time.
- [ ] Production URL shared with Dita for final review.

## Risks and ordering notes

- The architecture can be implemented before all project details arrive, but project content cannot be honestly completed. Use draft-only development content and exclude it from output.
- M3 visual implementation depends on design tokens and approved screen direction; M2 can proceed with schemas before polished copy is ready.
- M4 may be deferred if no case study is publishable. Do not substitute fake data.
- M7 production promotion is an external deployment action and occurs only after explicit user approval of the concrete preview.
