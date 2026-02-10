import { fetchProject } from "@/actions/actions"
import ScrollTicker from "@/components/animations/ScrollTicker"
import MagneticLinkButton from "@/components/animations/MagneticLinkButton"
import ContactSection from "@/components/home/ContactSection"
import HeroSection from "@/components/home/HeroSection"
import LatestProjectsSection from "@/components/home/LatestProjectsSection"
import Reorder from "@/components/home/Reorder"
import { ProjectProps } from "@/utils/type"
import { currentUser } from "@clerk/nextjs/server"
import { Metadata } from "next"
import Image from "next/image"
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"

export const metadata: Metadata = {
  title: "Krisapat Portfolio | Home",
  description: "Krisapat Portfolio Home Page",
};

const headImages = [
  "/img/head/head1.png",
  "/img/head/head2.png",
  "/img/head/head3.png",
  "/img/head/head4.png",
]

const Page = async () => {
  const [project, user] = await Promise.all([
    fetchProject(),
    currentUser().catch(() => null),
  ]) as [ProjectProps[], Awaited<ReturnType<typeof currentUser>>]

  const isAdmin = user?.privateMetadata?.isAdmin === true
  const latest5 = project.slice(0, 5);
  const images = latest5.map(p => p.image);

  return (
    <main>
      {/* hero section with ParticleBackground + MagneticButtons */}
      <HeroSection />
      <section className="-mx-5">
        <FadeUpWhenVisible>
          <ScrollTicker
            items={images.map((img, index) => (
              <div
                key={index}
                className="
                ml-5 my-5 rounded-lg p-px
                bg-white/70 
                dark:bg-gray-800/60
              "
              >
                <Image
                  src={img}
                  alt={`latest-${index}`}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="object-cover rounded-lg transition-shadow hover:shadow-xl duration-300"
                />
              </div>
            ))}
            speedFactor={10}
          />
        </FadeUpWhenVisible >
      </section>
      <section className="mt-10 py-10 flex flex-col space-y-4">
        <FadeUpWhenVisible>
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            ตัวอย่างโปรเจค
          </h2>
        </FadeUpWhenVisible>
        <FadeUpWhenVisible>
          <LatestProjectsSection projects={latest5} isAdmin={isAdmin} />
        </FadeUpWhenVisible>
        <div className="mx-auto">
          <MagneticLinkButton href="/project">
            ดูโปรเจคทั้งหมด
          </MagneticLinkButton>
        </div>

      </section>
      <FadeUpWhenVisible>
        <section className="mt-10 flex flex-col space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            ช่องทางการติดต่อ
          </h2>
          <ContactSection />
        </section>
      </FadeUpWhenVisible>
      <FadeUpWhenVisible>
        <section className="mt-10">
          <Reorder images={headImages} />
        </section>
      </FadeUpWhenVisible>
    </main>
  )
}
export default Page