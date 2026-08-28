export const profile = {
  name: "Andrew Macdonald",
  firstName: "Andrew",
  lastName: "Macdonald",
  headline: "I build coding and AI tools — with roots in real estate and energy services.",
  location: "Newfoundland → relocating to Toronto",
  status: "Hiring: in-person product / solutions engineer, Toronto",
  email: "drewmax@spacetrendr.com",
  resume: "/Andrew-Macdonald-Resume.docx",
  resumeName: "Andrew-Macdonald-Resume.docx",
  proof: "Shipping TrendForge",

  about: [
    "I'm a hands-on builder who likes figuring things out and leaving things better than I found them. My path runs real estate → energy services → coding and AI work — and now I'm shipping side projects in public.",
    "Moving to Toronto for an in-office product or solutions engineering seat. Looking for a room of people I want to build with — plus curious users who care about useful tools.",
    "When I'm offline: climbing, fishing, and hiking — usually somewhere windy.",
  ],

  highlights: [
    { label: "Next", value: "Toronto, in-person" },
    { label: "Path", value: "Real estate → Energy services → Coding & AI" },
    { label: "Building in public", value: "TrendForge live" },
    { label: "Approach", value: "Local-first tools" },
  ],

  experience: [
    {
      title: "Real estate sales — Sutton & RE/MAX",
      description:
        "Independent practice in St. John’s at Sutton Group and RE/MAX Realty Specialists: Facebook ads, Google PPC, presentations, and negotiation. Outstanding sales award for more than $85,000 in commissions.",
      tags: ["Sales", "Negotiation", "Digital ads"],
    },
    {
      title: "Oil & gas / field ops",
      description:
        "Team lead at Evolved Industrial (Fort McMurray). MPD operator, promoted to night supervisor at Beyond Energy. Crew lead of 16 on a Pembina pipeline contract at Knights Spraying.",
      tags: ["Crew lead", "Safety", "Field ops"],
    },
    {
      title: "Coding & AI",
      description:
        "Shipping tools in public — real-time X analysis, local-first workflows, and agentic side projects. Learning fast and iterating in the open.",
      tags: ["TypeScript", "React", "Python", "AI tools"],
    },
  ],

  projects: [
    {
      title: "TrendForge",
      tagline: "Spot narratives before they go mainstream",
      description:
        "Helps you turn live X signals into unique content angles — without auto-posting.",
      tech: ["React", "TypeScript", "Vite", "Recharts", "Vercel"],
      demoUrl: "https://trendforge-opal.vercel.app",
      repoUrl: null,
      featured: true,
      bento: "large" as const,
    },
    {
      title: "Grok DOOM",
      tagline: "Browser arena FPS, DualSense-ready",
      description:
        "A single-file raycaster with combat feel, haptics, and a live boss fight.",
      tech: ["HTML", "Canvas", "WebHID", "Vercel"],
      demoUrl: "https://grokdoom.vercel.app",
      repoUrl: "https://github.com/M0xDr3w/grok-doom",
      featured: true,
      bento: "default" as const,
    },
    {
      title: "GrokSim",
      tagline: "Learn Grok Build by doing",
      description:
        "Lets you practice Grok Build workflows in a safe terminal simulator.",
      tech: ["React", "TypeScript", "Tailwind", "framer-motion"],
      demoUrl: null,
      repoUrl: "https://github.com/M0xDr3w/groksim",
      featured: true,
      bento: "default" as const,
    },
    {
      title: "MakerLog",
      tagline: "Keep build momentum visible",
      description: "Helps you log experiments and side projects so progress doesn't disappear.",
      tech: ["Python", "Streamlit", "SQLite"],
      demoUrl: null,
      repoUrl: null,
      featured: false,
      bento: "default" as const,
    },
    {
      title: "Regex Forge",
      tagline: "Say it in English, get a regex",
      description: "Turns a plain-English match description into a tested regex you can verify live.",
      tech: ["Next.js", "TypeScript", "xAI API"],
      demoUrl: null,
      repoUrl: null,
      featured: false,
      bento: "default" as const,
    },
  ],

  links: [
    { label: "GitHub", url: "https://github.com/M0xDr3w", icon: "github" as const },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/andrewmacstj",
      icon: "linkedin" as const,
    },
    {
      label: "Follow",
      url: "https://x.com/M0xDr3w",
      icon: "x" as const,
    },
  ],
} as const;
