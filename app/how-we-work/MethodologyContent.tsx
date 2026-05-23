'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
} from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import {
    Activity,
    Shield,
    Database,
    Zap,
    Scale,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

export default function MethodologyContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. DISCIPLINE DEFINITION HERO */}
            <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full animate-pulse-slow" />
                    <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-mono font-bold tracking-[0.2em] text-brand-accent mb-6">
                            // THE_DISCIPLINE
                        </h2>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif text-white mb-8 leading-[1.1]">
                            AI Quality <br /> Engineering
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-xl">
                            The discipline of bounding uncertainty in probabilistic systems.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                            We bridge the gap between "it works on my laptop" and "it's safe for 10 million users" through rigorous, adversarial validation.
                        </p>
                        <Link href="/contact">
                            <MagneticButton className="bg-brand-accent text-white px-8 py-4 font-bold text-lg hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] rounded-full">
                                Talk to an AI Quality Expert
                            </MagneticButton>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-2 relative overflow-hidden group">
                            <Image
                                src="/assets/images/generated/service_audit_v2_1770256566497.png"
                                alt="AI Quality Engineering Visualization"
                                width={800}
                                height={800}
                                className="rounded-2xl w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"
                            />
                            <div className="absolute bottom-8 left-8 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-xs font-mono text-brand-accent">
                                <div>&gt; UNCERTAINTY_BOUND: TRUE</div>
                                <div>&gt; RISK_TOLERANCE: 0.01%</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CORE PILLARS (NARRATIVE SPINE) */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0B1121]">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-24">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">Core Principles</h2>
                            <h3 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-8">
                                Beyond "Vibes-Based" Testing
                            </h3>
                            <p className="text-slate-400 text-xl leading-relaxed">
                                Traditional software QA is deterministic. AI QA is probabilistic.
                                We apply three rigorous layers of validation to ensure your models are fit for purpose.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: '1. Safety & Alignment',
                                    desc: 'Does the model refuse harmful instructions? Is it resistant to jailbreaks and prompt injection attacks?',
                                    metric: 'Attack Success Rate (ASR)'
                                },
                                {
                                    icon: Scale,
                                    title: '2. Factuality & Grounding',
                                    desc: 'Does the RAG system retrieve the correct context? Does the generated answer faithfully represent that context without hallucination?',
                                    metric: 'Context Precision / Recall'
                                },
                                {
                                    icon: Activity,
                                    title: '3. Reliability & Drift',
                                    desc: 'Does the model behave consistently over time? Do minor prompt variations cause major output regressions?',
                                    metric: 'Pass@k Consistency'
                                }
                            ].map((pillar, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                    <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
                                        <pillar.icon className="w-7 h-7" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4">{pillar.title}</h4>
                                    <p className="text-slate-400 leading-relaxed mb-8 h-24">
                                        {pillar.desc}
                                    </p>
                                    <div className="pt-6 border-t border-white/5">
                                        <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Metric</div>
                                        <div className="text-brand-accent font-mono">{pillar.metric}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. VISUAL REST ZONE (NEGATIVE SPACE) */}
            <section className="py-40 bg-brand-dark flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl sm:text-6xl font-serif text-white opacity-20 font-bold leading-tight select-none">
                        "Trust is the currency of AI adoption."
                    </h2>
                </div>
            </section>

            {/* 4. METHODOLOGY DEEP DIVE */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0B1121] border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <ScrollReveal>
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-6">The Kaycore Standard</h2>
                            <h3 className="text-4xl font-bold font-serif text-white mb-8">
                                Human-in-the-Loop + <br /> Automated Evaluation
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Automated metrics (BLEU, ROUGE, Semantic Similarity) are fast but lack nuance. Human evaluation is accurate but slow.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                We combine both. Our automated pipelines run 500+ regression tests on every commit, while our expert human team (PhDs, Subject Matter Experts) performs targeted "red-teaming" on corner cases.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Golden Dataset Construction',
                                    'Adversarial Simulation',
                                    'Regulatory Readiness Mapping (EU AI Act)'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-5 h-5 text-brand-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/services">
                                <MagneticButton className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                                    Explore Our Services
                                </MagneticButton>
                            </Link>
                        </div>
                    </ScrollReveal>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                        <Image
                            src="/assets/images/generated/service_automation_v3_1770256617139.png"
                            alt="Automated Pipeline Visualization"
                            width={800}
                            height={600}
                            className="rounded-3xl relative z-10 w-full h-auto opacity-90 border border-white/10"
                        />
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-32 bg-brand-dark text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold font-serif text-white mb-8">
                        Ready to validate your AI?
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Move from "vibes" to verifiable metrics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact">
                            <MagneticButton className="bg-brand-accent text-white px-10 py-5 font-bold text-lg hover:bg-sky-400 transition-all shadow-xl rounded-full">
                                Talk to an AI Quality Expert
                            </MagneticButton>
                        </Link>
                        <Link href="/contact">
                            <MagneticButton className="border border-white/10 text-slate-300 px-10 py-5 font-semibold text-lg hover:text-white hover:bg-white/5 transition-all rounded-full">
                                Request Risk Assessment
                            </MagneticButton>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

