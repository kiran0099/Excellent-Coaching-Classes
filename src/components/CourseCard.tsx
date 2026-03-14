"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

interface CourseCardProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlights: string[];
  color: "navy" | "amber";
  delay?: number;
}

export default function CourseCard({
  badge,
  title,
  subtitle,
  description,
  features,
  highlights,
  color,
  delay = 0,
}: CourseCardProps) {
  const isNavy = color === "navy";

  return (
    <motion.article
      className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
        isNavy
          ? "bg-gradient-to-br from-navy-900 to-blue-900"
          : "bg-gradient-to-br from-amber-500 to-amber-600"
      } shadow-xl`}
      style={{
        background: isNavy
          ? "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)"
          : "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      {/* Decorative Circle */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: "white" }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10"
        style={{ backgroundColor: "white" }}
      />

      <div className="relative p-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <Star className="w-3 h-3 fill-current" />
          {badge}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-black text-white mb-1">{title}</h3>
        <p className="text-white/80 font-semibold text-sm mb-3">{subtitle}</p>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-6">{description}</p>

        {/* Highlights Row */}
        <div className="flex gap-3 mb-6">
          {highlights.map((h) => (
            <div
              key={h}
              className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center"
            >
              <p className="text-white font-bold text-sm">{h}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-2.5 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-white/80 mt-0.5 shrink-0 fill-white/20" />
              <span className="text-white/85 text-sm">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center justify-center gap-2 w-full bg-white text-sm font-bold py-3.5 rounded-xl transition-all duration-200 hover:gap-3"
          style={{ color: isNavy ? "#1e3a8a" : "#d97706" }}
          whileTap={{ scale: 0.97 }}
        >
          Book Free Demo
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}
