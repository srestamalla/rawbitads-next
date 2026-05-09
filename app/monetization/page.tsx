import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Publisher Monetization",
  description:
    "Monetize your website or app traffic with Rawbitads — a publisher-first platform built for reliable yield, transparent analytics, and scalable revenue growth.",
  alternates: { canonical: "/monetization" },
  openGraph: {
    url: "/monetization",
    title: "Publisher Monetization | Rawbitads",
    description:
      "Monetize your website or app traffic with Rawbitads — a publisher-first platform built for reliable yield, transparent analytics, and scalable revenue growth.",
  },
};
import { Button } from "@/components/ui/button";
import Services from "@/components/site/Services";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Connect Your Website or App",
    desc: "Add your property, complete quick verification, and activate monetization in minutes.",
  },
  {
    n: "02",
    title: "Set Monetization Preferences",
    desc: "Choose formats, ad behavior, and quality filters that align with your audience and goals.",
  },
  {
    n: "03",
    title: "Scale Revenue with Insights",
    desc: "Use real-time analytics and optimization suggestions to increase yield and performance.",
  },
];

const faqs = [
  {
    q: "Which websites can apply for monetization?",
    a: "Content websites, utility platforms, media properties, and app publishers can apply as long as traffic quality and policy standards are met.",
  },
  {
    q: "What payout methods are available?",
    a: "We support multiple payout options depending on your region and account profile. Payment details are available after account onboarding.",
  },
  {
    q: "How long does setup usually take?",
    a: "Most publishers complete setup in a short timeframe. After approval, monetization can start as soon as placements are enabled.",
  },
  {
    q: "Can I control ad formats and placements?",
    a: "Yes. You can configure format visibility, placement behavior, and optimization preferences directly from your dashboard.",
  },
  {
    q: "Do you provide revenue and performance reporting?",
    a: "Yes. You get transparent reporting for impressions, clicks, earnings, and key monetization metrics in near real time.",
  },
];

export default function Monetization() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#0a1f4f] py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 left-8 h-64 w-64 rounded-full bg-sky-500/18 blur-3xl" />
            <div className="absolute top-10 right-16 h-72 w-72 rounded-full bg-indigo-500/24 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-blue-500/16 blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl p-7 md:p-10 shadow-card">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-5">// Rawbit Publisher Monetization</p>
              <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-[1.04] max-w-4xl">
                Built for Publishers. Powered by Rawbit Ads.
              </h1>
              <p className="mt-6 text-white/80 text-lg max-w-3xl leading-relaxed">
                Monetize your traffic with a publisher-first platform built for reliable yield, transparent analytics, and scalable growth across modern ad formats.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-7">
                  Start Monetizing
                </Button>
                <Button variant="outline" className="rounded-full h-11 px-6 border-white/35 bg-white/10 text-white hover:bg-white/20">
                  Explore Formats
                </Button>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center">
                  <p className="font-serif text-2xl text-white">$50</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">Min Payout</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center">
                  <p className="font-serif text-2xl text-white">9+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">Payment Methods</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center">
                  <p className="font-serif text-2xl text-white">190+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">GEOs</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center">
                  <p className="font-serif text-2xl text-white">24/7</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 rounded-[2rem] border border-primary/12 bg-white/70 backdrop-blur-xl p-8 shadow-soft">
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.08]">Rawbit Ads for Publishers</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We help publishers maximize website and app revenue with performance-focused monetization tools built for stability, scale, and control.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From onboarding to optimization, our platform gives you the insights and automation needed to improve RPM and long-term traffic value.
              </p>
              <p className="mt-6 font-semibold">Smart Solutions for Revenue Growth</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-primary/12 bg-white/80 px-4 py-3 text-sm">Smart Traffic Monetization</div>
                <div className="rounded-xl border border-primary/12 bg-white/80 px-4 py-3 text-sm">AdSense Alternative Solutions</div>
                <div className="rounded-xl border border-primary/12 bg-white/80 px-4 py-3 text-sm">Revenue Boosting Tools</div>
                <div className="rounded-xl border border-primary/12 bg-white/80 px-4 py-3 text-sm">Data-Driven Performance</div>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-[2rem] border border-primary/12 bg-white/70 backdrop-blur-xl p-6 shadow-soft">
              <div className="w-full aspect-[5/4] rounded-[1.5rem] overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80"
                  alt="Publisher analytics and revenue dashboard"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <Services />

        <section className="container py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.06]">Ready to Monetize with Rawbit Ads?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A straightforward process designed to take you from setup to measurable publisher revenue growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <article key={step.n} className="rounded-[1.75rem] border border-primary/12 bg-white/70 backdrop-blur-xl p-7 shadow-soft">
                <div className="size-8 rounded-full bg-primary/12 text-primary text-sm font-semibold flex items-center justify-center mb-5">
                  {step.n}
                </div>
                <h3 className="font-serif text-3xl leading-tight">{step.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{step.desc}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-soft">
              Create Publisher Account <ArrowUpRight className="ml-1 size-4" />
            </Button>
          </div>
        </section>

        <section className="container py-20 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.06]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <div key={item.q} className="rounded-xl border border-primary/12 bg-white/70 backdrop-blur-xl px-5 shadow-soft">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`faq-${idx}`} className="border-none">
                    <AccordionTrigger className="text-left text-lg font-serif hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        <section className="container pb-24 lg:pb-32">
          <div className="rounded-[2rem] glass-dark text-ink-foreground p-10 lg:p-14">
            <h2 className="font-serif text-ink-foreground text-4xl md:text-5xl leading-[1.06]">Publisher Account Monetization</h2>
            <p className="mt-4 text-ink-foreground/70 max-w-3xl leading-relaxed">
              Access a dedicated publisher dashboard built to track earnings, manage placements, and optimize monetization with full visibility.
            </p>
            <Button className="mt-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-7">
              Login as Publisher
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
