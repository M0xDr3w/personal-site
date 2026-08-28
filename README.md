# Personal Site

A custom personal portfolio built with React 19, TypeScript, Vite, and Tailwind CSS.

## Features

- Refined dark design with bento-style project grid
- Data-driven content via `src/data/profile.ts`
- Sections: Hero, Work, About, Path, Contact
- Live demo + source links for featured projects

## Tech Stack

- React 19 + TypeScript
- Vite 8 (with React plugin and Tailwind 4 via @tailwindcss/vite)
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
npm run preview
```

## Customization

Edit `src/data/profile.ts` to update bio, experience, projects, and links. Each project supports optional `demoUrl` and `repoUrl` fields.

## Deploy

### Vercel (recommended)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Vite is auto-detected — deploys on push

### Netlify

```bash
npm run build
# Drag `dist/` to https://app.netlify.com/drop
```

## License

MIT — see [LICENSE](LICENSE).
