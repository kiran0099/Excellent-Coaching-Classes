"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "@/components/CourseCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ── HERO SLIDES ──────────────────────────────────────────────────────────────
const heroSlides = [
  {
    image: "/images/hero/hero-5.jpg",
    tag: "Annual Events · Beyond Academics",
    heading: "Excellence",
    highlight: "Beyond",
    headingEnd: "The Classroom.",
    sub: "We celebrate achievements, nurture confidence, and build character — because true excellence is all-round.",
  },
  {
    image: "/images/hero/hero-1.jpg",
    tag: "Nalasopara East · 100% Result Track Record",
    heading: "We Ensure",
    highlight: "All-Round",
    headingEnd: "Excellence.",
    sub: "Nalasopara East's most trusted coaching institute for 10th, 11th & 12th students. Expert faculty, small batches, and a proven track record of top results.",
  },
  {
    image: "/images/hero/hero-2.jpg",
    tag: "1000+ Students Mentored · Since 2015",
    heading: "Join Our",
    highlight: "Growing",
    headingEnd: "Family.",
    sub: "Hundreds of students have transformed their results with us. Be the next success story at Excellent Coaching Classes.",
  },
  {
    image: "/images/hero/hero-3.jpg",
    tag: "Expert Faculty · Personalized Attention",
    heading: "Learn From",
    highlight: "The Best,",
    headingEnd: "Score The Best.",
    sub: "Our experienced teachers build real understanding — not just exam tricks. Thumbs up from students who've scored it themselves.",
  },
  {
    image: "/images/hero/hero-4.jpg",
    tag: "Small Batches · No Student Left Behind",
    heading: "Every Student",
    highlight: "Gets",
    headingEnd: "Noticed.",
    sub: "Limited seats per batch so every student gets the individual attention they need to reach their true potential.",
  },
  {
    image: "/images/hero/hero-6.jpg",
    tag: "Happy Students · Proven Results",
    heading: "Your Success",
    highlight: "Starts",
    headingEnd: "Here.",
    sub: "The energy, the passion, the results — everything you need to excel is right here at Excellent Coaching Classes.",
  },
];

const stats = [
  { value: "1000+", label: "Students Mentored", icon: Users },
  { value: "95%+", label: "Board Pass Rate", icon: TrendingUp },
  { value: "11+", label: "Years of Excellence", icon: Award },
  { value: "4.9★", label: "Parent Rating", icon: Star },
];

// ── ACADEMIC YEAR LOGIC ───────────────────────────────────────────────────────
// Maharashtra SSC/HSC results are declared in June.
// If current month < June → results for this academic year aren't out yet → show last year.
// If current month >= June → results are out → show this year.
function getResultYear(): number {
  const now = new Date();
  return now.getMonth() < 5 ? now.getFullYear() - 1 : now.getFullYear();
}

function getAcademicYearLabel(resultYear: number): string {
  return `${resultYear - 1}–${resultYear}`;
}

interface Topper {
  name: string;
  marks: string;
  image: string;
}

const RANK_CONFIG = [
  { label: "1st", color: "#D4A017", bg: "bg-[#3a3a50]", border: "border-yellow-500", shadow: "" },
  { label: "2nd", color: "#A8A8B3", bg: "bg-[#3a3a50]", border: "border-gray-400",   shadow: "" },
  { label: "3rd", color: "#CD7F32", bg: "bg-[#3a3a50]", border: "border-amber-500",  shadow: "" },
  { label: "4th", color: "#CC0000", bg: "bg-[#3a3a50]", border: "border-red-500",    shadow: "" },
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

const galleryItems = [
  { label: "Classroom Learning", src: "/images/gallery/gallery-1.jpg", span: "md:col-span-1 md:row-span-2" },
  { label: "Happy Students", src: "/images/gallery/gallery-2.jpg", span: "" },
  { label: "Annual Function", src: "/images/gallery/gallery-3.jpg", span: "" },
  { label: "Educational Trips", src: "/images/gallery/gallery-4.jpg", span: "" },
  { label: "Celebrations", src: "/images/gallery/gallery-5.jpg", span: "" },
  { label: "Class Activities", src: "/images/gallery/gallery-6.jpg", span: "" },
  { label: "Student Community", src: "/images/gallery/gallery-7.jpg", span: "" },
];

// ── HALL OF FAME COMPONENT ───────────────────────────────────────────────────
function HallOfFame() {
  const [toppers, setToppers] = useState<Topper[]>([]);
  const [loading, setLoading] = useState(true);

  const resultYear = getResultYear();
  const academicLabel = getAcademicYearLabel(resultYear);

  useEffect(() => {
    fetch("/data/toppersdata.json")
      .then((r) => r.json())
      .then((data) => {
        const match = data.years.find(
          (y: { year: string; students: Topper[] }) => y.year === String(resultYear)
        );
        // Fallback to the most recent year if exact match not found
        const entry = match ?? data.years[data.years.length - 1];
        setToppers(entry?.students ?? []);
      })
      .finally(() => setLoading(false));
  }, [resultYear]);

  return (
    <section className="section-pad relative overflow-hidden bg-[#2b2d42]">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative container-pad">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-white/20">
            <Trophy size={13} />
            Hall of Fame
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFD600, #FFC107)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Star Toppers
            </span>
          </h2>
          {/* Academic year badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
            <Award size={14} className="text-accent-yellow" />
            <span className="font-heading font-semibold text-white/90 text-sm">
              Academic Year {academicLabel}
            </span>
          </div>
          <p className="font-body text-white/55 text-base max-w-xl mx-auto">
            Real students. Real results. These achievers topped the Maharashtra board exams coaching from Excellent Coaching Classes.
          </p>
        </motion.div>

        {/* Toppers grid */}
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 rounded-full border-2 border-accent-yellow/30 border-t-accent-yellow animate-spin" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {toppers.map((topper, i) => {
              const rank = RANK_CONFIG[i] ?? RANK_CONFIG[RANK_CONFIG.length - 1];
              return (
                <motion.article
                  key={topper.name}
                  className={`relative rounded-3xl border-2 ${rank.bg} ${rank.border} shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                >
                  {/* Rank badge */}
                  <div
                    className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full flex items-center justify-center font-heading font-black text-xs shadow-lg"
                    style={{ background: rank.color, color: "#111" }}
                  >
                    {rank.label}
                  </div>

                  {/* Photo */}
                  <div className="relative w-full aspect-square bg-gray-100">
                    <Image
                      src={topper.image}
                      alt={topper.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    {/* Marks */}
                    <div
                      className="font-heading font-black text-4xl leading-none mb-1"
                      style={{ color: rank.color }}
                    >
                      {topper.marks}
                    </div>
                    <p className="font-heading font-bold text-white text-base leading-tight mb-1">
                      {topper.name}
                    </p>
                    <p className="font-body text-white/50 text-xs">
                      SSC Board · {academicLabel}
                    </p>

                    {/* Divider */}
                    <div
                      className="mt-4 h-0.5 w-12 rounded-full"
                      style={{ background: rank.color, opacity: 0.5 }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link href="/results" className="btn-yellow text-sm px-7 py-3.5 rounded-full font-heading font-bold">
            View All Results
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ── HERO SLIDER COMPONENT ────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    const nextIndex = (current + 1) % heroSlides.length;
    setDirection(1);
    setCurrent(nextIndex);
  }, [current]);

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + heroSlides.length) % heroSlides.length;
    setDirection(-1);
    setCurrent(prevIndex);
  }, [current]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* ── Background image with animated swap ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Image
            src={slide.image}
            alt="ECC campus"
            fill
            className="object-cover object-center"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Dark overlay — stronger on mobile (full cover), subtle gradient on desktop */}
          <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ── Decorative grid ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative container-pad w-full py-16 md:py-28">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`content-${current}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            exit="exit"
            className="max-w-3xl"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 text-white text-[11px] sm:text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-4 md:mb-6 max-w-full truncate">
              <MapPin size={11} className="shrink-0" />
              <span className="truncate">{slide.tag}</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-3 md:mb-4">
              {slide.heading}{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {slide.highlight}
              </span>
              <br />
              {slide.headingEnd}
            </h1>

            {/* Sub */}
            <p className="font-body text-white/80 text-sm sm:text-base md:text-xl leading-relaxed mb-6 md:mb-10 max-w-xl">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-10">
              <Link
                href="/contact"
                className="btn-yellow text-sm sm:text-base px-6 py-3 sm:py-4 rounded-xl shadow-lg font-heading font-bold text-center justify-center"
              >
                Enroll Now
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="btn-white text-sm sm:text-base px-6 py-3 sm:py-4 rounded-xl font-heading font-bold text-center justify-center"
              >
                Book Free Demo
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-5">
              {[
                { text: "1000+ Students", full: "1000+ Students Mentored" },
                { text: "95%+ Pass Rate", full: "95%+ Board Pass Rate" },
                { text: "11+ Years", full: "11+ Years in Nalasopara" },
              ].map((badge) => (
                <div key={badge.full} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-accent-yellow shrink-0" />
                  <span className="font-body text-white/85 text-xs sm:text-sm">
                    <span className="sm:hidden">{badge.text}</span>
                    <span className="hidden sm:inline">{badge.full}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Prev / Next arrows — hidden on mobile, visible md+ ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 items-center justify-center text-white transition-all duration-200"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 items-center justify-center text-white transition-all duration-200"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-7 h-2 bg-accent-yellow"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Slide counter — md+ only ── */}
      <div className="hidden md:block absolute bottom-12 right-8 z-20 text-white/50 font-heading font-semibold text-sm">
        {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
      </div>
    </section>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO SLIDER ───────────────────────────────────── */}
      <HeroSlider />

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

      {/* ── HALL OF FAME ──────────────────────────────────── */}
      <HallOfFame />

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-white">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #CC0000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-50 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-yellow-50 blur-3xl opacity-60 pointer-events-none" />

        <div className="relative container-pad">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-primary text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              <Trophy size={13} />
              Why Choose Us
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-brand-black mb-4">
              The Excellent{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #CC0000, #FF4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Advantage
              </span>
            </h2>
            <p className="font-body text-brand-grey text-lg max-w-2xl mx-auto leading-relaxed">
              We combine experienced teaching with proven systems to deliver consistent, outstanding results — year after year.
            </p>
          </motion.div>

          {/* Two-column layout: image left, cards right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            {/* Left: Real photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/why-us-banner.jpg"
                  alt="Teachers and students at Excellent Coaching Classes"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              {/* Floating stat cards */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Trophy size={20} className="text-accent-yellow" />
                </div>
                <div>
                  <p className="font-heading font-black text-brand-black text-sm">100% Dedication</p>
                  <p className="font-body text-brand-grey text-xs">To every student's growth</p>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-5 -left-5 bg-accent-yellow rounded-2xl shadow-xl px-5 py-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="font-heading font-black text-brand-black text-2xl leading-none">11+</p>
                <p className="font-heading font-bold text-brand-black text-xs">Years</p>
              </motion.div>
            </motion.div>

            {/* Right: top 3 cards stacked */}
            <div className="flex flex-col gap-5">
              {whyUs.slice(0, 3).map((item, i) => (
                <motion.article
                  key={item.title}
                  className="group flex items-start gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 group-hover:[&>*]:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-black text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-brand-grey text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Accent line */}
                  <div className="ml-auto w-1 self-stretch rounded-full bg-gray-100 group-hover:bg-primary transition-colors duration-300 shrink-0" />
                </motion.article>
              ))}
            </div>
          </div>

          {/* Bottom 3 cards in a row */}
          <div className="grid sm:grid-cols-3 gap-5">
            {whyUs.slice(3).map((item, i) => (
              <motion.article
                key={item.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                {/* Background accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 group-hover:[&>*]:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  {/* Number badge */}
                  <span className="absolute top-0 right-0 font-heading font-black text-5xl text-gray-50 group-hover:text-red-50 leading-none transition-colors duration-300 select-none">
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-bold text-brand-black text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-brand-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
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

          {/* Row 1 — big feature + 2 stacked on right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {/* Big feature image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden row-span-2 md:col-span-1"
              style={{ minHeight: "420px" }}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Image src={galleryItems[0].src} alt={galleryItems[0].label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="font-heading font-semibold text-white text-sm drop-shadow">{galleryItems[0].label}</span>
              </div>
            </motion.div>

            {/* Right col — 2 equal height tiles */}
            <div className="md:col-span-2 grid grid-rows-2 gap-4" style={{ minHeight: "420px" }}>
              {[galleryItems[1], galleryItems[2]].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="relative rounded-2xl overflow-hidden"
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  transition={{ delay: (i + 1) * 0.08 }}
                >
                  <Image src={item.src} alt={item.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-heading font-semibold text-white text-sm drop-shadow">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2 — 4 equal tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.slice(3).map((item, i) => (
              <motion.div
                key={item.label}
                className="relative rounded-2xl overflow-hidden"
                style={{ height: "220px" }}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Image src={item.src} alt={item.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-heading font-semibold text-white text-sm drop-shadow">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Students celebrating success"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgb(33 33 33 / 0.8)" }} />

        <div className="relative container-pad text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight drop-shadow-lg">
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
            <p className="font-body text-white text-lg mb-8 max-w-lg mx-auto">
              Book a <strong className="text-accent-yellow">100% Free Demo Class</strong> today and
              experience the Excellent Coaching Classes difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-yellow text-base px-8 py-4 rounded-full font-heading font-bold">
                Book Free Demo
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+917020516766"
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
