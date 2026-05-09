"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe2, Gauge, Target, Zap } from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Scale campaigns across top and emerging GEOs with stable, high-volume traffic sources.",
  },
  {
    icon: Target,
    title: "Precise Targeting",
    desc: "Reach users by device, OS, browser, location, and behavior for better conversion quality.",
  },
  {
    icon: Gauge,
    title: "Performance Control",
    desc: "Optimize bids, placements, and audience segments with real-time campaign-level data.",
  },
  {
    icon: Zap,
    title: "Fast Scaling",
    desc: "Launch quickly, test multiple formats, and move budget to winning combinations faster.",
  },
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
      <section className="relative overflow-hidden isolate">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-44 -right-6 h-[28rem] w-[28rem] rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-sky-400/24 blur-3xl" />
          <div className="absolute top-12 right-8 h-[24rem] w-[24rem] rounded-full bg-indigo-500/24 blur-3xl" />
          <div className="absolute bottom-4 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-52 w-52 rounded-full bg-fuchsia-400/16 blur-3xl" />
        </div>
        <div className="container relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// About Rawbitads</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-5xl text-balance">
          Built as a self-serve performance platform for teams that need scale, speed, and measurable ROI.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Rawbitads helps advertisers, affiliates, and agencies launch campaigns across multiple formats with deeper targeting and smarter optimization workflows.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 shadow-soft">
            <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
              Create Campaign <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full h-12 px-7">
            <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
              Contact Sales
            </a>
          </Button>
        </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Our Mission</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Make performance advertising simpler to launch and easier to scale.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              We focus on practical tools and transparent data so marketers can spend less time guessing and more time improving campaign outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-3xl glass p-7">
                <div className="size-11 rounded-2xl bg-secondary/70 flex items-center justify-center mb-8">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

        <section ref={snapshotRef} className="container py-20 lg:py-28">
          <div className="rounded-[2.5rem] glass-dark text-ink-foreground p-10 md:p-14 lg:p-16">
            <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-5">// Company Snapshot</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-ink-foreground text-5xl leading-none">{impressionsCount}B+</p>
                <p className="text-xs uppercase tracking-widest text-ink-foreground/65 mt-3">Daily Ad Impressions</p>
              </div>
              <div>
                <p className="font-serif text-ink-foreground text-5xl leading-none">{geosCount}+</p>
                <p className="text-xs uppercase tracking-widest text-ink-foreground/65 mt-3">Supported GEOs</p>
              </div>
              <div>
                <p className="font-serif text-ink-foreground text-5xl leading-none">{formatsCount}</p>
                <p className="text-xs uppercase tracking-widest text-ink-foreground/65 mt-3">Core Ad Formats</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
