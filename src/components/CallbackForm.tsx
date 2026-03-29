"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle, Phone, User, GraduationCap, MessageSquare } from "lucide-react";
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
    const classLabels: Record<string, string> = {
      "nursery": "Nursery", "lkg": "LKG", "ukg": "UKG",
      "1": "Class 1st", "2": "Class 2nd", "3": "Class 3rd",
      "4": "Class 4th", "5": "Class 5th", "6": "Class 6th",
      "7": "Class 7th", "8": "Class 8th", "9": "Class 9th",
      "10": "Class 10th", "11": "Class 11th (Commerce)", "12": "Class 12th (Commerce)",
    };
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL!, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        studentClass: classLabels[data.studentClass] ?? data.studentClass,
        message: data.message || "",
        timestamp,
      }),
    });
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (hasError: boolean) =>
    `w-full pl-10 pr-4 py-3 border rounded-xl font-body text-sm transition-colors focus:outline-none focus:ring-2 bg-white ${
      hasError
        ? "border-primary focus:ring-red-200"
        : "border-gray-200 focus:ring-red-100 focus:border-primary"
    }`;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {submitted ? (
        <motion.div
          className="text-center py-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h3 className="font-heading font-bold text-2xl text-brand-black mb-2">
            Thank You!
          </h3>
          <p className="font-body text-brand-grey">
            We&apos;ll call you back within 2 hours to confirm your free demo.
          </p>
        </motion.div>
      ) : (
        <>
          <h3 className="font-heading font-bold text-2xl text-brand-black mb-1">
            Request a Callback
          </h3>
          <p className="font-body text-brand-grey text-sm mb-6">
            Fill in your details and we&apos;ll reach out shortly.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            {/* Name */}
            <div>
              <label className="block font-heading font-semibold text-sm text-brand-black mb-1.5">
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
                  className={inputClass(!!errors.name)}
                />
              </div>
              {errors.name && (
                <p className="text-primary text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-heading font-semibold text-sm text-brand-black mb-1.5">
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
                  className={inputClass(!!errors.phone)}
                />
              </div>
              {errors.phone && (
                <p className="text-primary text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Class */}
            <div>
              <label className="block font-heading font-semibold text-sm text-brand-black mb-1.5">
                Student&apos;s Class *
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  {...register("studentClass", {
                    required: "Please select a class",
                  })}
                  className={`appearance-none ${inputClass(!!errors.studentClass)}`}
                >
                  <option value="">Select class</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="1">Class 1st</option>
                  <option value="2">Class 2nd</option>
                  <option value="3">Class 3rd</option>
                  <option value="4">Class 4th</option>
                  <option value="5">Class 5th</option>
                  <option value="6">Class 6th</option>
                  <option value="7">Class 7th</option>
                  <option value="8">Class 8th</option>
                  <option value="9">Class 9th</option>
                  <option value="10">Class 10th</option>
                  <option value="11">Class 11th (Commerce)</option>
                  <option value="12">Class 12th (Commerce)</option>
                </select>
              </div>
              {errors.studentClass && (
                <p className="text-primary text-xs mt-1">
                  {errors.studentClass.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-heading font-semibold text-sm text-brand-black mb-1.5">
                Message (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Any specific subject or query..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl font-body text-sm resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-heading font-bold py-3.5 rounded-xl transition-all duration-200 disabled:opacity-70"
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
                  <Send size={16} />
                  Request Free Callback
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
