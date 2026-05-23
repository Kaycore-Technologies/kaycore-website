'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, AnimatedItem } from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import { Activity, Shield, Users, Clock, AlertTriangle, CheckCircle, ArrowRight, XCircle, Search } from 'lucide-react';
import Image from 'next/image';

export default function RetainerContent({ service }: { service: any }) {
    if (!service) return null;

    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white relative">

            {/* 1. HERO */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark" />
                </div>

                <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-accent mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            ACTIVE_MONITORING
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight">
                            Production AI drifts. <br /> <span className="text-brand-accent">We catch it first.</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                            Don&apos;t wait for a user incident. We provide continuous red-teaming, drift detection, and regression management as a monthly service.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact">
                                <MagneticButton className="bg-white text-[#020617] font-bold px-8 py-4 rounded-full hover:shadow-lg transition-all">
                                    Talk to an AI Quality Expert
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. WHO & DELIVERABLES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1121] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* LEFT: Who it's for */}
                    <div>
                        <h3 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-6">Who This Is For</h3>
                        <h2 className="text-3xl font-bold text-white mb-6">Post-Launch Enterprise</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            You have AI in production. You know foundation models update silently (drift). You need an external "eye in the sky" to ensure quality doesn't degrade over time.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Companies without a dedicated AI Quality team',
                                'Enterprise apps requiring ongoing compliance evidence',
                                'Teams worried about OpenAI/Anthropic model updates breaking prompt variance'
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Deliverables */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-6">What We Deliver</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <div className="bg-slate-800 p-2 rounded-lg text-white shrink-0"><Shield className="w-5 h-5" /></div>
                                <div>
                                    <strong className="text-white block text-lg">Monthly Red-Team Sprints</strong>
                                    <span className="text-slate-300 text-sm">We test your model against new jailbreaks (e.g., "DAN 12.0") every month.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="bg-slate-800 p-2 rounded-lg text-white shrink-0"><Activity className="w-5 h-5" /></div>
                                <div>
                                    <strong className="text-white block text-lg">Drift Monitoring</strong>
                                    <span className="text-slate-300 text-sm">Alerts if your model becomes lazy, toxic, or verbose after an API update.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="bg-slate-800 p-2 rounded-lg text-white shrink-0"><Users className="w-5 h-5" /></div>
                                <div>
                                    <strong className="text-white block text-lg">Executive QBRs</strong>
                                    <span className="text-slate-300 text-sm">Quarterly Business Reviews proving the ROI of quality to your board.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. BOUNDARIES (WHAT WE DON'T DO) */}
            <section className="py-16 px-4 bg-brand-dark border-b border-white/5">
                <div className="max-w-4xl mx-auto bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                    <div className="bg-slate-700 p-4 rounded-full text-slate-400 shrink-0">
                        <XCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">What We DO NOT Do</h4>
                        <p className="text-slate-300">
                            We are not a Tier 1 Support Desk. We do not handle your customer support tickets 24/7. We are <span className="text-white font-bold">Tier 3 Engineering Support</span> for critical AI failures.
                        </p>
                    </div>
                </div>
            </section>


            {/* 4. PROCESS */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-serif text-white mb-6">Monthly Cadence</h2>
                        <div className="flex items-center justify-center gap-2 text-slate-400">
                            <Clock className="w-4 h-4" />
                            <span>Engagement: 6-12 Months</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        {[
                            { step: 'W1', title: 'Attack', desc: 'New vulnerability testing.' },
                            { step: 'W2', title: 'Patch', desc: 'Engineering fixes for failing tests.' },
                            { step: 'W3', title: 'Monitor', desc: 'Observe drift in production.' },
                            { step: 'W4', title: 'Report', desc: 'Monthly risk report delivery.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 relative z-10">
                                <div className="text-2xl font-bold text-brand-accent mb-4">{s.step}</div>
                                <h4 className="font-bold text-white mb-2">{s.title}</h4>
                                <p className="text-sm text-slate-300">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Secure Your AI's Future</h2>
                    <Link href="/contact">
                        <MagneticButton className="bg-white text-[#020617] font-bold px-10 py-5 rounded-full hover:shadow-lg transition-all border border-transparent hover:border-brand-accent/50">
                            Discuss Retainer Options
                        </MagneticButton>
                    </Link>
                </div>
            </section>
        </div>
    );
}
