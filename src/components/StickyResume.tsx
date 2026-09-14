import { profile } from "../data/profile";

export function StickyResume() {
  if (!profile.resume) return null;

  return (
    <a
      href={profile.resume}
      download={profile.resumeName}
      className="sticky-resume fixed z-50 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-surface/90 px-4 py-2.5 text-sm font-semibold text-accent shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:border-accent/60 hover:bg-accent hover:text-surface"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download CV
    </a>
  );
}
