"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md flex items-center justify-center'>
              <Brain className='h-5 w-5 text-white' />
            </div>
            <span className='font-bold text-xl'>CodeCraf</span>
          </div>

          {/* Mobile menu button */}
          <button
            className='md:hidden flex items-center'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            <Link
              href='/'
              className='text-gray-700 hover:text-purple-600 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/services'
              className='text-gray-700 hover:text-purple-600 transition-colors'
            >
              Services
            </Link>
            <Link
              href='/portfolio'
              className='text-gray-700 hover:text-purple-600 transition-colors'
            >
              Portfolio
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-purple-600 transition-colors'
            >
              About
            </Link>
            <Link
              href='/faq'
              className='text-gray-700 hover:text-purple-600 transition-colors'
            >
              FAQ
            </Link>
            <Link
              href='#contact'
              className='text-gray-700 hover:text-purple-600 transition-colors'
            >
              Contact
            </Link>
          </nav>

          <div className='hidden md:block'>
            <Button
              className='bg-[#1dbf73] hover:bg-[#19a463] text-white'
              onClick={() =>
                window.open("https://www.fiverr.com/code_craf", "_blank")
              }
            >
              Fiverr Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-100 py-4 shadow-md'>
          <div className='container mx-auto px-4 flex flex-col space-y-3'>
            <Link
              href='/'
              className='text-gray-700 hover:text-purple-600 transition-colors py-2'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/services'
              className='text-gray-700 hover:text-purple-600 transition-colors py-2'
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/portfolio'
              className='text-gray-700 hover:text-purple-600 transition-colors py-2'
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-purple-600 transition-colors py-2'
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/faq'
              className='text-gray-700 hover:text-purple-600 transition-colors py-2'
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href='#contact'
              className='text-gray-700 hover:text-purple-600 transition-colors py-2'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className='bg-[#1dbf73] hover:bg-[#19a463] text-white w-full mt-4'
              onClick={() => {
                window.open("https://www.fiverr.com/", "_blank");
                setIsMenuOpen(false);
              }}
            >
              Fiverr Profile
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
