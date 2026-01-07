import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with TRIIBE",
  description: "Contact TRIIBE to learn more about our mentorship programs, volunteer opportunities, and how you can support the next generation of change makers.",
  openGraph: {
    title: "Contact TRIIBE - Get in Touch",
    description: "Reach out to learn more about our programs and how you can get involved with TRIIBE's mission.",
    url: "https://triibe.us/contact-us",
  },
  alternates: {
    canonical: "https://triibe.us/contact-us",
  },
};

const ContactPage = () => {
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
              <Link
                href="https://mailchi.mp/triibe.us/subscribe-to-triibe"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-black hover:text-white transition-all duration-300"
              >
                Our Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
