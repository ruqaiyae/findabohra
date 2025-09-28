"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMiniXMark, RxHamburgerMenu } from "./icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className=" flex items-center text-2xl font-bold">
              <Image src="/logo.png" alt="logo" height={50} width={50} />
              <span className="text-[#7C2D92] ml-2">FindABohra</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/#home"
              className="text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#features"
              className="text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
            >
              Features
            </Link>
            {/* <Link
              href="/#testimonials"
              className="text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/#blog"
              className="text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="/#footer"
              className="text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#4B5563] font-semibold hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <HiMiniXMark className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/#home"
                className="block px-3 py-2 text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-2 text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#features"
                className="block px-3 py-2 text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
              >
                Features
              </Link>
              {/* <Link
                href="/#testimonials"
                className="block px-3 py-2 text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="/#blog"
                className="block px-3 py-2 text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
              >
                Blog
              </Link> */}
              <Link
                href="/#footer"
                className="block px-3 py-2 text-[#4B5563] font-semibold hover:text-purple-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
