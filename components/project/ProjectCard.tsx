import Image from "next/image"
import Link from "next/link"
import DeleteToggleButton from "./DeleteToggleButton"
import GlassCard from "@/components/ui/GlassCard"
import { ProjectProps } from "@/utils/type"

interface ProjectCardProps {
  project: ProjectProps
  isAdmin?: boolean
}

const ProjectCard = ({ project, isAdmin = false }: ProjectCardProps) => {
  const { name, image, id, descriptionCard, demoLink } = project

  return (
    <GlassCard className="pt-0 h-full pb-4" wrapperClassName="h-full">
      <div className="flex flex-col h-full">
        <Link href={`/project/${id}`} className="flex-1">
          <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-103 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
          </div>

          <div className="p-4 flex flex-col space-y-2">
            <p className="text-md md:text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
              {name}
            </p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 line-clamp-2">
              {descriptionCard}
            </p>
          </div>
        </Link>

        <div className="px-4 mt-auto">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center rounded-lg px-4 py-2 font-medium 
            bg-linear-to-r from-[#00c950] to-[#00aaff] text-white shadow-md 
            hover:opacity-90 transition"
          >
            Demo
          </a>
        </div>

        {isAdmin && (
          <div className="absolute top-2 right-2 z-20">
            <DeleteToggleButton projectId={id} />
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export default ProjectCard
