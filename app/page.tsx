import Header from "@/components/header"
import Hero from "@/components/hero"
import Sponsors from "@/components/sponsors"
import Partners from "@/components/partners"
import Changemakers from "@/components/changemakers"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Sponsors />
      <Partners />
      <Changemakers />
      <Footer />
      <Newsletter />
    </div>
  )
}
