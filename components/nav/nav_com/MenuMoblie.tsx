"use client"

import { SettingsIcon } from "@/components/ui/SettingsIcon"
import { menuLink } from "@/utils/links"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const MenuMobile = () => {
    const pathname = usePathname()

    const allItems = [
        ...menuLink,
        { path: "/setting", name: "Setting", icon: null },
    ]

    return (
        <nav className="flex justify-around items-end px-2 pt-2 pb-1">
            {allItems.map((item) => {
                const isActive =
                    item.path === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.path)

                const Icon = item.icon

                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={cn(
                            "relative flex flex-col items-center flex-1 py-1 transition-colors duration-200",
                            isActive
                                ? "text-foreground"
                                : "text-muted-foreground"
                        )}
                    >
                        {/* Animated active dot indicator */}
                        {isActive && (
                            <motion.span
                                layoutId="mobile-nav-dot"
                                className="absolute -top-1.5 w-5 h-1 rounded-full bg-linear-to-r from-[#00c950] to-[#00aaff]"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                        {Icon ? (
                            <Icon size={20} />
                        ) : (
                            <SettingsIcon size={20} />
                        )}
                        <span className="text-[10px] mt-0.5 font-medium">{item.name}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

export default MenuMobile
