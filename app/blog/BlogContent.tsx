'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    TextReveal,
    StaggerContainer,
    AnimatedItem
} from '@/components/animations';
import { useState } from 'react';
import { MagneticButton, ParallaxSection } from '@/components/ui';
import { ArrowRight, Search, Calendar, Clock, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
    id: string | number;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    image?: string;
}

export default function BlogContent({ posts, categories }: { posts: BlogPost[], categories: string[] }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const latestPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const gridPosts = filteredPosts.slice(1);

    return (
        <div className="bg-[#020617] min-h-screen">
            {/* Hero Section */}
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop"
                className="h-[60vh]"
                overlayOpacity={0.8}
            >
                <div className="relative max-w-5xl mx-auto text-center space-y-8 px-4 flex flex-col items-center">
                    <div className="inline-flex px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-brand-accent text-sm font-medium tracking-wide mb-4">
                        ENGINEERING BLOG
                    </div>
                    <TextReveal
                        text="Insights & Perspectives"
                        className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight"
                    />
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                        Deep dives into cloud architecture, AI implementation, and digital transformation from our engineering teams.
                    </p>

                    {/* Search Bar - Hero Context */}
                    <div className="max-w-xl mx-auto mt-8 relative group">
                        <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full backdrop-blur-md px-6 py-4 focus-within:bg-white/10 focus-within:border-brand-accent/50 transition-all">
                            <Search className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400 font-light min-w-0"
                            />
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Filter Categories */}
            <section className="sticky top-0 z-30 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${activeCategory === 'All'
                                ? 'bg-brand-accent text-white border-brand-accent shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            All Topics
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-brand-accent text-white border-brand-accent shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Featured Post */}
                {latestPost && searchQuery === '' && activeCategory === 'All' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px bg-white/10 flex-1" />
                            <span className="text-brand-accent text-sm font-bold tracking-widest uppercase px-4 py-1 border border-brand-accent/20 rounded-full bg-brand-accent/5">
                                Featured Story
                            </span>
                            <div className="h-px bg-white/10 flex-1" />
                        </div>

                        <Link href={`/blog/${latestPost.slug}`} className="group block relative">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-accent/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)]">
                                <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-10" />
                                    <Image
                                        src={latestPost.image || ''}
                                        alt={latestPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10">
                                            <Tag className="w-3 h-3 text-brand-accent" />
                                            {latestPost.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4 text-brand-accent" />
                                            {new Date(latestPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-brand-accent" />
                                            {latestPost.readTime}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-brand-accent transition-colors">
                                        {latestPost.title}
                                    </h2>
                                    <p className="text-lg text-gray-400 mb-8 line-clamp-3 leading-relaxed">
                                        {latestPost.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-accent to-purple-600 p-[1px]">
                                                <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center">
                                                    <User className="w-5 h-5 text-gray-300" />
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium text-white">{latestPost.author}</span>
                                        </div>
                                        <span className="flex items-center gap-2 text-brand-accent font-semibold group-hover:translate-x-2 transition-transform">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts.map((post) => (
                        <AnimatedItem key={post.id}>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:shadow-xl">
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-[#020617]/20 z-10" />
                                        <Image
                                            src={post.image || ''}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-[#020617]/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-accent border border-white/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                            <span className="text-sm text-gray-300 font-medium">By {post.author}</span>
                                            <ArrowRight className="w-4 h-4 text-brand-accent -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </AnimatedItem>
                    ))}
                </StaggerContainer>

                {filteredPosts.length === 0 && (
                    <div className="py-32 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
                            <Search className="w-8 h-8 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                        <button
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-6 text-brand-accent hover:text-white transition-colors font-medium"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </section>

            {/* Newsletter */}
            <section className="py-24 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/5" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Stay ahead of the curve
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join 5,000+ engineers receiving our weekly insights on distributed systems, AI, and platform engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10 focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 outline-none transition-all"
                        />
                        <button className="px-8 py-3.5 bg-white text-[#020617] font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
