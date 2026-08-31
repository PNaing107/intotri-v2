# IntoTri — Design System

A high-performance, kinetic aesthetic for grassroots triathlon. Clean white surfaces, near-black ink, and two electric accent colors used with precision. Everything is built mobile-first, anchored to a 1600px max content width, and tuned for focus and speed.

---

## 1. Brand Palette

The palette is white-led with two signal accents. Colors are defined as HSL channel tokens in `src/index.css` (`:root`) and mapped to Tailwind utilities in `tailwind.config.js`.

| Token              | Hex        | Tailwind class      | Role                                            |
| ------------------ | ---------- | ------------------- | ----------------------------------------------- |
| `--void`           | `#ffffff`  | `bg-void` / `surface-void` | Base surface — always white.               |
| `--oxygen`         | `#1a1a1a`  | `text-oxygen` / `bg-oxygen` | Primary ink for text and dark panels.      |
| `--volt`           | `#ff0099`  | `bg-volt` / `text-volt`    | Primary accent — IntoTri pink. CTAs, highlights, the header top-rail. |
| `--blu`            | `#00aaff`  | `bg-blu` / `text-blu`      | Secondary accent — electric blue. The Cornish Tri series, contrast panels. |
| `--slate-friction` | `#f5f5f5`  | `bg-slatefriction`         | Light hairline tint / image placeholder backdrop. |

**Usage rules**
- Backgrounds are almost always `--void` (white). Dark/colored panels are full-bleed accents (`bg-blu`, `bg-volt`, `bg-oxygen`) — never tinted greys.
- Accent-on-accent is avoided. Pick **one** accent per panel: pink for racing/urgency, blue for the flagship series.
- Hairlines and dividers use `--oxygen` at low opacity (e.g. `border-[hsl(var(--oxygen)/0.12)]`), not grey.
- Text selection is volt-pink (`::selection` in `index.css`).

---

## 2. Typography

Three typefaces, each with a fixed role. Loaded via `@import` at the top of `src/index.css` and bound to Tailwind `font-*` utilities.

| Role     | Family        | Token            | Tailwind        | Usage                                      |
| -------- | ------------- | ---------------- | --------------- | ------------------------------------------ |
| Heading  | **Archivo**   | `--font-heading` | `font-archive`  | Display headlines, section titles, buttons |
| Display  | **Archivo**   | `--font-display` | `font-display`  | Oversized hero type                        |
| Body     | **Inter**     | `--font-body`    | `font-body`     | Paragraphs, descriptive copy               |
| Data     | **IBM Plex Mono** | `--font-mono` | `font-mono` / `.data-mono` | Labels, stats, metadata, coordinates |

**Typographic voice**
- Headlines are uppercase, `font-900`, tightly tracked (`letter-spacing: -0.04em`), with compressed line-height (`leading-[0.82]`–`0.9`). The signature look is huge, blocky, and confident.
- Body copy stays at 15px mobile / 18px desktop, `leading-[1.6]`, rendered on `--oxygen` at ~70–85% opacity for hierarchy.
- Data labels are mono, uppercase, small (10–12px), widely letter-spaced (`tracking-[0.18em]`–`0.3em`), and prefixed with a slash — e.g. `/ 02 — Choose Your Race`.
- Custom numeric `font-weight` utilities (400→900) are registered in `tailwind.config.js` for precise weight control.

---

## 3. Custom Utilities

Defined in `src/index.css` under `@layer components` / `base`. Reuse these instead of re-encoding the styles.

| Utility              | Purpose                                                         |
| -------------------- | --------------------------------------------------------------- |
| `surface-void`        | White base surface with near-black ink text.                    |
| `velocity-line`      | Ultra-thin precision divider (`bg-[hsl(var(--oxygen)/0.12)]`). |
| `data-mono`           | Mono data label: Plex Mono, tabular numerals, +0.04em tracking. |
| `headline-overflow`   | Display headline clamp: `line-height: 0.82`, `letter-spacing: -0.04em`. |
| `chrono-hover`        | Crisp 120ms mechanical hover transition (color, border, transform, width). |
| `chrono-transition`  | The same easing applied to state changes (used on the header). |
| `animate-marquee`     | 28s linear infinite horizontal scroll for the ticker.           |

---

## 4. Layout & Spacing

- **Max content width:** `max-w-[1600px]`, centered with `mx-auto`.
- **Horizontal padding:** `px-5` mobile, `md:px-10` desktop — consistent across sections.
- **Section rhythm:** `py-16 md:py-24` for standard sections; `py-20 md:py-28` for hero-adjacent sections.
- **Section headers** follow a fixed pattern: a `velocity-line` top divider → mono index label (`/ 02 — …`) → oversized headline → supporting paragraph → `velocity-line` bottom divider.
- **Responsive grid:** two-up on desktop (`md:grid-cols-2`), stacked on mobile. Cards use a 1px `--oxygen/0.12` gap grid to create hairline seams rather than shadows.
- **Mobile-first:** every layout starts at the mobile breakpoint and layers `md:` enhancements. No separate mobile design.

---

## 5. Imagery

- All content images use the `Image` component from `@/components/ui/image` — never a plain `<img>`. It serves responsive `srcset`, re-encodes to WebP, and crops server-side to the container.
- `fittingType="fill"` (default) crops to the box; `fittingType="fit"` contains the whole image (used for logos and the competitive racer graphic).
- Image boxes are always given an explicit aspect ratio (`aspect-[4/3]`, `aspect-[16/9]`) and `object-cover` / `object-contain` so cropping is consistent.
- Only original IntoTri site photography is used — no AI-generated imagery.
- The company flag logo (`logo_flag.png`) renders at full navbar height with `fittingType="fit"` to blend into the header.

---

## 6. Motion

Motion is subtle, mechanical, and purposeful — never decorative.

- **Scroll-linked parallax (framer-motion):** `useScroll` + `useTransform` drive background scale, overlay opacity, and split-headline drift in opposite directions (`Hero`, `CalendarHero`).
- **Count-up stats:** the `CountUp` component animates from 0 → target with an ease-out quart when the element enters the viewport (`IntersectionObserver`).
- **Hover transitions:** the `chrono-hover` utility applies a 120ms linear transition; the nav link underline grows from 0 → full width on hover.
- **Marquee:** the ticker uses `animate-marquee` (28s linear infinite), pausing on hover.
- **Header state:** the fixed header transitions between transparent (over hero) and a frosted white solid (`backdrop-blur-md` + `--void/0.85`) on scroll.

---

## 7. Custom Kinetic Cursor

On fine-pointer (desktop) devices, a pink dot cursor replaces the default pointer and expands over interactive elements. Disabled on touch devices. Controlled via the `body.kinetic-cursor` class and `CustomCursor` component.

```css
@media (pointer: fine) {
  body.kinetic-cursor { cursor: none; }
  body.kinetic-cursor a,
  body.kinetic-cursor button,
  body.kinetic-cursor [data-cursor="target"] { cursor: none; }
}
```

---

## 8. Reusable Component Patterns

These conventions repeat across `src/components/intotri/`:

- **Section wrapper:** `<section id="…" className="surface-void px-5 py-20 md:px-10 md:py-28">` with an inner `mx-auto max-w-[1600px]`.
- **Section header:** velocity-line → mono `/ NN —` label → Archivo 900 uppercase headline → Inter paragraph → velocity-line.
- **CTA button:** `bg-volt` (or `bg-blu`), `font-archive text-xs font-700 uppercase tracking-[0.18em] text-white`, with a `chrono-hover` and an arrow icon (`ArrowUpRight` / `ArrowDown`) that nudges on hover.
- **Card:** white surface, `aspect-[16/9]` image with a low-opacity scrim, mono tag label, Archivo 900 title, hairline-separated `data-mono` spec rows, accent CTA.
- **Header logo:** full-height `fittingType="fit"` image inside a `self-stretch` link, so the flag bleeds to the top/bottom of the navbar.

---

## 9. Files of Record

| File                   | Owns                                                |
| ---------------------- | --------------------------------------------------- |
| `src/index.css`        | Color tokens, font tokens, custom utilities, cursor, selection. |
| `tailwind.config.js`   | Token → Tailwind class mapping, font weights, marquee keyframe. |
| `src/components/ui/image.jsx` | Responsive image serving & cropping.        |
| `src/components/intotri/*`    | Section + UI component implementations.      |

When changing the system, edit tokens in `src/index.css` and mappings in `tailwind.config.js` — then use the mapped classes in JSX. Never hardcode hex values or inline styles in components.