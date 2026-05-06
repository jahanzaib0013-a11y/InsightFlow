---
name: Future-Professional
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c5d8'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a2'
  outline-variant: '#434656'
  surface-tint: '#b6c4ff'
  primary: '#b6c4ff'
  on-primary: '#002780'
  primary-container: '#2962ff'
  on-primary-container: '#f7f5ff'
  inverse-primary: '#004ee8'
  secondary: '#cdbdff'
  on-secondary: '#370096'
  secondary-container: '#5203d5'
  on-secondary-container: '#c0acff'
  tertiary: '#00daf3'
  on-tertiary: '#00363d'
  tertiary-container: '#007d8c'
  on-tertiary-container: '#e6fbff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001550'
  on-primary-fixed-variant: '#003ab3'
  secondary-fixed: '#e8deff'
  secondary-fixed-dim: '#cdbdff'
  on-secondary-fixed: '#20005f'
  on-secondary-fixed-variant: '#4f00d0'
  tertiary-fixed: '#9cf0ff'
  tertiary-fixed-dim: '#00daf3'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  mono-label:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.6'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  grid_columns: '12'
  gutter: 24px
  margin_safe: 32px
---

## Brand & Style

The design system is engineered for high-stakes intelligence analysis. It projects a "Future-Professional" aesthetic—a synthesis of enterprise reliability and cutting-edge computational power. The UI aims to evoke a sense of "quiet intelligence," where the interface recedes to prioritize data clarity while maintaining a premium, technical feel.

The style leverages **Minimalism** for structural layout and **Glassmorphism** for interactive depth. Every element is governed by mathematical precision, utilizing thin strokes and calculated translucency to suggest a platform that is both transparent and highly sophisticated. The goal is to make the user feel like an architect of information, navigating a seamless, low-latency digital environment.

## Colors

The color strategy uses a "Deep Space" foundation to minimize eye strain during long-form knowledge work. The palette is dominated by charcoal and slate tones, providing a high-contrast backdrop for "Intelligence Accents."

- **Primary (Electric Blue):** Used for primary actions, active states, and AI processing indicators. It represents logic and flow.
- **Secondary (Soft Violet):** Used for semantic relationships, meta-tags, and secondary insights. It adds a layer of sophisticated technicality.
- **Backgrounds:** A tiered system of `#020617` (Canvas), `#0F172A` (Surface), and `#1E293B` (Elevated) creates natural hierarchy without requiring heavy shadows.
- **Status Colors:** Use desaturated greens for "verified" and amber for "processing," ensuring they do not compete with the brand's signature blue/violet core.

## Typography

The typographic system prioritizes legibility and technical rigor. **Inter** serves as the workhorse for the UI, chosen for its exceptional readability in data-dense environments. It is set with slightly tighter letter-spacing for headlines to maintain a modern, "compact" feel.

**Space Grotesk** is introduced as a secondary technical font. It should be used exclusively for metadata, labels, and code snippets. Its geometric nature reinforces the "architect" theme of the platform. Always use it in uppercase for labels to create a clear visual distinction between content (Inter) and interface scaffolding (Space Grotesk).

## Layout & Spacing

The design system employs a **12-column Fluid Grid** for main dashboards and a **Fixed Sidebar** (280px) for primary navigation. The layout philosophy is built on an 8px rhythmic scale to ensure consistency across all components.

Information density is high but managed through generous "Safe Zones" around critical data blocks. Use `40px` (xl) spacing to separate major sections, while internal component elements should use `8px` (sm) or `16px` (md) margins to maintain a tight, technical association. For knowledge graphs and semantic maps, a "No Grid" canvas is used, allowing elements to float freely within a constrained container.

## Elevation & Depth

This design system eschews traditional heavy shadows in favor of **Tonal Layers** and **Backdrop Blurs**. Depth is communicated through the "stacking" of increasingly lighter slate surfaces.

1.  **Level 0 (Canvas):** Pure dark background. Used for the overall application backdrop.
2.  **Level 1 (Card/Surface):** Slate tone with a 1px `border-subtle`. This is the primary container for content.
3.  **Level 2 (Modals/Popovers):** Utilizes `backdrop-filter: blur(12px)` and a slightly higher border opacity (15%). These elements should feel like semi-transparent glass floating above the workspace.
4.  **Interactive States:** Hovering over a card should increase the border brightness rather than adding a shadow, maintaining a "precise" rather than "fuzzy" look.

## Shapes

The shape language is "Soft-Technical." A consistent `4px` radius (Soft) is applied to most UI components, including input fields, buttons, and small cards. This avoids the harshness of sharp corners while maintaining more discipline than a fully rounded "pill" aesthetic.

Large containers and main dashboard panels use an `8px` radius to feel more structural. Iconography follows the Lucide standard: 2px stroke width, slightly rounded terminals, and clear geometric construction.

## Components

- **Buttons:** Primary buttons use a solid Electric Blue fill with white text. Secondary buttons use a ghost style (transparent fill) with a 1px slate border and white text.
- **Input Fields:** Darker than the surface background with a 1px border. On focus, the border transitions to Electric Blue with a subtle outer glow.
- **Chips / Tags:** Small, with a background of `rgba(124, 77, 255, 0.1)` (Violet) and matching violet text. Use Space Grotesk for the font.
- **Cards:** Defined by a 1px border and a subtle glass effect if placed over dynamic backgrounds. Headers within cards should have a thin bottom-border separator.
- **Lists:** High-density rows with `1px` separators. Every row should have a hover state that slightly lightens the background.
- **Knowledge Nodes:** Circular elements with a soft outer glow in either Blue or Violet, representing "Active" or "Related" status.
- **Checkboxes/Radios:** Square-ish (4px radius), using high-contrast fills for checked states.