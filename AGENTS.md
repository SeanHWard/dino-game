# AGENTS.md

## Cursor Cloud specific instructions

This is a single-service **Next.js 14 (App Router, JavaScript)** app — a Chrome-style "Dino Game" that runs entirely client-side (canvas + `requestAnimationFrame`). There is no backend, database, or environment variables/secrets.

- Dependencies are installed automatically on VM startup via the update script (`npm ci`). No manual install needed.
- Run the dev server with `npm run dev` (serves on `http://localhost:3000`). Hot reload is enabled, so code changes are picked up without restarting.
- Standard scripts live in `package.json`: `dev`, `build`, `start`, `lint`.
- Lint (`npm run lint`) currently emits only `@next/next/no-img-element` warnings from `app/components/Navbar.js`; these are pre-existing and non-blocking.
- Game logic lives in `app/classes/` (`Player.js`, `Ground.js`, `Cactus.js`, `CactiController.js`, `Score.js`); the game is wired up in `app/page.jsx`. High score is persisted via browser `localStorage`, not a server.
