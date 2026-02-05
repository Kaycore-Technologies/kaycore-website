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
    Users
} from 'lucide-react';

export default function AuditContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
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
                            Entry-Level Engagement
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-white mb-8 leading-tight">
                            Is Your AI Ready for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-accent">Real World?</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                            A comprehensive, independent assessment of your AI systems. We identify "silent" failure modes, security gaps, and compliance risks <span className="text-white font-medium">before</span> you deploy.
                        </p>
                        <Link href="/contact">
                            <MagneticButton className="bg-brand-accent text-white font-bold px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all text-lg">
                                Talk to an AI Quality Expert
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE PROBLEM (WHEN TO AUDIT) */}
            <section className="py-32 bg-[#0B1121] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">Triggers</h2>
                                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                                    When Should You Run This Audit?
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    Most teams call us when they move from "cool demo" to "production deployment." The stakes change when real users (and real money) are involved.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Pre-Launch Validation (Go/No-Go Decision)',
                                        'Investor Due Diligence Preparation',
                                        'EU AI Act / ISO 42001 Compliance Check',
                                        'After a "Near Miss" or Security Incident'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center text-slate-300">
                                            <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                    <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
                                    <h4 className="font-bold text-white mb-2">Silent Failures</h4>
                                    <p className="text-xs text-slate-400">Models degrading without throwing errors.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center translate-y-8">
                                    <Users className="w-10 h-10 text-brand-accent mb-4" />
                                    <h4 className="font-bold text-white mb-2">Bias & Fairness</h4>
                                    <p className="text-xs text-slate-400">Discriminatory outputs affecting specific groups.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                    <Search className="w-10 h-10 text-purple-400 mb-4" />
                                    <h4 className="font-bold text-white mb-2">Data Leakage</h4>
                                    <p className="text-xs text-slate-400">PII or trade secrets appearing in outputs.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center translate-y-8">
                                    <FileCheck className="w-10 h-10 text-green-400 mb-4" />
                                    <h4 className="font-bold text-white mb-2">Regulatory Gaps</h4>
                                    <p className="text-xs text-slate-400">Missing documentation for compliance.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. ENGAGEMENT MODEL (2 WEEKS) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Process</h2>
                        <h3 className="text-3xl sm:text-5xl font-bold font-serif text-white">
                            2-Week Fixed Engagement
                        </h3>
                        <p className="text-slate-400 mt-4">Low friction, high impact. We get in, diagnose, and give you the roadmap.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute bg-white/10 h-1 w-full top-12 left-0 hidden md:block" />

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {[
                                {
                                    step: 'Week 1',
                                    title: 'Discovery & Attack',
                                    items: ['Architecture Review', 'Initial Red-Teaming', 'Staff Interviews']
                                },
                                {
                                    step: 'Week 2',
                                    title: 'Analysis & Scoring',
                                    items: ['Risk Grading', 'Compliance Mapping', 'Report Generation']
                                },
                                {
                                    step: 'Day 14',
                                    title: 'Executive Briefing',
                                    items: ['Stakeholder Presentation', 'Go/No-Go Recommendation', 'Remediation Roadmap']
                                },
                            ].map((phase, idx) => (
                                <AnimatedItem key={idx}>
                                    <div className="bg-[#020617] border border-white/10 p-8 rounded-3xl h-full shadow-xl">
                                        <div className="w-24 h-24 bg-brand-dark border-4 border-[#020617] rounded-full flex items-center justify-center text-brand-accent font-bold text-xl mb-6 mx-auto md:mx-0 relative z-20 shadow-lg">
                                            {phase.step}
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-4 text-center md:text-left">{phase.title}</h4>
                                        <ul className="space-y-3">
                                            {phase.items.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-slate-400 text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* 4. DELIVERABLES */}
            <section className="py-24 bg-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <h3 className="text-3xl font-bold font-serif text-white mb-12 text-center">What You Get</h3>
                        <div className="bg-[#0B1121] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                                    <div className="bg-brand-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                                        <FileCheck className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4">The Audit Report</h4>
                                    <p className="text-slate-400 mb-6">
                                        A dense, actionable PDF containing your Risk Severity Matrix, Compliance Gaps, and detailed technical findings from our red-teaming sessions.
                                    </p>
                                    <span className="text-xs font-mono text-slate-500 bg-black/30 p-2 rounded">
                                        FINAL_AUDIT_V1.pdf (45 pages)
                                    </span>
                                </div>
                                <div className="p-10 bg-gradient-to-br from-brand-accent/5 to-transparent flex flex-col justify-center">
                                    <h4 className="text-lg font-bold text-white mb-6">Key Decision Outputs</h4>
                                    <ul className="space-y-6">
                                        <li className="flex gap-4">
                                            <div className="bg-green-500/20 p-2 rounded text-green-500 h-fit">
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <strong className="text-white block">Go / No-Go Decision</strong>
                                                <span className="text-sm text-slate-400">Clear recommendation on production readiness.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="bg-blue-500/20 p-2 rounded text-blue-500 h-fit">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <strong className="text-white block">Remediation Timeline</strong>
                                                <span className="text-sm text-slate-400">Estimated time to fix critical vulnerabilities.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Get Clarity in 2 Weeks</h2>
                    <p className="text-slate-400 mb-8">
                        Don't launch with crossed fingers. Launch with data.
                    </p>
                    <Link href="/contact">
                        <MagneticButton className="bg-white text-[#020617] font-bold px-10 py-5 rounded-full hover:shadow-lg transition-all border border-transparent hover:border-brand-accent/50">
                            Book Your Audit
                        </MagneticButton>
                    </Link>
                </div>
            </section>

        </div>
    );
}
