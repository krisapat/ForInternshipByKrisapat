"use client";

import ParticleBackground from "@/components/animations/ParticleBackground";
import MagneticButton from "@/components/animations/MagneticButton";
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible";
import GradientText from "@/components/animations/GradientText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <FadeUpWhenVisible>
            <section
                className="relative min-h-screen w-[calc(100%+2.5rem)] -mx-5 -mt-24 pt-20 flex flex-col justify-center items-center text-center 
        bg-linear-to-b from-[#00c950]/20 via-[#00aaff]/10 to-transparent space-y-6 overflow-hidden"
            >
                {/* Particle Background */}
                <ParticleBackground
                    particleCount={60}
                    colors={["#00c950", "#00aaff", "#8b5cf6"]}
                    mouseRadius={120}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-6">
                    {/* Title */}
                    <h1 className="font-extrabold text-4xl md:text-6xl leading-tight">
                        Krisapat<br />
                        <GradientText
                            className="font-bold"
                            colors={["#00c950", "#00aaff", "#8b5cf6", "#00c950"]}
                            animationDuration={4}
                        >
                            Portfolio
                        </GradientText>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl">
                        Showcasing My Work, Skills, and Project
                    </p>

                    {/* Magnetic Buttons */}
                    <div className="flex gap-4">
                        <MagneticButton magneticStrength={0.3}>
                            <Button
                                asChild
                                className="text-white shadow-md transition-all hover:scale-105 hover:shadow-lg duration-300"
                            >
                                <Link href="/project">ดูโปรเจคทั้งหมด</Link>
                            </Button>
                        </MagneticButton>

                        <MagneticButton magneticStrength={0.3}>
                            <Button
                                asChild
                                className="text-white shadow-md transition-all hover:scale-105 hover:shadow-lg duration-300"
                            >
                                <Link href="/about">เกี่ยวกับ</Link>
                            </Button>
                        </MagneticButton>
                    </div>
                </div>
            </section>
        </FadeUpWhenVisible>
    );
}
