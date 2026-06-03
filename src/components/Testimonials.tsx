"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquare, ArrowRight } from "lucide-react";
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
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
    return d.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col select-none">
      <Quote size={20} className="text-primary/20 mb-3 shrink-0" />
      <p className="font-body text-brand-grey text-sm leading-relaxed flex-1 mb-4 line-clamp-4">
        {review.feedback}
      </p>
      <div className="border-t border-gray-100 pt-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
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
    </article>
  );
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((r) => r.json())
      .then((data: Review[]) => {
        const filtered = Array.isArray(data)
          ? data
              .filter((r) => Number(r.rating) >= 4)
              .sort(
                (a, b) =>
                  new Date(b.datetime).getTime() -
                  new Date(a.datetime).getTime()
              )
              .slice(0, 12)
              .map((r) => ({
                ...r,
                name: sanitizeName(r.name),
                feedback: sanitizeText(r.feedback, 300),
              }))
          : [];
        setReviews(filtered);
      })
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section-pad bg-brand-lightgrey overflow-hidden relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #E53935 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12 container-pad"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-primary text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <MessageSquare size={13} />
            Student Reviews
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-3">
            What Our{" "}
            <span className="text-gradient-red">Students Say</span>
          </h2>
          <p className="font-body text-brand-grey text-lg max-w-xl mx-auto leading-relaxed">
            Real words from real students and parents who have experienced the
            Excellent Coaching Classes difference.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
          </div>
        )}

        {/* Empty state */}
        {!loading && reviews.length === 0 && (
          <motion.div
            className="text-center py-16 container-pad"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Quote size={40} className="text-gray-200 mx-auto mb-4" />
            <p className="font-body text-brand-grey text-base">
              No reviews yet. Be the first to share your experience!
            </p>
            <Link
              href="/review"
              className="btn-red mt-6 text-sm px-6 py-3 rounded-full font-heading font-bold inline-flex items-center gap-2"
            >
              Write a Review
            </Link>
          </motion.div>
        )}

        {/* Horizontal marquee */}
        {!loading && reviews.length > 0 && (
          <>
            <div className="relative mb-10">
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-brand-lightgrey to-transparent" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-l from-brand-lightgrey to-transparent" />

              <div
                className="overflow-hidden py-2"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
              >
                {/* Duplicate reviews for seamless infinite loop */}
                <div
                  className="flex gap-5"
                  style={{
                    width: "max-content",
                    animation: "marqueeScroll 40s linear infinite",
                    animationPlayState: paused ? "paused" : "running",
                  }}
                >
                  {[...reviews, ...reviews].map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA row */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 container-pad"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Link
                href="/review"
                className="btn-red text-sm px-7 py-3.5 rounded-full font-heading font-bold"
              >
                Share Your Experience
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-primary text-brand-grey hover:text-primary text-sm px-7 py-3.5 rounded-full font-heading font-bold transition-colors duration-200"
              >
                View All Reviews
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </>
        )}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
