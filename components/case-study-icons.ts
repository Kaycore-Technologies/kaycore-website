import { GitBranch, Monitor, Network, Sparkles, type LucideIcon } from 'lucide-react';

// One icon per case study, keyed by slug, for the index cards and the detail page header.
export const caseStudyIcons: Record<string, LucideIcon> = {
  'ui-automation-at-scale': Monitor,
  'graphql-contract-testing': Network,
  'ci-stability-and-test-data': GitBranch,
  'ai-augmented-qa-workflow': Sparkles,
};

// Abstract header art per case study, generated with FLUX on fal.ai (no text, screens or logos).
export const caseStudyImage = (slug: string) => `/assets/case-studies/${slug}.jpg`;
