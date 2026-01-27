import Link from "next/link";
import { NAV_LINKS } from "@/constants/navlinks";

export const Navbar = () => {
   return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="border-2 border-black px-2 py-1">
            <span className="font-bold text-xl tracking-tighter text-black uppercase">
              SAL
            </span>
          </div>
        </Link>

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

        <div className="hidden md:block">
          <button className="bg-[#1a1a1a] text-white px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-black/90 transition-all">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
        </div>

      </div>
    </nav>
  );
};