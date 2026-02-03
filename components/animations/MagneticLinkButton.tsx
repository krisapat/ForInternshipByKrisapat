"use client";

import MagneticButton from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface MagneticLinkButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
    magneticStrength?: number;
    variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
}

export default function MagneticLinkButton({
    href,
    children,
    className = "",
    magneticStrength = 0.3,
    variant = "default",
}: MagneticLinkButtonProps) {
    return (
        <MagneticButton magneticStrength={magneticStrength}>
            <Button
                asChild
                variant={variant}
                className={`text-white shadow-md transition-all hover:scale-105 hover:shadow-lg duration-300 ${className}`}
            >
                <Link href={href}>{children}</Link>
            </Button>
        </MagneticButton>
    );
}
