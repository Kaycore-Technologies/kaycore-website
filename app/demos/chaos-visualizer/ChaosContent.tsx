'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, Activity, Server, ShieldAlert, Zap, RefreshCw, BarChart } from 'lucide-react';
import Link from 'next/link';

interface Node {
    id: number;
    name: string;
    status: 'healthy' | 'latency' | 'down';
    x: number;
    y: number;
}

export default function ChaosContent() {
    const [nodes, setNodes] = useState<Node[]>([
        { id: 1, name: 'API Gateway', status: 'healthy', x: 50, y: 10 },
        { id: 2, name: 'Auth Service', status: 'healthy', x: 25, y: 40 },
        { id: 3, name: 'User Service', status: 'healthy', x: 75, y: 40 },
        { id: 4, name: 'Database Primary', status: 'healthy', x: 25, y: 80 },
        { id: 5, name: 'Cache Layer', status: 'healthy', x: 75, y: 80 },
    ]);

    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (msg: string) => {
        setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 10));
    };

    const injectChaos = (type: 'latency' | 'down') => {
        const targetId = Math.floor(Math.random() * nodes.length) + 1;
        setNodes(prev => prev.map(n => n.id === targetId ? { ...n, status: type } : n));

        const targetName = nodes.find(n => n.id === targetId)?.name;
        addLog(`Injecting ${type.toUpperCase()} into ${targetName}...`);

        // Auto-recover after 3 seconds
        setTimeout(() => {
            setNodes(prev => prev.map(n => n.id === targetId ? { ...n, status: 'healthy' } : n));
            addLog(`Recovered ${targetName} to HEALTHY state.`);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-brand-accent/30 font-sans">
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1506318137071-a8bcbf6755dd?q=80&w=2670&auto=format&fit=crop"
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
                            <Activity className="w-10 h-10 text-brand-accent" />
                            Chaos Mesh Sim
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Interactive visualization of distributed system failure injection. Simulate network latency and pod failures to test system resilience and recovery mechanisms.
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
                    {/* Visualizer */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-8 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative min-h-[500px]"
                    >
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Server className="w-5 h-5 text-sky-400" />
                            System Topology
                        </h3>

                        {/* Connections (Static SVG for simplicity) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                            <line x1="50%" y1="20%" x2="25%" y2="50%" stroke="white" strokeWidth="2" />
                            <line x1="50%" y1="20%" x2="75%" y2="50%" stroke="white" strokeWidth="2" />
                            <line x1="25%" y1="50%" x2="25%" y2="80%" stroke="white" strokeWidth="2" />
                            <line x1="75%" y1="50%" x2="75%" y2="80%" stroke="white" strokeWidth="2" />
                        </svg>

                        {/* Nodes */}
                        <div className="relative w-full h-[400px] z-10">
                            {nodes.map(node => (
                                <div
                                    key={node.id}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-300"
                                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                >
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center border-2 shadow-xl transition-all duration-300 ${node.status === 'healthy' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-emerald-500/10' :
                                        node.status === 'latency' ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-amber-500/10 animate-pulse' :
                                            'bg-rose-500/10 border-rose-500 text-rose-400 shadow-rose-500/10'
                                        }`}>
                                        <Server className="w-8 h-8" />
                                    </div>
                                    <div className="bg-black/80 px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                                        {node.name}
                                    </div>
                                    {node.status !== 'healthy' && (
                                        <div className={`text-xs font-bold uppercase tracking-wider ${node.status === 'latency' ? 'text-amber-500' : 'text-rose-500'
                                            }`}>
                                            {node.status}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Controls & Logs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        {/* Injection Controls */}
                        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                                <Zap className="w-5 h-5 text-brand-accent" />
                                Inject Failure
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => injectChaos('latency')}
                                    className="p-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-xl text-amber-400 transition-all flex flex-col items-center gap-2 group"
                                >
                                    <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
                                    <span className="font-bold text-sm">Add Latency</span>
                                </button>
                                <button
                                    onClick={() => injectChaos('down')}
                                    className="p-4 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-xl text-rose-400 transition-all flex flex-col items-center gap-2 group"
                                >
                                    <ShieldAlert className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-sm">Kill Pod</span>
                                </button>
                            </div>
                        </div>

                        {/* Logs Console */}
                        <div className="bg-black/90 border border-white/10 rounded-2xl p-6 h-[300px] flex flex-col">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <BarChart className="w-4 h-4" />
                                Event Log
                            </h3>
                            <div className="flex-1 overflow-y-auto space-y-2 font-mono text-xs scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                <AnimatePresence initial={false}>
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-gray-300 border-l-2 border-brand-accent pl-3 py-1"
                                        >
                                            {log}
                                        </motion.div>
                                    ))}
                                    {logs.length === 0 && (
                                        <div className="text-gray-600 italic">System running normally...</div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
