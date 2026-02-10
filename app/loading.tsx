"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-background z-9999">
      <div className="relative">
        <svg
          width="500"
          height="150"
          viewBox="0 0 500 150"
          className="w-full max-w-lg"
        >
          <defs>
            <linearGradient id="krisapatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00c950" />
              <stop offset="100%" stopColor="#00aaff" />
            </linearGradient>
          </defs>

          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-7xl font-bold tracking-tight"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              stroke: "url(#krisapatGradient)",
              strokeWidth: "1.5",
              strokeLinejoin: "round",
              strokeLinecap: "round",
              fill: "url(#krisapatGradient)",
            }}
            initial={{
              fillOpacity: 0,
              strokeDasharray: "1000",
              strokeDashoffset: "1000"
            }}
            animate={{
              fillOpacity: 1,
              strokeDashoffset: 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              fillOpacity: { delay: 0.3, duration: 1.2 },
              strokeDashoffset: { duration: 1.2 },
            }}
          >
            Loading
          </motion.text>
        </svg>

        <motion.div
          className="mx-auto mt-2 h-0.5 w-1/2 bg-linear-to-r from-[#00c950] to-[#00aaff]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }} // ปรับ delay ให้เร็วขึ้นตาม animation ตัวอักษร
        />
      </div>
    </div>
  );
}