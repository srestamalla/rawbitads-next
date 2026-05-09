"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

const ease = "easeOut" as const;
const spring = { type: "spring", stiffness: 300, damping: 20 } as const;

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
      ([entry]) => { if (entry.isIntersecting) { setStartCounters(true); observer.disconnect(); } },
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
              <motion.div
                className="lg:col-span-6 pb-20 lg:pb-28"
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, ease }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// About Rawbitads</p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-balance">
                  We built the platform we wished existed.
                </h1>
                <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Rawbitads is a self-serve performance advertising platform built for advertisers, affiliates, and agencies who need real traffic, real targeting, and real ROI. No sales team required.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 shadow-soft">
                    <a href="https://rawbitads.adsrv.org/login">
                      Create Campaign <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-6 self-end"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, ease, delay: 0.1 }}
              >
                <div className="relative rounded-t-[2rem] overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
                    alt="Modern glass architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex gap-2 sm:gap-3">
                    {[
                      { label: "Daily Impr.", value: "5B+" },
                      { label: "Active GEOs", value: "220+" },
                      { label: "Avg. ROI", value: "146%" },
                    ].map(({ label, value }, i) => (
                      <motion.div
                        key={label}
                        className="flex-1 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 px-2.5 py-2 sm:px-4 sm:py-3"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease }}
                      >
                        <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/60 mb-0.5">{label}</p>
                        <p className="font-serif text-lg sm:text-2xl text-white">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div
                className="lg:col-span-5 order-2 lg:order-1 rounded-[2rem] overflow-hidden aspect-square relative"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
                  alt="Analytics and performance data"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />
                <motion.div
                  className="absolute top-6 left-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-4"
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, ease }}
                >
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">Avg. CPC</p>
                  <p className="font-serif text-3xl text-white">$0.21</p>
                  <p className="text-[11px] text-white/50 mt-1">SmartBid enabled</p>
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-4"
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.5, ease }}
                >
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">Platform CVR</p>
                  <p className="font-serif text-3xl text-white">3.42%</p>
                  <p className="text-[11px] text-white/50 mt-1">Across all formats</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:col-span-7 order-1 lg:order-2"
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease }}
              >
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
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease }}
                    >
                      <div className="size-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="size-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="glass-dark text-ink-foreground py-24 lg:py-32">
          <div className="container">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-4">// Who We Serve</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance text-ink-foreground">
                Built for advertisers and publishers alike.
              </h2>
              <p className="mt-6 text-ink-foreground/70 leading-relaxed">
                Whether you are scaling campaigns to hit CPA targets or monetizing traffic to grow payout revenue, Rawbitads has a dedicated solution for your side of the equation.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp, iconBg: "bg-primary/20", iconColor: "text-primary",
                  title: "For Advertisers",
                  subtitle: "Affiliates, performance agencies, direct brands, and growth teams. Anyone who needs quality traffic, specific GEOs, and a measurable path to conversion.",
                  features: advertiserFeatures, featureBg: "bg-primary/15", featureIconColor: "text-primary",
                  btnClass: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 shadow-soft",
                  btnLabel: "Start Advertising", xInit: -32,
                },
                {
                  icon: DollarSign, iconBg: "bg-cyan-400/20", iconColor: "text-cyan-400",
                  title: "For Publishers",
                  subtitle: "Blog owners, app developers, site operators, and content networks who want to turn their traffic into consistent, growing revenue with minimal setup.",
                  features: publisherFeatures, featureBg: "bg-cyan-400/15", featureIconColor: "text-cyan-400",
                  btnClass: "rounded-full bg-cyan-500 text-white hover:bg-cyan-500/90 h-11 px-6 shadow-soft",
                  btnLabel: "Start Monetizing", xInit: 32,
                },
              ].map(({ icon: Icon, iconBg, iconColor, title, subtitle, features, featureBg, featureIconColor, btnClass, btnLabel, xInit }) => (
                <motion.div
                  key={title}
                  className="rounded-[2rem] border border-ink-foreground/15 bg-ink-foreground/5 backdrop-blur-xl p-8 md:p-10"
                  initial={{ opacity: 0, x: xInit }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, ease }}
                  whileHover={{ y: -6, transition: spring }}
                >
                  <div className={`size-12 rounded-2xl ${iconBg} flex items-center justify-center mb-8`}>
                    <Icon className={`size-6 ${iconColor}`} />
                  </div>
                  <h3 className="font-serif text-3xl text-ink-foreground mb-3">{title}</h3>
                  <p className="text-ink-foreground/70 leading-relaxed mb-8">{subtitle}</p>
                  <ul className="space-y-4">
                    {features.map(({ icon: FIcon, text }, i) => (
                      <motion.li
                        key={text}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease }}
                      >
                        <div className={`size-8 rounded-xl ${featureBg} flex items-center justify-center shrink-0`}>
                          <FIcon className={`size-4 ${featureIconColor}`} />
                        </div>
                        <span className="text-sm text-ink-foreground/80">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button asChild className={`mt-10 ${btnClass}`}>
                    <a href="https://rawbitads.adsrv.org/login">
                      {btnLabel} <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// What Drives Us</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                  Four principles behind every product decision we make.
                </h2>
              </motion.div>
              <motion.p
                className="lg:col-span-5 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease }}
              >
                These aren&apos;t values on a wall. They&apos;re the constraints we use when deciding what to build, what to cut, and what to refuse.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <motion.article
                  key={title}
                  className="rounded-3xl glass p-7"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.09, duration: 0.6, ease }}
                  whileHover={{ y: -6, transition: spring }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="size-11 rounded-2xl bg-secondary/70 flex items-center justify-center">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <section ref={snapshotRef} className="container pb-24 lg:pb-32">
          <motion.div
            className="rounded-[2.5rem] overflow-hidden relative"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
              alt="Global performance advertising team"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/70 to-[#0a0f1e]/40" />
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-14 lg:px-16">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-8">// Company Snapshot</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: `${impressionsCount}B+`, label: "Daily Ad Impressions" },
                  { value: `${geosCount}+`, label: "Supported GEOs" },
                  { value: `${formatsCount}`, label: "Core Ad Formats" },
                  { value: `${roiCount}%`, label: "Avg. Advertiser ROI" },
                ].map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease }}
                  >
                    <p className="font-serif text-white text-5xl md:text-6xl leading-none">{value}</p>
                    <p className="text-xs uppercase tracking-widest text-white/60 mt-3">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="container pb-24 lg:pb-32">
          <motion.div
            className="rounded-2xl md:rounded-[3rem] glass-dark text-ink-foreground p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
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
                  <a href="https://rawbitads.adsrv.org/login">
                    Create Campaign <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
