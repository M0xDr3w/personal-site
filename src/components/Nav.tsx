import { SocialLinks } from "./SocialLinks";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-surface/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-4xl justify-center px-6 py-4" aria-label="Social links">
        <SocialLinks iconOnly className="justify-center" />
      </nav>
    </header>
  );
}
