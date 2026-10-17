'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    TextReveal,
    StaggerContainer,
    AnimatedItem
} from '@/components/animations';
import { useState } from 'react';
import { MagneticButton } from '@/components/ui';
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
        <div className="text-ink min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 pt-32 pb-16">
                {/* Faint photo under a light wash, so the hero reads as a light surface */}
                <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-page/70 via-page/85 to-page" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_85%_10%,#E6F0FF_0,transparent_60%)]" aria-hidden="true" />
                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-4 flex flex-col items-center">
                    <div className="k-pill text-xs sm:text-sm mb-4">
                        ENGINEERING BLOG
                    </div>
                    <TextReveal
                        text="AI Quality Insights"
                        as="h1"
                        className="text-5xl sm:text-6xl md:text-7xl font-bold text-navy leading-tight tracking-tight"
                    />
                    <p className="text-xl text-body leading-relaxed max-w-2xl mx-auto">
                        Data-backed guides on AI quality engineering, LLM testing, and shipping AI systems that behave reliably in production.
                    </p>

                    {/* Search Bar - Hero Context */}
                    <div className="max-w-xl mx-auto mt-8 relative group">
                        <div className="absolute inset-0 bg-c2/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="glass-surface relative flex items-center rounded-full px-6 py-4 focus-within:border-c2 focus-within:ring-2 focus-within:ring-c2/30 transition-all">
                            <Search className="w-5 h-5 text-muted mr-3" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-navy placeholder:text-muted min-w-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="sticky top-0 z-30 bg-page/95 border-b border-line py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${activeCategory === 'All'
                                ? 'bg-navy text-white border-navy shadow-card'
                                : 'bg-white text-body border-line hover:bg-soft hover:text-navy'
                                }`}
                        >
                            All Topics
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-navy text-white border-navy shadow-card'
                                    : 'bg-white text-body border-line hover:bg-soft hover:text-navy'
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
                            <div className="h-px bg-line flex-1" />
                            <span className="glass-surface text-brand-accent text-sm font-bold tracking-widest uppercase px-4 py-1 border-brand-accent/20 rounded-full">
                                Featured Story
                            </span>
                            <div className="h-px bg-line flex-1" />
                        </div>

                        <Link href={`/blog/${latestPost.slug}`} className="group block relative">
                            <div className="glass-surface grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 rounded-3xl overflow-hidden hover:shadow-card-hover hover:border-c2/40 transition-all duration-500">
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
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-navy border border-line">
                                            <Tag className="w-3 h-3 text-brand-accent" />
                                            {latestPost.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-muted mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4 text-brand-accent" />
                                            {new Date(latestPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-brand-accent" />
                                            {latestPost.readTime}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight group-hover:text-brand-accent transition-colors">
                                        {latestPost.title}
                                    </h2>
                                    <p className="text-lg text-body mb-8 line-clamp-3 leading-relaxed">
                                        {latestPost.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-c1 to-brand-accent p-[1px]">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                                    <User className="w-5 h-5 text-muted" />
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium text-navy">{latestPost.author}</span>
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
                                <article className="glass-surface rounded-2xl overflow-hidden hover:shadow-card-hover hover:border-c2/40 transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={post.image || ''}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-accent border border-line">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs text-muted mb-4">
                                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <span className="w-1 h-1 bg-muted rounded-full" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-navy mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-body mb-6 line-clamp-3 leading-relaxed flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-line mt-auto">
                                            <span className="text-sm text-body font-medium">By {post.author}</span>
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
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-soft mb-6">
                            <Search className="w-8 h-8 text-muted" />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-2">No articles found</h3>
                        <p className="text-body">Try adjusting your search or filter to find what you're looking for.</p>
                        <button
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-6 text-brand-accent hover:text-navy transition-colors font-medium"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </section>

            {/* Newsletter */}
            <section className="py-24 border-y border-line bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                        Have an AI system to validate?
                    </h2>
                    <p className="text-lg text-body mb-10 max-w-2xl mx-auto">
                        Talk to our lead quality engineers about testing your AI for hallucination, drift, and adversarial risk. You keep every test suite and dataset we build.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-bold rounded-xl hover:bg-navy-2 transition-colors shadow-card"
                        >
                            Talk to an Expert
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
