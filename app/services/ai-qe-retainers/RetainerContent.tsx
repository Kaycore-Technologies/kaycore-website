'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, AnimatedItem } from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import { Activity, Shield, Users, Clock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function RetainerContent({ service }: { service: any }) {
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
                            Your External <br /> <span className="text-brand-accent">AI Safety Department</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                            Don&apos;t wait for a user incident. We provide continuous red-teaming, drift detection, and compliance oversight as a monthly service.
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

            {/* CONTINUOUS LOOP */}
            <section className="py-32 px-4 border-t border-white/5 bg-[#020617]">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Challenge</h2>
                                <h3 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-6">
                                    Models Decay. <br /> Risks Evolve.
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    An AI model is not like code; it does not stay fixed. Updates to the underlying foundation model (e.g., GPT-4), shifts in user behavior, or new jailbreak techniques can break your safety guardrails overnight.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Foundation Model Updates (Drift)',
                                        'New Jailbreak Techniques',
                                        'Changing Regulations (EU AI Act)'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-300">
                                            <AlertTriangle className="w-5 h-5 text-red-400" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                {/* Abstract Visualization of Loop */}
                                <div className="aspect-square bg-white/5 rounded-full border border-white/10 relative animate-[spin_10s_linear_infinite]">
                                    <div className="absolute inset-4 border border-brand-accent/30 rounded-full border-dashed" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-accent/5 blur-3xl rounded-full" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <Activity className="w-16 h-16 text-brand-accent mx-auto mb-4" />
                                        <div className="text-white font-bold text-xl">Continuous<br />Validation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* DELIVERABLES GRID */}
            <section className="py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Included in Retainer</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white">Monthly Deliverables</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Red-Teaming Sprints',
                                desc: 'Monthly targeted attacks to test new features against injection and bias.'
                            },
                            {
                                icon: Clock,
                                title: '24/7 Incident Response',
                                desc: 'Priority access to our engineers if your model behaves unexpectedly in production.'
                            },
                            {
                                icon: Users,
                                title: 'Board Reporting',
                                desc: 'Executive-level headers on risk posture, drift metrics, and ROI of quality.'
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-accent/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all group">
                                <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
