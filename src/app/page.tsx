"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Users,
  Star,
  MapPin,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Award,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import CallbackForm from "@/components/CallbackForm";
import WhatsAppButton from "@/components/WhatsAppButton";

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Students Mentored", icon: Users },
  { value: "95%", label: "Board Pass Rate", icon: TrendingUp },
  { value: "8+", label: "Years of Excellence", icon: Award },
  { value: "4.9★", label: "Parent Rating", icon: Star },
];

const advantages = [
  {
    icon: "🎯",
    title: "Subject Mastery Framework",
    desc: "Our proprietary 3-step revision cycle ensures every concept is locked in memory before boards.",
  },
  {
    icon: "📊",
    title: "Weekly Progress Reports",
    desc: "Parents receive detailed performance analytics every week — no surprises before the exam.",
  },
  {
    icon: "🧑‍🏫",
    title: "Expert SSC Faculty",
    desc: "Every teacher is SSC-board specialist with 5+ years of coaching experience.",
  },
  {
    icon: "📝",
    title: "Previous Year Paper Drills",
    desc: "Regular mock tests mirroring the exact SSC board pattern to build exam confidence.",
  },
  {
    icon: "💡",
    title: "Doubt Clearing Sessions",
    desc: "Dedicated one-on-one doubt sessions after every batch — no student left behind.",
  },
  {
    icon: "📍",
    title: "Prime Location",
    desc: "Conveniently located opposite Vijay Nagar Rickshaw Stand, Nalasopara East.",
  },
];

const toppers = [
  {
    name: "Priya Sharma",
    percentage: "96.4%",
    year: "2024",
    subject: "Mathematics Topper",
    quote: "The way complex problems were broken down here changed my approach to Maths completely!",
    avatar: "PS",
    color: "#1e3a8a",
  },
  {
    name: "Rahul Patil",
    percentage: "94.8%",
    year: "2024",
    subject: "Science Topper",
    quote: "Weekly tests kept me always prepared. I never felt exam pressure because of regular practice.",
    avatar: "RP",
    color: "#d97706",
  },
  {
    name: "Sneha Verma",
    percentage: "93.2%",
    year: "2024",
    subject: "All-Round Excellence",
    quote: "Teachers here treat every student individually. My confidence grew with every class!",
    avatar: "SV",
    color: "#059669",
  },
  {
    name: "Arjun Nair",
    percentage: "92.6%",
    year: "2023",
    subject: "English Topper",
    quote: "The writing skill techniques I learned here helped me score a perfect 100 in English.",
    avatar: "AN",
    color: "#7c3aed",
  },
];

const courses = [
  {
    badge: "Foundation Builder",
    title: "Class IX",
    subtitle: "Foundation Excellence Program",
    description:
      "Build an unshakeable academic foundation in Class 9. Master all core subjects with in-depth conceptual clarity that sets you up for a stellar Class 10 performance.",
    highlights: ["All Subjects", "2 Batches/Day", "Weekly Tests"],
    features: [
      "Complete NCERT & SSC Board curriculum coverage",
      "Concept-first teaching for deep understanding",
      "Monthly parent-teacher meetings",
      "Study material + note-making guidance",
      "Individual attention in small batches",
    ],
    color: "navy" as const,
  },
  {
    badge: "Board Champions",
    title: "Class X",
    subtitle: "Board Mastery Program",
    description:
      "A laser-focused, exam-oriented program designed to maximize your SSC board score. Comprehensive coverage of all subjects with intensive revision, mock tests, and expert strategy.",
    highlights: ["SSC Focus", "Mock Tests", "Top Results"],
    features: [
      "Full SSC Board syllabus with exam strategy",
      "Previous 10 years paper practice",
      "Intensive pre-board mock exams",
      "Score improvement guarantee",
      "Special batch for weak-subject improvement",
    ],
    color: "amber" as const,
  },
];

/* ─── ANIMATION VARIANTS ────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ─── PAGE ──────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1d4ed8 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "#f59e0b" }}
          />
          <div
            className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "#3b82f6" }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-36">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <motion.div
                className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Nalasopara East, Mumbai · SSC Class 9 &amp; 10 Specialists
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Transforming{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Hard Work
                </span>
                <br />
                into Board{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Excellence.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Nalasopara East&apos;s most trusted SSC coaching for Class 9 &amp; 10.
                Expert faculty, proven methodology, and personalised attention —
                your child&apos;s success is our only mission.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg transition-all"
                  style={{ backgroundColor: "#f59e0b" }}
                  whileHover={{ scale: 1.04, backgroundColor: "#d97706" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book Free Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#toppers"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#toppers")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 border-2 border-white/30 text-white font-bold text-base px-7 py-4 rounded-xl hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Trophy className="w-5 h-5 text-amber-400" />
                  View Toppers
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap gap-x-6 gap-y-3 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {["500+ Students Mentored", "95% Board Pass Rate", "8+ Years in Nalasopara"].map(
                  (badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-white/80 text-sm font-medium">{badge}</span>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-7 h-7 text-white/40" />
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────── */}
        <section className="py-12" style={{ backgroundColor: "#1e3a8a" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / NALASOPARA ADVANTAGE ─────────────── */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className="rounded-3xl p-10 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
                  }}
                >
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 bg-amber-400 -translate-y-12 translate-x-12" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 bg-blue-300 translate-y-8 -translate-x-8" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center mb-6">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-white mb-2">
                      Excellent
                    </h3>
                    <p className="text-amber-300 font-semibold text-lg mb-6">
                      Coaching Classes
                    </p>
                    <p className="text-white/75 leading-relaxed mb-8">
                      Established with a single mission — to deliver top-quality SSC coaching
                      to students of Nalasopara East. We combine experienced faculty with
                      a data-driven teaching approach for consistent results.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Class 9 & 10", icon: "📚" },
                        { label: "SSC Board", icon: "📋" },
                        { label: "Nalasopara East", icon: "📍" },
                        { label: "Small Batches", icon: "👥" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5"
                        >
                          <span>{item.icon}</span>
                          <span className="text-white/90 text-sm font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  The Nalasopara Advantage
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
                  Why Students{" "}
                  <span style={{ color: "#1e3a8a" }}>Trust Us</span> for Board Exams
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We are not just another coaching class. We are a{" "}
                  <strong>results-driven learning centre</strong> built specifically for
                  SSC Maharashtra Board students. Located in the heart of Nalasopara East,
                  our proximity and proven track record make us the #1 choice for families
                  in the area.
                </p>

                <ul className="space-y-3">
                  {[
                    "Opposite Vijay Nagar Rickshaw Stand — safe, accessible location",
                    "Specialized only in SSC Class 9 & 10 — deep expertise, no compromise",
                    "Limited seats per batch — personalized attention guaranteed",
                    "Transparent fee structure — no hidden charges",
                    "Regular Parent-Teacher communication on student progress",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "#1e3a8a" }}
                      >
                        <CheckCircle className="w-3 h-3 text-white fill-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 mt-8 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
                  style={{ backgroundColor: "#1e3a8a" }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book Free Demo Class
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── COURSES ──────────────────────────────────── */}
        <section id="courses" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Our Programs
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Courses Built for{" "}
                <span style={{ color: "#1e3a8a" }}>Board Success</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Two specialized programs tailored for SSC Maharashtra Board — whether
                building a strong foundation or mastering the final board exams.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {courses.map((course, i) => (
                <CourseCard key={course.title} {...course} delay={i * 0.15} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY EXCELLENT (ADVANTAGES) ───────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                What Makes Us Different
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                The Excellent{" "}
                <span style={{ color: "#f59e0b" }}>Teaching System</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <motion.article
                  key={adv.title}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "#eff6ff" }}
                  >
                    {adv.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOPPERS / HALL OF FAME ───────────────────── */}
        <section
          id="toppers"
          className="py-24"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                <Trophy className="w-3.5 h-3.5" />
                Hall of Fame
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our Toppers Speak{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  for Themselves
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Real students. Real results. These are the achievers who trusted Excellent
                Coaching Classes for their SSC board journey.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {toppers.map((topper, i) => (
                <motion.article
                  key={topper.name}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black"
                      style={{ backgroundColor: topper.color }}
                    >
                      {topper.avatar}
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#f59e0b" }}
                    >
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Score */}
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ color: "#fbbf24" }}
                  >
                    {topper.percentage}
                  </div>
                  <p className="text-white font-bold text-sm">{topper.name}</p>
                  <p className="text-white/50 text-xs mb-1">{topper.subject}</p>
                  <p className="text-white/40 text-xs mb-4">SSC Board {topper.year}</p>

                  {/* Quote */}
                  <blockquote className="text-white/70 text-xs leading-relaxed italic border-l-2 border-amber-500/50 pl-3">
                    &ldquo;{topper.quote}&rdquo;
                  </blockquote>
                </motion.article>
              ))}
            </div>

            {/* CTA below */}
            <motion.div
              className="text-center mt-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-white/60 mb-5 text-base">
                Your child could be our next topper. Start with a free demo.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition-all"
                style={{ backgroundColor: "#f59e0b" }}
                whileHover={{ scale: 1.04, backgroundColor: "#d97706" }}
                whileTap={{ scale: 0.97 }}
              >
                Book Free Demo Class
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ── CALLBACK FORM ────────────────────────────── */}
        <CallbackForm />

        {/* ── FOOTER ───────────────────────────────────── */}
        <footer style={{ backgroundColor: "#0f172a" }} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10 mb-10">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-white font-bold text-sm">Excellent</span>
                    <span className="block text-amber-400 text-xs">Coaching Classes</span>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Nalasopara East&apos;s most trusted SSC coaching centre for Class 9 &amp; 10
                  students. Transforming hard work into board excellence since our inception.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {["Home", "About", "Courses", "Toppers", "Contact"].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .querySelector(`#${link.toLowerCase()}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-white/50 hover:text-amber-400 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-bold mb-4">Contact Us</h4>
                <div className="space-y-3 text-sm text-white/50">
                  <p>📍 Opposite Vijay Nagar Rickshaw Stand,<br />Nalasopara East, Maharashtra</p>
                  <p>📞 +91 98765 43210</p>
                  <p>⏰ Mon – Sat: 7 AM – 9 PM</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-white/30 text-xs">
                © {new Date().getFullYear()} Excellent Coaching Classes. All rights reserved.
              </p>
              <p className="text-white/20 text-xs">
                SSC Board Coaching · Nalasopara East · Mumbai
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* ── FLOATING WHATSAPP ─────────────────────────── */}
      <WhatsAppButton />
    </>
  );
}
