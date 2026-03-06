import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Everything your organisation needs. Nothing it doesn't. Explore Marley's full feature set, built for regulated industries from the ground up.",
};

const features = [
  {
    title: "Knowledge Hub",
    description:
      "Upload your organisation's documents, policies, and know-how. Marley references them in every answer, making your institutional knowledge accessible to everyone.",
    icon: <DatabaseIcon />,
  },
  {
    title: "Document Drafting",
    description:
      "First drafts that follow your organisation's templates, house style, and tone. Not generic AI output. Documents that sound like you.",
    icon: <FileTextIcon />,
  },
  {
    title: "Deep Research",
    description:
      "Complex questions, cited sources, your materials combined with trusted databases. Research that saves hours, not minutes.",
    icon: <SearchIcon />,
  },
  {
    title: "Contract Review",
    description:
      "Clause-by-clause analysis, risk flagging, and plain-English summaries. Review contracts faster without cutting corners.",
    icon: <ClipboardIcon />,
  },
  {
    title: "Voice Mode",
    description:
      "Dictate, ask and review hands-free. Perfect for busy professionals who think faster than they type.",
    icon: <MicIcon />,
  },
  {
    title: "Audit Trail",
    description:
      "Every interaction logged, timestamped, and exportable. Compliance is not an afterthought; it is built in.",
    icon: <ActivityIcon />,
  },
  {
    title: "Integrations",
    description:
      "Microsoft 365, your CRM, DMS, and existing tools. Marley fits into your workflow. You don't need to change it.",
    icon: <LinkIcon />,
  },
];

const steps = [
  {
    number: "01",
    title: "Onboard",
    description:
      "We configure your private environment, connect your systems, and upload your organisation's documents. Ready in days, not months.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Set permissions, customise workflows, and train Marley on your templates and house style. Tailored to your organisation, not a generic setup.",
  },
  {
    number: "03",
    title: "Go Live",
    description:
      "Your team starts using Marley immediately. We handle onboarding, support, and updates. You get the results.",
  },
];

export default function PlatformPage() {
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
            <p className="section-label mb-5">The Platform</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              Everything your organisation needs.
              <br />
              <span className="text-text-secondary">Nothing it doesn&apos;t.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Seven purpose-built features for regulated industries. All in one
              private platform, fully configured for your organisation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 60}>
                <div className="card group h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="section-label text-center mb-5">How It Works</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="heading-display text-3xl sm:text-4xl text-center mb-16">
              From sign-off to live in days.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(33.333%+1rem)] right-[calc(33.333%+1rem)] h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 120}>
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface border border-border-subtle mb-6 relative z-10">
                    <span className="font-serif text-lg font-medium text-accent">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
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
            <div className="border border-border-subtle rounded-3xl bg-surface p-12">
              <h2 className="heading-display text-2xl sm:text-3xl mb-4">
                See it in action.
              </h2>
              <p className="text-text-secondary mb-8">
                A short demo is worth a thousand slides. Let us walk you
                through the platform with your use cases in mind.
              </p>
              <Link href="/contact" className="btn-accent">
                Book a Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
