import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal border-t border-border px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          About
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          A bit about me
        </h2>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted md:text-lg">
          {profile.about.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
