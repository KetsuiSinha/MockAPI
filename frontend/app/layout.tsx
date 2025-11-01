import type { Metadata } from "next"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

export const metadata: Metadata = {
  title: "API Client",
  description: "Postman-like API testing UI built with Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full w-full">
            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
              {/* Sidebar Toggle Button */}
              <div className="border-b bg-white p-2 shadow-sm flex items-center">
                <SidebarTrigger />
                <span className="ml-2 font-medium text-gray-700">API Client</span>
              </div>

              {/* Page Content */}
              <div className="flex-1 overflow-auto">
                {children}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
