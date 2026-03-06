import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="section-label mb-4">404</p>
      <h1 className="heading-display text-4xl sm:text-5xl mb-5">
        Page not found.
      </h1>
      <p className="text-text-secondary mb-10 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved or been
        removed.
      </p>
      <Link href="/" className="btn-accent">
        Back to Home
      </Link>
    </section>
  );
}
