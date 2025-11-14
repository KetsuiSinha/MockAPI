"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sparkles, SendHorizonal } from "lucide-react"

export default function ChatPage({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [collectionName, setCollectionName] = useState("")
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)

  const suggestions = [
    "Generate a sign-in API with 10 users",
    "Create a CRUD API for products",
    "Build a weather forecast API",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000)) // simulate API delay
    setLoading(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-lg rounded-2xl bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] shadow-2xl
        animate-in fade-in-0 zoom-in-95 duration-200"
      >
        <DialogHeader className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--primary)] animate-pulse" />
            <DialogTitle className="text-xl font-semibold tracking-tight">
              API Generation Agent
            </DialogTitle>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] text-center max-w-sm">
            Describe the API you’d like me to build. You can also pick from smart suggestions below.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          {/* Collection name input */}
          <div className="space-y-1.5">
            <Label htmlFor="collectionName" className="text-sm font-medium text-[var(--foreground)]">
              Collection Name
            </Label>
            <Input
              id="collectionName"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              placeholder="e.g. Authentication Suite"
              className="bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]
              focus:ring-2 focus:ring-[var(--primary)] transition-all"
            />
          </div>

          {/* AI suggestions */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">AI Suggestions</Label>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <Button
                  key={i}
                  type="button"
                  variant="ghost"
                  onClick={() => setPrompt(s)}
                  className="text-sm border border-[var(--border)] rounded-full px-3 py-1.5
                  hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-all"
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>

          {/* Prompt text area */}
          <div className="space-y-1.5">
            <Label htmlFor="prompt" className="text-sm font-medium text-[var(--foreground)]">
              AI Instruction
            </Label>
            <div className="relative">
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your desired API in natural language..."
                className="min-h-[140px] resize-none bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] 
                placeholder:text-[var(--muted-foreground)] pr-12 focus:ring-2 focus:ring-[var(--primary)] transition-all"
              />
              <SendHorizonal
                className="absolute bottom-3 right-3 w-5 h-5 text-[var(--muted-foreground)] cursor-pointer hover:text-[var(--primary)] transition-colors"
                onClick={handleSubmit}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-4 flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className="w-full font-medium bg-[var(--primary)] text-[var(--primary-foreground)]
              hover:brightness-105 hover:opacity-90 transition-all rounded-xl"
            >
              {loading ? "Generating..." : "Generate API"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
