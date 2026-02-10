"use client"

import Link from "next/link"
import Menu from "./nav_com/Menu"
import MenuMoblie from "./nav_com/MenuMoblie"
import NavThemeToggle from "./nav_com/NavThemeToggle"
import { SettingsIcon } from "../ui/SettingsIcon"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <>
      {/* Desktop Navbar — floating glassmorphism pill */}
      <motion.div
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden sm:block fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/70 dark:bg-neutral-900/70
            backdrop-blur-xl backdrop-saturate-150
            border border-black/8 dark:border-white/8
            shadow-lg shadow-black/4 dark:shadow-black/30"
        >
          {/* Logo */}
          <Link
            href="/"
            className="bg-linear-to-r from-[#00c950] to-[#00aaff] bg-clip-text text-transparent
              font-extrabold text-lg tracking-tight mr-2 whitespace-nowrap"
          >
            Krisapat
          </Link>

          {/* Nav Links */}
          <Menu />

          {/* Divider */}
          <div className="w-px h-5 bg-black/10 dark:bg-white/10 mx-1" />

          {/* Actions */}
          <NavThemeToggle />
          <Link
            href="/setting"
            className="flex items-center justify-center w-9 h-9 rounded-full
              hover:bg-black/5 dark:hover:bg-white/10
              transition-colors duration-200"
          >
            <SettingsIcon size={18} />
          </Link>
        </div>
      </motion.div>

      {/* Mobile Navbar — bottom glassmorphism bar */}
      <div
        className="sm:hidden fixed bottom-0 left-0 w-full z-50
          bg-white/70 dark:bg-neutral-900/70
          backdrop-blur-xl backdrop-saturate-150
          border-t border-black/6 dark:border-white/6"
      >
        <MenuMoblie />
      </div>
    </>
  )
}

export default Navbar
