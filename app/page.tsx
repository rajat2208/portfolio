import Link from "next/link";
import { projects } from "./projects/projects";
import { ProjectCard } from "./components/ProjectCard";

const stats = [
  {
    value: "36%",
    label: "Engagement lift",
    context: "A/B-tested personalization on Microsoft Viva Goals",
  },
  {
    value: "58%",
    label: "Fewer errors",
    context: "Natural-language coaching — later released as Copilot in Viva Goals",
  },
  {
    value: "33%",
    label: "Faster review",
    context: "LLM data pipelines at an AI healthcare startup",
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="pt-16 sm:pt-24 pb-20 grid md:grid-cols-12 gap-x-10 gap-y-12">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)] mb-5">
            Currently recruiting
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
            Rajat Singh.
          </h1>
          <p className="mt-8 text-xl leading-relaxed max-w-2xl">
            Product Manager. 5 years shipping at{" "}
            <span className="highlight">Microsoft</span> (Viva Goals →{" "}
            <span className="highlight">Copilot</span>) and an AI healthcare
            startup. CS undergrad, MBA at{" "}
            <span className="highlight">Foster</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] max-w-2xl">
            Currently building side projects while recruiting for product and
            forward-deployed roles. The work below is what I&apos;ve been making
            when I&apos;m not in class.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--accent)] transition-colors"
            >
              View projects{" "}
              <span aria-hidden className="transition-transform">
                →
              </span>
            </Link>
            <a
              href="mailto:rajatsingh2208@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--subtle)] px-5 py-2.5 text-sm font-medium hover:border-[color:var(--foreground)] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        <aside className="md:col-span-5 md:border-l md:border-[color:var(--subtle)] md:pl-10">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)] mb-8">
            A few signals
          </p>
          <dl className="space-y-8">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <dt className="font-serif text-5xl sm:text-6xl font-semibold leading-none text-[color:var(--accent)] tracking-tight">
                  {stat.value}
                </dt>
                <dd className="mt-2">
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-[color:var(--foreground)] font-medium">
                    {stat.label}
                  </span>
                  <span className="block mt-1 text-sm text-[color:var(--muted)] leading-relaxed">
                    {stat.context}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <SectionOrnament />

      <section className="pb-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="link-animated text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
          >
            All projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionOrnament() {
  return (
    <div className="flex items-center gap-4 pb-16">
      <div className="flex-1 h-px bg-[color:var(--subtle)]" />
      <span
        aria-hidden
        className="text-[color:var(--accent)] text-sm tracking-[0.4em]"
      >
        ❋
      </span>
      <div className="flex-1 h-px bg-[color:var(--subtle)]" />
    </div>
  );
}
