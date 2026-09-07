export const profile = {
  name: "Andrew Macdonald",
  firstName: "Andrew",
  lastName: "Macdonald",
  headline: "Building in public — coding and AI tools.",
  location: "Grand Valley, Ontario",
  status: "Building in public · Grand Valley, ON",
  email: "drewmax@spacetrendr.com",
  resume: "./Andrew-Macdonald-Resume.pdf",
  resumeName: "Andrew-Macdonald-Resume.pdf",
  proof: "Building Operator Goods · TrendForge in production",

  about: [
    "I'm a hands-on builder who likes figuring things out and leaving things better than I found them. My path runs real estate → energy services → coding and AI work — and now I'm shipping side projects in public.",
    "Building in public from Grand Valley, Ontario. Current focus: Operator Goods (operator apparel + desk gear; Notes blog + Lexicon) and TrendForge (production radar + forge under a spend cap).",
    "When I'm offline: climbing, fishing, and hiking — usually somewhere windy.",
  ],

  highlights: [
    { label: "Now", value: "Building in public · Grand Valley, ON" },
    { label: "Building in public", value: "Operator Goods + TrendForge" },
    { label: "Loops", value: "Assign → Execute → Review" },
    { label: "Path", value: "Real estate → Energy services → Coding & AI" },
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
        "Operator Goods (Vite/React storefront using Hydrogen React patterns) with a Notes blog and a Lexicon; TrendForge in production (real X ingest under a spend cap; MVP one radar + forge). Working in operator loops — Assign → Execute → Review.",
      tags: ["TypeScript", "React", "Python", "AI tools"],
    },
  ],

  projects: [
    {
      title: "Operator Goods",
      tagline: "Independent operator apparel + desk gear",
      description:
        "Vite/React storefront following Hydrogen React patterns. Includes a Notes blog (field notes on AI agency / operator loops) and a Lexicon defining Call, Gate, Scaffold, Charter, Taste, and Judgment. Shopify link in progress; local catalog works.",
      tech: ["Vite", "React", "TypeScript", "Hydrogen React", "Tailwind"],
      demoUrl: null,
      repoUrl: null,
      featured: true,
      bento: "large" as const,
    },
    {
      title: "TrendForge",
      tagline: "Spot narratives before they go mainstream",
      description:
        "Production app (under a spend cap): turn live X signals into unique angles. MVP: one radar + forge (copy-paste thread).",
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
