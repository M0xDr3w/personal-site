import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          About
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          The short version of me
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_280px]">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {profile.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-2xl font-semibold text-ink">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}