import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — Keystone AI",
  description:
    "Built by people who understand coaching enterprises — not just AI. The mission, the distinction, the pod model, and what we believe.",
};

const distinctions = [
  {
    vs: "vs Generic AI firms",
    body: "They learn your industry on your budget. We already know it.",
  },
  {
    vs: "vs Consultancies",
    body: "We build working infrastructure not strategy decks.",
  },
  {
    vs: "vs Hiring internally",
    body: "12 weeks to live systems versus 12-18 months building a team.",
  },
  {
    vs: "vs Doing nothing",
    body: "The window is 18 months. Your competitors aren't waiting.",
  },
  {
    vs: "vs Layering tools on top",
    body: "Tools on top of a broken model don't fix the model.",
  },
];

const pod = [
  {
    num: "01",
    role: "Engagement Lead",
    body: "relationship, delivery ownership, transformation blueprint",
  },
  {
    num: "02",
    role: "AI Systems Builder",
    body: "agents, automations, workflows, coaching AI",
  },
  {
    num: "03",
    role: "Integrations Specialist",
    body: "your systems connected to your clients' systems",
  },
  {
    num: "04",
    role: "Systems Designer",
    body: "your methodology turned into operational infrastructure",
  },
];

const beliefs = [
  "Knowledge businesses are becoming commodity businesses",
  "Infrastructure businesses are becoming the most valuable businesses",
  "The coaching enterprises that move first will own their niche for a decade",
  "Quality of build matters more than speed of build",
  "The goal is not to make clients dependent — it's to make staying genuinely the rational choice",
  "Methodology is the foundation — infrastructure is what makes it defensible",
];

export default function About() {
  return (
    <>
      <PageHero
        label="About"
        title="Built by people who understand coaching enterprises — not just AI."
      />

      {/* MISSION */}
      <Section>
        <Label>The mission</Label>
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Coaching enterprises built some of the most valuable niche knowledge
            businesses in the world. Deep methodology. Trusted relationships.
            Proven frameworks for specific industries.
          </p>
          <p className="text-white">
            AI didn't destroy that value. It changed where the value lives.
          </p>
          <p>
            The methodology is still the foundation. The frameworks still work.
            But knowledge alone is no longer defensible. The businesses that
            survive and compound are the ones that embed their IP into
            infrastructure their clients can't leave.
          </p>
          <p>
            We built Keystone AI to make that transition possible — for coaching
            enterprises serious about owning their niche for the next decade.
          </p>
        </div>
      </Section>

      {/* DISTINCTION */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>The distinction</Label>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {distinctions.map((d) => (
            <div key={d.vs} className="card">
              <h3 className="text-lg font-semibold text-amber-accent">{d.vs}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POD MODEL */}
      <Section>
        <Label>How we deliver — The Pod Model</Label>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          Every engagement is delivered by a dedicated cross-functional pod. Four
          specialists working as a unit inside your business. The Engagement Lead
          is always ours — non-negotiable. We own delivery outcomes not
          timesheets. We measure success by the switching cost we create for your
          clients.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
      </Section>

      {/* BELIEFS */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>What we believe</Label>
        <div className="mt-10">
          {beliefs.map((b, i) => (
            <div
              key={b}
              className="flex items-baseline gap-5 border-t border-white/10 py-6"
            >
              <span className="font-mono text-sm text-amber-accent">
                0{i + 1}
              </span>
              <p className="text-lg font-medium leading-relaxed sm:text-xl">
                {b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM PLACEHOLDER */}
      <Section>
        <Label>The team</Label>
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-12 text-center">
          <p className="text-white/40">[ Team section coming soon ]</p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <div className="rounded-2xl border border-amber-accent/20 bg-gradient-to-br from-white/[0.04] to-transparent p-10 sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Own your niche for the next decade.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/65">
            Start with a four-week Assessment.
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
