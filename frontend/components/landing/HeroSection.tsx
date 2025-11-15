"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, CheckCircle2, Zap, ShieldCheck } from "lucide-react";

export default function HeroPage() {
  const [prompt, setPrompt] = useState("");

  const examples = [
    "Create an e-commerce API with products, orders, and users",
    "Blog API with users, posts, and comments",
    "Task manager API with boards, lists, and tasks",
    "Fitness tracker API with workouts and progress logs",
  ];

  return (
    <section className="flex flex-col items-center text-foreground relative h-screen overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 blur-[250px] opacity-50 pointer-events-none">
        <div className="absolute top-10 right-32 w-[350px] h-[350px] rounded-full bg-primary/30" />
        <div className="absolute bottom-10 left-20 w-[300px] h-[300px] rounded-full bg-secondary/30" />
      </div>

      {/* Badge */}
      <div className="flex items-center gap-2 border border-border rounded-full p-1 pr-3 text-sm mt-6 hover:border-primary transition">
        <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-mono">
          NEW
        </span>
        <span className="flex items-center gap-2">
          GET-only endpoints now available
          <svg width="6" height="9" stroke="currentColor" fill="none">
            <path d="m1 1 4 3.5L1 8" strokeWidth="1.5" />
          </svg>
        </span>
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl md:text-6xl mt-4 font-bold max-w-3xl">
        Generate Mock APIs from Natural Language
      </h1>

      {/* Subtitle */}
      <p className="text-center text-base max-w-md mt-2 text-muted-foreground">
        Create realistic REST APIs instantly. Just describe what you need, and let AI handle the rest.
      </p>

{/* Example Prompts */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 max-w-2xl w-full">
  {examples.map((ex, i) => (
    <Button
      key={i}
      variant="outline"
      className="text-left h-auto py-3 px-4 whitespace-normal break-words border-border text-muted-foreground hover:text-foreground"
      onClick={() => setPrompt(ex)}
    >
      {ex}
    </Button>
  ))}
</div>

{/* Input Section */}
<div className="bg-card max-w-2xl w-full rounded-xl p-4 mt-4 border border-border shadow-lg">
  <Textarea
    rows={4}
    className="bg-transparent text-foreground placeholder:text-muted-foreground"
    placeholder='Try: "Create a blog API with users, posts, and comments"'
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
  />

  <Button className="mt-3 ml-auto flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 active:scale-95">
    <Wand2 className="w-4 h-4" />
    Generate API
  </Button>
</div>

{/* Trust Badges */}
<div className="flex flex-wrap items-center justify-center gap-10 mt-4 opacity-80 font-mono text-sm">
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-5 h-5 text-primary" />
    No Setup Required
  </div>

  <div className="flex items-center gap-2">
    <Zap className="w-5 h-5 text-primary" />
    Instant Generation
  </div>

  <div className="flex items-center gap-2">
    <ShieldCheck className="w-5 h-5 text-primary" />
    Production-Ready
  </div>
</div>
    </section>
  );
}
  