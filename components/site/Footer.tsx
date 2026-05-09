import Link from "next/link";

const Footer = () => (
  <footer className="mt-8 glass-dark text-ink-foreground">
    <div className="container py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Brand */}
      <div>
        <Link href="/" className="inline-flex items-center cursor-pointer">
          <img src="/assets/logo-white.png" alt="Rawbitads" className="h-9 w-auto" />
        </Link>
        <p className="text-sm text-ink-foreground/65 mt-5 leading-relaxed">
          Advertise &amp; Grow with Rawbitads, a self-serve performance advertising platform delivering global digital advertising and website monetization solutions.
        </p>
      </div>

      {/* Services */}
      <div>
        <p className="text-base font-semibold text-ink-foreground mb-5">Services</p>
        <ul className="space-y-3 text-sm">
          <li><Link href="/advertisers" className="text-ink-foreground/65 hover:text-ink-foreground transition-colors">Advertisers</Link></li>
          <li><Link href="/publishers" className="text-ink-foreground/65 hover:text-ink-foreground transition-colors">Publishers</Link></li>
          <li><Link href="/formats" className="text-ink-foreground/65 hover:text-ink-foreground transition-colors">Ad Formats</Link></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <p className="text-base font-semibold text-ink-foreground mb-5">Company</p>
        <ul className="space-y-3 text-sm">
          <li><Link href="/about" className="text-ink-foreground/65 hover:text-ink-foreground transition-colors">About Us</Link></li>
          <li><Link href="/privacy-policy" className="text-ink-foreground/65 hover:text-ink-foreground transition-colors">Privacy Policy</Link></li>
          <li><Link href="/terms-and-conditions" className="text-ink-foreground/65 hover:text-ink-foreground transition-colors">Terms and Conditions</Link></li>
          <li><Link href="/contact" className="text-ink-foreground/65 hover:text-ink-foreground transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <p className="text-base font-semibold text-ink-foreground mb-5">Contact Us</p>
        <ul className="space-y-3 text-sm text-ink-foreground/65">
          <li><span className="text-ink-foreground/40">Location:</span> Kathmandu, Nepal</li>
          <li>
            <span className="text-ink-foreground/40">Email:</span>{" "}
            <a href="mailto:admin@rawbitads.com" className="hover:text-ink-foreground transition-colors">admin@rawbitads.com</a>
          </li>
          <li>
            <span className="text-ink-foreground/40">Manager:</span>{" "}
            <a href="mailto:mark@rawbitads.com" className="hover:text-ink-foreground transition-colors">mark@rawbitads.com</a>
          </li>
          <li>
            <span className="text-ink-foreground/40">Telegram:</span>{" "}
            <a href="https://t.me/rawbitads" target="_blank" rel="noopener noreferrer" className="hover:text-ink-foreground transition-colors">@rawbitads</a>
          </li>
        </ul>
      </div>

    </div>
    <div className="container py-6 border-t border-ink-foreground/20 flex flex-col md:flex-row justify-between gap-3 text-xs text-ink-foreground/50">
      <p>Copyright © 2026 Rawbit Ads | Powered by Rawbit Ads</p>
      <div className="flex gap-5">
        <Link href="/privacy-policy" className="hover:text-ink-foreground/80 transition-colors">Privacy Policy</Link>
        <Link href="/terms-and-conditions" className="hover:text-ink-foreground/80 transition-colors">Terms and Conditions</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
