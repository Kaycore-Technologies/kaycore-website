export interface Product {
  name: string;
  status: string;
  tagline: string;
  summary: string; // short teaser for the homepage section
  detail: string[]; // paragraphs for the dedicated page
  href?: string; // optional link to a related page
  linkLabel?: string;
}

export const rdFundingLine =
  'Kaycore funds its own R&D from the quality engineering services on this site.';

export const products: Product[] = [
  {
    name: 'Eval Harness',
    status: 'In active development, prototype',
    tagline: 'Regression testing for systems that never give the same answer twice.',
    summary:
      'Golden datasets versioned alongside your code. Outputs scored on correctness, groundedness, and policy adherence instead of exact match, with a CI gate that fails the build when scores drop. A second layer checks that an agent stays inside its declared scope.',
    detail: [
      'Regression testing for systems that never give the same answer twice. Golden datasets are versioned alongside your code. Outputs are scored on correctness, groundedness, and policy adherence instead of exact match.',
      "Deterministic snapshots mean any regression traces to a specific change, and a CI gate fails the build when scores fall below an agreed threshold. A second layer exercises an agent's tool use and permission boundaries, asserting it cannot reach data or actions outside its declared scope.",
      'We use it on our own engagements today.',
    ],
  },
  {
    name: 'KayHealth',
    status: 'In development',
    tagline: 'The Eval Harness, aimed at regulated medical software.',
    summary:
      "Our healthcare umbrella. Its first initiative applies the harness to AI-enabled medical software, producing the evidence India's CDSCO guidance now requires. KayScribe, an AI medical scribe, is also part of the family.",
    detail: [
      'KayHealth is our healthcare product umbrella. Its first initiative applies the Eval Harness to regulated medical software.',
      "India's CDSCO finalised its medical device software guidance on 30 July 2026. It requires documented evidence on training data composition, model bias, and robustness across sub-populations for AI-enabled health software. No standard test tooling produces that evidence. KayHealth is being built to.",
      'KayScribe, an AI medical scribe, is also part of the KayHealth family.',
    ],
    href: '/kayhealth',
    linkLabel: 'Explore KayHealth',
  },
];
