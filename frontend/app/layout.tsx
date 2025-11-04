import type { Metadata } from "next"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import ClientLayout from "@/components/ClientLayout"

export const metadata: Metadata = {
  title: "API Client",
  description: "Postman-like API testing UI built with Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
        <SidebarProvider>
          <div className="flex h-screen w-full">
            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content Area handled by client component */}
            <ClientLayout>{children}</ClientLayout>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
