"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const ArchivePage = () => {
  const allNewsletters = [
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

  // Placeholder for future podcasts - you can add real data later
  const allPodcasts = [
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bc223b49d654ec45b586f2_cdbb69db-45f2-4483-bebd-840f7916bf69.png",
      date: "Coming Soon",
      category: "podcast",
      title: "TRIIBE Talk Podcast",
      description:
        "Stay tuned for our upcoming podcast episodes featuring changemakers and leaders.",
      link: "#",
    },
  ];

  // Placeholder for future workshops - you can add real data later
  const allWorkshops = [
    {
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bc223b0a8f3484e009508b_0555d894-ad14-44cf-bc94-1403def66ee0.png",
      date: "Coming Soon",
      category: "workshop",
      title: "Leadership Workshops",
      description:
        "Check back soon for information on our upcoming workshops and events.",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Header */}
      <section className="py-4 mt-14 md:mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/media"
            className="inline-flex items-center text-black hover:text-green-950  transition-colors text-[16px]"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Media
          </Link>
        </div>
      </section>

      {/* Newsletters Section */}
      <section id="newsletters" className="py-8 bg-white   scroll-mt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              The TRIIBUNE Newsletter
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNewsletters.map((newsletter, index) => (
              <Link
                key={index}
                href={newsletter.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative aspect-video">
                  <Image
                    src={newsletter.image}
                    alt={newsletter.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {newsletter.date}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs uppercase">
                      {newsletter.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {newsletter.title}
                  </h4>
                  <p className="text-gray-600 line-clamp-3">
                    {newsletter.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Podcasts Section */}
      <section id="podcasts" className="py-16 bg-white  scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2h2v2a5 5 0 0 0 10 0v-2h2z" />
                <path d="M11 20h2v3h-2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Podcasts</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPodcasts.map((podcast, index) => (
              <Link
                key={index}
                href={podcast.link}
                className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative aspect-video">
                  <Image
                    src={podcast.image}
                    alt={podcast.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {podcast.date}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs uppercase">
                      {podcast.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {podcast.title}
                  </h4>
                  <p className="text-gray-600">{podcast.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-4 bg-gray-50 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Workshops</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allWorkshops.map((workshop, index) => (
              <Link
                key={index}
                href={workshop.link}
                className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative aspect-video">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {workshop.date}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs uppercase">
                      {workshop.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {workshop.title}
                  </h4>
                  <p className="text-gray-600">{workshop.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default ArchivePage;
