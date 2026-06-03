"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, CheckCircle, ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";
import { sanitizeName, sanitizeText } from "@/lib/sanitize";

// ── CONFIG ────────────────────────────────────────────────────────────────────
const SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbwUI0_fWCIo1xWsAOlgiQiu9n4QWhxJqAXASsOS9UyUBLMCIkYS0piXerdzGz460GPx-A/exec";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ReviewPage() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!feedback.trim()) { setError("Please write your feedback."); return; }
    if (rating === 0) { setError("Please select a star rating."); return; }
    setError("");
    setLoading(true);

    try {
      const cleanName = sanitizeName(name);
      const cleanFeedback = sanitizeText(feedback, 300);

      // Google Apps Script requires no-cors; response will be opaque (that's expected)
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          feedback: cleanFeedback,
          rating,
          datetime: new Date().toISOString(),
        }),
        mode: "no-cors",
      });
      setSuccess(true);
      setName("");
      setFeedback("");
      setRating(0);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const activeRating = hovered || rating;

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="container-pad text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4">
              <MessageSquare size={12} />
              Share Your Experience
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              Leave a{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Review
              </span>
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
              Your feedback helps us grow and helps other students and parents
              make the right choice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FORM SECTION ───────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #E53935 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative container-pad">
          <div className="max-w-xl mx-auto">
            {/* Back link */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-body text-brand-grey text-sm hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </motion.div>

            {/* Success State */}
            {success ? (
              <motion.div
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h2 className="font-heading font-black text-2xl text-brand-black mb-3">
                  Thank You!
                </h2>
                <p className="font-body text-brand-grey text-base leading-relaxed mb-8">
                  Your review has been submitted successfully. We appreciate
                  you taking the time to share your experience with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-red text-sm px-6 py-3 rounded-full font-heading font-bold"
                  >
                    Write Another Review
                  </button>
                  <Link
                    href="/"
                    className="btn-white text-sm px-6 py-3 rounded-full font-heading font-bold border-2 border-gray-200 text-brand-grey hover:border-primary hover:text-primary"
                  >
                    Go to Home
                  </Link>
                </div>
              </motion.div>
            ) : (
              /* Form Card */
              <motion.div
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.1 }}
              >
                {/* Card header accent */}
                <div className="h-1.5 bg-gradient-to-r from-primary-dark via-primary to-primary-light" />

                <div className="p-8 md:p-10">
                  <h2 className="font-heading font-black text-2xl text-brand-black mb-2">
                    Your Feedback Matters
                  </h2>
                  <p className="font-body text-brand-grey text-sm mb-8">
                    All fields are required. Your review will be visible after a
                    quick review.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-heading font-semibold text-brand-black text-sm mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rohit Sharma"
                        maxLength={80}
                        className="w-full font-body text-brand-black text-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-gray-400"
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block font-heading font-semibold text-brand-black text-sm mb-3">
                        Rating
                      </label>
                      <div
                        className="flex gap-2"
                        onMouseLeave={() => setHovered(0)}
                        role="group"
                        aria-label="Star rating"
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHovered(star)}
                            aria-label={`${star} star${star > 1 ? "s" : ""}`}
                            className="transition-transform duration-150 hover:scale-110 active:scale-95"
                          >
                            <Star
                              size={32}
                              fill={star <= activeRating ? "#FFD600" : "none"}
                              className={
                                star <= activeRating
                                  ? "text-accent-yellow"
                                  : "text-gray-300"
                              }
                              strokeWidth={star <= activeRating ? 0 : 1.5}
                            />
                          </button>
                        ))}
                      </div>
                      {rating > 0 && (
                        <p className="font-body text-xs text-brand-grey mt-2">
                          {
                            ["", "Poor", "Below Average", "Good", "Very Good", "Excellent"][
                              rating
                            ]
                          }
                        </p>
                      )}
                    </div>

                    {/* Feedback */}
                    <div>
                      <label
                        htmlFor="feedback"
                        className="block font-heading font-semibold text-brand-black text-sm mb-2"
                      >
                        Your Feedback
                      </label>
                      <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Share your experience with Excellent Coaching Classes…"
                        maxLength={300}
                        rows={5}
                        className="w-full font-body text-brand-black text-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-gray-400 resize-none"
                      />
                      <p className="font-body text-xs text-brand-grey mt-1 text-right">
                        {feedback.length} / 300
                      </p>
                    </div>

                    {/* Error */}
                    {error && (
                      <motion.p
                        className="font-body text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {error}
                      </motion.p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-red py-4 rounded-xl font-heading font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Submitting…
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send size={16} />
                          Submit Review
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
