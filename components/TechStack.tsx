'use client';

import Image from 'next/image';

const technologies = [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
];

export default function TechStack() {
    return (
        <section className="py-12 bg-background border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <h2 className="text-2xl font-bold text-white">Our Technology Stack</h2>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-8 md:gap-16 items-center">
                    {/* First set of icons */}
                    {technologies.map((tech, idx) => (
                        <div key={`tech-1-${idx}`} className="flex flex-col items-center gap-2 mx-4 group">
                            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transform group-hover:scale-110">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {technologies.map((tech, idx) => (
                        <div key={`tech-2-${idx}`} className="flex flex-col items-center gap-2 mx-4 group">
                            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transform group-hover:scale-110">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 md:gap-16 items-center">
                    {/* This second container creates the seamless effect if CSS animation is set up correctly, 
              but usually with Tailwind 'animate-marquee' we just need one long strip duplicated 
              or handled via CSS keyframes. 
              Let's stick to a simpler single-track animation provided by globals.css or just add inline styles if needed.
              Actually, best practice for Tailwind marquee is a custom animation in tailwind.config.
              For now, I'll rely on the standard double-list approach in a single flex container.
          */}
                </div>
            </div>
        </section>
    );
}
