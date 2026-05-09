import { AnimateIn } from "@/components/AnimateIn";

const steps = [
  { n: "01", title: "Upload Creatives", desc: "Add ad copy, images, and landing URLs. All eight formats are supported. Creatives are reviewed and go live in minutes, not days." },
  { n: "02", title: "Set Your Campaign", desc: "Pick your bidding model (CPC, CPM, or CPA), set a daily budget cap, and choose your ad format. Everything fits on a single setup screen." },
  { n: "03", title: "Target Precisely", desc: "Start with your key GEOs, then layer device, OS, carrier, and browser filters. Narrow down to the segments where your CPA is lowest." },
  { n: "04", title: "Optimize & Scale", desc: "SmartBid and zone-level blacklist rules adjust in real time. Once ROI turns positive, increase your budget and the system keeps optimizing as you scale." },
];

const Process = () => (
  <section id="process" className="container py-24 lg:py-32">
    <AnimateIn className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Simple Launch Flow</p>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
        Four steps from signup to your first profitable campaign
      </h2>
    </AnimateIn>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {steps.map((s, i) => (
        <AnimateIn key={s.n} delay={i * 90}>
          <div className="relative rounded-3xl glass p-7 hover:bg-white/55 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 h-full">
            <p className="font-serif text-5xl text-muted-foreground/40">{s.n}</p>
            <h3 className="font-serif text-2xl mt-8">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border" />
            )}
          </div>
        </AnimateIn>
      ))}
    </div>
  </section>
);

export default Process;
