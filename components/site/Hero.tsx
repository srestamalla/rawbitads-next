import { Button } from "@/components/ui/button";
import { Activity, ArrowUpRight, BarChart3, Coins, Globe2, Layers, MousePointerClick, Target, TrendingUp, Zap } from "lucide-react";
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

              {/* Main campaign card */}
              <div className="col-span-2 md:col-span-3 md:row-span-6 rounded-[2rem] shadow-card relative border border-slate-200/80 bg-white/80 backdrop-blur-xl p-5 flex flex-col min-h-[380px] md:min-h-0">
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Rawbitads</p>
                    <p className="font-medium text-sm mt-0.5">Campaign Dashboard</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-1 text-[10px] font-semibold border border-emerald-200/60">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                    <span className="rounded-lg bg-slate-100/80 text-slate-500 px-2 py-1 text-[10px] border border-slate-200/50">Today</span>
                  </div>
                </div>

                {/* 4 KPI pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  <div className="rounded-xl bg-sky-50/80 border border-sky-100 p-2 text-center">
                    <p className="text-[9px] uppercase tracking-wider text-sky-600/80">Impr.</p>
                    <p className="text-sm font-semibold mt-0.5">20.5B</p>
                    <p className="text-[9px] text-emerald-600 mt-0.5">↑ 12.8%</p>
                  </div>
                  <div className="rounded-xl bg-violet-50/80 border border-violet-100 p-2 text-center">
                    <p className="text-[9px] uppercase tracking-wider text-violet-600/80">Clicks</p>
                    <p className="text-sm font-semibold mt-0.5">4.2M</p>
                    <p className="text-[9px] text-emerald-600 mt-0.5">↑ 8.4%</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50/80 border border-emerald-100 p-2 text-center">
                    <p className="text-[9px] uppercase tracking-wider text-emerald-600/80">CVR</p>
                    <p className="text-sm font-semibold mt-0.5">3.42%</p>
                    <p className="text-[9px] text-emerald-600 mt-0.5">↑ 0.3%</p>
                  </div>
                  <div className="rounded-xl bg-amber-50/80 border border-amber-100 p-2 text-center">
                    <p className="text-[9px] uppercase tracking-wider text-amber-600/80">Spend</p>
                    <p className="text-sm font-semibold mt-0.5">$8.4K</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">of $12K</p>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="rounded-2xl border border-slate-200/60 bg-slate-50/50 p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="size-3 text-muted-foreground" />
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Performance (7d)</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center gap-1 text-[9px] text-sky-600"><span className="inline-block size-1.5 rounded-full bg-sky-400" /> Clicks</span>
                      <span className="flex items-center gap-1 text-[9px] text-indigo-600"><span className="inline-block size-1.5 rounded-full bg-indigo-400" /> Conv.</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 px-1">
                    {[
                      { c: 24, v: 12 }, { c: 32, v: 16 }, { c: 28, v: 14 },
                      { c: 40, v: 20 }, { c: 36, v: 18 }, { c: 44, v: 22 }, { c: 56, v: 28 },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex items-end gap-px">
                        <div className="flex-1 rounded-t bg-sky-400/70" style={{ height: `${bar.c}px` }} />
                        <div className="flex-1 rounded-t bg-indigo-400/70" style={{ height: `${bar.v}px` }} />
                      </div>
                    ))}
                  </div>
                  <div className="flex mt-1.5 px-1">
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
                      <div key={d} className="flex-1 text-center text-[8px] text-muted-foreground">{d}</div>
                    ))}
                  </div>
                </div>

                {/* Active campaigns list */}
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Active Campaigns</p>
                    <span className="text-[9px] text-primary/70 font-medium">3 running</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: "US Push – Tier1",  fmt: "Push",   spend: "$124/d", ctr: "2.1%", up: true  },
                      { name: "BR Pop Traffic",   fmt: "Pop",    spend: "$89/d",  ctr: "1.8%", up: true  },
                      { name: "Native EU Blend",  fmt: "Native", spend: "$62/d",  ctr: "1.4%", up: false },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center gap-2 rounded-xl bg-white/60 border border-slate-100/80 px-3 py-2">
                        <span className="size-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-xs font-medium flex-1 truncate">{c.name}</span>
                        <span className="text-[9px] bg-slate-100 text-slate-500 rounded px-1.5 py-0.5 shrink-0">{c.fmt}</span>
                        <span className="text-[9px] text-muted-foreground shrink-0 w-10 text-right">{c.spend}</span>
                        <span className={`text-[10px] font-semibold shrink-0 w-8 text-right ${c.up ? "text-emerald-600" : "text-slate-500"}`}>{c.ctr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Traffic Sources card */}
              <div className="col-span-2 md:col-span-2 md:row-span-3 rounded-[1.75rem] border border-slate-200/80 bg-white/70 backdrop-blur-xl p-4 shadow-soft">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="size-3.5 text-indigo-500" />
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Traffic Sources</p>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Push Ads",        pct: 45, color: "bg-sky-400"     },
                    { label: "Pop / Redirect",  pct: 28, color: "bg-violet-400"  },
                    { label: "Native",          pct: 17, color: "bg-emerald-400" },
                    { label: "In-Page / Other", pct: 10, color: "bg-amber-400"   },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[10px] text-slate-600">{s.label}</p>
                        <p className="text-[10px] font-semibold text-slate-700">{s.pct}%</p>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-100">
                        <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100/80 flex items-center justify-between">
                  <p className="text-[10px] text-muted-foreground">220+ active GEOs</p>
                  <Globe2 className="size-3.5 text-sky-400" />
                </div>
              </div>

              {/* Budget ring card */}
              <div className="col-span-1 md:col-span-1 md:row-span-3 rounded-[1.75rem] border border-slate-200/80 bg-white/70 backdrop-blur-xl p-4 shadow-soft flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Target className="size-3.5 text-rose-400" />
                    <p className="text-[10px] uppercase tracking-widest">Budget</p>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <div className="relative size-14">
                      <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#f1f5f9" strokeWidth="5" />
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#fb7185" strokeWidth="5"
                          strokeDasharray="138.2" strokeDashoffset="41.5" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-slate-700">70%</span>
                    </div>
                  </div>
                  <p className="font-semibold text-sm text-center">$8.4K</p>
                  <p className="text-[9px] text-muted-foreground text-center mt-0.5">of $12K budget</p>
                </div>
                <div className="rounded-xl bg-rose-50 border border-rose-200/50 px-3 py-2 text-center mt-2">
                  <p className="text-[10px] font-semibold text-rose-500">3d remaining</p>
                </div>
              </div>

              {/* eCPM + ROI card */}
              <div className="col-span-1 md:col-span-1 md:row-span-3 rounded-[1.75rem] border border-slate-200/80 bg-white/70 backdrop-blur-xl p-4 shadow-soft">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Activity className="size-3.5 text-emerald-500" />
                  <p className="text-[10px] uppercase tracking-widest">eCPM</p>
                </div>
                <p className="font-semibold text-2xl">$2.84</p>
                <p className="text-[9px] text-emerald-600 font-medium mt-0.5">↑ +$0.18 today</p>
                <div className="mt-2 flex items-end gap-px h-9">
                  {[12, 20, 16, 24, 20, 28, 24, 32, 28, 36].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-emerald-500" style={{ height: `${h}px`, opacity: 0.25 + i * 0.075 }} />
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-amber-200/50 bg-amber-50/80 p-2">
                  <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                    <Coins className="size-3" />
                    <p className="text-[9px] uppercase tracking-widest">ROI</p>
                  </div>
                  <p className="text-base font-semibold leading-none">146%</p>
                  <p className="text-[9px] text-muted-foreground mt-0.5">Target CPA met</p>
                </div>
              </div>

            </div>

            {/* Floating badges */}
            <div className="hidden md:flex absolute -left-6 top-[42%] items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-xl p-3 pr-5 shadow-card animate-float-delayed">
              <div className="size-10 rounded-xl bg-amber-50 border border-amber-200/50 flex items-center justify-center">
                <TrendingUp className="size-5 text-amber-500" />
              </div>
              <div>
                <p className="font-semibold text-base leading-none">+300%</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">ROI Potential</p>
              </div>
            </div>

            <div className="hidden md:flex absolute right-3 top-[18%] items-center gap-2 rounded-xl border border-sky-200/60 bg-sky-50/90 backdrop-blur-xl px-3 py-2 shadow-soft animate-float">
              <Globe2 className="size-4 text-sky-500" />
              <div>
                <p className="text-[11px] font-semibold leading-none">220+ GEOs</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Active Reach</p>
              </div>
            </div>

            <div className="hidden md:flex absolute right-8 bottom-[12%] items-center gap-2 rounded-xl border border-emerald-200/60 bg-emerald-50/90 backdrop-blur-xl px-3 py-2 shadow-soft animate-float-delayed">
              <MousePointerClick className="size-4 text-emerald-500" />
              <div>
                <p className="text-[11px] font-semibold leading-none">3.42% CVR</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Conversion Rate</p>
              </div>
            </div>

            <div className="hidden md:flex absolute left-14 bottom-[8%] items-center gap-2 rounded-xl border border-violet-200/60 bg-violet-50/90 backdrop-blur-xl px-3 py-2 shadow-soft animate-float">
              <Zap className="size-4 text-violet-500" />
              <div>
                <p className="text-[11px] font-semibold leading-none">SmartBid</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">$0.21 Avg CPC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
