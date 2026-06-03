"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/70 z-[9998] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Popup — centered on all screen sizes */}
          <motion.div
            key="popup"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 24 } }}
            exit={{ opacity: 0, scale: 0.9, y: 16, transition: { duration: 0.2 } }}
          >
            <div className="relative w-full max-w-[340px] md:max-w-[780px] rounded-2xl overflow-hidden shadow-2xl">

              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Close offer"
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>

              {/* ── MOBILE (< md) ── */}
              <div className="md:hidden flex flex-col bg-[#1a0000]">
                <Image
                  src="/images/discount-mobile-final.png"
                  alt="10% off on tuition fees"
                  width={340}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
                <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    onClick={dismiss}
                    className="w-full flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-heading font-bold text-sm py-3.5 rounded-xl shadow-lg transition-colors duration-200"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+917020516766"
                    onClick={dismiss}
                    className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-heading font-bold text-sm py-3.5 rounded-xl border-2 border-white/70 transition-colors duration-200"
                  >
                    <Phone size={15} /> Call Us Now
                  </a>
                </div>
              </div>

              {/* ── DESKTOP (md+) ── */}
              <div className="relative hidden md:block">
                <Image
                  src="/images/discount-desktop-final.png"
                  alt="10% off on tuition fees"
                  width={780}
                  height={440}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute bottom-[16%] left-[5%] flex gap-3">
                  <Link
                    href="/contact"
                    onClick={dismiss}
                    className="flex items-center gap-2 bg-[#FFD600] hover:bg-yellow-400 text-black font-heading font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-colors duration-200"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+917020516766"
                    onClick={dismiss}
                    className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-heading font-bold text-sm px-6 py-3 rounded-xl border-2 border-white/70 transition-colors duration-200"
                  >
                    <Phone size={15} /> Call Us
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
