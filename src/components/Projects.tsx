import { profile } from "../data/profile";

export function Projects() {
  const featured = profile.projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Projects
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          Cool stuff I've made
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-accent/40"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-glow opacity-0 blur-2xl transition group-hover:opacity-100" />

              <p className="text-sm font-medium text-accent">{project.subtitle}</p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{project.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:gap-2"
                >
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}