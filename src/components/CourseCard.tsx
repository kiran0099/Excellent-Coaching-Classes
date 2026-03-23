"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
  standard: string;
  board: string;
  tagline: string;
  subjects: string[];
  features: string[];
  duration: string;
  badge?: string;
  accentColor?: "red" | "yellow" | "dark";
  delay?: number;
}

export default function CourseCard({
  standard,
  board,
  tagline,
  subjects,
  features,
  duration,
  badge,
  accentColor = "red",
  delay = 0,
}: CourseCardProps) {
  const styles = {
    red: {
      bg: "bg-primary-dark",
      accent: "#FFD600",
      badge: "bg-accent-yellow text-brand-black",
      button: "bg-accent-yellow text-brand-black hover:bg-accent-golden",
    },
    yellow: {
      bg: "bg-brand-black",
      accent: "#E53935",
      badge: "bg-primary text-white",
      button: "bg-white text-brand-black hover:bg-gray-100",
    },
    dark: {
      bg: "bg-[#1a1a2e]",
      accent: "#FFD600",
      badge: "bg-accent-yellow text-brand-black",
      button: "bg-accent-yellow text-brand-black hover:bg-accent-golden",
    },
  };

  const s = styles[accentColor];

  return (
    <motion.article
      className={`relative rounded-2xl overflow-hidden ${s.bg} shadow-xl card-hover`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

      <div className="relative p-7">
        {badge && (
          <span
            className={`inline-block font-heading font-bold text-xs px-3 py-1 rounded-full mb-4 ${s.badge}`}
          >
            {badge}
          </span>
        )}

        <h3 className="font-heading font-black text-4xl text-white mb-0.5">
          {standard}
        </h3>
        <p className="font-heading font-semibold text-white/60 text-sm mb-2">
          {board}
        </p>
        <p className="font-body text-white/80 text-sm mb-5 leading-relaxed">
          {tagline}
        </p>

        {/* Duration pill */}
        <div
          className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-5"
          style={{
            backgroundColor: `${s.accent}20`,
            color: s.accent,
            border: `1px solid ${s.accent}40`,
          }}
        >
          ⏱ {duration}
        </div>

        {/* Subjects */}
        <div className="mb-5">
          <p className="font-heading font-semibold text-white/50 text-xs uppercase tracking-wider mb-2">
            Subjects Covered
          </p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((sub) => (
              <span
                key={sub}
                className="font-body text-xs px-2.5 py-1 rounded-lg bg-white/10 text-white/80"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-7">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <CheckCircle
                size={14}
                className="mt-0.5 shrink-0"
                style={{ color: s.accent }}
              />
              <span className="font-body text-white/75 text-sm">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={`flex items-center justify-center gap-2 w-full font-heading font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:gap-3 ${s.button}`}
        >
          Book Free Demo
          <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}
