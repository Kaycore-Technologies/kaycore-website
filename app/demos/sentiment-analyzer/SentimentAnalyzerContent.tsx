'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Activity, Terminal, ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

// Metadata removed for client component

interface AnalysisResult {
    sentiment: 'Positive' | 'Neutral' | 'Negative';
    confidence: number;
    keywords: string[];
    entities: string[];
    tone: string;
}

export default function SentimentAnalyzer() {
    const [text, setText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const analyzeText = () => {
        if (!text.trim()) return;

        setIsAnalyzing(true);
        setResult(null);

        // Simulate AI Latency
        setTimeout(() => {
            const lowerText = text.toLowerCase();
            let sentiment: 'Positive' | 'Neutral' | 'Negative' = 'Neutral';
            let confidence = 0.5 + Math.random() * 0.2;
            let tone = 'Objective';

            const positiveWords = ['great', 'awesome', 'excellent', 'good', 'happy', 'love', 'growth', 'innovative', 'efficient', 'seamless'];
            const negativeWords = ['bad', 'poor', 'terrible', 'slow', 'fail', 'error', 'hate', 'bug', 'crash', 'difficult'];

            const posCount = positiveWords.filter(w => lowerText.includes(w)).length;
            const negCount = negativeWords.filter(w => lowerText.includes(w)).length;

            if (posCount > negCount) {
                sentiment = 'Positive';
                confidence = 0.7 + (Math.min(posCount, 5) * 0.05);
                tone = 'Enthusiastic';
            } else if (negCount > posCount) {
                sentiment = 'Negative';
                confidence = 0.7 + (Math.min(negCount, 5) * 0.05);
                tone = 'Critical';
            }
            // Fake Entity Extraction with Stopword Filtering
            const stopWords = new Set(['The', 'A', 'An', 'This', 'That', 'These', 'Those', 'It', 'We', 'They', 'He', 'She', 'You', 'I', 'My', 'Your', 'Our', 'Their', 'His', 'Her', 'In', 'On', 'At', 'To', 'For', 'Of', 'With', 'By', 'From', 'But', 'And', 'Or', 'So', 'If', 'When', 'Where', 'Why', 'How', 'What', 'Who', 'Which', 'Is', 'Are', 'Was', 'Were', 'Be', 'Been', 'Has', 'Have', 'Had', 'Do', 'Does', 'Did', 'Can', 'Could', 'Will', 'Would', 'Shall', 'Should', 'May', 'Might', 'Must']);

            const rawEntities = text.match(/\b[A-Z][a-z]+\b/g) || [];
            const entities = rawEntities.filter(word => !stopWords.has(word));

            const keywords = text.split(' ')
                .map(w => w.replace(/[^\w]/g, ''))
                .filter(w => w.length > 5)
                .slice(0, 5);

            setResult({
                sentiment,
                confidence: Math.min(confidence, 0.99),
                keywords: Array.from(new Set(keywords)),
                entities: Array.from(new Set(entities)),
                tone
            });
            setIsAnalyzing(false);
        }, 1500);
    };

    const getSentimentColor = (s: string) => {
        switch (s) {
            case 'Positive': return 'text-emerald-400 border-emerald-500/50 bg-emerald-500/10 shadow-emerald-500/20';
            case 'Negative': return 'text-rose-400 border-rose-500/50 bg-rose-500/10 shadow-rose-500/20';
            default: return 'text-blue-400 border-blue-500/50 bg-blue-500/10 shadow-blue-500/20';
        }
    };

    return (
        <div className="min-h-screen bg-[#05050A] py-12 px-4 sm:px-6 lg:px-8 text-slate-200 font-sans selection:bg-violet-500/30 overflow-hidden relative">

            {/* Neural Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="h-12" /> {/* Spacer for removed link */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Input Section */}
                    <div className="space-y-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-xs font-medium mb-4"
                            >
                                <Sparkles className="w-3 h-3" />
                                <span>Neural Engine v3.0</span>
                            </motion.div>
                            <h1 className="text-4xl font-bold text-white mb-3">
                                Cognitive Sentiment
                            </h1>
                            <p className="text-slate-400 text-lg">Advanced NLP analysis detecting emotional tone, entities, and confidence metrics.</p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-slate-950 rounded-2xl">
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Enter text segment for analysis..."
                                    className="w-full h-64 bg-transparent border-none rounded-2xl p-6 text-lg focus:ring-0 resize-none outline-none text-white placeholder:text-slate-700"
                                />
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button
                                        onClick={() => setText("The database latency is unacceptable and causing critical failures in production.")}
                                        className="text-xs px-3 py-1 bg-slate-800/50 hover:bg-rose-500/20 hover:text-rose-300 border border-slate-700 hover:border-rose-500/50 rounded-lg transition-all"
                                    >
                                        Negative Sample
                                    </button>
                                    <button
                                        onClick={() => setText("This new architecture has dramatically improved our throughput and reliability!")}
                                        className="text-xs px-3 py-1 bg-slate-800/50 hover:bg-emerald-500/20 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/50 rounded-lg transition-all"
                                    >
                                        Positive Sample
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        <button
                            onClick={analyzeText}
                            disabled={isAnalyzing || !text.trim()}
                            className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            {isAnalyzing ? (
                                <>
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    Processing Neural Paths...
                                </>
                            ) : (
                                <>
                                    <Brain className="w-5 h-5" />
                                    Run Analysis
                                </>
                            )}
                        </button>
                    </div>

                    {/* Output Section */}
                    <div className="relative min-h-[500px]">
                        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

                            <AnimatePresence mode='wait'>
                                {!result && !isAnalyzing && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 p-8 text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700">
                                            <Terminal className="w-8 h-8 opacity-50" />
                                        </div>
                                        <p className="text-sm font-mono tracking-widest uppercase opacity-70">System Ready</p>
                                    </motion.div>
                                )}

                                {isAnalyzing && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center"
                                    >
                                        <div className="relative w-32 h-32 mb-8">
                                            <div className="absolute inset-0 border-r-2 border-violet-500 rounded-full animate-spin" />
                                            <div className="absolute inset-2 border-l-2 border-indigo-500 rounded-full animate-spin reverse" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Brain className="w-10 h-10 text-white animate-pulse" />
                                            </div>
                                        </div>
                                        <p className="font-mono text-violet-300 tracking-widest uppercase text-sm animate-pulse">Analyzing Patterns...</p>
                                    </motion.div>
                                )}

                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative z-10 p-8 h-full flex flex-col justify-between"
                                    >
                                        {/* Header Result */}
                                        <div className="text-center mb-8">
                                            <span className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-4 block">Classification</span>
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className={`inline-block px-8 py-3 rounded-2xl border backdrop-blur-md shadow-2xl ${getSentimentColor(result.sentiment)}`}
                                            >
                                                <span className="text-4xl font-bold tracking-tight text-white">{result.sentiment}</span>
                                            </motion.div>
                                        </div>

                                        {/* Metrics Grid */}
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                                <p className="text-slate-400 text-xs uppercase font-bold mb-1">Tone Analysis</p>
                                                <p className="text-xl text-white font-medium">{result.tone}</p>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                                <p className="text-slate-400 text-xs uppercase font-bold mb-1">Confidence</p>
                                                <div className="flex items-end gap-2">
                                                    <p className="text-xl text-white font-mono">{(result.confidence * 100).toFixed(1)}%</p>
                                                    <div className="h-1.5 w-16 bg-slate-700 rounded-full mb-1.5 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${result.confidence * 100}%` }}
                                                            className="h-full bg-violet-400"
                                                            transition={{ duration: 1 }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Entity Chips */}
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-slate-500 text-xs uppercase tracking-widest mb-3 font-bold">Detected Entities</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {result.entities.length > 0 ? result.entities.map((e, i) => (
                                                        <motion.span
                                                            key={e}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                                            className="px-3 py-1.5 bg-indigo-500/20 text-indigo-200 text-sm rounded-lg border border-indigo-500/30"
                                                        >
                                                            {e}
                                                        </motion.span>
                                                    )) : <span className="text-slate-600 italic text-sm">No entities extracted</span>}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-slate-500 text-xs uppercase tracking-widest mb-3 font-bold">Key Phrases</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {result.keywords.map((k, i) => (
                                                        <motion.span
                                                            key={k}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                                            className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-mono rounded-lg border border-slate-700"
                                                        >
                                                            #{k}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
