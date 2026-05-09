import { AnimateIn } from "@/components/AnimateIn";

const brands = ["NOVA", "URBANCO", "VELORA", "QUEENS", "NORTHLINE", "AURA"];

const Brands = () => (
  <section className="border-y border-white/35 glass">
    <div className="container py-12">
      <AnimateIn variant="fade">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Built for affiliates, agencies, media buyers, and brands scaling performance campaigns
        </p>
      </AnimateIn>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
        {brands.map((b, i) => (
          <AnimateIn key={b} variant="up" delay={i * 60}>
            <span className="font-serif text-2xl md:text-3xl tracking-wide text-foreground/60 hover:text-foreground transition-colors">
              {b}
            </span>
          </AnimateIn>
        ))}
      </div>
    </div>
  </section>
);

export default Brands;
