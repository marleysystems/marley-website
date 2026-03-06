import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedOrb } from "@/components/AnimatedOrb";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Marley — Private AI for Regulated Industries",
  description:
    "AI that understands the law. Private, secure, and built for how your team actually works. GDPR compliant, UK data residency.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <AnimatedOrb />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn delay={120}>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6">
              AI That Understands
              <br />
              <span className="italic text-accent">the Law.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed max-w-xl mx-auto mb-10">
              Private, secure, and built for how your team actually works.
            </p>
          </FadeIn>

          <FadeIn delay={360}>
            <Link href="/contact" className="btn-accent text-sm">
              Book a Demo
            </Link>
          </FadeIn>

          {/* Sectors ticker */}
          <FadeIn delay={480}>
            <div className="mt-14 flex items-center gap-3 justify-center flex-wrap">
              <span className="text-xs text-text-muted tracking-wide">Trusted across</span>
              {["Legal", "Healthcare", "Insurance", "Automotive", "Financial Services", "HR & Employment"].map((sector, i) => (
                <span key={sector} className="flex items-center gap-3">
                  {i > 0 && <span className="w-px h-3 bg-border inline-block" />}
                  <span className="text-xs text-text-secondary font-medium">{sector}</span>
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent-subtle" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="section-label mb-6">The Reality</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-6">
              Your team is already using AI.{" "}
              <span className="text-text-secondary">
                You just don&apos;t control it.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              When your team uses public AI tools, sensitive data including
              patient records, client files, and regulated information leaves
              your control silently, repeatedly, and without an audit trail.
              Marley is the alternative you can actually trust.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Marley Does */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="section-label text-center mb-4">The Platform</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="heading-display text-3xl sm:text-4xl text-center mb-16 max-w-xl mx-auto">
              Built for regulated work. Not adapted to it.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="card group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent/20">
                  <LockIcon />
                </div>
                <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                  Private &amp; Secure
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Your data stays yours. Fully isolated, never used for
                  training. UK data residency as standard.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="card group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent/20">
                  <ScaleIcon />
                </div>
                <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                  Built for Your Industry
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Document review, research and drafting. Not a generic chatbot.
                  Configured around how your team actually works.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="card group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent/20">
                  <ShieldIcon />
                </div>
                <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                  Compliant by Default
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  GDPR, FCA, CQC, ICO and whatever your regulator requires.
                  Compliance built in from day one, not retrofitted after.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div
              className="w-px h-16 bg-gradient-to-b from-transparent to-accent-subtle mx-auto mb-12 opacity-60"
            />
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="heading-display text-3xl sm:text-4xl mb-5">
              Curious how it works?
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary mb-8 text-lg">
              We&apos;ll walk you through the platform and answer your questions.
              No pressure, no hard sell.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <Link
              href="/contact"
              className="text-link-arrow text-base hover:text-accent"
            >
              Book a Demo
              <ArrowRight />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B85D2A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B85D2A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18M3 9l9-6 9 6M3 15l9 6 9-6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B85D2A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
