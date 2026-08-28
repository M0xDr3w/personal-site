import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

function ProjectLinks({
  demoUrl,
  repoUrl,
}: {
  demoUrl: string | null;
  repoUrl: string | null;
}) {
  if (!demoUrl && !repoUrl) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-surface transition hover:bg-accent-dim"
        >
          Try it live →
        </a>
      )}
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition hover:border-accent/40 hover:text-ink"
        >
          Source →
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const ref = useReveal<HTMLElement>();
  const featured = profile.projects.filter((p) => p.featured);
  const secondary = profile.projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      ref={ref}
      className="reveal border-t border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Work
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          Things I've been building
        </h2>

        <div className="bento-grid mt-12">
          {featured.map((project) => (
            <article
              key={project.title}
              className={`group rounded-2xl border border-border border-l-2 border-l-accent/50 bg-card p-6 md:p-8 transition hover:border-accent/30 hover:border-l-accent ${
                project.bento === "large" ? "bento-large" : ""
              }`}
            >
              <p className="text-sm font-medium text-accent">{project.tagline}</p>
              <h3 className="mt-1 font-serif text-2xl text-ink md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-prose leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
            </article>
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {secondary.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-border/60 bg-card/50 p-5 transition hover:border-border"
              >
                <h3 className="font-serif text-lg text-ink">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                <ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
