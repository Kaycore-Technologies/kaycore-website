'use client';

import { motion } from 'framer-motion';
import { ParallaxSection, TiltCard } from '@/components/ui';
import { TextReveal, ScrollReveal, AnimatedItem } from '@/components/animations';
import { careerOpportunities } from '@/components/company-data';
import JobApplicationForm from '@/components/JobApplicationForm';
import { MapPin, Clock, Briefcase, ArrowRight, Star, Users, Coffee } from 'lucide-react';
import { useState } from 'react';

export default function CareersPage() {
    const [selectedRole, setSelectedRole] = useState<string>('');

    const scrollToForm = (roleId: string) => {
        setSelectedRole(roleId);
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-[#020617] text-white min-h-screen">
            {/* Background Noise - Global */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            {/* Hero Section */}
            <ParallaxSection
                imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop" // Team collaboration image
                className="h-[60vh]"
                overlayOpacity={0.85}
            >
                <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-md">
                            We are hiring
                        </span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                        <TextReveal text="Build the Future" by="word" />
                        <br />
                        <TextReveal text="With Us." className="text-brand-accent" delay={0.3} />
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Join a team of visionaries, engineers, and creators building the next generation of enterprise technology.
                    </p>
                </div>
            </ParallaxSection>

            {/* Culture / Benefits Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Kaycore?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                We believe in fostering an environment where innovation thrives and people grow.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Star className="w-8 h-8 text-yellow-400" />,
                                title: "Impactful Work",
                                desc: "Work on mission-critical projects for Fortune 500 clients that touch millions of users."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-blue-400" />,
                                title: "World-Class Team",
                                desc: "Collaborate with and learn from some of the best engineers and designers in the industry."
                            },
                            {
                                icon: <Coffee className="w-8 h-8 text-emerald-400" />,
                                title: "Flexibility & Wellness",
                                desc: "Remote-first culture, flexible hours, and comprehensive health benefits for you and your family."
                            }
                        ].map((item, i) => (
                            <AnimatedItem key={i} delay={i * 0.1} variant="slide-up">
                                <TiltCard className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </TiltCard>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

            {/* Open Positions & Application Form */}
            <section className="py-24 relative z-10" id="jobs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Job Listings Column */}
                        <div>
                            <ScrollReveal>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-brand-accent rounded-full" />
                                    Open Positions
                                </h2>
                            </ScrollReveal>

                            <div className="space-y-6">
                                {careerOpportunities.map((job) => (
                                    <AnimatedItem key={job.id} variant="fade-scale">
                                        <div
                                            onClick={() => scrollToForm(job.id)}
                                            className={`group p-6 rounded-2xl border transition-all cursor-pointer ${selectedRole === job.id
                                                ? 'bg-brand-accent/10 border-brand-accent/50 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                                        {job.title}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-400">
                                                        <span className="flex items-center gap-1.5">
                                                            <Briefcase className="w-4 h-4" /> {job.department}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <MapPin className="w-4 h-4" /> {job.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <Clock className="w-4 h-4" /> {job.type}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={`p-2 rounded-full border transition-colors ${selectedRole === job.id ? 'bg-brand-accent text-black border-brand-accent' : 'border-white/20 text-white/50 group-hover:border-brand-accent group-hover:text-brand-accent'}`}>
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                                {job.description}
                                            </p>
                                        </div>
                                    </AnimatedItem>
                                ))}
                            </div>
                        </div>

                        {/* Application Form Column */}
                        <div id="application-form" className="lg:sticky lg:top-24 h-fit">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -mt-10 -mr-10 pointer-events-none" />

                                <div className="relative z-10 mb-8">
                                    <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
                                    <p className="text-gray-400 text-sm">
                                        {selectedRole
                                            ? `Applying for: ${careerOpportunities.find(j => j.id === selectedRole)?.title}`
                                            : "Select a role from the list or submit a general application."
                                        }
                                    </p>
                                </div>

                                <div className="relative z-10">
                                    <JobApplicationForm
                                        defaultPosition={selectedRole}
                                        positions={careerOpportunities.map(j => ({ id: j.id, title: j.title }))}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
