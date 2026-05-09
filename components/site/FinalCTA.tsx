import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const FinalCTA = () => (
  <section className="container py-24 lg:py-32">
    <div className="rounded-[3rem] glass-dark text-ink-foreground p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute -top-20 -right-20 size-80 rounded-full bg-pastel-pink/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-pastel-peach/20 blur-3xl" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-6">// Start Now</p>
        <h2 className="font-serif text-ink-foreground text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05] max-w-4xl mx-auto">
          Start running profitable campaigns today.
        </h2>
        <p className="mt-7 text-ink-foreground/70 max-w-xl mx-auto leading-relaxed">
          Join advertisers and publishers growing with Rawbitads. Set up your first campaign in under 10 minutes. No agency, no middleman, just performance you can measure.
        </p>
        <Button asChild className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-13 px-8 text-base shadow-soft">
          <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
            Create Campaign <ArrowUpRight className="ml-1 size-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCTA;
