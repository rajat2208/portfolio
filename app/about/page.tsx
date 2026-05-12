import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Rajat Singh",
  description:
    "About Rajat Singh: 5 years of product work at Microsoft and AI startups, CS background, MBA at Foster.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 sm:pt-16 pb-12">
      <header className="pb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)] mb-4">
          About
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
          A little background.
        </h1>
      </header>

      <section className="space-y-5 text-base leading-relaxed">
        <p>
          I&apos;m a graduating MBA student at the{" "}
          <span className="highlight">Foster School of Business</span>{" "}
          (University of Washington), recruiting for Product Manager roles —
          and increasingly interested in forward-deployed roles, where the job
          is to sit close to a customer, understand a hard problem, and ship
          something that solves it.
        </p>
        <p>
          Before Foster, I spent five years in product at{" "}
          <span className="highlight">Microsoft</span> (Viva Goals and the
          Copilot integration that grew out of it), at the Series-C OKR startup
          Ally.io before it was acquired by Microsoft, and at Sabre working on
          airline scheduling. Most recently I interned at{" "}
          <span className="highlight">Endo MD Health</span>, a Seattle
          healthcare startup, where I built AI-driven data pipelines for
          clinical workflows.
        </p>
        <p>
          My undergrad is Computer Science with a minor in Data Science from
          Manipal (India). That background is part of why I build — I&apos;d
          rather make a rough prototype to test a hypothesis than write a deck
          arguing for it.
        </p>
      </section>

      <SectionOrnament />

      <section>
        <h2 className="font-serif text-2xl font-semibold tracking-tight mb-5">
          What I&apos;m looking for
        </h2>
        <ul className="space-y-3 text-base leading-relaxed">
          <li>
            <strong>Product Manager</strong> roles where the work is
            customer-facing and the team ships frequently.
          </li>
          <li>
            <strong>Forward-deployed / solutions</strong> roles at AI labs and
            infrastructure companies — bringing PM-grade product thinking to
            real customer deployments.
          </li>
          <li>
            Teams that take user research seriously and treat metrics as a
            lagging indicator of good judgment, not a replacement for it.
          </li>
        </ul>
      </section>

      <SectionOrnament />

      <section>
        <h2 className="font-serif text-2xl font-semibold tracking-tight mb-5">
          Outside of work
        </h2>
        <p className="text-base leading-relaxed">
          I&apos;m a national medalist in speed skating and roller hockey, and
          I&apos;ve been a teaching mentor for underprivileged students at an
          NGO in India for years.
        </p>
      </section>

      <SectionOrnament />

      <section>
        <h2 className="font-serif text-2xl font-semibold tracking-tight mb-5">
          Get in touch
        </h2>
        <p className="text-base leading-relaxed">
          <a
            href="mailto:rajatsingh2208@gmail.com"
            className="link-animated text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
          >
            rajatsingh2208@gmail.com
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/rajatsingh22"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/rajat2208/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
          >
            Resume (PDF)
          </a>
        </p>
      </section>
    </div>
  );
}

function SectionOrnament() {
  return (
    <div className="flex items-center gap-4 my-12">
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
