import { createProjectAction } from "@/actions/actions"
import FormContainer from "@/components/Form/FormContainer"
import FormInput from "@/components/Form/FormInput"
import ImageInput from "@/components/Form/ImageInput"
import TextAreaInput from "@/components/Form/TextAreaInput"
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import GlassCard from "@/components/ui/GlassCard"
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import AddProjectBreadcrumb from "@/components/settings/settingsComponents/AddProjectBreadcrumb"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Krisapat Portfolio | Add Project",
  description: "Krisapat Portfolio Add Project Page",
};

const Addproject = async () => {
  const user = await currentUser()
  if (!user?.privateMetadata?.isAdmin) redirect("/")

  return (
    <>
      <AddProjectBreadcrumb />
      <FadeUpWhenVisible>
        <h1 className="font-extrabold text-xl md:text-3xl text-center text-primary">
          Add Project
        </h1>
      </FadeUpWhenVisible>
      <FadeUpWhenVisible>
        <section className="w-full max-w-2xl px-4 mt-6 mx-auto">
          <GlassCard>
            <div className="space-y-6">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="bg-[#00c950]/10 p-3 rounded-xl">
                  <Shield className="text-[#00c950]" size={20} />
                </div>
                <div>
                  <CardTitle>Add Project</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill in project details below
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                <FormContainer
                  action={createProjectAction}
                  className="flex flex-col space-y-5"
                  successMessage="Project Created Successfully"
                  failureMessage="Failed to Create Project"
                >
                  <FormInput
                    name="name"
                    label="Project Name"
                    type="text"
                    placeholder="Enter Project Name"
                    className="w-full space-y-2"
                  />
                  <TextAreaInput
                    name="descriptionCard"
                    Labeltext="Description on card"
                    defaultValue="Enter a description"
                  />
                  <TextAreaInput
                    name="descriptionDetail"
                    Labeltext="Description detail"
                    defaultValue="Enter a description"
                  />
                  <ImageInput className="space-y-2" />
                  <FormInput
                    name="demoLink"
                    label="Demo link"
                    type="text"
                    placeholder="Enter Demo Link"
                    className="w-full space-y-2"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#00c950] hover:bg-[#00b850] text-white font-medium
                    shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
                  >
                    Create Project
                  </Button>
                </FormContainer>
              </CardContent>
            </div>
          </GlassCard>
        </section>
      </FadeUpWhenVisible>
    </>
  )
}

export default Addproject
