import type { Metadata } from "next";
import { CaseStudy, Section } from "@/app/components/CaseStudy";

export const metadata: Metadata = {
  title: "Acrobat Sign — Customer Voice Brief — Rajat Singh",
  description:
    "Synthesized customer feedback across the web into prioritized themes and a 30-60-90 day plan for Adobe's Acrobat Sign team.",
};

export default function AcrobatSign() {
  return (
    <CaseStudy
      eyebrow="PM artifact"
      title="Acrobat Sign — Customer Voice Brief"
      summary="If I were an inbound PM at Adobe on the Acrobat Sign team, what would I do in my first 90 days? I pulled customer feedback from across the web, clustered it into themes, prioritized them, and built a 30-60-90 day plan a real team could ship from."
      meta={[
        { label: "Role", value: "Solo, self-initiated" },
        { label: "Type", value: "Strategy brief" },
        { label: "Output", value: "Interactive web brief" },
        { label: "Year", value: "2026" },
      ]}
      liveHref="https://acrobat-sign-brief.vercel.app/"
      liveLabel="Open the brief"
    >
      <Section title="Problem">
        <p>
          Acrobat Sign sits inside a category (e-signature) where the loudest
          competitor — DocuSign — defines defaults customers compare against.
          Public feedback is scattered: G2 reviews, Reddit threads, support
          forums, social media, App Store reviews. No single source tells a PM
          what the top customer pain points actually are, or what to do about
          them.
        </p>
      </Section>

      <Section title="Who this is for">
        <p>
          An incoming PM on the Acrobat Sign team — the artifact I would have
          wanted on my first day. Secondary audience: anyone evaluating how I
          think about product strategy without working alongside me.
        </p>
      </Section>

      <Section title="What I built">
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>
            Pulled customer feedback from multiple public sources (reviews,
            forums, social)
          </li>
          <li>
            Synthesized the raw text into themes and clustered repeated pain
            points
          </li>
          <li>Prioritized and stack-ranked the themes by impact and reach</li>
          <li>
            Drafted a 30-60-90 day implementation plan — what I&apos;d do, in
            what order, and why
          </li>
          <li>
            Shipped the whole thing as an{" "}
            <a
              href="https://acrobat-sign-brief.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[color:var(--muted)] hover:decoration-[color:var(--foreground)]"
            >
              interactive web brief
            </a>{" "}
            rather than a static deck
          </li>
        </ul>
      </Section>

      <Section title="Key decisions and tradeoffs">
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            <strong>Public sources only.</strong> Anything internal would have
            been guesswork dressed up as data. Constraining myself to public
            feedback made the conclusions defensible.
          </li>
          <li>
            <strong>30-60-90 plan, not a roadmap.</strong> A roadmap is what
            you write once you have a team. A 90-day plan is what you write
            when you&apos;re trying to earn the right to one.
          </li>
        </ul>
      </Section>

      <Section title="What I&apos;d do differently">
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>
            The biggest constraint was working from public data only — without
            internal usage metrics or enough volume to reach statistical
            significance on some themes, the stack-ranking is directional, not
            definitive. Access to even a small internal dataset would sharpen
            the prioritization significantly.
          </li>
          <li>
            Add a competitive teardown — what DocuSign / Dropbox Sign /
            PandaDoc have done that maps to the same themes
          </li>
          <li>
            Talk to 5-10 Acrobat Sign users directly to stress-test the
            synthesized themes against lived experience
          </li>
        </ul>
      </Section>
    </CaseStudy>
  );
}
