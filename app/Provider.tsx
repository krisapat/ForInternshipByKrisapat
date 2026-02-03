import { ThemeProvider } from "@/components/darkmode/theme-provider"
import Navbar from "@/components/nav/Navbar"
import { Toaster } from "@/components/ui/sonner"
import PageTransition from "@/components/animations/PageTransition"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Navbar />
                <PageTransition>
                    {children}
                </PageTransition>
                <Toaster toastOptions={{
                    className: "kanitFont",
                }} />

            </ThemeProvider>
        </>
    )
}
export default Providers