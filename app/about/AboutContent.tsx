'use client';

import { motion } from 'framer-motion';
import { SectionHeader, GlassCard, GlowButton } from '@/components/ui';
import { LeadFormCTA } from '@/components/LeadFormCTA';
import { ShieldCheck, Target, Users, Zap, CheckCircle2, Linkedin } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description: 'We treat 95% accuracy as a starting point, not a goal. Reliability is our ultimate metric.'
  },
  {
    icon: Zap,
    title: 'AI-First Mindset',
    description: 'We leverage AI not just to test software, but to rethink how engineering teams ship products.'
  },
  {
    icon: Users,
    title: 'Senior Talent Only',
    description: 'No junior hand-offs. You work directly with battle-tested quality engineering architects.'
  },
  {
    icon: Target,
    title: 'Commercial Focus',
    description: 'We align our QA strategy with your business goals, ensuring every test drives revenue predictability.'
  }
];

export default function AboutContent() {
  return (
    <div className="min-h-screen text-ink font-sans relative overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-purple w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none" />

      {/* Hero, center-aligned, matching Home/Services/Industries pattern */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-6">About Kaycore</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-navy mb-8 leading-tight tracking-tight">
              Built for the <span className="text-gradient">High Stakes.</span>
            </h1>
            <p className="text-xl text-body leading-relaxed max-w-3xl">
              Kaycore Technologies is a founder-led AI Quality Engineering firm. We partner with startups and enterprises on two problems that traditional QA was never designed for: AI systems that behave unpredictably, and software built by AI.
            </p>
            <p className="mt-6 text-lg sm:text-xl font-display font-semibold text-navy max-w-3xl">
              Our mission: <span className="text-gradient">to help builders ship with certainty, not crossed fingers.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* We Are Not A Body Shop */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 lg:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Kaycore Difference</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-navy">We Are Not A Body Shop</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Negative Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="p-8 lg:p-10 rounded-3xl border border-red-200 bg-red-50 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
                <h4 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700">×</span>
                  Staff Augmentation
                </h4>
                <ul className="space-y-4 text-body text-lg">
                  <li className="flex gap-4 items-start">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Selling hours, not outcomes.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-red-600 mt-1">•</span>
                    <span>&quot;I did what the ticket said.&quot;</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-red-600 mt-1">•</span>
                    <span>No skin in the game.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Positive Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="p-8 lg:p-10 rounded-3xl border border-brand-accent/20 bg-brand-accent/5 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-bl from-c1/10 to-transparent pointer-events-none" />
                <h4 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">✓</span>
                  Kaycore Partnership
                </h4>
                <ul className="space-y-4 text-navy text-lg">
                  <li className="flex gap-4 items-start">
                    <span className="text-brand-accent mt-1">✦</span>
                    <span>Owning the risk outcome.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-brand-accent mt-1">✦</span>
                    <span>Reputation tied to success.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-brand-accent mt-1">✦</span>
                    <span>Deep, persistent domain knowledge.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 lg:py-20 relative z-10 bg-surface border-y border-line"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What Drives"
            highlight="Our Engineering"
            description="Core principles that guide every test we write and every strategy we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <GlassCard className="p-8 lg:p-10 h-full flex flex-col sm:flex-row items-start gap-6 hover:border-brand-accent/40 transition-all duration-500 group relative overflow-hidden">
                    {/* Abstract Hover Glow */}
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-bl from-c1/20 to-c2/0 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Icon tile */}
                    <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border border-brand-accent/20 bg-brand-accent/10 group-hover:scale-105 transition-all duration-500">
                      <Icon className="w-6 h-6 text-brand-accent" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-brand-accent transition-colors">{val.title}</h3>
                      <p className="text-body text-sm leading-relaxed">{val.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Leadership */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 lg:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-navy">
              Founder-Led Accountability
            </h3>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10 max-w-4xl mx-auto">
            {/* Founder 1 - CEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-surface rounded-3xl p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">
                <div className="relative w-44 lg:w-52 shrink-0 aspect-[4/5] rounded-2xl overflow-hidden border border-line group mx-auto sm:mx-0">
                  <Image
                    src="/images/team/ayushi.jpg"
                    alt="Dr. Ayushi Shukla - Founder and CEO"
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent pointer-events-none" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-navy font-bold text-2xl sm:text-3xl mb-1">Dr. Ayushi Shukla</h4>
                  <p className="text-brand-accent font-mono text-sm uppercase tracking-wider mb-4">Founder &amp; CEO</p>
                  <a
                    href="https://www.linkedin.com/in/dr-ayushi-shukla-646700a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dr. Ayushi Shukla on LinkedIn"
                    className="inline-flex items-center gap-2 text-sm text-body hover:text-brand-accent transition-colors mb-6"
                  >
                    <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                  </a>
                  <blockquote className="border-l-2 border-brand-accent pl-4 mb-6">
                    <p className="text-lg text-navy italic">&quot;We are bridging the gap between clinical reality and technological capability to make healthcare accessible, efficient, and deeply human.&quot;</p>
                  </blockquote>
                  <p className="text-body leading-relaxed text-sm lg:text-base">
                    Dr. Shukla brings almost eight years of frontline clinical experience to Kaycore&apos;s healthcare initiatives. Having served in leading institutions, she experienced firsthand the administrative burnout and systemic inefficiencies plaguing modern medicine. Her mission is to harness AI to reduce physician cognitive load, eliminate documentation friction, and ultimately return the focus of healthcare back to the patient.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 - CTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="glass-surface rounded-3xl p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row-reverse gap-6 sm:gap-8 lg:gap-10 items-start">
                <div className="relative w-44 lg:w-52 shrink-0 aspect-[4/5] rounded-2xl overflow-hidden border border-line group mx-auto sm:mx-0">
                  <Image
                    src="/images/team/kulish-kulshrestha.jpg"
                    alt="Kulish Kulshrestha - CTO"
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent pointer-events-none" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-navy font-bold text-2xl sm:text-3xl mb-1">Kulish Kulshrestha</h4>
                  <p className="text-brand-accent font-mono text-sm uppercase tracking-wider mb-4">CTO</p>
                  <a
                    href="https://www.linkedin.com/in/kulish-kulshrestha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kulish Kulshrestha on LinkedIn"
                    className="inline-flex items-center gap-2 text-sm text-body hover:text-brand-accent transition-colors mb-6"
                  >
                    <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                  </a>
                  <blockquote className="border-l-2 border-brand-accent pl-4 mb-6">
                    <p className="text-lg text-navy italic">&quot;I don&apos;t ask whether an AI works. I ask how it fails and whether we detect it in time.&quot;</p>
                  </blockquote>
                  <p className="text-body leading-relaxed text-sm lg:text-base">
                    With nine years of experience architecting and validating production-grade software, Kulish is driven by a singular mission: to eliminate the unpredictability of AI in enterprise environments. Recognizing that traditional QA fails when applied to probabilistic systems, he leads technology and quality engineering at Kaycore, bridging the gap between experimental AI and mission-critical reliability. His expertise in risk analysis and failure modes ensures that organizations can deploy AI solutions with absolute confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <LeadFormCTA
        title="Ready for a Real Partner?"
        description="Let's build something that survives the real world. Talk to our engineers today and let us engineer custom risk protocols for your application."
      />

    </div>
  );
}
