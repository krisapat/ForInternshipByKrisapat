import { fetchProjectDetail } from "@/actions/actions"
import { redirect } from "next/navigation"
import Image from "next/image"
import { CardHeader, CardTitle } from "@/components/ui/card"
import ProjectBreadcrumb from "@/components/project/ProjectBreadcrumb"
import GlassCard from "@/components/ui/GlassCard"
import { ProjectProps } from "@/utils/type"
import { Metadata } from "next"

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
    const { id } = await params
    const project = await fetchProjectDetail({ id })
    const { name } = project as ProjectProps
    if (!project) {
        return {
            title: "Project Not Found",
            description: "This project does not exist.",
        }
    }

    return {
        title: `Krisapat Portfolio | ${name}`,
        description: `Krisapat Portfolio ${name} Page`,
    }
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const project = await fetchProjectDetail({ id })
    if (!project) redirect("/project")
    const { name, descriptionCard, descriptionDetail, image, demoLink } = project as ProjectProps

    return (
        <section>
            <ProjectBreadcrumb name={name} />
            <div className="mt-6">
                <GlassCard className="p-6">
                    <div className="space-y-6">
                        <CardHeader className="pb-2 px-0">
                            <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                {descriptionCard}
                            </p>
                        </CardHeader>

                        <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-md border bg-black/10">
                            <div className="relative aspect-video">
                                <Image src={image} alt={name} fill className="object-cover" />
                            </div>
                        </div>

                        <div className="text-base leading-relaxed whitespace-pre-line dark:text-gray-200 text-gray-800">
                            {descriptionDetail}
                        </div>

                        <div className="p-4 py-0 mt-auto">
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center rounded-lg px-4 py-2 font-medium 
                                bg-linear-to-r from-[#00c950] to-[#00aaff] text-white shadow-md hover:opacity-90 transition"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    )
}
