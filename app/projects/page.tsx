import type { Metadata } from "next";
import { projects } from "./projects";
import { ProjectCard } from "../components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Rajat Singh",
  description: "Side projects and PM artifacts.",
};

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 sm:pt-16 pb-12">
      <header className="max-w-3xl mb-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)] mb-4">
          Projects
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
          What I&apos;ve been building.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[color:var(--muted)] leading-relaxed">
          A mix of side projects and PM artifacts. Each one started from a
          real question and ended in something concrete I could share. More
          coming as I keep building.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
