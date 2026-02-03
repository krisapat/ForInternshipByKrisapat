"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import MagneticButton from "@/components/animations/MagneticButton"

const AdminSection = () => {
  return (
    <div className="group relative">
      <Card
        className="relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-lg 
        transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,201,80,0.3)]"
      >
        <div
          className="absolute inset-0 bg-linear-to-r from-[#00c950]/20 to-[#00aaff]/20 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
        <div className="relative z-10 space-y-6">
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
      </Card>
    </div>
  )
}

export default AdminSection
