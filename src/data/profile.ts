export const profile = {
  name: "Andrew Macdonald",
  firstName: "Andrew",
  lastName: "Macdonald",
  headline: "I build useful things — on job sites, in markets, and behind a keyboard.",
  location: "Born in Newfoundland, Canada",
  status: "Open to new opportunities",
  email: "drewmax@spacetrendr.com",
  resume: null as string | null,

  about: [
    "I'm a hands-on builder who likes figuring things out and leaving things better than I found them. My background runs from oilfield MPD work to RE/MAX real estate — and now I'm shipping side projects in public.",
    "Right now I'm focused on TrendForge (live X trend radar + content forge) and the local-first Forge Suite. Learning fast, building in the open, and having fun with it.",
  ],

  highlights: [
    { label: "Years building", value: "10+" },
    { label: "Industries", value: "Oil & Gas → Real Estate → Tech" },
    { label: "Real estate peak", value: "$85k+ commissions" },
    { label: "Current path", value: "Field ops to code" },
  ],

  experience: [
    {
      company: "Oil & Gas / Field Operations",
      role: "Field Technician",
      period: "2023 — Present",
      description:
        "MPD operations — vessels, manifolds, rigging, crew coordination. Safety-first mindset with JSAs and field hazard assessments.",
      tags: ["MPD", "Safety", "Rigging", "Crew work"],
    },
    {
      company: "RE/MAX",
      role: "Real Estate Sales",
      period: "2014 — 2020",
      description:
        "Lead gen, client presentations, and negotiations. Built trust with buyers and sellers across Newfoundland.",
      tags: ["Sales", "Negotiation", "Marketing"],
    },
    {
      company: "Contract & generalist work",
      role: "Adaptable generalist",
      period: "Ongoing",
      description:
        "Trades-adjacent and oilfield contract roles. Show up, learn fast, solve problems — attitude beats credentials.",
      tags: ["Adaptability", "Reliability", "Quick learner"],
    },
  ],

  projects: [
    {
      title: "TrendForge",
      tagline: "Real-time X trend radar + content forge",
      description:
        "Live X signals, narrative clusters, and human-gated angle forging (Grok or local LLM). Export MD + JSON. No auto-post.",
      tech: ["React", "TypeScript", "Vite", "Recharts", "Vercel"],
      demoUrl: "https://trendforge-opal.vercel.app",
      repoUrl: "https://github.com/M0xDr3w/trendforge",
      featured: true,
      bento: "large" as const,
    },
    {
      title: "GrokSim",
      tagline: "Grok Build simulator",
      description:
        "Interactive cheat sheet and terminal simulator for Grok Build — slash commands, shortcuts, skills, and MCP servers in one place.",
      tech: ["React", "TypeScript", "Tailwind", "framer-motion"],
      demoUrl: null,
      repoUrl: "https://github.com/M0xDr3w/groksim",
      featured: true,
      bento: "default" as const,
    },
    {
      title: "MakerLog",
      tagline: "Build tracker",
      description: "Local-first logger for experiments and side projects. Charts, streaks, CSV export.",
      tech: ["Python", "Streamlit", "SQLite"],
      demoUrl: null,
      repoUrl: "https://github.com/M0xDr3w/makerlog",
      featured: false,
      bento: "default" as const,
    },
    {
      title: "Regex Forge",
      tagline: "Plain English → regex",
      description: "Describe a pattern in words, get a tested regex back. Live tester with instant highlighting.",
      tech: ["Next.js", "TypeScript", "xAI API"],
      demoUrl: null,
      repoUrl: "https://github.com/M0xDr3w/regex-forge",
      featured: false,
      bento: "default" as const,
    },
  ],

  interests: [
    {
      title: "Outdoors",
      emoji: "🏔️",
      description: "Crags, rivers, and trails — usually somewhere windy.",
      activities: ["Climbing", "Fishing", "Hiking"],
    },
  ],

  books: [] as string[],

  links: [
    { label: "GitHub", url: "https://github.com/M0xDr3w", icon: "github" as const },
    {
      label: "",
      url: "https://x.com/M0xDr3w",
      icon: "x" as const,
      badge: "/heart.svg",
    },
  ],
} as const;
