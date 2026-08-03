# System Design & Architecture (`empowerandlink`)

## 1. Overview & Architecture
`empowerandlink` is a multi-service business platform built as a static client-side web application using **Next.js 16 (App Router)** and **React 19**, styled with **Tailwind CSS v4**. 

- **Rendering Strategy:** Static HTML Export (`output: 'export'` in `next.config.ts`). There is no Node.js backend server or SSR.
- **Hosting / Deployment:** Configured for GitHub Pages at `/empowerandlink` base path (`NEXT_PUBLIC_BASE_PATH`).
- **Data Persistence:** Client-side / static JSON / Markdown files (`content/blog/`) for blog posts. No database or ORM is used. Forms use **EmailJS** (`@emailjs/browser`) for client-side email dispatch.

---

## 2. Directory Structure & Key Modules

```text
app/
├── admin/                  # CMS / Admin Editor interface for blog management
├── blog/                   # Blog listing and dynamic slug view ([slug])
├── company/                # Company profile and philosophy page
├── contact/                # Central contact page
├── english/                # English language services, courses, and pricing
├── ict/                    # ICT / IT Solutions and Offshore development overview
├── japanese/               # Japanese language training programs
├── notion/                 # Notion consulting and workspace implementation services
├── recruitment/            # Global talent recruitment and visa support
├── smartMensetsu/          # AI Interview preparation tool (Smart Mensetsu)
├── offshore/               # Offshore software development services
├── components/             # Reusable UI & section components grouped by domain
│   ├── blog/
│   ├── english/
│   ├── ict/
│   ├── japanese/
│   ├── layout/             # CosmosNav, CosmosFooter, ConditionalLayout
│   ├── notion/
│   ├── offshore/
│   ├── recruitment/
│   ├── sections/           # Global homepage sections (Hero, Services, Philosophy)
│   ├── smartMensetsu/
│   └── ui/                 # BTN, ContactForm, contactButton
├── constants/              # Static data constants (services, pricing, copy)
├── utils/                  # Helper utilities (blog parser, GitHub API helpers, path helpers)
├── globals.css             # Tailwind CSS entry and global styles
├── layout.tsx              # Root layout wrapping nav, footer, and providers
└── page.tsx                # Homepage entry point
```

---

## 3. Core Features & Service Areas

1. **Global Navigation & Footer (`app/components/layout/`)**
   - Responsive navbar (`CosmosNav`) and footer (`CosmosFooter`) linking across all 7 core service verticals.
2. **Multi-Service Offerings:**
   - **English Services:** Course listings, pricing, QA, testimonials, and contact integration.
   - **Japanese Training:** Corporate and individual language programs, curriculum, and challenge problem breakdown.
   - **Recruitment & Visa Support:** Tokutei Ginou / Gijinkoku visa support, country partner networks, and recruitment process flow.
   - **Notion Consulting:** Workspace setup, pricing factors, basic plans, and client success examples.
   - **ICT & Offshore Development:** Offshore engineering teams, AI interview platform (`Smart Mensetsu`), and Notion integration workflows.
3. **Markdown Blog (`app/blog/`)**
   - Renders posts from `content/blog/` using `gray-matter` and `marked` / `react-markdown`.
4. **Admin Editor (`app/admin/`)**
   - Built-in management tool allowing content editors to manage blog posts and interact with GitHub repository storage.
5. **Inquiry / Contact (`app/components/ui/ContactForm.tsx`)**
   - Client-side form submissions integrated directly with EmailJS.

---

## 4. Technical Constraints & Conventions

- **No Server-Side Code:** Because `output: 'export'` is enforced, all data fetching and rendering must be static at build time or client-side runtime. API routes and SSR are unavailable.
- **Asset Paths:** Static assets and internal links must respect `NEXT_PUBLIC_BASE_PATH` (`/empowerandlink`) to function correctly on GitHub Pages.
- **Image Handling:** Next.js image optimization is disabled (`unoptimized: true`) due to static export constraints. Standard `<img>` tags or unoptimized `next/image` are used.
