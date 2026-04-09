# PixelStudio Digital Agency Landing Page

A modern, high-performance, and deeply engaging landing page for a fractional Digital Agency, built to showcase premium digital services and impressive portfolio projects.

##  Setup Instructions

Follow these instructions to run the application locally on your machine.

### Prerequisites
- Node.js (v18.x or later)
- npm, yarn, pnpm, or bun

### 1. Clone the repository
```bash
# If securely hosted, clone via your preferred method
git clone <your-repository-url>
cd pixelstudio
```

### 2. Install dependencies
Ensure all packages like `framer-motion`, `lucide-react`, and `radix-ui` are properly downloaded:
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

### 4. View the App
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the local instance of the landing page.

---

##  Tech Stack Used

This project was built utilizing modern web technologies and best practices:

- **Framework:** [Next.js] (App Router) - For optimized routing, superior performance, and easy image optimization (`next/image`).
- **Styling:** [Tailwind CSS] - Used globally for rapid responsive design, fluid layouts (Flexbox/Grid), and immediate Dark Mode integration without messy CSS files.
- **Icons:** [Lucide React] - For lightweight, consistent, and beautiful SVG icons across the navigation and contact sections.
- **Animations:** [Framer Motion] (via `motion/react`) - For staggered entrance animations, spotlight effects, and smooth interactive layout transitions.
- **Component Libraries:** Custom implementations drawing inspiration from modern UI systems (like Aceternity UI drop-ins for the Hero Spotlight and Hover Cards).
- **Typography:** `next/font/google` - Configured with "Poppins" and "DM Sans" to avoid layout shifts and maintain a highly legible and premium look.

---

## ✨ Assumptions & Additional Features

### Assumptions Made
- **Client-Side Form Handling:** It is assumed that the agency does not have an active database connected yet. Therefore, the contact form currently mimics a backend submission process using React Hooks (`useState`) and a local timeout to trigger the visual "Success State".
- **Static Assets:** The project assumes that portfolio images are statically served via the `public/` directory rather than a headless CMS, which is optimal for a fast MVP delivery.
- **No Complex Routing:** Since this is a specialized landing page, it assumes a singular page architecture where the Navbar smoothly directs users to different sections locally via Hash links (`#services`).

### Additional Features Implemented
- **Robust Dark/Light Mode Theme Integration:** Deep integration of Tailwind's `dark:` classes implemented throughout every component—the dark backdrop, border colors, inputs, and gradients fluidly adapt using the custom animated theme switch button in the navigation.
