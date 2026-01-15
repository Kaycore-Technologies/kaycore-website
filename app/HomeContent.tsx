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
import StatsSection from '@/components/StatsSection';
import NewsSection from '@/components/NewsSection';
import { ArrowRight } from 'lucide-react';

import { services, industries, processSteps, partners } from '@/components/company-data';

// --- DATA CONSTANTS ---

// 3. SERVICES (Mandatory) - Imported from @/components/company-data

// 5. INDUSTRIES (New) - Imported from @/components/company-data

// 6. PROCESS (New) - Imported from @/components/company-data

// 7. TRUST BUILDERS / PARTNERS - Imported from @/components/company-data

export default function HomeContent({ newsItems }: { newsItems: any[] }) {
    return (
        <div className="bg-background text-foreground font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HERO SECTION */}
            <ParallaxSection
                videoUrl="/assets/videos/hero-main.mp4"
                className="h-[85vh] sm:h-[95vh]"
                overlayOpacity={0.5}
            >
                <div className="relative z-20 text-center space-y-8 max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight text-white leading-[1.1]">
                            <TextReveal text="Engineering Intelligent Systems for Scalable Growth" by="word" />
                        </h1>
                        <p className="text-lg sm:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto">
                            Your strategic technology partner for building secure, future-ready digital solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <Link href="/contact">
                            <MagneticButton className="bg-white text-[#0A1F44] px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                                Book a Free Consultation
                            </MagneticButton>
                        </Link>
                        <Link href="/services">
                            <MagneticButton className="border border-white/40 bg-white/5 backdrop-blur-md text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-colors">
                                Explore Our Services
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </div>
            </ParallaxSection>

            {/* 2. STATS / TRUST SIGNALS (New Placement - High Visibility) */}
            <StatsSection />

            {/* 3. ABOUT KAYCORE (Purpose) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <ScrollReveal>
                        <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Who We Are</h2>
                        <h3 className="text-3xl sm:text-4xl text-foreground font-bold font-serif mb-8 leading-tight">
                            We act as the bridge between ambitious business goals and scalable technology execution.
                        </h3>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Kaycore Technologies isn't just a vendor; we are a strategic partner dedicated to simplifying complex technology.
                            We believe in engineering systems that are secure, intelligent, and built for the long haul.
                        </p>
                    </ScrollReveal>
                </div>
            </section>


            {/* 4. SERVICES / CAPABILITIES */}
            <section className="py-24 bg-[#0B1221] relative z-10 border-y border-white/5 overflow-hidden">
                {/* Radial Gradient Background Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="text-center mb-20">
                        <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">Our Capabilities</h2>
                        <h3 className="text-4xl sm:text-5xl font-bold font-serif text-white">Services & Practice Areas</h3>
                        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive technology solutions tailored to drive your business forward.
                        </p>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <AnimatedItem key={service.id}>
                                <div className="h-full bg-[#0F1729] rounded-2xl border border-white/5 overflow-hidden hover:border-brand-accent/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-brand-accent/20 hover:-translate-y-1 flex flex-col backdrop-blur-sm">
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                            {/* Abstract decorative icon or shape could go here */}
                                        </div>
                                        <h4 className="text-2xl font-bold font-serif text-white mb-4 group-hover:text-brand-accent transition-colors">
                                            {service.title}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                                            {service.description}
                                        </p>
                                        <Link href="/services" className="inline-flex items-center text-sm font-bold text-white group-hover:text-brand-accent transition-colors mt-auto">
                                            Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 5. WHY KAYCORE */}
            <ParallaxSection
                videoUrl="/assets/videos/hero-secondary.mp4"
                className="h-[60vh]"
                overlayOpacity={0.8}
            >
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-8">Why Partner With Us?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left sm:text-center">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-blue-200">Business-First Engineering</h3>
                            <p className="text-white/80">We prioritize ROI and business outcomes over code for code's sake.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-blue-200">Founder-Led Mindset</h3>
                            <p className="text-white/80">We work with the agility of a startup and the discipline of an enterprise.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-blue-200">Scalable & Secure</h3>
                            <p className="text-white/80">Security and scalability are baked into our architecture from day one.</p>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* 6. INDUSTRIES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B1121] via-[#101E35] to-[#050C1F] relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

                <div className="mx-auto max-w-7xl relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] text-cyan-400 uppercase mb-3">Industries</h2>
                            <h3 className="text-4xl sm:text-5xl font-bold font-serif text-white">Deep Domain Expertise</h3>
                        </div>
                    </ScrollReveal>
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {industries.map((ind) => (
                            <AnimatedItem key={ind.name}>
                                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1 h-full flex flex-col backdrop-blur-md">
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-900/30 z-10 group-hover:bg-transparent transition-colors duration-300" />
                                        <Image
                                            src={ind.image}
                                            alt={ind.name}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700 saturate-100 group-hover:saturate-120"
                                        />
                                    </div>
                                    <div className="p-6 text-center flex flex-col flex-grow bg-gradient-to-b from-transparent to-[#020617]/80">
                                        <h4 className="font-bold font-serif text-lg text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">{ind.name}</h4>
                                        <p className="text-sm text-gray-300 leading-relaxed">{ind.description}</p>
                                    </div>
                                </div>
                            </AnimatedItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 7. PROCESS */}
            <section className="py-24 bg-background text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-premium-gradient opacity-90" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">Our Process</h2>
                            <h3 className="text-4xl sm:text-5xl font-bold font-serif">How We Work</h3>
                        </div>
                    </ScrollReveal>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-white/10" />
                        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                            {processSteps.map((step) => (
                                <AnimatedItem key={step.num}>
                                    <div className="text-center group">
                                        <div className="w-24 h-24 mx-auto bg-brand-dark border border-white/10 rounded-full flex items-center justify-center text-2xl font-bold font-serif mb-6 group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-300 relative z-20 shadow-2xl">
                                            {step.num}
                                        </div>
                                        <h4 className="text-xl font-bold font-serif mb-3">{step.title}</h4>
                                        <p className="text-white/60 text-sm">{step.desc}</p>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* 8. NEWS / INSIGHTS (New Section) */}
            <NewsSection newsItems={newsItems} />

            {/* 9. TRUST BUILDERS / PARTNERS */}
            <section className="py-20 bg-background border-t border-border overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
                        Trusted By Leading Brands
                    </p>
                </div>
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-24 items-center opacity-80 hover:opacity-100 transition-opacity">
                        {partners.map((partner) => (
                            <div key={`p1-${partner.id}`} className="flex items-center justify-center bg-white h-24 w-48 rounded-[50%] px-6 shadow-lg hover:scale-105 transition-transform">
                                <div className="relative h-12 w-32">
                                    <Image src={partner.imageUrl} alt={partner.name} fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                        {partners.map((partner) => (
                            <div key={`p2-${partner.id}`} className="flex items-center justify-center bg-white h-24 w-48 rounded-[50%] px-6 shadow-lg hover:scale-105 transition-transform">
                                <div className="relative h-12 w-32">
                                    <Image src={partner.imageUrl} alt={partner.name} fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. CALL TO ACTION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background text-center">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-dark dark:text-white mb-6">Let’s Build Technology That Works for You</h2>
                        <p className="text-xl text-muted-foreground mb-10">
                            Schedule a free consultation to discuss your vision, challenges, and how we can help you scale.
                        </p>
                        <Link href="/contact">
                            <MagneticButton className="bg-brand-accent text-white px-10 py-5 font-bold text-lg hover:bg-brand-accent/80 transition-colors shadow-2xl hover:shadow-brand-accent/40 border border-brand-accent/20">
                                Schedule a Free Call
                            </MagneticButton>
                        </Link>
                    </div>
                </ScrollReveal>
            </section>

            <TechStack />
        </div>
    );
}
