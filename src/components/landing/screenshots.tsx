import Image from "next/image"

const screens = [
  {
    src: "/images/onboarding-screenshot.png",
    alt: "Онбординг в SlapTask с голосовым вводом",
    label: "Онбординг",
  },
  {
    src: "/images/home-screenshot.png",
    alt: "Интерфейс ежедневных задач SlapTask",
    label: "Задачи на день",
  },
  {
    src: "/images/settings-screenshot.png",
    alt: "Настройки SlapTask и конфигурация целей",
    label: "Настройки",
  },
]

export function Screenshots() {
  return (
    <section id="screenshots" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 font-mono text-xs font-light tracking-[0.25em] text-primary uppercase">
            Скриншоты
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Чисто. Темно. Сосредоточенно.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {screens.map((screen) => (
            <div key={screen.label} className="flex flex-col items-center gap-4">
              <div className="group relative w-full max-w-70">
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