# PixelStudio — Design Agency Landing Page

## Setup Instructions

### Prerequisites
- Node.js v18.x or later
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd pixelstudio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open in browser
Visit [http://localhost:3000](http://localhost:3000)

---

## Tech Stack Used

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework, routing, image & font optimization |
| **React 19** | UI rendering with functional components and hooks |
| **Tailwind CSS v4** | Utility-first responsive styling and dark mode |
| **Framer Motion** | Mobile dropdown and Hero spotlight animations |
| **Lucide React** | Lightweight SVG icon library |
| **CVA (class-variance-authority)** | Reusable Button variant system |
| **next/font/google** | Zero-layout-shift Google Fonts (Poppins, DM Sans) |
| **View Transitions API** | Ripple animation for dark/light mode toggle |

---

##  Assumptions & Additional Features

### Assumptions Made
- **Client-side form only** — The contact form simulates submission using `useState` and a local timeout to show a success state. No backend is connected, as this is a frontend assessment.
- **Static assets** — Portfolio images are served from the `public/` directory. In a production environment these would come from a CMS or CDN.
- **Single-page architecture** — The navbar uses smooth-scroll anchor links (`#services`, `#portfolio`, `#contact`) instead of separate routes, which is standard for an agency landing page.

### Additional Features Implemented
-  **Animated Dark / Light Mode** — Smooth circular ripple transition using the native View Transitions API, with theme persisted to `localStorage`
-  **Hero Spotlight Effect** — Animated radial gradient beams that oscillate in dark mode using Framer Motion
-  **Mobile Navigation** — Animated slide-in overlay menu triggered by a hamburger icon
-  **Accessibility** — Semantic `<section>` elements with `id` anchors, `sr-only` label on the theme toggle button
-  **Reusable Button Component** — CVA-powered `Button` with variants (`default`, `link`, `secondary`) used consistently across all sections
-  **SEO Optimized** — Descriptive `title`, `description`, `keywords`, and OpenGraph metadata in `layout.jsx`
-  **Performance** — `next/image` with `sizes` prop on all portfolio images, `"use client"` only where interactivity is needed (server components by default)
