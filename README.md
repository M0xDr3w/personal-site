# Personal Site

A custom personal portfolio site built with React 19, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive design with modern UI (serif headings, subtle animations, glassmorphism effects)
- Data-driven content via `src/data/profile.ts`
- Sections: Hero, About, Experience, Projects, Skills, Contact
- Built with accessibility and performance in mind

## Tech Stack

- React 19 + TypeScript
- Vite (with React plugin and Tailwind 4 via @tailwindcss/vite)
- ESLint with TypeScript support

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

## Scripts

- `npm run dev` – Start dev server
- `npm run build` – Type check + production build
- `npm run lint` – Run ESLint
- `npm run preview` – Preview production build

## Customization

Edit `src/data/profile.ts` to update your bio, experience, projects, skills, and links.

The site is designed to be easily extended – add new components under `src/components/` and wire them into `App.tsx`.

## License

Personal use.
