import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "220+", label: "Active GEOs" },
  { value: "8", label: "Ad Formats" },
  { value: "146%", label: "Avg. Advertiser ROI" },
  { value: "3.42%", label: "Platform CVR" },
];

const DarkSection = () => (
  <section className="glass-dark text-ink-foreground py-24 lg:py-32 rounded-t-[3rem]">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-5">// Why Rawbitads</p>
          <h2 className="font-serif text-ink-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Performance advertising built for ROI, not just reach.
          </h2>
          <p className="mt-7 text-ink-foreground/70 leading-relaxed">
            Stop burning budget on low-quality clicks. Rawbitads routes your spend to verified traffic sources across push, pop, native, and Telegram channels. SmartBid automation, real-time zone blacklisting, and transparent CPA tracking make sure every dollar earns its keep.
          </p>
        </div>
        <div className="lg:col-span-7 rounded-[2rem] overflow-hidden aspect-[16/9] relative shadow-card">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            alt="Performance analytics dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex gap-2 sm:gap-4">
            <div className="rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 px-3 py-2 sm:px-4 sm:py-3">
              <p className="text-[9px] sm:text-xs uppercase tracking-widest text-white/60 mb-1">Live CVR</p>
              <p className="font-serif text-xl sm:text-2xl text-white">3.42%</p>
            </div>
            <div className="rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 px-3 py-2 sm:px-4 sm:py-3">
              <p className="text-[9px] sm:text-xs uppercase tracking-widest text-white/60 mb-1">Avg. CPC</p>
              <p className="font-serif text-xl sm:text-2xl text-white">$0.21</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-center border-t border-ink-foreground/20 pt-16">
        <div className="lg:col-span-6">
          <p className="font-serif text-7xl md:text-8xl lg:text-[9rem] leading-none tracking-tight">
            5B+
          </p>
          <p className="text-ink-foreground/60 uppercase tracking-[0.25em] text-xs mt-4">Ad Impressions Per Day</p>
        </div>
        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-ink-foreground/20 pl-5">
              <p className="font-serif text-3xl md:text-4xl">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-ink-foreground/60 mt-2">{s.label}</p>
            </div>
          ))}
          <div className="sm:col-span-2 mt-4">
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
