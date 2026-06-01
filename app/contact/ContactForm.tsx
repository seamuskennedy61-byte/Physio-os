"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired up — surface a success state.
    // The collected values are available in `data` for future integration.
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // eslint-disable-next-line no-console
    console.log("Assessment request:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-amber-accent/30 bg-white/[0.03] p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-accent text-xl text-navy-900">
          ✓
        </div>
        <h2 className="mt-6 text-2xl font-semibold">Request received.</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-white/60">
          Thanks for reaching out. We&rsquo;ll be in touch within one business day
          to schedule your Assessment.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-md border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-amber-accent focus:outline-none focus:ring-1 focus:ring-amber-accent";
  const labelClass = "mb-2 block text-sm font-medium text-white/80";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Your coaching enterprise"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="clients" className={labelClass}>
            Number of clients
          </label>
          <input
            id="clients"
            name="clients"
            type="number"
            min="0"
            placeholder="e.g. 120"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="revenue" className={labelClass}>
            Monthly revenue per client
          </label>
          <input
            id="revenue"
            name="revenue"
            type="text"
            placeholder="e.g. $2,000"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your coaching enterprise and where you are with AI."
          className={fieldClass}
        />
      </div>

      <button type="submit" className="cta-primary w-full sm:w-auto">
        Book an Assessment →
      </button>
    </form>
  );
}
