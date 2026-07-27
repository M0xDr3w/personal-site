import { profile } from "../data/profile";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          What I'm building
        </h2>

        <div className="mt-12 space-y-10">
          {profile.experience.map((job, idx) => (
            <div key={job.company} className="relative pl-6">
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent" />
              {idx < profile.experience.length - 1 && (
                <div className="absolute bottom-0 left-[3px] top-4 w-px bg-border" />
              )}

              <p className="text-sm text-muted">{job.period}</p>
              <h3 className="mt-1 font-serif text-xl text-ink">
                {job.role}
                <span className="text-muted"> · {job.company}</span>
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                {job.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
