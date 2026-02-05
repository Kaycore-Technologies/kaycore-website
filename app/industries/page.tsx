'use client';

import { industries } from '@/components/company-data';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui';
import { ScrollReveal } from '@/components/animations';

export default function IndustriesPage() {
    return (
        <div className="bg-brand-dark min-h-screen text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-white mb-8 leading-tight">
                            Where Failure is <span className="text-brand-accent">Unacceptable</span>.
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                            We specialize in industries where a single AI error can mean regulatory action, patient harm, or catastrophic financial loss. If you're shipping a toy, we're not for you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. INDUSTRY CARDS */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#020617]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((ind, idx) => (
                            <ScrollReveal key={idx}>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full hover:border-brand-accent/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all">
                                    {/* Image */}
                                    <div className="mb-8 relative h-48 rounded-2xl overflow-hidden">
                                        <img src={ind.image} alt={ind.name} className="object-cover w-full h-full opacity-80" />
                                        <div className="absolute inset-0 bg-brand-dark/20" />
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold text-white mb-4">{ind.name}</h2>

                                    {/* Description */}
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        {ind.description}
                                    </p>

                                    {/* Compliance Indicator */}
                                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span>Sector-Specific Compliance</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-32 text-center border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-white mb-6">Don't see your industry?</h3>
                    <p className="text-slate-400 mb-8">
                        If your AI operates in a high-stakes environment, we should talk.
                    </p>
                    <Link href="/contact">
                        <MagneticButton className="bg-brand-accent text-white font-bold px-10 py-5 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)]">
                            Talk to an AI Quality Expert
                        </MagneticButton>
                    </Link>
                </div>
            </section>
        </div>
    );
}
