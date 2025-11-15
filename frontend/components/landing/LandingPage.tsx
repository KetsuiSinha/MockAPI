"use client";

import NavPage from "@/components/landing/Navbar";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background text-foreground overflow-hidden">
      {/* Navbar */}
      <NavPage />

      {/* Page Content */}
      <div className="flex-1 flex flex-col items-center justify-start">
        {children}
      </div>
    </main>
  );
}
