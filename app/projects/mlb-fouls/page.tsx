import type { Metadata } from "next";
import { CaseStudy, Section } from "@/app/components/CaseStudy";

export const metadata: Metadata = {
  title: "MLB Foul Ball Heatmap — Rajat Singh",
  description:
    "A probability heatmap that helps a fan maximize their chances of catching a foul ball or home run.",
};

export default function MlbFouls() {
  return (
    <CaseStudy
      eyebrow="Side project"
      title="MLB Foul Ball Heatmap"
      summary="A probability heatmap that turns a stadium map, the night's lineups, and historical hit-trajectory data into a per-section likelihood of catching a foul ball or home run."
      meta={[
        { label: "Role", value: "Solo build" },
        { label: "Status", value: "Live" },
        { label: "Stack", value: "Python · Statcast" },
        { label: "Year", value: "2026" },
      ]}
      liveHref="https://mlb-foul-ball-finder.vercel.app/"
      liveLabel="Open the app"
    >
      <Section title="Problem">
        <p>
          A close friend has been a lifelong baseball fan and has never managed
          to bring a ball home from the stands. Picking a seat is essentially a
          coin flip — most fans buy on price, sightline, or proximity to
          friends, with no sense of where the balls actually go.
        </p>
      </Section>

      <Section title="Who has this problem">
        <p>
          Beyond one friend: the ~70M fans who attend an MLB game each season,
          a meaningful share of whom would happily trade a few seat-map
          tradeoffs for a real shot at a souvenir. Memorabilia and
          fan-experience companies have a parallel interest — knowing where
          balls land is upstream of merch, marketing, and stadium design.
        </p>
      </Section>

      <Section title="What I built">
        <p>
          A probability heatmap layered onto a stadium section map. Inputs:
        </p>
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>The home stadium (geometry varies more than people think)</li>
          <li>That night&apos;s starting lineups (handedness, spray charts)</li>
          <li>
            Historical hit angles and exit velocities from public Statcast data
          </li>
        </ul>
        <p>
          The output ranks stadium sections by the modeled probability of a
          ball landing there during the game.
        </p>
      </Section>

      <Section title="Key decisions and tradeoffs">
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            <strong>Probabilistic, not deterministic.</strong> A &quot;most
            likely section&quot; would be wrong half the time and feel
            authoritative. A heatmap communicates uncertainty honestly.
          </li>
          <li>
            <strong>Lineup-aware over generic.</strong> A lefty-heavy lineup
            shifts the distribution meaningfully. Ignoring it would have made
            the tool basically useless for the use case.
          </li>
          <li>
            <strong>Public data only.</strong> Statcast is rich enough; paying
            for proprietary feeds wasn&apos;t justified for a v1.
          </li>
        </ul>
      </Section>

      <Section title="What&apos;s next">
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>Add an interactive stadium picker with seat-level overlays</li>
          <li>
            Validate the model against the next 100 games of public foul-ball
            videos
          </li>
        </ul>
      </Section>

      <Section title="What I&apos;m learning">
        <p>
          The interesting part hasn&apos;t been the math — it&apos;s the
          product question of how to surface probabilistic output to a
          non-technical user without lying or overwhelming them. The honest
          version of &quot;your seat has a 1.8% chance&quot; is hard to make
          motivating. I&apos;m iterating on how to frame it.
        </p>
      </Section>
    </CaseStudy>
  );
}
