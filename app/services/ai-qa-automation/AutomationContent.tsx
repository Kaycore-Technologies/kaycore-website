'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import { Zap, Terminal, GitBranch, Server, Settings, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AutomationContent({ service }: { service: any }) {
    if (!service) return null;

    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white relative">

            {/* HERO */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80" />
                </div>

                <div className="max-w-4xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-6 backdrop-blur-md">
                            <Terminal className="w-3 h-3" />
                            CI/CD_INTEGRATION
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight">
                            Automated Quality <br /> <span className="text-purple-400">Pipelines</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl">
                            Move from "vibe checking" in notebooks to rigorous regression testing in CI. Catch hallucinations before merge.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact">
                                <MagneticButton className="bg-purple-600 text-white font-bold px-8 py-4 rounded-full hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/20">
                                    Talk to an AI Quality Expert
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DIAGRAM SECTION */}
            <section className="py-32 px-4 border-t border-white/5 bg-[#0B1121]">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-serif text-white mb-6">The Testing Stack</h2>
                            <p className="text-slate-400">We integrate directly into your GitHub/GitLab workflows.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative">
                            {/* Step 1 */}
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center relative z-10">
                                <div className="mx-auto bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <GitBranch className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-white">1. Commit</h4>
                                <p className="text-xs text-slate-400 mt-2">Dev pushes new prompt.</p>
                            </div>

                            {/* Hidden Arrow for Mobile */}
                            <div className="md:hidden text-center text-slate-600">↓</div>

                            {/* Step 2 */}
                            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30 text-center relative z-10 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                                <div className="mx-auto bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-white">2. Auto-Eval</h4>
                                <p className="text-xs text-purple-200 mt-2">Kaycore runs 500+ test cases.</p>
                            </div>

                            {/* Hidden Arrow for Mobile */}
                            <div className="md:hidden text-center text-slate-600">↓</div>

                            {/* Step 3 */}
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center relative z-10">
                                <div className="mx-auto bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <Server className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-white">3. Gate</h4>
                                <p className="text-xs text-slate-400 mt-2">Fail build if accuracy &lt; 95%.</p>
                            </div>

                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-0" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
