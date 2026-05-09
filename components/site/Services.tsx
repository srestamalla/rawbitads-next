import { Megaphone, Sparkles, Share2, Users, LayoutTemplate, Bot, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Push & In-Page Ads", desc: "Reach opted-in subscribers the moment they open their browser. High intent, low CPCs, and fast volume. Push traffic that converts without the premium price tag." },
  { icon: Sparkles, title: "Native & Display Ads", desc: "Blend into premium content feeds with ads that match the look and feel of the page. Lower bounce rates, higher trust, and stronger engagement versus traditional display." },
  { icon: Share2, title: "Direct Click & Pop Traffic", desc: "Capture full-page attention with pop and direct click formats. Particularly effective for iGaming, finance, utilities, and subscription verticals that need volume fast." },
  { icon: Users, title: "Advanced Targeting", desc: "Layer GEO, device, OS, browser, carrier, and time-of-day filters to isolate your best-converting segments and stop wasting budget on traffic that never buys." },
  { icon: LayoutTemplate, title: "SmartBid Optimization", desc: "Set your target CPA and let SmartBid auto-adjust bids and blacklist underperforming zones in real time. Your budget moves toward winners automatically." },
  { icon: Bot, title: "Self-Serve Control Panel", desc: "Launch in under 10 minutes. Adjust bids, swap creatives, review live ROI, and scale winners without waiting on an account manager or submitting a ticket." },
];

const Services = () => (
  <section id="services" className="container py-24 lg:py-32">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Ad Formats & Features</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl text-balance leading-[1.05]">
          Eight formats. One platform. Measurable ROI.
        </h2>
      </div>
      <p className="text-muted-foreground max-w-sm">
        From first-click to conversion, every channel and tool is built to drive performance you can actually measure.
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
