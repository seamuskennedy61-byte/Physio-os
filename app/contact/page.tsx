import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book an Assessment — Keystone AI",
  description:
    "Four weeks to clarity. Book your Assessment and get a complete transformation blueprint for your coaching enterprise.",
};

const reassurances = [
  "Four weeks to a complete transformation blueprint",
  "Everything you need to make an informed decision — whether you proceed with us or not",
  "Prioritised build roadmap and validated business case",
];

export default function Contact() {
  return (
    <>
      <PageHero
        label="Get started"
        title="Book an Assessment."
        intro="Four weeks to clarity on where your business is heading and what to build. Tell us a little about your coaching enterprise and we'll be in touch."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left rail */}
          <div>
            <p className="section-label">// What you get</p>
            <ul className="mt-6 space-y-4">
              {reassurances.map((r) => (
                <li key={r} className="flex gap-3 leading-relaxed text-white/70">
                  <span className="mt-1 text-amber-accent">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
