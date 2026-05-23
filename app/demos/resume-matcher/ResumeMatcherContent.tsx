'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, CheckCircle2, AlertCircle, ArrowLeft, Percent, Search, RefreshCw } from 'lucide-react';
import Link from 'next/link';

// Metadata removed for client component

export default function ResumeMatcher() {
    const [jobDesc, setJobDesc] = useState('');
    const [resume, setResume] = useState('');
    const [score, setScore] = useState(0);
    const [matches, setMatches] = useState<string[]>([]);
    const [missing, setMissing] = useState<string[]>([]);

    useEffect(() => {
        if (!jobDesc || !resume) {
            setScore(0);
            setMatches([]);
            setMissing([]);
            return;
        }

        // Simple keyword extraction (ignore common stop words)
        const stopWords = new Set(['and', 'the', 'to', 'of', 'in', 'for', 'with', 'a', 'an', 'is', 'are', 'on', 'at', 'be', 'will', 'that', 'this', 'as', 'it']);

        // Helper to get unique significant words
        const getKeywords = (text: string) => {
            return text.toLowerCase()
                .replace(/[^\w\s]/g, '')
                .split(/\s+/)
                .filter(w => w.length > 3 && !stopWords.has(w));
        };

        const jobKeywords = [...new Set(getKeywords(jobDesc))];
        const resumeKeywords = new Set(getKeywords(resume));

        if (jobKeywords.length === 0) return;

        // Find matches
        const found = jobKeywords.filter(k => resumeKeywords.has(k));
        const notFound = jobKeywords.filter(k => !resumeKeywords.has(k));

        // Calculate score
        const matchPercentage = Math.round((found.length / jobKeywords.length) * 100);

        setScore(matchPercentage);
        setMatches(found);
        setMissing(notFound.slice(0, 10)); // Show top 10 missing

    }, [jobDesc, resume]);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-slate-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 hover:bg-white hover:text-black hover:border-slate-300 shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-6xl mx-auto">


                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center justify-center p-4 bg-rose-100 text-rose-600 rounded-2xl mb-6 shadow-lg shadow-rose-200/50"
                    >
                        <Search className="w-8 h-8" />
                    </motion.div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Smart Resume Matcher</h1>
                    <p className="text-slate-500 max-w-lg mx-auto">ATS simulation tool. Analyze keyword overlap between your resume and a target job description.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Inputs */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6">
                            <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                                <Briefcase className="w-5 h-5 text-slate-400" />
                                <h3>Job Description</h3>
                            </div>
                            <textarea
                                value={jobDesc}
                                onChange={(e) => setJobDesc(e.target.value)}
                                placeholder="Paste the job description here..."
                                className="w-full h-48 bg-slate-50 border-0 rounded-xl p-4 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-rose-500/20 transition-all resize-none text-sm leading-relaxed"
                            />
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6">
                            <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                                <FileText className="w-5 h-5 text-slate-400" />
                                <h3>Your Resume</h3>
                            </div>
                            <textarea
                                value={resume}
                                onChange={(e) => setResume(e.target.value)}
                                placeholder="Paste your resume text here..."
                                className="w-full h-48 bg-slate-50 border-0 rounded-xl p-4 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-rose-500/20 transition-all resize-none text-sm leading-relaxed"
                            />
                        </div>
                    </div>

                    {/* Analysis */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Score Card */}
                        <motion.div
                            layout
                            className={`rounded-3xl shadow-xl p-8 text-center border transition-colors ${score > 70 ? 'bg-emerald-50 border-emerald-100' : 'bg-white border-slate-100'}`}
                        >
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">ATS Match Score</div>
                            <div className="relative inline-flex items-center justify-center">
                                <svg className="w-32 h-32 transform -rotate-90">
                                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                                    <motion.circle
                                        cx="64" cy="64" r="60"
                                        stroke="currentColor" strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={377}
                                        strokeDashoffset={377 - (377 * score) / 100}
                                        className={score > 70 ? 'text-emerald-500' : score > 40 ? 'text-amber-500' : 'text-rose-500'}
                                        initial={{ strokeDashoffset: 377 }}
                                        animate={{ strokeDashoffset: 377 - (377 * score) / 100 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </svg>
                                <div className="absolute text-3xl font-black text-slate-900">{score}%</div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4">
                                {score > 70 ? 'Great match! High probability of passing ATS.' : 'Low match. Try adding more keywords from the description.'}
                            </p>
                        </motion.div>

                        {/* Keywords Analysis */}
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                <h3 className="font-bold text-slate-900">Keyword Analysis</h3>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" /> Matched Keywords
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {matches.length > 0 ? matches.map(word => (
                                            <span key={word} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md border border-emerald-100 font-medium">
                                                {word}
                                            </span>
                                        )) : <span className="text-slate-400 text-xs italic">No matches yet...</span>}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" /> Missing Keywords (Top 10)
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {missing.length > 0 ? missing.map(word => (
                                            <span key={word} className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-md border border-rose-100 font-medium">
                                                {word}
                                            </span>
                                        )) : <span className="text-slate-400 text-xs italic">No missing keywords found...</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={() => { setJobDesc(''); setResume(''); }}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"
                        >
                            <RefreshCw className="w-4 h-4" /> Reset / Clear All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
