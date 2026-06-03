"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquare, ArrowLeft, PenLine, Filter } from "lucide-react";
import Link from "next/link";
import { sanitizeName, sanitizeText } from "@/lib/sanitize";

const SHEET_URL =
  "https://opensheet.elk.sh/1tNxaWtaSMUJwA7FHnTT0y249ZUy6XC2NT-4e8Wbj6RQ/Reviews";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface Review {
  name: string;
  feedback: string;
  rating: string;
  datetime: string;
}

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          fill={star <= rating ? "#FFD600" : "none"}
          className={star <= rating ? "text-accent-yellow" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.article
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.07, duration: 0.5 }}
      whileHover={{ y: -3 }}
    >
      <Quote size={20} className="text-primary/20 mb-3 shrink-0" />
      <p className="font-body text-brand-grey text-sm leading-relaxed flex-1 mb-5">
        {review.feedback}
      </p>
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="font-heading font-black text-white text-xs">
              {review.name?.charAt(0)?.toUpperCase() ?? "?"}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-heading font-bold text-brand-black text-sm leading-tight truncate">
              {review.name}
            </p>
            {review.datetime && (
              <p className="font-body text-brand-grey text-xs mt-0.5">
                {formatDate(review.datetime)}
              </p>
            )}
          </div>
        </div>
        <StarRating rating={Number(review.rating)} />
      </div>
    </motion.article>
  );
}

const FILTER_OPTIONS = [
  { label: "All", value: 0 },
  { label: "5★", value: 5 },
  { label: "4★", value: 4 },
  { label: "3★", value: 3 },
  { label: "1–2★", value: -1 },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((r) => r.json())
      .then((data: Review[]) => {
        const sorted = Array.isArray(data)
          ? data
              .sort(
                (a, b) =>
                  new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
              )
              .map((r) => ({
                ...r,
                name: sanitizeName(r.name),
                feedback: sanitizeText(r.feedback, 500),
              }))
          : [];
        setReviews(sorted);
      })
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    filter === 0
      ? reviews
      : filter === -1
      ? reviews.filter((r) => Number(r.rating) <= 2)
      : reviews.filter((r) => Number(r.rating) === filter);

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length
        ).toFixed(1)
      : "—";

  const fiveStarCount = reviews.filter((r) => Number(r.rating) === 5).length;

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
              Student Reviews
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              All{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD600, #FFC107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Reviews
              </span>
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
              Honest feedback from students and parents who have been part of
              the Excellent Coaching Classes family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN SECTION ────────────────────────────────── */}
      <section className="section-pad bg-brand-lightgrey relative">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E53935 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative container-pad">
          {/* Top bar: back link + write review */}
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-body text-brand-grey text-sm hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <Link
              href="/review"
              className="btn-red text-sm px-5 py-2.5 rounded-full font-heading font-bold"
            >
              <PenLine size={14} />
              Write a Review
            </Link>
          </div>

          {/* Stats row */}
          {!loading && reviews.length > 0 && (
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10 max-w-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                <p className="font-heading font-black text-3xl text-brand-black">
                  {reviews.length}
                </p>
                <p className="font-body text-brand-grey text-xs mt-1">
                  Total Reviews
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                <p className="font-heading font-black text-3xl text-brand-black">
                  {avgRating}
                  <span className="text-accent-yellow text-xl">★</span>
                </p>
                <p className="font-body text-brand-grey text-xs mt-1">
                  Avg Rating
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                <p className="font-heading font-black text-3xl text-brand-black">
                  {fiveStarCount}
                </p>
                <p className="font-body text-brand-grey text-xs mt-1">
                  5-Star Reviews
                </p>
              </div>
            </motion.div>
          )}

          {/* Filter pills */}
          {!loading && reviews.length > 0 && (
            <motion.div
              className="flex items-center gap-2 flex-wrap mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Filter size={14} className="text-brand-grey shrink-0" />
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                    filter === opt.value
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white border border-gray-200 text-brand-grey hover:border-primary hover:text-primary"
                  }`}
                >
                  {opt.label}
                  {opt.value !== -1 && opt.value !== 0 && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({reviews.filter((r) => Number(r.rating) === opt.value).length})
                    </span>
                  )}
                  {opt.value === -1 && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({reviews.filter((r) => Number(r.rating) <= 2).length})
                    </span>
                  )}
                  {opt.value === 0 && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({reviews.length})
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center h-60">
              <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
            </div>
          )}

          {/* Empty state */}
          {!loading && reviews.length === 0 && (
            <motion.div
              className="text-center py-20"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <Quote size={48} className="text-gray-200 mx-auto mb-4" />
              <p className="font-body text-brand-grey text-base mb-6">
                No reviews yet. Be the first!
              </p>
              <Link
                href="/review"
                className="btn-red text-sm px-6 py-3 rounded-full font-heading font-bold inline-flex items-center gap-2"
              >
                <PenLine size={14} />
                Write a Review
              </Link>
            </motion.div>
          )}

          {/* No results for filter */}
          {!loading && reviews.length > 0 && filtered.length === 0 && (
            <motion.div
              className="text-center py-16"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <p className="font-body text-brand-grey text-base">
                No reviews for this rating.
              </p>
              <button
                onClick={() => setFilter(0)}
                className="mt-4 font-body text-primary text-sm underline underline-offset-2"
              >
                Show all reviews
              </button>
            </motion.div>
          )}

          {/* Reviews grid */}
          {!loading && filtered.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((review, i) => (
                <ReviewCard key={i} review={review} index={i} />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          {!loading && reviews.length > 0 && (
            <motion.div
              className="text-center mt-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="font-body text-brand-grey text-base mb-4">
                Had a great experience? Let others know!
              </p>
              <Link
                href="/review"
                className="btn-red text-sm px-7 py-3.5 rounded-full font-heading font-bold"
              >
                <PenLine size={15} />
                Write a Review
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
