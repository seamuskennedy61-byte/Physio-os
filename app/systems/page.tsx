import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Systems — Keystone AI",
  description:
    "Three systems designed for coaching enterprises and built inside your business: Implement, Intelligence, Community.",
};

const systems = [
  {
    tag: "/ IMPLEMENT",
    headline: "Do the work",
    intro:
      "The layer that replaces what your coaches shouldn't be doing and delivers what your clients actually need — built systems inside their business, not more frameworks to implement themselves.",
    layers: [
      {
        name: "Practice Infrastructure",
        body: "recall systems, marketing automation, hiring processes, financial dashboards built and running inside client businesses",
      },
      {
        name: "Delivery Automation",
        body: "onboarding, accountability touchpoints, follow up, progress tracking — automated and consistent",
      },
      {
        name: "Performance Intelligence",
        body: "live dashboards showing every client's metrics against the framework benchmarks",
      },
    ],
  },
  {
    tag: "/ INTELLIGENCE",
    headline: "Know everything",
    intro:
      "Custom AI trained on your methodology, your language, and your client data. Not generic AI — your AI.",
    layers: [
      {
        name: "Methodology AI",
        body: "an always-on version of your coaching frameworks available to every client 24/7",
      },
      {
        name: "Predictive Models",
        body: "which clients are at risk of churning, which practices are underperforming, where to intervene before problems become cancellations",
      },
      {
        name: "Network Intelligence",
        body: "what's working across your entire client base, surfaced as insights for every client and every coach",
      },
    ],
  },
  {
    tag: "/ COMMUNITY",
    headline: "Make leaving impossible",
    intro:
      "We rebuild your community from a support mechanism into the core product. The peer relationships become the reason clients stay.",
    layers: [
      {
        name: "Peer Infrastructure",
        body: "curated cohorts, structured peer accountability, facilitated connections between clients at the same stage",
      },
      {
        name: "Event Architecture",
        body: "in-person event design and infrastructure that makes the annual gathering the flagship product",
      },
      {
        name: "Alumni and Advancement",
        body: "clear progression from entry level to elite, status and belonging at every stage",
      },
    ],
  },
];

export default function Systems() {
  return (
    <>
      <PageHero
        label="Systems"
        title={
          <>
            Three systems. One goal.
            <br />
            <span className="text-amber-accent">Make leaving irrational.</span>
          </>
        }
        intro="Not tools layered on top of your existing model. Infrastructure built underneath it. The difference is whether clients can remove you without dismantling their operation. Our systems are designed so they can't."
      />

      {systems.map((s, idx) => (
        <Section
          key={s.tag}
          className={
            idx % 2 === 1 ? "border-y border-white/10 bg-white/[0.015]" : ""
          }
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-5">
            <span className="font-mono text-xl font-semibold text-amber-accent">
              {s.tag}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {s.headline}
            </h2>
          </div>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
            {s.intro}
          </p>

          <div className="mt-10">
            <p className="section-label mb-6">Three layers</p>
            <div className="grid gap-6 lg:grid-cols-3">
              {s.layers.map((l) => (
                <div key={l.name} className="card flex flex-col">
                  <h3 className="text-lg font-semibold">{l.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-white/60">
                    {l.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* SITS ON TOP */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>Sits on top of what your clients already use</Label>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          We don't replace your clients' existing software. We connect everything
          into one place.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65">
          Whatever practice management software, CRM, or operational tool your
          clients use — our infrastructure sits above it and becomes the single
          place everything flows through. Your clients keep what they have. They
          just can't imagine operating without what you've added on top.
        </p>
      </Section>

      {/* NOT EVERY CLIENT */}
      <Section>
        <div className="rounded-2xl border border-amber-accent/20 bg-gradient-to-br from-white/[0.04] to-transparent p-10 sm:p-14">
          <Label>Not every client needs all three systems immediately</Label>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            The Assessment determines which systems are critical, which you
            already have in some form, and which can wait. Most first engagements
            focus on Implement and Intelligence before rebuilding Community.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="cta-primary">
              Find out which systems you need →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
