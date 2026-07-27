import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-4xl text-center text-sm text-muted md:text-left">
        <p>© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
