export const profile = {
  name: "Andrew Macdonald",
  avatar: "./andrew-avatar.jpg",
  firstName: "Andrew",
  lastName: "Macdonald",
  headline: "I build software and AI tools, and share the work as I go.",
  location: "Grand Valley, Ontario",
  status: "Building in public · Grand Valley, ON",
  email: "drewmax@spacetrendr.com",
  resume: "./Andrew-Macdonald-Resume.pdf",
  resumeName: "Andrew-Macdonald-Resume.pdf",
  proof: "Right now: Operator Goods and TrendForge",

  about: [
    "I'm a hands-on builder. I like figuring things out and leaving things better than I found them. I started in real estate, spent years in oil and gas field work, and now I write code and build AI tools — shipping projects in the open.",
    "I work from Grand Valley, Ontario. Two things I'm focused on: Operator Goods (workwear and desk gear, plus a weekly blog on using AI agents) and TrendForge (tools that read live conversation on X and help turn it into useful writing).",
    "When I'm offline: climbing, fishing, and hiking — usually somewhere windy.",
  ],

  books: [
    {
      title: "An Astronaut's Guide to Life on Earth",
      author: "Chris Hadfield",
      cover: "./books/astronauts-guide.jpg",
    },
    {
      title: "The Checklist Manifesto",
      author: "Atul Gawande",
      cover: "./books/checklist-manifesto.jpg",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel with Blake Masters",
      cover: "./books/zero-to-one.jpg",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "./books/the-alchemist.jpg",
    },
    {
      title: "Jab, Jab, Jab, Right Hook",
      author: "Gary Vaynerchuk",
      cover: "./books/jab-jab-jab-right-hook.jpg",
    },
    {
      title: "Vagabonding",
      author: "Rolf Potts",
      cover: "./books/vagabonding.jpg",
    },
    {
      title: "The Art of Doing Science and Engineering",
      author: "Richard Hamming",
      cover: "./books/art-of-doing-science.jpg",
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      cover: "./books/how-to-win-friends.jpg",
    },
    {
      title: "How to Read a Book",
      author: "Mortimer J. Adler & Charles Van Doren",
      cover: "./books/how-to-read-a-book.jpg",
    },
    {
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      cover: "./books/four-agreements.jpg",
    },
  ],

  experience: [
    {
      title: "Real estate sales — Sutton & RE/MAX",
      description:
        "Ran my own practice in St. John's with Sutton Group and RE/MAX. Handled Facebook and Google ads, client presentations, and deals. Won an outstanding sales award for more than $85,000 in commissions.",
      tags: ["Sales", "Negotiation", "Digital ads"],
    },
    {
      title: "Oil and gas field work",
      description:
        "Team lead at Evolved Industrial in Fort McMurray. Worked as an MPD operator, then night supervisor at Beyond Energy. Later led a crew of 16 on a Pembina pipeline contract at Knights Spraying.",
      tags: ["Crew lead", "Safety", "Field ops"],
    },
    {
      title: "Software and AI",
      description:
        "Building Operator Goods (a small store with a notes blog) and TrendForge (a live app that watches X and helps draft content with AI). I work in short loops: pick the job, do the work, then review what shipped.",
      tags: ["TypeScript", "React", "Python", "AI tools"],
    },
  ],

  projects: [
    {
      title: "Operator Goods",
      tagline: "Workwear and desk gear for independent operators",
      description:
        "A shop for operator apparel and desk gear, with a notes blog about working with AI agents and a short lexicon of terms I use day to day. Domain is live at operatorgoods.com — product sourcing is still underway before the store fully opens.",
      tech: ["Vite", "React", "TypeScript", "Hydrogen React", "Tailwind"],
      demoUrl: "https://operatorgoods.com",
      repoUrl: null,
      featured: true,
      bento: "large" as const,
    },
    {
      title: "TrendForge",
      tagline: "Read the conversation. Draft a better angle.",
      description:
        "A live web app that watches real-time conversation on X, reads the mood, and uses AI to help you draft fresh writing. Open the radar and try the writing tools online.",
      tech: ["React", "TypeScript", "Vite", "Recharts", "Vercel"],
      demoUrl: "https://trendforge-opal.vercel.app",
      repoUrl: null,
      featured: true,
      bento: "large" as const,
    },
    {
      title: "Grok DOOM",
      tagline: "Browser arena shooter with DualSense support",
      description:
        "A single-file raycaster game with combat feel, controller haptics, and a live boss fight you can play in the browser.",
      tech: ["HTML", "Canvas", "WebHID", "Vercel"],
      demoUrl: "https://grokdoom.vercel.app",
      repoUrl: "https://github.com/M0xDr3w/grok-doom",
      featured: true,
      bento: "default" as const,
    },
    {
      title: "GrokSim",
      tagline: "Practice Grok Build without the risk",
      description:
        "An interactive cheat sheet and safe terminal simulator for learning Grok Build workflows by doing.",
      tech: ["React", "TypeScript", "Tailwind", "framer-motion"],
      demoUrl: "https://groksim.vercel.app",
      repoUrl: "https://github.com/M0xDr3w/groksim",
      featured: true,
      bento: "default" as const,
    },
    {
      title: "MakerLog",
      tagline: "A simple log for what you actually built",
      description:
        "A local tracker for experiments and side projects. Log what you worked on, how long it took, and pull recent git commits into entries. Runs on Streamlit and SQLite.",
      tech: ["Python", "Streamlit", "SQLite"],
      demoUrl: null,
      repoUrl: "https://github.com/M0xDr3w/makerlog",
      featured: true,
      bento: "default" as const,
    },
    {
      title: "Notes",
      tagline: "Weekly writing on working with AI agents",
      description:
        "A weekly blog about working with AI agents — what holds up in practice, where judgment still matters, and how to keep the loop honest. Public link coming soon.",
      tech: ["Vite", "React", "MDX"],
      demoUrl: null,
      repoUrl: null,
      featured: true,
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
    {
      label: "Starlink",
      url: "https://www.starlink.com?referral=RC-DF-10071628-84752-97",
      icon: "starlink" as const,
    },
  ],
} as const;
