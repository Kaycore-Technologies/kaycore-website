/* ============================================
   KAYCORE TECHNOLOGIES: COMPANY DATA
   All content aligned to the PRD
   ============================================ */

import {
  Bot,
  Brain,
  Code,
  AppWindow,
  Repeat,
  Gauge,
  Users,
  MessageSquare,
  HeartPulse,
  Monitor,
  Landmark,
  ShoppingCart,
  Truck,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

/* ---------- SERVICES ---------- */

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string; // Tailwind color class for icon bg
}

export const services: Service[] = [
  // The six services on Kaycore's LinkedIn page, in its order, followed by the three additional services.
  {
    id: 1,
    title: 'AI Quality & Risk Readiness Audit',
    slug: 'ai-quality-risk-audit',
    description:
      'A comprehensive assessment of AI systems against safety, security, and performance benchmarks.',
    icon: Bot,
    features: [
      'Model safety & bias assessment',
      'Failure mode & risk mapping',
      'Adversarial & security exposure review',
      'Prioritized remediation roadmap',
    ],
    color: 'from-indigo-500/20 to-indigo-600/10',
  },
  {
    id: 2,
    title: 'LLM & Generative AI Testing',
    slug: 'llm-generative-ai-testing',
    description:
      'Specialized testing for non-deterministic models validating prompt robustness and resistance to adversarial attacks.',
    icon: Brain,
    features: [
      'Prompt robustness & regression testing',
      'Hallucination & factual-accuracy checks',
      'Adversarial & jailbreak resistance',
      'Output consistency & drift monitoring',
    ],
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    id: 3,
    title: 'QA for AI-Built Websites & Apps',
    slug: 'qa-for-ai-built-apps',
    description:
      'Websites and apps created with Claude Code, Cursor, and other AI coding tools ship quickly, but often with hidden defects. We catch those defects before launch, so you release sooner and spend less fixing problems afterwards.',
    icon: AppWindow,
    features: [
      'End-to-end testing of critical user journeys',
      'Edge-case & error-handling coverage',
      'Cross-browser & device checks',
      'Release-readiness report before launch',
    ],
    color: 'from-sky-500/20 to-sky-600/10',
  },
  {
    id: 4,
    title: 'Custom AI QA Automation Frameworks',
    slug: 'custom-ai-qa-automation-frameworks',
    description:
      'Robust, AI-powered test frameworks built for your stack and integrated directly into your CI/CD pipeline. You keep the code.',
    icon: Code,
    features: [
      'AI-powered test generation',
      'Self-healing UI automation',
      'Intelligent test selection in CI',
      'Built in your repo, owned by your team',
    ],
    color: 'from-violet-500/20 to-violet-600/10',
  },
  {
    id: 5,
    title: 'Continuous Quality Retainers',
    slug: 'continuous-quality-retainers',
    description:
      'Ongoing quality engineering support, acting as your external AI risk department.',
    icon: Repeat,
    features: [
      'Embedded senior QA engineers',
      'Continuous regression & release coverage',
      'Ongoing AI risk monitoring',
      'Flexible month-to-month capacity',
    ],
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    id: 6,
    title: 'Regulated & Healthcare AI QA',
    slug: 'regulated-healthcare-ai-qa',
    description:
      'Clinical-grade validation readiness for AI in regulated healthcare, shaped with physician input and built to produce the documented evidence regulators ask for.',
    icon: HeartPulse,
    features: [
      'Clinically informed risk mapping',
      'Bias & sub-population robustness testing',
      'Safety & groundedness evaluation',
      'Documented evidence for regulatory review',
    ],
    color: 'from-rose-500/20 to-rose-600/10',
  },
  {
    id: 7,
    title: 'Performance Testing',
    slug: 'performance-testing',
    description:
      'Identify bottlenecks before they become outages. Load testing, stress testing, and capacity planning for applications at any scale.',
    icon: Gauge,
    features: [
      'Load & stress testing',
      'Scalability analysis',
      'Database query optimization',
      'Real-time monitoring dashboards',
    ],
    color: 'from-cyan-500/20 to-cyan-600/10',
  },
  {
    id: 8,
    title: 'Embedded QA Engineers',
    slug: 'embedded-qa-engineers',
    description:
      'Senior QA engineers embedded into your team and workflows, staffed per engagement rather than drawn from a bench. Timezone-aligned and fully managed from day one.',
    icon: Users,
    features: [
      'Hand-picked senior engineers',
      'Staffed per engagement, not a bench',
      'Full Agile/Scrum integration',
      'Embedded in your workflow from day one',
    ],
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    id: 9,
    title: 'QA Consulting',
    slug: 'qa-consulting',
    description:
      'Strategic QA consulting to transform your testing culture. We audit, design, and implement world-class quality processes tailored to your org.',
    icon: MessageSquare,
    features: [
      'QA maturity assessment',
      'Test strategy design',
      'Tool selection & setup',
      'Team training & mentoring',
    ],
    color: 'from-amber-500/20 to-amber-600/10',
  },
];

/* ---------- INDUSTRIES ---------- */

export interface Industry {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  challenges: string[];
}

export const industries: Industry[] = [
  // The four sectors on Kaycore's LinkedIn page first, in its order.
  {
    id: 1,
    name: 'AI Startups',
    slug: 'ai-startups',
    description:
      'Specialized testing for ML models, LLM outputs, and AI-powered features. Validate your AI before it reaches users.',
    icon: Rocket,
    challenges: ['Model output validation', 'Prompt regression testing', 'Bias & safety testing'],
  },
  {
    id: 2,
    name: 'SaaS Platforms',
    slug: 'saas',
    description:
      'Continuous testing for rapid release cycles. Ensure every deployment is bulletproof across web, mobile, and API layers.',
    icon: Monitor,
    challenges: ['Multi-tenant architecture', 'Rapid release cycles', 'Cross-browser compatibility'],
  },
  {
    id: 3,
    name: 'FinTech',
    slug: 'fintech',
    description:
      'Rigorous testing for payment processing, trading platforms, and regulatory compliance. Every transaction must be flawless.',
    icon: Landmark,
    challenges: ['PCI-DSS compliance', 'Transaction accuracy', 'Regulatory reporting'],
  },
  {
    id: 4,
    name: 'Healthcare & Healthtech',
    slug: 'healthcare',
    description:
      'HIPAA-compliant QA for EHR systems, telemedicine platforms, clinical applications, and healthtech products. Zero-tolerance for errors in patient data.',
    icon: HeartPulse,
    challenges: ['HIPAA & HL7 compliance', 'EHR integration testing', 'Patient data security'],
  },
  {
    id: 5,
    name: 'Retail & E-Commerce',
    slug: 'retail',
    description:
      'End-to-end testing for shopping experiences, payment flows, inventory systems, and omnichannel platforms.',
    icon: ShoppingCart,
    challenges: ['Peak load handling', 'Payment gateway testing', 'Omnichannel consistency'],
  },
  {
    id: 6,
    name: 'Logistics',
    slug: 'logistics',
    description:
      'QA for supply chain management, fleet tracking, and warehouse systems. Ensure real-time accuracy across complex integrations.',
    icon: Truck,
    challenges: ['Real-time tracking accuracy', 'Third-party API reliability', 'Geo-distributed systems'],
  },
];

/* ---------- PROCESS STEPS ---------- */

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery & Audit',
    description:
      'We deep-dive into your product, codebase, and current QA processes to identify gaps, risks, and quick wins.',
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    description:
      'Custom test strategy tailored to your tech stack, release cadence, and business-critical user flows.',
  },
  {
    num: '03',
    title: 'Build & Automate',
    description:
      'Our engineers build robust, AI-powered test frameworks integrated directly into your CI/CD pipeline.',
  },
  {
    num: '04',
    title: 'Monitor & Optimize',
    description:
      'Continuous monitoring, test maintenance, and optimization. Quality improves with every sprint.',
  },
];

/* ---------- STATS ---------- */

export interface Stat {
  id: number;
  value: string;
  label: string;
  suffix?: string;
}

export const companyStats: Stat[] = [
  { id: 1, value: '98', label: 'Bug Detection Rate', suffix: '%' },
  { id: 2, value: '60', label: 'Faster Release Cycles', suffix: '%' },
  { id: 3, value: '500', label: 'Test Cases Automated', suffix: 'K+' },
  { id: 4, value: '40', label: 'Enterprise Clients', suffix: '+' },
];

/* ---------- WHY KAYCORE ---------- */

export interface WhyItem {
  title: string;
  description: string;
}

export const whyKaycore: WhyItem[] = [
  {
    title: 'AI-First Approach',
    description:
      'We test AI, and everything AI builds, using AI to make that testing smarter, faster, and more reliable than traditional methods.',
  },
  {
    title: 'Senior Engineers Only',
    description:
      'Every team member has 5+ years of experience. No juniors learning on your project. The engineer who scopes your work is the engineer who does it.',
  },
  {
    title: 'Startups & Enterprises',
    description:
      'We serve both startups and enterprises. Start with a fixed-scope audit or a single engineer, and scale to a continuous quality retainer as you grow.',
  },
  {
    title: 'Domain Expertise',
    description:
      'Deep specialization in AI startups, SaaS platforms, FinTech, and healthcare and healthtech. These are the industries where quality failures cost millions.',
  },
  {
    title: 'Embedded in Your Team',
    description:
      'We join your Slack, attend your standups, and work in your timezone. We are not an outsourced vendor, but a true partner.',
  },
  {
    title: 'Outcome-Driven',
    description:
      'We measure success by bugs caught in staging, not test cases written. Real quality metrics, not vanity reports.',
  },
];

/* ---------- ABOUT SECTION ---------- */

export const aboutSection = {
  mission: {
    title: 'Our Mission',
    description:
      'To help builders ship with certainty, not crossed fingers.',
  },
  vision: {
    title: 'Our Vision',
    description:
      'A world where software defects are caught before they\'re written. AI anticipates failures, and quality is built into every line of code.',
  },
  philosophy: {
    title: 'AI-First Philosophy',
    description:
      'We believe the future of QA is intelligent, adaptive, and automated. Traditional testing can\'t keep pace with modern development. That\'s why we build AI into the core of every testing strategy, from self-healing test suites to predictive bug detection.',
    pillars: [
      {
        title: 'Intelligent Automation',
        description: 'AI that writes, maintains, and evolves test suites alongside your codebase.',
      },
      {
        title: 'Predictive Quality',
        description: 'Machine learning models that predict where bugs will appear before they do.',
      },
      {
        title: 'Continuous Learning',
        description: 'Test frameworks that learn from production incidents and strengthen coverage automatically.',
      },
    ],
  },
};

/* ---------- TEAM ---------- */

export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Ayushi Shukla',
    role: 'Founder & CEO',
    bio: 'Dr. Shukla brings almost eight years of frontline clinical experience to Kaycore\'s healthcare initiatives.',
  },
  {
    id: 2,
    name: 'Kulish Kulshrestha',
    role: 'CTO',
    bio: 'With nine years of experience architecting and validating production-grade software, Kulish leads technology and quality engineering at Kaycore.',
  },
];

/* ---------- GLOBAL OFFICES ---------- */

export const globalOffices = [
  {
    city: 'Bengaluru',
    country: 'India',
    label: 'Engineering Hub',
  },
  {
    city: 'New Delhi',
    country: 'India',
    label: 'Operations',
  },
  {
    city: 'Kanpur',
    country: 'India',
    label: 'R&D Center',
  },
];
