import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "220+", label: "Active GEOs" },
  { value: "8", label: "Ad Formats" },
  { value: "24/7", label: "Optimization Cycle" },
];

const DarkSection = () => (
  <section className="glass-dark text-ink-foreground py-24 lg:py-32 rounded-t-[3rem]">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-5">// Why Rawbitads</p>
          <h2 className="font-serif text-ink-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Built for marketers who need scale and control.
          </h2>
        </div>
        <p className="lg:col-span-5 text-ink-foreground/70 leading-relaxed">
          We combine performance-driven strategy, high-quality traffic sources, and intelligent automation to give you a faster, more efficient path to growth. From initial launch to ongoing optimization, every element is designed to help you reduce wasted spend, improve targeting precision, and consistently move toward profitable conversions.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-center border-t border-ink-foreground/20 pt-16">
        <div className="lg:col-span-6">
          <p className="font-serif text-7xl md:text-8xl lg:text-[9rem] leading-none tracking-tight">
            5B+
          </p>
          <p className="text-ink-foreground/60 uppercase tracking-[0.25em] text-xs mt-4">Ad Impressions Per Day</p>
        </div>
        <div className="lg:col-span-6 grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-ink-foreground/20 pl-5">
              <p className="font-serif text-3xl md:text-4xl">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-ink-foreground/60 mt-2">{s.label}</p>
            </div>
          ))}
          <div className="sm:col-span-3 mt-4">
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 shadow-soft">
              <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                Launch Your First Campaign <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DarkSection;
