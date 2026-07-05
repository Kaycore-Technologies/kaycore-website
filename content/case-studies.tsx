import type { ReactNode } from 'react';

export interface CaseStudyOutcome {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string; // anonymized archetype, e.g. "Series B Fintech"
  industry: string;
  summary: string;
  date: string;
  image: string;
  challenge: string;
  approach: string[];
  outcomes: CaseStudyOutcome[];
  Body: () => ReactNode;
}

/*
 * These are representative engagements. Client identities are anonymized and the
 * figures are illustrative ranges based on the kind of work described, shown to
 * convey the breadth of problems Kaycore is built to handle. The disclosure line
 * is rendered on the index and on every detail page.
 */
export const caseStudyDisclosure =
  'Representative engagement. Client details are anonymized and figures are illustrative ranges shown to convey the type and breadth of work, not a specific named result.';

/* ---------------- 1. Fintech ---------------- */
const fintech: CaseStudy = {
  slug: 'series-b-fintech-support-assistant',
  title: 'Cutting hallucination-driven escalations for a fintech support assistant',
  client: 'Series B Fintech',
  industry: 'Fintech',
  summary:
    'An LLM support assistant gave confident but wrong answers about fees and account rules. A readiness audit, a golden dataset built from real transcripts, and CI gates brought the error rate under control before it reached more users.',
  date: '2026-05-20',
  image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
  challenge:
    'The team had shipped an LLM assistant to answer customer questions about fees, limits, and account rules. It was fast and popular, but it occasionally stated policy details that were wrong. Each wrong answer created a support escalation and, in a regulated product, a compliance concern.',
  approach: [
    'Mapped the failure surface and ranked answer categories by how costly a wrong response would be.',
    'Built a golden dataset from real, anonymized support transcripts, focused on fee and policy edge cases.',
    'Added adversarial prompts that tried to push the assistant into confident guesses.',
    'Measured hallucination rate and groundedness against the source policy documents.',
    'Wired the evaluation into CI so a regression blocked the release, and set up drift monitoring after model updates.',
  ],
  outcomes: [
    { value: 'Under 1%', label: 'Hallucination rate on the policy golden set at release' },
    { value: '30 to 45%', label: 'Illustrative drop in wrong-answer escalations' },
    { value: 'In your repo', label: 'Test suites and datasets retained by the team' },
  ],
  Body: () => (
    <>
      <p>
        Support assistants are one of the most common first uses of an LLM, and one of the easiest to
        ship without a safety net. This team had done the hard part of getting adoption. The risk was
        that a confident wrong answer about a fee or a limit could reach a customer, or a regulator.
      </p>
      <h2>What we did</h2>
      <p>
        We started by writing down the answer categories where a mistake was expensive, then built a
        golden dataset from real support transcripts so the evaluation reflected how customers actually
        ask. We added adversarial prompts designed to tempt the model into guessing, and we scored both
        hallucination rate and groundedness against the source policy documents.
      </p>
      <p>
        The evaluation runs in continuous integration, so a change that regresses the score cannot ship.
        After launch, drift monitoring watches for quality changes when the underlying model updates.
      </p>
      <h2>Result</h2>
      <p>
        The assistant reached release with a hallucination rate under 1 percent on the policy golden set,
        and the team kept every test suite and dataset in their own repository. The point was not a
        one-time cleanup. It was a repeatable gate that keeps the assistant honest as it changes.
      </p>
    </>
  ),
};

/* ---------------- 2. Healthcare ---------------- */
const healthcare: CaseStudy = {
  slug: 'hospital-network-clinical-documentation',
  title: 'Validating a clinical documentation assistant for a hospital network',
  client: '300-bed Hospital Network',
  industry: 'Healthcare',
  summary:
    'An ambient documentation tool risked adding statements a clinician never said. Physician-informed risk mapping, safety and groundedness testing, and human-in-the-loop review made the output safe enough for clinicians to trust.',
  date: '2026-04-28',
  image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
  challenge:
    'The network was piloting an ambient tool that drafts clinical notes from a conversation. The failure that mattered was not a typo. It was a note that added a symptom or a plan the clinician never stated, or dropped one that they did. In a clinical record, that is a safety problem.',
  approach: [
    'Built the risk map with clinical input, so testing focused on the failures that affect patient safety.',
    'Tested groundedness of every drafted note against the source transcript.',
    'Ran adversarial and safety probes for fabricated findings and unsafe suggestions.',
    'Kept expert humans reviewing a sample of outputs, since clinical review cannot be fully automated.',
    'Produced audit-ready evaluation logs and re-tested after each model update.',
  ],
  outcomes: [
    { value: 'Fewer', label: 'Unsupported statements in drafted notes' },
    { value: 'Audit-ready', label: 'Evaluation logs for review and governance' },
    { value: 'Higher', label: 'Clinician willingness to rely on the drafts' },
  ],
  Body: () => (
    <>
      <p>
        Healthcare is where the gap between a good demo and a safe product is widest. A documentation
        assistant that is right most of the time is not good enough if the times it is wrong add clinical
        detail that was never said.
      </p>
      <h2>What we did</h2>
      <p>
        Kaycore has a physician co-founder, so the risk map was built with clinical input rather than
        guessed at. We measured whether each drafted note was grounded in the actual transcript, ran
        probes for fabricated findings, and kept expert humans reviewing a sample of the output. That
        combination of automated scoring and human review is the pattern that holds up in high-stakes
        settings.
      </p>
      <h2>Result</h2>
      <p>
        Drafted notes carried fewer unsupported statements, the evaluation produced audit-ready logs for
        governance review, and clinicians were more willing to rely on the drafts because the failure
        modes had been measured rather than assumed. Every model update triggers a re-test before it
        reaches the ward.
      </p>
    </>
  ),
};

/* ---------------- 3. AI-first SaaS ---------------- */
const saas: CaseStudy = {
  slug: 'ai-saas-agent-reliability',
  title: 'Making an autonomous agent reliable enough to ship for an AI SaaS',
  client: 'Series A AI SaaS',
  industry: 'AI Startups',
  summary:
    'A multi-step agent that took real actions caused incidents when it called the wrong tool or stepped outside its scope. Adversarial agent testing and a regression suite in the repo turned an unpredictable feature into a shippable one.',
  date: '2026-05-06',
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
  challenge:
    'The product was an agent that could take multi-step actions on a user behalf. When it worked it was impressive. When it failed it called the wrong tool, repeated steps, or acted outside its intended scope, and each failure was a support incident and a trust hit.',
  approach: [
    'Enumerated the agent tools and the ways each could be misused, then wrote tests for those paths.',
    'Ran scope-violation and prompt-injection probes against the agent, not just the base model.',
    'Built a regression suite that replays known-hard scenarios on every change.',
    'Added CI gates and tracked latency and cost alongside correctness.',
  ],
  outcomes: [
    { value: 'Fewer', label: 'Production incidents from agent misfires' },
    { value: 'Faster', label: 'Releases, because the gate catches regressions early' },
    { value: 'Owned', label: 'Regression suite kept in the team repository' },
  ],
  Body: () => (
    <>
      <p>
        Agents raise the stakes because they act, not just answer. A wrong sentence is embarrassing. A
        wrong action is an incident. Testing an agent means testing the tools it can call and the ways a
        user or an attacker can push it off task.
      </p>
      <h2>What we did</h2>
      <p>
        We enumerated the agent tools and the failure paths for each, then wrote tests that exercised
        them. We ran scope-violation and injection probes against the full agent rather than the model
        alone, and we built a regression suite that replays the known-hard scenarios on every change.
        Correctness was tracked alongside latency and cost, because an agent that is right but slow or
        expensive is still a problem.
      </p>
      <h2>Result</h2>
      <p>
        The team shipped faster with fewer incidents, because the gate caught regressions before release
        rather than users catching them after. The regression suite lives in their repository, so the
        safety net stays with the product.
      </p>
    </>
  ),
};

/* ---------------- 4. Retail ---------------- */
const retail: CaseStudy = {
  slug: 'ecommerce-search-relevance-bias',
  title: 'Testing search relevance and bias for an e-commerce platform',
  client: 'Mid-market E-commerce',
  industry: 'Retail & E-Commerce',
  summary:
    'An AI search and recommendation layer returned irrelevant results for some queries and skewed results for some customer segments. Golden query sets and segment-aware evaluation made quality measurable and repeatable.',
  date: '2026-03-30',
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
  challenge:
    'The platform had added AI-powered search and recommendations. Conversion improved on average, but the team had no way to see where it was failing. Some queries returned irrelevant items, and results skewed for certain customer segments, which is both a revenue and a fairness problem.',
  approach: [
    'Built golden query sets covering head, torso, and long-tail searches.',
    'Scored relevance against known-good results and measured differences across customer segments.',
    'Added regression gates so a model or ranking change could not quietly degrade quality.',
    'Set up ongoing monitoring to catch drift as the catalog and behavior changed.',
  ],
  outcomes: [
    { value: 'Measurable', label: 'Relevance scoring across query types' },
    { value: 'Narrower', label: 'Quality gaps between customer segments' },
    { value: 'Repeatable', label: 'Evaluation that runs on every change' },
  ],
  Body: () => (
    <>
      <p>
        Search and recommendation models are easy to improve on average and hard to keep honest at the
        edges. A lift in overall conversion can hide poor results for specific queries or specific
        segments, and neither shows up without deliberate measurement.
      </p>
      <h2>What we did</h2>
      <p>
        We built golden query sets across head, torso, and long-tail searches, scored relevance against
        known-good results, and measured how quality differed across customer segments. Regression gates
        stop a ranking change from quietly degrading results, and ongoing monitoring catches drift as the
        catalog and shopper behavior change.
      </p>
      <h2>Result</h2>
      <p>
        Relevance became a number the team could track rather than a hunch, the quality gaps between
        segments narrowed, and the evaluation runs on every change so improvements do not come at the
        cost of a hidden regression.
      </p>
    </>
  ),
};

export const caseStudies: CaseStudy[] = [fintech, healthcare, saas, retail];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const caseStudyIndustries: string[] = Array.from(
  new Set(caseStudies.map((c) => c.industry))
);
