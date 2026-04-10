/**
 * Component: Services
 * Purpose:   Displays all agency service offerings in a bento-grid card layout.
 *            Features 5 service cards: Content Strategy, UX/UI Research, Branding Identity,
 *            Web Development, and Digital Marketing (wide card with image).
 *            Each card uses hover animations (scale, border color) and Lucide icons.
 * Used in:   app/page.jsx
 * Section ID: #services (used by Navbar anchor links)
 */

import { PenTool, Layers, Fingerprint, CodeXml, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-black/96 relative z-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 mb-6">
            Services We Offer
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to elevate your business in the modern landscape.
          </p>
          <div className="w-px h-16 bg-neutral-200 dark:bg-neutral-800 mt-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="col-span-1 border border-neutral-200 dark:border-neutral-800/80 rounded-[2rem] p-8 relative overflow-hidden bg-neutral-50 dark:bg-[#111111] group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="absolute left-7 opacity-20 dark:opacity-[0.40] group-hover:scale-110 transition-transform duration-500">
              <PenTool size={180} className="text-neutral-900 dark:text-gray-500" strokeWidth={1} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <PenTool className="text-gray-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white relative z-10">Content Strategy</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 relative z-10 line-clamp-3">
              Compelling narratives that engage your audience and drive conversions through SEO-optimized copy.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-gray-500 relative z-10 mt-auto">
              <Link href="#">Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 border border-neutral-200 dark:border-neutral-800/80 rounded-[2rem] p-8 relative overflow-hidden bg-neutral-50 dark:bg-[#111111] group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="absolute left-7 opacity-20 dark:opacity-[0.40] group-hover:scale-110 transition-transform duration-500">
              <Layers size={180} className="text-neutral-900 dark:text-gray-500" strokeWidth={1} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <Layers className="text-gray-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white relative z-10">UX/UI Research</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 relative z-10 line-clamp-3">
              User-centric design backed by data analysis to ensure intuitive and enjoyable digital interactions.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-gray-500 relative z-10 mt-auto">
              <Link href="#">Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 border border-neutral-200 dark:border-neutral-800/80 rounded-[2rem] p-8 relative overflow-hidden bg-neutral-50 dark:bg-[#111111] group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="absolute left-7 opacity-20 dark:opacity-[0.40] group-hover:scale-110 transition-transform duration-500">
              <Fingerprint size={180} className="text-neutral-900 dark:text-gray-500" strokeWidth={1} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <Fingerprint className="text-gray-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white relative z-10">Branding Identity</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 relative z-10 line-clamp-3">
              Creating memorable brand identities that stand out in a crowded marketplace and build trust.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-gray-500 relative z-10 mt-auto">
              <Link href="#">Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>

          {/* Card 4 */}
          <div className="col-span-1 border border-neutral-200 dark:border-neutral-800/80 rounded-[2rem] p-8 relative overflow-hidden bg-neutral-50 dark:bg-[#111111] group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="absolute left-7  opacity-20 dark:opacity-[0.40] group-hover:scale-110 transition-transform duration-500">
              <CodeXml size={180} className="text-neutral-900 dark:text-gray-500" strokeWidth={1} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <CodeXml className="text-gray-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white relative z-10">Web Development</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 relative z-10 line-clamp-3">
              Robust, scalable, and secure web solutions built on the latest frameworks for optimal performance.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-gray-500 relative z-10 mt-auto">
              <Link href="#">Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>

          {/* Card 5 */}
          <div className="col-span-1 md:col-span-2 border border-neutral-200 dark:border-neutral-800/80 rounded-[2rem] relative overflow-hidden bg-neutral-50 dark:bg-[#111111] flex flex-col md:flex-row group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="flex-1 p-8 md:pr-0 relative z-10 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
                <Rocket className="text-gray-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">Digital Marketing & Growth</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
                Full-funnel marketing strategies including SEO, PPC, and Social Media to accelerate your business growth.
              </p>
              <div className="mt-auto">
                <Button variant="secondary" size="sm" className="rounded-full">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative min-h-75 md:min-h-auto mt-8 md:mt-0 lg:ml-8">
              <div className="absolute right-0 bottom-0 top-12 left-8 md:left-0 rounded-tl-xl overflow-hidden border-t border-l border-neutral-300 dark:border-neutral-700/50 shadow-2xl">
                <img 
                  src="/marketing_photo.jpg" 
                  alt="Marketing Dashboard" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
