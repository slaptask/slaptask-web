import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-colored.svg"
            alt="SlapTask logo"
            width={24}
            height={20}
            className="h-5 w-auto"
          />
          <span className="font-mono text-xs font-light tracking-[0.2em] text-muted-foreground uppercase">
            SlapTask
          </span>
        </div>

        <p className="font-mono text-[10px] font-light tracking-[0.3em] text-muted-foreground/50 uppercase">
          Execution over planning
        </p>
      </div>
    </footer>
  )
}
