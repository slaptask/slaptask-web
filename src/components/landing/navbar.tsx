"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo-colored.svg"
            alt="SlapTask logo"
            width={32}
            height={27}
            className="h-7 w-auto"
          />
          <span className="font-mono text-sm font-light tracking-[0.2em] text-foreground uppercase">
            SlapTask
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-light tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 font-mono text-xs font-medium tracking-[0.1em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm font-light tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 font-mono text-xs font-medium tracking-[0.1em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
