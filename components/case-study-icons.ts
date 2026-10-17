import { GitBranch, Monitor, Network, Sparkles, type LucideIcon } from 'lucide-react';

// One icon per case study, keyed by slug, for the index cards and the detail page header.
export const caseStudyIcons: Record<string, LucideIcon> = {
  'ui-automation-at-scale': Monitor,
  'graphql-contract-testing': Network,
  'ci-stability-and-test-data': GitBranch,
  'ai-augmented-qa-workflow': Sparkles,
};
