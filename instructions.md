# Marley — Website Build Prompt for Claude Code

## Tool Stack & MCP Configuration

Before starting, ensure the following are installed and configured in your Claude Code environment:

### 1. Google Stitch MCP — AI-Powered UI Design Generation
Claude Code designs screens via Stitch autonomously, extracts design DNA, and uses it for consistency.

```json
{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["-y", "stitch-mcp"],
      "env": {
        "GOOGLE_CLOUD_PROJECT": "YOUR_PROJECT_ID"
      }
    }
  }
}
```

**Setup:**
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud auth application-default login
gcloud beta services mcp enable stitch.googleapis.com --project=YOUR_PROJECT_ID
```

**Workflow:**
1. Use `generate_screen_from_text` to create each page design from a prompt
2. Use `extract_design_context` to pull the Design DNA (fonts, colours, layout)
3. Feed that context into subsequent screens for consistency
4. Use `fetch_screen_code` to pull HTML/CSS into the project

---

### 2. Nano Banana 2 — AI Image Generation (Gemini Flash)
Generate hero visuals, abstract backgrounds, and brand assets directly from Claude Code.

```json
{
  "mcpServers": {
    "nano-banana": {
      "command": "npx",
      "args": ["nano-banana-mcp"],
      "env": {
        "GEMINI_API_KEY": "your-gemini-api-key-here"
      }
    }
  }
}
```

**Use for:**
- Hero section abstract visuals (warm sandy tones, soft terracotta gradients)
- Section backgrounds and atmospheric textures
- OG/social share images
- Favicon and brand mark

---

### 3. UI UX Pro Max — Design Intelligence Skill

**Install:**
```bash
npm install -g uipro-cli
cd /path/to/marley-website
uipro init --ai claude
```

**Run before building:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "legal tech SaaS warm minimal premium" --design-system -p "Marley"
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "warm earthy premium" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "warm sand terracotta cream" --domain color
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "premium serif minimal" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS landing page minimal" --domain landing
```

---

### 4. 21st.dev — Premium React/Tailwind Components & 3D Elements

**Browse:** https://21st.dev | https://21st.dev/s/reactive

```bash
npx shadcn@latest add "https://21st.dev/r/[author]/[component-name]"
```

**Look for:** Hero sections, navbar, bento grids, 3D elements, animated backgrounds, contact forms, scroll animations

---

## The Build Prompt

```
Build a stunning, modern marketing website for "Marley" — a private AI platform for UK law firms and regulated industries.

## Important Context
- The SOLE purpose of this website is to get visitors to book a demo
- There is NO pricing page — we don't show pricing publicly
- There is a LOGIN button in the nav that redirects to https://app.marley.ai (or placeholder subdomain)
- The site should feel effortless — not salesy. Don't plaster "Book a Demo" on every section
- The landing page is the hero. Keep it simple, clean, and beautiful. Let the design do the talking.

## Tech Stack
- Next.js 14+ with App Router
- Tailwind CSS
- TypeScript
- Components from 21st.dev (install via npx shadcn)
- Images generated via Nano Banana 2 MCP
- Design system from UI UX Pro Max skill

## Colour Scheme — Claude-Inspired but Subtle
Do NOT copy Claude's branding directly. Take inspiration from the warmth and earthiness of Claude's palette and make it your own. The vibe is: warm, intelligent, trustworthy, human.

- BACKGROUND: Deep warm off-black (#1A1715) — not pure black, not navy. Warm and inviting.
- SURFACE: Slightly lighter warm dark (#24221F) — for cards, sections, elevated elements
- PRIMARY TEXT: Warm cream (#F5F0E8) — not pure white, softer on the eyes
- SECONDARY TEXT: Muted warm grey (#9C958A)
- ACCENT: Soft terracotta/burnt orange (#D4845A) — for CTAs, highlights, hover states. Warm, not aggressive.
- ACCENT HOVER: Slightly brighter (#E09568)
- SUBTLE ACCENT: Faded sand (#C4B5A0) — for borders, dividers, subtle highlights
- SUCCESS/TRUST: Soft sage green (#7A9E7E) — for trust badges, security indicators

Typography:
- Headings: Something with character — Fraunces, Gambetta, or Lora (serif with warmth)
- Body: Clean and readable — Satoshi, General Sans, or Plus Jakarta Sans
- The font pairing should feel like a premium editorial magazine, not a tech startup

## Design Principles
- SIMPLICITY FIRST. Every element should earn its place on the page.
- Generous whitespace. Let content breathe.
- NO stock photos. Use abstract visuals from Nano Banana — soft gradients, warm light effects, subtle grain textures
- Animations should be smooth and understated — gentle fades, slow reveals. Nothing flashy.
- Glass morphism only if it looks natural, not forced
- The site should feel like opening a beautifully designed book, not a SaaS landing page

## Navigation
Sticky header, minimal, warm glass effect on scroll:

Logo (left) | Platform | Security | Why Marley | Contact (right side) | Login (text link/subtle button → https://app.marley.ai)

- NO "Book a Demo" button in the nav. The nav should be clean.
- Login button should be understated — a text link or ghost button, not a big CTA

## Pages

### HOME (Landing Page) — This is the most important page. Make it beautiful.

**Hero Section** (full viewport, minimal, impactful)
- Headline: "AI That Understands the Law."
- Subheadline: One sentence. "Private, secure, and built for how your firm actually works."
- Single CTA: "Book a Demo" — warm accent button, subtle glow. This is the ONE place on the landing page with a clear CTA.
- Background: Subtle animated element from 21st.dev — particles, soft gradients, or gentle geometric motion. Nothing distracting. The text is the hero.
- Below the fold: Small trust indicators — "UK Data Residency · GDPR Compliant · SRA Aligned" in muted text

**Problem Section** (scroll into view, gentle fade)
- Short and punchy. 2-3 sentences max.
- "Your lawyers are already using AI. You just don't control it."
- A single line of supporting text about the risk of uncontrolled AI use.
- No CTA here. Let it sit.

**What Marley Does** (clean grid, 3 items max on landing page)
- Private & Secure — "Your data stays yours. Fully isolated, never used for training."
- Built for Legal — "Contract review, research, drafting — not a generic chatbot."
- Compliant by Default — "GDPR, SRA, UK data residency. From day one."
- Each as a minimal card with a subtle icon. No long descriptions.
- No CTA here either.

**Closing Section** (gentle, not pushy)
- "Ready to see it?" or "Curious how it works?"
- "Book a Demo" link — styled as a text link with an arrow, not a big button. Understated.
- That's it. End the page. Don't oversell.

### PLATFORM
- Hero: "Everything your firm needs. Nothing it doesn't."
- Feature breakdown with more detail than the landing page:
  - Knowledge Hub — upload firm documents, Marley references them in answers
  - Document Drafting — first drafts following your firm's templates and tone
  - Legal Research — complex questions, cited sources, your materials + trusted databases
  - Contract Review — clause-by-clause analysis, risk flagging
  - Voice Mode — dictate, ask, review hands-free
  - Audit Trail — every interaction logged for compliance
  - Integrations — Microsoft 365, DMS, existing legal tech
- Each feature as a clean section or card
- One CTA at the bottom: "See it in action — Book a Demo"
- How It Works: Onboard → Configure → Go Live (3 simple steps, animated connectors)

### SECURITY
- Hero: "Your clients trust you. You can trust Marley."
- Clean grid of security features:
  - UK Data Residency (Azure UK regions)
  - AES-256 encryption at rest, TLS 1.3 in transit
  - Tenant Isolation (application-layer, complete separation)
  - Role-based Access Controls + SSO + MFA
  - Full Audit & Logging (exportable)
  - GDPR Compliance (data minimisation, right to deletion)
  - SRA Alignment
  - No Training on Your Data
- Each item with a subtle icon and 1-2 line description
- Bottom CTA: "Want to walk your compliance team through our architecture? Let's talk." → links to contact

### WHY MARLEY
- Hero: "Not another AI chatbot."
- Two comparison sections (styled cleanly, not aggressive):

  **vs Generic AI tools (ChatGPT, Copilot)**
  Generic = public model, no legal workflows, no audit trail, no control
  Marley = private, purpose-built, fully logged, admin oversight

  **vs Enterprise competitors (Harvey, Luminance)**
  Enterprise = US-based, enterprise pricing, long implementation, black box
  Marley = UK-built, priced for 10-200 staff firms, live in days, your knowledge base

- Keep comparisons factual and confident, not snarky
- Bottom: "The best way to understand the difference is to see it. Book a Demo."

### CONTACT
- Hero: "Let's talk."
- Clean form: Full name, Email, Firm name, Firm size (dropdown: 1-10, 10-50, 50-200, 200+), Message (optional)
- CTA: "Book My Demo"
- Below form: "No pressure. We'll walk you through the platform and answer your questions."
- Response time: "We typically respond within 24 hours."

## What NOT to Do
- Do NOT put "Book a Demo" on every section. The landing page has it twice max (hero + closing). Other pages have it once at the bottom.
- Do NOT use aggressive urgency language ("Limited spots!", "Don't miss out!")
- Do NOT use pure black or pure white backgrounds
- Do NOT use blue/purple tech gradients — keep it warm
- Do NOT make it look like every other SaaS landing page
- Do NOT add a pricing page
- Do NOT add a blog, about us, or any other pages beyond the five listed
- Do NOT use cookie-cutter icon libraries. If using icons, they should be minimal line icons that match the warm aesthetic.

## Quality Checklist
- [ ] Mobile responsive (all breakpoints)
- [ ] Lighthouse 90+ performance
- [ ] WCAG AA accessible
- [ ] Smooth 60fps animations
- [ ] Login button correctly links to app subdomain
- [ ] SEO meta tags on every page
- [ ] OG images for social sharing
- [ ] Warm colour scheme consistent across all pages
- [ ] Feels premium, not generic
- [ ] Simple enough that a managing partner would feel comfortable browsing it
```

---

## Build Order

1. **Setup** — Init Next.js, Tailwind, configure MCP servers, install 21st.dev
2. **Design System** — Run UI UX Pro Max for "legal tech SaaS warm minimal premium"
3. **Design in Stitch** — Generate Home page screen, extract design DNA
4. **Home Page** — Hero with subtle 3D/animated element from 21st.dev, Nano Banana visuals
5. **Shared Components** — Navbar (with Login link to app.marley.ai), footer, page transitions
6. **Platform Page** — Feature sections, how-it-works flow
7. **Security Page** — Clean grid with icons
8. **Why Marley Page** — Comparison sections
9. **Contact Page** — Form with validation
10. **Polish** — Animations, responsive testing, Lighthouse audit
11. **Assets** — Nano Banana for remaining images, OG images, favicon
