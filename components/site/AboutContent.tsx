"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Globe2,
  Gauge,
  Target,
  Zap,
  Users,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Layers,
} from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "220+ GEOs covered with high-volume, verified traffic sources across push, pop, native, Telegram, and direct click formats.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Stack GEO, device, OS, browser, carrier, and time-of-day filters to isolate the exact audience your offer converts on.",
  },
  {
    icon: Gauge,
    title: "Real-Time Control",
    desc: "Monitor live campaign data, blacklist underperforming zones, and reallocate budget in seconds. Not hours.",
  },
  {
    icon: Zap,
    title: "SmartBid Automation",
    desc: "Set your CPA target. SmartBid reads conversion signals and adjusts bids automatically so you hit your cost goal at scale.",
  },
];

const advertiserFeatures = [
  { icon: BarChart3, text: "Launch CPC, CPM, or CPA campaigns in under 10 minutes" },
  { icon: Target, text: "Multi-layer targeting: GEO, device, OS, browser, carrier" },
  { icon: Zap, text: "SmartBid auto-optimization toward your CPA target" },
  { icon: Layers, text: "8 ad formats from one self-serve dashboard" },
];

const publisherFeatures = [
  { icon: DollarSign, text: "Monetize any traffic type: push, pop, native, and more" },
  { icon: TrendingUp, text: "Competitive eCPMs with real-time revenue tracking" },
  { icon: ShieldCheck, text: "Verified advertiser demand with anti-fraud protection" },
  { icon: Users, text: "Dedicated account support and fast payout schedules" },
];

const useCountUp = (target: number, enabled: boolean, duration = 1400) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let frameId = 0;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [duration, target, enabled]);

  return count;
};

export default function AboutContent() {
  const snapshotRef = useRef<HTMLElement | null>(null);
  const [startCounters, setStartCounters] = useState(false);
  const impressionsCount = useCountUp(5, startCounters);
  const geosCount = useCountUp(220, startCounters);
  const formatsCount = useCountUp(8, startCounters);
  const roiCount = useCountUp(146, startCounters);

  useEffect(() => {
    const section = snapshotRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
          <div className="container relative z-10 pt-16 pb-0 lg:pt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 pb-20 lg:pb-28 animate-fade-up">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// About Rawbitads</p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-balance">
                  We built the platform we wished existed.
                </h1>
                <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Rawbitads is a self-serve performance advertising platform built for advertisers, affiliates, and agencies who need real traffic, real targeting, and real ROI. No sales team required.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 shadow-soft">
                    <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                      Create Campaign <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 self-end">
                <div className="relative rounded-t-[2rem] overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
                    alt="Modern glass architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                    <div className="flex-1 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Daily Impressions</p>
                      <p className="font-serif text-2xl text-white">5B+</p>
                    </div>
                    <div className="flex-1 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Active GEOs</p>
                      <p className="font-serif text-2xl text-white">220+</p>
                    </div>
                    <div className="flex-1 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Avg. ROI</p>
                      <p className="font-serif text-2xl text-white">146%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 rounded-[2rem] overflow-hidden aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
                  alt="Analytics and performance data"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">Avg. CPC</p>
                  <p className="font-serif text-3xl text-white">$0.21</p>
                  <p className="text-[11px] text-white/50 mt-1">SmartBid enabled</p>
                </div>
                <div className="absolute bottom-6 right-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">Platform CVR</p>
                  <p className="font-serif text-3xl text-white">3.42%</p>
                  <p className="text-[11px] text-white/50 mt-1">Across all formats</p>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">// Our Mission</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                  Make performance advertising accessible to everyone who needs results.
                </h2>
                <p className="mt-7 text-muted-foreground leading-relaxed">
                  Too many platforms are either too expensive, too complicated, or too opaque. We built Rawbitads to fix that. A self-serve platform where any advertiser can launch in minutes, see exactly where their budget goes, and optimize based on data they actually trust.
                </p>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  We believe performance advertising should be transparent, measurable, and accessible. Not a black box you throw budget into and hope for the best.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-5">
                  {[
                    { label: "No long-term contracts", desc: "Start and stop anytime" },
                    { label: "No minimum spend", desc: "Launch on any budget" },
                    { label: "Live reporting", desc: "See results as they happen" },
                    { label: "Direct traffic", desc: "No resellers, no middlemen" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="size-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="glass-dark text-ink-foreground py-24 lg:py-32">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-4">// Who We Serve</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance text-ink-foreground">
                Built for advertisers and publishers alike.
              </h2>
              <p className="mt-6 text-ink-foreground/70 leading-relaxed">
                Whether you are scaling campaigns to hit CPA targets or monetizing traffic to grow payout revenue, Rawbitads has a dedicated solution for your side of the equation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Advertisers */}
              <div className="rounded-[2rem] border border-ink-foreground/15 bg-ink-foreground/5 backdrop-blur-xl p-8 md:p-10">
                <div className="size-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                  <TrendingUp className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-3xl text-ink-foreground mb-3">For Advertisers</h3>
                <p className="text-ink-foreground/70 leading-relaxed mb-8">
                  Affiliates, performance agencies, direct brands, and growth teams. Anyone who needs quality traffic, specific GEOs, and a measurable path to conversion.
                </p>
                <ul className="space-y-4">
                  {advertiserFeatures.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <div className="size-8 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <span className="text-sm text-ink-foreground/80">{text}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 shadow-soft">
                  <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                    Start Advertising <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>

              {/* Publishers */}
              <div className="rounded-[2rem] border border-ink-foreground/15 bg-ink-foreground/5 backdrop-blur-xl p-8 md:p-10">
                <div className="size-12 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-8">
                  <DollarSign className="size-6 text-cyan-400" />
                </div>
                <h3 className="font-serif text-3xl text-ink-foreground mb-3">For Publishers</h3>
                <p className="text-ink-foreground/70 leading-relaxed mb-8">
                  Blog owners, app developers, site operators, and content networks who want to turn their traffic into consistent, growing revenue with minimal setup.
                </p>
                <ul className="space-y-4">
                  {publisherFeatures.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <div className="size-8 rounded-xl bg-cyan-400/15 flex items-center justify-center shrink-0">
                        <Icon className="size-4 text-cyan-400" />
                      </div>
                      <span className="text-sm text-ink-foreground/80">{text}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-10 rounded-full bg-cyan-500 text-white hover:bg-cyan-500/90 h-11 px-6 shadow-soft">
                  <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                    Start Monetizing <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// What Drives Us</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                  Four principles behind every product decision we make.
                </h2>
              </div>
              <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
                These aren&apos;t values on a wall. They&apos;re the constraints we use when deciding what to build, what to cut, and what to refuse.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <article key={title} className="rounded-3xl glass p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <div className="size-11 rounded-2xl bg-secondary/70 flex items-center justify-center">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <section ref={snapshotRef} className="container pb-24 lg:pb-32">
          <div className="rounded-[2.5rem] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
              alt="Global performance advertising team"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/70 to-[#0a0f1e]/40" />
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-14 lg:px-16">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-8">// Company Snapshot</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <p className="font-serif text-white text-5xl md:text-6xl leading-none">{impressionsCount}B+</p>
                  <p className="text-xs uppercase tracking-widest text-white/60 mt-3">Daily Ad Impressions</p>
                </div>
                <div>
                  <p className="font-serif text-white text-5xl md:text-6xl leading-none">{geosCount}+</p>
                  <p className="text-xs uppercase tracking-widest text-white/60 mt-3">Supported GEOs</p>
                </div>
                <div>
                  <p className="font-serif text-white text-5xl md:text-6xl leading-none">{formatsCount}</p>
                  <p className="text-xs uppercase tracking-widest text-white/60 mt-3">Core Ad Formats</p>
                </div>
                <div>
                  <p className="font-serif text-white text-5xl md:text-6xl leading-none">{roiCount}%</p>
                  <p className="text-xs uppercase tracking-widest text-white/60 mt-3">Avg. Advertiser ROI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container pb-24 lg:pb-32">
          <div className="rounded-[3rem] glass-dark text-ink-foreground p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-pastel-pink/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-pastel-peach/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-6">// Ready to Start?</p>
              <h2 className="font-serif text-ink-foreground text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05] max-w-3xl mx-auto">
                Join the advertisers and publishers growing with Rawbitads.
              </h2>
              <p className="mt-6 text-ink-foreground/70 max-w-lg mx-auto leading-relaxed">
                Launch your first campaign in under 10 minutes. No minimum spend, no contracts, no guesswork.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-soft">
                  <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                    Create Campaign <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
