import { useState } from "react";
import { profile } from "../data/profile";

function EldenRollButton() {
  const [rolled, setRolled] = useState(false);
  const [stamina, setStamina] = useState(100);

  const doRoll = () => {
    if (stamina <= 15) {
      setRolled(true);
      setTimeout(() => {
        setRolled(false);
        setStamina(100);
      }, 1300);
      return;
    }
    setStamina((s) => Math.max(8, s - 32));
    setRolled(true);
    setTimeout(() => setRolled(false), 480);
  };

  return (
    <div className="mt-6">
      <button
        onClick={doRoll}
        className={`group inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition active:scale-[0.985] ${rolled ? "border-red-500/60 bg-red-950/30 text-red-400" : "border-border bg-surface text-muted hover:border-accent/60 hover:text-accent"}`}
      >
        <span className="font-mono text-[10px] opacity-60">STAMINA</span>
        <span className="font-semibold tabular-nums">{stamina}</span>
        <span className="text-accent/70 group-hover:text-accent">↻ Roll</span>
      </button>
      {rolled && stamina < 35 && (
        <div className="mt-2 text-[10px] tracking-wide text-red-400/90">* i-frames * nice dodge.</div>
      )}
    </div>
  );
}

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
          {featured.map((project) => {
            const isElden = project.title === "Elden Volt";
            const isInternal = project.link?.startsWith("#") || project.link?.startsWith("/");

            return (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-accent/40"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-glow opacity-0 blur-2xl transition group-hover:opacity-100" />

                {isElden && (
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-0.5 text-[10px] font-semibold tracking-[1px] text-accent">
                    PLAYABLE IN BROWSER
                  </div>
                )}

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

                {isElden && <EldenRollButton />}

                {project.link && (
                  <a
                    href={project.link}
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:gap-2"
                  >
                    {isElden ? "Play prototype →" : "View project →"}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
