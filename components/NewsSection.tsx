'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const newsItemsData = [
    {
        id: 1,
        title: 'Kaycore Partners with Leading FinTech for AI Transformation',
        date: 'October 15, 2025',
        category: 'Press Release',
        image: '/assets/images/news/ai-partnership.jpg',
        excerpt: 'Strategic partnership aims to revolutionize fraud detection systems using advanced machine learning models.',
    },
    {
        id: 2,
        title: 'The Future of Cloud Security: 2026 Trends Report',
        date: 'November 2, 2025',
        category: 'Insights',
        image: '/assets/images/news/cloud-security.jpg',
        excerpt: 'Our experts analyze emerging threats and the zero-trust architectures needed to combat them.',
    },
    {
        id: 3,
        title: 'Kaycore Expands Operations into APAC Region',
        date: 'December 10, 2025',
        category: 'Company News',
        image: '/assets/images/news/apac-expansion.jpg',
        excerpt: 'New regional headquarters in Singapore will support our growing client base in Asia-Pacific.',
    },
];


export default function NewsSection({ newsItems }: { newsItems?: any[] }) {
    const items = newsItems || newsItemsData;

    return (
        <section className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">
                            Insights & News
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold font-serif text-white">
                            Latest Updates from Kaycore
                        </h3>
                    </div>
                    <Link
                        href="/insights"
                        className="group flex items-center gap-2 text-brand-navy dark:text-blue-200 font-semibold hover:text-brand-accent transition-colors"
                    >
                        View all insights
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground mb-3">{item.date}</p>
                                <h4 className="text-xl font-bold font-serif text-white mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {item.excerpt}
                                </p>

                                <Link
                                    href={`/insights/${item.id}`}
                                    className="inline-flex items-center text-sm font-bold text-brand-navy dark:text-white uppercase tracking-wider hover:text-brand-accent transition-colors"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
