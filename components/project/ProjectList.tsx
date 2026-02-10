import AnimatedCard from "../animations/AnimatedCard"
import ProjectCard from "./ProjectCard"
import { ProjectProps } from "@/utils/type"

interface ProjectListProps {
  project: ProjectProps[]
  isAdmin?: boolean
}

const ProjectList = ({ project, isAdmin = false }: ProjectListProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {project.map((item, index) => (
        <AnimatedCard key={item.id} index={index}>
          <ProjectCard project={item} isAdmin={isAdmin} />
        </AnimatedCard>
      ))}
    </section>
  )
}

export default ProjectList
