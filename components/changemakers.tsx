import Image from "next/image";

interface Changemaker {
  name: string;
  description: string;
  founded: string;
  image: string;
  website: string;
}

export default function Changemakers() {
  const cohort1: Changemaker[] = [
    {
      name: "OLIVIA ZHANG",
      description:
        "Supporting Young Cancer Patients And Their Families Through Donating Goods And Hosting Interactive Events",
      founded: "FOUNDED 2019",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68aa07201e49da83227f817d_1%20(1).png",
      website: "https://www.cancerkidsfirst.org/",
    },
    {
      name: "ANNE-SOPHIE FRÉDÉRICK",
      description:
        "Expanding Access To Education For Young Haitians Around The Globe Through Technology And Language Workshops",
      founded: "FOUNDED 2022",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ae976ac21db37b22369d_anna.png",
      website: "https://www.haitechlearning.org/",
    },
    {
      name: "ESHA VENKAT",
      description:
        "Mobilizing Youth To Tackle Issues Including Hunger, Education, And Climate Justice With Volunteering & Education",
      founded: "FOUNDED 2016",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4af42d2ddbc8f126cf2c7_esha%202.png",
      website: "https://nest4us.org/",
    },
    {
      name: "MAYA GOWDA",
      description:
        "Advancing Climate Literacy And Justice Through Workshops, Curriculum Development, And Community Initiatives",
      founded: "FOUNDED 2019",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ca26ae82ac604cfa0e61_maya%2022.png",
      website: "https://www.seedclimatechange.org/",
    },
  ];

  const cohort2: Changemaker[] = [
    {
      name: "VARUNI CHOPRA",
      description:
        "Empower senior citizens to confidently use technology by providing accessible and community-driven education that connects them to essential digital tools and services",
      founded: "FOUNDED 2022",
      image: "/images/VaruniChopra.png",
      website: "https://helpinghandsmain.wixsite.com/mysite",
    },
    {
      name: "Shrusti Amula",
      description:
        "Reduce food waste through compost and food recovery programs to combat climate change and food insecurity",
      founded: "FOUNDED 2019",
      image: "/images/ShrustiAmula.png",
      website: "https://www.risenshinefoundation.org/",
    },
    {
      name: "NAYLA JIMENEZ",
      description:
        "Advance pediatric health and educational equity in the Philippines through resource mobilization, cultural exchange, and community collaborations",
      founded: "FOUNDED 2017",
      image: "/images/NaylaJimenez.png",
      website: "https://www.philippinehealthinitiative.org/",
    },
    {
      name: "SAMIN BHAN",
      description:
        "Revive the culture of in-person interaction through a mobile app",
      founded: "FOUNDED 2021",
      image: "/images/SaminBhan.png",
      website: "https://www.lookupp.net/",
    },
    {
      name: "GITANJALI RAO",
      description:
        "Help other students discover their passion for innovation and STEM",
      founded: "FOUNDED 2018",
      image: "/images/GitanjaliRao.png",
      website: "https://gitanjalirao.net/",
    },
  ];

  const renderCard = (changemaker: Changemaker, index: number) => (
    <a
      key={index}
      href={changemaker.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full sm:flex-1 sm:min-w-0 overflow-hidden rounded-2xl h-80 md:h-104 cursor-pointer"
    >
      <Image
        src={changemaker.image}
        alt={changemaker.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Reverted exactly to your original gradient style */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/20" />

      {/* Reverted text styles to match your original font sizes/colors */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 text-white text-center space-y-3">
        <p className="text-sm font-semibold tracking-wide">
          {changemaker.name}
        </p>

        <p className="text-sm md:text-[18px] leading-relaxed line-clamp-4">
          {changemaker.description}
        </p>

        <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur">
          {changemaker.founded}
        </span>
      </div>
    </a>
  );

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Our Changemakers
          </p>
          <h2 className="text-3xl font-bold text-black">
            Sustaining 24 years of nonprofit service
          </h2>
        </div>

        {/* Row 1: 4 items centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          {cohort1.map((person, i) => (
            <div key={i} className="w-full sm:max-w-[300px] flex-1">
              {renderCard(person, i)}
            </div>
          ))}
        </div>

        {/* Row 2: 5 items on one bar */}
        <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-center gap-4">
          {cohort2.map((person, i) => (
            <div key={i} className="w-full sm:flex-1">
              {renderCard(person, i)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
