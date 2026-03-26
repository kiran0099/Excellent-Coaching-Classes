"use client";
import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const overallStats = [
  { value: "100%", label: "Board Pass Rate (All Years)" },
  { value: "50+", label: "Students with 90%+ Marks" },
  { value: "3", label: "District Toppers" },
  { value: "100%", label: "Students Appear in Boards" },
];

const rankMedals = ["🥇", "🥈", "🥉"];
const RANK_COLORS = ["#D4A017", "#A8A8B3", "#CD7F32", "#CC0000"];

// Alternating photo background colors
const PHOTO_BG = [
  "#B71C1C", // deep red
  "#1a237e", // deep blue
  "#1b5e20", // deep green
  "#4a148c", // deep purple
];

interface Topper {
  name: string;
  marks: string;
  image: string;
  board: string;
}

interface YearEntry {
  year: string;
  students: Topper[];
}

export default function ResultsPage() {
  const [years, setYears] = useState<YearEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/toppersdata.json")
      .then((r) => r.json())
      .then((data) => {
        // Sort descending by year
        const sorted: YearEntry[] = [...data.years].sort(
          (a, b) => Number(b.year) - Number(a.year)
        );
        setYears(sorted);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="container-pad text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4">
              <Trophy size={13} />
              Hall of Fame
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              Our Students&apos;{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Brilliant Results
              </span>
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
              Year after year, our students achieve outstanding board exam scores. Here&apos;s proof of our promise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OVERALL STATS ─────────────────────────────────── */}
      <section className="py-12 bg-primary">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {overallStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="font-heading font-black text-3xl md:text-4xl text-white">
                  {stat.value}
                </div>
                <div className="font-body text-white/70 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YEAR-WISE RESULTS ─────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey">
        <div className="container-pad">
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : (
            years.map((entry, yearIndex) => (
              <motion.div
                key={entry.year}
                className="mb-16 last:mb-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: yearIndex * 0.1 }}
              >
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                      <Trophy size={20} className="text-accent-yellow" />
                    </div>
                    <div>
                      <h2 className="font-heading font-black text-3xl text-brand-black">
                        Results {entry.year}
                      </h2>
                      <p className="font-body text-brand-grey text-sm">
                        Board Exam Toppers &amp; Achievers
                      </p>
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-gray-200 hidden md:block" />
                  <span className="font-body text-brand-grey text-sm hidden md:block">
                    {entry.students.length} achievers
                  </span>
                </div>

                {/* Toppers grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                  {entry.students.map((student, i) => {
                    const color = RANK_COLORS[i] ?? RANK_COLORS[RANK_COLORS.length - 1];
                    const photoBg = PHOTO_BG[i % PHOTO_BG.length];
                    return (
                      <motion.article
                        key={student.name}
                        className="relative bg-[#2b2d42] rounded-2xl overflow-hidden shadow-lg border-2"
                        style={{ borderColor: color + "66" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4 }}
                      >
                        {/* Rank badge */}
                        <div
                          className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs shadow"
                          style={{ background: color, color: "#111" }}
                        >
                          {i < 3 ? rankMedals[i] : `${i + 1}`}
                        </div>

                        {/* Photo */}
                        <div className="relative w-full aspect-square" style={{ backgroundColor: photoBg }}>
                          <Image
                            src={student.image}
                            alt={student.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        </div>

                        <div className="p-4">
                          <div
                            className="font-heading font-black text-3xl leading-none mb-1"
                            style={{ color }}
                          >
                            {student.marks}
                          </div>
                          <p className="font-heading font-bold text-white text-sm leading-tight mb-1">
                            {student.name}
                          </p>
                          <span className="font-body text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                            {student.board}
                          </span>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-3">
              What Our Toppers{" "}
              <span className="text-gradient-red">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Harshit Sawant",
                score: "94.40% — 10th SSC 2025",
                quote:
                  "The way complex problems were broken down here completely changed my approach to Maths. I never thought I could score this high!",
                initials: "HS",
              },
              {
                name: "Shagun Gupta",
                score: "93.40% — 10th SSC 2024",
                quote:
                  "The mock tests were exactly like the real exam. By the time I sat for boards, I was completely calm and confident. Thank you Excellent Coaching!",
                initials: "SG",
              },
              {
                name: "Nishita Shetty",
                score: "94.00% — 10th SSC 2023",
                quote:
                  "The faculty here treats every student like family. They never gave up on me even when I was struggling. Pure dedication!",
                initials: "NS",
              },
            ].map((t, i) => (
              <motion.article
                key={t.name}
                className="bg-brand-lightgrey rounded-2xl p-6 border border-gray-100"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-black text-sm">{t.name}</p>
                    <p className="font-body text-primary text-xs font-semibold">{t.score}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-accent-golden fill-accent-golden" />
                  ))}
                </div>

                <blockquote className="font-body text-brand-grey text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 hero-gradient">
        <div className="container-pad text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Trophy size={40} className="text-accent-yellow mx-auto mb-4" />
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Your Child Could Be Our Next Topper
            </h2>
            <p className="font-body text-white/75 text-lg mb-8 max-w-md mx-auto">
              Start with a free demo class and see the Excellent difference for yourself.
            </p>
            <Link
              href="/contact"
              className="btn-yellow text-base px-8 py-4 rounded-full font-heading font-bold"
            >
              Book Free Demo Class
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
