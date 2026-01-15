'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Construction, Sparkles } from 'lucide-react';

interface ComingSoonProps {
    title: string;
    subtitle: string;
    description: string;
}

export default function ComingSoonDemo({ title, subtitle, description }: ComingSoonProps) {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center relative overflow-hidden text-white selection:bg-brand-accent/30">

            {/* Neural Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            {/* Navigation - Fixed relative to viewport */}
            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative"
                >
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-brand-accent/20 rounded-full animate-ping" />
                        <Construction className="w-10 h-10 text-brand-accent" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
                        <Sparkles className="w-3 h-3" />
                        In Development
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-400 font-light mb-8">
                        {subtitle}
                    </p>
                    <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
                        Our engineers are currently fine-tuning this experiment. {description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
