import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>
          © {year} {profile.name}. Built with taste.
        </p>
        <p className="font-serif italic text-accent/80">
          Less LinkedIn. More me.
        </p>
      </div>
    </footer>
  );
}