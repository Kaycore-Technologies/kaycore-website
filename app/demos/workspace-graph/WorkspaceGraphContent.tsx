'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxSection } from '@/components/ui';
import { ArrowLeft, Search, Network, User, Folder, Building2, FileText, Share2, X } from 'lucide-react';
import Link from 'next/link';

// Mock Data for the Graph
const initialNodes = [
    { id: 'sarah', type: 'person', label: 'Sarah Jenkins', role: 'CEO', x: 50, y: 10 },
    { id: 'david', type: 'person', label: 'David Chen', role: 'CTO', x: 20, y: 40 },
    { id: 'elena', type: 'person', label: 'Elena Rodriguez', role: 'Head of Design', x: 80, y: 40 },
    { id: 'proj-ai', type: 'project', label: 'Cognitive Sentiment', x: 35, y: 70 },
    { id: 'proj-fin', type: 'project', label: 'FinTech Core', x: 10, y: 80 },
    { id: 'dept-eng', type: 'dept', label: 'Engineering', x: 20, y: 20 },
    { id: 'dept-des', type: 'dept', label: 'Design', x: 80, y: 20 },
    { id: 'doc-specs', type: 'doc', label: 'API Specs v2', x: 40, y: 90 },
    { id: 'doc-brand', type: 'doc', label: 'Brand Guidelines', x: 90, y: 70 },
];

const initialLinks = [
    { source: 'sarah', target: 'dept-eng' },
    { source: 'sarah', target: 'dept-des' },
    { source: 'david', target: 'dept-eng' },
    { source: 'elena', target: 'dept-des' },
    { source: 'david', target: 'proj-ai' },
    { source: 'david', target: 'proj-fin' },
    { source: 'sarah', target: 'proj-ai' }, // CEO oversight
    { source: 'elena', target: 'doc-brand' },
    { source: 'david', target: 'doc-specs' },
    { source: 'proj-ai', target: 'doc-specs' },
    { source: 'dept-des', target: 'doc-brand' },
];

export default function WorkspaceGraphContent() {
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<'all' | 'person' | 'project' | 'doc'>('all');

    const filteredNodes = useMemo(() => {
        return initialNodes.filter(node => {
            const matchesSearch = node.label.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = filterType === 'all' || node.type === filterType;
            return matchesSearch && matchesType;
        });
    }, [searchQuery, filterType]);

    const activeLinks = useMemo(() => {
        return initialLinks.filter(link =>
            filteredNodes.some(n => n.id === link.source) &&
            filteredNodes.some(n => n.id === link.target)
        );
    }, [filteredNodes]);

    const selectedNode = useMemo(() =>
        initialNodes.find(n => n.id === selectedNodeId),
        [selectedNodeId]);

    const getNodeIcon = (type: string) => {
        switch (type) {
            case 'person': return User;
            case 'project': return Folder;
            case 'dept': return Building2;
            case 'doc': return FileText;
            default: return Network;
        }
    };

    const getNodeColor = (type: string) => {
        switch (type) {
            case 'person': return 'bg-sky-500 text-sky-100';
            case 'project': return 'bg-purple-500 text-purple-100';
            case 'dept': return 'bg-indigo-500 text-indigo-100';
            case 'doc': return 'bg-emerald-500 text-emerald-100';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-brand-accent/30 font-sans overflow-hidden">
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                className="h-[35vh]"
                overlayOpacity={0.8}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 flex items-center justify-center gap-3">
                            <Network className="w-10 h-10 text-brand-accent" />
                            Workspace Knowledge Graph
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            AI-driven organizational network analysis and insight mapper.
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

            <div className="max-w-[1400px] mx-auto px-4 py-8 -mt-10 relative z-20 h-[800px] flex gap-6">

                {/* Visualizer Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-grow bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl relative overflow-hidden shadow-2xl"
                >
                    {/* Controls */}
                    <div className="absolute top-6 left-6 z-10 flex gap-4">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search nodes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-brand-accent/50 w-64"
                            />
                        </div>
                        <div className="flex bg-black/40 rounded-xl p-1 border border-white/10">
                            {(['all', 'person', 'project', 'doc'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilterType(type)}
                                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors capitalize ${filterType === type
                                        ? 'bg-white/10 text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Graph Canvas */}
                    <div className="w-full h-full relative" onClick={() => setSelectedNodeId(null)}>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {activeLinks.map((link, i) => {
                                const source = filteredNodes.find(n => n.id === link.source);
                                const target = filteredNodes.find(n => n.id === link.target);
                                if (!source || !target) return null;

                                return (
                                    <motion.line
                                        key={i}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.2 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        x1={`${source.x}%`}
                                        y1={`${source.y}%`}
                                        x2={`${target.x}%`}
                                        y2={`${target.y}%`}
                                        stroke="white"
                                        strokeWidth="1.5"
                                    />
                                );
                            })}
                        </svg>

                        {filteredNodes.map((node) => {
                            const Icon = getNodeIcon(node.type);
                            const isSelected = selectedNodeId === node.id;

                            return (
                                <motion.div
                                    key={node.id}
                                    layoutId={node.id}
                                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedNodeId(node.id);
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className={`
                                        w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 transition-all duration-300
                                        ${getNodeColor(node.type)}
                                        ${isSelected ? 'border-brand-accent ring-4 ring-brand-accent/20' : 'border-white/20 group-hover:border-white/50'}
                                    `}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className={`
                                        absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap pointer-events-none transition-all
                                        ${isSelected ? 'bg-brand-accent text-[#020617]' : 'bg-black/60 text-white opacity-0 group-hover:opacity-100'}
                                    `}>
                                        {node.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Detail Panel */}
                <AnimatePresence mode="wait">
                    {selectedNode && (
                        <motion.div
                            initial={{ width: 0, opacity: 0, x: 20 }}
                            animate={{ width: 350, opacity: 1, x: 0 }}
                            exit={{ width: 0, opacity: 0, x: 20 }}
                            className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative flex-shrink-0"
                        >
                            <div className="h-full p-6 flex flex-col min-w-[350px]">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl ${getNodeColor(selectedNode.type)} bg-opacity-20`}>
                                        {(() => {
                                            const Icon = getNodeIcon(selectedNode.type);
                                            return <Icon className="w-6 h-6" />;
                                        })()}
                                    </div>
                                    <button
                                        onClick={() => setSelectedNodeId(null)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <h2 className="text-2xl font-bold mb-1">{selectedNode.label}</h2>
                                <p className="text-brand-accent font-medium mb-6 uppercase text-sm tracking-wider">
                                    {selectedNode.type}
                                    {(selectedNode as any).role && ` • ${(selectedNode as any).role}`}
                                </p>

                                <div className="space-y-6 flex-grow overflow-y-auto">
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                        <h3 className="text-sm font-bold text-gray-300 mb-3 flex items-center gap-2">
                                            <Share2 className="w-4 h-4" />
                                            Connections
                                        </h3>
                                        <div className="space-y-2">
                                            {initialLinks
                                                .filter(l => l.source === selectedNode.id || l.target === selectedNode.id)
                                                .map((link, i) => {
                                                    const otherId = link.source === selectedNode.id ? link.target : link.source;
                                                    const otherNode = initialNodes.find(n => n.id === otherId);
                                                    if (!otherNode) return null;

                                                    return (
                                                        <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"
                                                            onClick={() => setSelectedNodeId(otherNode.id)}>
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-2 h-2 rounded-full ${getNodeColor(otherNode.type).split(' ')[0]}`} />
                                                                <span className="text-sm text-gray-300 group-hover:text-white">{otherNode.label}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                        <h3 className="text-sm font-bold text-gray-300 mb-3">Analysis</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {selectedNode.type === 'person' && "Central node in the Engineering cluster. High density of cross-functional connections implies a leadership role."}
                                            {selectedNode.type === 'project' && "Active project with critical dependencies on the Engineering and Design departments. Connected to high-traffic documentation."}
                                            {selectedNode.type === 'dept' && "Core organizational unit. Maintains strong bridges between leadership and project execution layers."}
                                            {selectedNode.type === 'doc' && "Highly referenced knowledge artifact. Currently being accessed by multiple departments indicating high relevance."}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <button className="w-full py-3 bg-brand-accent text-[#020617] font-bold rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-brand-accent/20">
                                        View Full Profile
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}
