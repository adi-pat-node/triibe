"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navClass = (path: string) =>
    `text-white hover:text-gray-300 transition-colors text-sm ${
      pathname === path ? "font-bold" : "font-normal"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-950">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/images/headerlogo.png"
                alt="TRIIBE"
                width={80}
                height={80}
                priority
                className="h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/*<a
              href="/"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Home
            </a>*/}
            <Link href="/" className={navClass("/")}>
            Home
            </Link>
            <Link href="/programs" className={navClass("/programs")}>
              Programs
            </Link>
            <Link href="/news" className={navClass("/news")}>
            News
            </Link>
            <Link href="/about-us" className={navClass("/about-us")}>
            About Us
            </Link>
            <Link href="/contact-us" className={navClass("/contact-us")}>
            Contact Us
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/apply"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border  hover:bg-green-950 hover:text-white  hover:border-white rounded   transform transition-transform hover:scale-105"
            >
              Apply
            </a>
            <a
              href="/donate"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border hover:bg-green-950 hover:text-white hover:border-white rounded   transform transition-transform hover:scale-105 "
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-800 mt-4">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className={navClass("/")}>
                Home
              </Link>
              <Link href="/programs" className={navClass("/programs")}>
                Programs
              </Link>
              <Link href="/news" className={navClass("/news")}>
                News
              </Link>
              <Link href="/about-us" className={navClass("/about-us")}>
                About Us
              </Link>
              <Link href="/contact-us" className={navClass("/contact-us")}>
                Contact Us
              </Link>

              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="/apply"
                  className="px-6 py-2.5 text-center text-sm font-medium text-black bg-white border  hover:bg-green-950 hover:text-white transition-colors hover:border-white rounded"
                >
                  Apply
                </a>
                <a
                  href="/donate"
                  className="px-6 py-2.5 text-center text-sm font-medium text-black bg-white border  hover:bg-green-950 hover:text-white transition-colors hover:border-white rounded"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
