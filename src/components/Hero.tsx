import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </div>

        <h1 className="animate-fade-up stagger-1 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-7xl">
          Hi, I'm{" "}
          <span className="gradient-text italic">{profile.firstName}</span>
          <br />
          {profile.lastName}.
        </h1>

        <p className="animate-fade-up stagger-2 mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.headline}
        </p>

        <p className="animate-fade-up stagger-3 mt-3 text-sm text-muted/70">
          {profile.location}
        </p>

        <p className="animate-fade-up stagger-4 mt-4 text-sm font-medium text-accent/90">
          {profile.proof}
        </p>

        <div className="animate-fade-up stagger-5 mt-10 flex flex-wrap gap-4">
          {profile.resume && (
            <a
              href={profile.resume}
              download={profile.resumeName}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-dim"
            >
              Download resume
            </a>
          )}
          <a
            href="#work"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/50 hover:text-accent"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/50 hover:text-accent"
          >
            Say hello
          </a>
        </div>
      </div>
    </section>
  );
}
