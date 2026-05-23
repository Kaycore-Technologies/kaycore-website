'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
    TextReveal,
} from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import {
    ArrowRight,
    CheckCircle,
    AlertTriangle,
    Shield,
    Clock,
    FileCheck,
    Search,
    Users,
    XCircle,
    FileText
} from 'lucide-react';

export default function AuditContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-wider uppercase text-xs mb-8">
                            <Shield className="w-4 h-4" />
                            RISK_ASSESSMENT
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-white mb-8 leading-tight">
                            Launch with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">Evidence</span>, Not Hope.
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                            Fixed-cost. 2 Weeks. Full architectural dissection to catch security gaps and reliability risks before you scale.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <MagneticButton className="bg-brand-accent text-white font-bold px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all text-lg">
                                    Request Readiness Review
                                </MagneticButton>
                            </Link>
                            <Link href="/services/ai-qa-automation">
                                <MagneticButton className="bg-white/5 text-white font-bold px-8 py-5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                                    Explore Automation
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
                        <h2 className="text-3xl font-bold text-white mb-6">CTOs & Founders Pre-Launch</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            You are about to move from prototype to production. You need to know if your system will survive real users and regulatory scrutiny.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Preparing for SOC2 or ISO 42001 certification',
                                'Needs independent verification for investors/board',
                                'Concerned about prompt injection or data leakage'
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Deliverables */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-6">What We Deliver</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <div className="bg-slate-800 p-2 rounded-lg text-white shrink-0"><FileText className="w-5 h-5" /></div>
                                <div>
                                    <strong className="text-white block text-lg">Risk Severity Report</strong>
                                    <span className="text-slate-300 text-sm">Detailed breakdown of failure modes (Silent, Safety, Security).</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="bg-slate-800 p-2 rounded-lg text-white shrink-0"><Shield className="w-5 h-5" /></div>
                                <div>
                                    <strong className="text-white block text-lg">Red-Teaming Logs</strong>
                                    <span className="text-slate-300 text-sm">Evidence of successful jailbreaks and injection attacks on your current model.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="bg-slate-800 p-2 rounded-lg text-white shrink-0"><CheckCircle className="w-5 h-5" /></div>
                                <div>
                                    <strong className="text-white block text-lg">Remediation Backlog</strong>
                                    <span className="text-slate-300 text-sm">Prioritized JIRA/Linear tickets to fix critical issues.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. BOUNDARIES (WHAT WE DON'T DO) */}
            <section className="py-16 px-4 bg-brand-dark border-b border-white/5">
                <div className="max-w-4xl mx-auto bg-blue-900/10 border border-blue-500/20 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                    <div className="bg-blue-500/20 p-4 rounded-full text-blue-400 shrink-0">
                        <XCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">What We DO NOT Do</h4>
                        <p className="text-slate-300">
                            We do not provide legal advice or issue government certifications (e.g., FDA approval). We provide the <span className="text-white font-bold">technical evidence</span> your legal team needs to sign off.
                        </p>
                    </div>
                </div>
            </section>


            {/* 4. PROCESS */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-serif text-white mb-6">Fixed 2-Week Sprint</h2>
                        <div className="flex items-center justify-center gap-2 text-slate-400">
                            <Clock className="w-4 h-4" />
                            <span>Duration: 10 Business Days</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            {
                                step: 'Week 1',
                                title: 'Attack Phase',
                                items: ['Architecture Review', 'Initial Red-Teaming', 'Vulnerability Scanning']
                            },
                            {
                                step: 'Week 2',
                                title: 'Analysis',
                                items: ['Risk Grading', 'Compliance Mapping', 'Remediation Roadmap']
                            },
                            {
                                step: 'Day 10',
                                title: 'Handover',
                                items: ['Executive Briefing', 'Go/No-Go Recommendation', 'Report Delivery']
                            },
                        ].map((phase, idx) => (
                            <div key={idx} className="bg-[#020617] border border-white/10 p-8 rounded-3xl h-full shadow-xl">
                                <div className="text-xl font-bold text-brand-accent mb-4">{phase.step}</div>
                                <h4 className="text-xl font-bold text-white mb-4">{phase.title}</h4>
                                <ul className="space-y-3">
                                    {phase.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-400 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Get Your Scorecard</h2>
                    <p className="text-slate-300 mb-8">
                        Know your risks before your users do.
                    </p>
                    <Link href="/contact">
                        <MagneticButton className="bg-white text-[#020617] font-bold px-10 py-5 rounded-full hover:shadow-lg transition-all border border-transparent hover:border-brand-accent/50">
                            Request Readiness Review
                        </MagneticButton>
                    </Link>
                </div>
            </section>

        </div>
    );
}
