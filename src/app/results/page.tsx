"use client";
import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const results = {
  "2024": [
    { name: "Priya Sharma", percentage: "96.4%", standard: "10th SSC", rank: 1, initials: "PS", highlight: true },
    { name: "Rahul Patil", percentage: "94.8%", standard: "12th Science", rank: 2, initials: "RP", highlight: true },
    { name: "Sneha Verma", percentage: "93.2%", standard: "10th SSC", rank: 3, initials: "SV", highlight: true },
    { name: "Arjun Nair", percentage: "92.6%", standard: "12th Commerce", rank: 4, initials: "AN", highlight: false },
    { name: "Anjali Singh", percentage: "91.8%", standard: "11th Science", rank: 5, initials: "AS", highlight: false },
    { name: "Rohit Kumar", percentage: "90.5%", standard: "10th SSC", rank: 6, initials: "RK", highlight: false },
    { name: "Pooja Mehta", percentage: "89.7%", standard: "12th Commerce", rank: 7, initials: "PM", highlight: false },
    { name: "Dev Shah", percentage: "88.9%", standard: "10th SSC", rank: 8, initials: "DS", highlight: false },
  ],
  "2023": [
    { name: "Kavya Mehta", percentage: "95.2%", standard: "10th SSC", rank: 1, initials: "KM", highlight: true },
    { name: "Siddharth Joshi", percentage: "93.8%", standard: "12th Science", rank: 2, initials: "SJ", highlight: true },
    { name: "Pooja Rao", percentage: "92.1%", standard: "10th SSC", rank: 3, initials: "PR", highlight: true },
    { name: "Aditya Shah", percentage: "91.5%", standard: "12th Commerce", rank: 4, initials: "AS", highlight: false },
    { name: "Nikita Patil", percentage: "90.3%", standard: "11th Science", rank: 5, initials: "NP", highlight: false },
    { name: "Vikas Nair", percentage: "89.6%", standard: "10th SSC", rank: 6, initials: "VN", highlight: false },
  ],
  "2022": [
    { name: "Riya Desai", percentage: "94.6%", standard: "10th SSC", rank: 1, initials: "RD", highlight: true },
    { name: "Akash Sharma", percentage: "92.3%", standard: "12th Science", rank: 2, initials: "AS", highlight: true },
    { name: "Meena Patil", percentage: "91.0%", standard: "10th SSC", rank: 3, initials: "MP", highlight: true },
    { name: "Suraj Kumar", percentage: "89.8%", standard: "12th Commerce", rank: 4, initials: "SK", highlight: false },
    { name: "Pallavi Verma", percentage: "88.4%", standard: "10th SSC", rank: 5, initials: "PV", highlight: false },
  ],
};

const overallStats = [
  { value: "95%+", label: "Board Pass Rate (All Years)" },
  { value: "50+", label: "Students with 90%+ Marks" },
  { value: "3", label: "District Toppers" },
  { value: "100%", label: "Students Appear in Boards" },
];

const rankMedals = ["🥇", "🥈", "🥉"];

export default function ResultsPage() {
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
              Our Students'{" "}
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
          {Object.entries(results).map(([year, students], yearIndex) => (
            <motion.div
              key={year}
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
                      Results {year}
                    </h2>
                    <p className="font-body text-brand-grey text-sm">
                      Board Exam Toppers &amp; Achievers
                    </p>
                  </div>
                </div>
                <div className="h-px flex-1 bg-gray-200 hidden md:block" />
                <span className="font-body text-brand-grey text-sm hidden md:block">
                  {students.length} achievers
                </span>
              </div>

              {/* Top 3 highlight */}
              <div className="grid sm:grid-cols-3 gap-5 mb-6">
                {students.slice(0, 3).map((student, i) => (
                  <motion.article
                    key={student.name}
                    className="relative bg-primary-dark rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Decorative */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />

                    <div className="p-6 relative">
                      <span className="text-3xl mb-3 block">{rankMedals[i]}</span>
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center font-heading font-black text-xl text-white mb-3">
                        {student.initials}
                      </div>
                      <div className="font-heading font-black text-3xl text-accent-yellow mb-1">
                        {student.percentage}
                      </div>
                      <p className="font-heading font-bold text-white text-sm">{student.name}</p>
                      <p className="font-body text-white/60 text-xs mt-0.5">{student.standard}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Remaining students */}
              {students.length > 3 && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {students.slice(3).map((student) => (
                    <motion.article
                      key={student.name}
                      className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm card-hover flex items-center gap-3"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center font-heading font-bold text-primary text-sm shrink-0">
                        {student.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading font-bold text-brand-black text-xs truncate">
                          {student.name}
                        </p>
                        <p className="font-heading font-black text-primary text-sm">
                          {student.percentage}
                        </p>
                        <p className="font-body text-brand-grey text-xs">{student.standard}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
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
                name: "Priya Sharma",
                score: "96.4% — 10th SSC 2024",
                quote:
                  "The way complex problems were broken down here completely changed my approach to Maths. I never thought I could score this high!",
                initials: "PS",
              },
              {
                name: "Kavya Mehta",
                score: "95.2% — 10th SSC 2023",
                quote:
                  "The mock tests were exactly like the real exam. By the time I sat for boards, I was completely calm and confident. Thank you Excellent Coaching!",
                initials: "KM",
              },
              {
                name: "Siddharth Joshi",
                score: "93.8% — 12th Science 2023",
                quote:
                  "The faculty here treats every student like family. They never gave up on me even when I was struggling in Physics. Pure dedication!",
                initials: "SJ",
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
