'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
} from '@/components/animations';
import { MagneticButton, ParallaxSection } from '@/components/ui';
import {
    ArrowRight,
    Target,
    Users,
    ShieldCheck,
    Zap,
    Award,
    Briefcase
} from 'lucide-react';

export default function AboutContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-white mb-8 leading-tight">
                            Built for the <span className="text-brand-accent">High Stakes</span>.
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-3xl mx-auto">
                            Kaycore was founded on a simple premise: <span className="text-white font-medium">AI is too dangerous to be built by generalists.</span> We are a specialized engineering firm, not a staffing agency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. WHY WE EXIST (THE GAP) */}
            <section className="py-32 bg-[#0B1121] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase mb-4">The Gap</h2>
                                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                                    Why We Exist
                                </h3>
                                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        The market is flooded with agencies treating LLMs like simple APIs. That works for toy apps, but not for critical systems managing financial data or patient health.
                                    </p>
                                    <p>
                                        We exist to close the <strong>Confidence Gap</strong>. We bring the rigor of aerospace engineering to the chaos of generative AI.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full" />
                                <div className="relative z-10 bg-white/5 border border-white/10 p-8 rounded-2xl">
                                    <h4 className="text-white font-bold text-xl mb-6">The Kaycore Standard</h4>
                                    <ul className="space-y-4">
                                        {[
                                            'We do not maximize hours; we maximize reliability.',
                                            'We do not "staff" projects; we lead them.',
                                            'We treat "95% accuracy" as a failure.',
                                            'We build systems we would trust with our own money.'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start text-slate-300">
                                                <ShieldCheck className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. OUR STANCE (NOT A BODY SHOP) */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="inline-block p-4 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
                            <Users className="w-6 h-6 text-red-500" />
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-8">
                            We Are Not A "Body Shop"
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed mb-12">
                            If you are looking for "5 React devs at $XX/hour" to augment your staff, <span className="text-white font-bold">we are not the right fit</span>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 opacity-50">
                                <h4 className="font-bold text-slate-500 mb-2 uppercase tracking-wide">Staff Augmentation</h4>
                                <ul className="space-y-3 text-slate-600">
                                    <li>• Selling hours, not outcomes</li>
                                    <li>• "I did what the ticket said"</li>
                                    <li>• No skin in the game</li>
                                    <li>• High turnover, low context</li>
                                </ul>
                            </div>
                            <div className="bg-brand-accent/10 p-8 rounded-2xl border border-brand-accent/30">
                                <h4 className="font-bold text-brand-accent mb-2 uppercase tracking-wide">Kaycore Partnership</h4>
                                <ul className="space-y-3 text-white">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-accent mt-1" /> Owning the risk outcome</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-accent mt-1" /> "This ticket is unsafe, here's why"</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-accent mt-1" /> Reputation tied to success</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-accent mt-1" /> Deep, persistent domain knowledge</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. FOUNDER LED */}
            <section className="py-32 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            {/* Founder Image */}
                            <div className="lg:col-span-5 relative h-[500px] rounded-2xl overflow-hidden bg-slate-800">
                                <Image
                                    src="/assets/images/about/founder-kulish.jpg"
                                    alt="Kulish Kulshrestha - Founder & Lead Architect"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-white font-bold text-xl mb-1">Kulish Kulshrestha</h4>
                                    <p className="text-slate-400">Founder & Lead Architect</p>
                                </div>
                            </div>
                            <div className="lg:col-span-7">
                                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Leadership</h2>
                                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                                    Founder-Led Accountability
                                </h3>

                                {/* Credibility Strip */}
                                <ul className="space-y-2 text-slate-300 mb-6">
                                    <li>10+ years building and validating production-grade systems</li>
                                    <li>Specialized in AI reliability, risk analysis, and failure modes</li>
                                    <li>Directly accountable for system risk, reliability, and production readiness</li>
                                </ul>

                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    At Kaycore, you are not handed off to a junior account manager. Our leadership is technically active and deeply involved in architectural decisions.
                                </p>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    When we say "we will fix it", it is not a ticket in a backlog. It is direct accountability from the engineers who design and validate the system.
                                </p>

                                {/* Quote */}
                                <p className="text-slate-400 italic border-l-2 border-brand-accent/50 pl-4 mb-8">
                                    "I don't ask whether an AI works. I ask how it fails—and whether we detect it in time."
                                </p>

                                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
                                    <div>
                                        <div className="text-2xl font-bold text-white mb-1">100+</div>
                                        <div className="text-sm text-slate-500">Model Evaluations & Validations</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white mb-1">Clean Record</div>
                                        <div className="text-sm text-slate-500">No Reported Regulatory Actions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready for a Real Partner?</h2>
                    <p className="text-slate-400 mb-8">
                        Let's build something that survives the real world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact">
                            <MagneticButton className="bg-white text-[#020617] font-bold px-10 py-5 rounded-full hover:shadow-lg transition-all">
                                Talk to an AI Quality Expert
                            </MagneticButton>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    )
}
