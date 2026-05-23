'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import { Zap, Terminal, GitBranch, Server, Settings, ArrowRight, CheckCircle, XCircle, Clock, Shield, Activity, Lock } from 'lucide-react';
import Image from 'next/image';

export default function AutomationContent({ service }: { service: any }) {
    if (!service) return null;

    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white relative">

            {/* 1. HERO */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80" />
                </div>

                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-8 backdrop-blur-md">
                            <Terminal className="w-3 h-3" />
                            CORE_INFRASTRUCTURE
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white mb-8 leading-[1.1]">
                            Certainty is Engineered, <br /> <span className="text-purple-300">Not Accidental.</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl">
                            We build the testing infrastructure that turns probabilistic AI models into reliable enterprise software. Catch hallucinations, regressions, and security failures before they reach production.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link href="/contact">
                                <MagneticButton className="bg-purple-600 text-white font-bold px-8 py-4 rounded-full hover:bg-purple-500 transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.5)]">
                                    Talk to an AI Quality Engineer
                                </MagneticButton>
                            </Link>
                            <Link href="#process">
                                <MagneticButton className="bg-white/5 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2">
                                    Why AI Needs This <ArrowRight className="w-4 h-4" />
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE PROBLEM (COMMERCIAL REALITY) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1121] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">The Production Gap</h3>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                                "Works on my machine" <br /> is not a strategy.
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Traditional software is binary: it works or it doesn't. AI is probabilistic: it works <em>mostly</em>.
                                <br /><br />
                                Without rigorous automated evaluation, every model update is a gamble with your brand reputation. We replace "checking a few examples" with statistical confidence.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <Activity className="w-6 h-6 text-red-400" />
                                    <div>
                                        <div className="text-white font-bold">Silent Regressions</div>
                                        <div className="text-sm text-slate-300">New models fixing one bug but breaking five others.</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <Activity className="w-6 h-6 text-orange-400" />
                                    <div>
                                        <div className="text-white font-bold">Security Drift</div>
                                        <div className="text-sm text-slate-300">Jailbreaks that worked 3 months ago suddenly work again.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-3xl blur-2xl" />
                            <div className="bg-[#020617] border border-white/10 rounded-3xl p-8 relative z-10">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase mb-6">Who This Is For</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: 'CTOs & VPEs', desc: 'Need to ship faster without being the reason for a PR disaster.' },
                                        { title: 'Product Leaders', desc: 'Need to prove reliability to enterprise customers to close deals.' },
                                        { title: 'AI Engineering Teams', desc: 'Drowning in manual testing and "vibes-based" evaluation.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <CheckCircle className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                                            <div>
                                                <strong className="text-white block text-lg">{item.title}</strong>
                                                <span className="text-slate-300 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROCESS (LIFECYCLE) */}
            <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-serif text-white mb-6">The Cycle of Certainty</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We don't just run tests. We implement a continuous lifecycle of attack, defense, and verification.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {[
                            { step: '01', title: 'Assess', desc: 'Map failure surface, API contracts, and user intent.' },
                            { step: '02', title: 'Attack', desc: 'Red-team usage patterns, injections, and edge cases.' },
                            { step: '03', title: 'Verify', desc: 'Assert deterministic outcomes against Golden Datasets.' },
                            { step: '04', title: 'Monitor', desc: 'Watch for drift and regression in live traffic.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 relative z-10 hover:border-purple-500/30 transition-colors group">
                                <div className="text-5xl font-bold text-white/10 mb-6 group-hover:text-purple-500/20 transition-colors">{s.step}</div>
                                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DELIVERABLES & OUTCOMES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1121] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* LEFT: Deliverables */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase mb-8">What We Deliver</h3>
                            <ul className="space-y-8">
                                <li className="flex gap-5 items-start">
                                    <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400 shrink-0"><Terminal className="w-6 h-6" /></div>
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Executable Regression Suites</strong>
                                        <span className="text-slate-300 text-sm leading-relaxed">
                                            Python/TypeScript test suites that live in your repo. Run `pytest` and know if your model is broken.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400 shrink-0"><GitBranch className="w-6 h-6" /></div>
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Blocking CI/CD Gates</strong>
                                        <span className="text-slate-300 text-sm leading-relaxed">
                                            Hard quality gates in GitHub/GitLab. If the rouge score drops or latency spikes, the merge is blocked.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400 shrink-0"><Shield className="w-6 h-6" /></div>
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Golden Evaluation Datasets</strong>
                                        <span className="text-slate-300 text-sm leading-relaxed">
                                            Curated, adversarial datasets specific to your domain to benchmark performance over time.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT: Boundaries */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-3xl">
                                <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                    <XCircle className="w-6 h-6 text-red-500" />
                                    What We DO NOT Do
                                </h3>
                                <div className="space-y-6 text-slate-300">
                                    <p>
                                        <strong>We are not a "Body Shop".</strong><br />
                                        We do not sell hours of manual testing. We build permanent automation assets.
                                    </p>
                                    <p>
                                        <strong>We are not "Prompt Engineers".</strong><br />
                                        We don't just tweak prompts until they work once. We build systems that work consistently.
                                    </p>
                                    <p>
                                        <strong>We do not replace your Engineers.</strong><br />
                                        We accelerate them by removing the fear of breaking things.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 text-center border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 font-serif leading-tight">
                        Predictability is a <br /> Competitive Advantage.
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Stop guessing if your next deployment will embarrass you. <br /> Ship with the evidence to prove it works.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact">
                            <MagneticButton className="bg-purple-600 text-white font-bold px-10 py-5 rounded-full hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] transition-all text-lg">
                                Talk to an AI Quality Engineer
                            </MagneticButton>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
