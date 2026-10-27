# Dita Suhito — iOS Developer Portfolio

A static Astro portfolio focused on native iOS engineering. It uses local content, CSS, and SVG artwork; it does not require a backend, database, paid API, or runtime environment variables.

## Local development

Requirements: Node.js 22.19+ and npm 9.6.5+.

```sh
npm install
npm run dev
```

The local server prints the preview URL, normally http://localhost:4321.

## Checks and production build

```sh
npm run build
npm run preview
```

The build script runs `astro check` and generates static output in `dist/`. There is no separate lint command or unit test suite configured yet.

## Adding a project

Create a Markdown entry under `src/content/projects/`, matching the schema in `src/content.config.ts`. Start with status `draft` and `verified: false`. Only publish after project details, individual contribution, links, and media permissions have been checked. The home page and project route include only entries that are both published and verified. Add media under `public/images/projects/<slug>/` and use accurate alternative text.

There are currently no project entries because no project details or media were provided. The projects section shows an explicit in-preparation state rather than invented work. The engineering-approach stories and email are omitted until supplied. Project pages are generated only when a record is published, verified, and includes a problem, role, and contribution.

While `src/content/projects/` has no Markdown records, Astro's glob loader reports that the `projects` collection is empty. This is expected with the current content, not a path or schema error: the homepage handles the empty list and the static project route generates no detail pages. Keep the warning visible rather than suppressing it or adding sample work; it will disappear when real Markdown project content is added.

Set Astro's `site` value in `astro.config.mjs` when the production domain is confirmed. Canonical, Open Graph URL, and absolute social-image metadata are intentionally omitted until then, so local or preview hostnames are never published as production metadata.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, import the repository and select the Astro framework preset. Use a Node.js 22.x build environment at version 22.19 or newer.
3. Use `npm run build` as the build command and `dist` as the output directory if Vercel does not detect them automatically.
4. Review the generated preview deployment at mobile and desktop sizes.
5. Set the production branch and deploy after verifying content, GitHub destination, metadata, and project media.

This project uses static Astro output and needs no server adapter, environment variables, or paid service. No public deployment has been made from this workspace.

## Content and design references

The implementation follows the approved documents under `outputs/replica/`: recon, architecture, screen map, data model, implementation plan, and design specifications.
