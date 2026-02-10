"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { menuLink } from "@/utils/links"
import { motion } from "motion/react"

const Menu = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-1">
      {menuLink.map((item) => {
        const isActive =
          item.path === "/"
            ? pathname === "/"
            : pathname.startsWith(item.path)

        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Animated pill background for active link */}
            {isActive && (
              <motion.span
                layoutId="navbar-pill"
                className="absolute inset-0 rounded-full bg-black/6 dark:bg-white/10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default Menu
