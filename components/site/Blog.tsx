const posts = [
  { img: "/assets/blog-1.jpg", category: "Optimization", date: "MAY 02, 2026", read: "4 MIN READ", title: "How Target CPA Improves Campaign Stability", preview: "A practical walkthrough of setting CPA goals and scaling without losing margin." },
  { img: "/assets/blog-2.jpg", category: "Traffic", date: "APR 24, 2026", read: "6 MIN READ", title: "Top GEOs and Bids by Ad Format", preview: "Use fresh traffic insights to select smarter bids and better launch conditions." },
  { img: "/assets/blog-3.jpg", category: "Scaling", date: "APR 18, 2026", read: "5 MIN READ", title: "Multiformat Testing for Faster Wins", preview: "Combine push, native, and direct click traffic to find winners sooner." },
];

const Blog = () => (
  <section id="blog" className="py-24 lg:py-32">
    <div className="container">
      <div className="text-center mb-16">
        <span className="inline-block rounded-full glass px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] mb-5">Insights</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
          Latest updates for performance marketers
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="group cursor-pointer">
            <div className="rounded-[1.75rem] overflow-hidden aspect-[4/3] mb-5 glass">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
              <span>{p.date}</span>
              <span className="size-1 rounded-full bg-muted-foreground/40" />
              <span>{p.read}</span>
            </div>
            <h3 className="font-serif text-2xl leading-tight mb-2 group-hover:underline underline-offset-4 decoration-1">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{p.preview}</p>
            <span className="text-sm font-medium inline-flex items-center gap-1">
              Read Insight <span aria-hidden>→</span>
            </span>
          </article>
        ))}
      </div>
      <div className="text-center mt-14">
        <button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-sm font-medium transition-colors shadow-soft">
          View All Articles
        </button>
      </div>
    </div>
  </section>
);

export default Blog;
