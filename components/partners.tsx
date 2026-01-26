import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "ESG News",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b48836cf8424ee024ff260_images-removebg-preview.png",
    },
    {
      name: "Cloztalk",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ffb306b64068f0907400fb_CLOZTALK_-_color_logo_large.webp",
    },
    {
      name: "Brooklyn Law School",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ffb357d8e6b8f92c45dbf5_2021-08-27_11-39-47_1630078796.webp",
    },

    // {
    //   name: "Touch ",
    //   logo: "/images/Touch.png",
    // },
    // {
    //   name: "WEDO",
    //   logo: "/images/Wedo.png",
    // },
    // {
    //   name: "Streamr",
    //   logo: "/images/Streamr.png",
    // },
    // {
    //   name: "Rayze",
    //   logo: "/images/Rayze.png",
    // },
    // {
    //   name: "Allegiance Partners",
    //   logo: "/images/AllegiancePartners.png",
    // },
  ];

  return (
    <section className="py-4  bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl  font-bold text-black mb-6">
            Meet our strategic partners
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
            Our strategic partners are industry leaders and innovators who have
            contribute in-kind support or co-hosted programs with TRIIBE.
            Together, we expand our impact and empower changemakers across
            communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 items-center justify-items-center mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={128}
                height={128}
                className="h-12 md:h-32 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
