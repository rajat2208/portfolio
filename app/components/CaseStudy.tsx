import Link from "next/link";
import type { ReactNode } from "react";

type Meta = {
  label: string;
  value: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  summary: string;
  meta: Meta[];
  liveHref?: string;
  liveLabel?: string;
  liveNote?: string;
  children: ReactNode;
};

export function CaseStudy({
  eyebrow,
  title,
  summary,
  meta,
  liveHref,
  liveLabel = "Open live",
  liveNote,
  children,
}: Props) {
  return (
    <article className="max-w-3xl mx-auto px-6">
      <header className="pt-12 pb-12">
        <Link
          href="/projects"
          className="link-animated text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
        >
          ← All projects
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="font-serif mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02]">
          {title}
        </h1>
        <p className="mt-6 text-lg text-[color:var(--muted)] leading-relaxed">
          {summary}
        </p>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-4 text-sm border-t border-[color:var(--subtle)] pt-6">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {m.label}
              </dt>
              <dd className="mt-1.5">{m.value}</dd>
            </div>
          ))}
        </dl>

        {liveHref ? (
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] px-5 py-2.5 font-medium hover:bg-[color:var(--accent)] transition-colors"
          >
            {liveLabel} <span aria-hidden>↗</span>
          </a>
        ) : liveNote ? (
          <p className="mt-8 text-sm text-[color:var(--muted)] italic">
            {liveNote}
          </p>
        ) : null}
      </header>

      <div className="space-y-10 pb-16">{children}</div>
    </article>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent)] mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed">{children}</div>
    </section>
  );
}
