// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import Link from "next/link";
// import Image from "next/image";

// const FuturesPage = () => {
//   const [visibleSections, setVisibleSections] = useState<Set<number>>(
//     new Set()
//   );
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observers = sectionRefs.current.map((ref, index) => {
//       if (!ref) return null;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setVisibleSections((prev) => new Set(prev).add(index));
//             }
//           });
//         },
//         {
//           threshold: 0.2,
//           rootMargin: "0px 0px -100px 0px",
//         }
//       );

//       observer.observe(ref);
//       return observer;
//     });

//     return () => {
//       observers.forEach((observer) => observer?.disconnect());
//     };
//   }, []);

//   const scrollCards = [
//     {
//       title: "The Problem",
//       description:
//         "Over 4,000 student-led nonprofits exist in the U.S. but nearly 80% fade within a year - Palorah Capital\n\nLess Than 1% Of Climate Funding Reaches Youth Organizations - Youth Climate Justice Fund",
//       image:
//         "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898dd8480516839592d9d12_IMG_6500.JPG",
//     },
//     {
//       title: "Our Model",
//       description:
//         "College is a rare window of opportunity, a space before real-world pressures fully set in. That's where TRIIBE comes in: three years of tailored support to cohorts of five experienced nonprofit founders each semester.",
//       image:
//         "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898ddc07f75042d7d5e1ada_IMG_1137.jpg",
//     },
//     {
//       title: "We Provide",
//       description:
//         "Individually: Three scaling grants ($5K, $10K, $25K), personalized documentaries, podcasts, and two mentors each quarter.\n\nCollectively: Annual Changemaker Summit, annual retreat, and monthly TRIIBE sessions.",
//       image:
//         "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ae1ac49cdf1ecf2ff188cc_1755817640722.jpeg",
//     },
//   ];

//   const faqs = [
//     {
//       question: "How does TRIIBE measure impact?",
//       answer:
//         "We use case studies and quarterly surveys to measure each founder's digital presence, their sense of community and wellbeing, the impact of their organization, and the funds they raise beyond TRIIBE's grants.",
//     },
//     {
//       question: "Who is eligible to apply?",
//       answer:
//         "Our program is open each semester to sophomores enrolled at U.S. colleges, no matter their citizenship, addressing needs in food, water, shelter, health, education, or energy.",
//     },
//     {
//       question: "How does funding work?",
//       answer:
//         "Funding grows with each year: $5,000 for sophomores, $10,000 for juniors, and $25,000 for seniors. Awards are distributed each semester to help students scale their nonprofit impact.",
//     },
//     {
//       question: "How long is the program?",
//       answer:
//         "TRIIBE's three-year program supports you through the rest of college, with each year building toward continuing your work beyond graduation. Afterwards, alumni stay connected, ensuring lifelong belonging and support.",
//     },
//   ];

//   const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

//   const toggleFaq = (index: number) => {
//     setOpenFaqIndex(openFaqIndex === index ? null : index);
//   };

//   return (
//     <main className="min-h-screen">
//       <Header />

//       {/* Hero Section with Animated Text */}
//       <section className="mt-20 pt-20 pb-32 px-6 bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight text-center">
//             <span className="block mb-4 animate-fade-in-up">
//               We are the night sky
//             </span>
//             <span className="block mb-4 animate-fade-in-up animation-delay-200">
//               That lets the stars
//             </span>
//             <span className="block mb-4 animate-fade-in-up animation-delay-400">
//               Burn Bright not
//             </span>
//             <span className="block animate-fade-in-up animation-delay-600">
//               Burnout
//             </span>
//           </h1>
//         </div>
//       </section>

//       {/* Scroll-triggered Cards Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto space-y-32">
//           {scrollCards.map((card, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//                 sectionRefs.current[index] = el;
//               }}
//               className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
//                 visibleSections.has(index)
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-20"
//               }`}
//             >
//               {/* Text Content */}
//               <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//                   {card.title}
//                 </h3>
//                 <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
//                   {card.description}
//                 </p>
//               </div>

//               {/* Image */}
//               <div
//                 className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ${
//                   index % 2 === 1 ? "lg:order-1" : ""
//                 }`}
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Full Overview Banner */}
//       <section className="py-12 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
//             <p className="text-2xl md:text-3xl font-medium text-gray-900">
//               For a full overview, see our 1-pager
//             </p>
//             <Link
//               href="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68d9b6e34d7c2203303b07c4_TRIIBE%20Executive%20Summary.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-black text-black px-10 py-3 rounded-full font-semibold text-base hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 whitespace-nowrap"
//             >
//               View
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Donate Section */}
//       <section id="donate" className="py-16 px-6 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
//             Our "Sophomore Solution"
//           </h2>

//           {/* Donation Embed Placeholder */}
//           <div className="bg-gray-100 rounded-2xl p-12 text-center shadow-lg">
//             <div className="max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Support Our Mission
//               </h3>
//               <p className="text-lg text-gray-700 mb-8">
//                 Help us provide grants, mentorship, and community to the next
//                 generation of changemakers.
//               </p>

//               {/* Donation Embed - Replace with actual embed code */}
//               <div className="bg-white rounded-xl p-8 shadow-md">
//                 <p className="text-gray-600 mb-6">
//                   Donation form will be embedded here
//                 </p>
//                 <Link
//                   href="https://triibe.us/futures#donate"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
//                 >
//                   Donate Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TRIIBE FAQs */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
//             TRIIBE FAQs
//           </h2>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
//               >
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
//                 >
//                   <h3 className="text-lg font-bold text-gray-900 pr-4">
//                     {faq.question}
//                   </h3>
//                   <svg
//                     className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
//                       openFaqIndex === index ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openFaqIndex === index ? "max-h-96" : "max-h-0"
//                   }`}
//                 >
//                   <div className="px-6 pb-5 text-gray-700 leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 1s ease-out forwards;
//           opacity: 0;
//         }

//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }

//         .animation-delay-400 {
//           animation-delay: 0.4s;
//         }

//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default FuturesPage;

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
const page = () => {
  return (
    <main>
      <Header />
      <section>
        <div className="h-screen mt-32">
          <h1 className="">Page under construction</h1>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
