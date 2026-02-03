"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationDuration?: number;
}

export default function GradientText({
    children,
    className = "",
    colors = ["#00c950", "#00aaff", "#8b5cf6", "#00c950"],
    animationDuration = 5,
}: GradientTextProps) {
    const gradientColors = colors.join(", ");

    return (
        <motion.span
            className={`inline-block bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
                backgroundSize: "300% 100%",
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: animationDuration,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {children}
        </motion.span>
    );
}
