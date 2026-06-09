# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Next.js 16** (App Router) on **React 19**. The APIs differ from older versions — consult `node_modules/next/dist/docs/` (esp. `01-app/`) before writing framework code, per AGENTS.md.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config, eslint-config-next)
```

There is no test suite.

## What this is

A single-page marketing/landing site (in Spanish) for the **La Cresta de la Ola 2026** prophetic conference in Costa Rica, plus a standalone registration page. The only backend is a registration endpoint that pushes attendees into Mailchimp.

## Architecture

- **One page, many section components.** [app/page.tsx](app/page.tsx) renders [components/LandingPage.tsx](components/LandingPage.tsx), which composes the page from section components (`Hero`, `Vision`, `Gallery`, `WhoWeAre`, `OurHeart`, `Conference`, `PreConference`, `JoinRemnant`, `Footer`). Add/reorder sections here.
- **Registration flow.** A modal ([components/RegistrationModal.tsx](components/RegistrationModal.tsx)) and the dedicated `/registro` route both render the same [components/RegistrationForm.tsx](components/RegistrationForm.tsx). The form validates client-side and POSTs `{ nombre, email, telefono }` to [app/api/register/route.ts](app/api/register/route.ts), which upserts the member into Mailchimp and tags them `Cresta de la Ola Attendees`.
- **Modal open state via context.** [components/RegisterContext.tsx](components/RegisterContext.tsx) exposes `useRegister()` — a callback that opens the registration modal. `LandingPage` provides it; any section's "register" button calls it. Don't thread `setOpen` through props.
- **API fails silently by design.** `/api/register` always returns `{ success: true }` even when Mailchimp env vars are missing or the upstream call fails (errors are only `console.error`'d). The form likewise completes its success UX regardless of the fetch outcome. Preserve this — the conference registration UX must never show an error to the attendee.

## Styling conventions

- **Global CSS, not CSS modules or utility classes.** All styling lives in [app/globals.css](app/globals.css): design tokens (`:root` custom properties for the ink/gold palette, fonts, spacing) plus hand-written BEM-ish class names (`.hero__title`, `.conf__card`, `.modal__form`, etc.). Components use plain `className` strings against these. Tailwind v4 is installed and `@import "tailwindcss"` is present, but the codebase does **not** use utility classes — match the existing global-CSS pattern.
- **Fonts** are loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx) (Oswald = display, Mulish = body, Lora = serif) and consumed through the `--display`/`--body`/`--serif` CSS variables. `<html lang="es">` — content is Spanish.
- **Scroll reveal animations.** [hooks/useReveal.ts](hooks/useReveal.ts) returns a ref; elements with the `.reveal` class (and optional `.d1`–`.d4` delay classes) fade/slide in when scrolled into view. Most section components attach this. There's a 2.6s fallback that force-reveals everything so content is never permanently hidden.

## Notes

- Env vars (`MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX`, `NEXT_PUBLIC_GOOGLE_MAPS_KEY`) live in `.env.local`.
- [email-templates/registro-confirmacion.html](email-templates/registro-confirmacion.html) is a standalone confirmation email template (not wired into the app — managed in Mailchimp).
- Gallery images are static files under `public/gallery/`.
</content>
</invoke>
