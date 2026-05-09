import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowUpRight,
  DollarSign,
  BarChart3,
  ShieldCheck,
  Zap,
  Bell,
  ExternalLink,
  Newspaper,
  Send,
  Monitor,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Publishers",
  description:
    "Monetize your website, app, or traffic with Rawbitads, a publisher-first platform built for reliable yield, transparent analytics, and scalable revenue growth.",
  alternates: { canonical: "/publishers" },
  openGraph: {
    url: "/publishers",
    title: "Publishers | Rawbitads",
    description:
      "Monetize your traffic with Rawbitads. Competitive eCPMs, 9+ payout methods, 190+ GEOs, and real-time revenue tracking from one publisher dashboard.",
  },
};

const formats = [
  { icon: Bell, name: "Push Ads", desc: "Monetize opted-in subscribers with push notification placements." },
  { icon: Monitor, name: "In-Page Ads", desc: "Display push-style ads within your pages. No subscription needed." },
  { icon: ExternalLink, name: "Pop Ads", desc: "High-eCPM popunder placements on every click, any niche." },
  { icon: Newspaper, name: "Native Ads", desc: "Blend contextual sponsored content into your editorial feeds." },
  { icon: Send, name: "Telegram Ads", desc: "Monetize your Telegram channel with sponsored post placements." },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive eCPMs",
    desc: "Access premium advertiser demand across 190+ GEOs with eCPMs that outperform most AdSense alternatives, especially for push and pop traffic.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Revenue Dashboard",
    desc: "Track impressions, clicks, RPM, and total earnings as they happen. No waiting for next-day reports. See your revenue update live.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Advertiser Demand",
    desc: "All advertisers on our platform are vetted. Anti-fraud filters protect your traffic quality and ensure your inventory is matched to clean, high-quality demand.",
  },
  {
    icon: Zap,
    title: "Easy Setup, Fast Approval",
    desc: "Add your property, complete verification, and go live in minutes. Our onboarding is designed to get you earning as quickly as possible.",
  },
];

const steps = [
  {
    n: "01",
    title: "Register & Add Your Property",
    desc: "Create a publisher account, add your website or app, and complete the quick verification process. Most properties are approved within 24 hours.",
  },
  {
    n: "02",
    title: "Choose Your Ad Formats",
    desc: "Select the formats that fit your audience: push, in-page, pop, native, or Telegram. Configure placement behavior and quality filters from your dashboard.",
  },
  {
    n: "03",
    title: "Go Live & Optimize",
    desc: "Place the integration code and start earning immediately. Use real-time analytics and format performance data to maximize your RPM over time.",
  },
];

const payoutStats = [
  { value: "$50", label: "Min. Payout" },
  { value: "9+", label: "Payment Methods" },
  { value: "190+", label: "GEOs Covered" },
  { value: "Net-30", label: "Payment Terms" },
];

const faqs = [
  {
    q: "What types of traffic and websites are accepted?",
    a: "We accept content websites, utility platforms, entertainment and media properties, app publishers, and Telegram channel owners. Traffic must meet quality and policy standards during review.",
  },
  {
    q: "What payout methods are supported?",
    a: "We support 9+ payout options including wire transfer, PayPal, WebMoney, crypto, and more. Available methods depend on your account region and are visible after onboarding.",
  },
  {
    q: "How long does approval take?",
    a: "Most properties are reviewed and approved within 24 hours. Once approved, you can activate placements and start earning immediately.",
  },
  {
    q: "Can I control which ad formats and categories appear?",
    a: "Yes. You can configure which formats are active, set content category filters, and adjust placement behavior directly from your publisher dashboard.",
  },
  {
    q: "How is revenue calculated and reported?",
    a: "Revenue is based on verified impressions and clicks tracked by our platform. You get transparent reporting for all key metrics including RPM, eCPM, and total earnings, updated in near real time.",
  },
  {
    q: "What happens if I have invalid or low-quality traffic?",
    a: "Our anti-fraud system monitors traffic quality continuously. Publishers with consistent quality issues may have payouts adjusted or accounts reviewed. We communicate any issues transparently.",
  },
];

export default function Publishers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#071730] py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 left-8 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute top-10 right-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-6">// For Publishers</p>
                <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-3xl text-balance">
                  Turn your traffic into reliable, scalable revenue.
                </h1>
                <p className="mt-7 text-white/75 text-lg max-w-2xl leading-relaxed">
                  Rawbitads connects your website, app, or Telegram channel to premium advertiser demand across 190+ GEOs. Competitive eCPMs, transparent reporting, and 9+ payout methods.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 shadow-soft">
                    <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                      Start Monetizing <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                {payoutStats.map(({ value, label }) => (
                  <div key={label} className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-xl p-6 text-center">
                    <p className="font-serif text-3xl text-white">{value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Why Rawbitads</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                A publisher platform built to maximize your revenue.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              We focus on yield, transparency, and stability so you can focus on growing your traffic while we grow your earnings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-[1.75rem] glass p-7 flex gap-5">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Ad Formats */}
        <section className="glass-dark text-ink-foreground py-24 lg:py-32 rounded-t-[3rem]">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-5">// Monetization Formats</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance text-ink-foreground">
                  Five high-yield formats. You control which ones run.
                </h2>
                <p className="mt-6 text-ink-foreground/70 leading-relaxed">
                  Choose the formats that work best for your audience and traffic type. Mix and match, set category filters, and adjust at any time from your dashboard.
                </p>
                <Button asChild className="mt-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-7 shadow-soft">
                  <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                    Create Publisher Account <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>
              <div className="lg:col-span-7 space-y-3">
                {formats.map(({ icon: Icon, name, desc }) => (
                  <div key={name} className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-ink-foreground">{name}</p>
                      <p className="text-sm text-ink-foreground/60">{desc}</p>
                    </div>
                    <CheckCircle2 className="size-4 text-primary ml-auto shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Getting Started</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
              Three steps from signup to revenue.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <article key={step.n} className="rounded-[1.75rem] glass p-7">
                <p className="font-serif text-5xl text-muted-foreground/40 mb-8">{step.n}</p>
                <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-soft">
              <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                Create Publisher Account <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="container pb-24 lg:pb-32">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl">Publisher FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, idx) => (
              <div key={item.q} className="rounded-xl border border-primary/12 bg-white/70 backdrop-blur-xl px-5 shadow-soft">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`faq-${idx}`} className="border-none">
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-24 lg:pb-32">
          <div className="rounded-[3rem] glass-dark text-ink-foreground p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-indigo-400/15 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-6">// Start Earning</p>
              <h2 className="font-serif text-ink-foreground text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05] max-w-3xl mx-auto">
                Your traffic is worth more than you&apos;re earning today.
              </h2>
              <p className="mt-6 text-ink-foreground/70 max-w-lg mx-auto leading-relaxed">
                Join publishers already monetizing with Rawbitads. Setup takes minutes and payouts start at $50.
              </p>
              <Button asChild className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-soft">
                <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                  Start Monetizing <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
