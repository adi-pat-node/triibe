import Image from "next/image";

export default function ProblemGraphic() {
  return (
    <section className=" py-8 px-6 bg-white">
      {/* Problem Visual/Infographic */}

      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-100  ">
          <Image
            src="/images/problem_infographic.png"
            alt="The Problem - 80% of student-led nonprofits fade within a year"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
}
