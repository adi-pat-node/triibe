import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Kyle Matthys",
      role: "CEO / Co-Founder",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b49a7ccaa178bd57b89bf3_1%201.png",
      linkedin: "https://www.linkedin.com/in/kylematthys/",
    },
    {
      name: "Drew Collins",
      role: "CTO / Co-Founder",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ae1a6a09d446ed5b78fea3_1753214541563.jpeg",
      linkedin: "https://www.linkedin.com/in/drewcollinsbusiness/",
    },
    {
      name: "Nawaf Alshaikhmubarak",
      role: "COO",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b49920a4db7e870447c1a8_image%2042.png",
      linkedin: "https://www.linkedin.com/in/nawaf-mub/",
    },
    {
      name: "Chander Payne",
      role: "Board Member / Co-Founder",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b49a5c5ad61fca569b009b_IMG_1880%201.png",
      linkedin: "https://www.linkedin.com/in/chander-p-76116b128/",
    },
    {
      name: "James Hetherington",
      role: "Board Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b499ddf40bdb594e8b68b6_image%2046.png",
      linkedin: "https://www.linkedin.com/in/james-hetherington-590b981b8/",
    },
    {
      name: "Anthony Valencia",
      role: "United States - Marketing Manager",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ae35f8dc6c99e5da136498_1719863632242.jpeg",
      linkedin: "https://www.linkedin.com/in/anthony-valencia-1a1a8695/",
    },
    {
      name: "Grace Sengal",
      role: "United States - Operations Manager",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0c8ccd43f5d2e4c19999_grace-sengul.jpeg",
      linkedin: "https://www.linkedin.com/in/grace-sengul/",
    },
    {
      name: "Ronan Hasan",
      role: "Canada - Executive Director",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0cd7a8ba8dc040b8d428_ronan-hasan.jpeg",
      linkedin: "https://www.linkedin.com/in/ronan-hasan-4b5158241/",
    },
    {
      name: "Andrew Dai",
      role: "Canada - Technology Director",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0d716116945eec6ffb90_andrew-dai.jpeg",
      linkedin: "https://www.linkedin.com/in/andrew-dai-04ad0211/",
    },
    {
      name: "Ryan Zhang",
      role: "Canada - Operations Director",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a0dbf0da08a80055d186e_ryan-zhang.jpeg",
      linkedin: "https://www.linkedin.com/in/ryan7zhang/",
    },
    {
      name: "Musa Konneh",
      role: "Sierra Leone - Executive Director",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a1b551ad346af1503fd9f_image.png",
      linkedin:
        "https://www.linkedin.com/in/musa-konneh-079673110/?originalSubdomain=sl",
    },
    {
      name: "Keshav Sani",
      role: "Hong Kong - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b59adc6a6e119c0be563_image%2043.png",
      linkedin: "https://www.linkedin.com/in/keshav-sani-853550204/",
    },
    {
      name: "Jaden Cappe",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b3fd81282fed77c0b784_image%2041.png",
      linkedin: "https://www.linkedin.com/in/jaden-cappe/",
    },
    {
      name: "George Shi",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b569410550cb3c90987b_Screenshot%202025-08-13%20at%209.14.30%E2%80%AFPM%201.png",
      linkedin: "https://www.linkedin.com/in/george-shi-4a9b18190/",
    },
    {
      name: "Aaradhya Thakur",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b6a564a8844c9658054e_image%2048.png",
      linkedin: "https://www.linkedin.com/in/aaradhya-thakur-674b1b1a4/",
    },
    {
      name: "Jade Kashemsant",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b25ad0e27a6bada2ce99_Screenshot%202025-08-13%20at%209.19.56%E2%80%AFPM%201.png",
      linkedin: "https://www.linkedin.com/in/jadekashemsant/",
    },
    {
      name: "Himal Pandey",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a107e69525a5a12770102_himal-pandey.jpeg",
      linkedin: "https://www.linkedin.com/in/himalpandey/",
    },
    {
      name: "Laya Pothunuri",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b626b85b4f215a62900c_image%2045.png",
      linkedin: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
    },
    {
      name: "Frederick Tsao",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b6e95b2139addb1cc962_image%2039.png",
      linkedin: "https://www.linkedin.com/in/frederick-mochizuki-tsao/",
    },
    {
      name: "Tahnoon Murtza",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b6f8a4db7e87044c79ed_image%2047.png",
      linkedin: "https://www.linkedin.com/in/tahnoon-m-b4071419a/",
    },
    {
      name: "Stephanie Pacheco",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68bdfb28f0fbf30a14a44bfc_1744295968862.jpeg",
      linkedin: "https://www.linkedin.com/in/stephanie-pacheco-086225201/",
    },
    {
      name: "Gianna Mountroukas",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ae361c764781d9c1360e8d_1744805485463.jpeg",
      linkedin: "https://www.linkedin.com/in/gianna-mountroukas-a585a9232/",
    },
    {
      name: "Davi Santos",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a12c32c690da68c88d13f_davi-santos.jpg",
      linkedin: "https://www.instagram.com/davi_santos/?hl=en",
    },
    {
      name: "Alex Garfin",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a1315c03a35f586dd07c5_alex-garfin.jpg",
      linkedin: "https://www.instagram.com/alexgarfin/?hl=en",
    },
    {
      name: "Alan Cavagnaro",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a135c2acb7a66e3f66b09_alan-cavagnaro.jpeg",
      linkedin: "https://www.linkedin.com/in/alancavagnaro/",
    },
    {
      name: "Chirag Nijjer",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a138563b5a131ce1dce6a_chirag-nijjer.jpeg",
      linkedin: "https://www.linkedin.com/in/chiragspeaks/",
    },
    {
      name: "Grace Kim",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b2a62ab674a24f7848b9_IMG_8081%201.png",
      linkedin: "https://www.linkedin.com/in/gracekim22/",
    },
    {
      name: "Haley Pilgrim",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a13c3088cca0f561dc14c_haley-pilgrim.jpeg",
      linkedin: "https://www.linkedin.com/in/haleypilgrim/",
    },
    {
      name: "Sina Albanese",
      role: "South Korea - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a13f1ebf1e14964a323ae_sina-albanese.jpeg",
      linkedin: "https://www.linkedin.com/in/sina-albanese/",
    },
    {
      name: "Will Reynolds",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a1418b296f96efe448502_will-reynolds.jpeg",
      linkedin: "https://www.linkedin.com/in/wreynoldsnz/",
    },
    {
      name: "Parker Johnson",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a147825a346760890cc14_parker-johnson.jpeg",
      linkedin: "https://www.linkedin.com/in/zachary-parker-johnson/",
    },
    {
      name: "Roman Pikalenko",
      role: "Finland - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a14a300fbbbef42c0638c_roman-pikalenko.jpeg",
      linkedin: "https://www.linkedin.com/in/roman-pikalenko/",
    },
    {
      name: "Quinn Van Der Hoeven",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a14d65e7b5f656cfcc6aa_quinn-vanderhoeven.jpeg",
      linkedin: "https://www.linkedin.com/in/quinnvanderhoeven/",
    },
    {
      name: "Luis Utrilla",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a152801d885e697803eac_luis-utrilla.jpeg",
      linkedin: "https://www.linkedin.com/in/luis-utri-athlete-zero/",
    },
    {
      name: "Amaan Habibulla",
      role: "United States - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a155491e0c049411d2b98_amaan-habibulla.jpeg",
      linkedin: "https://www.linkedin.com/in/amaan-habibulla/",
    },
    {
      name: "Dominic Yap",
      role: "Canada - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4b5280ed7ce663fd38036_Screenshot%202025-08-13%20at%209.13.49%E2%80%AFPM%201.png",
      linkedin: "https://www.linkedin.com/in/dominic-yap-62b546266/",
    },
    {
      name: "Eze Nnedinso",
      role: "Nigeria - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a15eaebf1e14964a36c21_eze-nnedinso.jpeg",
      linkedin: "https://www.linkedin.com/in/patience-nnedinso-eze-b25b4bb7/",
    },
    {
      name: "Jonnathan Mtonga",
      role: "Zambia - Member",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/691a15b71db6720acd5d4a0d_jonnathan-mtonga.jpeg",
      linkedin: "https://www.linkedin.com/in/jonnathanmtonga/",
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
              <h3 className="text-lg md:text-2xl mb-4 font-medium text-center">
                Real Problems <br /> Cannot Be Solved Alone
              </h3>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 text-center">
                It Takes A
              </h1>
              <div className="mb-8">
                <Image
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4c6db0418f1197a74e5ba_Asset%201%201.png"
                  alt="TRIIBE"
                  width={300}
                  height={120}
                  className="mx-auto lg:mx-0"
                />
              </div>
              <div className="flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
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

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet the team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                {/* Circular Image */}
                <div className="relative h-32 w-32 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-500 mb-6">{member.role}</p>

                {/* LinkedIn Icon */}
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUsPage;
