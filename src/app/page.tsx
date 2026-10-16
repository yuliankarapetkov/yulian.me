export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-6 py-8 sm:px-10">
      <header className="font-mono text-xs tracking-wide">
        <span className="font-bold">YULIAN</span>
        <span className="text-muted"> / ENGINEER</span>
      </header>

      <section className="flex flex-1 flex-col justify-center py-24">
        <p className="mb-6 font-mono text-xs tracking-widest text-muted">
          YULIAN KARAPETKOV / LEAD SOFTWARE ENGINEER
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          I build products
          <br />
          that{' '}
          <span className="decoration-accent underline decoration-4 underline-offset-8">
            actually ship.
          </span>
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
          Hands-on engineering across product architecture, full-stack
          development, and delivery.
        </p>
        <a
          href="mailto:hi@yulian.me"
          className="mt-8 inline-flex w-fit items-center gap-6 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="border-t border-foreground/15 pt-5 font-mono text-xs text-muted">
        BUILD. LEARN. CREATE. REPEAT.
      </footer>
    </main>
  );
}
