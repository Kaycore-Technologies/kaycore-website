'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Calculator, Server, Globe, Cpu, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CloudEstimator() {
    const [servers, setServers] = useState(10);
    const [storage, setStorage] = useState(500);
    const [aiInference, setAiInference] = useState(50);
    const [region, setRegion] = useState('us-east');

    const REGION_MULTIPLIERS: Record<string, number> = {
        'us-east': 1,
        'eu-west': 1.2,
        'ap-south': 0.9,
    };

    const calculateCost = () => {
        const serverCost = servers * 45;
        const storageCost = storage * 0.15;
        const aiCost = aiInference * 12.50; // GPU hours
        const baseTotal = serverCost + storageCost + aiCost;
        return baseTotal * REGION_MULTIPLIERS[region];
    };

    const totalCost = calculateCost();

    const data = [
        { name: 'Compute', value: servers * 45 * REGION_MULTIPLIERS[region], color: '#3b82f6' },
        { name: 'Storage', value: storage * 0.15 * REGION_MULTIPLIERS[region], color: '#06b6d4' },
        { name: 'AI Inference', value: aiInference * 12.50 * REGION_MULTIPLIERS[region], color: '#8b5cf6' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">

            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">

                        <div className="h-8 w-[1px] bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-200">
                                <Calculator className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-slate-900 tracking-tight">CloudEst 2.0</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
                            LIVE RATES
                        </span>
                    </div>
                </div>
            </div>

            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-slate-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 hover:bg-white hover:text-black hover:border-slate-300 shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Controls Panel */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <Server className="w-48 h-48 text-blue-900" />
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <RefreshCw className="w-5 h-5 text-blue-500" />
                                Resource Configuration
                            </h2>

                            <div className="space-y-8 relative z-10">
                                {/* Servers Slider */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="flex items-center gap-2 font-bold text-slate-700">
                                            <Server className="w-4 h-4 text-blue-500" /> Compute Nodes
                                        </label>
                                        <span className="text-2xl font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100 min-w-[3rem] text-center">
                                            {servers}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={servers}
                                        onChange={(e) => setServers(Number(e.target.value))}
                                        className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                                    />
                                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                                        <span>1 Node</span>
                                        <span>100 Nodes</span>
                                    </div>
                                </div>

                                {/* Storage Slider */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="flex items-center gap-2 font-bold text-slate-700">
                                            <Globe className="w-4 h-4 text-cyan-500" /> Storage (GB)
                                        </label>
                                        <span className="text-2xl font-black text-cyan-600 bg-cyan-50 px-3 py-1 rounded-lg border border-cyan-100 min-w-[5rem] text-center">
                                            {storage}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100"
                                        max="5000"
                                        step="100"
                                        value={storage}
                                        onChange={(e) => setStorage(Number(e.target.value))}
                                        className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-600 transition-all"
                                    />
                                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                                        <span>100 GB</span>
                                        <span>5 TB</span>
                                    </div>
                                </div>

                                {/* AI GPU Slider */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="flex items-center gap-2 font-bold text-slate-700">
                                            <Cpu className="w-4 h-4 text-violet-500" /> AI Inference (GPU Hrs)
                                        </label>
                                        <span className="text-2xl font-black text-violet-600 bg-violet-50 px-3 py-1 rounded-lg border border-violet-100 min-w-[4rem] text-center">
                                            {aiInference}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="500"
                                        step="10"
                                        value={aiInference}
                                        onChange={(e) => setAiInference(Number(e.target.value))}
                                        className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-violet-500 hover:accent-violet-600 transition-all"
                                    />
                                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                                        <span>0 Hrs</span>
                                        <span>500 Hrs</span>
                                    </div>
                                </div>

                                {/* Region Selector */}
                                <div className="pt-4 border-t border-slate-100">
                                    <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                                        Deployment Region
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {Object.keys(REGION_MULTIPLIERS).map((r) => (
                                            <button
                                                key={r}
                                                onClick={() => setRegion(r)}
                                                className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${region === r
                                                    ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                                    : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                                                    }`}
                                            >
                                                {r.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Total Cost Card */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />

                            <div className="relative z-10 text-center">
                                <p className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-2">Estimated Monthly Cost</p>
                                <div className="flex items-start justify-center gap-1 font-black text-6xl tracking-tight mb-2">
                                    <span className="text-3xl mt-2 text-blue-400">$</span>
                                    <motion.span
                                        key={totalCost}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </motion.span>
                                </div>
                                <p className="text-slate-400 text-sm">~${(totalCost / 30).toFixed(2)} daily average</p>
                            </div>
                        </div>

                        {/* Breakdown Chart */}
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                            <h3 className="font-bold text-slate-900 mb-6">Cost Distribution</h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={80}
                                            outerRadius={110}
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} style={{ filter: 'drop-shadow(0px 6px 10px rgba(0,0,0,0.15))' }} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value: any) => `$${value.toFixed(2)}`}
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="space-y-3 mt-4">
                                {data.map((item) => (
                                    <div key={item.name} className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                            <span className="text-slate-600 font-bold">{item.name}</span>
                                        </div>
                                        <span className="font-mono font-medium text-slate-900">${item.value.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
