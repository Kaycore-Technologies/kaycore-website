'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HeroSection,
  ServicesPreview,
  ProductsSection,
  AICapabilities,
  WhyKaycore,
  ProcessSection,
  IntroVideoSection
} from '@/components/sections';
import { LeadFormCTA } from '@/components/LeadFormCTA';
import { DotGridBackground } from '@/components/ui/DotGridBackground';
import { FAQ, type FAQItem } from '@/components/FAQ';

const homeFaqs: FAQItem[] = [
  {
    q: 'What is AI Quality Engineering?',
    a: 'AI Quality Engineering (AI-QE) is the discipline of systematically validating non-deterministic AI and LLM systems for safety, factual accuracy, robustness, and drift, both before and after they reach production. Unlike traditional QA, which checks deterministic pass/fail logic, AI-QE is built to bound the uncertainty of probabilistic systems.',
  },
  {
    q: 'How is testing AI different from traditional QA?',
    a: 'Traditional software is deterministic: the same input always produces the same output. AI systems are probabilistic and have an effectively infinite input space, so they can hallucinate, drift over time, or fail under adversarial prompts. AI-QE relies on statistical evaluation, adversarial testing, and continuous monitoring rather than fixed assertions.',
  },
  {
    q: 'How do you test an LLM for hallucinations?',
    a: 'We build golden datasets and automated evaluations that measure factual accuracy and grounding (whether an answer faithfully reflects its retrieved context), run adversarial and jailbreak probes, and track output consistency and drift across model and prompt changes.',
  },
  {
    q: 'What does an AI risk audit include?',
    a: 'A model safety and bias assessment, failure-mode and risk mapping, an adversarial and security-exposure review, and a prioritized remediation roadmap you can act on.',
  },
  {
    q: 'Do you test websites and apps built with AI coding tools?',
    a: 'Yes. Websites and apps created with Claude Code, Cursor, and other AI coding tools ship quickly, but often with hidden defects. We catch those defects before launch, so you release sooner and spend less fixing problems afterwards.',
  },
  {
    q: 'Do you work with startups or enterprises?',
    a: 'Both. We partner with startups and enterprises, from a fixed-scope audit before launch to a continuous quality retainer.',
  },
  {
    q: 'Do you work with healthcare and other regulated AI?',
    a: 'Yes. Regulated and healthcare AI QA is one of our core services, and our founder is a physician. We serve AI startups, SaaS platforms, FinTech, and healthcare and healthtech companies.',
  },
];

export default function HomeContent() {
  useEffect(() => {
    // Add page-level scroll snapping to html root element when homepage is active
    document.documentElement.classList.add('homepage-snap-active');
    return () => {
      document.documentElement.classList.remove('homepage-snap-active');
    };
  }, []);

  return (
    <div className="min-h-screen text-ink font-sans relative">
      <DotGridBackground />
      <HeroSection />
      <div className="section-divider" />
      <IntroVideoSection />
      <div className="section-divider" />
      <ServicesPreview />
      <div className="section-divider" />
      <ProductsSection />
      <AICapabilities />
      <WhyKaycore />
      <ProcessSection />

      <FAQ items={homeFaqs} />

      {/* Ready for a Real Partner Section */}
      <LeadFormCTA
        title="Ready for a Real Partner?"
        description="Our mission: to help builders ship with certainty, not crossed fingers. Talk to our lead quality engineers about the AI you are building, or the software AI is building for you."
      />
    </div>
  );
}
