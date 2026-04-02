# sama4 Waitlist Landing Page — Design Specification

## For: Claude Code / Frontend Developer
## Product: sama4 (sama4.online) — AI-native news intelligence platform

---

## 1. Design Philosophy

**Newspaper editorial meets modern AI product.**

The page should feel like opening a premium broadsheet newspaper — clean blacks, crisp whites, sharp typography, generous whitespace, and a sense of quiet authority. No neon gradients, no glassy cards, no "SaaS blue." Think: The New York Times digital edition crossed with a Bloomberg terminal's discipline.

The only color accent is a single warm orange (`#f97316`) used extremely sparingly — for the primary CTA button and one or two highlight moments. Everything else lives in black, white, and carefully chosen grays.

---

## 2. Visual Language

### Color Palette

| Token             | Light Mode        | Dark Mode          | Usage                          |
|-------------------|-------------------|--------------------|--------------------------------|
| `--bg`            | `#FAFAF8` (warm white) | `#0A0A0A` (near black) | Page background               |
| `--bg-secondary`  | `#F2F0EC` (off-white)  | `#141414`          | Card/section backgrounds       |
| `--bg-elevated`   | `#FFFFFF`         | `#1A1A1A`          | Elevated cards, nav             |
| `--text-primary`  | `#0A0A0A`         | `#FAFAF8`          | Headlines, body text           |
| `--text-secondary`| `#4A4A4A`         | `#A0A0A0`          | Subheadings, descriptions      |
| `--text-muted`    | `#8A8A8A`         | `#666666`          | Labels, captions, metadata     |
| `--border`        | `#E0E0E0`         | `#222222`          | Dividers, card borders         |
| `--border-light`  | `#F0F0F0`         | `#1A1A1A`          | Subtle separators              |
| `--accent`        | `#f97316`         | `#f97316`          | CTA buttons, rare highlights   |
| `--accent-hover`  | `#ea580c`         | `#fb923c`          | Button hover states            |

### Typography

**Primary font:** `'Inter', system-ui, sans-serif` — for all UI text

**Display font (headlines only):** `'Playfair Display', Georgia, serif` — gives the newspaper editorial feel. Use ONLY for the hero headline and section titles. Everything else is Inter.

**Monospace:** `'JetBrains Mono', 'SF Mono', monospace` — for stats, data labels, technical specs

| Element               | Font              | Weight | Size                          | Letter-spacing | Line-height |
|-----------------------|-------------------|--------|-------------------------------|---------------|-------------|
| Hero headline         | Playfair Display  | 900    | `clamp(3rem, 8vw, 6rem)`     | `-0.03em`     | `0.9`       |
| Section title         | Playfair Display  | 700    | `clamp(2rem, 5vw, 3.5rem)`   | `-0.02em`     | `1.1`       |
| Section label         | Inter             | 500    | `11px`                        | `0.15em`      | `1`         |
| Body text             | Inter             | 400    | `16px` / `18px` on desktop   | `0`           | `1.6`       |
| Card heading          | Inter             | 600    | `18px`                        | `-0.01em`     | `1.3`       |
| Card description      | Inter             | 400    | `14px`                        | `0`           | `1.5`       |
| Stat number           | JetBrains Mono    | 700    | `32px`                        | `-0.02em`     | `1`         |
| Stat label            | Inter             | 500    | `11px`                        | `0.1em`       | `1`         |
| Nav links             | Inter             | 500    | `14px`                        | `0.01em`      | `1`         |
| Button text           | Inter             | 600    | `14px`                        | `0.02em`      | `1`         |

### Spacing System

Use a 4px base grid. Key spacing values: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

Sections should have `96px` to `128px` vertical padding on desktop, `64px` on mobile. The page should breathe — generous whitespace is core to the newspaper feel.

### Borders and Dividers

- Use thin `1px` borders in `--border` color, never thicker
- Horizontal rules between sections: full-width `1px` solid `--border`
- Cards: `1px` solid `--border` with no border-radius (or `2px` max) for the editorial look
- No rounded corners on major containers. Slight rounding (`4px`) only on buttons and input fields

### Shadows

Minimal. No `shadow-lg` or `shadow-xl`. At most, a subtle `0 1px 3px rgba(0,0,0,0.06)` on the nav when scrolled. The design relies on borders and whitespace for hierarchy, not shadows.

### Grid Background Pattern

Inspired by Datost: faint grid lines behind sections. Thin `1px` lines at `64px` intervals, extremely low opacity (`0.03` in light mode, `0.04` in dark mode). Creates a subtle "graph paper" texture that reinforces the data/intelligence aesthetic without distracting.

```css
background-image:
  linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
background-size: 64px 64px;
```

---

## 3. Page Layout — Section by Section

### 3.1 Navigation (Sticky)

```
┌─────────────────────────────────────────────────────────────────┐
│  sama4          Features   How It Works                [Join Waitlist]  │
└─────────────────────────────────────────────────────────────────┘
```

- Sticky top, `56px` height
- Background: `--bg` with slight transparency + `backdrop-blur(8px)` on scroll
- Left: "sama4" logo in Inter 700, 18px, black. Plain text, no icon needed
- Center/right: 2-3 nav links (smooth scroll anchors) in `--text-secondary`
- Far right: "Join Waitlist" button — solid `--accent` background, white text, small (`px-4 py-2`), `4px` border-radius
- Bottom border: `1px solid --border`
- Dark mode toggle icon (sun/moon) next to CTA

### 3.2 Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│            YOUR FIRST AI                                        │
│            NEWS HIRE.                                           │
│                                                                 │
│  AI-native news intelligence that reads, connects,              │
│  and briefs — so you don't have to.                             │
│                                                                 │
│  [email@example.com          ] [Join Waitlist →]                │
│                                                                 │
│  ┌─ Trusted by researchers, analysts, and curious minds ──┐    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Full viewport height minus nav (`min-height: calc(100vh - 56px)`)
- Centered content, max-width `720px`
- Section label: "NEWS INTELLIGENCE PLATFORM" — 11px, uppercase, `letter-spacing: 0.15em`, `--text-muted`, Inter 500
- Hero headline: Playfair Display, 900 weight, massive `clamp(3rem, 8vw, 6rem)`, `--text-primary`. The word "AI" or "NEWS" can be in `--accent` color for a single pop of orange
- Subheadline: Inter 400, `18px`-`20px`, `--text-secondary`, max-width `540px`, centered. Something like: "sama4 aggregates 12+ sources, links entities to knowledge graphs, and delivers briefings through voice and text — all in real-time."
- Email input + button: Inline flex on desktop, stacked on mobile
  - Input: `1px` border `--border`, white bg, `14px` placeholder text, `48px` height
  - Button: `--accent` bg, white text, `48px` height, same row. Text: "Join Waitlist" or "Get Early Access"
- Trust line below: small text, `--text-muted`, 12px, with a thin top border. "Trusted by researchers, analysts, and curious minds"
- No hero image. Let the typography do the work. (Alternatively, a subtle animated element: a minimal wire-frame knowledge graph with dots and connecting lines, very low opacity, positioned as a background element behind the text. Think constellation map.)

### 3.3 Product Description + Demo Visual (Inspired by Datost's Slack mockup section)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Left column (text):            │  Right column (visual):       │
│                                 │                               │
│  "Stay informed without the     │  ┌──────────────────────┐    │
│   noise. sama4 connects your    │  │ sama4 terminal/app    │    │
│   news sources, business data,  │  │ mockup showing:       │    │
│   and real-time feeds so you    │  │ - news aggregation    │    │
│   can make decisions in         │  │ - entity linking      │    │
│   minutes, not hours."          │  │ - voice briefing      │    │
│                                 │  └──────────────────────┘    │
│  ┌────────────────────────────┐ │                               │
│  │ > summarize AI policy news │ │                               │
│  │   from the last 24 hours   │ │                               │
│  └────────────────────────────┘ │                               │
│                                 │                               │
│  [Join Waitlist]  [See How →]   │                               │
│                                 │                               │
│  ┌──────┐ ┌──────┐ ┌──────┐   │                               │
│  │12+   │ │<200ms│ │Voice │   │                               │
│  │Sources│ │Latency│ │First │   │                               │
│  └──────┘ └──────┘ └──────┘   │                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Two-column grid on desktop (`1fr 1px 1fr` with a vertical divider, like Datost)
- Single column stack on mobile

**Left column:**
- Body text: Inter 400, `20px`-`24px`, `--text-primary`, with key phrases in `--accent` (like Datost highlights "Slack-native analyst", "data sources", etc.)
- Below text: A mock terminal input styled like Datost's "Slack channel" box — monospace text, `1px` border, dark bg, showing a sample query: `> summarize AI regulation news from the last 24 hours`
- Two CTA buttons: Primary ("Join Waitlist" — accent bg) and Secondary ("See How It Works" — outlined, `1px` border)
- Feature pills below buttons (like Datost's "SSO + SCIM", "Audit Logs" pills): `12+ Sources`, `Entity Linking`, `Knowledge Graph`, `Voice Briefings` — small mono-spaced tags, `1px` border, `--text-muted`

**Right column:**
- A styled mockup of the sama4 interface or a terminal-style output showing:
  - A news query being processed
  - Entity extraction results (highlighted names, orgs, topics)
  - A brief summary output
  - Use the same card/border aesthetic: `1px` borders, monospace data, warm black bg in dark mode
  - Subtle floating animation on the mockup container (`translateY` oscillation, 6s ease-in-out)
- If you want the Datost-style "connection graph" background, add a faint SVG with dots and lines behind the right column, very low opacity

### 3.4 Stats / Numbers Row

```
┌────────────┬────────────┬────────────┬────────────┐
│    12+     │   <200ms   │   50K+     │   99.7%    │
│  Sources   │  Latency   │  Articles  │  Uptime    │
│ Aggregated │ Streaming  │  Processed │            │
└────────────┴────────────┴────────────┴────────────┘
```

- Full-width grid, 4 columns on desktop, 2 on mobile
- Each cell separated by `1px` vertical dividers (the `--border` color)
- Number: JetBrains Mono, 700, `32px`-`40px`, `--text-primary`
- Label: Inter 500, `11px`, uppercase, `letter-spacing: 0.1em`, `--text-muted`
- Tabular-nums font-variant for numbers
- Section has top and bottom `1px` borders, full-width

### 3.5 Features Section (Inspired by Datost's "Built for teams" section)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  CAPABILITIES                                                   │
│                                                                 │
│  Intelligence that reads                                        │
│  the noise so you don't.                                        │
│                                                                 │
│  sama4 gives you a personal AI news analyst that                │
│  aggregates, deduplicates, and connects — delivering            │
│  briefings, not clutter.                                        │
│                                                                 │
│  ┌─ Multi-Source ──┐  ┌─ Entity-Linked ─┐                      │
│  │ Aggregation     │  │ Knowledge Graph  │                      │
│  │                 │  │                  │                      │
│  │ 12+ news sources│  │ spaCy NER +     │                      │
│  │ with MinHash    │  │ Wikidata linking │                      │
│  │ deduplication   │  │ connect stories  │                      │
│  └─────────────────┘  └──────────────────┘                      │
│                                                                 │
│  ┌─ Samvad Voice ──┐  ┌─ Real-Time ─────┐                      │
│  │ Companion       │  │ Streaming       │                      │
│  │                 │  │                  │                      │
│  │ Voice-first AI  │  │ Sub-200ms       │                      │
│  │ news briefings  │  │ WebSocket       │                      │
│  │ via Samvad      │  │ delivery        │                      │
│  └─────────────────┘  └──────────────────┘                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Layout: Left column with section label + headline + description. Right side: 2x2 card grid (like Datost's feature cards)
- Section label: "CAPABILITIES" — 11px, uppercase, spaced, `--text-muted`
- Headline: Playfair Display, 700, large, `--text-primary`. Strikethrough "noise" replaced with orange "signal" for editorial flair
- Cards: `1px` solid border, no border-radius. Small icon top-left (use a simple SVG or emoji-style icon). Heading in Inter 600, description in Inter 400 `14px` `--text-secondary`
- Card hover: background shifts slightly (e.g., `--bg-secondary` to `--bg-elevated`)

**Feature cards content:**

1. **Multi-Source Aggregation** — "Pulls from 12+ news sources with MinHash deduplication. No repeated stories, no missed angles."
2. **Entity-Linked Knowledge Graph** — "spaCy NER + Wikidata entity linking connects people, orgs, and events across stories into a living knowledge graph."
3. **Samvad Voice Companion** — "Voice-first AI briefings via Samvad. Bidirectional WebSocket streaming with sub-200ms latency. Ask questions, get answers aloud."
4. **Real-Time RAG Pipeline** — "Pinecone + Redis retrieval with Mistral reasoning. Context-aware answers grounded in the latest news, not stale training data."

Optional additional feature pills/tags below the cards (like Datost shows "Revenue, Product, Operations..." etc.):
`Researchers`, `Analysts`, `Founders`, `Journalists`, `Curious Minds`

### 3.6 How It Works (Optional, Simple)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  HOW IT WORKS                                                   │
│                                                                 │
│  01 ─── Aggregate        02 ─── Connect        03 ─── Brief    │
│  12+ sources pulled      Entities linked to     Voice or text   │
│  and deduplicated        knowledge graph        briefing ready  │
│  in real-time            automatically          in seconds      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Three-step horizontal flow on desktop, vertical on mobile
- Step numbers in JetBrains Mono, large, `--text-muted`
- Connected by thin horizontal lines (like a timeline)
- Minimal text per step

### 3.7 Final CTA Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         Get early access to sama4.                              │
│                                                                 │
│    The news layer that thinks, connects, and briefs.            │
│                                                                 │
│    [email@example.com          ] [Join Waitlist →]              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Centered, generous padding (`128px` top/bottom)
- Same email + button combo as hero
- Headline: Playfair Display, 700, medium-large
- Subline: Inter 400, `--text-secondary`

### 3.8 Footer

```
┌─────────────────────────────────────────────────────────────────┐
│  sama4                                    Twitter  GitHub       │
│  © 2025 sama4. All rights reserved.       Contact              │
└─────────────────────────────────────────────────────────────────┘
```

- Two-column: left logo + copyright, right social links
- Separated from content by `1px` top border
- `--text-muted` for all text, `14px`
- Minimal, no fat footer

---

## 4. Interactions and Animations

### Waitlist Form
- Email input with basic validation (check `@` and `.`)
- On submit: button shows loading spinner (small, white), then transitions to success state: "You're on the list." with a checkmark. Input becomes disabled.
- Store email to backend endpoint (or console.log as placeholder)
- Error state: red border on input, small error text below

### Scroll Animations
- Sections fade-in on scroll (use Intersection Observer, `opacity: 0 → 1`, `translateY: 20px → 0`, `600ms ease-out`)
- Stagger cards within grids (each card delays `100ms` after the previous)
- Stats numbers count up from 0 on scroll-in (use `requestAnimationFrame`)

### Hover States
- Buttons: darken accent on hover, subtle `transform: translateY(-1px)`
- Cards: border color shifts from `--border` to `--border` darker variant
- Nav links: underline animation (width grows from 0 to 100%, bottom border)
- NO bouncy or spring animations. Everything eased, measured, editorial.

### Dark Mode
- Default to dark mode (set `class="dark"` on `<html>`)
- Toggle button in nav switches between light and dark
- Store preference in localStorage
- Transition: `200ms ease` on background-color and color

### Background Element (Optional)
- Behind the hero: a very faint constellation/node-graph SVG animation
- Dots slowly drift, lines connect nearby dots
- Opacity: `0.04` in dark mode, `0.03` in light mode
- Gives the "intelligence network" feel without being distracting
- Implemented as a `<canvas>` or pure SVG with CSS animations

---

## 5. Responsive Behavior

| Breakpoint      | Layout Changes                                         |
|-----------------|--------------------------------------------------------|
| `< 640px`       | Single column everywhere. Hero text `3rem`. Cards stack vertically. Stats 2-col grid. Nav hamburger menu. |
| `640px - 1024px` | Two-column grids. Hero text scales up. Stats 2-col or 4-col. |
| `> 1024px`       | Full desktop layout. Two/three-column grids. Hero at max size. Max-width container `1200px` centered. |

Mobile nav: hamburger icon that opens a slide-down panel with links + CTA.

---

## 6. Tech Stack

- **React 18+** with Vite (existing sama4 setup)
- **Tailwind CSS** for utility styling
- **Google Fonts**: `Inter` (already loaded) + `Playfair Display` (add to `<head>`)
- **No UI libraries** — all components built from scratch for maximum control
- No framer-motion dependency — use CSS transitions + Intersection Observer
- Optional: `JetBrains Mono` from Google Fonts for monospace elements

---

## 7. File Structure Suggestion

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    ProductDemo.jsx
    Stats.jsx
    Features.jsx
    HowItWorks.jsx
    FinalCTA.jsx
    Footer.jsx
    WaitlistForm.jsx        (reusable email + button)
    DarkModeToggle.jsx
  hooks/
    useIntersectionObserver.js
    useCountUp.js
  styles/
    globals.css             (CSS custom properties, grid bg, base styles)
  App.jsx
  main.jsx
```

---

## 8. Key Brand Rules

- Product name is always **sama4** — lowercase, no diacritics, no special formatting
- **Samvad** is a feature within sama4 (voice companion), NOT a separate product
- Accent color `#f97316` is used ONLY for: primary CTA button, one word in the hero headline, and active/hover states. Everything else is black/white/gray.
- No em dashes in copy. Use commas or periods instead.
- Tone of copy: confident but not hype-y. Think Bloomberg, not Product Hunt. State what it does, not what it "revolutionizes."
- The page should feel like it was designed by someone who reads The Economist, not someone who browses Dribbble.

---

## 9. Sample Copy (Adjust as Needed)

**Hero headline:** "Your first AI news hire."

**Hero subline:** "sama4 aggregates 12+ sources, links entities to knowledge graphs, and delivers briefings through voice and text. All in real-time."

**Section 2 body:** "Stay informed without the noise. sama4 connects news sources, public data, and real-time feeds so you can make decisions in minutes, not hours."

**Features headline:** "Intelligence that reads the noise so you don't."

**Final CTA:** "Get early access to sama4. The news layer that thinks, connects, and briefs."

---

## 10. Reference

**Primary inspiration:** [datost.com](https://datost.com) — layout structure, grid dividers, mock terminal, feature cards, trust signals, two-column hero-with-demo pattern

**Tonal inspiration:** NYT, Bloomberg, The Economist — black/white editorial palette, serif display headlines, generous whitespace, authority through restraint

**Anti-references (avoid):** Gradient-heavy SaaS pages, glassmorphism, neon accents, bouncy animations, "AI glow" effects