import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowUpRight,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Globe2,
  ShieldCheck,
  MousePointerClick,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advertisers",
  description:
    "Launch high-converting campaigns across 220+ GEOs with push, native, pop, Telegram, and direct click ads. Self-serve performance advertising built for ROI.",
  alternates: { canonical: "/advertisers" },
  openGraph: {
    url: "/advertisers",
    title: "Advertisers | Rawbitads",
    description:
      "Self-serve performance advertising across 8 formats, 220+ GEOs, and multiple bidding models. SmartBid optimization and transparent CPA tracking included.",
  },
};

const benefits = [
  {
    icon: Globe2,
    title: "220+ GEOs, Verified Traffic",
    desc: "Reach audiences in every major market with traffic sourced from quality publisher properties. Anti-fraud filtering runs continuously to keep your spend on real users.",
  },
  {
    icon: Target,
    title: "Multi-Layer Precision Targeting",
    desc: "Stack GEO, device, OS, browser, carrier, connection type, and time-of-day filters on any campaign to isolate your highest-converting audience segments.",
  },
  {
    icon: Zap,
    title: "SmartBid Optimization",
    desc: "Set a CPA target and let SmartBid automatically adjust bids and blacklist underperforming zones in real time. Your budget moves toward winners without any manual work.",
  },
  {
    icon: BarChart3,
    title: "Live Campaign Analytics",
    desc: "Monitor impressions, clicks, conversions, spend, and eCPM as they happen. Spot a losing zone and reallocate budget before it costs you. All from one dashboard.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments, Instant Go-Live",
    desc: "Top up via card, wire, or crypto and campaigns activate immediately. No minimum spend, no billing delays, no account manager approval required.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent CPA Tracking",
    desc: "Track every conversion with our postback system. See exactly where your conversions come from, which zones perform, and which to cut. No black boxes.",
  },
];

const formats = [
  { name: "Push Ads", desc: "Opted-in browser notification ads", stat: "High CTR, low CPCs" },
  { name: "In-Page Ads", desc: "Push-style ads inside web pages", stat: "Works on iOS" },
  { name: "Pop Ads", desc: "Full-page popunder placements", stat: "100% viewable" },
  { name: "Direct Click", desc: "High-intent domain redirect traffic", stat: "Highest purchase intent" },
  { name: "Native Ads", desc: "Editorial in-feed placements", stat: "Lower bounce rate" },
  { name: "Telegram Ads", desc: "Sponsored Telegram channel posts", stat: "900M+ MAU" },
  { name: "Calendar Ads", desc: "Calendar event invitations", stat: "Minimal competition" },
  { name: "Search Monetization", desc: "Paid search results on search portals", stat: "High purchase intent" },
];

const verticals = [
  "iGaming & Casino", "Finance & Crypto", "Nutra & Health", "Dating",
  "eCommerce & Retail", "Utilities & Software", "Insurance", "Travel",
];

const steps = [
  {
    n: "01",
    title: "Create Your Account",
    desc: "Sign up, top up your balance via card, wire, or crypto, and you're ready to launch. No minimum deposit, no waiting for approval.",
  },
  {
    n: "02",
    title: "Set Up Your Campaign",
    desc: "Choose your ad format, set budget and bidding model (CPC, CPM, or CPA), upload creatives, and configure targeting. Everything fits on one setup screen.",
  },
  {
    n: "03",
    title: "Target Your Audience",
    desc: "Layer GEO, device, OS, browser, carrier, and time-of-day filters. Start broad to gather data, then narrow to your best-converting segments.",
  },
  {
    n: "04",
    title: "Optimize & Scale",
    desc: "SmartBid and blacklist rules adjust automatically based on live conversion data. When ROI turns positive, increase your budget and the system keeps optimizing as you scale.",
  },
];

const faqs = [
  {
    q: "What is the minimum budget to start?",
    a: "There is no minimum campaign budget. You can start with whatever amount you're comfortable testing and scale up as you find what works.",
  },
  {
    q: "Which bidding models are supported?",
    a: "We support CPC (Cost Per Click), CPM (Cost Per Mille), and CPA (Cost Per Action). You can switch bidding models at any time without restarting your campaign.",
  },
  {
    q: "How does SmartBid work?",
    a: "SmartBid reads your conversion data in real time and automatically adjusts bids at the zone level to push budget toward sources that are hitting your CPA target and pull back from those that aren't.",
  },
  {
    q: "How do I track conversions?",
    a: "We support server-to-server postback tracking. Once your postback URL is set in the campaign settings, every conversion is tracked and visible in your dashboard with source-level detail.",
  },
  {
    q: "What ad creatives are required?",
    a: "Creative requirements vary by format. Push and in-page ads require a title, description, and icon. Pop and direct click only need a landing URL. Native ads require an image and headline. Full specs are available in the platform.",
  },
  {
    q: "Can I run campaigns in multiple formats simultaneously?",
    a: "Yes. You can run separate campaigns across different formats from the same account. This lets you test which format works best for your offer and vertical before scaling.",
  },
];

export default function Advertisers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden isolate">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -top-44 -right-6 h-[28rem] w-[28rem] rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-sky-400/24 blur-3xl" />
            <div className="absolute top-12 right-8 h-[24rem] w-[24rem] rounded-full bg-indigo-500/24 blur-3xl" />
            <div className="absolute bottom-4 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          </div>
          <div className="container relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// For Advertisers</p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-3xl text-balance">
                  Scale campaigns that actually hit your CPA.
                </h1>
                <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Eight ad formats, 220+ GEOs, SmartBid optimization, and transparent CPA tracking. Everything a performance team needs to launch fast and scale profitably.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 shadow-soft">
                    <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                      Start Advertising <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full h-12 px-7 border-primary/25">
                    <a href="/formats">
                      View Ad Formats
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                {[
                  { icon: Globe2, label: "Global reach", value: "220+ GEOs" },
                  { icon: MousePointerClick, label: "Ad formats", value: "8 formats" },
                  { icon: TrendingUp, label: "Avg. advertiser ROI", value: "146%" },
                  { icon: BarChart3, label: "Daily impressions", value: "5B+" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl glass p-5 flex items-center gap-5 shadow-soft">
                    <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{label}</p>
                    </div>
                    <p className="font-serif text-2xl">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Platform Advantages</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Built for performance teams who need results, not excuses.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              Every feature is designed to give you more control over where your budget goes and clearer visibility into what's working.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-3xl glass p-7">
                <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Ad Formats Strip */}
        <section className="glass-dark text-ink-foreground py-24 lg:py-32 rounded-t-[3rem]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-4">// Ad Formats</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink-foreground leading-[1.05] text-balance">
                Eight formats for every vertical and traffic goal.
              </h2>
              <p className="mt-5 text-ink-foreground/70 leading-relaxed">
                All formats are available from one account. Mix and match based on your offer, vertical, and performance data.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {formats.map(({ name, desc, stat }) => (
                <div key={name} className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-5">
                  <p className="font-medium text-ink-foreground mb-1">{name}</p>
                  <p className="text-xs text-ink-foreground/60 mb-4">{desc}</p>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary shrink-0" />
                    <p className="text-xs text-primary font-medium">{stat}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="rounded-full h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft">
                <a href="/formats">
                  See Full Format Details <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section className="container py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">// Verticals</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
                Traffic that converts across every major vertical.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Rawbitads traffic is particularly strong for iGaming, finance, nutra, dating, and utilities. These are verticals where cost-per-lead and purchase intent matter most.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-wrap gap-3">
              {verticals.map((v) => (
                <span key={v} className="rounded-full glass border border-primary/15 px-5 py-2.5 text-sm font-medium shadow-soft">{v}</span>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container pb-24 lg:pb-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Getting Started</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
              Launch your first campaign in four steps.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <article key={step.n} className="relative rounded-3xl glass p-7">
                <p className="font-serif text-5xl text-muted-foreground/40">{step.n}</p>
                <h3 className="font-serif text-xl mt-8 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border" />
                )}
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-soft">
              <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                Create Your First Campaign <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="container pb-24 lg:pb-32">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl">Advertiser FAQ</h2>
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
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-pastel-pink/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-pastel-peach/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-6">// Get Started</p>
              <h2 className="font-serif text-ink-foreground text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05] max-w-3xl mx-auto">
                Start running profitable campaigns today.
              </h2>
              <p className="mt-6 text-ink-foreground/70 max-w-lg mx-auto leading-relaxed">
                No minimum spend. No contracts. No account manager bottleneck. Launch in under 10 minutes and let the data tell you what to scale.
              </p>
              <Button asChild className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-soft">
                <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                  Create Your Account <ArrowUpRight className="ml-1 size-4" />
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
