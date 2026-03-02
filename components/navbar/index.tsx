"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={siteConfig.logo} alt="Logo" width={80} height={80} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav_Links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-600 font-medium hover:text-[--color-primary] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-[--color-primary] text-white px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-[--color-primary-hover] transition-all inline-block"
          >
            Book
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {siteConfig.nav_Links.map((link) => (
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
