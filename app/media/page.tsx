"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const MediaPage = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/JHLqGjAnJ8c"
  );

  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoSrc(
              "https://www.youtube.com/embed/JHLqGjAnJ8c?autoplay=1&mute=1&playsinline=1"
            );
          }
        });
      },
      { threshold: 0.5 } // Video starts when 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/thetriibe/",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@TRIIBEtalk",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/triibe.us/",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@triibetalk",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Subscribe",
      url: "#",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      isSubscribe: true,
    },
  ];

  const newsCards = [
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6914b8fe53e5c6fdf6125a6c_70632aae-58b7-18fb-bdca-711530df92dd.png",
      date: "NOV 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "Onboarding Our 6th TRIIBE Branch!",
      description:
        "In the past month, we onboarded 25 new members, bringing our total to nearly 70 and keeping us on track toward our goal of 100 by year-end. We launched NEST, a program supporting young founders and volunteers in building and scaling nonprofits, and received over a dozen applications for the next cohort, with finalists to be announced soon. We also secured a $268K in-kind podcast partnership, with the first three episodes set for release, and added our sixth TRIIBE branch - now spanning the US, Canada, Zambia, Nigeria, Sierra Leone, and India - expanding our global presence to 17 countries and counting.",
      link: "https://mailchi.mp/triibe.us/the-triibune-october-newsletter",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692cb74da1166445d9deb42b_octobernewsletter.jpg",
      date: "OCTOBER 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "TRIIBE talk Podcast Launched",
      description:
        "25 new members, NEST, a $268K podcast partnership, dozens of cohort applicants, and a 6th global branch. A second office and upcoming anniversary and launches.",
      link: "https://mailchi.mp/triibe.us/the-triibune-october-newsletter",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692cb8157677d1fb7dfb7fb8_septembernewsletter-min.jpg",
      date: "SEPTEMBER 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "New TRIIBE Office",
      description:
        "Major Climate Week turnout, another new office, global expansion, rapid team growth, updated materials, and our first media and podcast features.",
      link: "https://us9.campaign-archive.com/?u=88e516b0368da342b9b8c8a74&id=e03ca8d46f",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692e3be0b6af306f7ffa3f9b_Screenshot%202025-12-01%20at%2020.07.02.png",
      date: "AUGUST 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "Growing Tenfold",
      description:
        "Announcing new mentors, a new office, major partnerships, grant progress, media features, and an updated mission.",
      link: "https://us9.campaign-archive.com/?u=88e516b0368da342b9b8c8a74&id=f4d75358ac",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898ddc0d7fe900272e07504_IMG_1223.jpg",
      date: "JULY 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "Summit 2025 Recap",
      description:
        "Recapping the Changemaker Summit 2025 with over 110 high-profile attendees while expanding our digital presence and refining documentation.",
      link: "https://mailchi.mp/triibe.us/the-triibune-july-edition",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4d92bcc1dd2b90c8c5a_f363186d-31d2-002b-e5f7-9380774261f3.png",
      date: "JUNE 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "Launching Our Summit",
      description:
        "Announcing event sponsors, speakers, and funding for our first summit, alongside new partnerships with ESG News, Taproot & Charity Footprints, and Steve Madden.",
      link: "https://mailchi.mp/triibe.us/triibe-newsletter-april-edition-4763882",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4b9c1cd99f5b1d43464_d5ad1fc5-982a-4cc7-031c-ea1ab13290ea.png",
      date: "MAY 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "Our First Cohort",
      description:
        "Welcoming our first cohort as they connect with mentors and debuting TRIIBE merchandise.",
      link: "https://mailchi.mp/triibe.us/triibe-newsletter-april-edition-4763842",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4956e3ee6fe54674578_Screenshot%202025-08-31%20at%207.59.49%E2%80%AFPM.png",
      date: "APRIL 2025",
      category: "newsletter",
      readTime: "5 min read",
      title: "6 Month Anniversary",
      description:
        "Celebrating our 6-month anniversary, achieving 501(c)(3) status, joining the Wasserman Unstoppable Accelerator, and launching our newsletter.",
      link: "https://mailchi.mp/cd1434665037/triibe-newsletter-april-edition",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <h1 className="sr-only">Media - TRIIBE</h1>

      {/* Hero Section */}
      <section className="mt-8 md:mt-8 pt-6 md:pt-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center py-8">
            {/* Left - Banner/Logo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full h-100 md:h-158  rounded-2xl overflow-hidden">
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bdd1969ad2629c5305e094_Square%20Banner%20Large.jpeg"
                  alt="TRIIBE Media Banner"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Introducing
              </h2>
              <div className="mb-6">
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/690ec0097fad8b2d6aa19eec_Screenshot_2025-11-07_at_10.58.29_PM-removebg-preview.png"
                  alt="TRIIBE TALK"
                  width={600}
                  height={150}
                  className="w-full max-w-[400px] md:max-w-[600px] h-auto mx-auto md:mx-0 object-contain"
                />
              </div>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
                Alternating, actionable lessons from current and next-gen
                changemakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video and Calendar Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* YouTube Video */}
            <div
              ref={videoRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-video">
                <iframe
                  src={videoSrc}
                  title="TRIIBE TALK Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Luma Calendar */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h3>
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ flexGrow: 1 }}
              >
                <iframe
                  src="https://luma.com/embed/calendar/cal-7Eel9YxQnoBh2PA/events"
                  title="TRIIBE Events Calendar"
                  className="w-full h-full min-h-[400px] md:min-h-0"
                  frameBorder="0"
                  style={{
                    border: "1px solid #bfcbda88",
                    borderRadius: "16px",
                  }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Connect With Us
          </h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target={social.isSubscribe ? undefined : "_blank"}
                rel={social.isSubscribe ? undefined : "noopener noreferrer"}
                onClick={
                  social.isSubscribe
                    ? (e) => {
                        e.preventDefault();
                        setShowNewsletter(true);
                      }
                    : undefined
                }
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow text-gray-800 group-hover:text-gray-600">
                  {social.svg}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {social.name}
                </span>
              </Link>
            ))}
          </div>
          {/* Podcast Platform Links */}
          <div className="flex  items-center gap-4  justify-center  mt-8">
            <span className="text-base text-gray-700 font-medium">
              Listen on:
            </span>
            <Link
              href="https://open.spotify.com/show/1P5jIjrqdDLL1Xoquj5eiE?si=fd24d12a0edf448c"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Spotify"
            >
              <Image
                src="/images/spotify-logo.png"
                alt="Spotify"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </Link>
            <Link
              href="https://podcasts.apple.com/us/podcast/triibe-talk/id1855739237"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Apple Podcasts"
            >
              <Image
                src="/images/apple-podcasts-logo.png"
                alt="Apple Podcasts"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </Link>
            <Link
              href="https://music.amazon.com/podcasts/da3070b6-5ec9-4ed0-9d8d-67a43f7fbb79/triibe-talk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Amazon Music"
            >
              <Image
                src="/images/amazon-music-logo.png"
                alt="Amazon Music"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Three Column Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 ">
            {/* Podcasts Column */}
            <div>
              <div className=" text-center mb-6 ">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Podcasts
                </h3>
              </div>
              <div className="space-y-16 ">
                <Link
                  href="https://www.youtube.com/watch?v=XNUr1NgLq28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video">
                    <Image
                      src="/images/podcast.png"
                      alt="TRIIBE Talk Podcast - Episode 1"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2 uppercase">
                      Latest Episode
                    </p>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      High Tech with HAITECH
                    </h4>
                    <p className="text-sm text-gray-600">
                      Founder and Product Lead of HAITECH Learning explores her
                      remarkable journey from growing up in Haiti to launching a
                      nonprofit.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Workshops Column */}
            <div>
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Workshops
                </h3>
              </div>
              <div className="space-y-6">
                <Link
                  href="https://www.youtube.com/watch?v=pNKGIByJNnk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video">
                    <Image
                      src="/images/Workshop.png"
                      alt="Leadership Workshop"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2 uppercase">
                      Latest Workshop
                    </p>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-[14px]">
                      Signal to Noise Branding x The SuperBetter Mindset
                    </h4>
                    <p className="text-sm text-gray-600">
                      Watch our latest workshop session with industry leaders
                      and experts as they share insights.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter Column */}
            <div>
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  The TRIIBUNE Newsletter
                </h3>
              </div>
              <div className="space-y-6">
                {/* Most recent newsletter */}
                <Link
                  href={newsCards[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={newsCards[0].image}
                      alt={newsCards[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2 uppercase">
                      {newsCards[0].date}
                    </p>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {newsCards[0].title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {newsCards[0].description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Link */}
      <div className="text-center pb-16">
        <Link
          href="/media/archive"
          className="inline-block px-8 py-4 bg-gradient-to-r hover:bg-green-950 hover:text-white  text-black font-bold hover:shadow-lg  border border-black rounded-[12px] transition-all duration-300 hover:scale-105"
        >
          View Complete Archive
        </Link>
      </div>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg px-8 md:px-12 py-8 md:py-10 hover:scale-105 transition-transform">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stay informed. Join the TRIIBE
            </h3>
            <Link
              href="https://mailchi.mp/triibe.us/subscribe-to-triibe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-full font-semibold text-base hover:bg-green-950 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </Link>
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

export default MediaPage;
