import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your campaign goals and our team will get back to you with the best path to launch and scale your advertising.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact | Rawbitads",
    description:
      "Share your campaign goals and our team will get back to you with the best path to launch and scale your advertising.",
  },
};
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container pt-16 pb-12 lg:pt-24 lg:pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-4xl text-balance">
            Let&apos;s talk about your next campaign
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Share your goals and our team will get back to you with the best path to launch and scale.
          </p>
        </section>

        <section className="container pb-24 lg:pb-32">
          <div className="max-w-3xl rounded-[2rem] glass p-8 md:p-10 shadow-card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company</Label>
                    <Input id="companyName" name="companyName" placeholder="Your company name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly Budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      defaultValue=""
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="under-2k">Under $2,000</option>
                      <option value="2k-10k">$2,000 - $10,000</option>
                      <option value="10k-30k">$10,000 - $30,000</option>
                      <option value="30k-plus">$30,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="formats">Interested Ad Formats</Label>
                  <Input id="formats" name="formats" placeholder="e.g. Push Ads, Native Ads, Telegram Ads" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your campaign goals, GEOs, and target CPA."
                    className="min-h-[130px]"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-7 shadow-soft">
                    Send Message
                  </Button>
                </div>
              </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
