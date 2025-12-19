export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="space-y-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-balance">
            "TRIIBE's Mentorship Program is nothing short of astounding. With a busy schedule, I wasn't sure how much
            time I could give, but the ease of entry, flexible commitment, and thoughtful organization made it possible
            to truly support my young changemaker in a way that was both meaningful and deeply rewarding."
          </p>
          <footer className="text-lg md:text-xl text-gray-300">
            <a href="https://www.linkedin.com/in/imermanangels/" className="hover:text-white transition-colors">
              - Jonny Imerman
            </a>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
