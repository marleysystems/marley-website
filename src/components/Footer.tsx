import Link from "next/link";

const footerLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/security", label: "Security" },
  { href: "/why-marley", label: "Why Marley" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-serif text-xl font-medium text-text-primary hover:text-accent transition-colors duration-200"
            >
              Marley
            </Link>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Private AI for regulated industries including legal, healthcare,
              insurance, automotive, and more. Built for the way your team
              actually works.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.15em] uppercase text-text-muted font-medium mb-1">
              Navigation
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA column */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.15em] uppercase text-text-muted font-medium mb-1">
              Get Started
            </p>
            <Link href="/contact" className="btn-accent text-xs px-5 py-2.5">
              Book a Demo
            </Link>
            <a
              href="https://app.marleysystems.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              Login to Platform →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Marley AI Ltd. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built for regulated industries · Registered in England & Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
