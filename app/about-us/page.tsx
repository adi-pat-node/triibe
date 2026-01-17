"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

const AboutUsPage = () => {
  const teamMembers = [
    // C-Suite and Board Members - Keep roles
    {
      name: "Kyle Matthys",
      role: "CEO / Co-Founder",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b49a7ccaa178bd57b89bf3_1%201.png",
      linkedin: "https://www.linkedin.com/in/kylematthys/",
      isInstagram: false,
    },
    {
      name: "Drew Collins",
      role: "CTO / Co-Founder",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ae1a6a09d446ed5b78fea3_1753214541563.jpeg",
      linkedin: "https://www.linkedin.com/in/drewcollinsbusiness/",
      isInstagram: false,
    },
    {
      name: "Nawaf Alshaikhmubarak",
      role: "COO",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b49920a4db7e870447c1a8_image%2042.png",
      linkedin: "https://www.linkedin.com/in/nawaf-mub/",
      isInstagram: false,
    },
    {
      name: "Chander Payne",
      role: "Board Member / Co-Founder",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b49a5c5ad61fca569b009b_IMG_1880%201.png",
      linkedin: "https://www.linkedin.com/in/chander-p-76116b128/",
      isInstagram: false,
    },
    {
      name: "James Hetherington",
      role: "Board Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b499ddf40bdb594e8b68b6_image%2046.png",
      linkedin: "https://www.linkedin.com/in/james-hetherington-590b981b8/",
      isInstagram: false,
    },
    // Existing Team Members - No roles
    {
      name: "Anthony Valencia",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ae35f8dc6c99e5da136498_1719863632242.jpeg",
      linkedin: "https://www.linkedin.com/in/anthony-valencia-1a1a8695/",
      isInstagram: false,
    },
    {
      name: "Grace Sengal",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0c8ccd43f5d2e4c19999_grace-sengul.jpeg",
      linkedin: "https://www.linkedin.com/in/grace-sengul/",
      isInstagram: false,
    },
    {
      name: "Ronan Hasan",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0cd7a8ba8dc040b8d428_ronan-hasan.jpeg",
      linkedin: "https://www.linkedin.com/in/ronan-hasan-4b5158241/",
      isInstagram: false,
    },
    {
      name: "Andrew Dai",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0d716116945eec6ffb90_andrew-dai.jpeg",
      linkedin: "https://www.linkedin.com/in/andrew-dai-04ad0211/",
      isInstagram: false,
    },
    {
      name: "Ryan Zhang",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0dbf0da08a80055d186e_ryan-zhang.jpeg",
      linkedin: "https://www.linkedin.com/in/ryan7zhang/",
      isInstagram: false,
    },
    {
      name: "Musa Konneh",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a1b551ad346af1503fd9f_image.png",
      linkedin:
        "https://www.linkedin.com/in/musa-konneh-079673110/?originalSubdomain=sl",
      isInstagram: false,
    },
    {
      name: "Keshav Sani",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b59adc6a6e119c0be563_image%2043.png",
      linkedin: "https://www.linkedin.com/in/keshav-sani-853550204/",
      isInstagram: false,
    },
    {
      name: "Jaden Cappe",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b3fd81282fed77c0b784_image%2041.png",
      linkedin: "https://www.linkedin.com/in/jaden-cappe/",
      isInstagram: false,
    },
    {
      name: "George Shi",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b569410550cb3c90987b_Screenshot%202025-08-13%20at%209.14.30%E2%80%AFPM%201.png",
      linkedin: "https://www.linkedin.com/in/george-shi-4a9b18190/",
      isInstagram: false,
    },
    {
      name: "Aaradhya Thakur",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b6a564a8844c9658054e_image%2048.png",
      linkedin: "https://www.linkedin.com/in/aaradhya-thakur-674b1b1a4/",
      isInstagram: false,
    },
    {
      name: "Jade Kashemsant",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b25ad0e27a6bada2ce99_Screenshot%202025-08-13%20at%209.19.56%E2%80%AFPM%201.png",
      linkedin: "https://www.linkedin.com/in/jadekashemsant/",
      isInstagram: false,
    },
    {
      name: "Himal Pandey",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a107e69525a5a12770102_himal-pandey.jpeg",
      linkedin: "https://www.linkedin.com/in/himalpandey/",
      isInstagram: false,
    },
    {
      name: "Laya Pothunuri",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b626b85b4f215a62900c_image%2045.png",
      linkedin: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
      isInstagram: false,
    },
    {
      name: "Frederick Tsao",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b6e95b2139addb1cc962_image%2039.png",
      linkedin: "https://www.linkedin.com/in/frederick-mochizuki-tsao/",
      isInstagram: false,
    },
    {
      name: "Tahnoon Murtza",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b6f8a4db7e87044c79ed_image%2047.png",
      linkedin: "https://www.linkedin.com/in/tahnoon-m-b4071419a/",
      isInstagram: false,
    },
    {
      name: "Stephanie Pacheco",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bdfb28f0fbf30a14a44bfc_1744295968862.jpeg",
      linkedin: "https://www.linkedin.com/in/stephanie-pacheco-086225201/",
      isInstagram: false,
    },
    {
      name: "Gianna Mountroukas",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ae361c764781d9c1360e8d_1744805485463.jpeg",
      linkedin: "https://www.linkedin.com/in/gianna-mountroukas-a585a9232/",
      isInstagram: false,
    },
    {
      name: "Davi Santos",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a12c32c690da68c88d13f_davi-santos.jpg",
      linkedin: "https://www.instagram.com/davi_santos/",
      isInstagram: true,
    },
    {
      name: "Alex Garfin",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a1315c03a35f586dd07c5_alex-garfin.jpg",
      linkedin: "https://www.instagram.com/alexgarfin/",
      isInstagram: true,
    },
    {
      name: "Alan Cavagnaro",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a135c2acb7a66e3f66b09_alan-cavagnaro.jpeg",
      linkedin: "https://www.linkedin.com/in/alancavagnaro/",
      isInstagram: false,
    },
    {
      name: "Chirag Nijjer",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a138563b5a131ce1dce6a_chirag-nijjer.jpeg",
      linkedin: "https://www.linkedin.com/in/chiragspeaks/",
      isInstagram: false,
    },
    {
      name: "Grace Kim",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b2a62ab674a24f7848b9_IMG_8081%201.png",
      linkedin: "https://www.linkedin.com/in/gracekim22/",
      isInstagram: false,
    },
    {
      name: "Haley Pilgrim",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a13c3088cca0f561dc14c_haley-pilgrim.jpeg",
      linkedin: "https://www.linkedin.com/in/haleypilgrim/",
      isInstagram: false,
    },
    {
      name: "Sina Albanese",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a13f1ebf1e14964a323ae_sina-albanese.jpeg",
      linkedin: "https://www.linkedin.com/in/sina-albanese/",
      isInstagram: false,
    },
    {
      name: "Will Reynolds",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a1418b296f96efe448502_will-reynolds.jpeg",
      linkedin: "https://www.linkedin.com/in/wreynoldsnz/",
      isInstagram: false,
    },
    {
      name: "Parker Johnson",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a147825a346760890cc14_parker-johnson.jpeg",
      linkedin: "https://www.linkedin.com/in/zachary-parker-johnson/",
      isInstagram: false,
    },
    {
      name: "Roman Pikalenko",
      role: "\u00A0",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a14a300fbbbef42c0638c_roman-pikalenko.jpeg",
      linkedin: "https://www.linkedin.com/in/roman-pikalenko/",
      isInstagram: false,
    },
    // NEW MEMBERS from Kyle's list
    {
      name: "Dylan Hanson",
      role: "\u00A0",
      image: "/images/team/Dylan Hanson.jpg",
      linkedin: "https://www.linkedin.com/in/~dylan/",
      isInstagram: false,
    },
    {
      name: "Angela Goldberg",
      role: "\u00A0",
      image: "/images/team/Angela Goldberg.jpg",
      linkedin: "https://www.linkedin.com/in/angela-goldberg/",
      isInstagram: false,
    },
    {
      name: "Anjali Anantharaman",
      role: "\u00A0",
      image: "/images/team/Anjali Anantharaman.jpg",
      linkedin: "https://www.linkedin.com/in/anjali-anantharaman/",
      isInstagram: false,
    },
    {
      name: "Ania Bartholomew",
      role: "\u00A0",
      image: "/images/team/Ania Bartholomew.png",
      linkedin: "https://www.linkedin.com/in/ania-bartholomew-486b81218/",
      isInstagram: false,
    },
    {
      name: "Pramaey Kapadia",
      role: "\u00A0",
      image: "/images/team/PramaeyKapadia.jpg",
      linkedin: "", // No LinkedIn
      isInstagram: false,
    },
    {
      name: "Rowana Miller",
      role: "\u00A0",
      image: "/images/team/Rowana Miller.jpg",
      linkedin: "https://www.linkedin.com/in/rowana-miller-7506bb179/",
      isInstagram: false,
    },
    {
      name: "Alexandra Vidal",
      role: "\u00A0",
      image: "/images/team/Alexandra Vidal.webp",
      linkedin: "https://www.linkedin.com/in/alexandrav1/",
      isInstagram: false,
    },
    {
      name: "Stephen Michael",
      role: "\u00A0",
      image: "/images/team/Stephen Michael.jpg",
      linkedin: "https://www.linkedin.com/in/stephennmichael/",
      isInstagram: false,
    },
    {
      name: "Tanuja Bodas",
      role: "\u00A0",
      image: "/images/team/Tanuja Bodas.jpg",
      linkedin: "https://www.linkedin.com/in/tanujabodas23/",
      isInstagram: false,
    },
    {
      name: "Sarthak Anand",
      role: "\u00A0",
      image: "/images/team/Sarthak Anand.jpg",
      linkedin: "https://www.linkedin.com/in/sarthak-anand-b27044229/",
      isInstagram: false,
    },
    {
      name: "Satyam Pandey",
      role: "\u00A0",
      image: "/images/team/Satyam Pandey.png",
      linkedin: "https://www.linkedin.com/in/satyyampandey/",
      isInstagram: false,
    },
    {
      name: "Evelyn Sar",
      role: "\u00A0",
      image: "/images/team/Evelyn Sar.jpg",
      linkedin: "https://www.linkedin.com/in/evelynsar/",
      isInstagram: false,
    },
    {
      name: "Josh Nodiff",
      role: "\u00A0",
      image: "/images/team/Josh Nodiff.avif",
      linkedin: "https://www.linkedin.com/in/joshnodiff/",
      isInstagram: false,
    },
    {
      name: "Taylor Anderson",
      role: "\u00A0",
      image: "/images/team/Taylor Anderson.jpg",
      linkedin: "https://www.linkedin.com/in/taylor-anderson-74a577396/",
      isInstagram: false,
    },
    {
      name: "Patience Nnedinso Eze",
      role: "\u00A0",
      image: "/images/team/Patience Nnedinso Eze.png",
      linkedin: "https://www.linkedin.com/in/patience-nnedinso-eze-b25b4bb7/",
      isInstagram: false,
    },
    {
      name: "Shashank Shandilya",
      role: "\u00A0",
      image: "/images/team/Shashank Shandilya.jpg",
      linkedin: "https://www.linkedin.com/in/shashankshandilya13/",
      isInstagram: false,
    },
    {
      name: "Jacob Shulman",
      role: "\u00A0",
      image: "/images/team/Jacob Shulman.jpg",
      linkedin: "https://www.linkedin.com/in/jacob-shulman-85a44720b/",
      isInstagram: false,
    },
    {
      name: "Ryan Miller",
      role: "\u00A0",
      image: "/images/team/Ryan Miller.png",
      linkedin: "https://www.linkedin.com/in/ryanmillerhq/",
      isInstagram: false,
    },
    {
      name: "Yasmine Ganemtore",
      role: "\u00A0",
      image: "/images/team/Yasmine Ganemtore.png",
      linkedin: "https://www.linkedin.com/in/yasmine-ganemtore/",
      isInstagram: false,
    },
    {
      name: "Mahir Laul",
      role: "\u00A0",
      image: "/images/team/Mahir Laul.png",
      linkedin: "https://www.linkedin.com/in/mahirlaul/",
      isInstagram: false,
    },
    {
      name: "Fionnuala Eastwood",
      role: "\u00A0",
      image: "/images/team/Fionnuala Eastwood.png",
      linkedin: "https://www.linkedin.com/in/fionnuala-eastwood/",
      isInstagram: false,
    },
    {
      name: "Duff Paris",
      role: "\u00A0",
      image: "/images/team/DuffParis.jpg",
      linkedin: "https://www.linkedin.com/in/duff-paris-20b14b291/",
      isInstagram: false,
    },
    {
      name: "Rejoy Kumar",
      role: "\u00A0",
      image: "/images/team/Rejoy Kumar.jpg",
      linkedin: "https://www.linkedin.com/in/rejoy-kumar-2b8904217/",
      isInstagram: false,
    },
    {
      name: "Olivia Cohen",
      role: "\u00A0",
      image: "/images/team/Olivia Cohen.jpg",
      linkedin: "https://www.linkedin.com/in/olivia-h-cohen/",
      isInstagram: false,
    },
    {
      name: "Roberto Alvarado",
      role: "\u00A0",
      image: "/images/team/Roberto Alvarado.jpg",
      linkedin: "https://www.linkedin.com/in/robertoalvarado2/",
      isInstagram: false,
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-20 pt-12 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 items-center ">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left  mx-auto">
              <p className=" text-3xl md:text-5xl  font-bold text-gray-900 mb-4 text-center ">
                Real Problems <br /> Cannot Be Solved Alone <br /> It Takes A
              </p>
              <div className="mb-8">
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4c6db0418f1197a74e5ba_Asset%201%201.png"
                  alt="TRIIBE"
                  width={300}
                  height={120}
                  className="mx-auto "
                />
              </div>
              <div className="flex flex-wrap  justify-center gap-8">
                <Link
                  href="/programs"
                  className="inline-flex bg-white border border-black text-black px-8 py-2 font-semibold text-lg hover:text-white rounded-[12px] hover:bg-green-950 hover:scale-105 transition-all duration-300"
                >
                  Programs
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex bg-white border border-black text-black px-8 py-2 rounded-[12px] font-semibold text-lg hover:text-white hover:bg-green-950 hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-100 lg:h-150 ">
              <Image
                src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4c647458a47d9d8338877_12.png"
                alt="Team collaboration"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet the team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const CardContent = () => (
                <>
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="text-sm text-gray-600 mb-6 text-center">
                      {member.role}
                    </p>
                  )}
                  {member.linkedin && (
                    <div className="flex justify-center  mb-6">
                      {member.isInstagram ? (
                        <svg
                          className="w-6 h-6"
                          fill="url(#instagram-gradient)"
                          viewBox="0 0 24 24"
                        >
                          <defs>
                            <linearGradient
                              id="instagram-gradient"
                              x1="0%"
                              y1="100%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style={{ stopColor: "#FD5949", stopOpacity: 1 }}
                              />
                              <stop
                                offset="50%"
                                style={{ stopColor: "#D6249F", stopOpacity: 1 }}
                              />
                              <stop
                                offset="100%"
                                style={{ stopColor: "#285AEB", stopOpacity: 1 }}
                              />
                            </linearGradient>
                          </defs>
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                    </div>
                  )}
                </>
              );

              // If no LinkedIn, render without link
              if (!member.linkedin) {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 transition-all"
                  >
                    <CardContent />
                  </div>
                );
              }

              // Otherwise, make entire card clickable
              return (
                <Link
                  key={index}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-2 block"
                >
                  <CardContent />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUsPage;
