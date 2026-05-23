'use client';

import { globalOffices } from '@/components/company-data';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function GlobalOffices() {
    return (
        <div className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Global Presence</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Strategically located innovation hubs to serve our global clientele.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {globalOffices.map((office, idx) => (
                        <motion.div
                            key={office.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group flex items-start gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                                <MapPin className="w-5 h-5 text-brand-accent" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{office.city}</h3>
                                <p className="text-sm text-gray-400">{office.country}</p>
                                <p className="text-xs text-brand-accent mt-1 font-medium">{office.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
