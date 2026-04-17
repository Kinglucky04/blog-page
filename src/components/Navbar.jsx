import React from 'react'
import { Image } from '@imagekit/react';
import Images from '../components/Images';
import { Menu, X } from "lucide-react";

import { useState } from 'react'

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-16 md:h-20 flex items center justify-between'>
      <div className='flex items-center gap-2 font-bold text-lg md:text-2xl'>
        <Images src="/blockforge-logo.png" className="w-8 h-8" alt="blockforge-logo" />
        <span>Blockforge </span>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile Button */}
            <div className='cursor-pointer' onClick={() => setOpen((prev) => !prev)}>
                {open ? <X size={28} /> : <Menu size={28} />}
            </div>


             {/* Mobile link list */}
            <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 text-lg  absolute top-20 bg-gray-950 transition-all ease-in-out
                 ${open ? "left-0" : "-left-full"}`}>
                   
                      <a href="">Home</a>
                        <a href="">Trending</a>
                        <a href="">Most Popular</a>
                        <a href="">About</a>
                        <a href="">
                            <button className='py-2 px-4 rounded bg-blue-400 cursor-pointer font-medium uppercase '>
                                Sign In
                            </button>
                        </a>
                 
                </div>
      </div>

      {/* desktop Menu */}
      {/* include the hamburger icon */}
      <div className="hidden md:flex gap-8 xl:gap-12 font-medium uppercase items-center">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
            <button className='py-2 px-4 rounded bg-blue-400 cursor-pointer font-medium uppercase '>
                Sign In
            </button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
