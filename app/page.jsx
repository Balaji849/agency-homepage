
import { Spotlight } from "@/components/ui/spotlight-new";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Services from "@/app/service/Services";
import Portfolio from "@/app/portfolio/Portfolio";
import Contact from "@/app/contact/Contact";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black/96 antialiased relative ">
      <Navbar/>
      <div className="w-full min-h-[calc(100vh-100px)] bg-grid-black/[0.02] dark:bg-grid-white/[0.02] relative overflow-hidden flex flex-col">
        <div className="hidden dark:block">
          <Spotlight />
        </div>
        <div className="p-4 mx-auto relative z-10 w-full flex-grow flex flex-col items-center justify-center -mt-20">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
             We Transform Ideas <br /> into digital experiences that matter.
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-700 dark:text-neutral-300 max-w-2xl text-center mx-auto px-4">
           A modern design agency specializing in minimal, performant, and deeply engaging web applications.
          </p>
          <div className="flex justify-center mt-8">
              <Link href="#portfolio" className="flex items-center justify-center px-8 py-4 text-base font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full hover:scale-105 transition-transform w-max">
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
          </div>
        </div>
      </div>
      
      {/* service section */}
      <Services />

      {/* portfolio section */}
      <Portfolio />

      {/* contact section */}
      <Contact />

    </main>
  );
}
