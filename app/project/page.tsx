import { fetchProject } from "@/actions/actions";
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import ProjectList from "@/components/project/ProjectList"
import ProjectSkeleton from "@/components/project/ProjectSkeleton";
import { ProjectProps } from "@/utils/type";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Krisapat Portfolio | Project",
  description: "Krisapat Portfolio Project Page",
};

const Project = async () => {
  const [project, user] = await Promise.all([
    fetchProject(),
    currentUser().catch(() => null),
  ]) as [ProjectProps[], Awaited<ReturnType<typeof currentUser>>]

  const isAdmin = user?.privateMetadata?.isAdmin === true

  if (project.length === 0) {
    return <p className="text-center text-gray-500">No projects available</p>
  }

  return (
    <main>
      <FadeUpWhenVisible>
        <h1 className="font-extrabold text-3xl text-center text-primary mb-4">
          Explore my projects
        </h1>
      </FadeUpWhenVisible>
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectList project={project} isAdmin={isAdmin} />
      </Suspense>
    </main>
  )
}

export default Project