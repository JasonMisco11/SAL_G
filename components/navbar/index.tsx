"use client"; // 1. REQUIRED for useState and onClick

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navlinks"; 

const Navbar = () => {
  // 2. Define the state variable
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="border-2 border-black px-2 py-1">
            <span className="font-bold text-xl tracking-tighter text-black uppercase">
              SAF
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-gray-600 font-medium hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#1a1a1a] text-white px-6 py-2.5 text-sm font-semibold rounded-sm cursor-pointer hover:bg-black/90 transition-all">
            Book
          </button>
        </div>

        {/* Mobile Toggle Button */}
        {/* 3. Fixed the {{ typo here */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon (Menu) */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div> 
      {/* 4. Closed the main container div here */}

      {/* 5. Added the Mobile Menu Overlay so the button works */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;