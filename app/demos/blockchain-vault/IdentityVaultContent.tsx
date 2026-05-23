'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, ShieldCheck, Wallet, Lock, Scan, CheckCircle, Smartphone, UserCheck, Key } from 'lucide-react';
import Link from 'next/link';

export default function IdentityVaultContent() {
    const [step, setStep] = useState<'connect' | 'verify' | 'processing' | 'approved'>('connect');
    const [walletId, setWalletId] = useState('');
    const [scanProgress, setScanProgress] = useState(0);

    const connectWallet = () => {
        setStep('processing');
        setTimeout(() => {
            setWalletId('0x71C...9A23');
            setStep('verify');
        }, 1500);
    };

    const verifyIdentity = () => {
        setStep('processing');
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            setScanProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setStep('approved');
            }
        }, 100);
    };

    const reset = () => {
        setStep('connect');
        setWalletId('');
        setScanProgress(0);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30 font-sans">
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2670&auto=format&fit=crop"
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
                            <ShieldCheck className="w-10 h-10 text-amber-500" />
                            Smart Identity Vault
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Decentralized identity management with ZK-proof verification.
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

            <div className="max-w-4xl mx-auto px-4 py-12 -mt-20 relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 z-0 opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                    </div>

                    <AnimatePresence mode='wait'>
                        {/* Step 1: Connect Wallet */}
                        {step === 'connect' && (
                            <motion.div
                                key="connect"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="relative z-10 text-center max-w-md w-full"
                            >
                                <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-500/20">
                                    <Wallet className="w-10 h-10 text-amber-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">Connect Identity Wallet</h2>
                                <p className="text-gray-400 mb-8">
                                    Securely connect your decentralized wallet to assert your verification credentials. No personal data will be stored.
                                </p>
                                <button
                                    onClick={connectWallet}
                                    className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-[#020617] font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                                >
                                    <Lock className="w-5 h-5" />
                                    Connect & Authenticate
                                </button>
                                <p className="mt-4 text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                                    <ShieldCheck className="w-3 h-3" /> Powered by Zero-Knowledge Proofs
                                </p>
                            </motion.div>
                        )}

                        {/* Step 2: Processing / Loading */}
                        {step === 'processing' && (
                            <motion.div
                                key="processing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative z-10 text-center max-w-md w-full"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-8">
                                    <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                                    <div className="absolute inset-0 border-4 border-amber-500 rounded-full border-t-transparent animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {scanProgress > 0 ? (
                                            <span className="font-mono font-bold text-2xl">{scanProgress}%</span>
                                        ) : (
                                            <Wallet className="w-8 h-8 text-amber-500 animate-pulse" />
                                        )}
                                    </div>
                                </div>
                                {scanProgress > 0 ? (
                                    <>
                                        <h2 className="text-2xl font-bold text-white mb-2">Verifying Credentials</h2>
                                        <p className="text-gray-400 animate-pulse">Running ZK-SNARK proof verification...</p>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-bold text-white mb-2">Connecting Logic</h2>
                                        <p className="text-gray-400 animate-pulse">Establishing secure handshake...</p>
                                    </>
                                )}
                            </motion.div>
                        )}

                        {/* Step 3: Verify Action */}
                        {step === 'verify' && (
                            <motion.div
                                key="verify"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="relative z-10 text-center max-w-md w-full"
                            >
                                <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-mono mb-8">
                                    Wallet Connected: {walletId}
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-2 bg-black/40 rounded-lg border border-white/10">
                                            <Smartphone className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Device Attestation</h3>
                                            <p className="text-sm text-gray-400">iPhone 15 Pro • Secure Enclave</p>
                                        </div>
                                        <CheckCircle className="w-5 h-5 text-emerald-500 ml-auto" />
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-black/40 rounded-lg border border-white/10">
                                            <UserCheck className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Identity Claim</h3>
                                            <p className="text-sm text-gray-400">Proof of Humanity • KYC Level 2</p>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="w-5 h-5 border-2 border-gray-600 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={verifyIdentity}
                                    className="w-full py-4 bg-white text-[#020617] font-bold rounded-xl hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                                >
                                    <Scan className="w-5 h-5" />
                                    Verify Credential Proof
                                </button>
                            </motion.div>
                        )}

                        {/* Step 4: Approved */}
                        {step === 'approved' && (
                            <motion.div
                                key="approved"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 text-center max-w-md w-full"
                            >
                                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/40">
                                    <CheckCircle className="w-12 h-12 text-[#020617]" />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">Identity Verified</h2>
                                <p className="text-emerald-400 mb-8 font-mono">ZK-Proof Hash: 0x8f...2b1a</p>

                                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-8">
                                    <p className="text-sm text-emerald-200">
                                        Access granted to Tier-1 compliant zones. Your identity remains private; only the validity of the proof was shared.
                                    </p>
                                </div>

                                <button
                                    onClick={reset}
                                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2 mx-auto"
                                >
                                    <Key className="w-4 h-4" /> Reset Session
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
