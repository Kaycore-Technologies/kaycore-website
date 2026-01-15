'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
    TextReveal,
} from '@/components/animations';
import { MagneticButton } from '@/components/ui';
import { detailedServices } from '@/components/company-data';
import { ArrowLeft, CheckCircle, ExternalLink, Calendar, ChevronRight } from 'lucide-react';

export default function ServiceDetail() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const service = detailedServices.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        The service you are looking for might have been moved or removed.
                    </p>
                    <Link href="/services">
                        <MagneticButton className="bg-brand-accent text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-brand-accent/20">
                            Return to Services
                        </MagneticButton>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-brand-accent selection:text-white">

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-brand-accent transition-colors group">
                            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Services
                        </Link>
                    </motion.div>

                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-10 max-w-2xl"
                        >
                            {service.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            <Link href="/contact">
                                <MagneticButton className="bg-brand-accent text-white font-bold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-brand-accent/80 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)]">
                                    <Calendar className="w-5 h-5" />
                                    Book a Consultation
                                </MagneticButton>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Overview & Stats Grid */}
            <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-7">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold text-white mb-6">Why {service.title}?</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {(service as any).longDescription || service.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {(service as any).benefits?.map((benefit: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="bg-brand-accent/20 p-2 rounded-lg text-brand-accent shrink-0">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <p className="text-sm text-gray-200">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-24">
                            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                                    Capabilities
                                </h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center justify-between group cursor-default">
                                            <span className="text-gray-300 group-hover:text-white transition-colors">
                                                {feature}
                                            </span>
                                            <ChevronRight className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Link href="/contact" className="block">
                                        <button className="w-full py-4 rounded-xl bg-white text-[#020617] font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                                            Start Your Project
                                            <ExternalLink className="w-4 h-4 text-[#020617] group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            {service.process && (
                <section className="py-20 bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-3 text-glow">How We Work</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Our Implementation Process</h3>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {service.process.map((step: string, idx: number) => (
                                <AnimatedItem key={idx}>
                                    <div className="group h-full p-8 border border-white/10 rounded-2xl bg-[#020617]/50 hover:bg-[#020617] transition-all duration-300 hover:border-brand-accent/50 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl font-bold text-white group-hover:opacity-20 transition-opacity">
                                            0{idx + 1}
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all">
                                            {idx + 1}
                                        </div>

                                        {/* Split simple "Title: Description" strings if used, otherwise just display text */}
                                        <h4 className="text-xl font-bold text-white mb-3">
                                            {step.includes(':') ? step.split(':')[0] : `Step ${idx + 1}`}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.includes(':') ? step.split(':')[1] : step}
                                        </p>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/10" />
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to elevate your {service.title}?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join forward-thinking enterprises that trust Kaycore Technologies to deliver excellence.
                    </p>
                    <Link href="/contact">
                        <MagneticButton className="bg-white text-[#020617] font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-2xl">
                            Let&apos;s Talk Strategy
                        </MagneticButton>
                    </Link>
                </div>
            </section>
        </div>
    );
}
