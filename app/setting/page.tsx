import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import AddProjectSection from "@/components/settings/AddProjectSection"
import DarkmodeSection from "@/components/settings/DarkmodeSection"
import LoginSection from "@/components/settings/LoginSection"
import { currentUser } from "@clerk/nextjs/server"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: "Krisapat Portfolio | Setting",
    description: "Krisapat Portfolio Setting Page",
};
const SettingPage = async () => {
    const user = await currentUser()
    const isAdmin = user?.privateMetadata?.isAdmin === true
    return (
        <main>
            <FadeUpWhenVisible>
                <h1 className="font-extrabold text-xl md:text-3xl text-center text-primary">
                    Settings Panel
                </h1>
            </FadeUpWhenVisible>
            <div className="flex flex-col space-y-5 mt-5">
                <FadeUpWhenVisible>
                    <LoginSection />
                </FadeUpWhenVisible>
                <FadeUpWhenVisible>
                    <DarkmodeSection />
                </FadeUpWhenVisible>
                {isAdmin && (
                    <FadeUpWhenVisible>
                        <AddProjectSection />
                    </FadeUpWhenVisible>
                )}
            </div>
        </main>
    )
}
export default SettingPage