# Default Route Advisory Website

Dark-mode-first React design system and website for Azure cloud consulting, optimized for regulated industries (finance, healthcare, government).

Built with **Vite + React + TypeScript** and a comprehensive design system based on shadcn/ui and Tailwind CSS v4.

## Table of Contents

- [Quick Start](#quick-start)
- [Content Structure](#content-structure)
- [MDX Routing System](#mdx-routing-system)
- [SEO System](#seo-system)
- [Forms & SendGrid](#forms--sendgrid)
- [Motion System](#motion-system)
- [Testing](#testing)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run E2E tests
npm run test:e2e
```

## Content Structure

All content is stored in the `/content` directory as MDX files:

```
content/
├── pages/           # Main pages (flattened to root routes)
│   ├── home.mdx     → /
│   ├── about.mdx    → /about
│   ├── contact.mdx  → /contact
│   └── legal-*.mdx  → /legal/*
├── services/        # Service pages
│   ├── environment-assessment.mdx → /services/environment-assessment
│   ├── design-only.mdx            → /services/design-only
│   ├── design-build.mdx           → /services/design-build
│   └── advisory-retainer.mdx      → /services/advisory-retainer
├── case-studies/    # Case study pages
│   └── *.mdx        → /case-studies/*
└── resources/       # Resource pages
    └── index.mdx    → /resources
```

### MDX Frontmatter

All MDX files must include the following frontmatter:

```yaml
---
title: "Page Title | Default Route Advisory"
description: "SEO-optimized description (150-160 characters)"
canonical: "/path/to/page"
draft: true  # Set to false when content is production-ready
ogImage: "/images/og-custom.png"  # Optional, defaults to /images/og-default.png
---
```

### Draft Content Behavior

- **Development**: Draft pages (`draft: true`) are visible for content review
- **Production**: Draft pages are excluded from:
  - Sitemap generation
  - Search engine indexing (NOINDEX meta tag)
  - Public access (redirects to 404)

### 1:1 File Replacement

Content files are designed to be **1:1 replaceable** without code changes:

- Routes are auto-generated from file structure
- No hardcoded paths in components
- Component logic is content-agnostic
- Simply replace MDX files and redeploy

## MDX Routing System

Routes are automatically generated from MDX files using Vite's `import.meta.glob`:

```typescript
// Automatic route generation
import { mdxRoutes } from '@/lib/mdxRoutes';

// Each MDX file becomes a route
// File: /content/services/environment-assessment.mdx
// Route: /services/environment-assessment
```

The routing system provides:

- **Dynamic route generation** from file structure
- **Frontmatter access** for SEO and metadata
- **Lazy loading** of MDX modules for performance
- **Published route filtering** (excludes drafts in production)

### Route Path Mapping Rules

| File Path | URL Path |
|-----------|----------|
| `/content/pages/home.mdx` | `/` |
| `/content/pages/about.mdx` | `/about` |
| `/content/pages/legal-privacy.mdx` | `/legal/privacy` |
| `/content/services/environment-assessment.mdx` | `/services/environment-assessment` |
| `/content/case-studies/epic-mychart-details.mdx` | `/case-studies/epic-mychart/details` |

## SEO System

### Meta Tags & JSON-LD

The SEOHead component automatically generates:

- **Title and Description** from frontmatter
- **Canonical URLs** for duplicate content prevention
- **Open Graph tags** for social sharing
- **Twitter Card tags** for Twitter previews
- **JSON-LD schemas**:
  - Organization schema (site-wide)
  - WebSite schema (site-wide)
  - Service schema (for service pages)

### Build-Time SEO Files

The `scripts/generate-seo-files.js` script generates:

#### sitemap.xml
- Auto-generated from MDX files
- Excludes `draft: true` pages
- Priority-based ranking (home: 1.0, services: 0.9, etc.)
- Updated on every build

#### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://defaultrouteadvisory.com/sitemap.xml
Crawl-delay: 1
```

#### llms.txt
- Structured content list for LLM consumption
- Includes all published pages with titles and descriptions
- Provides site context for AI assistants

### SEO Lighthouse Requirements

Target: ≥ 90 SEO score

Key optimizations:
- Semantic HTML structure
- Proper heading hierarchy (h1-h6)
- Alt text for all images
- Descriptive link text
- Mobile-friendly viewport
- Fast loading times

## Forms & SendGrid

### Contact Form

The ContactForm component (`src/components/ContactForm.tsx`) includes:

- **React Hook Form** for validation
- **Honeypot field** for bot detection
- **Google reCAPTCHA v3** for spam protection
- **Service-aware** (accepts optional `service` prop)
- **Accessible** with ARIA labels and error messages

### Azure Function Backend

The Azure Function (`api/contact/index.ts`) handles:

1. **Request validation** (required fields, email format)
2. **reCAPTCHA verification** (score threshold: 0.5)
3. **SendGrid email sending** with HTML templates
4. **CORS handling** for secure API access

### Environment Variables

Required for forms to work:

```bash
# SendGrid
SENDGRID_API_KEY=SG.xxx
SENDGRID_FROM_EMAIL=hello@defaultrouteadvisory.com
SENDGRID_TO_EMAIL=hello@defaultrouteadvisory.com

# Google reCAPTCHA v3
VITE_RECAPTCHA_SITE_KEY=6Lxxx
RECAPTCHA_SECRET_KEY=6Lxxx
```

## Motion System

### Motion Presets

Pre-defined animation configs in `src/lib/motionPresets.ts`:

```typescript
import { fadeUp, cardHover, pageTransition } from '@/lib/motionPresets';

<motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

### Reduced Motion Support

All motion respects `prefers-reduced-motion`:

```typescript
import { useReducedMotion } from '@/hooks/useReducedMotion';

const prefersReducedMotion = useReducedMotion();

<motion.div
  animate={{ opacity: 1 }}
  transition={{
    duration: prefersReducedMotion ? 0 : 0.3
  }}
>
  Content
</motion.div>
```

### Duration Limits

Per design system requirements:
- **Instant**: 150ms (micro-interactions)
- **Fast**: 300ms (standard)
- **Normal**: 400ms (emphasis)
- **Slow**: 500ms (maximum allowed)

## Testing

### Unit Tests (Vitest)

```bash
# Run all tests
npm run test

# Run with UI
npm run test:ui

# Run with coverage
npm run test -- --coverage
```

Test structure:
```
src/
├── components/
│   └── __tests__/
│       ├── ContactForm.test.tsx
│       └── SEOHead.test.tsx
└── test/
    └── setup.ts  # Test configuration
```

### E2E Tests (Playwright)

```bash
# Run E2E tests
npm run test:e2e

# Run in headed mode
npx playwright test --headed

# Run specific test
npx playwright test navigation.spec.ts
```

Test files location: `/e2e/`

#### Key E2E Tests to Write

1. **Navigation**: Verify all routes are accessible
2. **SEO Metadata**: Check title, description, canonical URLs
3. **Form Submission**: Test contact form with validation
4. **Responsive Design**: Test across mobile, tablet, desktop
5. **Accessibility**: Verify WCAG AA compliance

## Deployment

### Azure Static Web Apps

The site is deployed to Azure Static Web Apps with:

- **Automatic HTTPS** with custom domain
- **Global CDN** for fast delivery
- **Azure Functions** for API endpoints (contact form)
- **Preview environments** for PRs
- **Automatic deployment** on push to main

### CI/CD Pipelines

#### PR Workflow (`.github/workflows/pr.yml`)

Runs on pull requests:
1. Lint code
2. Type check
3. Run unit tests
4. Build project
5. Run Playwright tests
6. Run Lighthouse audit
7. Deploy to preview environment

#### Main Workflow (`.github/workflows/main.yml`)

Runs on push to `main`:
1. Same validations as PR workflow
2. Deploy to production
3. Update sitemap/robots/llms.txt

### Infrastructure as Code

Bicep template (`infrastructure/main.bicep`) defines:

- **Azure Static Web App** resource
- **Custom domain configuration**
- **TLS certificate management**
- **Environment variables** (secure)
- **App settings** for Azure Functions

Deploy with Azure CLI:
```bash
az deployment group create \
  --resource-group dra-website-rg \
  --template-file infrastructure/main.bicep \
  --parameters @infrastructure/parameters.json
```

### Required GitHub Secrets

```
AZURE_STATIC_WEB_APPS_API_TOKEN  # For deployment
SENDGRID_API_KEY                  # For contact form
SENDGRID_FROM_EMAIL               # Sender email
SENDGRID_TO_EMAIL                 # Recipient email
RECAPTCHA_SECRET_KEY              # reCAPTCHA server key
```

## Environment Variables

### Development (.env.local)

```bash
# reCAPTCHA (client-side)
VITE_RECAPTCHA_SITE_KEY=6Lxxx

# Optional: Override API endpoint for local testing
VITE_API_ENDPOINT=http://localhost:7071
```

### Production (Azure Portal / GitHub Secrets)

All production environment variables are set in:
1. **Azure Portal** → Static Web Apps → Configuration
2. **GitHub Secrets** for CI/CD workflows

Never commit `.env` files to version control!

## Design System Governance

This project operates under strict Figma-based design governance. See `src/guidelines/Guidelines.md` for complete specifications.

Key rules:
- All UI changes must originate in Figma first
- No ad-hoc colors, spacing values, or component variants
- All design tokens must use CSS custom properties
- Motion must respect `prefers-reduced-motion`
- Touch targets must meet WCAG 2.1 Level AA (≥44px)

## Project Structure

```
dra-website/
├── api/                    # Azure Functions
│   └── contact/
│       └── index.ts        # Contact form handler
├── content/                # MDX content files
│   ├── pages/
│   ├── services/
│   ├── case-studies/
│   └── resources/
├── e2e/                    # Playwright E2E tests
├── infrastructure/         # Bicep templates
│   └── main.bicep
├── public/                 # Static assets
│   └── images/
├── scripts/                # Build scripts
│   └── generate-seo-files.js
├── src/
│   ├── components/         # React components
│   │   ├── library/        # Approved production components
│   │   ├── ui/             # shadcn/ui primitives
│   │   ├── ContactForm.tsx
│   │   ├── MdxPageRenderer.tsx
│   │   └── SEOHead.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useReducedMotion.ts
│   ├── lib/                # Utility libraries
│   │   ├── mdxRoutes.ts
│   │   └── motionPresets.ts
│   ├── styles/             # CSS files
│   │   └── globals.css
│   ├── test/               # Test utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       ├── pr.yml          # PR validation workflow
│       └── main.yml        # Production deployment workflow
├── package.json
├── vite.config.ts
├── vitest.config.ts
├── playwright.config.ts
├── tsconfig.json
├── CLAUDE.md               # Project instructions
└── README.md
```

## Common Tasks

### Adding a New Page

1. Create MDX file in appropriate directory
2. Add frontmatter with `draft: true`
3. Write content
4. Test locally: `npm run dev`
5. Set `draft: false` when ready for production
6. Commit and push

### Updating Content

1. Edit the MDX file
2. No code changes needed
3. Commit and push
4. Automatic deployment via CI/CD

### Adding a New Service

1. Create `/content/services/new-service.mdx`
2. Add frontmatter with correct canonical path
3. Route is automatically generated
4. SEO tags are automatically applied

### Testing Forms Locally

1. Set up Azure Functions Core Tools
2. Create `local.settings.json` with environment variables
3. Run `func start` in `/api` directory
4. Test form at http://localhost:3000/contact

## Support

For questions or issues:
- Review `CLAUDE.md` for project instructions
- Check `src/guidelines/Guidelines.md` for design rules
- Contact: hello@defaultrouteadvisory.com

---

**Default Route Advisory** | Azure Cloud Consulting for Regulated Industries
