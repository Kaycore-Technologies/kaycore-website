'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import { companyStats } from '@/components/company-data';

// Text-based stat component (Qualified Claims)
const StatItem = ({ value, label }: { value: string; label: string }) => {
    return (
        <div className="space-y-2 p-4">
            <div className="font-bold text-3xl md:text-4xl text-brand-accent flex items-center justify-center min-h-[3rem]">
                {value}
            </div>
            <p className="text-white/60 font-medium tracking-wide uppercase text-xs md:text-sm max-w-[200px] mx-auto leading-relaxed">
                {label}
            </p>
        </div>
    );
};

export default function StatsSection() {
    return (
        <section className="py-20 bg-brand-dark text-white border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {companyStats.map((stat, idx) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <StatItem value={stat.value as string} label={stat.label} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
