import "./globals.css";
import Providers from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Mitr } from "next/font/google"


const mitr = Mitr({
  subsets: ["thai", "latin"], // โหลดทั้งไทยและอังกฤษ
  weight: ["300", "400", "500", "600", "700"], // เลือกน้ำหนักที่ต้องการ
  display: "swap",
})
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={`${mitr.className} scrollbar-none`}>
        <body>
          <Providers>
            <main className="relative pt-20 pb-20 sm:pb-5 px-5">
              {children}
              <div className="fixed top-0 left-0 -z-100 w-32 h-32 bg-linear-to-r from-[#00c950]/50 to-[#00aaff]/50 rounded-full blur-3xl pointer-events-none" />
              <div className="fixed bottom-0 right-0 -z-100 w-40 h-40 bg-linear-to-l from-[#00c950]/50 to-[#00aaff]/50 rounded-full blur-3xl pointer-events-none" />
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
