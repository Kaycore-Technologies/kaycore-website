'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
    TextReveal,
} from '@/components/animations';
import { MagneticButton, ParallaxSection, TiltCard } from '@/components/ui';
import { ArrowRight, CheckCircle, AlertTriangle, Shield, Search, Zap, Activity, Brain, Lock, Terminal } from 'lucide-react';

import { services, industries } from '@/components/company-data';

export default function HomeContent({ newsItems }: { newsItems: any[] }) {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <ParallaxSection
                videoUrl="/assets/videos/hero-main.mp4"
                className="h-[85vh] flex items-center justify-center relative"
                overlayOpacity={0.7}
            >
                <div className="relative z-20 text-center space-y-8 max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight text-white leading-[1.1]">
                            <TextReveal text="AI Quality Engineering for High-Trust AI Products" by="word" />
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                            We help teams ship AI systems that behave reliably, safely, and consistently — in production, not just demos.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8"
                    >
                        <Link href="/contact">
                            <MagneticButton className="bg-brand-accent text-white px-8 py-4 font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] rounded-full">
                                Talk to an AI Quality Expert
                            </MagneticButton>
                        </Link>
                        <Link href="/services">
                            <MagneticButton className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-all rounded-full flex items-center gap-2">
                                View Services <ArrowRight className="w-4 h-4" />
                            </MagneticButton>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="pt-8 text-xs font-mono text-slate-500 tracking-widest uppercase opacity-60"
                    >
                        Founder-led engagements • Zero production incidents
                    </motion.div>
                </div>
            </ParallaxSection>

            {/* 2. WHAT IS AI QUALITY ENGINEERING */}
            {/* 2. WHAT IS AI QUALITY ENGINEERING */}
            {/* 2. DEFINITION: WHAT IS AI-QE */}
            <section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden border-t border-white/5">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-brand-accent mb-6">
                                    // DEFINITION_
                                </h2>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white mb-8 leading-tight">
                                    What is AI Quality Engineering?
                                </h3>
                                <p className="text-white text-xl sm:text-2xl font-light leading-relaxed mb-8">
                                    Systematic validation for <span className="text-brand-accent">probabilistic software</span>.
                                </p>
                                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        Traditional QA asserts that <code>if(x) return y</code>. It fails with LLMs because they are non-deterministic, infinite-state systems.
                                    </p>
                                    <p>
                                        <strong>AI Quality Engineering (AI-QE)</strong> is a new discipline combining data science, adversarial security, and behavioral psychology to bound the uncertainty of generative models. We don&apos;t just check for bugs; we measure reliability, safety, and alignment.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/30 to-purple-500/30 rounded-2xl blur-2xl opacity-20" />
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-2 relative overflow-hidden group">
                                    <Image
                                        src="/assets/images/generated/ai_qe_hero_abstract_1770257008010.png"
                                        alt="Abstract visualization of AI data flow"
                                        width={800}
                                        height={600}
                                        className="rounded-xl w-full h-auto object-cover opacity-90 grayscale mix-blend-screen"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex gap-4 p-4 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                                            <div className="text-xs font-mono text-brand-accent">
                                                <div>&gt; PROBABILITY_BOUND: 99.9%</div>
                                                <div>&gt; DRIFT_DETECTED: FALSE</div>
                                                <div>&gt; SAFETY_SCORE: A+</div>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                                                Sample AI Safety Evaluation Output
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. HOW KAYCORE HELPS (Replaces Risk Factors) */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            <div className="lg:col-span-5 order-2 lg:order-1">
                                <StaggerContainer className="space-y-6">
                                    {[
                                        { title: 'Behavioral Testing', desc: 'We test AI behavior, not just software flows. Does it refuse unsafe prompts? Does it stay on topic?' },
                                        { title: 'Risk-First Validation', desc: 'We map your specific domain risks (e.g. financial advice errors) and test against them aggressively.' },
                                        { title: 'Human-in-the-Loop', desc: 'Expert red-teamers providing nuances that automated scripts miss.' },
                                    ].map((item, idx) => (
                                        <AnimatedItem key={idx}>
                                            <div className="flex gap-4">
                                                <div className="bg-brand-accent/20 h-12 w-12 rounded-full flex items-center justify-center text-brand-accent shrink-0 font-bold text-lg">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </AnimatedItem>
                                    ))}
                                </StaggerContainer>
                            </div>
                            <div className="lg:col-span-7 order-1 lg:order-2">
                                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Our Methodology</h2>
                                <h3 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-8">
                                    Certainty in an Uncertain World
                                </h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    We don&apos;t just run scripts. We act as your adversarial partners, trying to break your system before your users (or regulators) do.
                                </p>
                                <div className="h-2 w-24 bg-brand-accent rounded-full" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. CORE SERVICES OVERVIEW */}
            <section className="py-32 bg-[#0B1121] relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Core Services</h2>
                            <h3 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-6">
                                AI Quality & Risk Readiness
                            </h3>
                            <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                                We do fewer things, deeply. Specialized validation for high-stakes environments.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Row 1: Services 1 & 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {services.slice(0, 2).map((service, idx) => (
                                    <TiltCard key={service.id} className="h-full">
                                        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl h-full hover:border-brand-accent/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <span className="text-6xl font-mono font-bold text-white">0{idx + 1}</span>
                                            </div>
                                            <div className="text-xs font-mono text-brand-accent mb-6">0{idx + 1}</div>

                                            <h4 className="text-2xl font-bold text-white mb-4 pr-12">{service.title}</h4>
                                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                                                {service.description}
                                            </p>

                                            <Link href={`/services`} className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-white/20 hover:border-brand-accent pb-0.5 transition-colors">
                                                Learn More <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>

                            {/* Row 2: Services 3 & 4 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {services.slice(2, 4).map((service, idx) => (
                                    <TiltCard key={service.id} className="h-full">
                                        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl h-full hover:border-brand-accent/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <span className="text-6xl font-mono font-bold text-white">0{idx + 3}</span>
                                            </div>
                                            <div className="text-xs font-mono text-brand-accent mb-6">0{idx + 3}</div>

                                            <h4 className="text-2xl font-bold text-white mb-4 pr-12">{service.title}</h4>
                                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                                                {service.description}
                                            </p>

                                            <Link href={`/services`} className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-white/20 hover:border-brand-accent pb-0.5 transition-colors">
                                                Learn More <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>

                            {/* Row 3: Service 5 (Anchor) */}
                            <div className="max-w-2xl mx-auto w-full">
                                <TiltCard className="h-full">
                                    <div className="bg-gradient-to-br from-white/5 to-brand-accent/5 border border-white/10 p-10 rounded-3xl h-full hover:border-brand-accent/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all group relative overflow-hidden text-center md:text-left">
                                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity hidden md:block">
                                            <span className="text-6xl font-mono font-bold text-white">05</span>
                                        </div>
                                        <div className="text-xs font-mono text-brand-accent mb-6">05</div>

                                        <h4 className="text-2xl font-bold text-white mb-4">Regulated & Healthcare AI QA</h4>
                                        <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                                            {services[4].description}
                                        </p>

                                        <Link href={`/services`} className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-white/20 hover:border-brand-accent pb-0.5 transition-colors">
                                            Learn More <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </TiltCard>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. INDUSTRIES */}
            <section className="py-32 bg-brand-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif">Industries We Serve</h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">tailored validation frameworks for high-stakes environments.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((ind, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                                <h4 className="text-white font-bold text-lg mb-2">{ind.name}</h4>
                                <p className="text-sm text-slate-400">{ind.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/10" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
                            Ship with confidence, <br /> not crossed fingers.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stop worrying about hallucinations and regulatory fines. Let&apos;s build a validation strategy that scales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <MagneticButton className="bg-brand-accent text-white px-10 py-5 font-bold text-lg rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]">
                                    Talk to an AI Quality Expert
                                </MagneticButton>
                            </Link>
                            <Link href="/contact">
                                <MagneticButton className="border border-white/10 text-white px-10 py-5 font-semibold text-lg hover:bg-white/5 transition-all rounded-full">
                                    Request AI Risk Assessment
                                </MagneticButton>
                            </Link>
                        </div>
                        <p className="mt-8 text-slate-500 text-sm">
                            No sales pressure. Just a conversation about your AI quality challenges.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
}
