import { profile } from "../data/profile";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          Where I've been
        </h2>

        <div className="relative mt-12 space-y-0">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border md:left-[11px]" />

          {profile.experience.map((job, i) => (
            <article
              key={job.company}
              className="relative grid gap-4 pb-12 pl-8 md:grid-cols-[200px_1fr] md:gap-10 md:pl-12"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-accent bg-surface md:left-1" />

              <div>
                <p className="text-sm font-medium text-accent">{job.period}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
                <p className="mt-1 text-muted">{job.company}</p>
                <p className="mt-4 leading-relaxed text-muted">{job.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}