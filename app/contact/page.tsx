'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ClientContactForm from '@/components/ClientContactForm';
// import GlobalOffices from '@/components/GlobalOffices';
import {
  ScrollReveal,
  TextReveal,
  StaggerContainer,
  AnimatedItem
} from '@/components/animations';
import { MagneticButton, TiltCard, ParallaxSection } from '@/components/ui';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Share2,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  ArrowRight,
  Zap,
  Target,
  Handshake
} from 'lucide-react';

// Custom X (Twitter) Icon component since it's specific
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Contact() {
  return (
    <div className="bg-[#020617] text-white selection:bg-brand-accent/30">

      {/* Background Noise/Gradient - Global */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        className="h-[50vh] sm:h-[60vh]"
        overlayOpacity={0.8}
      >
        <div className="relative z-20 text-center space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            <TextReveal text="Get in Touch" by="word" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Tell us about your roadmap, blocker, or bold idea. We&apos;ll respond in one business day with next steps.
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Contact Section */}
      <section id="form" className="relative z-10 -mt-20 px-4 pb-20 pt-10 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1 pt-10 lg:pt-0">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-accent rounded-full inline-block" />
                Contact Info
              </h2>
            </ScrollReveal>
            <StaggerContainer className="space-y-4 sm:space-y-6">
              {[
                {
                  title: 'Phone',
                  icon: <Phone className="w-5 h-5 text-brand-accent" />,
                  content: (
                    <a
                      href="tel:+919219363387"
                      className="text-sm text-white hover:text-brand-accent transition-colors font-mono"
                    >
                      +91 9219363387
                    </a>
                  ),
                },
                {
                  title: 'Email',
                  icon: <Mail className="w-5 h-5 text-brand-accent" />,
                  content: (
                    <a
                      href="mailto:admin@kaycore.com"
                      className="text-sm text-white hover:text-brand-accent transition-colors font-mono"
                    >
                      admin@kaycore.com
                    </a>
                  ),
                },
                {
                  title: 'Business Hours',
                  icon: <Clock className="w-5 h-5 text-brand-accent" />,
                  content: (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Mon - Fri: 9:00 AM - 10:00 PM IST
                    </p>
                  ),
                }].map((item) => (
                  <AnimatedItem key={item.title} variant="fade-scale">
                    <TiltCard className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-5 shadow-lg hover:shadow-brand-accent/5 h-full group">
                      <div className="flex items-start gap-4">
                        <span className="p-2 bg-brand-accent/10 rounded-lg border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                          {item.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                          {item.content}
                        </div>
                      </div>
                    </TiltCard>
                  </AnimatedItem>
                ))}

              <AnimatedItem variant="fade-scale">
                <TiltCard className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-5 shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3 relative z-10">
                    <span className="p-2 bg-brand-accent/10 rounded-lg border border-brand-accent/20 flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-brand-accent" />
                    </span>
                    Follow Us
                  </h3>
                  <div className="flex gap-4 relative z-10">
                    {[
                      { icon: <XIcon className="w-5 h-5" />, href: 'https://x.com/kaycore', label: 'X (formerly Twitter)' },
                      { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/kaycore', label: 'LinkedIn' },
                      { icon: <Github className="w-5 h-5" />, href: 'https://github.com/kaycore', label: 'GitHub' },
                      { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/kaycore', label: 'Instagram' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-brand-accent hover:shadow-lg hover:shadow-brand-accent/30 transition-all border border-white/10 group"
                        title={social.label}
                      >
                        <span className="transform group-hover:scale-110 transition-transform duration-200">
                          {social.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </TiltCard>
              </AnimatedItem>
            </StaggerContainer>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden"
            >
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none -mt-40 -mr-40" />

              <div className="mb-8 relative z-10">
                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  Send us a Message
                  <ArrowRight className="w-6 h-6 text-brand-accent opacity-50" />
                </h2>
                <p className="text-gray-400">Fill out the form below and we will get back to you shortly.</p>
              </div>
              <div className="relative z-10">
                <ClientContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section (Parallax Divider) */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1600&h=900&fit=crop" // Business meeting
        className="py-24"
        overlayOpacity={0.9}
      >
        <div className="max-w-6xl mx-auto px-4 text-center relative z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-brand-accent">Why</span> Contact Kaycore?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                  <Zap className="w-8 h-8 text-brand-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                We respond to inquiries within 24 hours. Your time is valuable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                  <Target className="w-8 h-8 text-brand-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Direct access to solutions architects, not just sales reps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                  <Handshake className="w-8 h-8 text-brand-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Partnership</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                We view every engagement as a long-term partnership.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Global Offices (Disabled)
      <div className="bg-[#020617] border-t border-white/5">
        <GlobalOffices />
      </div> */}

    </div>
  );
}
