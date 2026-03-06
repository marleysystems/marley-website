import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Why Marley",
  description:
    "Not another AI chatbot. See how Marley compares to generic AI tools and enterprise competitors, and why regulated industries choose Marley.",
};

const vsGeneric = {
  them: [
    "Public model: your data used for training",
    "No industry-specific workflows",
    "No audit trail",
    "No admin controls",
    "No UK data residency",
    "No awareness of your regulatory environment",
  ],
  us: [
    "Fully private. Your data is never used for training.",
    "Configured for your industry and workflows",
    "Every interaction logged and exportable",
    "Full admin oversight and permissions",
    "Customised to your firm",
    "Designed with your regulator in mind",
  ],
};

const vsEnterprise = {
  them: [
    "US-based, US data processing",
    "Enterprise pricing, built for large organisations",
    "Months-long implementation and onboarding",
    "Black-box AI you can't inspect",
    "Your knowledge base? Not included.",
    "Designed for 1,000+ seat organisations",
  ],
  us: [
    "UK-built, UK data residency",
    "Priced for 10–200 person teams",
    "Live in days, not months",
    "Full transparency. See exactly what Marley references.",
    "Knowledge Hub is core to the product",
    "Built for the way mid-sized organisations actually work",
  ],
};

export default function WhyMarleyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,93,42,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="section-label mb-5">Why Marley</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              Not another AI chatbot.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              There are two alternatives: generic tools that weren&apos;t built for
              regulated work, and enterprise platforms that weren&apos;t built for
              organisations like yours. Marley is neither.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* vs Generic AI */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">Comparison 1 of 2</p>
            <h2 className="heading-display text-2xl sm:text-3xl mb-10">
              Marley vs Generic AI Tools
              <span className="text-text-muted text-lg font-sans font-normal ml-3">
                (ChatGPT, Copilot)
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Them */}
              <div className="bg-surface border border-border rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <span className="text-sm text-text-muted font-medium">
                    Generic AI Tools
                  </span>
                </div>
                <ul className="space-y-3">
                  {vsGeneric.them.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-text-muted mt-0.5">×</span>
                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Us */}
              <div className="bg-accent/5 border border-accent/15 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-accent font-medium">
                    Marley
                  </span>
                </div>
                <ul className="space-y-3">
                  {vsGeneric.us.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-trust mt-0.5">✓</span>
                      <span className="text-text-primary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* vs Enterprise */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">Comparison 2 of 2</p>
            <h2 className="heading-display text-2xl sm:text-3xl mb-10">
              Marley vs Enterprise Platforms
              <span className="text-text-muted text-lg font-sans font-normal ml-3">
                (large sector-specific platforms)
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Them */}
              <div className="bg-surface border border-border rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <span className="text-sm text-text-muted font-medium">
                    Enterprise Platforms
                  </span>
                </div>
                <ul className="space-y-3">
                  {vsEnterprise.them.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-text-muted mt-0.5">×</span>
                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Us */}
              <div className="bg-accent/5 border border-accent/15 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-accent font-medium">
                    Marley
                  </span>
                </div>
                <ul className="space-y-3">
                  {vsEnterprise.us.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-trust mt-0.5">✓</span>
                      <span className="text-text-primary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-display text-2xl sm:text-3xl mb-5">
              The best way to understand the difference is to see it.
            </h2>
            <p className="text-text-secondary mb-8">
              No slides, no pitch deck. Just a live walkthrough of the platform
              with your firm&apos;s use cases in mind.
            </p>
            <Link href="/contact" className="btn-accent">
              Book a Demo
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
