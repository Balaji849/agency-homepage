"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { AlignJustify, AlignJustifyIcon, X } from 'lucide-react'
import { DropdownMenu } from 'radix-ui'

import DropDownMenu from '@/components/DropDownMenu'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'

const Navbar = () => {

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible)
  }
  const closeDropDown = () => {
    setIsDropDownVisible(false)
  }
  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className='relative p-6 md:px-10 md:py-4 flex items-center justify-between z-50 w-full'>
        <div className='flex-1'>
          <Link className='cursor-pointer' href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className='w-10 h-10 md:w-14 md:h-14' />
          </Link>
        </div>
        <div className='cursor-pointer hidden md:flex space-x-10 items-center justify-center text-center text-neutral-800 dark:text-neutral-300 font-medium whitespace-nowrap'>

          <a href="#services"><div className='hover:text-black dark:hover:text-white transition-colors'>Services</div></a>
          <a href="#portfolio"><div className='hover:text-black dark:hover:text-white transition-colors'>Portfolio</div></a>
          <a href="#contact"><div className='hover:text-black dark:hover:text-white transition-colors'>Contact</div></a>
        </div>
        <div className='flex flex-1 items-center justify-end gap-4'>
          <AnimatedThemeToggler className="w-8 h-8 text-neutral-800 dark:text-slate-300 cursor-pointer" />
          <div className='flex md:hidden'>
            {
              isDropDownVisible ? (
                <div onClick={toggleDropDown} className='w-8 h-8 text-neutral-800 dark:text-slate-300 cursor-pointer'>
                  <X />
                  <DropDownMenu onClose={closeDropDown} />
                </div>
              ) : (
                <AlignJustify onClick={toggleDropDown}
                  className='w-8 h-8 text-neutral-800 dark:text-slate-300 cursor-pointer' />
              )
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar