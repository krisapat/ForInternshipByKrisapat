import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="space-y-10">
      {/* Title skeleton */}
      <div className="h-10 w-48 mx-auto rounded-lg bg-muted animate-pulse" />

      {/* Profile + Text section */}
      <div className="w-full max-w-5xl mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <Skeleton className="w-64 h-64 md:w-80 md:h-80 rounded-xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>

      {/* Stacks skeleton */}
      <div>
        <div className="h-8 w-48 mx-auto mb-4 rounded-lg bg-muted animate-pulse" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton className="w-16 h-16 rounded-lg" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
