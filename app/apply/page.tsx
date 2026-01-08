"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    organizationName: "",
    location: "",
    videoLink: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        linkedin: "",
        organizationName: "",
        location: "",
        videoLink: "",
        additionalNotes: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const faqs = [
    {
      question: "How do I apply for a cohort?",
      answer:
        "To apply, complete the application form on this page, attaching your 5-minute video link. You'll receive confirmation once your application has been received.",
    },
    {
      question: "Who is eligible to apply?",
      answer:
        "Our program is open each semester to sophomores enrolled at U.S. colleges, no matter their citizenship, addressing needs in food, water, shelter, health, education, or energy.",
    },
    {
      question: "What is the selection process?",
      answer:
        "Our process starts with a thoughtful review of your application and video, then invites semi-finalists for interviews.",
    },
    {
      question: "What support do selected sophomores receive?",
      answer:
        "Finalists receive a $5,000 grant, mentorship, podcast feature, and entry into our community. For a fuller look at additional opportunities, like the Summit, retreat, and documentaries, see the 1-pager above.",
    },
    {
      question: "How long is the program?",
      answer:
        "TRIIBE's three-year program supports you through the rest of college, with each year building toward continuing your work beyond graduation. Afterwards, alumni stay connected, ensuring lifelong belonging and support.",
    },
    {
      question: "When will I hear back?",
      answer:
        "All applicants are notified within two weeks of the application closing, and we keep communication clear and consistent throughout.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Section 1: Hero with Image and Text */}
      <section className="pt-12 pb-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image (shown first on desktop, second on mobile) */}
            <div className="relative order-2 lg:order-1 h-[200px] md:h-[400px] lg:h-[750px] flex flex-col justify-center lg:transform lg:-rotate-12 lg:space-y-4 w-full lg:w-[90%]">
              {/* Single image on mobile, first image on desktop */}
              <div className="relative w-full h-full lg:h-[45%] rounded-2xl overflow-hidden">
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68d9bbcf0bdd736b2984b89f_Screenshot%202025-09-28%20at%206.50.46%E2%80%AFPM.png"
                  alt="TRIIBE Support"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Second image - only visible on desktop */}
              <div className="relative w-full h-[45%] hidden lg:block rounded-2xl overflow-hidden">
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68d9bbcf0bdd736b2984b89f_Screenshot%202025-09-28%20at%206.50.46%E2%80%AFPM.png"
                  alt="TRIIBE Support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - Content (shown first on mobile, second on desktop) */}
            <div className="order-1 lg:order-2">
              <h1 className="mt-12 md:mt-0 text-5xl md:text-8xl font-bold text-gray-900 mb-6 text-center">
                We <br /> Deliver <br /> Holistic <br />
                Support
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work exclusively with youth-led nonprofits, meeting you at
                the pivotal moment in college when vision is high but support is
                scarce. We provide consistent funding, mentorship, and community
                for the rest of your college journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Full Overview Banner */}
      <section className="py-8 px-6 bg-[#ededed]">
        <div className="max-w-7xl mx-auto transition-all duration-300 hover:scale-105">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 ">
            <p className="text-2xl md:text-3xl font-medium text-gray-900">
              For a full overview, see our 1-pager
            </p>
            <Link
              href="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692f473df726f9d2f9b421be_TRIIBE%20Executive%20Summary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black px-10 py-3 rounded-full font-semibold text-base hover:bg-green-950 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              View
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Apply Now - Application Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Apply Now
          </h2>

          <p className="text-lg text-gray-700 mb-8 text-center">
            We're grateful for your interest in joining TRIIBE.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mb-8">
            <p className="text-gray-700 mb-6">
              Instead of a pitch deck, please submit a short video (up to 5
              minutes) describing:
            </p>

            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li>What motivates your work? (Your Why)</li>
              <li>How have you made a difference? (Your Impact)</li>
              <li>How would you use your first grant? (Your Pitch)</li>
            </ol>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-gray-800 font-semibold">
                Applications currently closed.
              </p>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2 "
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100"
                  // placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100"
                  // placeholder="your.email@example.com"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  LinkedIn*
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  required
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100"
                  // placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Organization Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Name Of Organization*
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  required
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100"
                  // placeholder="Your organization's name"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Location*
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100"
                  // placeholder="City, State, Country"
                />
              </div>

              {/* Video Link */}
              <div>
                <label
                  htmlFor="videoLink"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Video Application Link*
                </label>
                <input
                  type="url"
                  id="videoLink"
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleInputChange}
                  required
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100"
                  placeholder="https:..."
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={5}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none bg-gray-100"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled
                  className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold text-lg  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Applications Closed"}
                </button>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in">
                  <p className="text-green-800 font-semibold">
                    Thank you! Your application has been submitted successfully.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-fade-in">
                  <p className="text-red-800 font-semibold">
                    Oops! Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Section 4: Application FAQs */}
      <section className="py-16 px-6 bg-[#ededed]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Application FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ApplyPage;
