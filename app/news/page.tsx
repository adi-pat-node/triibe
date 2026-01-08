import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates - Latest from TRIIBE",
  description:
    "Stay updated with the latest news, achievements, and stories from TRIIBE's global community of change makers and mentorship programs.",
  openGraph: {
    title: "TRIIBE News & Updates",
    description:
      "Read the latest updates and success stories from TRIIBE's community of change makers around the world.",
    url: "https://triibe.us/news",
  },
  alternates: {
    canonical: "https://triibe.us/news",
  },
};

const NewsPage = () => {
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

  const initiatives = [
    {
      icon: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bc223b49d654ec45b586f2_cdbb69db-45f2-4483-bebd-840f7916bf69.png",
      title: "Podcasts",
    },
    {
      icon: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bc21347e73b0da2a042045_cdbb69db-45f2-4483-bebd-840f7916bf69%20copy%202.png",
      title: "Documentaries",
    },
    {
      icon: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bc223ea0fd399ae8fb0d91_TRIIBE%20Text%20Template%20(1).png",
      title: "Newsletters",
    },
    {
      icon: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bc223b0a8f3484e009508b_0555d894-ad14-44cf-bc94-1403def66ee0.png",
      title: "Events",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <h1 className="sr-only">News and Updates from TRIIBE</h1>

      {/* Hero Section - Side by Side Layout */}
      <section className="mt-14 md:mt-20 pt-6 md:pt-16  bg-gray-50  md:pb-16 ">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 ">
            {/* Left side - Image */}
            <div className="relative w-full h-100 md:h-158  rounded-2xl overflow-hidden">
              <Image
                src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bdd1969ad2629c5305e094_Square%20Banner%20Large.jpeg"
                alt="TRIIBE News Banner"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right side - Content */}
            <div className="flex  flex-col justify-center items-center px-8 lg:px-16 py-0 lg:py-0 bg-white rounded ">
              {/* Logos at top */}
              <div className="flex  flex-col md:flex-row items-center gap-8 mb-8 ">
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/690ebe8f0b105d3dea1ecfbf_The%20TRIIBUNE%20Black.png"
                  alt="The TRIIBUNE"
                  width={300}
                  height={60}
                  className="object-contain w-[175px] md:w-[300px]"
                />
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/690ec0097fad8b2d6aa19eec_Screenshot_2025-11-07_at_10.58.29_PM-removebg-preview.png"
                  alt="TRIIBE TALK"
                  width={250}
                  height={60}
                  className="object-contain w-[125px] md:w-[250px]"
                />
              </div>

              {/* Text below logos */}
              <p className="text-lg text-gray-700 text-center max-w-lg leading-relaxed mb-8">
                Our initiatives exist to amplify TRIIBE's presence and the
                voices of our young changemakers
              </p>

              {/* Initiative links */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Podcasts</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Documentaries</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Newsletters</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Events</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/triibe.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/thetriibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section - Full Width */}
      <section className="py-16 px-6 bg-gray-50 m-auto">
        <div className="max-w-7xl mx-auto">
          <Link
            href={newsCards[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Left side - Image */}
              <div
                className="relative  h-64
               md:h-125 w-full m-auto rounded-2xl overflow-hidden"
              >
                <Image
                  src={newsCards[0].image}
                  alt={newsCards[0].title}
                  fill
                  className="object-cover "
                />
              </div>

              {/* Right side - Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12 bg-gray-50">
                <div className="flex flex-wrap  items-center gap-2 mb-4 text-sm text-gray-500 uppercase">
                  <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">
                    {newsCards[0].date}
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    {newsCards[0].category}
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    {newsCards[0].readTime}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors">
                  {newsCards[0].title}
                </h2>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {newsCards[0].description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* News Grid Section - Remaining Articles */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsCards.slice(1).map((card, index) => (
              <Link
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative md:h-104 h-64  w-full rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 ">
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-gray-500 uppercase">
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700 uppercase">
                      {card.date}
                    </span>

                    <span className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700 uppercase">
                      {card.category}
                    </span>

                    <span>{card.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-4">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gray-100 overflow-x-hidden">
        <div className="max-w-7xl mx-auto bg-white transition-all duration-300 hover:scale-105 rounded-3xl shadow-lg px-8 md:px-12 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stay informed. Join the TRIIBE
            </h2>
            <Link
              href="https://mailchi.mp/triibe.us/subscribe-to-triibe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-full font-semibold text-base hover:bg-green-950 hover:text-white   transition-all duration-300 whitespace-nowrap self-start md:self-center"
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

export default NewsPage;
