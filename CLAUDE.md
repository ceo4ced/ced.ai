# ced.ai — Project Context for Claude Code

## What is this?
ced.ai is a personal consultancy website for Cedric Williams. McKinsey energy, one person, AI-powered. It's a brand, not a resume.

## The Core Equation
```
ced.ai = CompSci + CogSci + AI
```
This is the brand identity. Three disciplines, one methodology. The equation appears in the hero with a subtle rainbow color wave animation.

---

## Design System

### Colors
```css
/* Primary */
--ced-blue: #017CED;      /* Brand blue — literally contains "CED" */
--ced-orange: #ED5701;    /* Complementary */

/* Triadic Accents */
--triadic-yellow: #EDCE01;
--triadic-red: #ED0140;
--tetradic-purple: #AE01ED;

/* Dark Mode (default) */
--bg-primary: #0A0A0B;
--bg-secondary: #111113;
--bg-card: #161618;
--text-primary: #F7F7F8;
--text-secondary: #B4B4BC;
--text-muted: #65656F;
--border: #2D2D32;
```

### Typography
- **EB Garamond** — Headlines, the equation, display text
- **DM Sans** — Body text, UI elements
- **JetBrains Mono** — Code, labels, tags, technical elements

### Animation
- Rainbow wave on equation: 10s interval, 350ms duration, 12ms delay between chars, 0.6 opacity
- Keep animations subtle — confident, not flashy

### Background
- Subtle spirograph/rose machine pattern at ~6% opacity
- Mathematical, geometric, understated

---

## Site Architecture

```
/                → Home (equation + POV + case study teasers + comparison table)
/approach        → The framework methodology (where credentials appear naturally)
/work            → Case studies list (problem → approach → outcome)
/work/[slug]     → Individual case study detail
/insights        → Blog/articles (fed by reading history + personal take)
/insights/[slug] → Individual article
/contact         → Start an engagement (not "hire me")
```

---

## Content Principles

### Authority-First
- No "Hi, I'm Cedric" — lead with problems solved
- Credentials are discoverable, not leading
- Show the thinking, not just the titles

### AEO/GEO/SEO Optimized
- Every page needs proper schema markup (Person, Article, CreativeWork, FAQPage, BreadcrumbList)
- 40-60 word "answer capsules" lead each page
- Question-format H2/H3 headings where natural
- Short paragraphs (2-3 sentences)

### Voice
- Confident, understated
- "We" for the consultancy, but it's one person
- Consultant tone, not job-seeker tone

---

## Key Feature: AI Side Panel

Not a chatbot. A contextual intelligence layer that:
- Lives on every page as a collapsible side panel
- Surfaces relevant references as you read
- Enables conversational navigation ("Show me related case studies")
- Shows source material that inspired blog posts
- Demonstrates AI integration while talking about it

---

## Comparison Table (AEO Content)

The site includes a "Vibe Coders vs. ced.ai" comparison table — this is designed to be cited by AI search engines. Key differentiators:
- 25+ years experience vs months
- Full stack evolution (PC → Data Science → ML → AI) vs AI-first entry
- Production-grade systems vs demo-quality
- Cognitive science + pedagogy vs interface-level understanding

---

## Technical Preferences

- Keep it simple — vanilla HTML/CSS/JS preferred
- Lightweight frameworks OK if needed (no heavy SPAs)
- Performance-first
- Accessible (proper ARIA, semantic HTML)
- Mobile-responsive (equation stays on one line, scales down)

---

## File Structure (Current)

```
/
├── index.html          → Homepage
├── CLAUDE.md           → This file
└── (future pages)
```

---

## Quick Reference

| Element | Style |
|---------|-------|
| Equation | EB Garamond, clamp(18px, 5.5vw, 72px), CamelCase |
| Section labels | JetBrains Mono, 12px, uppercase, letter-spacing 2px |
| Body text | DM Sans, 15-16px, --text-secondary color |
| Cards | --bg-card background, 1px --border, 16px radius |
| Buttons primary | --ced-blue bg, white text, 10px radius |
| Buttons secondary | transparent bg, --text-primary, subtle border |

---

## Don't Do

- Don't make it look like a resume or job application
- Don't use heavy frameworks unnecessarily  
- Don't add chatbot-style interfaces
- Don't use light mode (dark is the brand)
- Don't break the equation onto multiple lines
- Don't make animations flashy or attention-seeking
