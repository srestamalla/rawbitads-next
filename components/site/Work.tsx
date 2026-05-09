const cases = [
  {
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    category: "iGaming",
    title: "CPA-Driven Acquisition Campaign",
    metric: "+287%",
    metricLabel: "ROI Growth",
    accent: "bg-pastel-mint",
  },
  {
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "Utilities",
    title: "Push Traffic Scaling Sprint",
    metric: "4.6×",
    metricLabel: "ROAS",
    accent: "bg-pastel-yellow",
  },
  {
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    category: "Finance",
    title: "Multiformat Conversion Funnel",
    metric: "31K",
    metricLabel: "Leads / 30 Days",
    accent: "bg-pastel-pink",
  },
];

const Work = () => (
  <section id="work" className="py-24 lg:py-32">
    <div className="container">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">// Performance Cases</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
          Real campaigns with trackable outcomes.
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <article key={c.title} className="group relative rounded-[2rem] overflow-hidden glass shadow-soft hover:shadow-card transition-all duration-500">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-5 left-5 ${c.accent} rounded-full px-3.5 py-1.5 text-xs font-medium`}>
                {c.category}
              </div>
              <div className="absolute bottom-5 right-5 rounded-2xl glass-strong p-4 shadow-soft min-w-[140px]">
                <p className="font-serif text-3xl leading-none">{c.metric}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{c.metricLabel}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl">{c.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
