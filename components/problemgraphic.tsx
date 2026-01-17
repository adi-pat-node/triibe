import Image from "next/image";

export default function ProblemGraphic() {
  return (
    <section className=" py-8 px-6 bg-white">
      {/* Problem Visual/Infographic */}

      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-100  ">
          <div className="relative w-full h-100 rounded-2xl overflow-hidden bg-white">
            <Image
              src="/images/problem_infographic1.png"
              alt="The Problem - 80% of student-led nonprofits fade within a year"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
