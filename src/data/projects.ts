import type { CollectionEntry } from "astro:content";

export type PortfolioProject = CollectionEntry<"projects">;

export function isPublishableProject(project: PortfolioProject): boolean {
  const data = project.data;
  return (
    data.status === "published" &&
    data.verified &&
    Boolean(data.problem?.trim()) &&
    Boolean(data.role?.trim()) &&
    Boolean(data.contribution?.trim())
  );
}
