import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface GlassCardProps {
    children: React.ReactNode
    className?: string
    /** Additional classes on the outer group wrapper */
    wrapperClassName?: string
}

/**
 * Reusable glassmorphism card with gradient hover overlay.
 * Replaces the repeated pattern across settings, project, and contact cards.
 */
export default function GlassCard({ children, className, wrapperClassName }: GlassCardProps) {
    return (
        <div className={cn("group relative", wrapperClassName)}>
            <Card
                className={cn(
                    "relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-lg",
                    "transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,201,80,0.3)]",
                    className
                )}
            >
                {/* Gradient hover overlay */}
                <div
                    className="absolute inset-0 bg-linear-to-r from-[#00c950]/20 to-[#00aaff]/20
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
                <div className="relative z-10">{children}</div>
            </Card>
        </div>
    )
}
