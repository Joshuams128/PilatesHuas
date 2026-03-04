import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#82614A] text-[#F5F2EC]">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Pilates Haus Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 font-heading">
              <Link href="/" className="hover:text-[#D9D2C6] transition">
                Home
              </Link>
              <Link href="/classes" className="hover:text-[#D9D2C6] transition">
                Classes
              </Link>
              <Link href="/pricing" className="hover:text-[#D9D2C6] transition">
                Pricing
              </Link>
              <Link href="/about" className="hover:text-[#D9D2C6] transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-[#D9D2C6] transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg mb-4">Visit Us</h3>
            <div className="font-heading space-y-2">
              <p>2460 Brock Rd Unit C 303</p>
              <p>Pickering, ON</p>
              <p className="mt-4">
                <a href="mailto:info@pilateshaus.ca" className="hover:text-[#D9D2C6] transition">
                  info@pilateshaus.ca
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pilateshaus.to/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D9D2C6] transition"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#A48D78]">
          <p className="font-heading text-sm text-center">
            © 2025 Pilates Haus Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
