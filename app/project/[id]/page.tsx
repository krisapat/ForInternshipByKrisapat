import { fetchProjectDetail, getData } from "@/actions/actions"
import { redirect } from "next/navigation"
import Image from "next/image"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import ProjectBreadcrumb from "@/components/project/ProjectBreadcrumb"
import { ProjectProps } from "@/utils/type"
import { Metadata } from "next"

// 1) ทำ dynamic metadata ตรงนี้
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
    const data = await getData();
    const { id } = await params
    const project = await fetchProjectDetail({ id })
    if (!project) redirect("/project")
    const { name, descriptionCard, descriptionDetail, image, demoLink } = project as ProjectProps

    return (
        <section>
            <ProjectBreadcrumb name={name} />
            <div className="group relative mt-6">
                <Card className="relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-lg 
          transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,201,80,0.3)] p-6">

                    <div className="absolute inset-0 bg-linear-to-r from-[#00c950]/20 to-[#00aaff]/20 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />

                    <div className="relative z-10 space-y-6">
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
                </Card>
            </div>
        </section>
    )
}
