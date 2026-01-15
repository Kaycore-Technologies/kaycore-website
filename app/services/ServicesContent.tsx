'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
    TextReveal,
} from '@/components/animations';
import { MagneticButton, TiltCard, ParallaxSection } from '@/components/ui';
import TechStack from '@/components/TechStack';
// ... previous imports
import { detailedServices, sectorSolutions } from '@/components/company-data';
// ... existing code



export default function ServicesContent() {
    return (
        <div className="bg-background text-foreground font-sans selection:bg-brand-accent selection:text-white">
            {/* Hero Section with Parallax Video */}
            <ParallaxSection
                videoUrl="/assets/videos/hero-main.mp4"
                className="h-[60vh] min-h-[500px] flex items-center justify-center"
                overlayOpacity={0.7}
            >
                <div className="relative z-20 text-center space-y-6 max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        <TextReveal text="Enterprise Services" by="word" />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light"
                    >
                        Full-stack squads for cloud, data, and AI—battle-tested playbooks that move faster from strategy to shipped.
                    </motion.p>
                </div>
            </ParallaxSection>

            {/* Services Grid Section */}
            <section id="services" className="relative z-10 bg-background -mt-10 rounded-t-[2.5rem] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-16 text-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">Our Expertise</h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                                Comprehensive Capability Stack
                            </h3>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                From cloud infrastructure to AI solutions, we provide end-to-end technology services designed to meet your
                                enterprise needs.
                            </p>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {detailedServices.map((service) => (
                            <AnimatedItem key={service.id} variant="fade-scale">
                                <TiltCard
                                    className="group h-full bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-brand-accent/20 hover:border-brand-accent/50 transition-all duration-300 overflow-hidden flex flex-col"
                                >
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
                                        <div className="absolute top-4 right-4 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            {service.emoji}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col gap-4 flex-1 -mt-12 relative z-10">
                                        <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-brand-accent transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2 text-sm text-slate-500 mb-6 flex-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-brand-accent mt-0.5">•</span>
                                                    <span className="text-slate-400 group-hover:text-slate-300 transition-colors">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-2">
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm group-hover:text-white transition-colors"
                                            >
                                                Explore Service
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </TiltCard>
                            </AnimatedItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Industry-Specific Solutions Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                Industry-Specific Solutions
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Tailored digital products and platforms designed to meet the unique challenges of your sector.
                            </p>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sectorSolutions.map((sector) => (
                            <AnimatedItem key={sector.id} className="group relative h-[400px] overflow-hidden rounded-3xl">
                                <Image
                                    src={sector.image}
                                    alt={sector.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                                        <h3 className="text-3xl font-bold text-white mb-3">{sector.title}</h3>
                                        <p className="text-gray-300 mb-6 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                                            {sector.description}
                                        </p>

                                        <div className="space-y-2">
                                            {sector.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-brand-accent">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">Our Process</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">The Kaycore Standard</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { num: '01', title: 'Discover', desc: 'Deep dive workshops to map business goals to technical needs.' },
                            { num: '02', title: 'Architect', desc: 'Designing robust, scalable systems that handle future growth.' },
                            { num: '03', title: 'Build', desc: 'Agile development sprints with continuous feedback loops.' },
                            { num: '04', title: 'Scale', desc: 'Production deployment, monitoring, and optimization.' }
                        ].map((step, idx) => (
                            <div key={idx} className="relative p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                <div className="text-5xl font-bold text-brand-accent/20 mb-6 font-serif group-hover:text-brand-accent/40 transition-colors">
                                    {step.num}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-brand-accent/5" />

                <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Let&apos;s map the first sprints together—roadmap, architecture, and a launch-ready pilot.
                    </p>
                    <Link href="/contact" className="inline-block">
                        <MagneticButton className="bg-brand-accent text-white font-bold px-10 py-5 hover:bg-brand-accent/80 transition-colors shadow-2xl hover:shadow-brand-accent/40 border border-brand-accent/20">
                            Schedule a Consultation
                        </MagneticButton>
                    </Link>
                </div>
            </section>
        </div>
    );
}
