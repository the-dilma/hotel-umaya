<p align="center">
  <img src="public/images/logo.png" alt="Hotel Umaya" width="360" />
</p>

<h1 align="center">Hotel Umaya — Wedding & Reception Hall Website</h1>

<p align="center">
  A responsive, animated showcase website for a Sri Lankan wedding and reception venue.
  <br />
  <strong>Live site:</strong> <a href="https://hotel-umaya.vercel.app">hotel-umaya.vercel.app</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Motion-animations-FF0055" alt="Motion" />
</p>

---

## About the project

Hotel Umaya is a wedding and reception hall. Bookings are made in person, so the website's job is to
give couples and families a feel for the venue — its halls, food, décor and past celebrations — and
make it effortless to call, message or visit.

The design takes its colours directly from the hotel's logo (crimson, charcoal, ivory and a touch of
gold) and pairs a flowing script typeface with an elegant serif to create a refined, wedding-worthy
feel.

## Features

- **Six pages** — Home, Our Halls, Weddings & Events, Menus & Packages, Gallery and Contact
- **Full-screen hero slider** with crossfading photos and a slow cinematic zoom
- **Scroll-reveal animations** on every section, built with Motion
- **Filterable photo gallery** with animated layout changes and a full-screen lightbox
  (keyboard arrows and Esc supported)
- **Tabbed sample menus** and package cards with a highlighted "most popular" tier
- **One-tap contact** — click-to-call, WhatsApp chat, email and Google Maps directions,
  plus an embedded map and visiting hours
- **Fully responsive** — animated mobile menu and layouts tuned for phones, tablets and desktops
- **Fast and SEO-friendly** — every page is statically prerendered, images are optimised with
  `next/image`, fonts are self-hosted with `next/font`, and each page has its own title and description
- **Accessible** — semantic HTML, labelled buttons, keyboard-friendly lightbox and
  `prefers-reduced-motion` support for the hero animation

## Tech stack

| Area        | Technology                                                        |
| ----------- | ----------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router, Cache Components)    |
| UI library  | [React 19](https://react.dev)                                     |
| Language    | [TypeScript](https://www.typescriptlang.org)                      |
| Styling     | [Tailwind CSS 4](https://tailwindcss.com) with a custom brand theme |
| Animation   | [Motion](https://motion.dev) (formerly Framer Motion) + CSS keyframes |
| Icons       | [Lucide](https://lucide.dev)                                      |
| Code quality| ESLint                                                            |

## Project structure

```
src/
├── app/                    # One folder per page (Next.js App Router)
│   ├── layout.tsx          # Shared layout: fonts, navbar, footer, SEO defaults
│   ├── globals.css         # Brand colours, fonts and animations (Tailwind theme)
│   ├── page.tsx            # Home
│   ├── halls/              # Our Halls
│   ├── weddings-events/    # Weddings & Events
│   ├── menus/              # Menus & Packages
│   ├── gallery/            # Gallery
│   └── contact/            # Contact
├── components/             # Reusable UI (Navbar, Footer, PageHeader, Reveal, TabButtons…)
│   ├── home/               # Hero slider, reviews carousel
│   ├── gallery/            # Filterable grid + lightbox
│   └── menus/              # Tabbed sample menus
└── lib/
    ├── site.ts             # Contact details, navigation links, map and hours
    └── content.ts          # Page content: halls, events, packages, menus, gallery photos
```

All text and photos live in `src/lib/content.ts` and `src/lib/site.ts`, so content can be updated
without touching any page layouts.

## Getting started

**Requirements:** [Node.js](https://nodejs.org) 20 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> **Windows PowerShell:** if you see "running scripts is disabled on this system", use
> `npm.cmd run dev` or run the command from Command Prompt / Git Bash instead.

### Other commands

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run build` | Create an optimised production build      |
| `npm run start` | Serve the production build locally       |
| `npm run lint`  | Check the code with ESLint                |

## Updating content

| To change…                               | Edit                    |
| ---------------------------------------- | ----------------------- |
| Phone, WhatsApp, email, address, hours   | `src/lib/site.ts`       |
| Halls, events, packages, menus, reviews  | `src/lib/content.ts`    |
| Gallery and page photos                  | `src/lib/content.ts` (add files to `public/images/`) |
| Brand colours and fonts                  | `src/app/globals.css` and `src/app/layout.tsx` |

## Roadmap

- [ ] Replace placeholder photos and text with the hotel's real content
- [x] Deploy to Vercel
- [ ] Connect a custom domain
- [ ] Add screenshots to this README
- [ ] Optional: Sinhala / English language switch
- [ ] Optional: CMS so hotel staff can update content themselves

## Credits

- Logo and brand © Hotel Umaya
- Placeholder photography from [Unsplash](https://unsplash.com) — to be replaced with the hotel's own photos
- Design inspired by [The Barnhouse](https://barnhouse.lk)

## Author

**Dilmani** — [@the-dilma](https://github.com/the-dilma)
