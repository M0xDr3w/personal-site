import { profile } from "../data/profile";

export function Interests() {
  const hasBooks = profile.books.length > 0;

  return (
    <section id="interests" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Interests
        </p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          When I'm not building
        </h2>

        <div className={`mt-10 grid gap-4 ${hasBooks ? "sm:grid-cols-2" : "max-w-md"}`}>
          {profile.interests.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card/50 p-5 transition hover:border-accent/30"
            >
              <div className="text-center">
                <span className="text-3xl" role="img" aria-label={item.title}>
                  {item.emoji}
                </span>
                <h3 className="mt-3 font-serif text-lg text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>

              {"activities" in item && item.activities && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {item.activities.map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {hasBooks && (
            <div className="rounded-xl border border-border bg-card/50 p-5 transition hover:border-accent/30">
              <div className="text-center">
                <span className="text-3xl" role="img" aria-label="Reading">
                  📚
                </span>
                <h3 className="mt-3 font-serif text-lg text-ink">Reading</h3>
                <p className="mt-1 text-sm text-muted">Apple Books favorites</p>
              </div>

              <ul className="mt-4 space-y-2">
                {profile.books.map((book) => (
                  <li
                    key={book}
                    className="rounded-lg border border-border/60 bg-surface/50 px-3 py-2 text-sm text-ink"
                  >
                    {book}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
