# Default Route Advisory — Figma Guidelines

This document defines the **governance rules** for all UI design work in this Figma project.
It is binding for humans and automation agents.

---

## Authority

This Figma project is the **single source of truth** for UI design.

- All production code must conform to these designs.
- Design decisions may not be overridden or “interpreted” in code.
- Any visual change must be made in Figma first.

---

## Design Governance

### Source of Truth
- This `guidelines.md` file are authoritative.
- Engineering implements what is designed; it does not redesign.

### Scope
These rules apply to:
- Design tokens
- Components
- Page templates
- Motion and interaction
- Responsive behavior
- Accessibility expectations

---

## Design Tokens

- All colors must come from defined tokens.
- No custom hex values in components or layouts.
- Spacing must use the defined spacing scale only.
- Border radius and shadow values are fixed.
- Typography must use approved font families and sizes only.

No exceptions.

---

## Components

- Pages must be composed only from approved components.
- New components require explicit approval.
- Variants are preferred over creating new components.
- One-off or page-specific components are not allowed.

Global components must not be overridden per page.

---

## Page Templates

- Page templates define layout, hierarchy, and ordering.
- Service pages must follow the canonical structure:

  Hero → Qualification → Scope → Approach → Deliverables  
  → Included / Not Included → Outcomes → FAQ → Final CTA

- Page sections may not be reordered or removed without design revision.

---

## Header / Navigation

- Header is a global component.
- All states are defined in design:
  - Default
  - Scrolled / sticky
  - Mobile closed
  - Mobile open
  - Hover, active, and focus states
- No per-page header variations are allowed.

---

## Footer

- Footer is a global, reusable component.
- Layout, structure, and hierarchy are frozen.
- Footer must follow the dark theme and design tokens.
- No per-page footer customization is allowed.

### Footer — Social Links
- Social links are trust signals, not CTAs.
- Icons only; no text labels.
- Monochrome using secondary text color.
- LinkedIn is required.
- GitHub is optional.
- No brand-colored icons.
- No layout or styling overrides.

---

## Breadcrumbs

- Breadcrumbs are used **only** on:
  - Case study pages
  - Individual resource / article pages
- Breadcrumbs are **not permitted** on:
  - Homepage
  - Service landing pages
  - About page
  - Contact page
  - Resources index page
- Breadcrumbs must be visually subordinate and non-disruptive.

---

## Motion & Interaction

- Motion is subtle and supportive.
- Duration: **300–500ms only**
- Framer Motion is the only JavaScript animation system allowed.
- `prefers-reduced-motion` must be respected.
- Motion must never interfere with form usability.
- No decorative or continuous animations beyond approved ambient effects.

---

## Forms (Critical Workflow)

- Form field semantics are fixed.
- No renaming, reordering, or restructuring of fields.
- All form states must be implemented:
  - Idle
  - Focus
  - Validation error
  - Disabled
  - Submitting
  - Success
  - Submission error
- Accessibility and clarity take priority over animation.

---

## Allowed Without Design Revision

The following changes are allowed without breaking design governance:

- Copy/text updates
- Content length changes
- URLs and link destinations
- Metadata and SEO fields
- Images or diagrams within existing frames
- Copyright year updates

---

## Violations

If any of these guidelines are violated:

1. Implementation must stop
2. Design must be updated in Figma first
3. A new Design Freeze version must be created

No exceptions.

---

# DESIGN FREEZE — v1.0

**Project:** Default Route Advisory  
**Status:** DESIGN FROZEN  
**Effective Date:** 2026-01-XX

---

## Design Freeze Authority

This design freeze is binding for implementation.

All production code must conform to the frozen design.
Design may not be modified during implementation.

---

## Scope of Freeze

The following artifacts are **frozen and immutable** for implementation:

- Design tokens (color, typography, spacing, radius, shadows)
- Motion standards and interaction rules
- Global components:
  - Header / Navigation (all states)
  - Footer
  - Breadcrumbs
  - Buttons, cards, CTAs
  - Forms and all form states
- Page templates:
  - Homepage
  - Service page (canonical)
  - About
  - Contact
  - Resources
  - Case study
  - 404 / error page
- Responsive behavior (mobile, tablet, desktop)
- Accessibility expectations reflected in the designs

---

## Explicit Freeze Rules

- No new colors, fonts, spacing values, or motion patterns may be introduced.
- Pages must be composed only from approved components.
- No layout, hierarchy, or structural changes are permitted.
- Breadcrumb rules must be followed exactly.
- Footer layout may not be customized per page.
- Motion must remain within defined standards.

---

## Change Management

Any change affecting **layout, spacing, color, typography, motion, or component structure** requires:

1. Updating this Figma project
2. Creating a new Design Freeze version (e.g., v1.1)
3. Re-approval before implementation

---

## Implementation Contract

Engineering and automation agents must:

- Treat this design freeze as authoritative
- Implement designs with high fidelity
- Raise discrepancies instead of inventing solutions

---

**Design Freeze v1.0 is now in effect.**
