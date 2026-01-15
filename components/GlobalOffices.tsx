'use client';

import Image from 'next/image';
import { globalOffices } from '@/components/company-data';
import { motion } from 'framer-motion';

export default function GlobalOffices() {
    return (
        <div className="py-20 relative overflow-hidden">
            {/* Background enhancement for this section */}
            <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Global Presence</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Strategically located innovation hubs to serve our global clientele.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {globalOffices.map((office, idx) => (
                        <motion.div
                            key={office.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={office.image}
                                    alt={`${office.city} Office`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-bold">{office.city}</h3>
                                    <p className="text-sm text-gray-300">{office.country}</p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Address</p>
                                    <p className="text-sm text-gray-300 leading-relaxed">{office.address}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</p>
                                    <p className="text-sm text-brand-accent font-mono">{office.phone}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
