'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-24 flex items-center justify-center relative">
          {/* Left-side nav items on desktop */}
          <div className="hidden md:flex md:absolute md:left-0 md:items-center">
            <div className="flex justify-between w-60">
              <Link 
                href="/" 
                className="relative text-gray-700 px-3 py-2 font-medium text-lg transition-all duration-300 group"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--primary-pink)] group-hover:scale-110 inline-block">Home</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-pink)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 transform scale-y-0 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-10 rounded-md"></span>
              </Link>
              <Link 
                href="/about" 
                className="relative text-gray-700 px-3 py-2 font-medium text-lg transition-all duration-300 group"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--primary-pink)] group-hover:scale-110 inline-block">About</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-pink)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 transform scale-y-0 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-10 rounded-md"></span>
              </Link>
            </div>
          </div>
          
          {/* Centered logo */}
          <div className="flex-shrink-0 flex items-center transform hover:scale-105 transition-transform duration-300">
            <Link href="/" className="block">
              <Image
                src="/logos/yogaGingerLogo.png"
                alt="Yoga Ginger Logo"
                width={200}
                height={70}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Right-side nav items on desktop */}
          <div className="hidden md:flex md:absolute md:right-0 md:items-center">
            <div className="flex w-72">
              <Link 
                href="/schedule" 
                className="relative text-gray-700 px-3 py-2 font-medium text-lg transition-all duration-300 group mr-14"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--primary-pink)] group-hover:scale-110 inline-block">Schedule</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-pink)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 transform scale-y-0 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-10 rounded-md"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative text-gray-700 px-3 py-2 font-medium text-lg transition-all duration-300 group ml-auto"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--primary-pink)] group-hover:scale-110 inline-block">Contact</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-pink)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 transform scale-y-0 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-10 rounded-md"></span>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 bg-white">
          <Link 
            href="/" 
            className="relative group block pl-3 pr-4 py-3 font-medium text-lg border-l-4 border-transparent hover:border-[var(--primary-pink)] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-gray-700 group-hover:text-[var(--primary-pink)] transition-colors duration-300">Home</span>
          </Link>
          <Link 
            href="/about" 
            className="relative group block pl-3 pr-4 py-3 font-medium text-lg border-l-4 border-transparent hover:border-[var(--primary-pink)] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-gray-700 group-hover:text-[var(--primary-pink)] transition-colors duration-300">About</span>
          </Link>
          <Link 
            href="/schedule" 
            className="relative group block pl-3 pr-4 py-3 font-medium text-lg border-l-4 border-transparent hover:border-[var(--primary-pink)] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-gray-700 group-hover:text-[var(--primary-pink)] transition-colors duration-300">Schedule</span>
          </Link>
          <Link 
            href="/contact" 
            className="relative group block pl-3 pr-4 py-3 font-medium text-lg border-l-4 border-transparent hover:border-[var(--primary-pink)] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-gray-700 group-hover:text-[var(--primary-pink)] transition-colors duration-300">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}