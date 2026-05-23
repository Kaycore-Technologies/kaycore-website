'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, Lock, ShieldCheck, Key, RefreshCw, Copy, Check, FileCode } from 'lucide-react';
import Link from 'next/link';

export default function SecureHashContent() {
    const [input, setInput] = useState('Secret Message');
    const [algorithm, setAlgorithm] = useState('SHA-256');
    const [salt, setSalt] = useState('');
    const [hash, setHash] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const generateHash = async () => {
            const encoder = new TextEncoder();
            const data = encoder.encode(input + salt);
            let hashBuffer;

            if (algorithm === 'SHA-256') {
                hashBuffer = await crypto.subtle.digest('SHA-256', data);
            } else if (algorithm === 'SHA-1') {
                hashBuffer = await crypto.subtle.digest('SHA-1', data); // Warning: Insecure
            } else {
                hashBuffer = await crypto.subtle.digest('SHA-256', data); // Fallback
            }

            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
            setHash(hashHex);
        };

        generateHash();
    }, [input, salt, algorithm]);

    const handleCopy = () => {
        navigator.clipboard.writeText(hash);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const generateSalt = () => {
        const array = new Uint8Array(16);
        crypto.getRandomValues(array);
        const hex = Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
        setSalt(hex);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-brand-accent/30 font-sans">
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop"
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
                            <Lock className="w-10 h-10 text-brand-accent" />
                            Secure Hash
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Client-side cryptographic visualization and salt generation. Demonstrates secure hashing algorithms for password protection and data integrity verification.
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

            <div className="max-w-4xl mx-auto px-4 py-12 -mt-20 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-8"
                >
                    {/* Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400">Input Text</label>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 outline-none transition-all"
                                placeholder="Enter text to hash..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400">Algorithm</label>
                            <select
                                value={algorithm}
                                onChange={(e) => setAlgorithm(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 outline-none transition-all appearance-none"
                            >
                                <option value="SHA-256">SHA-256 (Recommended)</option>
                                <option value="SHA-1">SHA-1 (Legacy)</option>
                            </select>
                        </div>
                    </div>

                    {/* Salt */}
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                                <Key className="w-4 h-4 text-amber-400" />
                                Cryptographic Salt
                            </label>
                            <button
                                onClick={generateSalt}
                                className="text-xs flex items-center gap-1 text-brand-accent hover:text-white transition-colors"
                            >
                                <RefreshCw className="w-3 h-3" /> Generate New
                            </button>
                        </div>
                        <div className="font-mono text-sm text-gray-500 break-all bg-black/20 p-2 rounded-lg">
                            {salt || '(No salt generated)'}
                        </div>
                    </div>

                    {/* Output */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold">
                            <ShieldCheck className="w-5 h-5" />
                            Generated <span className="uppercase">{algorithm}</span> Hash
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-all rounded-xl" />
                            <div className="relative bg-black/60 border border-emerald-500/20 rounded-xl p-6 flex items-center justify-between gap-4">
                                <code className="font-mono text-emerald-400 text-sm md:text-base break-all">
                                    {hash}
                                </code>
                                <button
                                    onClick={handleCopy}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                    title="Copy Hash"
                                >
                                    {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <div className="text-center text-xs text-gray-500 pt-4">
                            <FileCode className="w-4 h-4 inline mr-1" />
                            Computed client-side using Web Crypto API
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
