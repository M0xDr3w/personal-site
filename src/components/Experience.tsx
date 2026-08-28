import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

export function Experience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="path"
      ref={ref}
      className="reveal border-t border-border px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Path
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          Where I've been
        </h2>

        <div className="mt-12 space-y-10">
          {profile.experience.map((item, idx) => (
            <div key={item.title} className="relative pl-6">
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent" />
              {idx < profile.experience.length - 1 && (
                <div className="absolute bottom-0 left-[3px] top-4 w-px bg-border" />
              )}

              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
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
