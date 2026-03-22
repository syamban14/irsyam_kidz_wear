# Design System: High-End Playful Editorial

## 1. Overview & Creative North Star: "The Modern Playroom"
This design system moves away from the "cluttered toy box" aesthetic typical of children’s retail and toward **"The Modern Playroom."** Our North Star is an experience that feels sophisticated for parents while remaining whimsically inviting for kids.

We break the standard e-commerce grid by utilizing **Organic Asymmetry**. Instead of rigid rows of products, we use overlapping elements, varying card heights, and generous "breathing room" (whitespace). The goal is to create a digital environment that feels like a curated boutique—intentional, premium, and artfully composed.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
Our palette is rooted in soft, vibrant tones that evoke growth and energy without overstimulating the user.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Structural boundaries must be defined solely through:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Tonal Transitions:** Using `surface-container-highest` to define a header against a `surface` body.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the Material tiers to create "nested" depth:
*   **Base Layer:** `surface` (#f5f7f5) for the main page body.
*   **Sectional Layer:** `surface-container-low` (#eff1ef) for large background blocks (e.g., a "New Arrivals" section).
*   **Object Layer:** `surface-container-lowest` (#ffffff) for product cards to make them "pop" naturally.

### The Glass & Gradient Rule
To add a signature "soul" to the UI:
*   **Glassmorphism:** Use `surface` at 70% opacity with a `24px` backdrop-blur for floating navigation bars or filter overlays.
*   **Signature Textures:** For Hero CTAs and primary buttons, use a subtle linear gradient from `primary` (#00694b) to `primary-fixed-dim` (#7eefc0) at a 135-degree angle.

---

## 3. Typography: Editorial Friendliness
We pair the geometric clarity of **Plus Jakarta Sans** for high-impact display with the warmth of **Be Vietnam Pro** for functional reading.

*   **Display (Lg/Md/Sm):** *Plus Jakarta Sans.* Use for brand moments and hero headlines. The oversized scale (up to `3.5rem`) creates an editorial feel that commands attention.
*   **Headlines & Labels:** *Plus Jakarta Sans.* These serve as the "voice" of the brand—modern, clean, and structured.
*   **Body & Titles:** *Be Vietnam Pro.* Chosen for its exceptional readability. The slight roundness maintains the "friendly" prompt without sacrificing the professional polish of a high-end store.

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines. We use physics and light.

*   **The Layering Principle:** Place a `surface-container-lowest` card on top of a `surface-container-low` background. The subtle shift in hex code creates a "soft lift" that feels more expensive than a drop shadow.
*   **Ambient Shadows:** For high-interaction elements (e.g., a "Quick Buy" FAB), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(44, 47, 46, 0.06)`. Note the use of the `on-surface` color (#2c2f2e) at a very low opacity to mimic natural light.
*   **The Ghost Border Fallback:** If a boundary is strictly required for accessibility, use `outline-variant` (#abaeac) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Soft & Intentional

### Buttons
*   **Primary:** High-radius (`xl`: 3rem) using the Signature Gradient. Text is `on-primary` (#c7ffe3).
*   **Secondary:** `secondary-container` (#ffc882) background with `on-secondary-container` (#653f00) text. No border.
*   **Tertiary:** Text-only using `primary` (#00694b) with an icon, utilizing `1.4rem` (4) spacing for the gap.

### Cards (Product & Category)
*   **Structure:** No borders or dividers.
*   **Corner Radius:** Always use `lg` (2rem) for the outer container and `md` (1.5rem) for internal images.
*   **Spacing:** Use `6` (2rem) padding to ensure the content never feels cramped.

### Input Fields
*   **Style:** Soft-filled containers using `surface-container-high`. 
*   **State:** On focus, transition the background to `surface-container-lowest` and add a "Ghost Border" of `primary` at 20% opacity.

### Navigation (The Floating Dock)
Instead of a pinned top-bar, use a floating "dock" style navigation with `xl` (3rem) rounding, a `surface` glassmorphism background, and a soft ambient shadow.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use intentional asymmetry. Offset images in a 2-column grid so one sits slightly lower than the other.
*   **DO** use the `20` (7rem) and `24` (8.5rem) spacing tokens to create dramatic section breaks.
*   **DO** use `tertiary` (#00647c) for accent moments, like "Sale" tags or "Eco-friendly" badges.

### Don’t:
*   **DON’T** use black (#000000) for text. Always use `on-surface` (#2c2f2e) to keep the vibe soft.
*   **DON’T** use 1px dividers between list items. Use `1.5` (0.5rem) of vertical whitespace or a subtle color shift.
*   **DON’T** use "hard" corners. Even for small elements like checkboxes, use the `sm` (0.5rem) radius token.