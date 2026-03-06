import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo with Marley. We'll walk you through the platform and answer your questions. No pressure.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(184,93,42,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="section-label mb-5">Get in Touch</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="heading-display text-4xl sm:text-5xl mb-5">
              Let&apos;s talk.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg leading-relaxed">
              No pressure. We&apos;ll walk you through the platform for your
              industry and answer your questions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form section */}
      <section className="py-12 px-6 pb-32">
        <div className="max-w-xl mx-auto">
          <FadeIn delay={100}>
            <div className="bg-surface border border-border rounded-3xl p-8 sm:p-12">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 text-center">
              <p className="text-text-muted text-sm">
                We typically respond within 24 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
