import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  // Keep this pointed at real project records. With no Markdown files yet,
  // Astro reports an empty collection; the site intentionally renders its
  // empty state until verified project content is supplied.
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["draft", "published"]).default("draft"),
    verified: z.boolean().default(false),
    sortOrder: z.number().default(0),
    problem: z.string().optional(),
    solution: z.string().optional(),
    role: z.string().optional(),
    contribution: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.url(),
          kind: z.enum(["github", "demo", "app-store", "other"]),
          verified: z.boolean().default(false),
        }),
      )
      .default([]),
    media: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          permission: z.enum(["owned", "approved"]),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
