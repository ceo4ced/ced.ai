# ced.ai — Project Context for Claude Code

## What is this?
ced.ai is an AI consulting firm website for Cedric Williams. McKinsey energy, one person, AI-powered. It's a brand, not a resume. Built with **Astro 5.x** + MDX, deploying to GitHub Pages.

## The Core Equation
```
ced.ai = CompSci + CogSci + AI
```
This is the brand identity. Three disciplines, one methodology. The equation appears in the hero with a subtle rainbow color wave animation.

---

## Tech Stack
- **Astro 5.x** — Static site generator with islands architecture
- **@astrojs/mdx** — Case study content in MDX format
- **@astrojs/sitemap** — Auto-generated sitemap
- **Vanilla JS** — No UI framework (future: @astrojs/react for AI side panel)
- **GitHub Pages** — Static deployment via GitHub Actions

## Build Commands
```bash
npm run dev      # Local dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

---

## Site Architecture

```
/               → Homepage (equation + 3 case studies + methodology preview)
/approach       → 6-step methodology + credentials
/approach/compsci → CompSci pillar deep-dive
/approach/cogsci  → CogSci pillar deep-dive
/approach/ai      → AI pillar deep-dive
/work           → Case studies listing (3 case studies)
/work/[slug]    → Individual case study (bid-manager, ncca-zoom, merces)
/faq            → Consolidated FAQ page (20+ Q&As, AEO/GEO optimized)
/contact        → Start an engagement (Formspree form)
```

## Directory Structure
```
src/
├── layouts/           BaseLayout, PageLayout, CaseStudyLayout
├── components/        Nav, Footer, Equation, PillarCard, CaseStudyCard,
│                      MethodologyStep, CTASection, SectionHeader
├── styles/            global.css, typography.css, animations.css,
│                      components.css, utilities.css
├── content/work/      bid-manager.mdx, ncca-zoom.mdx, merces.mdx
├── pages/             index, approach, contact, work/index, work/[...slug]
├── content.config.ts  Content collection schema
└── utils/             (schema helpers)
```

---

## Design System

### Colors
```css
--ced-blue: #017CED;      /* Brand blue */
--ced-orange: #ED5701;    /* Complementary */
--triadic-yellow: #EDCE01;
--triadic-red: #ED0140;
--tetradic-purple: #AE01ED;
```

### Typography
- **EB Garamond** — Headlines, equation, display text
- **DM Sans** — Body text, UI elements
- **JetBrains Mono** — Code, labels, tags, technical elements

### Animation
- Rainbow wave on equation: 10s interval, 350ms duration, 12ms char delay
- Sunrise/sunset theme toggle: 0.8s radial gradient wipe
- Card hover: translateY(-4px), 0.3s ease
- `prefers-reduced-motion` respected throughout

---

## Content Principles

### Authority-First
- Lead with problems solved, not credentials
- "We" for the consultancy voice
- Consultant tone, not job-seeker tone

### AEO/GEO Optimization (LLM Ranking)
- Dedicated /faq page consolidating 20+ Q&As across all topics
- FAQPage schema on every page (30+ Q&As total across site)
- 40-60 word answer capsules on every page
- Question-format headings where natural
- HowTo schema on approach page (6-step methodology)
- DefinedTermSet + DefinedTerm schemas for key concepts (trust surfaces, pure function pipeline, etc.)
- CreativeWork + BreadcrumbList + speakable on case studies (3-4 FAQs per case study)
- ProfessionalService + Organization + Person schemas on homepage with Wikipedia sameAs links
- Speakable markup on homepage, approach, pillar pages, and case studies
- `<link rel="alternate">` for llms.txt in BaseLayout head
- llms.txt with full structured content (methodology, case studies, FAQs, concepts)
- robots.txt explicitly allowing 15+ LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Cohere, Meta, etc.)
- Short paragraphs (2-3 sentences) for extraction
- about/mentions with Wikipedia entity links for technology concepts

### Differentiator
- 6-step methodology: HCI → SpecKit → Pure Functions → TDD → Regression → AI CI/CD
- Backed by: UNC Chapel Hill (Econ + CS/AI/ML), Georgia Tech MS HCI, Data Scientist since 2012

---

## Three Case Studies

1. **SSA/Bid Manager** — Construction bid automation, 90%+ time savings, 406 tests
2. **NCCA Zoom Tracker** — Camera engagement analytics, 25% time reclaimed, 200+ tests
3. **Merces Watch App** — AI watch face recommendations, 71 Swift files, MVVM

---

## Future Scaffolding
- **AI Side Panel** — Empty `<aside>` in PageLayout. Add @astrojs/react when ready.
- **Video sections** — Placeholder components in CaseStudyLayout
- **Blog/Insights** — Dropped for now, can add content collection later

---

## Quick Reference

| Element | Style |
|---------|-------|
| Equation | EB Garamond, clamp(18px, 5.5vw, 72px), CamelCase |
| Section labels | JetBrains Mono, 12px, uppercase, letter-spacing 2px |
| Body text | DM Sans, 15-16px, --text-secondary |
| Cards | --bg-card, 1px --border, 16px radius |
| Buttons primary | --ced-blue bg, white text, 10px radius |
| Buttons secondary | transparent bg, --text-primary, subtle border |

---

## Don't Do
- Don't make it look like a resume or job application
- Don't add chatbot-style interfaces (AI panel will be contextual, not chat)
- Don't break the equation onto multiple lines
- Don't make animations flashy or attention-seeking
- Don't commit secrets or API keys
