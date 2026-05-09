import { CreditCard, LayoutDashboard, MonitorCheck, Radar, Rows3, Scale } from "lucide-react";

const features = [
  {
    title: "Dashboard",
    desc: "Clicks, impressions, conversions, spend, and eCPM update in real time. Spot a losing zone mid-day and reallocate budget before it costs you.",
    icon: LayoutDashboard,
  },
  {
    title: "Targeting",
    desc: "Stack GEO, device, OS, browser, carrier, and time-of-day filters on the same campaign. Narrow down to your most profitable segment without running separate campaigns.",
    icon: Radar,
  },
  {
    title: "Payments",
    desc: "Top up via card, wire, or crypto and campaigns go live immediately. No manual approvals, no billing delays, no minimum hold periods.",
    icon: CreditCard,
  },
  {
    title: "Environment",
    desc: "Separate bid controls for mobile, tablet, and desktop. Stop overpaying for environments that underperform for your vertical.",
    icon: MonitorCheck,
  },
  {
    title: "Ad Formats",
    desc: "Eight formats in one account: Push, In-Page, Pop, Direct Click, Native, Telegram Ads, Calendar Ads, and Search Monetization.",
    icon: Rows3,
  },
  {
    title: "Bidding",
    desc: "CPC, CPM, or CPA. Switch models any time. SmartBid reads live conversion data and adjusts bids automatically to hit your target cost per result.",
    icon: Scale,
  },
];

const Features = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="text-center max-w-5xl mx-auto mb-14">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Every tool you need to scale campaigns profitably
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Rawbitads gives performance teams the targeting depth, live analytics, flexible bidding, and multi-format reach to launch fast and keep optimizing until every campaign is in the black.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {features.map(({ title, desc, icon: Icon }) => (
          <article key={title} className="rounded-[1.75rem] border border-primary/12 bg-white/70 backdrop-blur-xl p-4 shadow-soft">
            <div className="flex flex-col sm:grid sm:grid-cols-[160px,1fr] gap-4 items-stretch">
              <div className="rounded-2xl glass-dark text-ink-foreground p-5 flex flex-col items-center justify-center text-center min-h-[90px] sm:min-h-0">
                <Icon className="size-9 mb-3" />
                <p className="font-serif text-xl leading-none">{title}</p>
              </div>
              <div className="rounded-2xl bg-white/70 border border-primary/10 p-5 sm:p-6 flex items-center">
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
