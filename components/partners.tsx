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
    {
      name: "Alethos Initiative",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ffb398b5891157fbc9a650_alethos%2BInitiative.webp",
    },
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
            contributed in-kind support or co-hosted programs with TRIIBE.
            Together, we expand our impact and empower changemakers across
            communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center mt-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 md:h-32 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-8 max-w-5xl mx-auto text-center">
          <blockquote className="text-lg    text-gray-800 leading-relaxed mb-6">
            "TRIIBE's Mentorship Program is nothing short of astounding. With a
            busy schedule, I wasn't sure how much time I could give, but the
            ease of entry, flexible commitment, and thoughtful organization made
            it possible to truly support my young changemaker in a way that was
            both meaningful and deeply rewarding."{" "}
            <span className="underline">
              <a
                href="https://www.linkedin.com/in/imermanangels/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                - Jonny Imerman
              </a>
            </span>
          </blockquote>
          <cite className="text-base md:text-lg font-medium text-gray-900 not-italic"></cite>
        </div>
      </div>
    </section>
  );
}
