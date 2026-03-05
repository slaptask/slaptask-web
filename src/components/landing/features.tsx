import { Brain, Flame, Target, Mic } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "ИИ-задачи",
    description:
      "ИИ создает персонализированные ежедневные челленджи, основанные на ваших целях, чтобы выходить из зоны комфорта.",
  },
  {
    icon: Flame,
    title: "Режим «Без жалости»",
    description:
      "Задачи специально разработаны так, чтобы быть неудобными. В этом вся суть. Рост происходит за пределами зоны комфорта.",
  },
  {
    icon: Target,
    title: "Отслеживание целей",
    description:
      "Установите цели и наблюдайте, как ИИ адаптирует задачи. Каждый вызов приближает вас к результату.",
  },
  {
    icon: Mic,
    title: "Голосовой ввод",
    description:
      "Проговаривайте свои цели, а не печатайте их. Записывайте свои амбиции, а ИИ возьмет всё остальное на себя.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-light tracking-[0.25em] text-primary uppercase">
            Почему SlapTask
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ваша зона комфорта —
            <br />
            это тюрьма.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-surface-elevated sm:p-10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}