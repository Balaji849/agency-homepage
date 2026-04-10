/**
 * Component: Home (Page Entry Point)
 * Purpose:   Root page that assembles all major sections of the agency website.
 *            Acts as the composition layer — imports and renders each section component.
 * Sections:  Navbar, Hero, Services, Portfolio, Contact
 * Used in:   app/layout.jsx (via Next.js App Router)
 */

import Navbar from "@/components/Navbar";
import Hero from "@/app/hero/Hero";
import Services from "@/app/service/Services";
import Portfolio from "@/app/portfolio/Portfolio";
import Contact from "@/app/contact/Contact";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black/96 antialiased relative">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section */}
      <Contact />

    </main>
  );
}
