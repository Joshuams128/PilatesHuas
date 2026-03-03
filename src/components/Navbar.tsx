"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F5F2EC] border-b border-[#D9D2C6]">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Pilates Haus Logo"
            width={60}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] transition">
            Home
          </Link>
          <Link href="/classes" className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] transition">
            Classes
          </Link>
          <Link href="/pricing" className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] transition">
            Pricing
          </Link>
          <Link href="/about" className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] transition">
            About
          </Link>
          <Link href="/contact" className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] transition">
            Contact
          </Link>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <Link
            href="/book-now"
            className="px-6 py-3 bg-[#82614A] text-white font-['Stolen_Love'] rounded-full hover:bg-[#6d5038] transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1A1410]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2EC] border-t border-[#D9D2C6] px-6 py-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/classes"
              className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Classes
            </Link>
            <Link
              href="/pricing"
              className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-['Stolen_Love'] text-[#1A1410] hover:text-[#82614A] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/book-now"
              className="px-6 py-3 bg-[#82614A] text-white font-['Stolen_Love'] rounded-full hover:bg-[#6d5038] transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
