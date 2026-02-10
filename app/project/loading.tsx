import ProjectSkeleton from "@/components/project/ProjectSkeleton"

export default function Loading() {
  return (
    <main>
      <div className="h-10 w-64 mx-auto mb-4 rounded-lg bg-muted animate-pulse" />
      <ProjectSkeleton />
    </main>
  )
}
