import Image from "next/image"

const screens = [
  {
    src: "/images/onboarding-screenshot.png",
    alt: "SlapTask onboarding with voice input",
    label: "Onboarding",
  },
  {
    src: "/images/home-screenshot.png",
    alt: "SlapTask daily tasks interface",
    label: "Daily Tasks",
  },
  {
    src: "/images/settings-screenshot.png",
    alt: "SlapTask settings and goal configuration",
    label: "Settings",
  },
]

export function Screenshots() {
  return (
    <section id="screenshots" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 font-mono text-xs font-light tracking-[0.25em] text-primary uppercase">
            Screenshots
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Clean. Dark. Focused.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {screens.map((screen) => (
            <div key={screen.label} className="flex flex-col items-center gap-4">
              <div className="group relative w-full max-w-[280px]">
                <div className="absolute -inset-2 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={400}
                    height={800}
                    className="w-full"
                  />
                </div>
              </div>
              <span className="font-mono text-[11px] font-light tracking-[0.2em] text-muted-foreground uppercase">
                {screen.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
