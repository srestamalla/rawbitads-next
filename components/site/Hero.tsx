import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart3, ChartNoAxesColumn, Coins, DollarSign, Globe2, MousePointerClick, PieChart, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden isolate">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-sky-400/24 blur-3xl" />
        <div className="absolute top-12 right-8 h-[24rem] w-[24rem] rounded-full bg-indigo-500/24 blur-3xl" />
        <div className="absolute bottom-4 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-52 w-52 rounded-full bg-fuchsia-400/16 blur-3xl" />
      </div>
      <div className="container relative z-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8">
              <span className="size-1.5 rounded-full bg-ink" />
              Global Self-Serve Ad Platform
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Stop Wasting Budget. Start Scaling Profitably.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Run push, native, pop, Telegram, and direct click ads across 220+ GEOs. Verified traffic, real-time SmartBid optimization, and transparent CPA reporting from one self-serve dashboard.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-sm shadow-soft">
                <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                  Start Advertising
                  <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 text-sm border-primary/25 bg-white/40 hover:bg-white/60">
                <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                  Start Monetizing
                </a>
              </Button>
            </div>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-white/45 backdrop-blur-xl p-4 shadow-soft max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Ad Formats We Run</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Telegram Ads",
                  "Push Ads",
                  "Pop Ads",
                  "Direct Click Ads",
                  "Native Ads",
                  "In-Page Ads",
                  "Calendar Ads",
                  "Search Monetization",
                ].map((format) => (
                  <span
                    key={format}
                    className="rounded-full border border-primary bg-primary px-3 py-1.5 text-xs text-primary-foreground"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative grid grid-cols-2 md:grid-cols-5 md:grid-rows-6 gap-4 min-h-[520px] md:h-[640px]">
              <div className="col-span-2 md:col-span-3 md:row-span-6 rounded-[2rem] shadow-card relative border border-primary/20 bg-gradient-to-br from-primary/12 to-white/20 backdrop-blur-xl p-5 flex flex-col min-h-[380px] md:min-h-0">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Rawbitads CMS</p>
                    <p className="font-serif text-xl mt-1">Campaign Overview</p>
                  </div>
                  <span className="rounded-full bg-primary/15 text-primary px-3 py-1 text-[10px] font-semibold">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BarChart3 className="size-3.5 text-cyan-600" />
                      <p className="text-[10px] uppercase tracking-widest">Impressions</p>
                    </div>
                    <p className="font-serif text-2xl mt-1">20.5B</p>
                    <p className="text-[11px] text-muted-foreground mt-1">+12.8% vs last month</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MousePointerClick className="size-3.5 text-emerald-600" />
                      <p className="text-[10px] uppercase tracking-widest">Conversions</p>
                    </div>
                    <p className="font-serif text-2xl mt-1">15,425</p>
                    <p className="text-[11px] text-muted-foreground mt-1">CVR 3.42% active</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-violet-400/25 bg-violet-400/10 p-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Zap className="size-3.5 text-violet-600" />
                    <p className="text-[10px] uppercase tracking-widest">Bidding</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-cyan-500/15 px-2 py-2">
                      <p className="text-xs font-semibold text-cyan-700">CPC</p>
                    </div>
                    <div className="rounded-xl bg-amber-500/15 px-2 py-2">
                      <p className="text-xs font-semibold text-amber-700">CPM</p>
                    </div>
                    <div className="rounded-xl bg-violet-500/15 px-2 py-2">
                      <p className="text-xs font-semibold text-violet-700">Smart</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-3">SmartBid enabled • Avg CPC $0.21</p>
                </div>
                <div className="mt-auto rounded-2xl border border-primary/15 bg-primary/10 p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ChartNoAxesColumn className="size-3.5" />
                    <p className="text-[10px] uppercase tracking-widest">Monthly Trend</p>
                  </div>
                  <div className="mt-2 h-24 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-3 flex items-end gap-2">
                    <div className="w-3 rounded bg-primary/35 h-8" />
                    <div className="w-3 rounded bg-primary/45 h-11" />
                    <div className="w-3 rounded bg-primary/60 h-14" />
                    <div className="w-3 rounded bg-primary/75 h-16" />
                    <div className="w-3 rounded bg-primary h-20" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Revenue up 23% this month</p>
                </div>
              </div>

              <div className="col-span-2 md:col-span-2 md:row-span-3 rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/12 to-white/20 backdrop-blur-xl p-5 shadow-soft">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe2 className="size-3.5" />
                  <p className="text-[10px] uppercase tracking-widest">Billion impressions per month</p>
                </div>
                <p className="font-serif text-4xl mt-2 text-primary">20.5 bln</p>
                <p className="text-xs text-muted-foreground mt-1">Top GEOs: US, UK, CA, AU</p>
                <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-cyan-500/12 to-indigo-500/5 p-3">
                  <div className="h-full relative">
                    <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-primary/20" />
                    <div className="absolute left-0 bottom-6 w-10 h-[2px] bg-cyan-600/80 rotate-12 origin-left" />
                    <div className="absolute left-10 bottom-8 w-12 h-[2px] bg-sky-600/80 rotate-6 origin-left" />
                    <div className="absolute left-20 bottom-9 w-12 h-[2px] bg-indigo-600/80 -rotate-2 origin-left" />
                    <div className="absolute left-32 bottom-10 w-10 h-[2px] bg-violet-600/90 rotate-[12deg] origin-left" />
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-1 md:row-span-3 rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/12 to-white/20 backdrop-blur-xl p-4 shadow-soft flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Coins className="size-3.5" />
                    <p className="text-[10px] uppercase tracking-widest">ROI</p>
                  </div>
                  <p className="font-serif text-3xl mt-2">146%</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Target CPA met</p>
                </div>
                <div className="rounded-xl bg-primary/10 px-3 py-2 text-center">
                  <p className="text-xs font-semibold text-primary">Scale</p>
                </div>
              </div>

              <div className="col-span-1 md:col-span-1 md:row-span-3 rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/12 to-white/20 backdrop-blur-xl p-4 shadow-soft">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="size-3.5" />
                  <p className="text-[10px] uppercase tracking-widest">Profit</p>
                </div>
                <p className="font-serif text-3xl mt-2">$35K</p>
                <p className="text-xs text-muted-foreground mt-2">Current month</p>
                <p className="text-[11px] text-muted-foreground mt-1">eCPM $2.84</p>
                <div className="mt-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-2">
                  <div className="flex items-center gap-2 text-amber-700">
                    <PieChart className="size-3.5" />
                    <p className="text-[10px] uppercase tracking-widest">Spend Mix</p>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    <div className="h-1.5 w-[45%] rounded bg-cyan-500" />
                    <div className="h-1.5 w-[30%] rounded bg-violet-500" />
                    <div className="h-1.5 w-[25%] rounded bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating widget */}
            <div className="hidden md:flex absolute -left-6 top-[42%] items-center gap-3 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/12 to-white/20 backdrop-blur-xl p-3 pr-5 shadow-card animate-float-delayed">
              <div className="size-10 rounded-xl bg-pastel-peach flex items-center justify-center">
                <TrendingUp className="size-5" />
              </div>
              <div>
                <p className="font-serif text-base leading-none">+300%</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">ROI Potential</p>
              </div>
            </div>

            <div className="hidden md:flex absolute right-3 top-[18%] items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl px-3 py-2 shadow-soft animate-float">
              <Globe2 className="size-4 text-cyan-700" />
              <div>
                <p className="text-[11px] font-semibold leading-none">220+ GEOs</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Active Reach</p>
              </div>
            </div>

            <div className="hidden md:flex absolute right-8 bottom-[12%] items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-xl px-3 py-2 shadow-soft animate-float-delayed">
              <MousePointerClick className="size-4 text-emerald-700" />
              <div>
                <p className="text-[11px] font-semibold leading-none">3.42% CVR</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Conversion Rate</p>
              </div>
            </div>

            <div className="hidden md:flex absolute left-14 bottom-[8%] items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-400/10 backdrop-blur-xl px-3 py-2 shadow-soft animate-float">
              <Coins className="size-4 text-violet-700" />
              <div>
                <p className="text-[11px] font-semibold leading-none">$0.21 CPC</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Smart Bid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
