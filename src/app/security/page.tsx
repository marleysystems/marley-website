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
    title: "UK Data Residency",
    description:
      "All data stored and processed within UK Azure regions. Your client data never leaves the United Kingdom.",
    icon: <MapPinIcon />,
  },
  {
    title: "AES-256 Encryption",
    description:
      "Encrypted at rest using AES-256. All data in transit protected by TLS 1.3. Industry-standard, independently verified.",
    icon: <KeyIcon />,
  },
  {
    title: "Tenant Isolation",
    description:
      "Complete application-layer separation between organisations. Your environment is yours alone, with no shared infrastructure risks.",
    icon: <LayersIcon />,
  },
  {
    title: "Access Controls",
    description:
      "Role-based permissions, SSO integration, and MFA as standard. Full admin oversight of who accesses what.",
    icon: <UsersIcon />,
  },
  {
    title: "Audit & Logging",
    description:
      "Every interaction timestamped, logged, and exportable. Full visibility for compliance teams, with no black boxes.",
    icon: <ClockIcon />,
  },
  {
    title: "GDPR Compliance",
    description:
      "Data minimisation by design, right to deletion, full data processing records. GDPR is not a checkbox; it is how we built the platform.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Regulatory Alignment",
    description:
      "Designed with your regulator in mind: SRA, FCA, CQC, ICO and more. We understand the compliance context your sector operates in.",
    icon: <BookIcon />,
  },
  {
    title: "No Training on Your Data",
    description:
      "Your documents, queries, and interactions are never used to train AI models. Not now, not ever. Full stop.",
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
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
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
