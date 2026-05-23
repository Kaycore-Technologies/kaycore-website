'use client';

import { useState } from 'react';
import { Stethoscope, ClipboardCheck, ArrowLeft, RefreshCw, AlertCircle, HeartPulse, Thermometer, Activity, Siren } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function TriageAssistant() {
    const [chiefComplaint, setChiefComplaint] = useState('');
    const [heartRate, setHeartRate] = useState(80);
    const [bpSystolic, setBpSystolic] = useState(120);
    const [o2Sat, setO2Sat] = useState(98);
    const [painLevel, setPainLevel] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<{ level: number; title: string; color: string; action: string; wait: string } | null>(null);

    // ESI (Emergency Severity Index) Logic Simulation
    const analyzeTriage = () => {
        setIsAnalyzing(true);
        setResult(null);

        setTimeout(() => {
            let level = 5; // Non-urgent default
            let title = 'Non-Urgent';
            let color = 'bg-blue-500';
            let action = 'Clinic Referral / Prescription';
            let wait = '2-4 Hours';

            // Critical Vitals Detection
            const isCriticalVitals = heartRate > 120 || heartRate < 50 || o2Sat < 90 || bpSystolic < 90 || bpSystolic > 200;
            const isSeverePain = painLevel >= 7;

            // Simple Keyword Heuristic for Demo
            const cc = chiefComplaint.toLowerCase();
            const keywords = {
                Level1: ['cardiac arrest', 'unresponsive', 'not breathing', 'severe trauma', 'stroke'],
                Level2: ['chest pain', 'shortness of breath', 'confusion', 'severe pain', 'bleeding'],
                Level3: ['abdominal pain', 'fracture', 'migraine', 'fever', 'vomiting'],
            };

            if (keywords.Level1.some(k => cc.includes(k))) {
                level = 1;
                title = 'RESUSCITATION';
                color = 'bg-rose-600';
                action = 'IMMEDIATE Life-Saving Intervention Required';
                wait = '0 Minutes';
            } else if (isCriticalVitals || keywords.Level2.some(k => cc.includes(k)) || isSeverePain) {
                level = 2;
                title = 'EMERGENT';
                color = 'bg-orange-500';
                action = 'High Risk - Rapid Placement Required';
                wait = '< 10 Minutes';
            } else if (keywords.Level3.some(k => cc.includes(k)) || (heartRate > 100 && heartRate <= 120)) {
                level = 3;
                title = 'URGENT';
                color = 'bg-amber-400';
                action = 'Two or more resources needed';
                wait = '30-60 Minutes';
            } else if (painLevel > 0 || cc.length > 5) {
                level = 4;
                title = 'LESS URGENT';
                color = 'bg-emerald-500';
                action = 'One resource needed (X-Ray or Lab)';
                wait = '1-2 Hours';
            }

            setResult({ level, title, color, action, wait });
            setIsAnalyzing(false);
        }, 1200);
    };

    const reset = () => {
        setChiefComplaint('');
        setHeartRate(80);
        setBpSystolic(120);
        setO2Sat(98);
        setPainLevel(0);
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-100">
            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-slate-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 hover:bg-white hover:text-black hover:border-slate-300 shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">

                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-cyan-100 rounded-xl text-cyan-600">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <h1 className="text-2xl font-black text-slate-900 tracking-tight">AI Clinical Triage</h1>
                            </div>
                            <p className="text-slate-500 font-medium">Emergency intake prioritization & resource allocation helper</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Input Panel */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 h-fit">
                        <h2 className="font-bold text-slate-900 mb-8 flex items-center gap-2 text-lg">
                            <ClipboardCheck className="w-5 h-5 text-cyan-600" /> Patient Intake Form
                        </h2>

                        <div className="space-y-8">
                            {/* Chief Complaint */}
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Chief Complaint</label>
                                <textarea
                                    className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-cyan-500 focus:ring-0 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 resize-none"
                                    rows={2}
                                    placeholder="e.g. Severe chest pain radiating to left arm..."
                                    value={chiefComplaint}
                                    onChange={(e) => setChiefComplaint(e.target.value)}
                                />
                            </div>

                            {/* Vitals Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
                                    <label className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-widest mb-2">
                                        <HeartPulse className="w-4 h-4" /> HR (BPM)
                                    </label>
                                    <input
                                        type="number"
                                        value={heartRate}
                                        onChange={(e) => setHeartRate(Number(e.target.value))}
                                        className="w-full bg-white px-3 py-2 rounded-lg font-black text-rose-600 text-xl border-2 border-rose-100 focus:border-rose-300 outline-none"
                                    />
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
                                    <label className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-widest mb-2">
                                        <Activity className="w-4 h-4" /> BP (Sys)
                                    </label>
                                    <input
                                        type="number"
                                        value={bpSystolic}
                                        onChange={(e) => setBpSystolic(Number(e.target.value))}
                                        className="w-full bg-white px-3 py-2 rounded-lg font-black text-indigo-600 text-xl border-2 border-indigo-100 focus:border-indigo-300 outline-none"
                                    />
                                </div>
                                <div className="bg-cyan-50 p-4 rounded-2xl border border-cyan-100">
                                    <label className="flex items-center gap-2 text-xs font-bold text-cyan-700 uppercase tracking-widest mb-2">
                                        <Thermometer className="w-4 h-4" /> SpO2 (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={o2Sat}
                                        onChange={(e) => setO2Sat(Number(e.target.value))}
                                        className="w-full bg-white px-3 py-2 rounded-lg font-black text-cyan-600 text-xl border-2 border-cyan-100 focus:border-cyan-300 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Pain Slider */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                        Reported Pain Level (0-10)
                                    </label>
                                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${painLevel > 7 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'}`}>
                                        Level {painLevel}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    value={painLevel}
                                    onChange={(e) => setPainLevel(Number(e.target.value))}
                                    className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-cyan-600 hover:accent-cyan-700 transition-all"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={analyzeTriage}
                                    disabled={isAnalyzing || !chiefComplaint}
                                    className="flex-1 py-4 bg-slate-900 hover:bg-black disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-slate-200"
                                >
                                    {isAnalyzing ? (
                                        <>
                                            <RefreshCw className="w-5 h-5 animate-spin" /> Analyzing Protocols...
                                        </>
                                    ) : (
                                        <>
                                            <Siren className="w-5 h-5 fill-current" /> Triage Patient
                                        </>
                                    )}
                                </button>
                                <button onClick={reset} className="px-6 rounded-2xl border-2 border-slate-100 hover:bg-slate-50 text-slate-500 transition-colors">
                                    <RefreshCw className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Result Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    key="result"
                                    className=""
                                >
                                    <div className={`rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden ${result.color} mb-6`}>
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm border border-white/10">
                                                    ESI LEVEL {result.level}
                                                </div>
                                                <Activity className="w-8 h-8 text-white/80" />
                                            </div>
                                            <h2 className="text-4xl font-black tracking-tight mb-2">{result.title}</h2>
                                            <p className="text-white/90 font-medium text-lg leading-relaxed">{result.action}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                                                <AlertCircle className="w-6 h-6 text-slate-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Wait Time</p>
                                                <p className="font-bold text-slate-900 text-xl">{result.wait}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recommended Resources</p>
                                            <div className="flex flex-wrap gap-2">
                                                {result.level <= 2 ? (
                                                    <>
                                                        <span className="px-3 py-1 bg-rose-50 text-rose-700 text-sm font-bold rounded-lg border border-rose-100">Trauma Function</span>
                                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg border border-indigo-100">Cardiac Monitor</span>
                                                        <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-bold rounded-lg border border-cyan-100">IV Access</span>
                                                    </>
                                                ) : result.level === 3 ? (
                                                    <>
                                                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg">Labs</span>
                                                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg">Radiology</span>
                                                    </>
                                                ) : (
                                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-lg border border-emerald-100">Standard Consult</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center p-12 border-4 border-dashed border-slate-200 rounded-[2.5rem] bg-slate-50/50">
                                    <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-6">
                                        <Siren className="w-10 h-10 text-slate-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Triage</h3>
                                    <p className="text-slate-500 max-w-xs mx-auto">Enter patient vitals and complaints to generate an ESI acuity score.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
