"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import CallbackForm from "@/components/CallbackForm";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contactInfo = [
  {
    icon: <Phone size={22} className="text-white" />,
    title: "Phone / WhatsApp",
    lines: ["+91 7020516766", "+91 9518783448"],
    sub: "Call or WhatsApp anytime",
    href: "tel:+917020516766",
    bg: "bg-primary",
  },
  {
    icon: <MapPin size={22} className="text-white" />,
    title: "Our Address",
    lines: [
      "Shop 1, Meera Apt, Opp. Rickshaw Stand,",
      "Vijay Nagar, Damodar Nagar,",
      "Nalasopara East, Vasai-Virar — 401209",
    ],
    sub: "Easily accessible by auto/bus",
    href: null,
    bg: "bg-primary-dark",
  },
  {
    icon: <Clock size={22} className="text-white" />,
    title: "Batch Timings",
    lines: ["Mon – Sat: 7:00 AM – 9:00 PM"],
    sub: "Morning & Evening batches",
    href: null,
    bg: "bg-brand-black",
  },
];

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              Start Your{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Excellence Journey
              </span>
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
              Book a free demo class, ask us anything, or just say hello. We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ────────────────────────────── */}
      <section className="py-12 bg-brand-lightgrey">
        <div className="container-pad">
          <div className="grid md:grid-cols-3 gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                className={`${info.bg} rounded-2xl p-6`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">
                  {info.title}
                </h3>
                {info.lines.map((line) => (
                  <p key={line} className="font-body text-white/80 text-sm">
                    {info.href ? (
                      <a href={info.href} className="hover:text-white transition-colors">
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
                <p className="font-body text-white/50 text-xs mt-2">{info.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: Info + WhatsApp CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="inline-block bg-red-50 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Request a Callback
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-4 leading-tight">
                Talk to Us &amp;{" "}
                <span className="text-gradient-red">Enroll Today</span>
              </h2>
              <p className="font-body text-brand-grey text-base leading-relaxed mb-8">
                Fill out the form and we&apos;ll call you back within 2 hours. Or reach us
                directly via phone or WhatsApp — we&apos;re always available to help.
              </p>

              {/* Quick contact options */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+917020516766"
                  className="flex items-center gap-4 bg-brand-lightgrey rounded-2xl p-4 hover:bg-red-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-black text-sm">Call Us Now</p>
                    <p className="font-body text-primary text-sm font-semibold">+91 7020516766 / +91 9518783448</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 ml-auto group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://wa.me/917020516766?text=Hi!%20I%20want%20to%20book%20a%20free%20demo%20class."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-brand-lightgrey rounded-2xl p-4 hover:bg-green-50 transition-colors group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-black text-sm">Chat on WhatsApp</p>
                    <p className="font-body text-[#25D366] text-sm font-semibold">
                      Instant response guaranteed
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 ml-auto group-hover:text-[#25D366] transition-colors" />
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 p-4 bg-brand-lightgrey rounded-2xl">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-heading font-bold text-brand-black text-sm mb-1">
                    Visit Us
                  </p>
                  <p className="font-body text-brand-grey text-sm leading-relaxed">
                    Shop 1, Meera Apt, Opp. Rickshaw Stand,
                    <br />
                    Vijay Nagar, Damodar Nagar,
                    <br />
                    Nalasopara East, Vasai-Virar — 401209
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <CallbackForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────── */}
      <section className="bg-brand-lightgrey py-12">
        <div className="container-pad">
          <motion.div
            className="text-center mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl text-brand-black">
              Find Us on the Map
            </h2>
            <p className="font-body text-brand-grey text-sm mt-1">
              Shop 1, Meera Apt, Opp. Rickshaw Stand, Vijay Nagar, Damodar Nagar, Nalasopara East, Vasai-Virar — 401209
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-200"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60191.669968992835!2d72.76156105747002!3d19.456456120577517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9d14a1b1957%3A0x9731a29b0093d874!2sExcellent%20Coaching%20Classes!5e0!3m2!1sen!2sin!4v1774546179556!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Excellent Coaching Classes Location"
            />
          </motion.div>
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
              Don&apos;t Wait — Seats Fill Fast!
            </h2>
            <p className="font-body text-white/75 text-lg mb-8 max-w-md mx-auto">
              We maintain small batches for personalized attention. Secure your seat today.
            </p>
            <a
              href="tel:+917020516766"
              className="btn-yellow text-base px-8 py-4 rounded-full font-heading font-bold"
            >
              Call Now: +91 7020516766
              <Phone size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
