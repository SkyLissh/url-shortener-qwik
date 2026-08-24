# Qwik URL Shortener ⚡

A bleeding-edge **URL shortener** built with **Qwik + QwikCity**, a typed **tRPC** API, and **Drizzle + Vercel Postgres**. Edge-ready and fully type-safe from the schema to the client.

> **Stack:** Qwik · QwikCity (Vercel Edge) · tRPC · superjson · Drizzle ORM · Vercel Postgres · Zod · Tailwind

## Why this project

I wanted to go deep on the **edge-compute, resumability** end of the frontend ecosystem. Qwik is resumable by design (no hydration cost), and with tRPC + Drizzle you get an end-to-end typed pipeline: one schema shapes the DB, the Zod validation, *and* the client calls. No drift, no runtime guesswork.

## Highlights

- **Qwik + QwikCity** — resumable SSR on the **Vercel Edge** runtime; near-instant cold starts.
- **tRPC + superjson** — a fully typed procedure layer. The `[trpc]/` route handles the API; client and server share the same type contract.
- **Drizzle ORM + Vercel Postgres** — a typed schema (`db/schema/url.ts`) with migrations (`db/migrate.ts`) and a `plugin@db` route for Drizzle's session.
- **Zod** — schema-first validation shared between the API and the form (`schemas/url-form.ts`).
- **@modular-forms/qwik** — forms with type-safe field validation and submit handling.
- **Resumable interactions** — a `clipboard` component + tooltip for copy-to-clipboard, a service worker, and a sensible 404.
- **Tailwind + tailwind-variants** — styling with reusable variants.

## Architecture

```
src/
├── routes/
│   ├── [url]/index.ts      # redirect endpoint
│   ├── trpc/[trpc]/index.ts # tRPC procedures
│   ├── plugin@db.ts        # Drizzle session
│   └── index.tsx / layout / 404
├── server/                 # tRPC context, actions
├── db/                     # schema + migrations + client
├── schemas/                # Zod models (url, url-form)
└── components/             # input, clipboard, tooltip, square, button
```

## Getting started

```bash
pnpm install
pnpm dev        # locally
# deploy: Vercel (edge), attach a Postgres database and run drizzle-kit migrate
```

Requires Node 20+. Deploys to the Vercel Edge runtime with a Postgres DB.

## What it demonstrates

- Resumable edge-first frameworks (Qwik) and Vercel Edge
- End-to-end typed full-stack: Drizzle schema · tRPC · Zod
- Type-safe forms and clean, component-based UI

---

*Built by [Alisson "SkyLissh" Hernandez] — TypeScript, full-stack, and edge compute. This is a personal portfolio project.*
