import dynamic from "next/dynamic";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProblemGraphic from "@/components/problemgraphic";

const Sponsors = dynamic(() => import("@/components/sponsors"));
const Partners = dynamic(() => import("@/components/partners"));
const Changemakers = dynamic(() => import("@/components/changemakers"));
const Newsletter = dynamic(() => import("@/components/newsletter"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemGraphic />
      <Sponsors />
      <Partners />
      <Changemakers />
      <Footer />
      <Newsletter />
    </div>
  );
}
