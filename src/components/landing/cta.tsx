export function CTA() {
  return (
    <section id="cta" className="px-6 py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-12 text-center sm:p-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(232,85,45,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(232,85,45,0.04)_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <p className="font-mono text-xs font-light tracking-[0.25em] text-primary uppercase">
            Хватит откладывать
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Готовы получить «пощёчину»
            <br />
            для продуктивности?
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground">
            Присоединяйтесь к бета-тестированию, и пусть ИИ выведет вас за пределы возможностей. 
            Это бесплатно. Единственная цена — ваш комфорт.
          </p>
          <a
            href="https://slaptask.app"
            className="mt-4 inline-flex items-center rounded-xl bg-primary px-10 py-4 font-mono text-sm font-medium tracking-widest text-primary-foreground uppercase transition-all hover:opacity-90"
          >
            Начать сейчас
          </a>
          <p className="mt-2 font-mono text-[10px] font-light tracking-[0.3em] text-muted-foreground/50 uppercase">
            Бесплатно во время бета-версии
          </p>
        </div>
      </div>
    </section>
  )
}