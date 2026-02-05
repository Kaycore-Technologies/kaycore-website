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
import { MagneticButton } from '@/components/ui';
import { ArrowRight, CheckCircle, Shield, Target, FileText, Clock, AlertTriangle } from 'lucide-react';
import { services } from '@/components/company-data';

export default function ServicesContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. INTRO / HERO SECTION */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
                            AI Quality Engineering Services
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                            Ensure your AI systems are <span className="text-white font-medium">Reliable</span>, <span className="text-white font-medium">Safe</span>, and <span className="text-white font-medium">Production-Ready</span>.
                            We move beyond functional testing to validate behavior, safety, and regulatory compliance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. SERVICE CATALOG */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-24">
                {services.map((service, idx) => (
                    <ScrollReveal key={service.id} className="relative">
                        {/* Connecting Line (except for last item) */}
                        {idx !== services.length - 1 && (
                            <div className="absolute left-8 top-full h-24 w-px bg-gradient-to-b from-brand-accent/50 to-transparent hidden lg:block" />
                        )}

                        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-accent/30 transition-all duration-500 shadow-xl group">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                                {/* Service Header & Image */}
                                <div className="lg:col-span-5 bg-black/20 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 transition-opacity">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                                            <span className="font-bold text-lg">0{idx + 1}</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-4 font-serif">{service.title}</h2>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            {service.description}
                                        </p>

                                        {/* Engagement Model */}
                                        <div className="bg-brand-accent/10 rounded-lg p-4 border border-brand-accent/20 inline-block">
                                            <div className="flex items-center gap-2 text-brand-accent font-semibold text-sm uppercase tracking-wide mb-1">
                                                <Clock className="w-4 h-4" /> Engagement Model
                                            </div>
                                            <div className="text-white font-medium">
                                                {(service as any).engagementModel}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="lg:col-span-7 p-8 sm:p-12 bg-[#0B1121]/50">
                                    <div className="space-y-10">

                                        {/* Who it's for & Problem */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                                                    <Target className="w-5 h-5 text-sky-400" />
                                                    Who it&apos;s for
                                                </h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {(service as any).targetAudience}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                                    The Problem
                                                </h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {(service as any).problemSolved}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10" />

                                        {/* Testing Scope */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                                                <Shield className="w-5 h-5 text-brand-accent" />
                                                What We Test (Scope)
                                            </h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {(service as any).testingScope?.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Deliverables */}
                                        <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                            <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                                                <FileText className="w-5 h-5 text-purple-400" />
                                                Key Deliverables
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {(service as any).deliverables?.map((item: string, i: number) => (
                                                    <span key={i} className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="mt-10 pt-8 border-t border-white/10 flex justify-end">
                                        <Link href={(service as any).slug ? `/services/${(service as any).slug}` : '/contact'}>
                                            <MagneticButton className="bg-white text-[#020617] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 text-sm">
                                                {(service as any).slug ? 'View Service Details' : 'Talk to an AI Quality Expert'} <ArrowRight className="w-4 h-4" />
                                            </MagneticButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* 3. CTA */}
            <section className="py-20 border-t border-white/10 bg-[#020617] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Not sure where to start?</h2>
                    <p className="text-slate-400 mb-8">
                        Most teams start with a <strong>Risk Readiness Audit</strong> to establish a baseline for their AI Quality maturity.
                    </p>
                    <Link href="/contact">
                        <MagneticButton className="bg-brand-accent text-white font-bold px-10 py-5 rounded-full hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all">
                            Talk to an AI Quality Expert
                        </MagneticButton>
                    </Link>
                </div>
            </section>

        </div>
    );
}
