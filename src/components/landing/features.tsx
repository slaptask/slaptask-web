import { Brain, Flame, Target, Mic } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Generated Tasks",
    description:
      "Based on your goals, AI creates personalized daily challenges that push you beyond comfort.",
  },
  {
    icon: Flame,
    title: "No Mercy Mode",
    description:
      "Tasks are designed to be uncomfortable. That's the point. Growth lives outside your comfort zone.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set your goals and watch AI adapt your tasks over time. Every challenge moves you closer.",
  },
  {
    icon: Mic,
    title: "Voice Input",
    description:
      "Speak your goals, don't type them. Record your ambitions and let AI do the rest.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-light tracking-[0.25em] text-primary uppercase">
            Why SlapTask
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Your comfort zone
            <br />
            is a prison.
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
