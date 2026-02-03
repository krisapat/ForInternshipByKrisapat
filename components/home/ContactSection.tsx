"use client";

import { Mail, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import TiltCard from "@/components/animations/TiltCard";

export default function ContactSection() {
  return (
    <section>
      <div className="mx-auto max-w-md md:max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gmail */}
        <TiltCard tiltAmount={10} className="h-full">
          <Card
            className="
              py-0 group relative overflow-hidden rounded-xl backdrop-blur 
              bg-white/70 dark:bg-gray-800/60 shadow-lg transition-all duration-300
              hover:shadow-[0_0_18px_rgba(0,201,80,0.35)] h-full
            "
          >
            {/* Hover Gradient Overlay */}
            <div
              className="
                absolute inset-0 bg-linear-to-r from-[#00c950]/15 to-[#00aaff]/15 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
              "
            />

            <a
              href="mailto:kronalyst@gmail.com"
              className="relative z-10 flex items-center gap-4 p-5"
            >
              <div
                className="
                  w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-linear-to-r from-[#00c950] to-[#00aaff] text-white shadow-md
                "
              >
                <Mail className="w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Gmail
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  kronalyst@gmail.com
                </span>
              </div>
            </a>
          </Card>
        </TiltCard>

        {/* GitHub */}
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
              href="https://github.com/krisapat"
              target="_blank"
              className="relative z-10 flex items-center gap-4 p-5"
            >
              <div
                className="
                  w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-linear-to-r from-[#00c950] to-[#00aaff] text-white shadow-md
                "
              >
                <Github className="w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  GitHub
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  github.com/krisapat
                </span>
              </div>
            </a>
          </Card>
        </TiltCard>
      </div>
    </section>
  );
}
