import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-2xl text-white mb-1">
              Excellent Coaching Classes
            </h3>
            <p className="font-heading text-accent-yellow text-sm font-semibold mb-4">
              We Ensure All-Round Excellence
            </p>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Providing quality education and personalized coaching for 10th,
              11th, and 12th standard students. Building bright futures through
              academic excellence and holistic student development.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-yellow text-brand-black font-heading font-bold text-sm px-6 py-3 rounded-full hover:bg-accent-golden transition-colors"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Courses", href: "/courses" },
                { label: "Results & Toppers", href: "/results" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-gray-400 text-sm hover:text-accent-yellow transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary text-xs">▶</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-accent-yellow mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+919876543210"
                    className="font-body text-gray-300 text-sm hover:text-white transition-colors block"
                  >
                    +91 98765 43210
                  </a>
                  <span className="font-body text-gray-500 text-xs">Call / WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-accent-yellow mt-0.5 shrink-0" />
                <span className="font-body text-gray-400 text-sm leading-relaxed">
                  Opp. Vijay Nagar Rickshaw Stand,
                  <br />
                  Nalasopara East, Mumbai
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-accent-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="font-body text-gray-400 text-sm block">
                    Mon – Sat: 7:00 AM – 9:00 PM
                  </span>
                  <span className="font-body text-gray-500 text-xs">
                    Sunday: By appointment
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-gray-500 text-sm">
            © 2025 Excellent Coaching Classes. All rights reserved.
          </p>
          <p className="font-heading text-gray-600 text-xs italic">
            "We Ensure All-Round Excellence"
          </p>
        </div>
      </div>
    </footer>
  );
}
