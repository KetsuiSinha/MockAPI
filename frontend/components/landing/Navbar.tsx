"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function NavPage() {
  return (
    <nav className="h-[70px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-background text-foreground border-b border-border/50 backdrop-blur">
      <Link href="/" className="font-semibold text-lg tracking-tight">
        DevTool
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        <Link href="#" className="hover:text-primary transition-colors">
          Examples
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          API
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Docs
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Pricing
        </Link>
      </div>

      {/* CTA */}
      <Button className="hidden md:inline-flex rounded-full px-6">
        Sign in
      </Button>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="size-7" />
        </SheetTrigger>

        <SheetContent side="left" className="bg-background text-foreground">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-5 mt-6 text-base">
            <Link href="#" className="hover:text-primary transition-colors">
              Examples
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              API
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Pricing
            </Link>

            <Button className="rounded-full mt-4 px-6 w-fit">
              Sign in
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
