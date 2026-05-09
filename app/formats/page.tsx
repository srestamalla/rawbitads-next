import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Monitor,
  ExternalLink,
  MousePointerClick,
  Newspaper,
  Send,
  CalendarDays,
  Search,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ad Formats",
  description:
    "Push Ads, In-Page Ads, Pop Ads, Direct Click, Native Ads, Telegram Ads, Calendar Ads, and Search Monetization. Eight traffic formats built for performance marketers.",
  alternates: { canonical: "/formats" },
  openGraph: {
    url: "/formats",
    title: "Ad Formats | Rawbitads",
    description:
      "Eight traffic formats built for performance marketers, all available from one self-serve dashboard.",
  },
};

const formats = [
  {
    icon: Bell,
    title: "Push Ads",
    subtitle: "Browser notification ads to opted-in subscribers",
    desc: "Notification-style ads delivered directly to users who opted in to receive push alerts. Appear as native browser or OS notifications on both desktop and mobile. High visibility and no ad blockers.",
    bestFor: ["iGaming", "Finance", "Nutra", "Dating", "eCommerce", "Utilities"],
    bidding: ["CPC", "CPM"],
    stat: "Up to 0.5%+ opt-in CTR",
    accent: "from-sky-500/20 to-cyan-400/10",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-500/10",
    tagBg: "bg-sky-50 text-sky-700 border-sky-200",
    bidBg: "bg-sky-500/10 text-sky-700",
  },
  {
    icon: Monitor,
    title: "In-Page Ads",
    subtitle: "Push-style ads that appear inside web pages",
    desc: "Look and feel exactly like push notifications but are served within the web page itself. No subscription needed. Works across all browsers including iOS Safari, where standard push is blocked.",
    bestFor: ["iGaming", "Dating", "Nutra", "Finance", "Crypto"],
    bidding: ["CPC", "CPM"],
    stat: "Works on iOS & all browsers",
    accent: "from-indigo-500/20 to-blue-400/10",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-500/10",
    tagBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    bidBg: "bg-indigo-500/10 text-indigo-700",
  },
  {
    icon: ExternalLink,
    title: "Pop Ads",
    subtitle: "Full-page popunder ads with 100% viewability",
    desc: "A new browser tab opens behind the user's active window when they click anywhere on a publisher site. When they close their current tab, the full ad page is waiting. Zero banner blindness, 100% viewable.",
    bestFor: ["iGaming", "Utilities", "Antivirus", "Sweepstakes", "Finance"],
    bidding: ["CPM", "CPA"],
    stat: "100% viewable, zero banner blindness",
    accent: "from-violet-500/20 to-purple-400/10",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-500/10",
    tagBg: "bg-violet-50 text-violet-700 border-violet-200",
    bidBg: "bg-violet-500/10 text-violet-700",
  },
  {
    icon: MousePointerClick,
    title: "Direct Click Ads",
    subtitle: "High-intent redirect traffic from parked domains",
    desc: "Also known as domain redirect traffic. Users who mistype a URL or visit a parked domain are redirected to your offer. These users already intended to buy or search. Conversion rates are consistently above average.",
    bestFor: ["eCommerce", "Finance", "Retail", "Travel", "Local Business"],
    bidding: ["CPC"],
    stat: "Highest purchase intent of any format",
    accent: "from-amber-500/20 to-orange-400/10",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-500/10",
    tagBg: "bg-amber-50 text-amber-700 border-amber-200",
    bidBg: "bg-amber-500/10 text-amber-700",
  },
  {
    icon: Newspaper,
    title: "Native Ads",
    subtitle: "Ads that blend into editorial content feeds",
    desc: "Served as sponsored articles, recommended content, or in-feed posts that match the look and feel of the page. Higher trust from users, lower bounce rates, and stronger engagement than traditional display advertising.",
    bestFor: ["Nutra", "Finance", "eCommerce", "News", "Insurance"],
    bidding: ["CPC", "CPM"],
    stat: "Lower bounce rate vs. display",
    accent: "from-emerald-500/20 to-green-400/10",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-500/10",
    tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    bidBg: "bg-emerald-500/10 text-emerald-700",
  },
  {
    icon: Send,
    title: "Telegram Ads",
    subtitle: "Sponsored messages in Telegram channels",
    desc: "Reach highly engaged audiences through sponsored posts inside Telegram channels. Target by topic, language, and audience size. Telegram's 900M+ monthly active users make it one of the fastest-growing ad channels for crypto, finance, and tech verticals.",
    bestFor: ["Crypto", "Finance", "Software", "B2B", "Tech", "News"],
    bidding: ["CPM"],
    stat: "900M+ monthly active Telegram users",
    accent: "from-cyan-500/20 to-teal-400/10",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-500/10",
    tagBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    bidBg: "bg-cyan-500/10 text-cyan-700",
  },
  {
    icon: CalendarDays,
    title: "Calendar Ads",
    subtitle: "Ads delivered as calendar event invitations",
    desc: "A genuinely unique format. Ads are delivered as scheduled event invitations directly into users' iOS and Android calendar apps. High visibility with low competition, appearing in a clutter-free space users check daily.",
    bestFor: ["Events", "eCommerce", "Travel", "Finance", "Retail"],
    bidding: ["CPC", "CPM"],
    stat: "Unique placement, minimal competition",
    accent: "from-rose-500/20 to-pink-400/10",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-500/10",
    tagBg: "bg-rose-50 text-rose-700 border-rose-200",
    bidBg: "bg-rose-500/10 text-rose-700",
  },
  {
    icon: Search,
    title: "Search Monetization",
    subtitle: "Monetize search traffic with paid search feeds",
    desc: "For publishers. Integrate a search feed that shows relevant paid search results when visitors search on your site or domain. A passive, high-eCPM revenue stream that scales with your traffic. No advertiser management required.",
    bestFor: ["Publishers", "Domain Owners", "Content Sites", "Search Portals"],
    bidding: ["Revenue Share"],
    stat: "Passive, scalable publisher revenue",
    accent: "from-yellow-500/20 to-amber-400/10",
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-500/10",
    tagBg: "bg-yellow-50 text-yellow-700 border-yellow-200",
    bidBg: "bg-yellow-500/10 text-yellow-700",
  },
];

const targeting = [
  "GEO & Country",
  "Device Type",
  "Operating System",
  "Browser",
  "Mobile Carrier",
  "Time of Day",
  "Connection Type",
  "Language",
];

export default function Formats() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden isolate">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -top-44 -right-6 h-[28rem] w-[28rem] rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-sky-400/24 blur-3xl" />
            <div className="absolute top-12 right-8 h-[24rem] w-[24rem] rounded-full bg-indigo-500/24 blur-3xl" />
            <div className="absolute bottom-4 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          </div>
          <div className="container relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// Ad Formats</p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-3xl text-balance">
                  Eight formats. Every vertical. One dashboard.
                </h1>
                <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Push, in-page, pop, direct click, native, Telegram, calendar, and search. Pick the format that fits your offer and scale it with precision targeting and SmartBid optimization.
                </p>
                <Button asChild className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 shadow-soft">
                  <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                    Start Advertising <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>

              {/* Format chips visual */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                {formats.map(({ icon: Icon, title, iconBg, iconColor }) => (
                  <div key={title} className="rounded-2xl glass p-4 flex items-center gap-3 shadow-soft">
                    <div className={`size-9 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                      <Icon className={`size-4 ${iconColor}`} />
                    </div>
                    <p className="text-sm font-medium leading-tight">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Format Cards */}
        <section className="container pb-24 lg:pb-32">
          <div className="grid md:grid-cols-2 gap-5">
            {formats.map(({ icon: Icon, title, subtitle, desc, bestFor, bidding, stat, accent, iconColor, iconBg, tagBg, bidBg }) => (
              <article key={title} className="rounded-[2rem] border border-primary/12 bg-white/70 backdrop-blur-xl shadow-soft overflow-hidden">
                <div className={`bg-gradient-to-br ${accent} p-7 flex items-start justify-between gap-4`}>
                  <div>
                    <div className={`size-12 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}>
                      <Icon className={`size-6 ${iconColor}`} />
                    </div>
                    <h2 className="font-serif text-2xl mb-1">{title}</h2>
                    <p className="text-xs text-muted-foreground">{subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end pt-1">
                    {bidding.map((b) => (
                      <span key={b} className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${bidBg}`}>{b}</span>
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                  <div className="flex items-center gap-2 mb-5">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                    <p className="text-xs font-medium text-foreground">{stat}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2.5">Best for</p>
                    <div className="flex flex-wrap gap-1.5">
                      {bestFor.map((tag) => (
                        <span key={tag} className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${tagBg}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Targeting & Bidding */}
        <section className="glass-dark text-ink-foreground py-24 lg:py-32 rounded-t-[3rem]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-5">// Precision Targeting</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance text-ink-foreground mb-7">
                  Every format comes with deep targeting built in.
                </h2>
                <p className="text-ink-foreground/70 leading-relaxed mb-10">
                  Stack targeting layers on any format to isolate the exact audience your offer converts on. Start broad, then narrow down to your best-performing combinations using live campaign data.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {targeting.map((t) => (
                    <span key={t} className="rounded-full border border-ink-foreground/20 px-4 py-2 text-sm text-ink-foreground/80">{t}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-6">// Bidding Models</p>
                {[
                  { model: "CPC", label: "Cost Per Click", desc: "Pay only when a user clicks your ad. Great for direct-response campaigns where click-through quality matters." },
                  { model: "CPM", label: "Cost Per Mille", desc: "Pay per 1,000 impressions. Ideal for brand exposure, retargeting, and high-volume formats like pop and push." },
                  { model: "CPA", label: "Cost Per Action", desc: "Pay only when a user completes a defined action: a sign-up, purchase, or install. Lowest risk, highest intent." },
                ].map(({ model, label, desc }) => (
                  <div key={model} className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 flex gap-5">
                    <div className="rounded-xl bg-primary/20 px-3 py-2 text-sm font-bold text-primary self-start shrink-0">{model}</div>
                    <div>
                      <p className="font-medium text-ink-foreground mb-1">{label}</p>
                      <p className="text-sm text-ink-foreground/60 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-24 lg:py-32">
          <div className="rounded-[3rem] glass-dark text-ink-foreground p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-pastel-pink/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-pastel-peach/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60 mb-6">// Get Started</p>
              <h2 className="font-serif text-ink-foreground text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05] max-w-3xl mx-auto">
                Pick your format and launch in under 10 minutes.
              </h2>
              <p className="mt-6 text-ink-foreground/70 max-w-lg mx-auto leading-relaxed">
                All eight formats are available from one self-serve account. No minimum spend, no contracts. Just campaign performance you can measure.
              </p>
              <Button asChild className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-soft">
                <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
                  Create Your First Campaign <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
