/*
 * Case studies. Final, approved copy from kaycore-case-studies-web-copy.md.
 * Publish as written: do not edit wording, and do not add, round or change any figure.
 * The client is never named. The only permitted descriptor is
 * "a multi-tenant commerce operations platform".
 * No code samples, client logos, testimonials or quotes.
 */

export interface CaseStudySection {
  heading?: string;
  paragraphs: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  body: CaseStudySection[];
}

export const caseStudiesIntro = {
  heading: 'Selected work',
  paragraphs: [
    'Four engagements from roughly a year of test automation work on a multi-tenant commerce operations platform: a React micro-frontend application, a backend-for-frontend, and several GraphQL subgraphs behind a federated router.',
    'Client, product, service and people names have been removed, and figures are counted from version control rather than estimated. We will go deeper on any of these on a call, under NDA where that helps.',
  ],
};

/* ---------------- 1 ---------------- */
const uiAutomation: CaseStudy = {
  slug: 'ui-automation-at-scale',
  title: 'Building a UI suite that survives its own frontend',
  summary:
    '85 end-to-end test cases and 48 page-object classes on a multi-tenant admin platform, built to survive two frontend migrations.',
  tags: ['Playwright', 'TypeScript', 'end-to-end testing', 'page object model'],
  body: [
    {
      paragraphs: [
        'Store-operations features were shipping faster than they were being automated. Bulk wizards, operating hours and shutdowns, order-type settings, dayparts, item availability, store groups and promotions were covered mostly by manual regression. The specs that did exist were tightly coupled to the interface. They waited on arbitrary timeouts, built their test data inline, and broke every time the frontend moved to a new forms library or data-grid version. Each nightly run produced a mixture of genuine defects and test-side timing failures, and somebody had to sort one from the other by hand every morning.',
        'We owned automation for the store-operations, store-groups, devices, customer-support and user-management areas of the application.',
      ],
    },
    {
      heading: 'What we built',
      paragraphs: [
        "Eighty-five end-to-end test cases and forty-eight page-object classes across forty-six files, organised in layers: a base page, drawer and wizard classes, each with a GraphQL-aware variant. Fluent data builders for schedules, item availability, delivery providers, order-type settings and store groups, used both to seed data through the API and to fill the interface. A refactor of the shared parameterised drawer framework, which runs one generic CRUD suite against many entity drawers, moving it off inline random-data helpers and onto the builder pattern with each entity's metadata declared on the drawer class itself.",
      ],
    },
    {
      heading: 'The decision that mattered',
      paragraphs: [
        'Every create, update and delete waits on the named GraphQL operation and its refetch, never on a sleep. Save actions wait for three things in order: the mutation, the success notification, and the refetch query.',
        'The trade-off is real and we took it deliberately. Page objects have to know operation names, so a frontend engineer renaming a query breaks the tests loudly. We prefer that. A loud break takes an hour to fix. A silent flake costs a team its trust in the suite, and that trust does not come back easily.',
      ],
    },
    {
      heading: 'What it produced',
      paragraphs: [
        'Eighty-five test cases and forty-eight page-object classes remain in use on the integration branch. When a forms-library migration removed the old store-list query and its element identifiers, four bulk-wizard tests broke; scoping the affected step by its ARIA region name rather than its identifiers brought all four back, and survived the migration after that one too.',
      ],
    },
  ],
};

/* ---------------- 2 ---------------- */
const graphqlContract: CaseStudy = {
  slug: 'graphql-contract-testing',
  title: 'API contract and authorisation testing on a federated graph',
  summary:
    '62 API test cases, a persistence read-back module called from 44 sites, and 22 silent skips turned into hard failures.',
  tags: ['GraphQL', 'federated graph', 'API testing', 'authorisation testing'],
  body: [
    {
      paragraphs: [
        'An identity and membership domain moved off a REST backend-for-frontend onto GraphQL subgraphs behind a federated router. That domain covers users, user groups, organisations, role grants, store access and third-party application installs. Its API-level coverage had four gaps, and each of them meant tests that could pass while the system was broken.',
        "Mutation tests asserted only on the mutation's own response payload, so a service returning a well-formed success without persisting anything would still pass. When test setup failed, the test called skip, so broken setup appeared as \"skipped\" and never as \"failed\". Typed error-union members were never selected in the test documents, so they could not be asserted at all. And some pagination tests did not send what their titles claimed.",
      ],
    },
    {
      heading: 'What we built',
      paragraphs: [
        'Sixty-two API test cases: seventeen for application installs, sixteen for organisations, fifteen for users, fourteen for user groups.',
        "A persistence read-back module, sixteen helpers in a single file, called from forty-four sites across twenty-two spec files. Every mutation's effect is now re-queried from the graph rather than trusted from its own response.",
        'Typed error-union coverage, including an archived-users error arm added to three membership mutations, with the precedence rule pinned: when a request mixes missing and archived users, "not found" wins and lists only the missing identifier.',
        'Twenty-two setup-failure skips converted into hard failures.',
      ],
    },
    {
      heading: 'The decision that mattered',
      paragraphs: [
        "Assert the error's type and its payload, not merely that an error occurred. Every negative test checks the returned type name plus the error's contents, such as which identifiers it lists. A test that only asserts \"this failed\" passes when the backend returns the wrong failure, which is exactly the bug you most want to catch.",
      ],
    },
    {
      heading: 'What it produced',
      paragraphs: [
        'Sixty-two cases on the integration branch in a fifty-two file suite. Twenty-two tests that previously could not fail now can. Seven tests are quarantined with linked tickets rather than deleted, and one of those quarantines records a real backend defect: a group-hierarchy mutation accepted a cycle, after which the tree query returned a self-repeating path.',
      ],
    },
  ],
};

/* ---------------- 3 ---------------- */
const ciStability: CaseStudy = {
  slug: 'ci-stability-and-test-data',
  title: 'Taking over a red pipeline',
  summary:
    "12 quarantined tests restored in 20 days, leaked test data cut from 7 records per run to zero, and a suite that stopped killing other teams' pipelines.",
  tags: ['CI', 'flaky tests', 'test data management', 'pipeline stability'],
  body: [
    {
      paragraphs: [
        "The suite ran against a shared environment, and every run created real records: organisations, API applications, tax rules, stores. Cleanup had not kept pace. Leaked organisations built up, degrading the shared graph for everyone using it. The cleanup sweep meant to fix that then ran past its time budget and terminated a different team's pipeline.",
        'Underneath that, one nightly suite had never been fully green, another had been red for days with a mixture of genuine product defects and test-side failures, and a newly split application produced empty merge-request pipelines because the change-detection script had no tag mapping for it.',
      ],
    },
    {
      heading: 'What we built',
      paragraphs: [
        "Run-scoped cleanup. Each record registers itself at creation, and the always-on teardown removes only what that run created. The full sweep moved behind an explicit opt-in flag and gained guards for the team's own records and for shared fixtures.",
        'We stopped the leak at its source: tests were creating a throwaway organisation each, seven per run, that no teardown caught. Pointing them at two pre-seeded, idempotent fixture organisations took that to zero.',
        'A quarantine ledger. A failing test is skipped only with a linked bug ticket and un-skipped when the fix ships.',
      ],
    },
    {
      heading: 'The decision that mattered',
      paragraphs: [
        "When the sweep began killing another team's pipeline, we shipped a one-line disable the same day and the run-scoped redesign a week later.",
        "The cost was real: the leak grew for that week. We took it anyway. Holding other teams' pipelines hostage while we designed the correct fix was the more expensive option, and it is the kind of trade a suite owner has to be willing to make out loud.",
      ],
    },
    {
      heading: 'What it produced',
      paragraphs: [
        "All twelve quarantined tests restored within twenty days, in batches of three, four and five. Thirteen un-skips against eight skips over the period. Leaked organisations per run went from seven to zero, verified across two runs. One folder's runtime dropped from fifty-five seconds to roughly twenty-seven after three heavy reads sharing a single backend timeout budget were sequenced rather than run in parallel.",
        'This is the engagement our two-week Test Suite Diagnostic is modelled on.',
      ],
    },
  ],
};

/* ---------------- 4 ---------------- */
const aiWorkflow: CaseStudy = {
  slug: 'ai-augmented-qa-workflow',
  title: 'An AI-augmented QA workflow',
  summary:
    'A custom agent skill, live locator verification through MCP, and an enforcement layer that blocks a commit until the self-audit is clean.',
  tags: ['AI tooling', 'Claude Code', 'MCP', 'Playwright', 'developer workflow'],
  body: [
    {
      paragraphs: [
        "The automation repository had strict, fast-changing conventions: page-object rules, banned waits, shared fixtures that must never be mutated, and a migration from REST to GraphQL waits. Those rules lived mostly in reviewers' heads and in a long checklist.",
        'AI assistants without that context produced code that compiled and failed review: guessed locators, sleeps, inline test data. The same review comments came back merge request after merge request. The product also spanned three repositories that behave as one system, so answering "what does this component actually render" meant switching repositories by hand or clicking through the test environment.',
      ],
    },
    {
      heading: 'What we built',
      paragraphs: [
        'A custom agent skill, 467 lines across three files: a role and guardrail file, nine task playbooks covering authoring, model tests, refactoring, pre-push self-review, review replies, failure triage, local runs and bug filing, and a self-update protocol. When review feedback or a failure root cause reveals a missing rule, the skill proposes an edit to the rule file, so the lesson is captured once instead of re-explained.',
        'A workspace configuration treating three repositories as one system, with the test repository as the write target and the others as read-only references.',
        'A pre-commit self-review layer, a 475-line rule file with four enforcement triggers. Every violation is reported in a table and the commit is blocked until that table is empty.',
        'Live verification through MCP. Before a locator or assertion is committed, the agent opens the running application, takes an accessibility snapshot and confirms the actual role, accessible name or alert text, rather than guessing from the markup. 796 accessibility snapshots and 33 screenshots were captured this way over seven months.',
        'Persistent memory: 89 single-fact entries holding non-obvious knowledge about component traps, error semantics and environment quirks.',
      ],
    },
    {
      heading: 'The decision that mattered',
      paragraphs: [
        'The rules live in the repository and the skill only points at them. A rule embedded in a prompt is invisible to the team and goes stale silently. A rule in a file is reviewable, versioned, and improves for everyone when one person learns something.',
      ],
    },
    {
      heading: 'What it produced',
      paragraphs: [
        "A workflow where AI-assisted work arrives at review already conforming to the team's conventions, with locators verified against the running application rather than inferred. This is the foundation of the quality tooling Kaycore is building as product.",
      ],
    },
  ],
};

export const caseStudies: CaseStudy[] = [uiAutomation, graphqlContract, ciStability, aiWorkflow];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
