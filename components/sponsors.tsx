export default function Sponsors() {
  const sponsors = [
    {
      name: "Adecco Group",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ffb11c3ca37f4e8034c8cb_Adecco_Group_logo.png",
    },
    {
      name: "Steve Madden",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b487a11568ffba5d04f705_stevemadden-web-logo.png",
    },
    {
      name: "Allegiance Partners",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b488a3a70ab6fafadb5265_6898e8ffc224377bdb9cb376_PHOTO-2025-07-17-10-01-58-removebg-preview.png",
    },
    {
      name: "Rainbow",
      logo: "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68ffb1eaccc2fc1ad3f9d135_Screenshot_2025-10-27_at_1.54.27_PM-removebg-preview.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-black mb-6">
            Trusted by leading sponsors
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
            Our network includes industry leaders and innovators. Explore the
            organizations that support our mission and drive positive change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center ">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="h-20 md:h-32 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
