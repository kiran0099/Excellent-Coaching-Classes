"use client";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Award, Quote, Users, TrendingUp, Star, BookOpen, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import facultyData from "../../../public/data/faculty.json";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const achievements = [
  { value: "1000+", label: "Students Mentored", icon: Users },
  { value: "95%+", label: "Board Pass Rate", icon: TrendingUp },
  { value: "11+", label: "Years of Excellence", icon: Award },
  { value: "4.9★", label: "Parent Rating", icon: Star },
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

const missionPoints = [
  "To deliver consistent academic excellence through quality teaching and structured learning.",
  "To provide personalized attention and continuously monitor each student's progress.",
  "To identify individual strengths and areas of improvement, ensuring focused guidance.",
  "To create a supportive and motivating environment that builds confidence and discipline.",
  "To maintain strong and transparent communication with parents as partners in a student's success.",
  "To instill values, consistency, and a growth mindset beyond academics.",
];

function FacultyCard({
  member,
  index,
}: {
  member: (typeof facultyData)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.article
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(183,28,28,0.15)" }}
    >
      {/* Photo */}
      <div className="relative h-64 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-[center_15%]"
              onError={() => setImgError(true)}
            />
          </motion.div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center font-heading font-black text-2xl text-white">
            {initials}
          </div>
        )}

        {/* Overlay that slides up on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-4"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-1.5">
            {member.subjects.map((sub) => (
              <span
                key={sub}
                className="font-body text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium backdrop-blur-sm"
              >
                {sub}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Red accent bar that grows on hover */}
      <motion.div
        className="h-0.5 bg-primary origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="p-5">
        <motion.h3
          className="font-heading font-bold text-brand-black text-base mb-1"
          whileHover={{ color: "#CC0000" }}
          transition={{ duration: 0.2 }}
        >
          {member.name}
        </motion.h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {member.subjects.map((sub) => (
            <span
              key={sub}
              className="font-body text-xs bg-red-50 text-primary px-2 py-0.5 rounded-full font-medium"
            >
              {sub}
            </span>
          ))}
        </div>
        <p className="font-body text-brand-grey text-xs leading-relaxed">
          {member.desc}
        </p>
      </div>
    </motion.article>
  );
}

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
              Learn about our story, our mission, and the passionate team behind
              Excellent Coaching Classes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ───────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Photo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/faculty/fo1.png"
                    alt="Mr. Umesh Rajak — Founder & Director"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_10%]"
                  />
                  {/* Gradient overlay at bottom for name card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-heading font-bold text-xl text-white">
                      Mr. Umesh Rajak
                    </p>
                    <p className="font-body text-white/70 text-sm">
                      Founder &amp; Director
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-white/15 text-white text-xs font-body px-2.5 py-1 rounded-full">
                        B.Sc B.Ed
                      </span>
                      <span className="bg-white/15 text-white text-xs font-body px-2.5 py-1 rounded-full">
                        Mathematics
                      </span>
                      <span className="bg-accent-yellow text-brand-black text-xs font-heading font-bold px-2.5 py-1 rounded-full">
                        12 Yrs Experience
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-accent-yellow text-brand-black font-heading font-black text-center py-4 px-5 rounded-2xl shadow-xl">
                  <div className="text-2xl font-black">1000+</div>
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
                  At <strong className="text-brand-black">EXCELLENT COACHING CLASSES</strong>,
                  excellence is not an aspiration — it is a commitment we uphold
                  every day. For over a decade, we have built a trusted
                  reputation through consistent results, disciplined learning,
                  and a student-centric approach.
                </p>
                <p>
                  We believe true progress comes from personalized attention. By
                  closely monitoring each student and understanding their unique
                  strengths, we ensure focused guidance and steady growth.
                </p>
                <p>
                  Our strong partnership with parents keeps every family
                  informed and involved — because a student&apos;s success is a
                  shared journey. Together, we go beyond marks to build
                  discipline, confidence, and a lifelong growth mindset.
                </p>
              </div>

              <div className="mt-8 p-5 bg-brand-lightgrey rounded-2xl border-l-4 border-primary">
                <Quote size={20} className="text-primary mb-2" />
                <p className="font-heading font-bold text-brand-black italic text-base">
                  &quot;Excellence is not an aspiration — it is a commitment we
                  uphold every day.&quot;
                </p>
                <p className="font-body text-brand-grey text-sm mt-2">
                  — Mr. Umesh Rajak, Founder & Director
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION ────────────────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey overflow-hidden">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left: Vision content — slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-heading font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Eye size={14} />
                Our Vision
              </motion.div>
              <motion.h2
                className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Where We Are{" "}
                <span className="text-gradient-red">Headed</span>
              </motion.h2>
              <motion.p
                className="font-body text-brand-grey text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                To be a trusted and leading coaching institute that nurtures
                young minds to achieve academic excellence and develop into{" "}
                <strong className="text-brand-black">
                  confident, disciplined, and responsible individuals
                </strong>{" "}
                ready to succeed in all aspects of life.
              </motion.p>
            </motion.div>

            {/* Right: Decorative accent — slides in from right, hover scale + rotate */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                className="w-72 h-72 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-xl cursor-default"
                style={{ background: "linear-gradient(135deg, #B71C1C 0%, #E53935 100%)" }}
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0 30px 60px rgba(183,28,28,0.35)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Eye size={56} className="text-white/40" />
                </motion.div>
                <p className="font-heading font-black text-white text-xl text-center px-6 leading-snug">
                  Nurturing Minds,<br />Shaping Futures
                </p>
                <motion.div
                  className="h-1 rounded-full bg-accent-yellow"
                  initial={{ width: 40 }}
                  whileHover={{ width: 80 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────── */}
      <section className="section-pad bg-white overflow-hidden">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left: Decorative accent — slides in from left, hover scale + rotate */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <motion.div
                className="w-72 h-72 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-xl cursor-default"
                style={{ background: "linear-gradient(135deg, #B71C1C 0%, #E53935 100%)" }}
                whileHover={{ scale: 1.05, rotate: -2, boxShadow: "0 30px 60px rgba(183,28,28,0.35)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Target size={56} className="text-white/40" />
                </motion.div>
                <p className="font-heading font-black text-white text-xl text-center px-6 leading-snug">
                  Purpose in<br />Every Step
                </p>
                <motion.div
                  className="h-1 rounded-full bg-accent-yellow"
                  initial={{ width: 40 }}
                  whileHover={{ width: 80 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Right: Mission content — slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-heading font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Target size={14} />
                Our Mission
              </motion.div>
              <motion.h2
                className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                What Drives Us{" "}
                <span className="text-gradient-red">Every Day</span>
              </motion.h2>
              <div className="space-y-3">
                {missionPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      <CheckCircle size={13} className="text-white" />
                    </div>
                    <p className="font-body text-brand-grey text-sm leading-relaxed transition-colors duration-200 group-hover:text-brand-black">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ─────────────────────────────────── */}
      <section className="py-16 bg-primary">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon size={28} className="text-accent-yellow mx-auto mb-3" />
                <div className="font-heading font-black text-4xl text-white mb-1">
                  {item.value}
                </div>
                <div className="font-body text-white/70 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACULTY ──────────────────────────────────────── */}
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
              Our Team
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-3">
              Meet Our <span className="text-gradient-red">Expert Faculty</span>
            </h2>
            <p className="font-body text-brand-grey text-lg max-w-xl mx-auto">
              Experienced, dedicated, and passionate about every student&apos;s
              success.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {facultyData.map((member, i) => (
              <FacultyCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────── */}
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
            <p className="font-body text-brand-grey text-lg max-w-xl mx-auto">
              The principles that shape how we teach, guide, and grow together.
            </p>
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
              Be part of a community that celebrates every student&apos;s growth
              and success.
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
