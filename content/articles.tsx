import type { ReactNode } from 'react';
import Link from 'next/link';

export interface ArticleFAQ {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle?: string; // <= 60 chars, used as the absolute <title>
  seoDescription?: string; // 140-160 chars, used for meta/OG/Twitter descriptions
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
  seoTitle: 'What Is AI Quality Engineering? | Kaycore',
  seoDescription:
    'AI Quality Engineering validates non-deterministic AI for safety, accuracy, robustness and drift. What it covers, and how it differs from traditional QA.',
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
        <Link href="/blog/how-to-test-an-llm-before-production">testing an LLM before production</Link>.
        To see how AI itself can help with the testing work, read about{' '}
        <Link href="/blog/ai-assisted-test-automation-claude-code-mcp">AI-assisted test automation that passes code review</Link>.
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
  seoTitle: 'How to Test an LLM Before Production | Kaycore',
  seoDescription:
    'How to test an LLM before production: the inputs to cover, the metrics that matter, realistic thresholds, and evaluation methods that hold up under scrutiny.',
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
        quality check that will eventually be skipped. Pipelines that are already red need
        attention before a gate can be trusted, which we cover in{' '}
        <Link href="/blog/flaky-tests-in-ci-pipeline">flaky tests in CI and how to take over a red pipeline</Link>.
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
        <Link href="/resources/llm-readiness-checklist">get the full version as a free checklist</Link>. For
        the wider discipline this sits inside, see{' '}
        <Link href="/blog/what-is-ai-quality-engineering">what AI Quality Engineering is</Link>, and if you
        want a partner to build this with you, read{' '}
        <Link href="/blog/how-to-choose-an-ai-testing-partner">how to choose an AI testing partner</Link>.
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
  seoDescription:
    'How to choose an AI testing partner: the seven criteria that matter, the build versus buy versus partner decision, and the red flags to walk away from.',
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
        this from the ones who are describing it for the first time. Whatever they claim, ask for
        evidence counted from version control, as in these{' '}
        <Link href="/case-studies">Kaycore case studies</Link>, rather than estimated.
      </p>
      <p>
        For background on the discipline itself, see{' '}
        <Link href="/blog/what-is-ai-quality-engineering">what AI Quality Engineering is</Link>. For the
        technical detail of a readiness assessment, see{' '}
        <Link href="/blog/how-to-test-an-llm-before-production">how to test an LLM before production</Link>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* 4. HOW TO FIX FLAKY PLAYWRIGHT TESTS                                */
/* ------------------------------------------------------------------ */

const fixFlakyPlaywrightTests: Article = {
  slug: 'how-to-fix-flaky-playwright-tests',
  title: 'How to Fix Flaky Playwright Tests: Wait on the Network, Not the Clock',
  seoTitle: 'How to Fix Flaky Playwright Tests | Kaycore',
  excerpt:
    'Flaky Playwright tests come from guessed waits, fragile locators and inline data. Learn to wait on the network instead, with lessons from a real engagement.',
  seoDescription:
    'Flaky Playwright tests come from guessed waits, fragile locators and inline data. Learn to wait on the network instead, with lessons from a real engagement.',
  date: '2026-10-17',
  updated: '2026-10-17',
  author: 'Kulish Kulshrestha',
  authorTitle: 'CTO, Kaycore Technologies',
  category: 'Test Automation',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&h=900&q=80',
  keywords: [
    'flaky Playwright tests',
    'Playwright page object model',
    'wait for GraphQL response in Playwright',
    'Playwright best practices',
    'test data builders',
    'end-to-end test automation',
  ],
  faqs: [
    {
      q: 'Why are my Playwright tests flaky?',
      a: 'Usually the cause sits in the suite rather than in Playwright. The common culprits are fixed timeouts that guess how long the application needs, locators tied to generated identifiers that change when a library changes, and test data built inline in every spec. Replacing guesses with waits on real events removes most of the noise.',
    },
    {
      q: 'How do I wait for a GraphQL response in Playwright?',
      a: 'Wait for the response of the specific named operation that the action triggers, then assert on the result. For a save, wait for three things in order: the mutation, the success notification, and the refetch query that refreshes the screen. That way the next step starts from a settled page.',
    },
    {
      q: 'Should I ever use a fixed timeout in an end-to-end test?',
      a: 'Treat a fixed timeout as a signal that you have not yet found the event the test should wait for. There is nearly always a response, a notification or a visible state that proves the work is finished, and a wait on that event is correct whether the application is fast or slow.',
    },
    {
      q: 'Does waiting on operation names make tests brittle?',
      a: 'It makes them loud rather than brittle. If a frontend engineer renames a query, the tests break immediately and visibly, and the fix is quick. The alternative is a silent flake that costs the team its trust in the suite, which is much harder to win back.',
    },
  ],
  Body: () => (
    <>
      <p>
        <strong>The fix for flaky Playwright tests is to stop waiting on the clock and wait on the
        network: replace every fixed timeout with a wait for the specific response or visible state
        that proves the application has finished its work.</strong> A sleep is a guess about speed. A
        wait on the real event is correct on a slow day and on a fast one.
      </p>
      <p>
        Most flaky Playwright tests are not a tool problem. They are a design problem in the suite:
        waits that guess, locators that depend on markup nobody promised to keep stable, and test
        data built inline in every spec. This guide covers the causes, the patterns that remove them,
        and a checklist you can run against your own suite. It draws on a real end-to-end test
        automation engagement on a multi-tenant commerce operations platform.
      </p>

      <h2>Why Playwright tests go flaky</h2>
      <p>
        When a nightly run goes red, either the product is broken or the test is. A flaky suite blurs
        the difference, and that is its real cost. Somebody has to
        open each failure and decide which it is, usually by hand and usually before the working day
        starts. After enough mornings like that, people stop trusting a red result and start
        rerunning it.
      </p>
      <p>A few habits produce most of the noise.</p>
      <ul>
        <li>
          <strong>Arbitrary timeouts.</strong> A fixed pause passes when the application is quick and
          fails when it is not. Raising the number makes the suite slower without making it correct.
        </li>
        <li>
          <strong>Locators tied to implementation details.</strong> Identifiers generated by a forms
          library or a data grid change when the library does. The test fails for a reason no user
          would ever notice.
        </li>
        <li>
          <strong>Test data built inline.</strong> When every spec invents its own records, with
          random values scattered across files, failures are hard to reproduce and the setup cannot be
          reused.
        </li>
      </ul>

      <h2>What to wait on instead of timeouts</h2>
      <p>
        Playwright already retries most assertions about what is visible on the page, so the
        starting rule is to lean on that and never add a pause on top of it. The harder case is an action whose
        outcome is not visible straight away: a save, a delete, or a bulk operation that talks to the
        backend.
      </p>
      <p>
        For those, wait for the response of the exact request the action triggers. In a GraphQL
        application, that means waiting on the named operation rather than on the address, because
        many operations usually travel to the same endpoint. If you want to wait for a GraphQL
        response in Playwright reliably, key the wait on the operation name, then assert on what came
        back.
      </p>
      <p>
        A save usually has more than one step, so wait for each in order: the mutation, the success
        notification, and then the refetch that refreshes the list. Waiting on the mutation proves the
        request returned. Waiting on the notification proves the interface reacted. Waiting on the
        refetch proves the screen now shows the saved state, so the next step starts from a settled
        page.
      </p>

      <h2>Keep the waits inside a Playwright page object model</h2>
      <p>
        Scattering network waits across specs trades one problem for another. A Playwright page object
        model gives each waiting rule a single home. The page object knows how to save and what
        &quot;saved&quot; means, so a spec reads as intent: create the record, confirm it appears.
      </p>
      <p>
        Layering helps. A base page holds the shared behavior. Drawer and wizard classes extend it for
        the interface patterns that recur, and each can have a variant that is aware of the GraphQL
        operations behind it. When a rule about waiting changes, you change it once.
      </p>
      <p>
        There is a trade-off, and it is worth stating plainly. Page objects that wait on operation
        names have to know those names, so a frontend engineer who renames a query breaks the tests
        loudly. That is the point. A loud break takes an hour to fix. A silent flake costs a team its
        trust in the suite, and that trust does not come back easily.
      </p>

      <h2>Use test data builders instead of inline data</h2>
      <p>
        Test data builders are small fluent objects that assemble a valid record one named step at a
        time. The same builder can seed data through the API before a test starts and fill the form
        during the test, so setup and interaction describe the same record. Builders pay off most in a
        suite that runs one generic create, update and delete scenario against many different entity
        drawers. Each entity declares its own metadata on the drawer class, and the shared scenario
        builds data through the builder instead of through scattered random-data helpers.
      </p>
      <p>
        Pair builders with locators that survive a redesign. Prefer the role and accessible name that
        a user or assistive technology would see, and scope a step by its ARIA region name rather than
        by generated identifiers. These are among the Playwright best practices that turn a frontend
        migration into an annoyance instead of a rewrite.
      </p>

      <h2>What this looked like on a real engagement</h2>
      <p>
        On a multi-tenant commerce operations platform, features were shipping faster than they were
        being automated. The specs that did exist waited on arbitrary timeouts, built their data
        inline, and broke every time the frontend moved to a new forms library or data-grid version.
        Each nightly run mixed genuine defects with test-side timing failures, and somebody sorted one
        from the other by hand every morning.
      </p>
      <p>
        We owned automation for several areas of the application and built the suite in layers:
        eighty-five end-to-end test cases and forty-eight page-object classes across forty-six files,
        with a base page, drawer and wizard classes, and a GraphQL-aware variant of each. Fluent data
        builders for schedules, item availability, order-type settings and store groups seeded data
        through the API and filled the interface. Every create, update and delete waits on the named
        GraphQL operation and its refetch, never on a sleep.
      </p>
      <p>
        The decision that mattered was the trade-off described above. We made page objects know
        operation names on purpose, accepting that a renamed query would fail loudly, because a loud
        break is cheap and a silent flake is not.
      </p>
      <p>
        The suite was built to survive two frontend migrations. Eighty-five test cases and
        forty-eight page-object classes remain in use on the integration branch. When a forms-library
        migration removed the old store-list query and its element identifiers, four bulk-wizard tests
        broke. Scoping the affected step by its ARIA region name brought all four back, and the fix
        survived the migration after that one too. For the full account, you can{' '}
        <Link href="/case-studies/ui-automation-at-scale">read the full case study</Link>, or browse the
        other <Link href="/case-studies">Kaycore case studies</Link>.
      </p>

      <h2>A checklist for fixing flaky Playwright tests</h2>
      <ul>
        <li>No fixed sleeps anywhere. Every wait names a response, a notification or a visible state.</li>
        <li>Every save waits for the mutation, then the success notification, then the refetch, in that order.</li>
        <li>Locators use role and accessible name, scoped by region, rather than generated identifiers.</li>
        <li>Page objects own the waiting rules, so specs describe intent and nothing else.</li>
        <li>Test data comes from builders, and the same builder can seed through the API or fill the form.</li>
        <li>Every red nightly failure is sorted into a product defect or a test fix, never left as rerun and hope.</li>
      </ul>
      <p>
        Waiting is only part of nightly stability. The rest is what your tests leave behind in a
        shared environment, which we cover in{' '}
        <Link href="/blog/flaky-tests-in-ci-pipeline">flaky tests in CI and how to take over a red pipeline</Link>.
        If you would like to see how we report findings on an application, look at a{' '}
        <Link href="/sample-quality-audit">sample quality audit</Link>, or see how we work with teams on our{' '}
        <Link href="/services">services page</Link>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* 5. GRAPHQL API TESTING BEST PRACTICES                               */
/* ------------------------------------------------------------------ */

const graphqlApiTesting: Article = {
  slug: 'graphql-api-testing-best-practices',
  title: 'GraphQL API Testing: Four Gaps That Let Broken Mutations Pass',
  seoTitle: 'GraphQL API Testing Best Practices | Kaycore',
  excerpt:
    'GraphQL API testing fails when mutations are checked only by their own response. Four gaps that let broken mutations pass, and how to close each one.',
  seoDescription:
    'GraphQL API testing fails when mutations are checked only by their own response. Four gaps that let broken mutations pass, and how to close each one.',
  date: '2026-10-17',
  updated: '2026-10-17',
  author: 'Kulish Kulshrestha',
  authorTitle: 'CTO, Kaycore Technologies',
  category: 'API Testing',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&h=900&q=80',
  keywords: [
    'GraphQL API testing',
    'GraphQL testing best practices',
    'testing GraphQL mutations',
    'GraphQL error handling',
    'authorization testing',
    'federated GraphQL',
  ],
  faqs: [
    {
      q: 'How do you test a GraphQL mutation properly?',
      a: 'Call the mutation, then query the graph again to confirm the change was actually persisted. A mutation can return a well-formed success without saving anything, so the response alone proves very little. Read the effect back from the graph and assert on that.',
    },
    {
      q: 'Why is checking the mutation response not enough?',
      a: 'Because the response is produced by the same code path you are trying to verify. A service that returns a success payload without persisting the change will still pass a test that only inspects that payload. An independent read of the stored state is the real check.',
    },
    {
      q: 'How should I test GraphQL errors?',
      a: 'Select the typed error members in your test documents and assert on both the returned type name and the contents of the error, such as which identifiers it lists. A test that only asserts that something failed will pass when the backend returns the wrong failure.',
    },
    {
      q: 'Should a test skip when its setup fails?',
      a: 'No. A skipped test reads as neutral, so broken setup hides in the results. Make setup failures hard failures so the red result points at the real problem. If a test must be parked, quarantine it with a linked ticket rather than skipping it silently.',
    },
  ],
  Body: () => (
    <>
      <p>
        <strong>Good GraphQL API testing proves that a mutation changed the system, not just that it
        returned a success response: read the effect back from the graph, make setup failures fail
        loudly, assert on typed errors, and make every test send what its title claims.</strong> Each
        of those is a gap that lets a broken mutation pass.
      </p>
      <p>
        This post lays out four such gaps, the GraphQL testing best practices that close them, and
        what it looked like to apply them on a real engagement involving a federated GraphQL graph.
      </p>

      <h2>Why GraphQL API tests pass while the system is broken</h2>
      <p>
        A passing test only means something if it could have failed. On a typical GraphQL suite, four
        habits quietly remove that possibility.
      </p>
      <ul>
        <li>Mutation tests assert only on the mutation&apos;s own response payload.</li>
        <li>When test setup fails, the test calls skip, so broken setup shows as skipped and never as failed.</li>
        <li>Typed error members are never selected in the test documents, so they cannot be asserted.</li>
        <li>Some pagination tests do not send what their titles claim.</li>
      </ul>
      <p>
        None of these produce a red build. That is exactly why they survive for so long.
      </p>

      <h2>Testing GraphQL mutations: read the effect back from the graph</h2>
      <p>
        If a test asserts only on what the mutation returned, a service that sends back a well-formed
        success without persisting anything still passes. The response and the behavior come from the
        same place, so the test cannot tell them apart.
      </p>
      <p>
        The fix is a persistence read-back. After every mutation, query the graph again and assert on
        the stored state. Centralize this in one module of helpers that every spec calls, so that
        checking persistence is the default and not something each author remembers to do. When the
        graph is federated, the read-back also exercises the path through the router and across
        subgraphs, which is the path your users actually take.
      </p>
      <p>
        A good read-back helper is deliberately plain. It takes the identifier the mutation returned,
        queries the entity through the same public graph, and hands the stored fields back for the test
        to assert on. Name helpers after the entity they read, so a failure message says exactly what
        was missing and where.
      </p>

      <h2>GraphQL error handling: assert the type and the payload</h2>
      <p>
        Many schemas model failures as typed error unions, where a mutation can return either its
        success shape or one of several named error shapes. If the test document never selects those
        error members, the test cannot see them at all.
      </p>
      <p>
        The decision that matters most here is to assert the error&apos;s type and its payload, not
        merely that an error occurred. Every negative test should check the returned type name plus
        the error&apos;s contents, such as which identifiers it lists. A test that only asserts that
        something failed passes when the backend returns the wrong failure, which is exactly the bug
        you most want to catch.
      </p>
      <p>
        The same discipline applies to authorization testing. A request from a caller who should be
        refused needs to come back with the right typed refusal, and the state behind it needs to be
        unchanged. Pin the precedence rules too. When one request triggers more than one kind of
        error, decide which wins, write it down, and assert it.
      </p>

      <h2>Setup failures and pagination: quiet ways to pass</h2>
      <p>
        Skipping a test when setup fails feels polite. In practice it hides defects, because a skipped
        test is neutral and a red one is not. Turn setup failures into hard failures. If a test truly
        has to be parked, quarantine it with a linked ticket instead of deleting it, so the cost stays
        visible and the test comes back when the fix ships. Make the failure message name the setup
        step that broke, so the person reading a red result knows where to look first.
      </p>
      <p>
        Pagination deserves a line of its own. If a test claims to check a later page but never
        sends a cursor or an offset, it is really checking the default page. Read each title, then
        read the request, and confirm they match.
      </p>

      <h2>What this looked like on a real engagement</h2>
      <p>
        On a multi-tenant commerce operations platform, an identity and membership domain moved off a
        REST backend-for-frontend onto GraphQL subgraphs behind a federated router. The domain covers
        users, user groups, organizations, role grants, store access and third-party application
        installs. The engagement was API contract and authorization testing on that federated graph,
        and its existing coverage had all four gaps above.
      </p>
      <p>
        We built sixty-two API test cases: seventeen for application installs, sixteen for
        organizations, fifteen for users and fourteen for user groups. A persistence read-back
        module of sixteen helpers in a single file is called from forty-four sites across twenty-two
        spec files, so every mutation&apos;s effect is re-queried from the graph rather than trusted
        from its own response. Typed error-union coverage includes an archived-users error arm added
        to three membership mutations, with the precedence rule pinned: when a request mixes missing
        and archived users, &quot;not found&quot; wins and lists only the missing identifier. And
        twenty-two setup-failure skips were converted into hard failures.
      </p>
      <p>
        The result is sixty-two cases on the integration branch in a fifty-two file suite. Twenty-two
        tests that previously could not fail now can. Seven tests are quarantined with linked tickets
        rather than deleted, and one of those quarantines records a real backend defect: a
        group-hierarchy mutation accepted a cycle, after which the tree query returned a
        self-repeating path. A test that only checked the mutation&apos;s response would never have
        noticed. You can <Link href="/case-studies/graphql-contract-testing">read the full case study</Link>{' '}
        or see <Link href="/case-studies">all of our case studies</Link>.
      </p>

      <h2>A GraphQL API testing checklist</h2>
      <ul>
        <li>Every mutation test re-queries the graph and asserts on the stored state.</li>
        <li>Persistence checks live in one shared helper module, not in each spec.</li>
        <li>Setup failures fail the test. Nothing skips silently.</li>
        <li>Test documents select the typed error members, and negative tests assert the type name and the contents.</li>
        <li>Precedence rules for mixed errors are written down and pinned by a test.</li>
        <li>Authorization tests check both the refusal and that nothing changed.</li>
        <li>Every pagination test sends the cursor or offset its title describes.</li>
        <li>Quarantined tests carry a linked ticket and are never deleted.</li>
      </ul>
      <p>
        The user interface has its own version of this discipline. If your end-to-end suite is the
        noisy one, read{' '}
        <Link href="/blog/how-to-fix-flaky-playwright-tests">how to fix flaky Playwright tests</Link>. To see
        how we present findings from an assessment, browse a{' '}
        <Link href="/sample-quality-audit">sample quality audit</Link>, or read about our{' '}
        <Link href="/services">services</Link>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* 6. FLAKY TESTS IN CI                                                */
/* ------------------------------------------------------------------ */

const flakyTestsInCi: Article = {
  slug: 'flaky-tests-in-ci-pipeline',
  title: 'Flaky Tests in CI: How to Take Over a Red Pipeline',
  seoTitle: 'Flaky Tests in CI: Fixing a Red Pipeline | Kaycore',
  excerpt:
    'Flaky tests in CI usually trace back to shared-environment leaks and unmanaged failures. How to quarantine, clean up run by run, and take over a red pipeline.',
  seoDescription:
    'Flaky tests in CI usually trace back to shared-environment leaks and unmanaged failures. How to quarantine, clean up run by run, and take over a red pipeline.',
  date: '2026-10-17',
  updated: '2026-10-17',
  author: 'Kulish Kulshrestha',
  authorTitle: 'CTO, Kaycore Technologies',
  category: 'Test Automation',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&h=900&q=80',
  keywords: [
    'flaky tests in CI',
    'test data cleanup',
    'test data management',
    'quarantine flaky tests',
    'CI pipeline stability',
    'shared test environment',
  ],
  faqs: [
    {
      q: 'How do you fix flaky tests in CI?',
      a: 'Start by separating genuine product defects from test-side failures, then fix the causes in order: stop the suite from leaking data into the shared environment, quarantine failing tests with a linked ticket instead of ignoring them, and restore each test when its fix ships.',
    },
    {
      q: 'Should you delete flaky tests?',
      a: 'No. Deleting a test throws away the knowledge that something is wrong. Quarantine it instead: skip it only with a linked bug ticket, and un-skip it when the fix ships. That keeps the problem visible and gives the team a list of tests to win back.',
    },
    {
      q: 'How do you clean up test data in a shared environment?',
      a: 'Scope cleanup to the run. Each record registers itself when it is created, and the teardown removes only what that run created. Keep any broad sweep behind an explicit opt-in, with guards for your own records and for shared fixtures, so it cannot harm other teams.',
    },
    {
      q: 'What causes test data to leak in CI?',
      a: 'Most leaks come from tests that create their own throwaway records, such as one organization each, with no teardown that catches them. Pointing those tests at a small set of pre-seeded, idempotent fixtures stops the leak at its source.',
    },
  ],
  Body: () => (
    <>
      <p>
        <strong>To fix flaky tests in CI, separate genuine defects from test-side failures, stop your
        suite from leaking data into the shared environment, and quarantine failing tests with a
        linked ticket instead of deleting or ignoring them.</strong> A red pipeline is rarely one
        problem. It is usually several, stacked so that none of them is visible on its own.
      </p>
      <p>
        This post walks through how to take over a pipeline in that state: what to look at first, how
        to clean up after your own runs, and how to bring quarantined tests back. It draws on a real
        engagement on a multi-tenant commerce operations platform.
      </p>

      <h2>Why flaky tests in CI keep the pipeline red</h2>
      <p>
        When one nightly suite has never been fully green and another has been red for days, the
        failures are a mixture. Some are genuine product defects. Some are test-side problems such as
        timing and leftover data. Until someone sorts them, nobody can trust either kind, and a real
        regression hides among the noise.
      </p>
      <p>
        Pipeline configuration adds its own failures. A newly split application can produce empty
        merge-request pipelines because the change-detection script has no mapping for its tags. The
        symptom is a green run that tested nothing, which is arguably worse than a red one.
      </p>
      <p>
        Read the pipeline in layers: configuration first, then environment, then the tests themselves.
        A test cannot be fixed if the environment under it is degraded.
      </p>
      <p>
        Resist the urge to fix everything at once. Deal first with whatever harms other people, then
        with whatever hides real defects, then with the rest. Shared infrastructure problems outrank a
        single unstable assertion, because they make every other signal worse.
      </p>

      <h2>Shared test environment: clean up what your run created</h2>
      <p>
        A shared test environment is a commons, and a suite that creates real records in it is a
        tenant. Every run that leaves records behind degrades the environment for everyone who uses
        it, and the damage compounds over time.
      </p>
      <p>
        Good test data cleanup is scoped to the run. Each record registers itself at the moment it is
        created, and an always-on teardown removes only what that run created. A broader sweep can
        still exist, but it should sit behind an explicit opt-in flag and carry guards for your own
        team&apos;s records and for shared fixtures. A cleanup job that is allowed to delete anything
        will eventually delete something that belongs to someone else.
      </p>

      <h2>Test data management: stop the leak at its source</h2>
      <p>
        Cleanup treats the symptom. Test data management treats the cause. Look for tests that create
        a throwaway record each and have no teardown that catches it. A common offender is a test that
        spins up its own organization just to have something to attach data to.
      </p>
      <p>
        The durable fix is to point those tests at a small number of pre-seeded fixtures that are
        idempotent, meaning they can be created repeatedly without producing duplicates or side
        effects. The test no longer produces anything that needs to be cleaned up, so there is nothing
        to leak.
      </p>

      <h2>How to quarantine flaky tests without losing them</h2>
      <p>
        When you quarantine flaky tests, the rule that keeps the practice honest is a ledger. A
        failing test is skipped only with a linked bug ticket, and it is un-skipped when the fix
        ships. That turns a vague pile of ignored tests into a visible list with owners and a way out.
      </p>
      <p>
        Track the flow in both directions. A healthy ledger shows more tests coming back than going
        out, and it shows how quickly the backlog shrinks. A skip with no ticket is how a suite slowly
        stops testing what it claims to test. Review the ledger on a fixed rhythm so the list shrinks
        on purpose, and agree who is allowed to add to it.
      </p>

      <h2>What this looked like on a real engagement</h2>
      <p>
        The suite ran against a shared environment, and every run created real records:
        organizations, API applications, tax rules and stores. Cleanup had not kept pace, so leaked
        organizations built up and degraded the shared graph. The cleanup sweep meant to fix that then
        ran past its time budget and terminated a different team&apos;s pipeline.
      </p>
      <p>
        We built run-scoped cleanup, moved the full sweep behind an opt-in flag with guards, and
        stopped the leak at its source. Tests had been creating a throwaway organization each, seven
        per run, that no teardown caught. Pointing them at two pre-seeded, idempotent fixture
        organizations took that to zero. We also introduced the quarantine ledger described above.
      </p>
      <p>
        The decision that mattered came when the sweep began killing another team&apos;s pipeline. We
        shipped a one-line disable the same day and the run-scoped redesign a week later. The cost
        was real: the leak grew for that week. We took it anyway. Holding other teams&apos; pipelines
        hostage while we designed the correct fix was the more expensive option, and it is the kind of
        trade a suite owner has to be willing to make out loud.
      </p>
      <p>
        All twelve quarantined tests were restored within twenty days, in batches of three, four and
        five. There were thirteen un-skips against eight skips over the period. Leaked organizations
        per run went from seven to zero, verified across two runs. One folder&apos;s runtime dropped
        from fifty-five seconds to roughly twenty-seven after three heavy reads sharing a single
        backend timeout budget were sequenced rather than run in parallel. You can{' '}
        <Link href="/case-studies/ci-stability-and-test-data">read the full case study</Link> or browse{' '}
        <Link href="/case-studies">all case studies</Link>.
      </p>
      <p>
        This is the engagement our two-week Test Suite Diagnostic is modeled on. If your pipeline
        looks like the one above, <Link href="/contact">get in touch about the Diagnostic</Link>.
      </p>

      <h2>A CI pipeline stability checklist</h2>
      <ul>
        <li>Failures are sorted into product defects and test-side problems before anything else is fixed.</li>
        <li>Pipeline configuration is checked, including whether newly split applications are mapped to their tags.</li>
        <li>Every record a run creates registers itself, and teardown removes only that run&apos;s records.</li>
        <li>Any broad cleanup sweep sits behind an opt-in flag and protects shared fixtures and other teams.</li>
        <li>Tests that created throwaway records now use pre-seeded, idempotent fixtures.</li>
        <li>A skipped test always has a linked ticket, and is un-skipped when the fix ships.</li>
        <li>Heavy reads that share one backend timeout budget run in sequence, not in parallel.</li>
      </ul>
      <p>
        Timing noise inside the tests themselves has its own cure, covered in{' '}
        <Link href="/blog/how-to-fix-flaky-playwright-tests">how to fix flaky Playwright tests</Link>. For an
        outside view of your own suite, see a <Link href="/sample-quality-audit">sample quality audit</Link>{' '}
        or our <Link href="/services">services</Link>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* 7. AI-ASSISTED TEST AUTOMATION WITH CLAUDE CODE AND MCP             */
/* ------------------------------------------------------------------ */

const aiAssistedTestAutomation: Article = {
  slug: 'ai-assisted-test-automation-claude-code-mcp',
  title: 'AI-Assisted Test Automation That Passes Code Review',
  seoTitle: 'AI Test Automation with Claude Code and MCP | Kaycore',
  excerpt:
    'AI test automation passes code review when the assistant knows your rules and checks locators on the live app. How we built it with Claude Code and MCP.',
  seoDescription:
    'AI test automation passes code review when the assistant knows your rules and checks locators on the live app. How we built it with Claude Code and MCP.',
  date: '2026-10-17',
  updated: '2026-10-17',
  author: 'Kulish Kulshrestha',
  authorTitle: 'CTO, Kaycore Technologies',
  category: 'AI Quality Engineering',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&h=900&q=80',
  keywords: [
    'AI test automation',
    'Claude Code for test automation',
    'Playwright MCP',
    'AI coding assistant code review',
    'AI-assisted QA',
    'agent skills',
  ],
  faqs: [
    {
      q: 'Can AI write test automation that passes code review?',
      a: 'Yes, if it is given the team conventions and a way to check its work. Assistants that lack that context produce code that compiles and still fails review, with guessed locators, sleeps and inline test data. Rules kept in the repository and live verification against the running application close that gap.',
    },
    {
      q: 'How do you give an AI assistant your team coding rules?',
      a: 'Keep the rules in files inside the repository and have the assistant skill point at them, rather than embedding them in a prompt. A rule in a file is reviewable and versioned, and it improves for everyone when one person learns something. A rule buried in a prompt goes stale silently.',
    },
    {
      q: 'What does MCP add to AI test automation?',
      a: 'It lets the assistant work against the running application instead of the source markup. Before a locator or assertion is committed, the agent opens the app, takes an accessibility snapshot, and confirms the actual role, accessible name or alert text rather than guessing.',
    },
    {
      q: 'How do you stop an AI assistant from committing code that breaks the rules?',
      a: 'Add a pre-commit self-review layer. The assistant audits its own change against the rule file, reports every violation in a table, and the commit stays blocked until that table is empty.',
    },
  ],
  Body: () => (
    <>
      <p>
        <strong>AI test automation passes code review when the assistant is given your team&apos;s
        rules, checks every locator against the running application instead of guessing, and is
        blocked from committing until a self-audit comes back clean.</strong> Without those
        safeguards, an assistant produces tests that compile and still fail review.
      </p>
      <p>
        This post explains why AI-assisted QA so often stalls at the review stage and shows a setup
        that fixes it, using Claude Code for test automation. The setup comes from a real engagement
        on the test automation repository of a multi-tenant commerce operations platform.
      </p>

      <h2>Why AI test automation fails code review</h2>
      <p>
        An assistant that has not been told your conventions will guess. It guesses locators from
        markup, adds sleeps to make a test pass, and builds test data inline. The code compiles and
        often runs, and then a reviewer leaves the same comments they left on the last merge request,
        and the one before that.
      </p>
      <p>
        The root problem is that the conventions live in the wrong place. In many teams, page object
        rules, banned waits and shared fixtures that must never be mutated exist mostly in reviewers&apos;
        heads and in a long checklist. A human learns them over time. An assistant starting a fresh
        session never does, unless you put them where it can read them.
      </p>
      <p>
        Another problem is context. When a product spans several repositories that behave as one
        system, answering what a component actually renders means switching repositories by hand or
        clicking through a test environment. An assistant needs that access built in.
      </p>

      <h2>Put the rules in the repository, not in the prompt</h2>
      <p>
        The decision that mattered most was this: the rules live in the repository and the skill only
        points at them. A rule embedded in a prompt is invisible to the team and goes stale silently.
        A rule in a file is reviewable, versioned, and improves for everyone when one person learns
        something.
      </p>
      <p>
        This is also how agent skills stay maintainable. A skill is a packaged set of instructions an
        assistant loads for a kind of task. Keep it thin, let it reference the rule file, and give it a
        self-update protocol. When review feedback or a failure root cause reveals a missing rule, the
        skill proposes an edit to the rule file, so the lesson is captured once instead of re-explained
        in every review.
      </p>
      <p>
        What belongs in the rule file? Anything a reviewer has ever had to say twice: how waits are
        written, how page objects are structured, which fixtures are read-only, and how test data is
        created. Write each rule so that it can be checked. The same file then serves the human
        reviewer, the assistant and the self-review, and onboarding a new engineer becomes the same
        job as onboarding a new assistant session.
      </p>

      <h2>Verify locators with Playwright MCP before you commit</h2>
      <p>
        The Model Context Protocol lets an assistant use tools against the real world. With a browser
        tool in the loop, such as Playwright MCP, the agent can open the running application and look
        at it. That changes what it can claim.
      </p>
      <p>
        The pattern is simple. Before a locator or assertion is committed, the agent opens the
        application, takes an accessibility snapshot, and confirms the actual role, accessible name or
        alert text. It no longer infers them from the markup. A locator confirmed against the live page
        is far less likely to be the guessed locator a reviewer rejects.
      </p>
      <p>
        The accessibility snapshot is the right thing to check because role-based locators are matched
        against it. Markup can contain wrappers, hidden elements and generated names that never reach
        the user, so a locator that looks right in the source can still miss on the page.
      </p>
      <p>
        Pair that with a pre-commit self-review layer. The assistant audits its own change against the
        rule file, reports every violation in a table, and the commit stays blocked until the table is
        empty. Review then starts from a clean baseline, and humans spend their attention on design
        instead of repeating style comments. The aim is not to remove review. It is to move review up a
        level, so that people ask whether a test checks the right behavior rather than whether it
        follows the conventions.
      </p>

      <h2>What this looked like on a real engagement</h2>
      <p>
        The automation repository had strict, fast-changing conventions: page-object rules, banned
        waits, shared fixtures that must never be mutated, and a migration from REST to GraphQL waits.
        Those rules lived mostly in reviewers&apos; heads and in a long checklist. We built the
        following.
      </p>
      <ul>
        <li>
          <strong>A custom agent skill.</strong> It is 467 lines across three files: a role and
          guardrail file, nine task playbooks, and a self-update protocol. The playbooks cover
          authoring, model tests, refactoring, pre-push self-review, review replies, failure triage,
          local runs and bug filing.
        </li>
        <li>
          <strong>A workspace configuration.</strong> It treats the three repositories as one system,
          with the test repository as the write target and the others as read-only references.
        </li>
        <li>
          <strong>A pre-commit self-review layer.</strong> It is a 475-line rule file with four
          enforcement triggers. Every violation is reported in a table and the commit is blocked until
          that table is empty.
        </li>
        <li>
          <strong>Live verification through MCP.</strong> Before a locator or assertion is committed,
          the agent opens the running application and confirms what is really there. Over seven
          months, 796 accessibility snapshots and 33 screenshots were captured this way.
        </li>
        <li>
          <strong>Persistent memory.</strong> It holds 89 single-fact entries covering non-obvious
          knowledge about component traps, error semantics and environment quirks.
        </li>
      </ul>
      <p>
        The result is a workflow where AI-assisted work arrives at review already conforming to the
        team&apos;s conventions, with locators verified against the running application rather than
        inferred. This is the foundation of the quality tooling Kaycore is building as product. You
        can <Link href="/case-studies/ai-augmented-qa-workflow">read the full case study</Link> or browse{' '}
        <Link href="/case-studies">all case studies</Link>.
      </p>

      <h2>A checklist for AI-assisted QA</h2>
      <ul>
        <li>Conventions are written down in files in the repository, and the assistant skill points at them.</li>
        <li>The skill has playbooks for the tasks the team repeats, including review replies and failure triage.</li>
        <li>The skill can propose edits to the rule file when a review or a failure reveals a missing rule.</li>
        <li>Every locator and assertion is confirmed against the running application before it is committed.</li>
        <li>A pre-commit self-review reports violations in a table and blocks the commit until it is empty.</li>
        <li>Related repositories are visible to the assistant, with only the test repository writable.</li>
        <li>Hard-won facts about the product are saved as small, single-fact memory entries.</li>
      </ul>
      <p>
        The rules this setup enforces start with how a suite waits, which we cover in{' '}
        <Link href="/blog/how-to-fix-flaky-playwright-tests">how to fix flaky Playwright tests</Link>. If your
        product itself was built with AI, see a{' '}
        <Link href="/sample-quality-audit">sample quality audit</Link> of an AI-built app, or read about our{' '}
        <Link href="/services">services</Link>. For the wider discipline, start with{' '}
        <Link href="/blog/what-is-ai-quality-engineering">what AI Quality Engineering is</Link>.
      </p>
    </>
  ),
};

/* ------------------------------------------------------------------ */

export const articles: Article[] = [
  aiAssistedTestAutomation,
  flakyTestsInCi,
  graphqlApiTesting,
  fixFlakyPlaywrightTests,
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
