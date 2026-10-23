# Hero Page Specification & Design Override

## Section: Inicio (Hero)
**Product:** Lautaro Olmos Portfolio
**Scope:** Hero Section (Above the fold & responsive viewport)

### Design Direction
- **Background Base:** Neutral "almost white" (#FAFBFC / #F8FAFD / #F3F4F9), high-end clean canvas.
- **Visual Horizon:** Luminous Horizon in Electric Blue (`#2563EB`, `#3B82F6`) and Royal Violet (`#7C3AED`, `#8B5CF6`, `#A855F7`), blended with cosmic fluid waves.
- **Dynamic Interaction (Gemini App Style):**
  - Continuous organic fluid morphing (simulating Gemini "thinking" / generating response).
  - Pointer & touch interactive tracking with dampened spring physics.
  - Scroll-reactive color shift and horizon displacement.
  - Fallback to smooth static/subtle transition when `prefers-reduced-motion` is active.

### Content Elements
1. **Title:** `Lautaro Olmos` (bold, authoritative, modern typography with subtle cosmic light interaction).
2. **Subtitle:** `Full Stack AI Developer ·` (accompanied by an active AI status badge / pulse).
3. **Core Tagline:** `Desarrollo sistemas de punta a punta: Web, Apps Mobile (iOS/Android) y automatización con AI.`
4. **Action Links & Socials:**
   - GitHub: `@LAUTYH` -> `https://github.com/LAUTYH`
   - LinkedIn: Profile link
   - Email: `lauolmos@outlook.es` with one-click copy & mailto fallback
5. **Interactive Gemini Shimmer Bar / Horizon Indicator:**
   - Ambient glowing horizon at the base of the viewport that shifts gradient stops smoothly.

### Typography
- Primary Sans: Geist / Inter / IBM Plex Sans for crystal clear legibility.
- Tech Mono Accent: Geist Mono / JetBrains Mono for tags, stats, and handles.

### Accessibility & Contrast
- Text on almost-white background: `#0F172A` / `#1E293B` ensuring > 10:1 contrast ratio (exceeding WCAG AAA).
- Secondary text: `#475569` with > 5.5:1 contrast.
- Focus rings: 2px electric blue ring with offset.
