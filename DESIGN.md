---
name: Portfolio Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#006d42'
  on-secondary: '#ffffff'
  secondary-container: '#6cfdb0'
  on-secondary-container: '#007346'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d0600'
  on-tertiary-container: '#f0461f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#6cfdb0'
  secondary-fixed-dim: '#4bdf96'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005230'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0600'
  on-tertiary-fixed-variant: '#8b1a00'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.4'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 640px
  stack-gap-lg: 48px
  stack-gap-md: 24px
  stack-gap-sm: 12px
  inline-padding: 16px
  section-margin: 80px
---

## Brand & Style

This design system is built on the principles of **Minimalism** and **Tactile Modernism**. It is designed for creative professionals who want their work to be the focal point while maintaining a sophisticated, high-end digital presence. The aesthetic prioritizes clarity and breathing room, using a muted canvas to make project content and status indicators pop.

The brand personality is professional yet approachable, characterized by a "quiet confidence." It avoids loud decorative elements in favor of precise spacing, subtle depth, and crisp typography. The emotional response is one of calm, reliability, and technical proficiency.

## Colors

The palette is monochromatic at its core, utilizing high-contrast black and white to establish a clear hierarchy. 

- **Neutral/Background:** The primary canvas uses a soft, off-white (#F0F0F0) to reduce eye strain compared to pure white, while pure white (#FFFFFF) is reserved for cards and elevated surfaces.
- **Primary:** Deep charcoal (#141414) is used for all primary text and high-action components.
- **Accents:** Vibrant green (#28C780) and orange (#FF5029) are used sparingly as functional color cues—indicating "availability," "active status," or differentiating project categories through iconography.

## Typography

The typography system relies exclusively on **Inter** to achieve a utilitarian, tech-forward feel. The system utilizes "Inter Display" weights for larger headings to benefit from tighter tracking and refined glyphs.

- **Headlines:** Use Semi-Bold weights with slight negative letter-spacing for a modern, "locked-in" appearance.
- **Body:** Regular weights with generous line-height ensure maximum readability against the off-white background.
- **Labels:** Small, medium-weight labels are often paired with increased letter-spacing to create a clean, metadata-style look for categories and tags.

## Layout & Spacing

The layout follows a **Fixed Grid** model optimized for a single-column "feed" experience, which translates seamlessly from mobile to desktop. 

- **Containment:** Content is housed in a narrow central container (max 640px) to maintain focus and readability.
- **Rhythm:** A vertical stack rhythm is used. Major sections are separated by large gaps (80px), while items within a card or group use an 8px or 12px base unit.
- **Margins:** A consistent 16px lateral margin is maintained on smaller viewports to ensure content doesn't hit the screen edges.

## Elevation & Depth

This design system uses **Ambient Shadows** and **Tonal Layering** to create a sense of physical space without looking cluttered.

- **The Canvas:** The base layer is the soft gray background (#F0F0F0).
- **The Cards:** Interactive elements and content containers sit on pure white (#FFFFFF) surfaces.
- **Shadow Profile:** Shadows are extremely diffused. Use a large blur radius (20px+) with very low opacity (3-5%) and no spread. This creates a "lifted" effect that feels airy rather than heavy. 
- **Active State:** Elements like the floating navigation bar use a slightly stronger shadow to indicate they sit on the highest Z-index above all other scrolling content.

## Shapes

The shape language is consistently **Rounded**, leaning towards a friendly and modern aesthetic.

- **Cards:** Use a 1rem (16px) radius to create soft, defined containers.
- **Buttons:** Primary buttons use a pill-shaped (full-round) radius to maximize their "clickability" and distinguish them from rectangular content blocks.
- **Icons:** Project icons and avatars are contained within circular or highly-rounded squares to maintain visual softness.

## Components

### Buttons
- **Primary:** Solid #141414 background with white text and icons. Pill-shaped.
- **Secondary:** White background with a subtle border (#E0E0E0) and dark text. Used for secondary actions like "Copy Email."

### Cards
- Pure white background with 16px corner radius.
- Padding should be generous (typically 24px) to ensure content inside feels premium.
- Grouped cards (e.g., project lists) should have uniform spacing between them (12px).

### Chips & Tags
- Used for metadata (e.g., "Framer Template"). 
- Subtle gray background (#F5F5F5) with Medium weight text in a small size (10-12px). 
- Borders are not necessary for chips to maintain the minimalist look.

### Floating Navigation
- A centered, pill-shaped bar that floats at the bottom of the viewport.
- Features semi-transparent background (blur effect) or solid white with a soft shadow.
- Icons are monochromatic, with the "Hire Me" action treated as a primary pill button inside the bar.

### Input Fields
- Minimalist design with a light gray stroke and generous internal padding. Focus states should use a subtle increase in border contrast or a 1px solid #141414 outline.