"use client"

import Link from "next/link"
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import MagneticButton from "@/components/animations/MagneticButton"
import GlassCard from "@/components/ui/GlassCard"

const AdminSection = () => {
  return (
    <GlassCard>
      <div className="space-y-6">
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="bg-[#00c950]/10 p-3 rounded-xl">
            <Shield className="text-[#00c950]" size={20} />
          </div>
          <div>
            <CardTitle>Admin Panel</CardTitle>
            <p className="text-sm text-muted-foreground">
              Access administrative tools
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <MagneticButton magneticStrength={0.3} className="w-full">
            <Button
              asChild
              className="w-full bg-[#00c950] hover:bg-[#00b850] text-white font-medium
              shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
            >
              <Link href="/setting/addproject">Add Projects</Link>
            </Button>
          </MagneticButton>
        </CardContent>
      </div>
    </GlassCard>
  )
}

export default AdminSection
