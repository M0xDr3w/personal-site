import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal border-t border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-5xl">
          Let's talk
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Building in public from Grand Valley, Ontario. Happy to chat about projects, feedback, or just say hello.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block font-serif text-2xl text-accent transition hover:text-ink md:text-3xl"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
