import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState({ id: 0, message: "", type: null });
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const dropdownRef = useRef(null);

  const budgetOptions = [
    { value: "5k-10k", label: "$100 - $500" },
    { value: "10k-25k", label: "$500 - $1000" },
    { value: "25k-50k", label: "$1000 - $2000" },
    { value: "50k+", label: "$2000+" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsBudgetOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!feedback.message) return;

    const timeout = setTimeout(() => {
      setFeedback({ id: 0, message: "", type: null });
    }, 3500);

    return () => clearTimeout(timeout);
  }, [feedback]);

  const triggerFeedback = (message, type) => {
    setFeedback({
      id: Date.now(),
      message,
      type,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    triggerFeedback("Sending your message...", "info");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("budget", formData.budget);
      formDataToSend.append(
        "_subject",
        `New Contact Form Submission from ${formData.name}`
      );
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/aniketsingh821305@gmail.com",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: "",
        });
        setErrors({});
        triggerFeedback(
          "Message sent! I'll get back to you within 24 hours.",
          "success"
        );
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      triggerFeedback(
        "Failed to send message. Please try again or contact me directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const toast =
    feedback.message && typeof window !== "undefined"
      ? createPortal(
          <div
            role="status"
            aria-live="polite"
            key={feedback.id}
            className="fixed bottom-5 left-5 z-[9999] pointer-events-none"
          >
            <div className="min-w-[240px] max-w-xs text-sm md:text-base font-sans px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-white/15 bg-white text-black">
              <p className="font-semibold uppercase tracking-wide text-xs text-black/70">
                {feedback.type === "success"
                  ? "Message sent"
                  : feedback.type === "info"
                  ? "Sending..."
                  : "Something went wrong"}
              </p>
              <p className="text-xs sm:text-sm mt-1 leading-snug text-black">
                {feedback.message}
              </p>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section id="footer" className="footer-section bg-main-bg relative">
      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[12vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            Let&apos;s build something together
          </h1>
        </div>

        {/* Removed the previously broken media block so no empty placeholder shows up */}

        <div className="relative z-10 mt-20 md:px-10 px-5">
          {toast}
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr,1fr] gap-10 items-start">
            {/* Contact form (inspired by old portfolio ContactSection) */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.6)] font-sans">
              <p className="text-milk/70 text-sm md:text-base mb-4">
                Tell me about your idea, project or collab. I usually reply
                within <span className="text-milk font-semibold">24 hours</span>.
              </p>

              <form className="space-y-4 font-sans" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm text-milk/80 mb-1">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    className={`w-full rounded-2xl bg-black/30 border px-3 py-2 text-milk text-sm md:text-base outline-none focus:ring-2 focus:ring-white/40 transition font-sans ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm text-milk/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                    className={`w-full rounded-2xl bg-black/30 border px-3 py-2 text-milk text-sm md:text-base outline-none focus:ring-2 focus:ring-white/40 transition font-sans ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm text-milk/80 mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What&apos;s this about?"
                    className="w-full rounded-2xl bg-black/30 border border-white/10 px-3 py-2 text-milk text-sm md:text-base outline-none focus:ring-2 focus:ring-white/40 transition font-medium font-sans"
                  />
                </div>

                <div ref={dropdownRef} className="relative">
                  <label className="block text-xs md:text-sm text-milk/80 mb-1">
                    Project budget (optional)
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsBudgetOpen((prev) => !prev)}
                    className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-milk text-sm md:text-base outline-none focus:ring-2 focus:ring-white/40 transition flex items-center justify-between font-medium font-sans"
                  >
                    <span>
                      {formData.budget
                        ? budgetOptions.find(
                            (option) => option.value === formData.budget
                          )?.label
                        : "Select a range"}
                    </span>
                    <svg
                      className={`w-4 h-4 text-milk transition-transform ${
                        isBudgetOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isBudgetOpen && (
                    <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-[#111111] border border-white/10 z-20 overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
                      {budgetOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              budget: option.value,
                            }));
                            setIsBudgetOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm md:text-base transition font-medium font-sans ${
                            formData.budget === option.value
                              ? "bg-white/10 text-white"
                              : "text-milk/80 hover:bg-white/5"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, budget: "" }));
                          setIsBudgetOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs uppercase tracking-[0.2em] text-milk/50 hover:bg-white/5 font-semibold font-sans"
                      >
                        Clear selection
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs md:text-sm text-milk/80 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Share your idea, goals, and timeline..."
                    className={`w-full rounded-2xl bg-black/30 border px-3 py-2 text-milk text-sm md:text-base outline-none focus:ring-2 focus:ring-white/40 transition resize-none font-sans ${
                      errors.message ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white/95 text-black font-bold text-sm md:text-base py-2.5 border border-white/40 tracking-wide uppercase transition hover:bg-white focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-60 disabled:cursor-not-allowed font-sans"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>

            {/* Side info / quick details */}
            <div className="space-y-6 text-milk font-paragraph md:text-lg font-medium">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6">
                <p className="text-sm md:text-base text-milk/80 mb-3">
                  Quick info
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>• Based in India, working with clients worldwide</li>
                  <li>• Open for freelance, collabs & internships</li>
                  <li>• Full‑stack, apps, UI/UX & interactive experiences</li>
                </ul>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6">
                <p className="text-sm md:text-base text-milk/80 mb-3">
                  Direct contact
                </p>
                <div className="space-y-2 text-sm md:text-base">
                  <a
                    href="mailto:aniketsingh821305@gmail.com"
                    className="block hover:text-white/90 transition"
                  >
                    aniketsingh821305@gmail.com
                  </a>
                  <a
                    href="tel:+919117901046"
                    className="block hover:text-white/90 transition"
                  >
                    +91 91179 01046
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-box mt-10">
            <p className="text-xs md:text-sm text-milk/60">
              Copyright © 2025 Luohino - All Rights Reserved
            </p>
            <div className="flex items-center gap-7 text-xs md:text-sm text-milk/60">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
