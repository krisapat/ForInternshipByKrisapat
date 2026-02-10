"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import ProjectCard from "@/components/project/ProjectCard"
import { ProjectProps } from "@/utils/type"

import "swiper/css"
import "swiper/css/pagination"

interface LatestProjectsSectionProps {
    projects: ProjectProps[]
    isAdmin?: boolean
}

export default function LatestProjectsSection({ projects, isAdmin = false }: LatestProjectsSectionProps) {
    return (
        <section className="h-96 md:h-120">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1.2}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-primary",
                    bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10! h-full"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <ProjectCard project={project} isAdmin={isAdmin} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
