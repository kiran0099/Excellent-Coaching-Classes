"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle, Phone, User, GraduationCap } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  studentClass: string;
  message?: string;
};

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call — replace with actual endpoint
    await new Promise((res) => setTimeout(res, 1200));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
              Start Your{" "}
              <span style={{ color: "#1e3a8a" }}>Success Journey</span>{" "}
              Today
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Book a <strong>100% Free Demo Class</strong> and experience the
              Excellent difference. Our expert faculty will personally guide you.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  title: "Our Location",
                  detail: "Opposite Vijay Nagar Rickshaw Stand, Nalasopara East",
                },
                {
                  icon: "📞",
                  title: "Call / WhatsApp",
                  detail: "+91 98765 43210",
                },
                {
                  icon: "⏰",
                  title: "Batch Timings",
                  detail: "Morning & Evening batches available",
                },
                {
                  icon: "🎓",
                  title: "Courses",
                  detail: "SSC Class 9th & 10th (Semi-English & English Medium)",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            {submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: "#16a34a" }} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-500">
                  We&apos;ll call you back within 2 hours to confirm your free demo.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Request a Callback
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Fill in the details below and we&apos;ll reach out shortly.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Student / Parent Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        {...register("name", {
                          required: "Name is required",
                          minLength: { value: 2, message: "Name too short" },
                        })}
                        type="text"
                        placeholder="Enter full name"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.name
                            ? "border-red-400 focus:ring-red-200"
                            : "border-gray-200 focus:ring-blue-200 focus:border-blue-400"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit mobile number",
                          },
                        })}
                        type="tel"
                        placeholder="10-digit mobile number"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? "border-red-400 focus:ring-red-200"
                            : "border-gray-200 focus:ring-blue-200 focus:border-blue-400"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Class */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Student&apos;s Class *
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        {...register("studentClass", {
                          required: "Please select a class",
                        })}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm bg-white transition-colors focus:outline-none focus:ring-2 appearance-none ${
                          errors.studentClass
                            ? "border-red-400 focus:ring-red-200"
                            : "border-gray-200 focus:ring-blue-200 focus:border-blue-400"
                        }`}
                      >
                        <option value="">Select class</option>
                        <option value="9">Class 9th (Foundation)</option>
                        <option value="10">Class 10th (Board Mastery)</option>
                      </select>
                    </div>
                    {errors.studentClass && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.studentClass.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Any specific subject or query..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 w-full text-white font-bold py-3.5 rounded-xl transition-all duration-200 disabled:opacity-70"
                    style={{ backgroundColor: "#1e3a8a" }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Free Callback
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
