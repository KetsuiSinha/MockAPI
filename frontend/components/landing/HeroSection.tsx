'use client'

import { useState } from 'react'

export default function HeroPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [prompt, setPrompt] = useState('')

  return (
    <section className="flex flex-col items-center bg-background text-foreground pb-20 relative min-h-screen">

      {/* Animated Background */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full blur-[300px]"
        width="1440"
        height="900"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)">
          <path
            d="M1279.12 651.482c-22 6.106-44 12.212-135.83 19.142..."
            stroke="hsl(var(--primary))"
            strokeWidth="130"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#b)">
          <path
            d="M984.952 466.869c-15.802 15.902-31.604 31.803..."
            stroke="hsl(var(--secondary))"
            strokeWidth="130"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Navigation */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b border-border bg-background/80">
        <a href="/" className="font-mono text-xl font-bold">
          <span className="text-primary">Mock</span>API
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="hover:text-muted-foreground transition">Products</a>
          <a href="#resources" className="hover:text-muted-foreground transition">Resources</a>
          <a href="#docs" className="hover:text-muted-foreground transition">Docs</a>
          <a href="#pricing" className="hover:text-muted-foreground transition">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 border border-primary rounded-md hover:bg-accent transition active:scale-95">
            Sign in
          </button>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition active:scale-95">
            Get started
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg width="26" height="26" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <a onClick={() => setMobileMenuOpen(false)} className="hover:text-muted-foreground transition">Products</a>
        <a onClick={() => setMobileMenuOpen(false)} className="hover:text-muted-foreground transition">Resources</a>
        <a onClick={() => setMobileMenuOpen(false)} className="hover:text-muted-foreground transition">Docs</a>
        <a onClick={() => setMobileMenuOpen(false)} className="hover:text-muted-foreground transition">Pricing</a>

        <button
          onClick={() => setMobileMenuOpen(false)}
          className="size-10 flex items-center justify-center bg-card hover:bg-accent rounded-md transition active:scale-95"
        >
          <svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Badge */}
      <a className="flex items-center gap-2 border border-border rounded-full p-1 pr-3 text-sm mt-20 hover:border-primary transition">
        <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-mono">
          NEW
        </span>
        <p className="flex items-center gap-2">
          <span>GET-only endpoints now available</span>
          <svg width="6" height="9" stroke="currentColor" fill="none">
            <path d="m1 1 4 3.5L1 8" strokeWidth="1.5" />
          </svg>
        </p>
      </a>

      {/* Title */}
      <h1 className="text-center text-4xl md:text-6xl mt-4 font-bold max-w-3xl">
        Generate Mock APIs from Natural Language
      </h1>

      <p className="text-center text-base max-w-md mt-2 text-muted-foreground">
        Create realistic REST APIs instantly. Just describe what you need, and let AI handle the rest.
      </p>

      {/* Prompt Input */}
      <div className="bg-card max-w-2xl w-full rounded-xl p-4 mt-10 border border-border shadow-lg">
        <textarea
          className="bg-transparent outline-none w-full resize-none text-foreground placeholder:text-muted-foreground"
          rows={4}
          placeholder='Try: "Create a blog API with users, posts, and comments"'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button className="mt-3 ml-auto flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-4 py-2 hover:opacity-90 active:scale-95 transition">
          <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="1.5">
            <path d="M8.28 12.916a1.67 1.67..." />
          </svg>
          Generate API
        </button>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 opacity-60">
        <div className="flex items-center gap-2 font-mono text-sm">
          <svg className="w-5 h-5 text-primary" fill="none" strokeWidth={2} stroke="currentColor">
            <path d="M5 13l4 4L19 7" />
          </svg>
          No Setup Required
        </div>

        <div className="flex items-center gap-2 font-mono text-sm">
          <svg className="w-5 h-5 text-primary" fill="none" strokeWidth={2} stroke="currentColor">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Instant Generation
        </div>

        <div className="flex items-center gap-2 font-mono text-sm">
          <svg className="w-5 h-5 text-primary" fill="none" strokeWidth={2} stroke="currentColor">
            <path d="M12 15v2m-6 4h12..." />
          </svg>
          Production-Ready
        </div>
      </div>

    </section>
  )
}
