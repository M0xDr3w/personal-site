import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal border-b border-border px-6 py-16 md:py-20 lg:sticky lg:top-[4.25rem] lg:self-start lg:border-b-0 lg:border-r lg:px-8 lg:py-24"
    >
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

      {profile.books.length > 0 && (
        <div className="mt-10">
          <h3 className="font-serif text-xl text-ink">Favorite books</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {profile.books.map((book) => (
              <li
                key={`${book.title}-${book.author}`}
                className="flex min-w-0 gap-3 rounded-xl border border-border/70 bg-card/60 p-2.5 sm:p-3"
              >
                <img
                  src={book.cover}
                  alt=""
                  width={48}
                  height={72}
                  loading="lazy"
                  className="h-16 w-11 shrink-0 rounded object-cover shadow-sm sm:h-[4.5rem] sm:w-12"
                />
                <div className="min-w-0 self-center">
                  <p className="text-sm font-medium leading-snug text-ink">{book.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{book.author}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
