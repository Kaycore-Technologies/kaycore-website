'use client';

import { motion } from 'framer-motion';
import { SectionHeader, GlassCard, GlowButton } from '@/components/ui';
import { LeadFormCTA } from '@/components/LeadFormCTA';
import { ShieldCheck, Target, Users, Zap, CheckCircle2 } from 'lucide-react';
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
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans selection:bg-brand-accent/30 selection:text-white relative overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-purple w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none" />

      {/* Hero — center-aligned, matching Home/Services/Industries pattern */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-6">About Kaycore</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tight">
              Built for the <span className="text-gradient">High Stakes.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
              Kaycore was founded on a simple premise: AI is too dangerous to be built by generalists. We exist to close the Confidence Gap. We bring the rigor of aerospace engineering to the chaos of generative AI.
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
        className="py-24 lg:py-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Kaycore Difference</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">We Are Not A Body Shop</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Negative Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="p-8 lg:p-10 rounded-3xl border border-red-500/20 bg-red-950/10 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
                <h4 className="text-2xl font-bold text-red-200 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">×</span>
                  Staff Augmentation
                </h4>
                <ul className="space-y-4 text-gray-400 text-lg">
                  <li className="flex gap-4 items-start">
                    <span className="text-red-500/50 mt-1">•</span>
                    <span>Selling hours, not outcomes.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-red-500/50 mt-1">•</span>
                    <span>&quot;I did what the ticket said.&quot;</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-red-500/50 mt-1">•</span>
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
              <div className="p-8 lg:p-10 rounded-3xl border border-cyan-500/30 bg-cyan-950/20 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none" />
                <h4 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">✓</span>
                  Kaycore Partnership
                </h4>
                <ul className="space-y-4 text-white text-lg">
                  <li className="flex gap-4 items-start">
                    <span className="text-cyan-400 mt-1">✦</span>
                    <span>Owning the risk outcome.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-cyan-400 mt-1">✦</span>
                    <span>Reputation tied to success.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-cyan-400 mt-1">✦</span>
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
        className="py-24 lg:py-32 relative z-10 bg-white/[0.02] border-y border-white/5"
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
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-bl from-cyan-400/20 to-purple-500/0 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Advanced Icon Container */}
                    <div className="w-16 h-16 shrink-0 rounded-2xl relative flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(14,165,233,0.1)] overflow-hidden group-hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-[#030712] opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/60 to-purple-900/20 mix-blend-screen" />
                      <div className="absolute inset-[-50%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,rgba(139,92,246,0.3)_360deg)]" />
                      <div className="absolute inset-[1px] bg-[#030712] rounded-[15px]" />
                      <Icon className="w-6 h-6 text-cyan-300 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{val.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
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
        className="py-24 lg:py-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              Founder-Led Accountability
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 mb-8 group">
                <Image
                  src="/images/team/kulish.jpg"
                  alt="Kulish Kulshrestha - Founder & Lead Architect"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover z-10 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent z-20 pointer-events-none" />
              </div>
              <h4 className="text-white font-bold text-3xl mb-1">Kulish Kulshrestha</h4>
              <p className="text-brand-accent font-mono text-sm uppercase tracking-wider mb-6">Founder & Lead Architect</p>
              <blockquote className="border-l-2 border-brand-accent pl-4 mb-6">
                <p className="text-lg text-white font-light italic">&quot;I don&apos;t ask whether an AI works. I ask how it fails and whether we detect it in time.&quot;</p>
              </blockquote>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                With over a decade of experience architecting and validating production-grade software, Kulish is driven by a singular mission: to eliminate the unpredictability of AI in enterprise environments. Recognizing that traditional QA fails when applied to probabilistic systems, he founded Kaycore to bridge the gap between experimental AI and mission-critical reliability. His expertise in risk analysis and failure modes ensures that organizations can deploy AI solutions with absolute confidence.
              </p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 mb-8 group">
                <Image
                  src="/images/team/ayushi.jpg"
                  alt="Dr. Ayushi Shukla - Co-founder, Kaycore Technologies"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover z-10 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent z-20 pointer-events-none" />
              </div>
              <h4 className="text-white font-bold text-3xl mb-1">Dr. Ayushi Shukla</h4>
              <p className="text-brand-accent font-mono text-sm uppercase tracking-wider mb-6">Co-founder, Kaycore Technologies</p>
              <blockquote className="border-l-2 border-brand-accent pl-4 mb-6">
                <p className="text-lg text-white font-light italic">&quot;We are bridging the gap between clinical reality and technological capability to make healthcare accessible, efficient, and deeply human.&quot;</p>
              </blockquote>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Dr. Shukla brings nearly a decade of frontline clinical experience to Kaycore&apos;s healthcare initiatives. Having served in leading institutions, she experienced firsthand the administrative burnout and systemic inefficiencies plaguing modern medicine. Her mission is to harness AI to reduce physician cognitive load, eliminate documentation friction, and ultimately return the focus of healthcare back to the patient.
              </p>
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
