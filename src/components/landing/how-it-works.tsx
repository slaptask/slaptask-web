const steps = [
  {
    number: "01",
    title: "Set your goals",
    description: "Tell AI what you want to achieve. Voice or text, your choice.",
  },
  {
    number: "02",
    title: "Get slapped",
    description: "Every day, AI generates tough tasks tailored to your ambitions.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Complete your tasks. No excuses. The app tracks your streak.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 font-mono text-xs font-light tracking-[0.25em] text-primary uppercase">
            How it works
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Three steps to a better you
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-6">
              <span className="font-mono text-5xl font-extralight tracking-tight text-border sm:text-6xl">
                {step.number}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
