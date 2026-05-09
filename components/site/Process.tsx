const steps = [
  { n: "01", title: "Upload Creatives", desc: "Add your ad creatives, copy, and landing links directly in the platform." },
  { n: "02", title: "Set Campaign", desc: "Choose objective, budget, bids, and ad formats for your launch strategy." },
  { n: "03", title: "Target Precisely", desc: "Select GEO, device, OS, and audience filters to reach relevant traffic." },
  { n: "04", title: "Optimize & Scale", desc: "Use live data, rules, and automation tools to improve ROI continuously." },
];

const Process = () => (
  <section id="process" className="container py-24 lg:py-32">
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Simple Launch Flow</p>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
        From setup to profitable scaling
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {steps.map((s, i) => (
        <div key={s.n} className="relative rounded-3xl glass p-7 hover:bg-white/55 transition-colors">
          <p className="font-serif text-5xl text-muted-foreground/40">{s.n}</p>
          <h3 className="font-serif text-2xl mt-8">{s.title}</h3>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
          {i < steps.length - 1 && (
            <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border" />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Process;
