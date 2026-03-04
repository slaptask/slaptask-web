"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!glowRef.current) return
      const rect = glowRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      glowRef.current.style.setProperty("--glow-x", `${x}px`)
      glowRef.current.style.setProperty("--glow-y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section
      ref={glowRef}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-20"
      style={{
        background:
          "radial-gradient(ellipse 600px 400px at var(--glow-x, 50%) var(--glow-y, 40%), rgba(232, 85, 45, 0.06), transparent 70%)",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,85,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,85,45,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <div className="mb-8 flex items-center gap-3 rounded-full border border-border/60 bg-surface-elevated/50 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[11px] font-light tracking-[0.2em] text-muted-foreground uppercase">
            Beta Available Now
          </span>
        </div>

        <h1 className="text-balance text-5xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Stop planning.
          <br />
          <span className="text-primary">Start doing.</span>
        </h1>

        <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          AI generates daily challenges based on your goals.
          No excuses. No mercy. Just execution.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex items-center rounded-xl bg-primary px-8 py-4 font-mono text-sm font-medium tracking-[0.1em] text-primary-foreground uppercase transition-all hover:opacity-90"
          >
            Try SlapTask Free
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 font-mono text-sm font-light tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            How it works
          </a>
        </div>

        <p className="mt-6 font-mono text-[11px] font-light tracking-[0.25em] text-muted-foreground/60 uppercase">
          Execution over planning
        </p>
      </div>

      <div className="relative z-10 mt-16 w-full max-w-xs sm:mt-20">
        <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/5">
          <Image
            src="/images/home-screenshot.png"
            alt="SlapTask app interface showing daily tasks"
            width={400}
            height={800}
            className="w-full"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
