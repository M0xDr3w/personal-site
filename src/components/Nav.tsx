import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-surface/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-xl tracking-tight text-ink transition hover:text-accent"
        >
          AM
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/20 md:block"
          >
            Say hi
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="-mr-2 p-2 text-muted transition hover:text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-border/50 bg-surface/95 backdrop-blur-2xl md:hidden">
          <div className="mx-auto max-w-4xl px-6 py-6">
            <ul className="flex flex-col text-base">
              {links.map((link, index) => (
                <li key={link.href} className={index > 0 ? "border-t border-border/40" : ""}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3.5 text-muted transition hover:text-ink active:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 block w-full rounded-full border border-accent/30 bg-accent/10 py-3 text-center text-sm font-medium text-accent transition active:bg-accent/20"
            >
              Say hi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
