import { profile } from "../data/profile";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <SocialLinks iconOnly className="justify-center" />
        <p className="text-sm text-muted">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
