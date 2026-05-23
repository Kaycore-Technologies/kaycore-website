'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, Sparkles, Calculator, Zap, Cpu, Code } from 'lucide-react';
import Link from 'next/link';

export default function TokenEstimatorContent() {
    const [prompt, setPrompt] = useState('');
    const [model, setModel] = useState('gpt-4');
    const [stats, setStats] = useState({ tokens: 0, cost: 0.00 });

    const models = [
        { id: 'gpt-4', name: 'GPT-4 Turbo', pricePer1k: 0.01 },
        { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', pricePer1k: 0.0005 },
        { id: 'claude-3', name: 'Claude 3 Opus', pricePer1k: 0.015 },
        { id: 'llama-3', name: 'Llama 3 70B', pricePer1k: 0.0007 },
    ];

    useEffect(() => {
        // Simple heuristic estimation: ~1.3 tokens per word, + special chars
        const wordCount = prompt.trim().split(/\s+/).filter(w => w.length > 0).length;
        const charCount = prompt.length;
        const estimatedTokens = Math.ceil(charCount / 4); // Rough approximation: 4 chars per token

        const selectedModel = models.find(m => m.id === model) || models[0];
        const estimatedCost = (estimatedTokens / 1000) * selectedModel.pricePer1k;

        setStats({
            tokens: prompt.length === 0 ? 0 : estimatedTokens,
            cost: prompt.length === 0 ? 0 : estimatedCost
        });
    }, [prompt, model]);

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-brand-accent/30 font-sans">
            {/* Header */}
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2670&auto=format&fit=crop"
                className="h-[40vh]"
                overlayOpacity={0.8}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 flex items-center justify-center gap-3">
                            <Cpu className="w-10 h-10 text-brand-accent" />
                            AI Token Estimator
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Calculate token usage and cost for your LLM prompts in real-time. This tool helps developers estimate API costs before deploying large-scale applications.
                        </p>
                    </motion.div>
                </div>
            </ParallaxSection>

            {/* Navigation */}
            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            {/* Main Interface */}
            <div className="max-w-6xl mx-auto px-4 py-12 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Input Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-8 space-y-6"
                    >
                        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-sky-400" />
                                    Prompt Input
                                </h2>
                                <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                                    {models.map(m => (
                                        <button
                                            key={m.id}
                                            onClick={() => setModel(m.id)}
                                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${model === m.id
                                                ? 'bg-brand-accent text-white shadow-lg'
                                                : 'text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            {m.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Paste your text here to estimate tokens..."
                                className="w-full h-96 bg-black/40 border border-white/10 rounded-xl p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-mono resize-none text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                                spellCheck={false}
                            />

                            <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-mono">
                                <span>Chars: {prompt.length}</span>
                                <span>Words: {prompt.trim().split(/\s+/).filter(w => w.length > 0).length}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="bg-gradient-to-br from-brand-accent/20 to-purple-500/10 rounded-2xl p-[1px]">
                            <div className="bg-[#0f172a]/95 backdrop-blur-xl rounded-[15px] p-6 h-full">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-brand-accent" />
                                    Real-time Analysis
                                </h3>

                                <div className="space-y-6">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-sm text-gray-400 mb-1">Estimated Tokens</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-mono font-bold text-white">
                                                {stats.tokens.toLocaleString()}
                                            </span>
                                            <span className="text-xs text-gray-500">tok</span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors" />
                                        <p className="text-sm text-gray-400 mb-1">Estimated Cost</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-mono font-bold text-sky-400">
                                                ${stats.cost.toFixed(6)}
                                            </span>
                                            <span className="text-xs text-gray-500">USD</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Model Specs</h4>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Context Window</span>
                                                <span className="text-white">128k</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Training Data</span>
                                                <span className="text-white">Sep 2023</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Pricing / 1k</span>
                                                <span className="text-brand-accent">${models.find(m => m.id === model)?.pricePer1k}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 bg-brand-accent hover:bg-sky-400 text-[#020617] font-bold rounded-xl transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 group">
                                        <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        Optimize Prompt
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0f172a]/60 border border-white/5 rounded-2xl p-6">
                            <h4 className="text-sm font-semibold mb-2 text-gray-300">How this works</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                This estimator uses advanced heuristic tokenization approximating the BPE (Byte Pair Encoding) algorithm used by modern LLMs. Actual token counts may vary slightly by provider API.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
