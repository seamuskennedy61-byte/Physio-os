import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, PageHero, Gate } from "@/components/ui";

export const metadata: Metadata = {
  title: "Solutions — Keystone AI",
  description:
    "Assess. Build. Operate. A hands-on diagnostic, a dedicated build pod, and ongoing operation that compounds.",
};

const entryPoints = [
  {
    tag: "Entry Point A",
    quote:
      "Our clients are getting what they need faster and leaving earlier than they used to",
    body: "You can feel the lifetime value compressing even if you haven't put a number on it yet. Clients are more capable, implementing faster, and staying for less time. The knowledge model is losing its hold.",
  },
  {
    tag: "Entry Point B",
    quote:
      "We know our methodology is being copied and we're not sure how to protect it",
    body: "Coaches who've been through your system are replicating it. Competitors are getting closer faster than they should be able to. The head start you built is narrowing.",
  },
];

const assessExamine = [
  "Full audit of your methodology, frameworks, and IP exposure",
  "Client lifetime value mapping — where value is being extracted and where clients disengage",
  "Delivery audit — what your coaches spend time on that AI and systems should handle",
  "Competitive audit — who is replicating your methodology and how close they are",
  "Technology audit — what exists, what connects, what's missing",
  "Infrastructure gap — the distance between your current model and one clients can't leave",
];

const assessGet = [
  "Complete map of your lifetime value gap — the difference between your current model and the infrastructure model",
  "IP exposure report — where your methodology is most vulnerable to replication",
  "Prioritised build roadmap — what to build first, second, third",
  "Business case — what the infrastructure model generates versus the current model",
  "Transformation blueprint — ready to share with your leadership team",
];

const assessGates = [
  "Methodology and IP mapped",
  "Client journey documented",
  "Build roadmap prioritised",
  "Business case validated",
];

const pod = [
  {
    num: "01",
    role: "Engagement Lead",
    body: "coaching enterprise expertise, relationship ownership, transformation blueprint",
  },
  {
    num: "02",
    role: "AI Systems Builder",
    body: "agents, automations, workflows, coaching AI trained on your methodology",
  },
  {
    num: "03",
    role: "Integrations Specialist",
    body: "connects your infrastructure to the tools your clients already use",
  },
  {
    num: "04",
    role: "Systems Designer",
    body: "translates your methodology into operational infrastructure and AI logic",
  },
];

const buildGates = [
  "Architecture signed off",
  "Systems tested against real client scenarios",
  "Pilot validated with live clients",
  "Full rollout ready",
];

const operateList = [
  "System monitoring and performance management",
  "Continuous improvement based on client data",
  "New system builds as your offer evolves",
  "Quarterly strategic reviews",
  "Network intelligence — what's working across your client base feeds back into every client's system",
];

const compounding = [
  {
    label: "1st client on the platform",
    body: "infrastructure built, patterns established, methodology embedded",
  },
  {
    label: "Months 6-12",
    body: "client data accumulating, benchmarking becoming meaningful, switching cost growing",
  },
  {
    label: "Year 2+",
    body: "leaving becomes genuinely disruptive, lifetime value expanding, network intelligence compounding",
  },
  {
    label: "Year 3+",
    body: "infrastructure is structural, churn approaches single digits, lifetime value transforms",
  },
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-white/70">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-accent" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function PhaseHeader({
  step,
  title,
  meta,
  intro,
}: {
  step: string;
  title: string;
  meta: string;
  intro: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap items-center gap-4">
        <span className="font-mono text-sm tracking-[0.2em] text-amber-accent">
          {step}
        </span>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
          {meta}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
        {intro}
      </p>
    </div>
  );
}

export default function Solutions() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Assess. Build. Operate."
        intro="A proven path from coaching business to coaching operating system — whatever stage you're starting from."
      />

      {/* ENTRY POINTS */}
      <Section>
        <Label>Where you are now</Label>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          Two entry points. One destination.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {entryPoints.map((e) => (
            <div key={e.tag} className="card">
              <span className="font-mono text-xs tracking-[0.2em] text-amber-accent">
                {e.tag}
              </span>
              <p className="mt-4 text-xl font-semibold leading-snug">
                &ldquo;{e.quote}&rdquo;
              </p>
              <p className="mt-4 leading-relaxed text-white/60">{e.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ASSESS */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <PhaseHeader
          step="Assess"
          meta="4 weeks"
          title="A transformation blueprint — not a strategy deck."
          intro="A hands-on diagnostic of your coaching enterprise."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 text-lg font-semibold">What we examine</h3>
            <List items={assessExamine} />
          </div>
          <div>
            <h3 className="mb-5 text-lg font-semibold">What you get</h3>
            <List items={assessGet} />
          </div>
        </div>

        <blockquote className="mt-12 border-l-2 border-amber-accent pl-6 text-xl font-medium italic leading-relaxed text-white/80">
          You get everything you need to make an informed decision — whether you
          proceed with us or not.
        </blockquote>

        <div className="mt-12">
          <h3 className="mb-5 text-lg font-semibold">Four gates</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assessGates.map((g, i) => (
              <Gate key={g} n={`${i + 1}`} text={g} />
            ))}
          </div>
        </div>
      </Section>

      {/* BUILD */}
      <Section>
        <PhaseHeader
          step="Build"
          meta="12-16 weeks"
          title="A dedicated pod, building inside your business."
          intro="A dedicated pod works inside your business to build the systems that transform your delivery model."
        />

        <h3 className="mb-5 text-lg font-semibold">The Pod</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {pod.map((p) => (
            <div key={p.num} className="card flex gap-4">
              <span className="font-mono text-sm text-amber-accent">{p.num}</span>
              <div>
                <h4 className="font-semibold">{p.role}</h4>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-lg font-semibold">Four gates</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {buildGates.map((g, i) => (
              <Gate key={g} n={`${i + 1}`} text={g} />
            ))}
          </div>
        </div>
      </Section>

      {/* OPERATE */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <PhaseHeader
          step="Operate"
          meta="Ongoing"
          title="Live systems that monitor, improve, and evolve."
          intro="Once live your systems need monitoring, improvement, and evolution."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              What ongoing looks like
            </h3>
            <List items={operateList} />
          </div>
          <div>
            <h3 className="mb-5 text-lg font-semibold">The compounding effect</h3>
            <div className="space-y-4">
              {compounding.map((c) => (
                <div key={c.label} className="card">
                  <span className="font-mono text-sm font-semibold text-amber-accent">
                    {c.label}
                  </span>
                  <p className="mt-1 leading-relaxed text-white/65">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl border border-amber-accent/20 bg-gradient-to-br from-white/[0.04] to-transparent p-10 sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Start with the Assessment.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/65">
            Four weeks to a complete transformation blueprint for your coaching
            enterprise.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="cta-primary">
              Book an Assessment →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
