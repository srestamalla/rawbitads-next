"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const items = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    name: "Daniel",
    role: "Affiliate Team Lead",
    quote: "The traffic quality and optimization features made scaling much more predictable. We hit profitability in the first week.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    name: "Elena",
    role: "Performance Manager",
    quote: "The self-serve setup is fast, but the real value is the control. We optimize by source and keep CPA inside target.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    name: "Marcus",
    role: "Agency Buyer",
    quote: "Strong volumes, broad GEO coverage, and quick launch flow. Perfect for testing and then scaling winning offers.",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    name: "Sophie",
    role: "User Acquisition Lead",
    quote: "What impressed us most was traffic consistency. We launched in three GEOs and kept stable CPA while scaling week over week.",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    name: "Ryan",
    role: "Growth Director",
    quote: "The dashboard gives us clarity by source and format. It made testing faster and decision-making much more confident.",
  },
  {
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
    name: "Ava",
    role: "Media Buyer",
    quote: "Great support, fast approvals, and strong conversion quality. We now route a major part of our monthly spend here.",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Client Results</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
            Marketers choose us for traffic that actually converts.
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {items.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <article className="h-full rounded-[2rem] border border-primary/12 bg-white/75 backdrop-blur-xl p-7 shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-full overflow-hidden border-4 border-primary/15">
                      <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl leading-tight">{t.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Quote className="size-9 text-primary/35" />
                    <p className="mt-3 text-[1.05rem] leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`${t.name}-${i}`} className="size-4 fill-current" />
                    ))}
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3 md:-left-4 bg-white/80 border-primary/20 hover:bg-white" />
          <CarouselNext className="-right-3 md:-right-4 bg-white/80 border-primary/20 hover:bg-white" />
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => api?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all ${current === i ? "w-7 bg-primary" : "w-2.5 bg-primary/25"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
