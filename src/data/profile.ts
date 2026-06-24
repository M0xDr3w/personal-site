export const profile = {
  name: "Andrew MacDonald",
  headline: "Builder · Problem-solver · Maker of cool things",
  location: "Newfoundland, Canada",
  status: "Open to new opportunities",
  email: "your.email@example.com", // ← update this
  about: [
    "I'm Andrew — someone who likes getting hands-on, figuring things out, and building stuff that actually works. Whether it's on a job site, in a spreadsheet, or behind a keyboard, I care about doing the work well and leaving things better than I found them.",
    "Outside of work I've been tinkering with code — game prototypes, Python scripts, whatever catches my interest. This site is my corner of the internet: less corporate résumé, more me.",
  ],
  highlights: [
    { label: "Years building", value: "10+" },
    { label: "Industries", value: "3+" },
    { label: "Side projects", value: "Always cooking" },
    { label: "Coffee tolerance", value: "Legendary" },
  ],
  experience: [
    {
      company: "Oil & Gas / Field Operations",
      role: "Field Technician",
      period: "2023 — Present",
      description:
        "Hands-on work in demanding environments — safety-first mindset, reliable under pressure, and comfortable with the physical + procedural side of complex operations.",
      tags: ["Safety", "Operations", "Teamwork"],
    },
    {
      company: "Real Estate",
      role: "Sales & Client Relations",
      period: "2014 — 2020",
      description:
        "Helped buyers and sellers navigate one of life's biggest decisions. Negotiation, market knowledge, and building trust with people from all walks of life.",
      tags: ["Sales", "Negotiation", "Client service"],
    },
    {
      company: "Various roles",
      role: "Adaptable generalist",
      period: "Ongoing",
      description:
        "From hospitality to trades-adjacent work — I've picked up skills fast, shown up consistently, and learned that attitude and reliability go further than any single credential.",
      tags: ["Adaptability", "Work ethic", "Learning fast"],
    },
  ],
  projects: [
    {
      title: "This website",
      subtitle: "Custom personal profile",
      description:
        "A LinkedIn-alternative that's actually mine — custom design, my story, my projects. Built with React, TypeScript, and Tailwind.",
      tech: ["React", "TypeScript", "Vite", "Tailwind"],
      link: null,
      featured: true,
    },
    {
      title: "Your next project",
      subtitle: "Collaboration welcome",
      description:
        "Building something interesting? I'm always down to chat ideas, contribute, or pair on prototypes. Reach out.",
      tech: ["Let's talk"],
      link: "#contact",
      featured: false,
    },
  ],
  skills: {
    "Hands-on": ["Field operations", "Safety protocols", "Troubleshooting", "Physical stamina"],
    "People": ["Client relations", "Negotiation", "Clear communication", "Reliability"],
    "Tech (learning)": ["Python", "JavaScript", "Rust", "React", "Streamlit"],
    "Other": ["Real estate", "Project planning", "Quick learner", "Detail-oriented"],
  },
  links: [
    { label: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
    { label: "Email", url: "mailto:your.email@example.com", icon: "mail" },
  ],
} as const;