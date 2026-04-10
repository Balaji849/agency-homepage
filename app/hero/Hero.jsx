/**
 * Component: Hero
 * Purpose:   Full-viewport hero section that serves as the landing view of the website.
 *            Displays the agency headline, subtext, and a CTA button linking to the Portfolio.
 *            Features an animated Spotlight background effect visible in dark mode only.
 * Used in:   app/page.jsx
 * Children:  Spotlight (dark mode background animation)
 */

import { Spotlight } from "@/components/ui/spotlight-new";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-grid-black/[0.02] dark:bg-grid-white/[0.02] relative overflow-hidden flex flex-col">
      {/* Spotlight — dark mode only */}
      <div className="hidden dark:block">
        <Spotlight />
      </div>

      {/* Hero Content */}
      <div className="p-4 mx-auto relative z-10 w-full flex-grow flex flex-col items-center justify-center -mt-20">

        {/* Agency Name */}
        <div className="mb-4 px-4 py-1.5 rounded-full border border-neutral-600 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 tracking-widest uppercase">
          PixelStudio
        </div>

        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
          We Transform Ideas <br /> into digital experiences that matter.
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-700 dark:text-neutral-300 max-w-2xl text-center mx-auto px-4">
          A modern design agency specializing in minimal, performant, and deeply engaging web applications.
        </p>
        <div className="flex justify-center mt-8">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-8 text-base hover:scale-105 transition-transform"
          >
            <Link href="#portfolio">
              View Our Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
