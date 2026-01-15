"use client";

import { useScroll, useTransform, motion } from "framer-motion";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
    imageUrl?: string;
    videoUrl?: string;
    alt?: string;
    children?: React.ReactNode;
    className?: string;
    overlayOpacity?: number;
    speed?: number;
}

export default function ParallaxSection({
    imageUrl,
    videoUrl,
    alt = "Background",
    children,
    className,
    overlayOpacity = 0.5,
    speed = 0.5,
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div
            ref={ref}
            className={cn(
                "relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900",
                className
            )}
        >
            <motion.div
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
                style={{ y }}
            >
                {videoUrl ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
                        className="w-full h-full object-cover"
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src={imageUrl || ""}
                        alt={alt}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
            </motion.div>

            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    );
}
