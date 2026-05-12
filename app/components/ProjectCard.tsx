import Link from "next/link";
import type { Project } from "../projects/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-[color:var(--subtle)] bg-[color:var(--surface)] hover:border-[color:var(--accent)] transition-colors overflow-hidden"
    >
      <div className="h-20 w-full relative">
        <ProjectVisual slug={project.slug} className="w-full h-full" />
        {project.status && (
          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.15em] text-white/95 bg-black/30 backdrop-blur px-2.5 py-1 rounded-full">
            {project.status}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold tracking-tight group-hover:text-[color:var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
          {project.longBlurb ?? project.blurb}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.15em] uppercase text-[color:var(--muted)] px-2 py-0.5 rounded-full border border-[color:var(--subtle)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors">
          Read case study{" "}
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
