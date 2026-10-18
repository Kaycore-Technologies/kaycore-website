// LLM production-readiness checklist. The page states the number of points from this list,
// so adding or removing an item keeps the copy accurate.
export interface ChecklistSection {
  title: string;
  items: string[];
}

export const checklist: ChecklistSection[] = [
  {
    title: '1. Scope the risk',
    items: [
      'You have written down the three most costly ways this AI feature can fail a user or the business.',
      'Each failure is rated by impact, so testing effort goes where a wrong answer is most expensive.',
      'You know which parts are yours to test (prompts, retrieval, guardrails, integration), separate from the base model.',
    ],
  },
  {
    title: '2. Build the evaluation set',
    items: [
      'You have a golden dataset of at least 50 examples for an early read, growing toward 500 or more for a production-grade result.',
      'The set includes normal cases that reflect the most common real usage.',
      'The set includes edge cases: rare scenarios, empty or malformed input, very long context, and ambiguous requests.',
      'The set includes adversarial inputs: jailbreak attempts, prompt injection, and scope-violation prompts.',
    ],
  },
  {
    title: '3. Set thresholds before you look at results',
    items: [
      'Hallucination rate target is defined: around 5 percent or lower for general use, around 1 percent or lower for high-stakes domains.',
      'Groundedness or faithfulness to retrieved context is measured for any retrieval-augmented system.',
      'Output consistency across repeated runs of the same prompt is tracked.',
      'An acceptable ceiling for successful adversarial attacks is set, and any regression above it blocks release.',
      'Latency and cost targets under expected load are defined.',
    ],
  },
  {
    title: '4. Choose methods that hold up',
    items: [
      'Regression is caught by rerunning the golden dataset whenever a prompt or model changes.',
      'If you use LLM-as-a-judge, the judge is calibrated against human labels and audited periodically.',
      'Humans review a sample of outputs for the highest-risk categories.',
      'Evaluation runs automatically in CI and blocks merges that fall below threshold.',
    ],
  },
  {
    title: '5. Operate after launch',
    items: [
      'The live system is monitored for drift, latency spikes, and quality degradation.',
      'You have a plan to re-evaluate after any model or provider update.',
      'Test suites, datasets, and results live in your own repository, in a format you can maintain without any single vendor.',
    ],
  },
];

export const checklistPointCount = checklist.reduce((n, section) => n + section.items.length, 0);
