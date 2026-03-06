"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const values = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      organisation: (data.get("organisation") as string)?.trim(),
      teamSize: data.get("teamSize") as string,
      industry: data.get("industry") as string,
      message: (data.get("message") as string)?.trim(),
    };

    const newErrors: Record<string, string> = {};
    if (!values.name) newErrors.name = "Please enter your name.";
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      newErrors.email = "Please enter a valid email address.";
    if (!values.organisation) newErrors.organisation = "Please enter your organisation name.";
    if (!values.teamSize) newErrors.teamSize = "Please select your team size.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setState("submitting");

    const result = await submitContact(data);
    setState(result.ok ? "success" : "error");
  }

  if (state === "error") {
    return (
      <div className="text-center py-8">
        <p className="text-text-primary font-medium mb-2">Something went wrong.</p>
        <p className="text-text-secondary text-sm mb-6">
          Please try again or email us directly at{" "}
          <a href="mailto:info@marleysystems.co.uk" className="text-accent hover:underline">
            info@marleysystems.co.uk
          </a>
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-sm text-text-secondary hover:text-accent transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-trust/15 flex items-center justify-center mx-auto mb-5">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4A7A4E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
          We&apos;ll be in touch.
        </h3>
        <p className="text-text-secondary text-sm">
          Thanks for reaching out. We typically respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Full name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          required
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@smithco.co.uk"
          required
          error={errors.email}
        />
      </div>

      <Field
        label="Organisation name"
        name="organisation"
        type="text"
        placeholder="Your Organisation"
        required
        error={errors.organisation}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-text-secondary mb-2 tracking-wide">
            Team size <span className="text-accent">*</span>
          </label>
          <select
            name="teamSize"
            className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200 appearance-none cursor-pointer ${
              errors.teamSize
                ? "border-red-500/50"
                : "border-border hover:border-accent-subtle/60"
            }`}
            defaultValue=""
          >
            <option value="" disabled>Select team size</option>
            <option value="1-10">1–10 people</option>
            <option value="10-50">10–50 people</option>
            <option value="50-200">50–200 people</option>
            <option value="200+">200+ people</option>
          </select>
          {errors.teamSize && (
            <p className="mt-1 text-xs text-red-400">{errors.teamSize}</p>
          )}
        </div>

        <div>
          <label className="block text-xs text-text-secondary mb-2 tracking-wide">
            Industry
          </label>
          <select
            name="industry"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200 appearance-none cursor-pointer hover:border-accent-subtle/60"
            defaultValue=""
          >
            <option value="" disabled>Select industry</option>
            <option value="legal">Legal</option>
            <option value="healthcare">Healthcare</option>
            <option value="insurance">Insurance</option>
            <option value="automotive">Automotive</option>
            <option value="financial-services">Financial Services</option>
            <option value="hr-employment">HR &amp; Employment</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs text-text-secondary mb-2 tracking-wide">
          Message{" "}
          <span className="text-text-muted">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Anything specific you'd like to cover in the demo?"
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200 resize-none hover:border-accent-subtle/60"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-accent w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {state === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          "Book My Demo"
        )}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
}

function Field({ label, name, type, placeholder, required, error }: FieldProps) {
  return (
    <div>
      <label className="block text-xs text-text-secondary mb-2 tracking-wide">
        {label}{" "}
        {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200 hover:border-accent-subtle/40 ${
          error ? "border-red-500/50" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
