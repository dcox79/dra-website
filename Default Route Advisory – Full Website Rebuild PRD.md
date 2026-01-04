## Default Route Advisory – Full Website Rebuild (Parallel Build Model)

**Execution Model:** AI-only implementation
 **Agent Autonomy:** Limited discretion within PRD constraints
 **Build Strategy:** **Design + system first, content later**

------

## 1. Core Execution Principle (NEW – HARD REQUIREMENT)

> **The website must be fully built and deployable using placeholder MDX content.
>  Production content will be imported in a later phase without refactoring layouts, routes, or components.**

Agents **must not block** on content extraction.

------

## 2. Content Phasing Model (NEW)

### Phase 1 – Placeholder Content (THIS PRD)

- All pages implemented using **synthetic placeholder MDX**
- Placeholder copy must:
  - Match final content structure
  - Exercise all components
  - Include realistic heading depth and section counts
- Placeholder content **must be safe to overwrite** later

### Phase 2 – Production Content Import (OUT OF SCOPE FOR BUILD AGENT)

- Placeholder MDX files replaced 1:1 with extracted MDX
- No routing, layout, or component changes permitted in Phase 2

------

## 3. Placeholder Content Rules (HARD REQUIREMENTS)

### 3.1 One-to-One File Mapping

For every final route, create a **placeholder MDX file with the final slug**.

Example:

```
/content/services/azure-environment-assessment.mdx
```

This file **will be replaced**, not renamed.

------

### 3.2 Placeholder Frontmatter (MANDATORY)

All placeholder MDX files must include valid frontmatter so SEO systems, sitemap generation, and CI can run immediately.

```
---
title: "Azure Environment Assessment | Default Route Advisory"
description: "Placeholder description – will be replaced during content import."
canonical: "/services/azure-environment-assessment"
draft: true
---
```

Rules:

- `draft: true` must be present on all placeholder pages
- Sitemap generator must **exclude drafts**
- Removing `draft: true` later must automatically include the page

------

## 4. Placeholder Copy Standards (NEW)

Placeholder content must **simulate real-world structure**, not lorem ipsum blocks.

### Acceptable

- Realistic section headings
- Bullet lists
- CTA placement
- Representative paragraph length

### Unacceptable

- `Lorem ipsum`
- Empty sections
- TODO comments
- Single-paragraph pages

### Example Placeholder MDX Body

```
import { Hero } from "@/components/Hero"
import { FeatureGrid } from "@/components/FeatureGrid"
import { CTA } from "@/components/CTA"

<Hero
  title="Azure Environment Assessment"
  subtitle="Gain clarity into security, cost, and architectural risks"
/>

## What This Assessment Covers
- Identity and access review
- Network topology and routing analysis
- Security posture and compliance alignment
- Cost optimization opportunities

## Our Approach
This section will describe the structured methodology used to evaluate enterprise Azure environments, including discovery, analysis, and reporting phases.

<CTA
  label="Request an Assessment"
  service="Azure Environment Assessment"
/>
```

------

## 5. Routing & Layout (REINFORCED)

- Routes must be derived **only** from MDX file structure
- No hardcoded page routes
- No conditional routing based on content presence

Placeholder MDX **must render identically** to production MDX later.

------

## 6. SEO Handling During Placeholder Phase

### 6.1 Draft Behavior

- Draft pages:
  - Excluded from sitemap
  - Excluded from robots indexing
  - Still accessible for preview and testing

### 6.2 Metadata

- Placeholder metadata must be syntactically valid
- Titles/descriptions **will be overwritten later**
- Do not hardcode metadata outside MDX frontmatter

------

## 7. Images During Placeholder Phase

### Rules

- Use **placeholder images** stored in `/public/images/placeholder`
- Final production images will replace files, not paths
- Do not embed text inside images

```
/public/images/placeholder
  hero-generic.png
  diagram-generic.svg
```

Paths **must remain stable**.

------

## 8. Forms During Placeholder Phase

- Forms must be fully functional
- Service identifiers must be passed dynamically
- Placeholder copy must not affect form submission logic

No form logic may depend on MDX content text.

------

## 9. CI/CD & Testing (UNCHANGED, BUT IMPORTANT)

All of the following must work **before production content exists**:

- Build
- Preview environments
- Sitemap generation (excluding drafts)
- robots.txt
- llms.txt
- Playwright tests
- Lighthouse CI

Agents must **not defer these** until content import.

------

## 10. Content Import Compatibility Contract (NEW – HARD REQUIREMENT)

The build must guarantee:

1. Placeholder MDX can be replaced with production MDX **without code changes**
2. Frontmatter schema must be identical
3. Component imports must be compatible
4. No page-specific logic may assume placeholder wording

Violations of this contract are a **hard failure**.

------

## 11. Explicit Agent Instructions (NEW)

> The agent is building a **content-agnostic delivery system**, not a marketing site.

Agents must:

- Assume all placeholder MDX will be replaced
- Avoid tuning layouts to placeholder copy length
- Avoid conditional rendering based on content presence
- Avoid page-specific hacks

------

## 12. Summary for Agents (Plain Language)

- Build the full site now
- Use realistic placeholder MDX
- Mark all placeholder pages as drafts
- Ensure sitemap/SEO/CI work immediately
- Make content replacement a **pure data swap**

------

## What this enables you to do immediately

- Start building with Figma Make templates **today**
- Run CI/CD, previews, SEO automation **now**
- Extract content in parallel without blocking
- Import production content later in hours, not weeks