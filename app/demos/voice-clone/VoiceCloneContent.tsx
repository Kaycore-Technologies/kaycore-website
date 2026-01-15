'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, Mic, Play, Download, Activity, Wand2 } from 'lucide-react';
import Link from 'next/link';

export default function VoiceCloneContent() {
    const [text, setText] = useState('');
    const [selectedVoice, setSelectedVoice] = useState('adam');
    const [isGenerating, setIsGenerating] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const voices = [
        { id: 'adam', name: 'Adam (Narrative)', gender: 'Male', accent: 'American' },
        { id: 'sarah', name: 'Sarah (Professional)', gender: 'Female', accent: 'British' },
        { id: 'james', name: 'James (Casual)', gender: 'Male', accent: 'Australian' },
        { id: 'emma', name: 'Emma (Soft)', gender: 'Female', accent: 'American' },
    ];

    const handleGenerate = () => {
        if (!text) return;
        setIsGenerating(true);
        // Simulate API call
        setTimeout(() => {
            setIsGenerating(false);
            setAudioUrl('simulated_audio_url');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-brand-accent/30 font-sans">
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop"
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
                            <Mic className="w-10 h-10 text-brand-accent" />
                            Generative Voice Synths
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Few-shot voice cloning and emotional speech synthesis engine.
                        </p>
                    </motion.div>
                </div>
            </ParallaxSection>

            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12 -mt-20 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Voice Selection */}
                        <div className="md:col-span-1 space-y-4">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Wand2 className="w-4 h-4 text-sky-400" />
                                Select Voice
                            </h3>
                            <div className="space-y-3">
                                {voices.map((voice) => (
                                    <div
                                        key={voice.id}
                                        onClick={() => setSelectedVoice(voice.id)}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedVoice === voice.id
                                            ? 'bg-brand-accent/20 border-brand-accent shadow-lg shadow-brand-accent/10'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-white">{voice.name}</span>
                                            {selectedVoice === voice.id && (
                                                <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400 flex gap-2">
                                            <span>{voice.gender}</span>
                                            <span>•</span>
                                            <span>{voice.accent}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Script</h3>
                                <textarea
                                    className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 text-gray-200 resize-none focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-sans text-lg leading-relaxed placeholder-gray-600"
                                    placeholder="Enter text to synthesize..."
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <div className="text-right mt-2 text-xs text-gray-500">
                                    {text.length} characters
                                </div>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={!text || isGenerating}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${!text || isGenerating
                                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                    : 'bg-brand-accent text-[#020617] hover:bg-sky-400 shadow-xl shadow-brand-accent/20'
                                    }`}
                            >
                                {isGenerating ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-[#020617] border-t-transparent rounded-full animate-spin" />
                                        Synthesizing...
                                    </>
                                ) : (
                                    <>
                                        <Activity className="w-5 h-5" />
                                        Generate Audio
                                    </>
                                )}
                            </button>
                            {/* Simulation Result */}
                            {audioUrl && !isGenerating && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 cursor-pointer transition-colors">
                                            <Play className="w-5 h-5 ml-1" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Generation Complete</div>
                                            <div className="text-xs text-emerald-400">00:12 • 24kHz Mono</div>
                                        </div>
                                    </div>
                                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
