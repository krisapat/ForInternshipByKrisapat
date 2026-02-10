"use client"

import { CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Darkmode } from "../darkmode/darkmode"
import { SunMoon } from "lucide-react"
import GlassCard from "@/components/ui/GlassCard"

const DarkmodeSection = () => {
  return (
    <GlassCard>
      <div className="space-y-6">
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="bg-[#00c950]/10 p-3 rounded-xl">
            <SunMoon className="text-[#00c950]" size={20} />
          </div>
          <div>
            <CardTitle>Appearance</CardTitle>
            <p className="text-sm text-muted-foreground">
              Customize light and dark mode
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <div className="pl-2">
            <Darkmode />
          </div>
        </CardContent>
      </div>
    </GlassCard>
  )
}

export default DarkmodeSection
