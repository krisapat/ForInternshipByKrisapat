"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    magneticStrength?: number;
    magneticRadius?: number;
}

export default function MagneticButton({
    children,
    className = "",
    magneticStrength = 0.4,
    magneticRadius = 150,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < magneticRadius) {
            const strength = (1 - distance / magneticRadius) * magneticStrength;
            x.set(distanceX * strength);
            y.set(distanceY * strength);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
            }}
            className={`inline-block cursor-pointer ${className}`}
        >
            {children}
        </motion.div>
    );
}
