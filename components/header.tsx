"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
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
            <a
              href="/"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="/futures"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Futures
            </a>
            <a
              href="/news"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              News
            </a>
            <a
              href="/about-us"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/apply"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-100 transition-colors rounded"
            >
              Apply
            </a>
            <a
              href="/donate"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-100 transition-colors rounded"
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
              <a
                href="/"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/futures"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Futures
              </a>
              <a
                href="/news"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                News
              </a>
              <a
                href="/about-us"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="/contact-us"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Contact Us
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="/apply"
                  className="px-6 py-2.5 text-center text-sm font-medium text-black bg-white hover:bg-gray-100 transition-colors rounded"
                >
                  Apply
                </a>
                <a
                  href="/donate"
                  className="px-6 py-2.5 text-center text-sm font-medium text-black bg-white hover:bg-gray-100 transition-colors rounded"
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
