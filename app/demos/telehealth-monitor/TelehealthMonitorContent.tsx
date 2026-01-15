'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Activity, Heart, Wind, Thermometer, ArrowLeft, AlertTriangle, Wifi } from 'lucide-react';
import Link from 'next/link';

export default function TelehealthMonitor() {
    const [data, setData] = useState<any[]>([]);
    const [heartRate, setHeartRate] = useState(72);
    const [spo2, setSpo2] = useState(98);
    const [alert, setAlert] = useState<string | null>(null);

    // Simulation Logic
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

            const nextHR = Math.floor(60 + Math.random() * 40);
            const nextSpo2 = Math.floor(95 + Math.random() * 5);

            if (Math.random() > 0.95) {
                setAlert('Arrhythmia Warning');
                setTimeout(() => setAlert(null), 3000);
            }

            setHeartRate(prev => Math.floor(prev * 0.8 + nextHR * 0.2));
            setSpo2(nextSpo2);

            setData(prev => {
                const newData = [...prev, { time: timeStr, hr: nextHR, spo2: nextSpo2 }];
                if (newData.length > 30) newData.shift();
                return newData;
            });

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-mono">
            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-slate-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 hover:bg-white hover:text-black hover:border-slate-300 shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Navbar */}
                <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                            <Wifi className="w-3 h-3" />
                            <span className="text-xs font-bold tracking-widest">CONNECTED</span>
                        </div>
                        <div className="text-xs text-slate-400">ID: P-90210-X</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Vitals Sidebar */}
                    <div className="space-y-4">
                        <div className={`bg-white p-6 rounded-3xl border-l-4 shadow-sm transition-all ${heartRate > 90 ? 'border-rose-500 bg-rose-50/30' : 'border-emerald-500'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Heart Rate</p>
                                <Heart className={`w-5 h-5 ${heartRate > 90 ? 'text-rose-500 animate-ping' : 'text-slate-300'}`} />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className={`text-5xl font-bold tracking-tighter ${heartRate > 90 ? 'text-rose-600' : 'text-slate-800'}`}>{heartRate}</span>
                                <span className="text-slate-400 text-sm font-bold">BPM</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border-l-4 border-cyan-500 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">SpO2</p>
                                <Wind className="w-5 h-5 text-cyan-300" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tighter text-slate-800">{spo2}</span>
                                <span className="text-slate-400 text-sm font-bold">%</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border-l-4 border-amber-500 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Temp (Skin)</p>
                                <Thermometer className="w-5 h-5 text-amber-300" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tighter text-slate-800">98.6</span>
                                <span className="text-slate-400 text-sm font-bold">°F</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Monitor */}
                    <div className="lg:col-span-3 bg-slate-900 rounded-3xl p-6 relative overflow-hidden shadow-2xl ring-4 ring-slate-200">
                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        {/* Header */}
                        <div className="relative z-10 flex justify-between items-center mb-6">
                            <h2 className="text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                <Activity className="w-5 h-5" /> Live Telemetry
                            </h2>
                            {alert && (
                                <div className="bg-rose-500/20 border border-rose-500 text-rose-400 px-4 py-1 rounded-full text-xs font-bold animate-pulse flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" /> {alert}
                                </div>
                            )}
                        </div>

                        {/* Chart */}
                        <div className="h-[450px] w-full relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                                    <XAxis
                                        dataKey="time"
                                        stroke="#475569"
                                        fontSize={10}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(val) => val.split(':')[2] + 's'}
                                    />
                                    <YAxis domain={[40, 160]} hide />
                                    <RechartsTooltip
                                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
                                        itemStyle={{ color: '#bae6fd' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="hr"
                                        stroke="#f43f5e"
                                        strokeWidth={3}
                                        dot={false}
                                        isAnimationActive={false} // Disable for smooth streaming look
                                    />
                                    <Line
                                        type="step"
                                        dataKey="spo2"
                                        stroke="#06b6d4"
                                        strokeWidth={2}
                                        dot={false}
                                        strokeOpacity={0.5}
                                        isAnimationActive={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
