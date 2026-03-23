"use client";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  Star,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const faculty = [
  {
    name: "Mr. Rajesh Patil",
    role: "Director & Mathematics Faculty",
    experience: "12+ Years",
    subjects: ["Mathematics", "Statistics"],
    bio: "Founder and lead Mathematics faculty with over a decade of experience in SSC and HSC board coaching. Known for making complex problems simple.",
    initials: "RP",
  },
  {
    name: "Mrs. Sunita Sharma",
    role: "Science Faculty",
    experience: "9 Years",
    subjects: ["Physics", "Chemistry"],
    bio: "Expert in Physics and Chemistry with a passion for practical learning. Her visual teaching approach helps students master concepts with ease.",
    initials: "SS",
  },
  {
    name: "Mr. Anil Verma",
    role: "English & SST Faculty",
    experience: "7 Years",
    subjects: ["English", "Social Studies"],
    bio: "A brilliant communicator who makes English and History engaging. His students consistently score 90%+ in these subjects.",
    initials: "AV",
  },
  {
    name: "Mrs. Priya Nair",
    role: "Commerce & Accounts Faculty",
    experience: "6 Years",
    subjects: ["Accounts", "Economics"],
    bio: "Commerce specialist with deep expertise in Accountancy and Economics. Helps 11th and 12th Commerce students achieve top board scores.",
    initials: "PN",
  },
];

const achievements = [
  { value: "8+", label: "Years of Excellence" },
  { value: "600+", label: "Students Mentored" },
  { value: "95%+", label: "Board Pass Rate" },
  { value: "50+", label: "Students with 90%+" },
];

const values = [
  {
    icon: <Target size={20} className="text-primary" />,
    title: "Results-Driven",
    desc: "Every strategy, every session is designed with one goal — your board score.",
  },
  {
    icon: <Heart size={20} className="text-primary" />,
    title: "Student-First",
    desc: "We care about every student's mental wellbeing, not just their marks.",
  },
  {
    icon: <BookOpen size={20} className="text-primary" />,
    title: "Concept Clarity",
    desc: "We focus on understanding over rote learning for lasting knowledge.",
  },
  {
    icon: <TrendingUp size={20} className="text-primary" />,
    title: "Continuous Growth",
    desc: "We track progress weekly and adapt our teaching to each student's needs.",
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              We Ensure{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                All-Round Excellence
              </span>
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
              Learn about our story, our mission, and the passionate team behind Excellent Coaching Classes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ───────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div
                  className="w-full aspect-[4/5] rounded-3xl flex flex-col items-center justify-center gap-4 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #B71C1C 0%, #E53935 100%)",
                  }}
                >
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center font-heading font-black text-5xl text-white">
                    RP
                  </div>
                  <div className="text-center px-6">
                    <p className="font-heading font-bold text-2xl text-white">Mr. Rajesh Patil</p>
                    <p className="font-body text-white/70 text-sm">Founder & Director</p>
                    <p className="font-body text-accent-yellow text-xs mt-1">12+ Years of Excellence</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-accent-yellow text-brand-black font-heading font-black text-center py-4 px-5 rounded-2xl shadow-xl">
                  <div className="text-2xl font-black">600+</div>
                  <div className="text-xs font-semibold">Students</div>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="inline-block bg-red-50 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Founder&apos;s Message
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-5 leading-tight">
                A Message from Our{" "}
                <span className="text-gradient-red">Founder</span>
              </h2>

              <div className="space-y-4 font-body text-brand-grey leading-relaxed">
                <p>
                  When I started Excellent Coaching Classes, I had one simple vision —
                  to create a place where every student feels seen, heard, and guided
                  towards their full potential.
                </p>
                <p>
                  Over the years, I have seen hundreds of students walk in with self-doubt
                  and walk out with confidence, top scores, and a hunger to achieve more.
                  That transformation is what drives us every single day.
                </p>
                <p>
                  Our tagline <strong className="text-brand-black">&quot;We Ensure All-Round Excellence&quot;</strong> is not
                  just a slogan — it is a commitment we make to every family that trusts
                  us with their child&apos;s education.
                </p>
                <p>
                  We focus not just on marks, but on building discipline, time management,
                  and a lifelong love for learning. That is the Excellent way.
                </p>
              </div>

              <div className="mt-8 p-5 bg-brand-lightgrey rounded-2xl border-l-4 border-primary">
                <p className="font-heading font-bold text-brand-black italic text-base">
                  &quot;Every student deserves quality education. Our job is to make that happen.&quot;
                </p>
                <p className="font-body text-brand-grey text-sm mt-2">— Mr. Rajesh Patil, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ────────────────────────────────── */}
      <section className="py-16 bg-primary">
        <div className="container-pad text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Target size={40} className="text-accent-yellow mx-auto mb-4" />
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
              Our Mission
            </h2>
            <p className="font-body text-white/85 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
              &quot;To ensure all-round excellence in every student — academically,
              personally, and in character.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ─────────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey">
        <div className="container-pad">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-3">
              Our <span className="text-gradient-red">Achievements</span>
            </h2>
            <p className="font-body text-brand-grey text-lg">
              Numbers that reflect our commitment to student success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 card-hover"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-heading font-black text-4xl text-primary mb-2">
                  {item.value}
                </div>
                <div className="font-body text-brand-grey text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACULTY ──────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-red-50 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-3">
              Meet Our <span className="text-gradient-red">Expert Faculty</span>
            </h2>
            <p className="font-body text-brand-grey text-lg max-w-xl mx-auto">
              Experienced, dedicated, and passionate about every student&apos;s success.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {faculty.map((teacher, i) => (
              <motion.article
                key={teacher.name}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Photo area */}
                <div className="bg-gradient-to-br from-primary to-primary-dark h-36 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center font-heading font-black text-2xl text-white">
                    {teacher.initials}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-brand-black text-base mb-0.5">
                    {teacher.name}
                  </h3>
                  <p className="font-body text-primary text-xs font-semibold mb-1">
                    {teacher.role}
                  </p>
                  <p className="font-body text-brand-grey text-xs mb-3">
                    Experience: {teacher.experience}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {teacher.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="font-body text-xs bg-red-50 text-primary px-2 py-0.5 rounded-full"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-brand-grey text-xs leading-relaxed">{teacher.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey">
        <div className="container-pad">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-3">
              Our <span className="text-gradient-red">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-black text-base mb-2">
                  {val.title}
                </h3>
                <p className="font-body text-brand-grey text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
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
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Join the Excellent Family
            </h2>
            <p className="font-body text-white/75 text-lg mb-8 max-w-lg mx-auto">
              Be part of a community that celebrates every student&apos;s growth and success.
            </p>
            <Link
              href="/contact"
              className="btn-yellow text-base px-8 py-4 rounded-full font-heading font-bold"
            >
              Book Free Demo Class
              <Award size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
