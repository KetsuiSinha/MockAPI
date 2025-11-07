"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import ChatPage from "@/components/ChatPage"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true) // open on page load

  return (
    <main className="flex-1 flex flex-col overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] p-2 shadow-sm">
  <div className="flex items-center">
    <SidebarTrigger />
    <span className="ml-2 font-medium">API Client</span>
  </div>
  <Button
    variant="default"
    onClick={() => setOpen(true)}
    className="text-sm font-medium bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]"
  >
    Generate API
  </Button>
</div>


      {/* Page content */}
      <div className="flex-1 overflow-auto">{children}</div>

      {/* Chat popup */}
      <ChatPage open={open} onClose={() => setOpen(false)} />
    </main>
  )
}
