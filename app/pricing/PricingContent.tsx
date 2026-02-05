'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
} from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import {
    CheckCircle,
    ArrowRight,
    Terminal,
    Disc,
    Hexagon,
    Target
} from 'lucide-react';

export default function PricingContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white relative overflow-hidden">

            {/* BACKGROUND ELEMENTS */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3" />
            </div>

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[40vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-accent mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                            ENTERPRISE_GRADE_QA
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif text-white mb-8 leading-[1.1] tracking-tight">
                            Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Certainty</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                            We don&apos;t sell hours. We sell <span className="text-white font-medium">risk reduction</span>.
                            Choose the engagement model that fits your deployment velocity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. ENGAGEMENT TYPES */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                        {/* CARD 1: Audit */}
                        <AnimatedItem>
                            <div className="bg-white/5 border border-white/10 p-1 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group">
                                <div className="bg-[#020617]/80 p-8 rounded-[20px] h-full flex flex-col relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Hexagon className="w-32 h-32 text-slate-700/20" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">Risk Audit</h3>
                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className="text-slate-500 text-sm font-mono">ONE_TIME</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                                        For teams verifying a major release. We identify failure modes and provide a certification report.
                                    </p>
                                    <ul className="space-y-4 mb-8 border-t border-white/5 pt-8">
                                        {[
                                            'Architectural Review',
                                            'Adversarial Stress Test',
                                            'Go/No-Go Recommendation',
                                            'Vulnerability Brief'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-slate-300">
                                                <CheckCircle className="w-4 h-4 text-brand-accent/70 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="w-full">
                                        <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white font-bold transition-all duration-300">
                                            Get Audit Quote
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedItem>

                        {/* CARD 2: LLM Validation (Featured) */}
                        <AnimatedItem>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-b from-brand-accent/50 to-purple-600/50 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
                                <div className="bg-[#020617] border border-white/20 p-8 rounded-3xl relative h-full flex flex-col shadow-2xl">
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent to-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full shadow-lg z-20">
                                        Most Popular
                                    </div>
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Target className="w-32 h-32 text-brand-accent/30" />
                                    </div>

                                    <div className="mb-6 mt-2 relative z-10">
                                        <h3 className="text-3xl font-bold text-white mb-2 font-serif">LLM Validation</h3>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-brand-accent text-sm font-mono">PROJECT_BASED</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-sm mb-8 flex-grow leading-relaxed border-b border-white/10 pb-8 relative z-10">
                                        Deep-dive testing for RAG and Agents. We build a golden dataset and run thousands of automated probes.
                                    </p>

                                    <ul className="space-y-4 mb-10 relative z-10">
                                        {[
                                            'Custom Golden Dataset Creation',
                                            'Hallucination Rate Baseline',
                                            'Jailbreak & Injection Testing',
                                            'Prompt Optimization',
                                            'Regulatory Check (EU AI Act)'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-white font-medium">
                                                <div className="bg-brand-accent/20 p-1 rounded-full text-brand-accent">
                                                    <CheckCircle className="w-3 h-3" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/contact" className="w-full mt-auto relative z-10">
                                        <MagneticButton className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 text-white font-bold shadow-lg hover:shadow-brand-accent/25 transition-all">
                                            Scope Your Project
                                        </MagneticButton>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedItem>

                        {/* CARD 3: Retainers */}
                        <AnimatedItem>
                            <div className="bg-white/5 border border-white/10 p-1 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group">
                                <div className="bg-[#020617]/80 p-8 rounded-[20px] h-full flex flex-col relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Disc className="w-32 h-32 text-purple-500/20" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">AI-QE Retainer</h3>
                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className="text-slate-500 text-sm font-mono">MONTHLY</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                                        Ongoing protection for scaling teams. We act as your external AI safety department.
                                    </p>
                                    <ul className="space-y-4 mb-8 border-t border-white/5 pt-8">
                                        {[
                                            'Continuous Red-Teaming',
                                            'Drift Monitoring & Alerts',
                                            'Monthly Quality Reports',
                                            'On-Call Incident Response'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-slate-300">
                                                <CheckCircle className="w-4 h-4 text-brand-accent/70 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="w-full">
                                        <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white font-bold transition-all duration-300">
                                            Discuss Partnership
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedItem>

                    </StaggerContainer>
                </div>
            </section>

            {/* 3. ADDITIONAL SERVICES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-center text-2xl font-serif text-white mb-12">Specialized Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Terminal,
                                    title: 'Automation Infrastructure',
                                    desc: 'CI/CD pipelines for model evaluation.',
                                    color: 'text-purple-400',
                                    bg: 'bg-purple-400/10',
                                    slug: 'ai-qa-automation'
                                },
                                {
                                    icon: CheckCircle,
                                    title: 'Healthcare & Regulated',
                                    desc: 'HIPAA/FDA compliance validation.',
                                    color: 'text-blue-400',
                                    bg: 'bg-blue-400/10',
                                    slug: 'regulated-healthcare-ai-qa'
                                }
                            ].map((item, idx) => (
                                <Link key={idx} href={`/services/${item.slug}`}>
                                    <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-xl flex items-center gap-6 transition-all group">
                                        <div className={`${item.bg} p-4 rounded-lg ${item.color} group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm">{item.desc}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white ml-auto transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
}
