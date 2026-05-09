import Link from "next/link";

const Footer = () => (
  <footer className="mt-8 border-t border-ink-foreground/20 glass-dark text-ink-foreground">
    <div className="container py-16 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <Link href="/" className="inline-flex items-center">
          <img src="/assets/logo-white.png" alt="Rawbitads" className="h-9 w-auto" />
        </Link>
        <p className="text-sm text-ink-foreground/70 mt-4 max-w-sm leading-relaxed">
          A self-serve performance advertising platform focused on quality traffic, smart optimization, and scalable growth.
        </p>
        <a href="mailto:hello@rawbitads.com" className="inline-block mt-6 font-serif text-xl underline underline-offset-4 decoration-1">
          hello@rawbitads.com
        </a>
      </div>
      <div className="md:col-span-3">
        <p className="text-xs uppercase tracking-widest text-ink-foreground/60 mb-4">Platform</p>
        <ul className="space-y-3 text-sm">
          <li><Link href="/about" className="hover:text-ink-foreground text-ink-foreground/70">About</Link></li>
          <li><Link href="/formats" className="hover:text-ink-foreground text-ink-foreground/70">Ad Formats</Link></li>
          <li><Link href="/monetization" className="hover:text-ink-foreground text-ink-foreground/70">Monetization</Link></li>
          <li><a href="/#work" className="hover:text-ink-foreground text-ink-foreground/70">Case Studies</a></li>
          <li><a href="/#process" className="hover:text-ink-foreground text-ink-foreground/70">Launch Flow</a></li>
          <li><a href="/#testimonials" className="hover:text-ink-foreground text-ink-foreground/70">Results</a></li>
          <li><a href="/#blog" className="hover:text-ink-foreground text-ink-foreground/70">Insights</a></li>
        </ul>
      </div>
      <div className="md:col-span-4">
        <p className="text-xs uppercase tracking-widest text-ink-foreground/60 mb-4">Support</p>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-ink-foreground text-ink-foreground/70">Help Center</a></li>
          <li><a href="#" className="hover:text-ink-foreground text-ink-foreground/70">Campaign Guidelines</a></li>
          <li><a href="#" className="hover:text-ink-foreground text-ink-foreground/70">Tracking Setup</a></li>
          <li><Link href="/contact" className="hover:text-ink-foreground text-ink-foreground/70">Contact Team</Link></li>
        </ul>
      </div>
    </div>
    <div className="container py-6 border-t border-ink-foreground/20 flex flex-col md:flex-row justify-between gap-3 text-xs text-ink-foreground/60">
      <p>Copyright © 2026 Rawbit Ads | Powered by Rawbit Ads</p>
    </div>
  </footer>
);

export default Footer;
