# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Default Route Advisory Website** - A dark-mode-first React design system and website for Azure cloud consulting, optimized for regulated industries (finance, healthcare, government).

This is a **Vite + React + TypeScript** project with a comprehensive design system built on shadcn/ui and Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## Architecture

### Design System Governance

**CRITICAL**: This project operates under strict Figma-based design governance. See `src/guidelines/Guidelines.md` for the complete design freeze specification.

Key rules:
- **All UI changes must originate in Figma first** - code implements the frozen design, it does not create design
- No ad-hoc colors, spacing values, or component variants
- All design tokens must use CSS custom properties from `src/index.css`
- Motion must respect `prefers-reduced-motion` and stay within 300-500ms duration limits
- Touch targets must meet WCAG 2.1 Level AA (≥44px minimum)

### Content Strategy

Per `Default Route Advisory – Full Website Rebuild PRD.md`:
- **Placeholder content phase** - The site is built with placeholder MDX content marked `draft: true`
- Production content will be imported later as a 1:1 file replacement
- Routes are derived from MDX file structure, not hardcoded
- No component or layout logic may depend on specific content text

### Component Architecture

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives (Radix UI + Tailwind)
│   ├── library/         # Approved production components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CTABlock.tsx
│   │   ├── FormLayout.tsx
│   │   └── ...
│   ├── showcase/        # Design system demos
│   └── [Pages].tsx      # Page-level components
├── styles/
│   └── globals.css      # Design system tokens (OKLCH color space)
├── index.css            # Tailwind v4 generated output
└── App.tsx              # Main app with demo navigation
```

### Design Token System

All colors use **OKLCH color space** for perceptual uniformity. Never use hex codes in components.

**Reference tokens via CSS variables:**
```tsx
// ✓ Correct
style={{ color: "var(--text-secondary)" }}
style={{ background: "var(--primary-azure)" }}

// ✗ Incorrect
style={{ color: "#64748b" }}
className="text-gray-600"
```

**Primary brand colors:**
- `--primary-azure` - Primary brand blue (oklch 0.60 0.14 230)
- `--primary-cyan` - Secondary accent (oklch 0.65 0.12 200)
- `--accent-teal` - Tertiary accent (oklch 0.55 0.08 180)

**Text hierarchy:**
- `--text-primary` - Primary text (95% lightness)
- `--text-secondary` - Secondary text (75% lightness)
- `--text-tertiary` - Tertiary/subtle text (62% lightness)

**Spacing:** 4px-based scale via `--space-*` variables or Tailwind classes
**Typography:** System defaults handle most sizing; explicit responsive classes used sparingly

### Responsive Design

Mobile-first with three breakpoints:

| Device | Range | Prefix | Typical Grid |
|--------|-------|--------|--------------|
| Mobile | 0-639px | (default) | Single column |
| Tablet | 640-1023px | `sm:` / `md:` | 2 columns |
| Desktop | 1024px+ | `lg:` / `xl:` | 3-4 columns |

**Common patterns:**
```tsx
// Container padding
className="px-6 sm:px-8 lg:px-12"

// Section spacing
className="py-12 sm:py-16 lg:py-20"

// Grid layouts
className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"

// Full-width on mobile, auto on desktop
className="w-full sm:w-auto"
```

See `src/RESPONSIVE_IMPLEMENTATION.md` for complete responsive validation.

### Motion System

All motion uses design system tokens. Never use arbitrary duration values.

```tsx
// Predefined motion classes
className="motion-card-hover"      // Card lift on hover
className="motion-button-glow"     // Glow effect
className="motion-fade-up"         // Entry animation
className="motion-focus"           // Focus ring

// Respects prefers-reduced-motion automatically
```

**Durations:**
- `--duration-instant` - 150ms (micro-interactions)
- `--duration-fast` - 300ms (standard)
- `--duration-normal` - 400ms (emphasis)
- `--duration-slow` - 500ms (maximum allowed)

### Breadcrumb Rules

Breadcrumbs are **only** permitted on:
- Case study detail pages
- Individual resource/article pages

Breadcrumbs are **forbidden** on:
- Homepage, service pages, about, contact, resources index

### Footer Social Links

- Icons only, no text labels
- Monochrome using `--text-secondary`
- LinkedIn required, GitHub optional
- No brand-colored icons

## Key Files

- `src/guidelines/Guidelines.md` - Design freeze specification (BINDING)
- `src/RESPONSIVE_IMPLEMENTATION.md` - Responsive design validation
- `Default Route Advisory – Full Website Rebuild PRD.md` - Content strategy and phasing
- `src/index.css` - Tailwind v4 output + design token definitions
- `src/styles/globals.css` - Extended design system tokens (100+ lines)
- `vite.config.ts` - Vite configuration with path aliases

## Component Development Rules

1. **Use approved components only** - Do not create one-off custom components
2. **No inline styles with hardcoded values** - Always use design tokens or Tailwind classes
3. **Accessibility first** - All interactive elements must have proper ARIA labels and focus states
4. **Mobile-first responsive** - Start with mobile layout, add breakpoint overrides
5. **Icons from Lucide React only** - Stroke-based, consistent sizing (typically `w-5 h-5`)
6. **Glass effects** - Use `.glass` or `.glass-strong` classes, not custom backdrop filters

## Testing Notes

- No test framework currently configured (Vitest mentioned in commands but not set up)
- Manual responsive testing required at 375px, 768px, 1440px viewports
- WCAG AA contrast validation via browser DevTools or axe

## Common Pitfalls

❌ **Do not:**
- Add colors not defined in design tokens
- Create page-specific component variants
- Use arbitrary spacing values (e.g., `p-7`, `mt-13`)
- Override global header/footer per page
- Add motion effects beyond approved patterns
- Use CSS animations outside `@keyframes` defined in `src/index.css`

✅ **Do:**
- Reference `src/guidelines/Guidelines.md` before making design decisions
- Use existing component library components
- Apply responsive patterns consistently
- Respect the placeholder content phase (all content is temporary)
- Maintain WCAG AA accessibility standards
