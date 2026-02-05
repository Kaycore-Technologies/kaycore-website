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
    CheckCircle,
    ShieldAlert,
    Activity,
    Lock,
    FileSearch,
    Stethoscope,
    Building2,
    Scale
} from 'lucide-react';

export default function HealthcareContent() {
    return (
        <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

            {/* 1. HERO SECTION - Clinical & Clean */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 font-semibold text-xs tracking-wide uppercase mb-6">
                            <ShieldAlert className="w-4 h-4" />
                            Zero-Fail Tolerance
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                            When AI Failure is <br /> <span className="text-blue-700">Not an Option</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-600 leading-relaxed font-light mb-8 max-w-xl">
                            In healthcare and finance, a "hallucination" isn't a glitch—it's a massive liability. We validate critical decision engines for safety, explainability, and regulatory compliance.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact">
                                <MagneticButton className="bg-blue-900 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-all shadow-xl">
                                    Talk to an AI Quality Expert
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-2 rounded-lg text-red-600 shrink-0">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Patient Safety Risk</h4>
                                        <p className="text-sm text-slate-500 mt-1">Diagnostic model flagging false negative on critical pathology.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-50 p-2 rounded-lg text-amber-600 shrink-0">
                                        <Scale className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Legal Liability</h4>
                                        <p className="text-sm text-slate-500 mt-1">Credit engine denying loans based on protected class attributes (Bias).</p>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 px-3 py-2 rounded-lg w-fit">
                                        <CheckCircle className="w-4 h-4" />
                                        Kaycore Validation Layer Active
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE BLACK BOX PROBLEM (Explainability) */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">The Challenge</h2>
                            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6">
                                The Black Box Problem
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Regulators (and doctors) don't trust black boxes. If your AI cannot explain <strong>why</strong> it made a decision, it cannot be deployed in a high-stakes environment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FileSearch,
                                    title: 'Explainability (XAI)',
                                    desc: 'We implement SHAP/LIME values and chain-of-thought analysis to make model reasoning transparent.'
                                },
                                {
                                    icon: Lock,
                                    title: 'Audit Trails',
                                    desc: 'Every inference is logged, versioned, and immutable. Full traceability from input to decision.'
                                },
                                {
                                    icon: ShieldAlert,
                                    title: 'Human Oversight',
                                    desc: 'Designing "Human-in-the-Loop" workflows for low-confidence predictions.'
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-700">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. INDUSTRIES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6">
                                Sectors Where Trust is Everything
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                We specialize in industries where an error means more than just a frustrated user.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-teal-50 p-3 rounded-xl text-teal-700 h-fit">
                                        <Stethoscope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">HealthTech & Clinical CDSS</h4>
                                        <p className="text-slate-500 text-sm mt-1">Validating diagnostic assistants, patient triage bots, and radiology checkers for FDA/HIPAA compliance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-indigo-50 p-3 rounded-xl text-indigo-700 h-fit">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Insurance & FinTech</h4>
                                        <p className="text-slate-500 text-sm mt-1">Ensuring automated claims processing and credit underwriting models are free from protected-class bias.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] w-full bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">
                            {/* Abstract Visualization of Compliance */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[80%] h-[80%] bg-white shadow-2xl rounded-xl p-8 space-y-4">
                                    <div className="h-4 w-1/3 bg-slate-100 rounded animate-pulse" />
                                    <div className="h-2 w-full bg-slate-100 rounded animate-pulse" />
                                    <div className="h-2 w-full bg-slate-100 rounded animate-pulse" />
                                    <div className="h-2 w-2/3 bg-slate-100 rounded animate-pulse" />

                                    <div className="mt-8 pt-8 border-t border-slate-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-semibold text-slate-900">Compliance Score</span>
                                            <span className="text-sm font-bold text-green-600">99.8% PASS</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                            <div className="h-full w-[99.8%] bg-green-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 bg-blue-900 text-center text-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 font-serif">Responsible Innovation Starts Here</h2>
                    <p className="text-blue-100 mb-10 text-lg">
                        Don't let compliance fears stall your roadmap. We build the safety layer so you can build the future.
                    </p>
                    <Link href="/contact">
                        <MagneticButton className="bg-white text-blue-900 font-bold px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all">
                            Speak with a Lead Consultant
                        </MagneticButton>
                    </Link>
                </div>
            </section>

        </div>
    );
}
