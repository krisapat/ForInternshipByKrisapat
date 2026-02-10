import { Card } from "@/components/ui/card"
import TiltCard from "@/components/animations/TiltCard"
import { LucideIcon } from "lucide-react"

interface ContactCardProps {
    icon: LucideIcon
    label: string
    value: string
    href: string
    external?: boolean
}

export default function ContactCard({ icon: Icon, label, value, href, external = false }: ContactCardProps) {
    return (
        <TiltCard tiltAmount={10} className="h-full">
            <Card
                className="
          py-0 group relative overflow-hidden rounded-xl backdrop-blur 
          bg-white/70 dark:bg-gray-800/60 shadow-lg transition-all duration-300
          hover:shadow-[0_0_18px_rgba(0,201,80,0.35)] h-full
        "
            >
                <div
                    className="
            absolute inset-0 bg-linear-to-r from-[#00c950]/15 to-[#00aaff]/15 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
          "
                />

                <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="relative z-10 flex items-center gap-4 p-5"
                >
                    <div
                        className="
              w-12 h-12 flex items-center justify-center rounded-xl 
              bg-linear-to-r from-[#00c950] to-[#00aaff] text-white shadow-md
            "
                    >
                        <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                            {label}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-300">
                            {value}
                        </span>
                    </div>
                </a>
            </Card>
        </TiltCard>
    )
}
