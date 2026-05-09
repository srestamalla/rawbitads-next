import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactForm from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/AnimateIn";
import { Mail, MessageCircle, MapPin, ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Rawbitads team for advertiser support, publisher inquiries, and partnership opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact | Rawbitads",
    description:
      "Get in touch with the Rawbitads team for advertiser support, publisher inquiries, and partnership opportunities.",
  },
};

const quickContacts = [
  { icon: Mail, label: "Email us", value: "admin@rawbitads.com", href: "mailto:admin@rawbitads.com" },
  { icon: MessageCircle, label: "Telegram", value: "@rawbitads", href: "https://t.me/rawbitads" },
];

const allContacts = [
  { icon: Mail, label: "Support", value: "admin@rawbitads.com", href: "mailto:admin@rawbitads.com" },
  { icon: Mail, label: "Account Manager", value: "mark@rawbitads.com", href: "mailto:mark@rawbitads.com" },
  { icon: MessageCircle, label: "Telegram", value: "@rawbitads", href: "https://t.me/rawbitads" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#071730] py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute top-10 right-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
          </div>
          <div className="container relative z-10 text-center">
            <AnimateIn variant="up">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-6">// Contact</p>
              <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-4xl mx-auto text-balance">
                Let&apos;s build something that converts.
              </h1>
              <p className="mt-7 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
                Whether you&apos;re launching your first campaign or scaling a publisher network, we&apos;re here to help.
              </p>
            </AnimateIn>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {quickContacts.map(({ icon: Icon, label, value, href }, i) => (
                <AnimateIn key={label} variant="up" delay={200 + i * 100}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-xl px-5 py-3.5 hover:bg-white/15 transition-colors group"
                  >
                    <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="size-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-white/50 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{value}</p>
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn variant="fade" delay={400}>
              <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-xs">
                <Clock className="size-3.5" />
                <span>We typically respond within a few hours during business days</span>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Contact Cards + Form */}
        <section className="container py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Left — Contact Details */}
            <div className="lg:col-span-5 space-y-5">

              <AnimateIn variant="left">
                <div className="rounded-[1.75rem] glass p-7 shadow-soft">
                  <h2 className="font-serif text-2xl mb-2">Get in touch</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Reach us through any of the channels below and we will get back to you as soon as possible.
                  </p>
                  <div className="space-y-3">
                    {allContacts.map(({ icon: Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 group"
                      >
                        <div className="size-9 rounded-xl bg-secondary/70 flex items-center justify-center shrink-0">
                          <Icon className="size-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                          <p className="text-sm font-medium group-hover:text-primary transition-colors">{value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Office */}
              <AnimateIn variant="left" delay={100}>
                <div className="rounded-[1.75rem] glass p-7 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="size-9 rounded-xl bg-secondary/70 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Office</p>
                      <p className="font-medium">Kathmandu, Nepal</p>
                      <p className="text-sm text-muted-foreground mt-1">Rawbit Ads Pvt. Ltd.</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Quick CTA */}
              <AnimateIn variant="left" delay={200}>
                <div className="rounded-[1.75rem] glass-dark text-ink-foreground p-7">
                  <p className="font-serif text-xl mb-2 text-ink-foreground">Ready to get started?</p>
                  <p className="text-sm text-ink-foreground/70 leading-relaxed mb-5">
                    Create your account and launch your first campaign in under 10 minutes. No sales call needed.
                  </p>
                  <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 shadow-soft text-sm">
                    <a href="https://rawbitads.adsrv.org/join">
                      Sign Up Free <ArrowUpRight className="ml-1 size-3.5" />
                    </a>
                  </Button>
                </div>
              </AnimateIn>
            </div>

            {/* Right — Form */}
            <AnimateIn variant="right" className="lg:col-span-7">
              <ContactForm />
            </AnimateIn>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
