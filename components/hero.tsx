export default function Hero() {
  return (
    <section className="pt-32 pb-12 md:pt-32 md:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-8">
              <img
                src="/images/heroimage.png"
                alt="TRIIBE Logo"
                className="h-20 md:h-36 w-auto"
              />
            </div>

            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
              TRIIBE
            </h1> */}

            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-black mb-6 leading-tight">
              Helping young nonprofit founders achieve full-time careers
            </h2>

            <p className="text-lg  text-gray-700 mb-8">
              Those advancing food, water, shelter, health, education, or
              energy.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/futures"
                className="px-6 py-3 text-sm font-medium text-black bg-white border border-black hover:bg-green-950 hover:text-white transition-colors rounded-[12px]"
              >
                TRIIBE Futures
              </a>
              <a
                href="/about-us"
                className="px-6 py-3 text-sm font-medium text-black bg-white border rounded-[12px] border-black hover:bg-green-950 hover:text-white transition-colors"
              >
                About
              </a>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="hidden md:grid grid-cols-5 gap-4 h-125 mb-36 ">
            {/* Left Column - Two stacked images */}
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex-1">
                <img
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898dd8480516839592d9d12_IMG_6500.JPG"
                  alt="TRIIBE team holding sign"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <img
                  src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898ddc07f75042d7d5e1ada_IMG_1137.jpg"
                  alt="Panel discussion event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Single tall image */}
            <div className="col-span-3">
              <img
                src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898ddc0d7fe900272e07504_IMG_1223.jpg"
                alt="TRIIBE Changemaker Summit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
