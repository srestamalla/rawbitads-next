import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Bot, LayoutTemplate, Megaphone, Share2, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Ad Formats",
  description:
    "Push Ads, Native Ads, Pop Ads, Direct Click, Telegram Ads, In-Page Ads, Calendar Ads, and Search Monetization — traffic formats built for performance marketers.",
  alternates: { canonical: "/formats" },
  openGraph: {
    url: "/formats",
    title: "Ad Formats | Rawbitads",
    description:
      "Push Ads, Native Ads, Pop Ads, Direct Click, Telegram Ads, In-Page Ads, Calendar Ads, and Search Monetization — traffic formats built for performance marketers.",
  },
};

const formatCards = [
  {
    title: "Push & In-Page Ads",
    desc: "Launch high-volume push campaigns with precise targeting and fast optimization cycles.",
    icon: Megaphone,
  },
  {
    title: "Native & Display Ads",
    desc: "Reach intent-driven users with ad formats designed for smooth, contextual engagement.",
    icon: Sparkles,
  },
  {
    title: "Direct Click & Pop Traffic",
    desc: "Scale quickly with conversion-focused traffic sources and flexible CPC/CPM bidding.",
    icon: Share2,
  },
  {
    title: "Advanced Targeting",
    desc: "Segment by GEO, device, OS, browser, carrier, and audience behavior to improve quality.",
    icon: Users,
  },
  {
    title: "Performance Optimization",
    desc: "Use automation modes and smart rules to cut waste and move budget to winners.",
    icon: LayoutTemplate,
  },
  {
    title: "Self-Serve Control Panel",
    desc: "Create campaigns, monitor KPIs, and iterate creatives in one streamlined dashboard.",
    icon: Bot,
  },
];

export default function Formats() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden isolate">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -top-44 -right-6 h-[28rem] w-[28rem] rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-sky-400/24 blur-3xl" />
            <div className="absolute top-12 right-8 h-[24rem] w-[24rem] rounded-full bg-indigo-500/24 blur-3xl" />
            <div className="absolute bottom-4 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute bottom-10 right-1/4 h-52 w-52 rounded-full bg-fuchsia-400/16 blur-3xl" />
          </div>
          <div className="container relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// Ad Formats</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-5xl text-balance">
              Traffic formats built for performance marketers
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Choose the best format for your offer, traffic strategy, and conversion goals.
            </p>
          </div>
        </section>

        <section className="container pb-24 lg:pb-32">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {formatCards.map(({ title, desc, icon: Icon }, index) => (
              <article
                key={title}
                className="group rounded-3xl glass p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="size-11 rounded-2xl bg-secondary/70 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h2 className="font-serif text-2xl mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
