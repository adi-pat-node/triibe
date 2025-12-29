import Image from "next/image";

export default function Changemakers() {
  const changemakers = [
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

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Our Changemakers
          </p>
          <h2 className="text-3xl   font-bold text-black">
            Sustaining 24 years of nonprofit service
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {changemakers.map((changemaker, index) => (
            <a
              key={index}
              href={changemaker.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block rounded-2xl overflow-hidden"
            >
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 md:h-104 overflow-hidden rounded-2xl">
                  <Image
                    src={changemaker.image}
                    alt={changemaker.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/20" />

                  {/* Text overlay */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 text-white text-center space-y-3">
                    <p className="text-sm font-semibold tracking-wide">
                      {changemaker.name}
                    </p>

                    <p className="text-sm md:text-[18px] leading-relaxed">
                      {changemaker.description}
                    </p>

                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur">
                      {changemaker.founded}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
