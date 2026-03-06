import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Your clients trust you. You can trust Marley. AES-256 encryption, GDPR compliance and regulatory alignment built in from day one.",
};

const securityFeatures = [
  {
    title: "Security, End to End",
    description:
      "Marley is built with security across every layer: infrastructure, product, and operations. Robust protections, continuous monitoring, and full visibility from ingestion to output.",
    icon: <ShieldIcon />,
  },
  {
    title: "Data Sovereignty",
    description:
      "You decide what data enters Marley, where it lives, and when it is deleted. All data is stored within your chosen region, and retention is fully under your control.",
    icon: <LockIcon />,
  },
  {
    title: "No Model Training",
    description:
      "Marley contractually guarantees your data stays yours. Your inputs, outputs, and documents are never used to train or improve any underlying model.",
    icon: <ShieldOffIcon />,
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(122,158,126,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="section-label mb-5">Security</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              Your clients trust you.
              <br />
              <span className="italic text-trust">You can trust Marley.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Security and compliance are not features we added; they are the
              foundation. Every aspect of Marley was designed around the
              regulatory reality of your industry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Security grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5">
            {securityFeatures.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 50}>
                <div className="bg-surface border border-border rounded-2xl p-6 hover:border-trust/30 transition-all duration-300 h-full">
                  <div className="w-9 h-9 rounded-lg bg-trust/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-base font-medium text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-display text-2xl sm:text-3xl mb-4">
              Want to walk your compliance team through our architecture?
            </h2>
            <p className="text-text-secondary mb-8">
              We&apos;re happy to do a technical deep-dive with your CISO, DPO, or
              compliance team. Let&apos;s talk.
            </p>
            <Link href="/contact" className="btn-accent">
              Let&apos;s Talk
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ShieldOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  );
}
