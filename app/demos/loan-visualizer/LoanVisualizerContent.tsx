'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, Calculator, DollarSign, PieChart as PieChartIcon, TrendingUp, Calendar } from 'lucide-react';
import Link from 'next/link';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function LoanVisualizerContent() {
    const [amount, setAmount] = useState(300000);
    const [rate, setRate] = useState(5.5);
    const [years, setYears] = useState(30);
    const [results, setResults] = useState({ monthly: 0, total: 0, totalInterest: 0 });

    useEffect(() => {
        const p = amount;
        const r = rate / 100 / 12;
        const n = years * 12;

        if (r === 0) {
            setResults({
                monthly: p / n,
                total: p,
                totalInterest: 0
            });
            return;
        }

        const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = monthlyPayment * n;
        const totalInterest = totalPayment - p;

        setResults({
            monthly: monthlyPayment,
            total: totalPayment,
            totalInterest: totalInterest
        });
    }, [amount, rate, years]);

    const chartData = [
        { name: 'Principal', value: amount, color: '#3b82f6' }, // brand-accent
        { name: 'Interest', value: results.totalInterest, color: '#f43f5e' }, // rose-500
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-brand-accent/30 font-sans">
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
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
                            <Calculator className="w-10 h-10 text-brand-accent" />
                            Loan Visualizer
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Mortgage amortization & interest simulator with interactive charts. Visualize the long-term impact of interest rates and loan terms on your repayment strategy.
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

            <div className="max-w-6xl mx-auto px-4 py-12 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Controls */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-sky-400" />
                                Loan Details
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Loan Amount</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 outline-none transition-all"
                                        />
                                    </div>
                                    <input
                                        type="range"
                                        min="10000" max="1000000" step="1000"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className="w-full mt-3 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Interest Rate (%)</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={rate}
                                            onChange={(e) => setRate(Number(e.target.value))}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 outline-none transition-all"
                                        />
                                    </div>
                                    <input
                                        type="range"
                                        min="0.1" max="15" step="0.1"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="w-full mt-3 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Loan Term (Years)</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <select
                                            value={years}
                                            onChange={(e) => setYears(Number(e.target.value))}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 outline-none transition-all appearance-none"
                                        >
                                            <option value="10">10 Years</option>
                                            <option value="15">15 Years</option>
                                            <option value="20">20 Years</option>
                                            <option value="30">30 Years</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results & Charts */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-8 space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <div className="text-gray-400 text-sm mb-1">Monthly Payment</div>
                                <div className="text-3xl font-bold text-white">${results.monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                            </div>
                            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <div className="text-gray-400 text-sm mb-1">Total Interest</div>
                                <div className="text-3xl font-bold text-rose-400">${results.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                            </div>
                            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <div className="text-gray-400 text-sm mb-1">Total Cost</div>
                                <div className="text-3xl font-bold text-brand-accent">${results.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl h-[400px] flex flex-col">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <PieChartIcon className="w-5 h-5 text-gray-400" />
                                Payment Breakdown
                            </h3>
                            <div className="flex-1 w-full h-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={80}
                                            outerRadius={120}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(255,255,255,0.1)" />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1e293b', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                            itemStyle={{ color: '#fff' }}
                                            formatter={(value: number | undefined) => [`$${(value || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}`, '']}
                                        />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
