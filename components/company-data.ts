/* ============================================
   KAYCORE TECHNOLOGIES — COMPANY DATA
   All content aligned to the PRD
   ============================================ */

import {
  Bot,
  Brain,
  Code,
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
  {
    id: 1,
    title: 'AI Quality & Risk Readiness Audit',
    slug: 'ai-quality-risk-audit',
    description:
      'A comprehensive assessment of AI systems against safety, security, and performance benchmarks.',
    icon: Bot,
    features: [
      'Self-healing test frameworks',
      'Visual regression testing',
      'Smart element locators',
      'Parallel execution at scale',
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
      'AI-powered test generation',
      'Intelligent bug prediction',
      'Risk-based test prioritization',
      'Real-time quality analytics',
    ],
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    id: 3,
    title: 'AI-QE Retainers',
    slug: 'ai-qe-retainers',
    description:
      'Ongoing quality engineering support acting as an external AI risk department.',
    icon: Code,
    features: [
      'REST & GraphQL testing',
      'Contract testing (Pact)',
      'Automated API security scans',
      'CI/CD pipeline integration',
    ],
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    id: 4,
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
    id: 5,
    title: 'Dedicated QA Teams',
    slug: 'dedicated-qa-teams',
    description:
      'Augment your engineering team with senior QA engineers. Fully managed, timezone-aligned, and embedded into your workflows from day one.',
    icon: Users,
    features: [
      'Hand-picked senior engineers',
      'Flexible team scaling',
      'Full Agile/Scrum integration',
      'Dedicated QA lead included',
    ],
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    id: 6,
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
  {
    id: 1,
    name: 'Healthcare',
    slug: 'healthcare',
    description:
      'HIPAA-compliant QA for EHR systems, telemedicine platforms, and clinical applications. Zero-tolerance for errors in patient data.',
    icon: HeartPulse,
    challenges: ['HIPAA & HL7 compliance', 'EHR integration testing', 'Patient data security'],
  },
  {
    id: 2,
    name: 'SaaS',
    slug: 'saas',
    description:
      'Continuous testing for rapid release cycles. Ensure every deployment is bulletproof across web, mobile, and API layers.',
    icon: Monitor,
    challenges: ['Multi-tenant architecture', 'Rapid release cycles', 'Cross-browser compatibility'],
  },
  {
    id: 3,
    name: 'Fintech',
    slug: 'fintech',
    description:
      'Rigorous testing for payment processing, trading platforms, and regulatory compliance. Every transaction must be flawless.',
    icon: Landmark,
    challenges: ['PCI-DSS compliance', 'Transaction accuracy', 'Regulatory reporting'],
  },
  {
    id: 4,
    name: 'Retail & E-Commerce',
    slug: 'retail',
    description:
      'End-to-end testing for shopping experiences, payment flows, inventory systems, and omnichannel platforms.',
    icon: ShoppingCart,
    challenges: ['Peak load handling', 'Payment gateway testing', 'Omnichannel consistency'],
  },
  {
    id: 5,
    name: 'Logistics',
    slug: 'logistics',
    description:
      'QA for supply chain management, fleet tracking, and warehouse systems. Ensure real-time accuracy across complex integrations.',
    icon: Truck,
    challenges: ['Real-time tracking accuracy', 'Third-party API reliability', 'Geo-distributed systems'],
  },
  {
    id: 6,
    name: 'AI Startups',
    slug: 'ai-startups',
    description:
      'Specialized testing for ML models, LLM outputs, and AI-powered features. Validate your AI before it reaches users.',
    icon: Rocket,
    challenges: ['Model output validation', 'Prompt regression testing', 'Bias & safety testing'],
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
      'We don\'t just test software. We use AI to make testing smarter, faster, and more reliable than traditional methods.',
  },
  {
    title: 'Senior Engineers Only',
    description:
      'Every team member has 5+ years of experience. No juniors learning on your project. Zero outsourcing.',
  },
  {
    title: 'Scalable & Flexible',
    description:
      'Start with one engineer or a full team. Scale up or down based on your sprint needs with zero friction.',
  },
  {
    title: 'Domain Expertise',
    description:
      'Deep specialization in Healthcare, Fintech, SaaS, and AI. These are the industries where quality failures cost millions.',
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
      'To democratize enterprise-grade quality engineering by combining AI-powered automation with human expertise, enabling every software team to ship with confidence.',
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

/* ---------- TEAM (Placeholder) ---------- */

export const teamMembers = [
  {
    id: 1,
    name: 'Kulish Kulshrestha',
    role: 'Founder & CEO',
    bio: 'Visionary technologist driving Kaycore\'s AI-first approach to quality engineering.',
  },
];

/* ---------- MILESTONES ---------- */

export const milestones = [
  { id: 1, year: '2023', title: 'Founded', description: 'Kaycore Technologies established with a vision for AI-powered QA.' },
  { id: 2, year: '2024', title: 'First Enterprise Client', description: 'Secured first enterprise partnership in the Healthcare sector.' },
  { id: 3, year: '2025', title: 'AI Automation Launch', description: 'Launched proprietary AI test automation framework.' },
  { id: 4, year: '2026', title: 'Global Expansion', description: 'Scaling operations across healthcare, fintech, and AI verticals.' },
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
