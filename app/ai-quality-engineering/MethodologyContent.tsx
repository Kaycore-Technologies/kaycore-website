'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    StaggerContainer,
    AnimatedItem,
} from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import {
    Target,
    Search,
    Zap,
    Lock,
    Terminal,
    GitBranch,
    Shield,
    CheckCircle,
    XCircle,
    Server,
    TrendingUp
} from 'lucide-react';

export default function MethodologyContent() {
    return (
        <div className="bg-brand-dark text-slate-50 font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[100px] rounded-full" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                </div>

                <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-xs font-mono text-brand-accent mb-8 backdrop-blur-md">
                            <Server className="w-3 h-3" />
                            PRODUCTION_READY_AI
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-white mb-10 leading-[1.1]">
                            Certainty is <br /> <span className="text-brand-accent">Engineered</span>, Not Accidental.
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                            We build the automated testing infrastructure that transforms probabilistic AI into deterministic software.
                            Predictable. Observable. Regression-proof.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <Link href="/contact">
                                <MagneticButton className="bg-brand-accent text-white px-10 py-5 font-bold text-lg rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]">
                                    Talk to an AI Quality Engineer
                                </MagneticButton>
                            </Link>
                            <span className="text-slate-500 text-sm font-mono tracking-wide">Validate production readiness in 15 minutes.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. ENGINEERING GAP */}
            <section className="py-32 bg-[#0B1121] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left: The Problem */}
                        <div>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">The Engineering Gap</h3>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                                Probabilistic Software <br /> Requires Deterministic Controls.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Traditional software is binary: it works, or it breaks. AI is probabilistic: it works <i>mostly</i>. That "mostly" is where enterprise capabilities fail.
                                <br /><br />
                                Manual "vibe checks" cannot scale to production traffic. Without rigorous, automated evaluation metrics, your AI product is a gamble. We replace intuition with statistical evidence.
                            </p>

                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-brand-accent" />
                                    Risk-First Thinking
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We do not test for the "Happy Path." We engineer for the critical edge cases (hallucinations, bias, and refusal failures) that drive customer churn.
                                </p>
                            </div>
                        </div>

                        {/* Right: Who This Is For */}
                        <div className="space-y-8">
                            {/* FOR */}
                            <div className="bg-[#020617] border border-brand-accent/20 rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
                                <h3 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-6 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" /> Who This Is For
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Series A+ Startups', desc: 'Who need proven reliability to close enterprise contracts.' },
                                        { title: 'Technical Founders', desc: 'Who know manual testing does not scale.' },
                                        { title: 'Product Leaders', desc: 'Who need rigorous evidence to ship features.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                                            <div>
                                                <strong className="text-white block">{item.title}</strong>
                                                <span className="text-slate-400 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* NOT FOR */}
                            <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-red-400 uppercase mb-6 flex items-center gap-2">
                                    <XCircle className="w-4 h-4" /> Who This Is Not For
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start icon-list-item text-slate-400 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                        <span><strong>Early Experimenters</strong>: If you have no production use-case, this is premature.</span>
                                    </li>
                                    <li className="flex gap-4 items-start icon-list-item text-slate-400 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                        <span><strong>Prompt Engineering Only</strong>: We build infrastructure, not just prompts.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. AI BEHAVIOR LIFECYCLE */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Process</h2>
                        <h3 className="text-3xl sm:text-5xl font-bold font-serif text-white">
                            The AI Behavior Lifecycle
                        </h3>
                    </div>

                    <div className="relative">
                        {/* Nano-Banana Lifecycle Diagram */}
                        <div className="relative w-full h-32 sm:h-48 mb-12 opacity-90">
                            <Image
                                src="/assets/images/generated/ai_qe_lifecycle_nano.png"
                                alt="AI Quality Engineering Lifecycle: Assess, Attack, Verify, Monitor"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                {
                                    title: '1. Assess',
                                    desc: 'Map the risk surface. Identify where model failure results in financial loss.'
                                },
                                {
                                    title: '2. Attack',
                                    desc: 'Adversarial Stress Testing. Systematically probe for hallucinations and security gaps.'
                                },
                                {
                                    title: '3. Verify',
                                    desc: 'Golden Datasets. Measure accuracy against ground truth to prevent regression.'
                                },
                                {
                                    title: '4. Monitor',
                                    desc: 'Production Health. Detect drift, latency spikes, and degradation in real-time.'
                                },
                            ].map((step, idx) => (
                                <AnimatedItem key={idx}>
                                    <div className="bg-[#0B1121] p-8 rounded-2xl border border-white/10 text-center relative h-full flex flex-col items-center hover:border-brand-accent/50 transition-colors group">
                                        <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* 4. ENGINEERING ASSETS */}
            <section className="py-32 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* LEFT: Deliverables */}
                        <div className="bg-[#0B1121] p-8 rounded-3xl border border-white/10 h-full">
                            <h3 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-8">Engineering Assets</h3>
                            <ul className="space-y-8">
                                <li className="flex gap-5 items-start">
                                    <div className="bg-brand-accent/20 p-3 rounded-xl text-brand-accent shrink-0"><Terminal className="w-6 h-6" /></div>
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Executable Regression Suites</strong>
                                        <span className="text-slate-400 text-sm leading-relaxed">
                                            Python/TypeScript test suites living in your repo. Automated defense against model regression.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="bg-brand-accent/20 p-3 rounded-xl text-brand-accent shrink-0"><GitBranch className="w-6 h-6" /></div>
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Blocking CI/CD Gates</strong>
                                        <span className="text-slate-400 text-sm leading-relaxed">
                                            Hard quality gates in GitHub/GitLab. Performant code merges; underperforming models do not.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="bg-brand-accent/20 p-3 rounded-xl text-brand-accent shrink-0"><Shield className="w-6 h-6" /></div>
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Golden Evaluation Datasets</strong>
                                        <span className="text-slate-400 text-sm leading-relaxed">
                                            Curated, adversarial datasets specific to your domain. Benchmarks for accuracy and safety.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT: Business Impact */}
                        <div className="flex flex-col justify-center h-full space-y-6">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                                <h3 className="text-xl font-bold text-white mb-4">Why This Matters</h3>
                                <p className="text-slate-300 mb-6">
                                    Reliability is the difference between a demo and a product. We turn AI from a "black box" into a manageable software component.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Reduce churn from poor responses</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Ship features faster with confidence</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Protect brand reputation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-32 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Stop guessing. Start measuring.</h2>
                    <p className="text-slate-300 mb-10 text-lg">
                        Deploy your AI with mathematical proof, not just hope.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <MagneticButton className="bg-brand-accent text-white px-10 py-5 font-bold text-lg rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]">
                                Talk to an AI Quality Engineer
                            </MagneticButton>
                        </Link>
                        <span className="text-slate-500 text-sm font-mono tracking-wide">Get evidence, not opinions.</span>
                    </div>
                </div>
            </section>

        </div>
    );
}
