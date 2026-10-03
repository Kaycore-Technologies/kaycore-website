import type { ReactNode } from 'react';

export interface ArticleFAQ {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO published date
  updated?: string; // ISO last-updated date
  author: string;
  authorTitle: string;
  category: string;
  readTime: string;
  image: string;
  keywords: string[];
  faqs: ArticleFAQ[];
  Body: () => ReactNode;
}

/* ------------------------------------------------------------------ */
/* 1. WHAT IS AI QUALITY ENGINEERING                                   */
/* ------------------------------------------------------------------ */

const whatIsAiQe: Article = {
  slug: 'what-is-ai-quality-engineering',
  title: 'What Is AI Quality Engineering? A Working Definition and Field Guide',
  excerpt:
    'AI Quality Engineering is the practice of validating non-deterministic AI systems for safety, accuracy, robustness, and drift before and after production. Here is what it covers, how it differs from traditional QA, and what good looks like.',
  date: '2026-06-15',
  updated: '2026-07-04',
  author: 'Kulish Kulshrestha',
  authorTitle: 'CTO, Kaycore Technologies',
  category: 'AI Quality Engineering',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
  keywords: [
    'AI quality engineering',
    'AI QA',
    'LLM testing',
    'AI testing',
    'non-deterministic testing',
  ],
  faqs: [
    {
      q: 'What is AI Quality Engineering in one sentence?',
      a: 'AI Quality Engineering is the discipline of systematically validating non-deterministic AI and LLM systems for safety, factual accuracy, robustness, and drift, both before release and continuously in production.',
    },
    {
      q: 'How is AI Quality Engineering different from traditional QA?',
      a: 'Traditional QA verifies deterministic pass or fail behavior, where the same input always yields the same output. AI systems are probabilistic and have an effectively infinite input space, so AI Quality Engineering relies on statistical evaluation, adversarial testing, and continuous monitoring instead of fixed assertions.',
    },
    {
      q: 'Do I need AI Quality Engineering if I only use a third-party model API?',
      a: 'Yes. Model providers test the base model, but they cannot test your prompts, your retrieval pipeline, your guardrails, or how the model behaves on your data and your users. Those integration points are where most production failures happen.',
    },
    {
      q: 'What metrics does AI Quality Engineering track?',
      a: 'Common measures include hallucination rate, groundedness or faithfulness to retrieved context, output consistency across repeated runs, resistance to adversarial and jailbreak prompts, drift over time, and latency. Thresholds depend on how costly a wrong answer is in your domain.',
    },
  ],
  Body: () => (
    <>
      <p>
        <strong>AI Quality Engineering is the practice of validating non-deterministic AI systems for
        safety, factual accuracy, robustness, and drift, both before release and continuously in
        production.</strong> It exists because the tools built for traditional software testing were
        designed for systems that behave the same way every time, and modern AI does not.
      </p>
      <p>
        If your product calls a large language model, ranks results with a machine learning model, or
        runs an autonomous agent, you are shipping software whose output changes with the input, the
        prompt, the retrieved context, and the model version. That property breaks most of the
        assumptions behind conventional QA. AI Quality Engineering is the response to that gap.
      </p>

      <h2>Why traditional QA falls short on AI</h2>
      <p>
        Traditional QA is built on a simple contract. Given a fixed input, assert a fixed output. A
        login form either accepts the right password or it does not. That contract holds for
        deterministic code. It does not hold for probabilistic systems, for three reasons.
      </p>
      <ul>
        <li>
          <strong>Non-determinism.</strong> The same prompt can produce different answers on
          different runs. A test that asserts one exact string will pass or fail by chance rather than
          by correctness.
        </li>
        <li>
          <strong>An effectively infinite input space.</strong> Users type anything. You cannot
          enumerate the cases, so coverage has to be measured statistically rather than counted.
        </li>
        <li>
          <strong>Failure modes that have no equivalent in classic software.</strong> Hallucination,
          prompt injection, jailbreaks, bias, and quality drift over time do not appear in a normal
          test plan because normal software cannot fail in those ways.
        </li>
      </ul>

      <h2>AI Quality Engineering compared to traditional QA</h2>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Traditional QA</th>
            <th>AI Quality Engineering</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>System behavior</td>
            <td>Deterministic</td>
            <td>Probabilistic</td>
          </tr>
          <tr>
            <td>Correctness check</td>
            <td>Exact assertion</td>
            <td>Statistical evaluation and scoring</td>
          </tr>
          <tr>
            <td>Coverage</td>
            <td>Enumerated cases</td>
            <td>Representative and adversarial sampling</td>
          </tr>
          <tr>
            <td>Main risks</td>
            <td>Logic bugs, regressions</td>
            <td>Hallucination, injection, bias, drift</td>
          </tr>
          <tr>
            <td>When testing ends</td>
            <td>Before release</td>
            <td>Continues in production through monitoring</td>
          </tr>
        </tbody>
      </table>

      <h2>The four practices inside AI Quality Engineering</h2>
      <p>
        In practice the work splits into four repeatable activities. We use them as a lifecycle:
        assess, attack, verify, then monitor.
      </p>
      <h3>1. Assess</h3>
      <p>
        Map where the system can fail and how much each failure costs. A wrong answer in a marketing
        chatbot is an annoyance. A wrong answer in a clinical summary or a payment flow is a serious
        event. The risk map decides where to spend testing effort.
      </p>
      <h3>2. Attack</h3>
      <p>
        Probe the system the way a motivated adversary or a confused user would. This means jailbreak
        attempts, prompt injection, scope-violation requests, and malformed input. The goal is to find
        the failure before a real user does.
      </p>
      <h3>3. Verify</h3>
      <p>
        Measure accuracy against ground truth using curated evaluation datasets, often called golden
        datasets. This is where you catch regressions when a prompt or model changes, and where you
        set numeric thresholds the system has to clear before it ships.
      </p>
      <h3>4. Monitor</h3>
      <p>
        Watch the live system for drift, latency spikes, and degradation. Model behavior shifts as
        inputs change and as providers update their models, so a system that passed last month can
        quietly regress. Monitoring closes the loop.
      </p>

      <h2>What good looks like</h2>
      <p>
        Numbers make the target concrete. Widely cited industry guidance for language systems puts an
        acceptable hallucination rate at roughly 5 percent or lower for general use, and closer to 1
        percent for high-stakes contexts such as healthcare or finance. Evaluation sets should hold at
        least 50 examples for an early check and 500 or more for a production-grade assessment, so the
        score means something statistically rather than reflecting a handful of lucky runs.
      </p>
      <p>
        Just as important is that the evidence is exportable. Good AI Quality Engineering leaves you
        with test suites, datasets, and CI gates that live in your own repository, not locked inside a
        vendor tool you cannot leave. That distinction matters to engineering leaders who have been
        burned by proprietary formats.
      </p>

      <h2>Where to start</h2>
      <p>
        If you are shipping an AI feature and have no formal quality process for it, start with the
        assess step. Write down the three ways the system could hurt a user or the business, then build
        a small golden dataset that exercises those cases. That single exercise usually surfaces more
        real risk than a week of manual testing, and it gives you a baseline to improve against.
      </p>
      <p>
        For a deeper walkthrough of the metrics and thresholds, see our guide on{' '}
        <a href="/blog/how-to-test-an-llm-before-production">testing an LLM before production</a>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* 2. HOW TO TEST AN LLM BEFORE PRODUCTION                             */
/* ------------------------------------------------------------------ */

const testLlmBeforeProduction: Article = {
  slug: 'how-to-test-an-llm-before-production',
  title: 'How to Test an LLM Before Production: A Readiness Guide',
  excerpt:
    'A practical guide to evaluating a large language model feature before you ship it, covering the input categories to cover, the metrics that matter, realistic thresholds, and the methods that hold up under scrutiny.',
  date: '2026-06-22',
  updated: '2026-07-04',
  author: 'Kulish Kulshrestha',
  authorTitle: 'CTO, Kaycore Technologies',
  category: 'LLM Testing',
  readTime: '10 min read',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
  keywords: [
    'LLM testing',
    'how to test an LLM',
    'hallucination rate',
    'AI evaluation',
    'prompt testing',
  ],
  faqs: [
    {
      q: 'What is a good hallucination rate for an LLM in production?',
      a: 'Commonly cited industry guidance is a hallucination rate of about 5 percent or lower for general use cases and about 1 percent or lower for high-stakes domains such as healthcare, legal, and finance. The right number depends on how much a wrong answer costs in your context.',
    },
    {
      q: 'How many test examples do I need to evaluate an LLM?',
      a: 'A useful rule of thumb is at least 50 examples for an early, directional check and 500 or more for a production-grade evaluation. Small sets are cheap to build but noisy, so treat their scores as signals rather than guarantees.',
    },
    {
      q: 'Is LLM-as-a-judge reliable for grading outputs?',
      a: 'It is useful and scalable, but it is not free of error. LLM judges can inherit bias, be inconsistent, and be fooled by confident wrong answers. The reliable pattern is to calibrate the judge against human-labeled examples and keep a human in the loop for the highest-risk categories.',
    },
    {
      q: 'What kinds of inputs should an LLM test suite include?',
      a: 'Three categories: normal cases that reflect the most common real usage, edge cases such as rare scenarios and malformed input, and adversarial inputs including jailbreak attempts and scope-violation prompts.',
    },
  ],
  Body: () => (
    <>
      <p>
        <strong>Testing a large language model means measuring how reliably it produces safe, accurate,
        and consistent output across the inputs your real users will send, not confirming that it works
        on a handful of happy-path prompts.</strong> The difference between those two activities is the
        difference between a demo and a product.
      </p>
      <p>
        This guide covers what to test, how to measure it, and the thresholds that separate a system
        that is ready from one that only looks ready.
      </p>

      <h2>Step 1: Cover three categories of input</h2>
      <p>
        A credible test suite exercises the model across three distinct input types. Skipping any one
        of them leaves a blind spot that users will find for you.
      </p>
      <ul>
        <li>
          <strong>Normal cases.</strong> The requests users send most of the time. These set your
          baseline quality.
        </li>
        <li>
          <strong>Edge cases.</strong> Rare but valid scenarios, empty or malformed input, very long
          context, mixed languages, and ambiguous requests.
        </li>
        <li>
          <strong>Adversarial inputs.</strong> Jailbreak attempts, prompt injection, and scope
          violation, where a user tries to push the system outside its intended job.
        </li>
      </ul>

      <h2>Step 2: Measure the metrics that predict real failures</h2>
      <p>
        Accuracy alone is not enough for a probabilistic system. These are the measures that correlate
        with production incidents.
      </p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>What it answers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hallucination rate</td>
            <td>How often the model states something false or unsupported.</td>
          </tr>
          <tr>
            <td>Groundedness or faithfulness</td>
            <td>Whether the answer actually reflects the retrieved context in a RAG system.</td>
          </tr>
          <tr>
            <td>Consistency</td>
            <td>Whether repeated runs of the same prompt give stable answers.</td>
          </tr>
          <tr>
            <td>Adversarial resistance</td>
            <td>How often jailbreak and injection attempts succeed.</td>
          </tr>
          <tr>
            <td>Drift</td>
            <td>Whether quality changes over time or after a model update.</td>
          </tr>
          <tr>
            <td>Latency and cost</td>
            <td>Whether the system meets its performance and budget targets under load.</td>
          </tr>
        </tbody>
      </table>

      <h2>Step 3: Set thresholds before you look at results</h2>
      <p>
        Decide what passing means in advance, so you are not tempted to move the goalposts after seeing
        the numbers. Widely cited guidance for language systems:
      </p>
      <ul>
        <li>
          <strong>Hallucination rate:</strong> about 5 percent or lower for general use, about 1
          percent or lower for high-stakes domains.
        </li>
        <li>
          <strong>Evaluation set size:</strong> at least 50 examples for an early read, 500 or more for
          a production-grade result.
        </li>
        <li>
          <strong>Adversarial pass rate:</strong> define an acceptable ceiling for successful attacks,
          then treat any regression above it as a release blocker.
        </li>
      </ul>
      <p>
        Treat these as starting points, not universal law. The correct threshold is a business
        decision about how much a wrong answer costs you.
      </p>

      <h2>Step 4: Choose evaluation methods that hold up</h2>
      <h3>Golden datasets</h3>
      <p>
        A golden dataset is a curated set of inputs with known good outputs or scoring rubrics. It is
        the backbone of regression testing for AI. When a prompt or model changes, you rerun the set
        and watch the scores.
      </p>
      <h3>LLM-as-a-judge, used carefully</h3>
      <p>
        Using a second model to grade outputs scales well, but it has real failure modes. Judges can be
        biased toward longer answers, inconsistent between runs, and fooled by confident wrong answers.
        The pattern that works is to calibrate the judge against human labels on a sample, then audit
        it periodically. Do not treat an unaudited judge as ground truth.
      </p>
      <h3>Human in the loop</h3>
      <p>
        For the highest-risk categories, keep expert humans reviewing a sample of outputs. Automated
        metrics are fast and human review is accurate, and the combination is stronger than either
        alone.
      </p>
      <h3>Continuous integration gates</h3>
      <p>
        The evaluation should run automatically on every change, and the pipeline should block a merge
        when scores fall below threshold. A quality check that a human has to remember to run is a
        quality check that will eventually be skipped.
      </p>

      <h2>A short readiness checklist</h2>
      <ol>
        <li>You have written down the three most costly ways the system can fail.</li>
        <li>You have a golden dataset of at least 50 examples, growing toward 500.</li>
        <li>You test normal, edge, and adversarial inputs.</li>
        <li>You track hallucination rate, groundedness, and consistency, with thresholds set in advance.</li>
        <li>Your evaluation runs in CI and blocks releases that regress.</li>
        <li>You monitor the live system for drift after launch.</li>
      </ol>
      <p>
        If you cannot check every box yet, that is the roadmap. You can also{' '}
        <a href="/resources/llm-readiness-checklist">get the full version as a free checklist</a>. For
        the wider discipline this sits inside, see{' '}
        <a href="/blog/what-is-ai-quality-engineering">what AI Quality Engineering is</a>, and if you
        want a partner to build this with you, read{' '}
        <a href="/blog/how-to-choose-an-ai-testing-partner">how to choose an AI testing partner</a>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* 3. HOW TO CHOOSE AN AI TESTING PARTNER                              */
/* ------------------------------------------------------------------ */

const chooseTestingPartner: Article = {
  slug: 'how-to-choose-an-ai-testing-partner',
  title: 'How to Choose an AI Testing Partner in 2026',
  excerpt:
    'A buyer-focused guide to evaluating an AI testing or quality engineering partner, including the seven criteria that matter, the build versus buy versus partner decision, and the red flags to walk away from.',
  date: '2026-06-29',
  updated: '2026-07-04',
  author: 'Kulish Kulshrestha',
  authorTitle: 'CTO, Kaycore Technologies',
  category: 'Buyer Guides',
  readTime: '9 min read',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  keywords: [
    'AI testing partner',
    'choose AI QA vendor',
    'AI testing services',
    'QA vendor selection',
  ],
  faqs: [
    {
      q: 'Should we build AI testing in house, buy a tool, or hire a partner?',
      a: 'Build if you have senior AI testing talent and time to spare. Buy a tool if your needs are narrow and standard. Hire a partner when you need production-grade coverage quickly and want to keep the resulting test code and datasets in your own repository. Many teams combine a partner for setup with a tool for ongoing runs.',
    },
    {
      q: 'What is the most important thing to check in an AI testing vendor?',
      a: 'Verifiable proof that they have done this work before, and confirmation that you keep ownership of the test code, datasets, and results. Impressive demos are common. Exportable evidence and real references are rare and far more predictive.',
    },
    {
      q: 'Does an AI testing partner need SOC 2 or other certifications?',
      a: 'For enterprise engagements, SOC 2 Type II is effectively a baseline expectation because the partner will touch your code and data. If a vendor lacks it, ask how they handle your data and intellectual property, and get it in writing.',
    },
  ],
  Body: () => (
    <>
      <p>
        <strong>Choosing an AI testing partner comes down to one question: will they leave you with a
        measurably more reliable system and the exportable evidence to prove it, or just an invoice and
        a slide deck?</strong> The market is crowded, the pitches sound similar, and the differences
        that matter are not the ones most vendors lead with.
      </p>
      <p>
        This guide gives you the criteria to evaluate against, the build versus buy versus partner
        decision, and the warning signs worth walking away from.
      </p>

      <h2>Seven criteria that separate partners worth hiring</h2>
      <ol>
        <li>
          <strong>Pure-play focus.</strong> Quality engineering should be their core business, not a
          side offering bolted onto a general development shop.
        </li>
        <li>
          <strong>AI-specific capability.</strong> Ask concretely how they test for hallucination,
          bias, prompt injection, and drift. Generic automation experience is not the same thing.
        </li>
        <li>
          <strong>Exportable code and no lock-in.</strong> The test suites, datasets, and CI gates
          should live in your repository in a standard format you can maintain without them. This is
          the single most overlooked criterion, and the one engineering leaders regret most when they
          skip it.
        </li>
        <li>
          <strong>Security and data handling.</strong> They will touch your code and data, so ask about
          SOC 2, data retention, and how they protect your intellectual property. Get the answers in
          writing.
        </li>
        <li>
          <strong>Regulatory fluency where it applies.</strong> If you operate in healthcare, finance,
          or another regulated space, the partner should speak the language of the relevant standards
          rather than learning on your project.
        </li>
        <li>
          <strong>Verifiable proof.</strong> Real references, case studies with specific outcomes, and
          third-party validation. Named results outperform vague claims by a wide margin, and you
          should be able to check them.
        </li>
        <li>
          <strong>Senior staffing and flexibility.</strong> Confirm who actually does the work. A
          senior-led team that can scale up or down beats a cheap team of juniors learning on your
          system.
        </li>
      </ol>

      <h2>Build, buy, or partner</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Best when</th>
            <th>Watch out for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Build in house</td>
            <td>You have senior AI testing talent and spare capacity.</td>
            <td>Hidden cost of hiring and ramp time while the product ships anyway.</td>
          </tr>
          <tr>
            <td>Buy a tool</td>
            <td>Needs are narrow, standard, and stable.</td>
            <td>Proprietary formats that are expensive to migrate away from later.</td>
          </tr>
          <tr>
            <td>Hire a partner</td>
            <td>You need production-grade coverage quickly and want to keep the assets.</td>
            <td>Partners who keep the work locked in their own systems.</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are not mutually exclusive. A common pattern is to bring in a partner to design the
        evaluation framework and golden datasets, then run them yourself on an off-the-shelf tool.
      </p>

      <h2>Red flags worth walking away from</h2>
      <ul>
        <li>They cannot explain how they measure hallucination or drift in concrete terms.</li>
        <li>The test artifacts stay in their platform and you cannot export them.</li>
        <li>They show metrics with no way to verify where the numbers came from.</li>
        <li>They will not put data handling and IP terms in writing.</li>
        <li>The people in the sales meeting are not the people who will do the work.</li>
      </ul>

      <h2>A simple way to run the evaluation</h2>
      <p>
        Send two or three candidates the same short brief: a real feature, its failure modes, and the
        outcome you care about. Ask each to describe the first two weeks of work, what they would
        measure, and what you would own at the end. The answers separate the partners who have done
        this from the ones who are describing it for the first time.
      </p>
      <p>
        For background on the discipline itself, see{' '}
        <a href="/blog/what-is-ai-quality-engineering">what AI Quality Engineering is</a>. For the
        technical detail of a readiness assessment, see{' '}
        <a href="/blog/how-to-test-an-llm-before-production">how to test an LLM before production</a>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */

export const articles: Article[] = [
  chooseTestingPartner,
  testLlmBeforeProduction,
  whatIsAiQe,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const articleCategories: string[] = Array.from(
  new Set(articles.map((a) => a.category))
);
