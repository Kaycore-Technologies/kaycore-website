'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle2, XCircle, AlertOctagon, Bug, ArrowLeft, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

// Metadata removed for client component

export default function QADashboard() {
    const [filter, setFilter] = useState('All');

    const allTestSuites = [
        { name: 'Auth Service', passed: 142, failed: 3, flaky: 5, coverage: 94 },
        { name: 'Payment Gateway', passed: 89, failed: 0, flaky: 1, coverage: 98 },
        { name: 'User Profile', passed: 56, failed: 8, flaky: 2, coverage: 82 },
        { name: 'Search Engine', passed: 210, failed: 12, flaky: 15, coverage: 76 },
        { name: 'Admin Panel', passed: 45, failed: 0, flaky: 0, coverage: 91 },
    ];

    const testSuites = allTestSuites.filter(suite => {
        if (filter === 'Critical') return suite.failed > 0;
        if (filter === 'Regression') return suite.flaky > 0;
        return true;
    });

    const bugVelocity = [
        { day: 'Mon', bugs: 5 },
        { day: 'Tue', bugs: 8 },
        { day: 'Wed', bugs: 4 },
        { day: 'Thu', bugs: 12 },
        { day: 'Fri', bugs: 3 },
    ];

    const COLORS = { passed: '#10b981', failed: '#ef4444', flaky: '#f59e0b' };

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">

            <div className="fixed top-24 left-8 z-50">
                <Link href="/demos" className="flex items-center gap-2 text-slate-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 hover:bg-white hover:text-black hover:border-slate-300 shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Labs
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="flex items-center gap-6">

                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">QA Command</h1>
                            <p className="text-slate-500 font-medium">Reliability Engineering & Test Automation</p>
                        </div>
                    </div>

                    <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 flex gap-1 self-start md:self-end">
                        {['All', 'Critical', 'Regression'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === f ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </header>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pass Rate</p>
                                <p className="text-2xl font-black text-slate-900">94.2%</p>
                            </div>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-[94.2%]" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-rose-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl">
                                <XCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Failures</p>
                                <p className="text-2xl font-black text-slate-900">23</p>
                            </div>
                        </div>
                        <p className="text-xs text-rose-500 font-bold bg-rose-50 inline-block px-2 py-1 rounded-md">High Priority</p>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
                                <AlertOctagon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Flakiness</p>
                                <p className="text-2xl font-black text-slate-900">4.1%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-violet-100 text-violet-600 rounded-2xl">
                                <Bug className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Velocity</p>
                                <p className="text-2xl font-black text-slate-900">32/wk</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Test Suite Breakdown</h3>
                        <div className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={testSuites} barGap={4} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc' }}
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                                    />
                                    <Bar dataKey="passed" stackId="a" fill={COLORS.passed} radius={[0, 0, 8, 8]} barSize={40} />
                                    <Bar dataKey="flaky" stackId="a" fill={COLORS.flaky} radius={0} barSize={40} />
                                    <Bar dataKey="failed" stackId="a" fill={COLORS.failed} radius={[8, 8, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl text-white">
                        <h3 className="text-lg font-bold mb-2">Bug Discovery</h3>
                        <p className="text-slate-400 text-sm mb-8">Weekly intake velocity</p>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={bugVelocity}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                    <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{ fill: '#1e293b' }}
                                        contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff' }}
                                    />
                                    <Bar dataKey="bugs" fill="#8b5cf6" radius={[6, 6, 6, 6]} barSize={24}>
                                        {bugVelocity.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fillOpacity={0.5 + (index * 0.1)} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
