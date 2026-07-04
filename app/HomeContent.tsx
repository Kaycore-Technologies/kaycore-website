'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HeroSection, 
  ServicesPreview, 
  AICapabilities, 
  WhyKaycore, 
  ProcessSection,
  IntroVideoSection
} from '@/components/sections';
import { LeadFormCTA } from '@/components/LeadFormCTA';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { FAQ, type FAQItem } from '@/components/FAQ';

const homeFaqs: FAQItem[] = [
  {
    q: 'What is AI Quality Engineering?',
    a: 'AI Quality Engineering (AI-QE) is the discipline of systematically validating non-deterministic AI and LLM systems for safety, factual accuracy, robustness, and drift — before and after they reach production. Unlike traditional QA, which checks deterministic pass/fail logic, AI-QE is built to bound the uncertainty of probabilistic systems.',
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
    q: 'Do you work with healthcare and other regulated AI?',
    a: 'Yes. Our team includes a physician co-founder, and we specialize in the high-stakes domains — healthcare, fintech, and AI-first startups — where quality failures carry the greatest cost.',
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
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans selection:bg-brand-accent/30 selection:text-white relative">
      <ParticleBackground className="fixed inset-0 w-full h-full pointer-events-none z-[2]" particleCount={100} />
      <HeroSection />
      <div className="section-divider" />
      <IntroVideoSection />
      <div className="section-divider" />
      <ServicesPreview />
      <AICapabilities />
      <WhyKaycore />
      <ProcessSection />

      <FAQ items={homeFaqs} />

      {/* Ready for a Real Partner Section */}
      <LeadFormCTA
        title="Ready for a Real Partner?"
        description="Let's build something that survives the real world. Talk to our lead Quality Engineers today about securing and validating your AI architectures."
      />
    </div>
  );
}
