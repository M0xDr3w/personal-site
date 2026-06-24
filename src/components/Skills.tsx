import { profile } from "../data/profile";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-card/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Skills
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          What I bring to the table
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink transition hover:border-accent/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}