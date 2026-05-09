import { CreditCard, LayoutDashboard, MonitorCheck, Radar, Rows3, Scale } from "lucide-react";

const features = [
  {
    title: "Dashboard",
    desc: "Track impressions, clicks, conversions, spend, and revenue in one clear control panel with live campaign updates.",
    icon: LayoutDashboard,
  },
  {
    title: "Targeting",
    desc: "Reach the right audience by GEO, device, OS, browser, and traffic source to improve quality and conversion outcomes.",
    icon: Radar,
  },
  {
    title: "Payments",
    desc: "Top up and scale campaigns with reliable payment workflows built for advertisers and performance teams.",
    icon: CreditCard,
  },
  {
    title: "Environment",
    desc: "Run and optimize campaigns across desktop and mobile inventory with stable delivery and transparent reporting.",
    icon: MonitorCheck,
  },
  {
    title: "Ad Formats",
    desc: "Use Telegram, Push, Pop, Direct Click, Native, In-Page, Calendar, and Search Monetization from one platform.",
    icon: Rows3,
  },
  {
    title: "Bidding",
    desc: "Work with CPC, CPM, and CPA models plus smart optimization rules to balance scale and profitability.",
    icon: Scale,
  },
];

const Features = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="text-center max-w-5xl mx-auto mb-14">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Platform Features Built for Modern Advertisers
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Rawbit Ads combines targeting depth, live analytics, flexible bidding, and multi-format delivery so performance teams can launch faster and optimize with confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {features.map(({ title, desc, icon: Icon }) => (
          <article key={title} className="rounded-[1.75rem] border border-primary/12 bg-white/70 backdrop-blur-xl p-4 shadow-soft">
            <div className="grid grid-cols-[160px,1fr] gap-4 items-stretch">
              <div className="rounded-2xl glass-dark text-ink-foreground p-5 flex flex-col items-center justify-center text-center">
                <Icon className="size-9 mb-3" />
                <p className="font-serif text-xl leading-none">{title}</p>
              </div>
              <div className="rounded-2xl bg-white/70 border border-primary/10 p-6 flex items-center">
                <p className="text-[1.05rem] leading-relaxed text-foreground/90">{desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
