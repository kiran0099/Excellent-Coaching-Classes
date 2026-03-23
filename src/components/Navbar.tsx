"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary-dark transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-yellow shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="Excellent Coaching Classes"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-white text-sm md:text-base">
                Excellent Coaching
              </div>
              <div className="font-body text-accent-yellow text-xs hidden sm:block">
                We Ensure All-Round Excellence
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 font-heading font-semibold text-sm rounded-lg transition-colors duration-200 block ${
                    pathname === link.href
                      ? "text-accent-yellow bg-white/10"
                      : "text-white hover:text-accent-yellow hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors font-body text-sm"
            >
              <Phone size={15} />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="/contact"
              className="bg-accent-yellow text-brand-black font-heading font-bold text-sm px-5 py-2.5 rounded-full hover:bg-accent-golden transition-colors duration-200"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark border-t border-red-900 px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading font-semibold text-base py-2.5 px-4 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-accent-yellow bg-white/10"
                    : "text-white hover:text-accent-yellow hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-red-900 mt-2 pt-3 flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white/80 font-body text-sm px-4"
              >
                <Phone size={16} />
                +91 98765 43210
              </a>
              <Link
                href="/contact"
                className="bg-accent-yellow text-brand-black font-heading font-bold text-center py-3 rounded-full"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
