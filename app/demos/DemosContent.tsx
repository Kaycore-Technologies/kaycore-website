'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Beaker, Zap } from 'lucide-react';
import { orderedLabsProjects as labsProjects } from '@/components/company-data';
import { ParallaxSection } from '@/components/ui';
import { TextReveal, StaggerContainer, AnimatedItem } from '@/components/animations';

export default function DemosContent() {
    // Group projects by category
    const categories = Array.from(new Set(labsProjects.map(p => p.category)));

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-brand-accent/30">

            {/* Hero Section */}
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
                className="h-[60vh]"
                overlayOpacity={0.85}
            >
                <div className="relative max-w-5xl mx-auto text-center space-y-8 px-4 flex flex-col items-center">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-brand-accent text-sm font-medium tracking-wide mb-4">
                        KAYCORE INNOVATION LABS
                    </div>
                    <TextReveal
                        text="Future Ready Applications"
                        className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight"
                    />
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                        Our experimental playground featuring advanced implementations of AI, streaming telemetry, and complex data visualizations.
                    </p>
                </div>
            </ParallaxSection>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">

                {categories.map((category) => {
                    const categoryProjects = labsProjects.filter(p => p.category === category);

                    return (
                        <div key={category}>
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-px bg-white/10 flex-1" />
                                <h2 className="text-xl font-bold text-brand-accent uppercase tracking-widest flex items-center gap-3">
                                    <Sparkles className="w-5 h-5" />
                                    {category}
                                </h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {categoryProjects.map((project) => (
                                    <AnimatedItem key={project.id}>
                                        <Link href={project.href} className="group block h-full">
                                            <article className="relative h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] flex flex-col">

                                                {/* Image Container */}
                                                <div className="relative h-48 overflow-hidden">
                                                    <div className="absolute inset-0 bg-[#020617]/20 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-20" />
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />

                                                    {/* Floating Badge */}
                                                    <div className="absolute top-4 left-4 z-30">
                                                        <span className="px-3 py-1 bg-[#020617]/60 backdrop-blur rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-1.5">
                                                            <Beaker className="w-3 h-3 text-brand-accent" />
                                                            {project.subtitle}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 flex flex-col flex-1 relative z-30">
                                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                                                        {project.description}
                                                    </p>

                                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                                                            <Zap className="w-3 h-3" /> Live Demo
                                                        </span>
                                                        <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                                                            Launch <ArrowRight className="w-4 h-4 text-brand-accent" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    </AnimatedItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <section className="py-24 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/5 opacity-50" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Want to build something extraordinary?
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                        These labs represent our commitment to pushing boundaries. Let's apply this innovation to your next project.
                    </p>
                    <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white text-[#020617] font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Start a Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
