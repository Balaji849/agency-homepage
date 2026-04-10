/**
 * Component: Portfolio
 * Purpose:   Displays a responsive grid of 6 agency portfolio projects.
 *            Each card features an image with a hover zoom effect, a dark overlay,
 *            and slide-up project info (title, category, "View Project" link).
 *            Project data is managed via a local `portfolioProjects` array.
 * Used in:   app/page.jsx
 * Section ID: #portfolio (used by Navbar anchor links)
 */

import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const portfolioProjects = [
  {
    id: 1,
    title: "NexGen Saas Dashboard",
    image: "/portfolio/dashboard.jpg",
    category: "Web Application",
  },
  {
    id: 2,
    title: "Aura E-Commerce Platform",
    image: "/portfolio/ecommerce.png",
    category: "E-Commerce",
  },
  {
    id: 3,
    title: "Lumina Marketing Campaign",
    image: "/portfolio/marketing.jpg",
    category: "Digital Marketing",
  },
  {
    id: 4,
    title: "TechFlow Landing Page",
    image: "/portfolio/web_design.jpg",
    category: "Web Design",
  },
  {
    id: 5,
    title: "Nova Brand Identity",
    image: "/portfolio/branding.png",
    category: "Brand Identity",
  },
  {
    id: 6,
    title: "Elevate Mobile App",
    image: "/portfolio/mobile_app.jpg",
    category: "Mobile Design",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-neutral-50 dark:bg-black/96 relative z-10 border-t border-neutral-200 dark:border-neutral-800 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 mb-6">
            Selected Works
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Explore some of our recent digital agency projects where we combine creativity with cutting-edge technology to achieve incredible results.
          </p>
          <div className="w-px h-16 bg-neutral-200 dark:bg-neutral-800 mt-8 hidden md:block"></div>
        </div>

        {/* CSS Grid for the Portfolio  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 cursor-pointer   transition-all duration-500"
            >
              {/* Image Container with Hover Scale Animation */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Dark Overlay that appears on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
              </div>

              {/* Project Info appearing on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end">
                <span className="text-gray-200 font-medium text-sm mb-2 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <Link href="#" className="inline-flex w-fit items-center text-sm p-4 border-none bg-gray-500/50 rounded-xl text-white hover:text-neutral-200 transition-colors">
                  View Project <ArrowRight className="ml-2" />
                </Link>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-white">
            See All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
