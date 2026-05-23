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
      
      {/* Ready for a Real Partner Section */}
      <LeadFormCTA 
        title="Ready for a Real Partner?"
        description="Let's build something that survives the real world. Talk to our lead Quality Engineers today about securing and validating your AI architectures."
      />
    </div>
  );
}
