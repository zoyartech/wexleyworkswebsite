# Plan: Add Motion Graphics to Wexley Site

## Context

The Wexley site currently has only CSS-based transitions (hover scale on work cards, color transitions on service titles) and one CSS keyframe animation (the client ticker). The user wants richer motion graphics to elevate the site's premium feel — scroll-triggered reveals, hero entrance animations, and micro-interactions that feel designed, not bolted on.

The approach uses **Framer Motion** (the standard for React animation) installed as a new dependency. It fits naturally into the existing component structure without restructuring any files.

---

## Changes

### 1. Install Framer Motion

```bash
pnpm add motion
```

(`motion` is the current package name for Framer Motion v11+.)

---

### 2. `src/index.css` — add two keyframes

Add a `@keyframes fadeUp` and `@keyframes revealWidth` for CSS-side animations used before React hydrates:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

### 3. `src/App.tsx` — add motion to these specific areas

#### a) Hero entrance (staggered children)
Wrap the hero content block in a `motion.div` with `variants` + `staggerChildren`. Each child (eyebrow text, h1, paragraph, button group, stat row) animates up with opacity 0 → 1 and y 30 → 0, staggered 0.12s apart. Triggered on mount (`initial="hidden"` / `animate="visible"`).

#### b) Scroll-triggered section reveals
Use Framer Motion's `whileInView` + `viewport={{ once: true, amount: 0.2 }}` on:
- Each **Work card** — fade up + slight scale from 0.96 → 1, 400ms, staggered by index
- The **Services rows** — slide in from left, opacity 0 → 1, staggered
- The **About section** two columns — left fades in from -20px x, right from +20px x
- The **Contact CTA heading** — fade up

#### c) DecorativeW — slow spin + entrance
Add a gentle continuous `rotate` animation to the large hero `DecorativeW` (360° over 20s, linear, repeat). On the services section small W, use `whileInView` scale 0 → 1 with a spring.

#### d) Nav link underline on hover
Replace the current `hover:text-[#6b6b6b]` transition with a Framer Motion `motion.span` that animates a bottom border width from 0 → 100% on hover using `layoutId` or `scaleX` transform.

#### e) Work card overlay — smoother reveal
Replace the current CSS `translate-y-2 group-hover:translate-y-0` with a Framer Motion `AnimatePresence` + `motion.div` that fades in with `opacity` and `y` on hover state tracked via `useMotionValue` / `whileHover`.

---

## Files Modified

- `package.json` — add `motion` dependency
- `src/App.tsx` — add imports and motion wrappers as described above
- `src/index.css` — minor: add `fadeUp` keyframe (optional, for pre-hydration)

---

## Verification

1. Run `pnpm install` then check preview — no build errors
2. Refresh the page: hero text should stagger in on load
3. Scroll down: each section should animate in once as it enters the viewport
4. Hover over Work cards: overlay should animate smoothly
5. Watch the DecorativeW: should rotate slowly on a loop
6. Check mobile: all animations should still work (Framer Motion respects `prefers-reduced-motion` — add `useReducedMotion()` guard)
