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
  Award,
  ChevronDown,
  BookOpen,
  ClipboardList,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "@/components/CourseCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { value: "600+", label: "Students Mentored", icon: Users },
  { value: "95%+", label: "Board Pass Rate", icon: TrendingUp },
  { value: "8+", label: "Years of Excellence", icon: Award },
  { value: "4.9★", label: "Parent Rating", icon: Star },
];

const toppers = [
  {
    name: "Priya Sharma",
    percentage: "96.4%",
    standard: "10th SSC",
    year: "2024",
    quote: "The way complex problems were broken down here changed my approach completely!",
    initials: "PS",
  },
  {
    name: "Rahul Patil",
    percentage: "94.8%",
    standard: "12th Science",
    year: "2024",
    quote: "Weekly tests kept me always prepared. I never felt exam pressure at all.",
    initials: "RP",
  },
  {
    name: "Sneha Verma",
    percentage: "93.2%",
    standard: "10th SSC",
    year: "2024",
    quote: "Teachers here treat every student individually. My confidence grew so much!",
    initials: "SV",
  },
  {
    name: "Arjun Nair",
    percentage: "92.6%",
    standard: "12th Commerce",
    year: "2023",
    quote: "The focused coaching here helped me score far beyond my own expectations.",
    initials: "AN",
  },
];

const whyUs = [
  {
    icon: <BookOpen size={22} className="text-primary" />,
    title: "Expert Faculty",
    desc: "Subject specialists with 5+ years of board exam coaching experience.",
  },
  {
    icon: <Trophy size={22} className="text-primary" />,
    title: "Proven Results",
    desc: "Consistent top scorers in SSC, HSC boards year after year.",
  },
  {
    icon: <Users size={22} className="text-primary" />,
    title: "Small Batches",
    desc: "Limited seats per batch ensuring personalized attention for every student.",
  },
  {
    icon: <ClipboardList size={22} className="text-primary" />,
    title: "Regular Tests",
    desc: "Weekly assessments and mock exams to build exam-day confidence.",
  },
  {
    icon: <MessageSquare size={22} className="text-primary" />,
    title: "Parent Updates",
    desc: "Monthly parent-teacher meetings with detailed progress reports.",
  },
  {
    icon: <MapPin size={22} className="text-primary" />,
    title: "Prime Location",
    desc: "Conveniently located in Nalasopara East, easily accessible by all.",
  },
];

const coursePreviews = [
  {
    standard: "10th",
    board: "SSC Maharashtra Board",
    tagline: "Master your boards with our result-proven SSC prep program.",
    subjects: ["Maths", "Science", "English", "SST", "Hindi"],
    features: ["Full SSC syllabus", "Mock tests + previous papers", "Doubt clearing sessions"],
    duration: "Full Academic Year",
    badge: "Most Popular",
    accentColor: "red" as const,
  },
  {
    standard: "11th",
    board: "HSC Science / Commerce",
    tagline: "Build a strong foundation for 12th boards and competitive exams.",
    subjects: ["Physics", "Chemistry", "Maths", "Biology", "Accounts"],
    features: ["Concept-first teaching", "NCERT + board curriculum", "Weak subject support"],
    duration: "Full Academic Year",
    badge: "Foundation",
    accentColor: "yellow" as const,
  },
  {
    standard: "12th",
    board: "HSC Science / Commerce",
    tagline: "Achieve your best board score with intensive coaching & strategy.",
    subjects: ["Physics", "Chemistry", "Maths", "Biology", "Accounts"],
    features: ["Board-focused strategy", "Intensive revision batches", "Score guarantee"],
    duration: "Full Academic Year",
    badge: "Board Champion",
    accentColor: "dark" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-16 md:pt-20">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl bg-accent-yellow" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl bg-white" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative container-pad w-full py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              {/* Eyebrow */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-heading font-semibold px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin size={13} />
                Nalasopara East, Mumbai · Class 10, 11 &amp; 12 Coaching
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                We Ensure{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #FFD600, #FFC107)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  All-Round
                </span>
                <br />
                Excellence.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="font-body text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Nalasopara East&apos;s most trusted coaching institute for 10th, 11th &amp; 12th
                students. Expert faculty, small batches, and a proven track record of top results.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="btn-yellow text-base px-7 py-4 rounded-xl shadow-lg font-heading font-bold"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-white text-base px-7 py-4 rounded-xl font-heading font-bold"
                >
                  Book Free Demo
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap gap-x-6 gap-y-3 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {[
                  "600+ Students Mentored",
                  "95%+ Board Pass Rate",
                  "8+ Years in Nalasopara",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-accent-yellow" />
                    <span className="font-body text-white/80 text-sm">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Hero Banner Image */}
            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&q=80&auto=format&fit=crop"
                  alt="Students studying at Excellent Coaching Classes"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating stat card - bottom */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <Trophy size={18} className="text-accent-yellow" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-black text-sm leading-none">
                      Top Results Every Year
                    </p>
                    <p className="font-body text-brand-grey text-xs mt-0.5">
                      95%+ board pass rate consistently
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-4 -right-4 bg-accent-yellow text-brand-black font-heading font-black text-center py-4 px-5 rounded-2xl shadow-xl">
                <div className="text-2xl">8+</div>
                <div className="text-xs font-bold">Years</div>
              </div>

              {/* Floating badge - left */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                  <Star size={14} className="text-green-600 fill-green-600" />
                </div>
                <div>
                  <p className="font-heading font-bold text-brand-black text-xs">4.9★ Rating</p>
                  <p className="font-body text-brand-grey text-xs">By Parents</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={28} className="text-white/40" />
        </motion.div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section className="py-10 bg-primary">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <stat.icon size={26} className="text-accent-yellow mx-auto mb-2" />
                <div className="font-heading font-black text-3xl md:text-4xl text-white">
                  {stat.value}
                </div>
                <div className="font-body text-white/70 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPPERS HIGHLIGHT ─────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(135deg, #212121 0%, #2d2d2d 100%)" }}
      >
        <div className="container-pad">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-1.5 bg-accent-yellow/20 text-accent-yellow text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              <Trophy size={13} />
              Hall of Fame
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              Our Students&apos;{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Success Stories
              </span>
            </h2>
            <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
              Real students, real results. These achievers trusted Excellent Coaching for their board journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((topper, i) => (
              <motion.article
                key={topper.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 card-hover"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-heading font-black text-white text-lg">
                    {topper.initials}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-yellow flex items-center justify-center">
                    <Trophy size={13} className="text-brand-black" />
                  </div>
                </div>
                <div className="font-heading font-black text-3xl text-accent-yellow mb-1">
                  {topper.percentage}
                </div>
                <p className="font-heading font-bold text-white text-sm">{topper.name}</p>
                <p className="font-body text-white/50 text-xs mb-1">{topper.standard}</p>
                <p className="font-body text-white/40 text-xs mb-4">Board {topper.year}</p>
                <blockquote className="font-body text-white/65 text-xs leading-relaxed italic border-l-2 border-primary/60 pl-3">
                  &ldquo;{topper.quote}&rdquo;
                </blockquote>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="/results" className="btn-yellow text-sm px-6 py-3 rounded-full font-heading font-bold">
              View All Toppers
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          {/* Banner image strip */}
          <motion.div
            className="relative rounded-3xl overflow-hidden mb-14 h-52 md:h-64"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80&auto=format&fit=crop"
              alt="Why choose Excellent Coaching Classes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <span className="inline-block bg-white/15 text-white text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Why Choose Us
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-2">
                The Excellent{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #FFD600, #FFC107)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Advantage
                </span>
              </h2>
              <p className="font-body text-white/75 text-base max-w-xl">
                We combine experienced teaching with proven systems to deliver consistent, outstanding results.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.article
                key={item.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:[&>*]:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-black text-base mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-brand-grey text-sm leading-relaxed">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES PREVIEW ───────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey">
        <div className="container-pad">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-red-50 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Our Programs
            </span>
            <h2 className="section-heading">
              Courses Built for{" "}
              <span className="text-gradient-red">Board Success</span>
            </h2>
            <p className="section-subheading font-body text-brand-grey text-lg max-w-2xl mx-auto">
              Specialized programs for 10th, 11th &amp; 12th students — designed to maximize board scores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {coursePreviews.map((course, i) => (
              <CourseCard key={course.standard} {...course} delay={i * 0.15} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/courses" className="btn-red text-sm px-6 py-3 rounded-full font-heading font-bold">
              View All Course Details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ───────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-red-50 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Campus Life
            </span>
            <h2 className="section-heading">
              Life at Excellent{" "}
              <span className="text-gradient-red">Coaching</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                label: "Classroom Learning",
                src: "https://images.unsplash.com/photo-1580582932049-d8920adfed67?w=600&q=80&auto=format&fit=crop",
                span: "md:col-span-1 md:row-span-2",
              },
              {
                label: "Study Sessions",
                src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop",
                span: "",
              },
              {
                label: "Mock Exams",
                src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80&auto=format&fit=crop",
                span: "",
              },
              {
                label: "Expert Faculty",
                src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80&auto=format&fit=crop",
                span: "",
              },
              {
                label: "Toppers Celebration",
                src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&q=80&auto=format&fit=crop",
                span: "",
              },
              {
                label: "Group Study",
                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop",
                span: "",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
                style={{ minHeight: "200px" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-heading font-semibold text-white text-sm drop-shadow">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1600&q=80&auto=format&fit=crop"
          alt="Students celebrating success"
          fill
          className="object-cover"
        />
        {/* Strong overlay so text is readable */}
        <div className="absolute inset-0 bg-brand-black/92" />

        <div className="relative container-pad text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
              Ready to Start Your
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Excellence Journey?
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg mb-8 max-w-lg mx-auto">
              Book a <strong className="text-white">100% Free Demo Class</strong> today and
              experience the Excellent Coaching difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-yellow text-base px-8 py-4 rounded-full font-heading font-bold">
                Book Free Demo
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+919876543210"
                className="btn-white text-base px-8 py-4 rounded-full font-heading font-bold"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
