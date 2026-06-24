import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl animate-fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </div>

        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
          Hi, I'm{" "}
          <span className="italic text-accent">{profile.name.split(" ")[0]}</span>
          <br />
          MacDonald.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.headline}
        </p>

        <p className="mt-3 text-sm text-muted/80">{profile.location}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-dim"
          >
            See what I've built
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/50 hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}