"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const courses = [
  {
    standard: "10th Standard",
    board: "SSC Maharashtra State Board",
    badge: "Most Popular",
    tagline: "Master your boards with our proven SSC board preparation program.",
    description:
      "Our 10th Standard program is laser-focused on the SSC Maharashtra Board syllabus. We combine concept-first teaching with rigorous mock tests and previous year paper practice to ensure every student walks into the exam hall with full confidence and preparation.",
    subjects: [
      "Mathematics & Algebra",
      "Science & Technology",
      "English (Semi-English)",
      "Social Studies (History, Geography, Civics)",
      "Hindi / Marathi",
    ],
    features: [
      "Complete SSC Board syllabus coverage",
      "10 years of previous question paper drills",
      "Weekly chapter-wise tests",
      "Intensive pre-board mock exams",
      "Dedicated doubt-clearing sessions",
      "Monthly parent-teacher meetings",
      "Score improvement guarantee",
      "Individual attention in small batches",
    ],
    duration: "Full Academic Year",
    batchSize: "15–20 students",
    timing: "Morning & Evening batches available",
    color: "bg-primary-dark",
    accent: "#FFD600",
    badgeStyle: "bg-accent-yellow text-brand-black",
  },
  {
    standard: "11th Standard",
    board: "HSC Maharashtra State Board",
    badge: "Foundation",
    tagline: "Build a rock-solid foundation for 12th boards and beyond.",
    description:
      "The 11th Standard is a critical transition year. Our program ensures students don't just clear the syllabus but deeply understand every concept — building the foundation needed for 12th board excellence and competitive exam readiness.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics (Science Stream)",
      "Biology (for Medical aspirants)",
      "Accounts & Economics (Commerce)",
    ],
    features: [
      "NCERT + State Board curriculum aligned",
      "Science and Commerce streams covered",
      "Concept-first, exam-aware teaching",
      "Regular unit tests and assessments",
      "Study notes and material provided",
      "Weak subject identification and support",
      "Foundation for JEE / NEET (basics)",
      "Personal mentorship for each student",
    ],
    duration: "Full Academic Year",
    batchSize: "12–18 students",
    timing: "Morning & Evening batches available",
    color: "bg-brand-black",
    accent: "#FFD600",
    badgeStyle: "bg-white/10 text-white border border-white/20",
  },
  {
    standard: "12th Standard",
    board: "HSC Maharashtra State Board",
    badge: "Board Champion",
    tagline: "Achieve your best board score with focused strategy and expert coaching.",
    description:
      "12th is the most critical academic year. Our program is designed to maximize every student's HSC board score through intensive revision, exam strategy, mock tests, and personalized guidance. We leave nothing to chance.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics (Science Stream)",
      "Biology (Medical stream)",
      "Accounts & Business Studies (Commerce)",
    ],
    features: [
      "Complete HSC Board syllabus in depth",
      "Board-pattern question practice",
      "Intensive revision and crash batches",
      "Full-length mock board exams",
      "Answer writing and presentation tips",
      "Last 5 years board paper analysis",
      "Score prediction and target setting",
      "High-priority weak topic sessions",
    ],
    duration: "Full Academic Year",
    batchSize: "12–18 students",
    timing: "Morning & Evening batches available",
    color: "bg-[#1a1a2e]",
    accent: "#FFD600",
    badgeStyle: "bg-accent-yellow text-brand-black",
  },
];

const faqs = [
  {
    q: "What is the batch size for each class?",
    a: "We maintain small batches of 12–20 students to ensure every student receives personalized attention from the faculty.",
  },
  {
    q: "Are there morning and evening batches available?",
    a: "Yes, we offer both morning and evening batch timings to accommodate different school schedules.",
  },
  {
    q: "Is study material provided?",
    a: "Yes, comprehensive study notes, worksheets, and previous year question papers are provided as part of the course.",
  },
  {
    q: "How often are tests conducted?",
    a: "Weekly chapter-wise tests are conducted for all students, along with monthly full-length mock exams.",
  },
  {
    q: "Can I book a free demo class?",
    a: "Absolutely! We offer a 100% free demo class for all courses. Contact us to schedule yours today.",
  },
];

export default function CoursesPage() {
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
            <span className="inline-block bg-white/10 text-white/90 text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4">
              Our Programs
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              Courses Built for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Board Success
              </span>
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
              Specialized programs for 10th, 11th &amp; 12th students — designed with one goal in mind: your best board score.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COURSE CARDS ──────────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey">
        <div className="container-pad space-y-10">
          {courses.map((course, i) => (
            <motion.article
              key={course.standard}
              className={`${course.color} rounded-3xl overflow-hidden shadow-xl`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Decorative top bar */}
              <div className="h-1.5 bg-accent-yellow" />

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span
                      className={`inline-block font-heading font-bold text-xs px-3 py-1 rounded-full mb-3 ${course.badgeStyle}`}
                    >
                      {course.badge}
                    </span>
                    <h2 className="font-heading font-black text-4xl text-white mb-1">
                      {course.standard}
                    </h2>
                    <p className="font-body text-white/60 text-sm">{course.board}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: <Clock size={13} />, label: course.duration },
                      { icon: <Users size={13} />, label: course.batchSize },
                      { icon: <BookOpen size={13} />, label: course.timing },
                    ].map((info) => (
                      <div
                        key={info.label}
                        className="flex items-center gap-1.5 font-body text-xs text-white/70 bg-white/10 px-3 py-1.5 rounded-full"
                      >
                        <span style={{ color: course.accent }}>{info.icon}</span>
                        {info.label}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-body text-white/75 text-base leading-relaxed mb-8 max-w-2xl">
                  {course.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Subjects */}
                  <div>
                    <h3
                      className="font-heading font-bold text-xs uppercase tracking-wider mb-3"
                      style={{ color: course.accent }}
                    >
                      Subjects Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="font-body text-sm bg-white/10 text-white/80 px-3 py-1.5 rounded-lg"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3
                      className="font-heading font-bold text-xs uppercase tracking-wider mb-3"
                      style={{ color: course.accent }}
                    >
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2">
                      {course.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle
                            size={13}
                            className="mt-0.5 shrink-0"
                            style={{ color: course.accent }}
                          />
                          <span className="font-body text-white/75 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-accent-yellow text-brand-black font-heading font-bold text-sm px-6 py-3.5 rounded-full hover:bg-accent-golden transition-colors"
                  >
                    Book Free Demo for {course.standard}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-3">
              Frequently Asked{" "}
              <span className="text-gradient-red">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="bg-brand-lightgrey rounded-2xl p-6 border border-gray-100"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className="font-heading font-bold text-brand-black text-base mb-2 flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="font-body text-brand-grey text-sm leading-relaxed pl-5">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="py-20 hero-gradient">
        <div className="container-pad text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Award size={40} className="text-accent-yellow mx-auto mb-4" />
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Start with a Free Demo Class
            </h2>
            <p className="font-body text-white/75 text-lg mb-8 max-w-md mx-auto">
              Experience our teaching firsthand — no commitment, completely free.
            </p>
            <Link
              href="/contact"
              className="btn-yellow text-base px-8 py-4 rounded-full font-heading font-bold"
            >
              Book Your Free Demo
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
