import type { Metadata } from "next";
import { CaseStudy, Section } from "@/app/components/CaseStudy";

export const metadata: Metadata = {
  title: "Atlas — Executive Intelligence — Rajat Singh",
  description:
    "A five-agent AI system that replaces the monthly cross-functional customer review with a continuous, queryable, action-capable briefing surface for enterprise business-line leaders.",
};

export default function Atlas() {
  return (
    <CaseStudy
      eyebrow="Side project"
      title="Atlas — Executive Intelligence"
      summary="Atlas is a multi-agent AI system built for the VP or GM who convenes the monthly cross-functional customer review. It replaces a two-week slide-deck prep cycle with a continuous briefing surface — one that synthesizes signals across five data sources, surfaces patterns no single system would catch, and lets a leader take action without leaving the product."
      meta={[
        { label: "Role", value: "Solo build" },
        { label: "Type", value: "Product prototype" },
        { label: "Stack", value: "Python · Claude API · Next.js" },
        { label: "Year", value: "2026" },
      ]}
      liveHref="https://atlas-mu-henna.vercel.app/briefing"
      liveLabel="Open the briefing"
    >
      <Section title="Problem">
        <p>
          Every month, cross-functional leadership teams at large enterprises
          prep for a customer insights review. The cost: roughly 80 hours of
          senior knowledge worker time — Sales, CS, Marketing, Support, and
          Product each pull data from their own systems, paste screenshots into
          a shared deck, and hand it off to a central owner who assembles the
          whole thing. The result is a static snapshot that&apos;s already
          outdated when the meeting starts. Decisions from that meeting take
          another two weeks to execute manually.
        </p>
        <p>
          Three failures compound: data is fragmented across Salesforce,
          Zendesk, Mixpanel, Gong, and internal dashboards. There is no
          reasoning layer — synthesis happens in human heads. And even when
          synthesis happens, executing on it requires logging into yet another
          set of systems.
        </p>
      </Section>

      <Section title="Who this is for">
        <p>
          A VP or General Manager who owns a product line — roughly $40M ARR,
          25 strategic enterprise accounts, with Sales, CS, Marketing, Support,
          and Product teams aligned to her. Senior enough to direct action and
          own outcomes; scoped enough that she still personally knows her top
          accounts. This persona is replicated thousands of times across every
          large enterprise.
        </p>
        <p>
          The distinction from a PM matters: Atlas&apos;s action layer —
          reassigning account coverage, triggering competitive playbooks,
          escalating to product — only makes sense for someone with real
          organizational authority. The PM assembled the deck. The GM is the
          one who needed it.
        </p>
      </Section>

      <Section title="What I built">
        <p>
          A five-agent system coordinated by a lightweight orchestrator:
        </p>
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>
            <strong>Signal Agent</strong> — watches data streams continuously,
            detects emerging patterns across CRM, product usage, support
            tickets, call summaries, and CS notes
          </li>
          <li>
            <strong>Synthesis Agent</strong> — takes signals and produces
            narrative insight cards with full provenance on every factual claim
          </li>
          <li>
            <strong>Recommendation Agent</strong> — translates synthesis into
            concrete actions with configurable autonomy levels
          </li>
          <li>
            <strong>Execution Agent</strong> — carries out approved actions
            across systems; some autonomous (internal Slack, CRM flags), some
            requiring review (customer emails, calendar invites)
          </li>
          <li>
            <strong>Memory Agent</strong> — maintains institutional context:
            what the leader has flagged, ignored, acted on, how her judgment
            has evolved over time
          </li>
        </ul>
        <p>
          The product has two consumption modes. The{" "}
          <strong>Briefing</strong> (default on open) is a curated synthesis of
          what changed since the last visit — 3–5 insight cards spanning
          account-level, portfolio-level, and organizational patterns, each
          with confidence scores and a recommended action. The{" "}
          <strong>Query</strong> mode is a conversational interface backed by
          the same multi-source reasoning engine.
        </p>
        <p>
          Eight insight patterns are baked in across three tiers — account-level
          (Hidden Churn Risk, Expansion-Ready, Executive Friction),
          portfolio-level (Systemic Product Signal, Support Load Concentration,
          Feedback-to-Roadmap Disconnect, Win/Reference Opportunity), and an
          organizational tier (Cross-Functional Blind Spot).
        </p>
      </Section>

      <Section title="Key decisions and tradeoffs">
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            <strong>Evaluation framework first.</strong> Most agentic demos
            skip evals. I built the framework before the agents. Patterns are
            embedded by a separate Claude session that never touches agent
            code; the exact counts and account IDs are sealed in a{" "}
            <code>ground_truth.json</code> the agent never sees. Precision and
            recall are then measured externally. This is what separates a demo
            from a product.
          </li>
          <li>
            <strong>Cross-Functional Blind Spot as the flagship pattern.</strong>{" "}
            Most insight patterns reason about what the data says. This one
            reasons about what the data sources{" "}
            <em>disagree on</em> — Sales logged the account green, Support
            shows a ticket spike, Usage shows decline. It is the hardest
            pattern to replicate and the most direct embodiment of why the
            cross-functional readout exists.
          </li>
          <li>
            <strong>Configurable autonomy spectrum.</strong> Not all actions are
            equal. Internal Slack messages and CRM flags are autonomous;
            customer-facing emails require review; high-stakes escalations are
            recommendations only. This distinction matters for enterprise
            trust — and for a demo that a GM would actually believe.
          </li>
          <li>
            <strong>MCP-native architecture.</strong> Atlas is both an MCP
            client (consuming source systems as they expose MCP servers) and an
            MCP server (other agents at the organization can query Atlas for
            synthesized customer context). This is forward-looking but
            directionally correct for where enterprise tooling is heading.
          </li>
        </ul>
      </Section>

      <Section title="What I&apos;d do differently">
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>
            The demo uses synthetic data — the harder production problem is
            schema reconciliation when Salesforce and Zendesk each have their
            own definition of &quot;the customer.&quot; I&apos;d spend more
            time designing the normalization layer before building the agents on
            top of it.
          </li>
          <li>
            Confidence scores are currently heuristic. In production they
            should be learned from outcomes — did the predicted churn actually
            happen? Without outcome feedback, calibration is an assumption, not
            a measurement.
          </li>
          <li>
            The Memory Agent today operates within a session. Long-term
            institutional memory — how this leader&apos;s judgment evolves over
            quarters — is the moat, and building it out properly requires a
            deliberate data model, not an afterthought.
          </li>
        </ul>
      </Section>
    </CaseStudy>
  );
}
