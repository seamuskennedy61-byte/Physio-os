import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, PageHero } from "@/components/ui";
import PlaybookGrid from "./PlaybookGrid";

export const metadata: Metadata = {
  title: "Playbooks — Keystone AI",
  description:
    "Pre-built operating systems for the niches we know. Deployed in weeks not months.",
};

const progression = [
  {
    label: "Start",
    body: "Deploy the highest value system first. Prove the infrastructure model with a pilot group of clients.",
  },
  {
    label: "Embed",
    body: "Roll out across your full client base. Data starts accumulating. Benchmarking becomes meaningful.",
  },
  {
    label: "Compound",
    body: "Add intelligence layer. Predictive models. Network benchmarking. Switching cost becomes structural.",
  },
  {
    label: "Own",
    body: "Full infrastructure model. Clients can't leave. Lifetime value transforms. Niche is yours.",
  },
];

export default function Playbooks() {
  return (
    <>
      <PageHero
        label="Playbooks"
        title="Pre-built for the niches we know."
        intro="We don't start from zero for every coaching enterprise. We've mapped the highest value systems for the most common coaching niches and pre-built the core infrastructure. Your engagement deploys faster because the patterns are already proven."
      />

      <Section>
        <PlaybookGrid />
      </Section>

      {/* PROGRESSION */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>Recommended progression</Label>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          From pilot to structural moat.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {progression.map((p, i) => (
            <div key={p.label} className="card flex flex-col">
              <span className="font-mono text-sm text-amber-accent">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{p.label}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl border border-amber-accent/20 bg-gradient-to-br from-white/[0.04] to-transparent p-10 sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Which playbooks fit your coaching enterprise?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/65">
            The Assessment maps the highest value systems for your niche and your
            client base.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="cta-primary">
              Which playbooks fit your coaching enterprise? →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
