/**
 * Component: RootLayout
 * Purpose:   Global layout wrapper for the entire Next.js application.
 *            Applies Google Fonts (Poppins + DM Sans), global CSS, and SEO metadata.
 *            Enables smooth scrolling via the scroll-smooth class on <html>.
 * Used in:   Wraps all pages automatically via Next.js App Router convention.
 */

import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight:['400','500'],
  style:['normal','italic'],
  variable:"--font-serif",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight:['400','500'],
  style:['normal','italic'],
  variable:"--font-sans",
});





export const metadata = {
  title: "PixelStudio — Modern Design Agency",
  description: "PixelStudio is a modern design agency specializing in minimal, performant, and deeply engaging web experiences. From UI/UX and branding to full-stack web development and digital marketing.",
  keywords: ["design agency", "web development", "UI/UX", "branding", "digital marketing", "Next.js"],
  openGraph: {
    title: "PixelStudio — Modern Design Agency",
    description: "We transform ideas into digital experiences that matter.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.variable} ${dmsans.variable} font-serif`}>
        {children}
      </body>
    </html>
  );
}
