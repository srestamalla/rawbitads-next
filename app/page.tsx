import type { Metadata } from "next";
import Header from "@/components/site/Header";

export const metadata: Metadata = {
  title: {
    absolute: "Rawbitads — Global Self-Serve Ad Platform",
  },
  description:
    "Launch high-converting campaigns across multiple ad formats, reach quality traffic in top GEOs, and optimize performance from one self-serve dashboard.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Rawbitads — Global Self-Serve Ad Platform",
    description:
      "Launch high-converting campaigns across multiple ad formats, reach quality traffic in top GEOs, and optimize performance from one self-serve dashboard.",
  },
};
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import FAQ from "@/components/site/FAQ";
import Features from "@/components/site/Features";
import DarkSection from "@/components/site/DarkSection";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <DarkSection />
        <Process />
        <Testimonials />
        <Features />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
