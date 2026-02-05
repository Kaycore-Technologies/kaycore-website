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
    ArrowRight,
    ShieldCheck,
    Target,
    Users,
    RefreshCw,
    Search,
    Zap,
    Lock
} from 'lucide-react';

export default function MethodologyContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[100px] rounded-full" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                </div>

                <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-white mb-12 leading-tight">
                            Certainty is <br /> <span className="text-brand-accent">Engineered</span>, Not Accidental.
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
                            We don't "vibe check" your AI. We disassemble it, stress-test it, and rebuild confidence from the ground up.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. RISK-FIRST THINKING */}
            <section className="py-32 bg-[#0B1121] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-red-400 uppercase mb-4">Our Philosophy</h2>
                            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                                Risk-First Thinking
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Traditional QA asks: <em>"Does it feature work?"</em>
                                <br />
                                AI Quality Engineering asks: <em>"How can this destroy trust?"</em>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Target className="text-slate-400 w-6 h-6" />
                                    The Happy Path
                                </h4>
                                <p className="text-slate-300 italic mb-6 text-lg border-l-2 border-white/10 pl-4">
                                    "User asks for a recipe. AI gives recipe."
                                </p>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    This is where 90% of development time goes. It&apos;s necessary, but insufficient for safety.
                                </p>
                            </div>
                            <div className="bg-red-500/5 p-10 rounded-2xl border border-red-500/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <ShieldCheck className="w-24 h-24 text-red-500" />
                                </div>
                                <h4 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-3 relative z-10">
                                    <ShieldCheck className="text-red-500 w-6 h-6" />
                                    The Kaycore Path
                                </h4>
                                <p className="text-slate-200 italic mb-6 text-lg border-l-2 border-red-500/30 pl-4 relative z-10">
                                    "Attacker asks for bomb recipe disguised as poem. AI refuses politely."
                                </p>
                                <p className="text-sm text-slate-400 relative z-10 leading-relaxed">
                                    We obsess over the <strong className="text-white">1% of edge cases</strong> that cause 100% of the reputational damage.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. VALIDATION LIFECYCLE */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Process</h2>
                        <h3 className="text-3xl sm:text-5xl font-bold font-serif text-white">
                            The AI Behavior Lifecycle
                        </h3>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block" />

                        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                {
                                    icon: Search,
                                    title: '1. Assess',
                                    desc: 'Map failure modes. Identify high-risk usage patterns and compliance gaps.'
                                },
                                {
                                    icon: Zap,
                                    title: '2. Attack',
                                    desc: 'Red-teaming operations. Prompt injection, jailbreaking, and stress testing.'
                                },
                                {
                                    icon: Lock,
                                    title: '3. Verify',
                                    desc: 'Golden dataset evaluation. Measuring accuracy against ground truth.'
                                },
                                {
                                    icon: RefreshCw,
                                    title: '4. Monitor',
                                    desc: 'Drift detection. Alerting on performance degradation in production.'
                                },
                            ].map((step, idx) => (
                                <AnimatedItem key={idx}>
                                    <div className="bg-[#020617] p-8 rounded-2xl border border-white/10 text-center relative h-full flex flex-col items-center">
                                        <div className="w-16 h-16 bg-brand-dark rounded-full border-4 border-[#020617] flex items-center justify-center text-brand-accent mb-6 shadow-lg relative z-20">
                                            <step.icon className="w-7 h-7" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* 4. HITL & DRIFT */}
            <section className="py-32 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="w-8 h-8 text-brand-accent" />
                                    <h3 className="text-2xl font-bold text-white">Human-in-the-Loop (HITL)</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Automated checks catch syntax errors, but they miss nuance. Can an automated script tell if a chatbot's tone was "slightly condescending"? Probably not.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    We employ expert human raters for subjective qualities like <strong className="text-white">tone, helpfulness, and empathy</strong>—critical factors for customer retention.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <RefreshCw className="w-8 h-8 text-purple-400" />
                                    <h3 className="text-2xl font-bold text-white">Continuous & Regression</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    AI models drift. A prompt that works today might fail next week after a model update.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    We build <strong className="text-white">CI/CD pipelines for AI</strong>. Every new model version runs through a gauntlet of 500+ regression tests before it touches live traffic.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 text-center border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">See the Difference</h2>
                    <p className="text-slate-300 mb-10 text-lg">
                        Stop deploying on hope. Start deploying on proof.
                    </p>
                    <Link href="/contact">
                        <MagneticButton className="bg-brand-accent text-white px-10 py-5 font-bold text-lg rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]">
                            Talk to an AI Quality Expert
                        </MagneticButton>
                    </Link>
                </div>
            </section>

        </div>
    );
}
