import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimateIn } from "@/components/AnimateIn";

const faqItems = [
  {
    q: "Which ad formats are available on Rawbit Ads?",
    a: "We support Telegram Ads, Push Ads, Pop Ads, Direct Click Ads, Native Ads, In-Page Ads, Calendar Ads, and Search Monetization.",
  },
  {
    q: "How quickly can I launch a campaign?",
    a: "Most campaigns can be launched the same day after creative setup and review. Our workflow is built for fast testing and iteration.",
  },
  {
    q: "Can I target specific GEOs and devices?",
    a: "Yes. You can target by country, device type, operating system, browser, and other segmentation options based on your campaign goals.",
  },
  {
    q: "Do you offer optimization support?",
    a: "Yes. You can optimize manually with performance data or use smart bidding and rules to improve CPA, ROI, and scale.",
  },
  {
    q: "What verticals perform best on your network?",
    a: "Common high-performing verticals include iGaming, utilities, finance, eCommerce, and lead generation, depending on GEO and creative quality.",
  },
];

const FAQ = () => (
  <section id="faq" className="container py-24 lg:py-32">
    <AnimateIn className="max-w-3xl mb-14">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Frequently Asked Questions</p>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
        Everything you need to launch with confidence.
      </h2>
    </AnimateIn>

    <div className="grid lg:grid-cols-2 gap-5">
      {faqItems.map((item, idx) => (
        <AnimateIn key={item.q} delay={idx * 70}>
          <div className="rounded-2xl border border-primary/15 bg-white/65 backdrop-blur-xl px-5 shadow-soft hover:-translate-y-0.5 hover:shadow-card transition-all duration-300 h-full">
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${idx}`} className="border-none">
                <AccordionTrigger className="text-left text-xl font-serif hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AnimateIn>
      ))}
    </div>
  </section>
);

export default FAQ;
