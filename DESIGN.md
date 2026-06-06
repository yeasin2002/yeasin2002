# Md Kawsar Islam Yeasin — Junior Software Developer

## Mission
Create implementation-ready, token-driven UI guidance for Md Kawsar Islam Yeasin — Junior Software Developer that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Md Kawsar Islam Yeasin — Junior Software Developer
- URL: https://id-preview--b1e3e743-0c08-4011-b7d9-5384e6ae2afb.lovable.app/
- Audience: developers and technical teams
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, ui-sans-serif, system-ui, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=20px`, `font.size.2xl=30px`, `font.size.3xl=60px`, `font.size.4xl=72px`
- Color palette: `color.border.default=oklch(0.22 0.02 270)`, `color.text.secondary=oklch(0.975 0.025 95)`, `color.text.tertiary=oklab(0.975 -0.0021789 0.0249049 / 0.8)`, `color.text.inverse=oklch(0.55 0.24 270)`, `color.surface.base=#000000`, `color.surface.strong=oklab(0.975 -0.0021789 0.0249049 / 0.03)`, `color.border.muted=oklab(0.975 -0.0021789 0.0249049 / 0.15)`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=10px`, `space.4=12px`, `space.5=14px`, `space.6=16px`, `space.7=20px`, `space.8=24px`
- Radius/shadow/motion tokens: `radius.xs=6px`, `radius.sm=18px`, `radius.md=33554400px` | `shadow.1=oklch(0.22 0.02 270) 6px 6px 0px 0px`, `shadow.2=rgba(0, 0, 0, 0.88) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.08) 0px 4px 4px -2px, rgba(0, 0, 0, 0.08) 0px 8px 8px -4px, rgba(0, 0, 0, 0.08) 0px 16px 16px -8px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (18), inputs (15), lists (9), cards (6), buttons (3), navigation (2).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
