'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import { companyStats } from '@/components/company-data';

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Using framer-motion spring for smooth counting
    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: 2000
    });

    // Transform the spring value to a rounded integer string
    const displayValue = useTransform(springValue, (latest) => Math.round(latest).toString());

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref} className="font-bold text-5xl md:text-6xl text-brand-accent flex items-baseline justify-center">
            <motion.span>{displayValue}</motion.span>
            <span>{suffix}</span>
        </span>
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
                            className="space-y-2 p-4"
                        >
                            <div className="flex justify-center items-baseline">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-white/60 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
