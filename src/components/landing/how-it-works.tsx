const steps = [
  {
    number: "01",
    title: "Поставьте цели",
    description: "Расскажите ИИ, чего хотите достичь. Голосом или текстом — решать вам.",
  },
  {
    number: "02",
    title: "Получите «пощёчину»",
    description: "Каждый день ИИ генерирует сложные задачи, адаптированные под ваши амбиции.",
  },
  {
    number: "03",
    title: "Выполняйте",
    description: "Выполняйте задачи. Никаких оправданий. Приложение отслеживает ваш прогресс.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 font-mono text-xs font-light tracking-[0.25em] text-primary uppercase">
            Как это работает
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Три шага к лучшей версии себя
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