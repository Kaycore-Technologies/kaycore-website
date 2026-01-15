'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    AnimatedItem,
    TextReveal,
} from '@/components/animations';
import { MagneticButton, TiltCard, AnimatedCounter, ParallaxSection } from '@/components/ui';
import { companyStats, teamMembers, milestones, values, aboutSection } from '@/components/company-data';

export default function AboutContent() {
    return (
        <div className="bg-background text-foreground font-sans selection:bg-brand-accent selection:text-white">
            {/* 1. HERO SECTION */}
            <ParallaxSection
                videoUrl="/assets/videos/hero-main.mp4" // Reusing hero video or similar dark abstract background
                className="h-[70vh] sm:h-[80vh]"
                overlayOpacity={0.6}
            >
                <div className="relative z-20 text-center space-y-6 max-w-5xl mx-auto px-4">
                    <ScrollReveal>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif tracking-tight text-white leading-[1.1] mb-6">
                            We Are <span className="text-brand-accent">Kaycore</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg sm:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                            Architects of the digital future. We build the secure, scalable systems that power modern enterprises.
                        </p>
                    </ScrollReveal>
                </div>
            </ParallaxSection>

            {/* 2. STATS SECTION */}
            <section className="relative z-10 -mt-20 px-4 pb-16 pt-24 sm:px-6 lg:px-8 bg-background">
                <div className="mx-auto max-w-7xl">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {companyStats.map((stat) => (
                            <AnimatedItem key={stat.label} variant="slide-up">
                                <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-colors">
                                    <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">
                                        {stat.label}
                                    </p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 3. MISSION & VISION (Glassmorphism) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] opacity-5" /> {/* Optional pattern */}
                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <ScrollReveal>
                            <div className="h-full bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={aboutSection.mission.image}
                                        alt={aboutSection.mission.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                                </div>
                                <div className="p-10 relative z-10 -mt-20">
                                    <h2 className="text-3xl font-bold font-serif text-white mb-6">{aboutSection.mission.title}</h2>
                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        {aboutSection.mission.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Vision */}
                        <ScrollReveal delay={0.2}>
                            <div className="h-full bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={aboutSection.vision.image}
                                        alt={aboutSection.vision.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                                </div>
                                <div className="p-10 relative z-10 -mt-20">
                                    <h2 className="text-3xl font-bold font-serif text-white mb-6">{aboutSection.vision.title}</h2>
                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        {aboutSection.vision.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 4. CORE VALUES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">Our DNA</h2>
                            <h3 className="text-4xl md:text-5xl font-bold font-serif text-white">Core Values</h3>
                        </div>
                    </ScrollReveal>
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <AnimatedItem key={value.title} variant="fade-scale">
                                <TiltCard className="h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-brand-accent/10 transition-all group">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/20 transition-colors duration-300" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{value.copy}</p>
                                    </div>
                                </TiltCard>
                            </AnimatedItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 5. TEAM SECTION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
                <div className="mx-auto max-w-7xl">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">Leadership</h2>
                            <h3 className="text-4xl sm:text-5xl font-bold font-serif text-white mb-6">
                                Meet Our Team
                            </h3>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Experts in cloud, AI, and digital transformation dedicated to your success.
                            </p>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <AnimatedItem key={member.id} variant="slide-up">
                                <TiltCard className="group h-full overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/10">
                                    <div className="relative h-96 overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-2xl font-bold text-white mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-brand-accent font-semibold mb-4 tracking-wide">
                                                {member.role}
                                            </p>
                                            <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </TiltCard>
                            </AnimatedItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 6. TIMELINE SECTION (Disabled)
            <section className="py-24 px-4 lg:px-8 bg-background border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">
                                Our Journey
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                From our founding in 2018 to today, we&apos;ve been on an incredible journey of growth.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="relative">
                        {/* Vertical line for desktop 
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/10"></div>

                        <div className="space-y-16">
                            {milestones.map((milestone, index) => (
                                <ScrollReveal key={milestone.id}>
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                                        {/* Content 
                                        <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-300 relative group">
                                                {/* Arrow for Desktop 
                                                <div className={`hidden md:block absolute top-[50%] ${index % 2 === 0 ? '-right-[9px] border-l-white/10' : '-left-[9px] border-r-white/10'} -mt-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${index % 2 === 0 ? 'border-l-8' : 'border-r-8'} group-hover:border-l-brand-accent/50`}></div>

                                                <div className="text-3xl font-bold text-brand-accent mb-2">{milestone.year}</div>
                                                <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                                                <p className="text-slate-400 leading-relaxed">{milestone.description}</p>
                                            </div>
                                        </div>

                                        {/* Timeline dot 
                                        <div className="flex justify-center md:flex-none md:w-12 relative my-6 md:my-0 z-10">
                                            <div className="w-4 h-4 rounded-full bg-brand-accent border-[4px] border-[#020617] shadow-[0_0_10px_rgba(59,130,246,0.5)] ring-1 ring-white/20"></div>
                                        </div>

                                        {/* Empty space 
                                        <div className="hidden md:flex-1 md:block"></div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* 7. CTA SECTION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/5" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl font-bold font-serif text-white mb-6">Ready to Scale with Us?</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Let&apos;s co-design your next release: discovery, architecture, and the first shipped increment.
                        </p>
                        <Link href="/contact" className="inline-block">
                            <MagneticButton className="bg-brand-accent text-white font-bold px-10 py-5 hover:bg-brand-accent/80 transition-colors shadow-2xl hover:shadow-brand-accent/40 border border-brand-accent/20">
                                Get in Touch
                            </MagneticButton>
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
