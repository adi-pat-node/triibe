"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { useState } from "react";
import Image from "next/image";

const ContactPage = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Contact Section */}
      <section className="mt-20 pt-20 pb-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading - Centered */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
            Contact Us
          </h1>

          {/* Subheading - Centered */}
          <p className="text-lg text-gray-600 mb-16 text-center">
            Let's build a stronger generation of nonprofits together
          </p>

          {/* Contact Cards - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <div className="border border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center">
              {/* Email Icon */}
              <div className="mb-8">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Email Label */}
              <h5 className="text-base font-semibold text-gray-900 mb-4">
                Email:
              </h5>

              {/* Email Link */}
              <a
                href="mailto:team@triibe.us"
                className="text-gray-900 hover:text-gray-700 transition-colors underline"
              >
                team@triibe.us
              </a>
            </div>

            {/* Newsletter Card */}
            <div className="border border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center">
              {/* Newsletter Icon */}
              <div className="mb-8">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Newsletter Button */}

              <button
                onClick={() => setShowNewsletter(true)}
                className="border-2 border-black text-black px-8 py-3 rounded-[12px] font-semibold text-base hover:bg-green-950 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Our Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Newsletter Popup */}
      {showNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10 max-w-md w-full relative">
            <button
              onClick={() => setShowNewsletter(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-8">
              <Image
                src="/images/TriibeHero.svg"
                alt="TRIIBE"
                width={64}
                height={64}
                className="h-16 w-auto mx-auto mb-6"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Subscribe to the TRIIBUNE!
              </h3>
              <p className="text-base text-gray-700">
                Monthly updates on our impact, new projects, and ways to get
                involved!
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewsletter(false);
              }}
              className="space-y-4"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-base"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-medium text-white bg-[#004d40] hover:bg-[#00352a] transition-colors rounded-lg"
              >
                Subscribe!
              </button>
              <button
                type="button"
                onClick={() => setShowNewsletter(false)}
                className="w-full text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                No, thank you
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default ContactPage;
