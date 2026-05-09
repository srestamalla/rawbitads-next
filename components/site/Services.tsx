import { Megaphone, Sparkles, Share2, Users, LayoutTemplate, Bot, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Push & In-Page Ads", desc: "Launch high-volume push campaigns with precise targeting and fast optimization cycles." },
  { icon: Sparkles, title: "Native & Display Ads", desc: "Reach intent-driven users with ad formats designed for smooth, contextual engagement." },
  { icon: Share2, title: "Direct Click & Pop Traffic", desc: "Scale quickly with conversion-focused traffic sources and flexible CPC/CPM bidding." },
  { icon: Users, title: "Advanced Targeting", desc: "Segment by GEO, device, OS, browser, carrier, and audience behavior to improve quality." },
  { icon: LayoutTemplate, title: "Performance Optimization", desc: "Use automation modes and smart rules to cut waste and move budget to winners." },
  { icon: Bot, title: "Self-Serve Control Panel", desc: "Create campaigns, monitor KPIs, and iterate creatives in one streamlined dashboard." },
];

const Services = () => (
  <section id="services" className="container py-24 lg:py-32">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Ad Formats & Features</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl text-balance leading-[1.05]">
          Built to help you launch fast and scale profitably.
        </h2>
      </div>
      <p className="text-muted-foreground max-w-sm">
        From traffic discovery to optimization, every tool is designed for measurable campaign performance.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map(({ icon: Icon, title, desc }, i) => (
        <div
          key={title}
          className="group rounded-3xl glass p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-10">
            <div className="size-11 rounded-2xl bg-secondary/70 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="size-5" />
            </div>
            <span className="text-xs text-muted-foreground">0{i+1}</span>
          </div>
          <h3 className="font-serif text-2xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more <ArrowUpRight className="size-4" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
