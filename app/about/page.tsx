import Stack from "@/components/about/Stack"
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import TypingHeader from "@/components/animations/TypingHeader"
import ContactSection from "@/components/home/ContactSection"
import { stacks } from "@/utils/stack"
import { words } from "@/utils/words"
import { Metadata } from "next"
import Image from "next/image"
import TiltCard from "@/components/animations/TiltCard"
export const metadata: Metadata = {
  title: "Krisapat Portfolio | About",
  description: "Krisapat Portfolio About Page",
};
const About = async () => {
  return (
    <main className="space-y-10">
      <FadeUpWhenVisible>
        <h1 className="font-extrabold text-3xl text-center text-primary mb-4">
          About Me
        </h1>
      </FadeUpWhenVisible>
      <div className="w-full max-w-5xl mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="w-full flex justify-center">
          <TiltCard tiltAmount={10} className="h-full">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/img/about/image.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          </TiltCard>
        </div>

        {/* Right Content */}
        <div className="w-full space-y-4">
          <TypingHeader
            className="text-2xl md:text-3xl text-center md:text-left"
            words={words}
          />
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            ผมชื่อนายกฤศภัท ศรีลาแสง ชื่นชอบการทำเว็บไซต์ให้ออกมาสวยงามและตอบสนองการใช้งานได้ดี เพราะเชื่อว่าการทำให้ผู้ใช้งานเว็บไซต์ได้รับประสบการณ์ใช้งานที่ดีและใช้งาน
            จะช่วยเพิ่มโอกาสทางธุรกิจได้<br />
            กำลังศึกษาอยู่ที่สถาบันเทคโนโลยีพระจอมเกล้าคุณทหาร ลาดกระบัง<br /><br />
            ความสนใจในสายงาน : สนใจในการทำ Frontend Development กำลังพัฒนาสกิลการทำอนิเมชั่นที่หน้าเว็บให้เก่งมากขึ้นเพราะเชื่อว่าการตอบสนองที่ลื่นและมีประติสัมพันธ์กับผู้ใช้จะช่วยเพิ่มประสบการณ์การใช้งานที่ดีได้
          </p>
        </div>
      </div>
      <div>
        <FadeUpWhenVisible>
          <h2 className="text-2xl md:text-3xl text-center mb-4">
            Stacks ที่เคยใช้
          </h2>
        </FadeUpWhenVisible>
        <Stack skills={stacks} />
      </div>
      <section className="flex flex-col space-y-4 mb-4">
        <h2 className="text-2xl md:text-3xl text-center">
          ช่องทางการติดต่อ
        </h2>
        <ContactSection />
      </section>
    </main>
  )
}
export default About