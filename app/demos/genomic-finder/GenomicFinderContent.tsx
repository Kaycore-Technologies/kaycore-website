'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, Dna, Microscope, Activity, AlertCircle, Search, Database } from 'lucide-react';
import Link from 'next/link';

interface PatternMatch {
    pattern: string;
    index: number;
    type: 'mutation' | 'repeats' | 'marker';
    description: string;
}

export default function GenomicFinderContent() {
    const [sequence, setSequence] = useState('ATGC'.repeat(20));
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [matches, setMatches] = useState<PatternMatch[]>([]);

    // Auto-generate a random sequence on mount
    useEffect(() => {
        generateRandomSequence();
    }, []);

    const generateRandomSequence = () => {
        const bases = ['A', 'T', 'G', 'C'];
        let seq = '';
        for (let i = 0; i < 200; i++) {
            seq += bases[Math.floor(Math.random() * bases.length)];
        }
        // Inject some "patterns"
        seq = seq.slice(0, 50) + 'AAAAA' + seq.slice(55, 100) + 'GATTACA' + seq.slice(107);
        setSequence(seq);
        setMatches([]);
    };

    const analyzeSequence = () => {
        setIsAnalyzing(true);
        setMatches([]);

        setTimeout(() => {
            const newMatches: PatternMatch[] = [];

            // Find Poly-A tails (Mutation risk)
            const polyA = sequence.matchAll(/AAAAA/g);
            for (const match of polyA) {
                if (match.index !== undefined) {
                    newMatches.push({
                        pattern: 'AAAAA',
                        index: match.index,
                        type: 'mutation',
                        description: 'Poly-A Repeat (High Mutation Risk)'
                    });
                }
            }

            // Find GATTACA (Marker)
            const gattaca = sequence.matchAll(/GATTACA/g);
            for (const match of gattaca) {
                if (match.index !== undefined) {
                    newMatches.push({
                        pattern: 'GATTACA',
                        index: match.index,
                        type: 'marker',
                        description: 'Reference Marker Sequence'
                    });
                }
            }

            // Find GC-Rich regions
            const gcRich = sequence.matchAll(/GCGC/g);
            for (const match of gcRich) {
                if (match.index !== undefined) {
                    newMatches.push({
                        pattern: 'GCGC',
                        index: match.index,
                        type: 'repeats',
                        description: 'CpG Island (Gene Promoter)'
                    });
                }
            }

            setMatches(newMatches.sort((a, b) => a.index - b.index));
            setIsAnalyzing(false);
        }, 1500);
    };

    const highlightSequence = () => {
        if (!sequence) return null;

        let lastIndex = 0;
        const elements = [];

        matches.forEach((match, i) => {
            // Text before match
            if (match.index > lastIndex) {
                elements.push(
                    <span key={`text-${i}`} className="text-gray-500 font-mono tracking-widest break-all">
                        {sequence.slice(lastIndex, match.index)}
                    </span>
                );
            }

            // Match text
            const colorClass =
                match.type === 'mutation' ? 'bg-rose-500/20 text-rose-400 border-b-2 border-rose-500' :
                    match.type === 'marker' ? 'bg-indigo-500/20 text-indigo-400 border-b-2 border-indigo-500' :
                        'bg-emerald-500/20 text-emerald-400 border-b-2 border-emerald-500';

            elements.push(
                <motion.span
                    key={`match-${i}`}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`font-mono font-bold px-1 rounded-sm mx-0.5 inline-block ${colorClass}`}
                    title={match.description}
                >
                    {sequence.slice(match.index, match.index + match.pattern.length)}
                </motion.span>
            );

            lastIndex = match.index + match.pattern.length;
        });

        // Remaining text
        if (lastIndex < sequence.length) {
            elements.push(
                <span key="text-end" className="text-gray-500 font-mono tracking-widest break-all">
                    {sequence.slice(lastIndex)}
                </span>
            );
        }

        return elements;
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 font-sans">
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop"
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
                            <Dna className="w-10 h-10 text-cyan-400" />
                            Genomic Pattern Finder
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            High-throughput DNA sequence anomaly detection using regex patterns.
                        </p>
                    </motion.div>
                </div>
            </ParallaxSection>

            {/* Back Button */}
            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Input Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-8 space-y-6"
                    >
                        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl min-h-[500px] flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Database className="w-5 h-5 text-cyan-400" />
                                    Sequence Data (FASTA Raw)
                                </h2>
                                <button
                                    onClick={generateRandomSequence}
                                    className="text-xs px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors flex items-center gap-2"
                                >
                                    <Activity className="w-3 h-3" /> Generate Sample
                                </button>
                            </div>

                            <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-6 text-sm leading-8 overflow-y-auto font-mono break-all relative">
                                {matches.length > 0 ? highlightSequence() : (
                                    <textarea
                                        value={sequence}
                                        onChange={(e) => setSequence(e.target.value.toUpperCase().replace(/[^ATGC]/g, ''))}
                                        className="w-full h-full bg-transparent border-none focus:ring-0 resize-none outline-none tracking-widest text-gray-400"
                                        placeholder="PASTE DNA SEQUENCE HERE..."
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Controls Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Microscope className="w-5 h-5 text-cyan-400" />
                                Analysis Toolkit
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Base Pairs</div>
                                    <div className="text-2xl font-mono font-bold text-white">{sequence.length} BP</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">GC Content</div>
                                        <div className="text-lg font-mono font-bold text-cyan-400">
                                            {sequence.length > 0 ? ((sequence.match(/[GC]/g)?.length || 0) / sequence.length * 100).toFixed(1) : 0}%
                                        </div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Anomalies</div>
                                        <div className="text-lg font-mono font-bold text-rose-400">{matches.length}</div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={analyzeSequence}
                                disabled={isAnalyzing || !sequence}
                                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <Activity className="w-5 h-5 animate-pulse" />
                                        Sequencing...
                                    </>
                                ) : (
                                    <>
                                        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        Run Pattern Scan
                                    </>
                                )}
                            </button>

                            {/* Legend */}
                            {matches.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-6 pt-6 border-t border-white/10 space-y-3"
                                >
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Detected Patterns</h4>
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" />
                                        <span className="text-gray-300">Mutation Risk (Poly-A)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                                        <span className="text-gray-300">Marker (GATTACA)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                                        <span className="text-gray-300">CpG Island (GC-Rich)</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
