import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Why Keystone AI — Build vs Partner",
  description:
    "You could build this yourself. Here's why the best coaching enterprises don't — time, proven patterns, specialist knowledge, and infrastructure thinking.",
};

const reasons = [
  {
    num: "01",
    title: "Time is the competitive variable",
    body: [
      "The window to move on this is 18 months. After that this becomes table stakes — something every serious coaching enterprise has — rather than a competitive advantage.",
      "Building internally means hiring. Hiring means searching, interviewing, onboarding, and waiting for people to get up to speed on your world. The realistic timeline from decision to live production system is 18 to 24 months minimum.",
      "By the time your internal team ships — the window has closed.",
    ],
  },
  {
    num: "02",
    title: "The first build is the most expensive education",
    body: [
      "Every first build makes mistakes. Wrong architecture decisions that have to be undone. Integrations that work in demos and fail in production. Systems that look right until real clients use them.",
      "Those mistakes cost time and money. An internal team making them for the first time pays full price for every lesson.",
      "We have already paid that tuition. Our patterns are proven. Our mistakes are behind us. Your build starts where others finish.",
    ],
  },
  {
    num: "03",
    title: "You are hiring for a skillset that does not know your world",
    body: [
      "The people who can build this well — AI systems architects, integrations specialists, applied machine learning engineers — are not easy to find, not cheap to hire, and not easy to manage if you have never run a technology team.",
      "And even when you find them — they know technology. They do not know coaching enterprises. They do not know your client psychology, your methodology, your niche, or what actually matters to a practice owner trying to grow their business.",
      "That learning curve is months. We bring it on day one.",
    ],
  },
  {
    num: "04",
    title: "Building it is one problem. Running it is another.",
    body: [
      "Most coaching enterprises calculate the cost of building. Few calculate the cost of running.",
      "Your infrastructure needs monitoring, improvement, and evolution — permanently. As AI develops new capabilities your systems need updating. As your client base grows your platform needs scaling. As you add new offers your infrastructure needs extending.",
      "That is a permanent internal capability that compounds in cost and complexity over time.",
      "Our operate model makes that ongoing capability a predictable monthly cost — not a growing internal team.",
    ],
  },
  {
    num: "05",
    title: "One build serves one company",
    body: [
      "An internal team builds for your coaching enterprise. Every pattern they learn, every mistake they make, every system they build — serves one company.",
      "Keystone AI builds across multiple coaching enterprises in multiple niches. Every engagement makes our playbooks deeper. Every system we build gets deployed faster on the next engagement because the architecture is already proven.",
      "The compounding knowledge base of a specialist firm is something an internal team building for one company can never replicate.",
    ],
  },
  {
    num: "06",
    title: "This is not a technology project",
    body: [
      "This is the most important one.",
      "What you are building is not a set of AI tools. It is a fundamental transformation of your business model — from a knowledge business clients graduate from into infrastructure they cannot leave.",
      "That transformation requires someone who understands both sides of it. The technology and the coaching enterprise model. The build and the strategy. The systems and the methodology.",
      "Generic technology firms understand the build. They do not understand the strategy.",
      "Coaching consultants understand the strategy. They do not understand the build.",
      "Keystone AI sits at the intersection of both. That is not a positioning statement — it is the reason we exist.",
    ],
  },
];

const tableRows = [
  ["Time to production", "18-24 months", "12-16 weeks"],
  ["Industry knowledge", "Months to learn", "Day one"],
  ["First build cost", "Full price of mistakes", "Patterns proven"],
  ["Ongoing operation", "Growing internal team", "Fixed operate model"],
  ["Knowledge base", "One company", "Compounding across niches"],
  ["Strategic vision", "Technology focus", "Transformation focus"],
  ["Client dependency", "Tools they can remove", "Infrastructure they run on"],
  ["The result", "Commoditised", "Compounding"],
];

export default function WhyKeystone() {
  return (
    <>
      <PageHero
        label="Why Keystone AI"
        title={
          <>
            You could build this yourself.
            <br />
            <span className="text-amber-accent">
              Here's why the best coaching enterprises don't.
            </span>
          </>
        }
      />

      {/* SECTION 1 — THE BUILD IT YOURSELF CASE */}
      <Section>
        <Label>The build it yourself case</Label>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Building internally isn't a bad idea. It's a reasonable one.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            You know your methodology better than anyone. You have the budget.
            You have relationships with your clients to pilot something. And
            you're rightly cautious about handing the most important strategic
            project in your business to someone outside it.
          </p>
          <p className="text-white">That instinct is correct.</p>
          <p className="text-white">Here's what changes it.</p>
        </div>
      </Section>

      {/* SECTION 2 — THE SIX REASONS */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>The reasons</Label>

        <div className="mt-12 space-y-6">
          {reasons.map((r) => (
            <div key={r.num} className="card p-8 sm:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
                <span className="font-mono text-4xl font-semibold text-amber-accent sm:text-5xl">
                  {r.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {r.title}
                  </h3>
                  <div className="mt-5 space-y-4 text-lg leading-relaxed text-white/65">
                    {r.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 3 — ALREADY STARTED */}
      <Section>
        <Label>Already started?</Label>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Some coaching enterprises have already begun building AI tools for
            their clients. That is a smart move and you are ahead of most.
          </p>
          <p>But here is the question worth sitting with.</p>
          <p>
            Can your clients remove what you have built without disrupting their
            operation? If the answer is yes — you have built tools. Useful.
            Visible. But not structural.
          </p>
          <p>
            The businesses that win this decade are not the ones with the best
            tools. They are the ones whose clients cannot imagine operating
            without them.
          </p>
          <p className="text-white">
            That is the difference between tools and infrastructure. And it is
            the difference between a business that gets commoditised and one that
            compounds.
          </p>
        </div>
      </Section>

      {/* SECTION 4 — THE DEFLATIONARY PROBLEM */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <div className="rounded-2xl border-l-2 border-amber-accent bg-white/[0.03] p-8 sm:p-12">
          <Label>The deflationary problem</Label>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            There is a deeper problem with building AI tools for your clients.
          </h2>
          <p className="mt-6 text-2xl font-semibold text-amber-accent">
            The tools get cheaper every month.
          </p>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
            <p>
              Voice AI that costs $500 per month today will cost $50 in 18
              months. Content creation tools that feel premium now are becoming
              commoditised faster than anyone predicted. Every capability you
              build into a product today will be available from a generic
              provider at a fraction of the price within two years.
            </p>
            <p className="text-white">Someone will always build a cheaper version.</p>
            <p>
              The only protection against that is not better tools or more tools.
              It is switching cost.
            </p>
            <p>
              When your system is so embedded in how a client's business operates
              — their data lives in it, their automations run through it, their
              team depends on it — a cheaper alternative becomes theoretically
              attractive but practically disruptive.
            </p>
            <p>
              They could switch. But the cost of switching outweighs the savings
              of switching.
            </p>
            <p>
              That is infrastructure thinking. And it is the only model that does
              not get competed away by the same force creating the opportunity in
              the first place.
            </p>
            <p className="text-white">
              The question is not what AI tools you build for your clients. It is
              whether your clients can remove what you build in a weekend.
            </p>
            <p>
              If they can — you are racing a tide that only goes one direction. If
              they cannot — you are compounding while everyone else commoditises.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — THE COMPARISON TABLE */}
      <Section>
        <Label>Build internally vs Keystone AI</Label>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Two paths. One comparison.
        </h2>

        {/* Desktop / tablet table */}
        <div className="mt-12 hidden overflow-hidden rounded-xl border border-white/10 md:block">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-white/[0.03]">
            <div className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-white/40" />
            <div className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Build Internally
            </div>
            <div className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-amber-accent">
              Keystone AI
            </div>
          </div>
          {tableRows.map((row, i) => (
            <div
              key={row[0]}
              className={`grid grid-cols-[1.2fr_1fr_1fr] border-t border-white/10 ${
                i % 2 === 1 ? "bg-white/[0.015]" : ""
              }`}
            >
              <div className="px-6 py-5 font-medium text-white">{row[0]}</div>
              <div className="px-6 py-5 text-white/55">{row[1]}</div>
              <div className="px-6 py-5 font-medium text-amber-accent">
                {row[2]}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {tableRows.map((row) => (
            <div key={row[0]} className="card p-5">
              <p className="font-semibold text-white">{row[0]}</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-white/40">
                    Build Internally
                  </span>
                  <span className="text-white/60">{row[1]}</span>
                </div>
                <div className="flex flex-col gap-1 border-t border-white/10 pt-3">
                  <span className="text-xs uppercase tracking-wider text-white/40">
                    Keystone AI
                  </span>
                  <span className="font-medium text-amber-accent">{row[2]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 6 — THE ONE QUESTION */}
      <section className="border-y border-white/10 py-32 sm:py-44">
        <div className="mx-auto max-w-site px-5 text-center sm:px-8">
          <p className="section-label">// The question</p>
          <div className="mx-auto mt-10 max-w-3xl space-y-8 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-4xl">
            <p>
              If you build this internally and it takes 18 months — where are
              your competitors in 18 months?
            </p>
            <p>
              And if you build it in 16 weeks —{" "}
              <span className="text-amber-accent">where are you?</span>
            </p>
          </div>
          <p className="mx-auto mt-12 max-w-xl text-lg text-white/60">
            That gap is the decision.
          </p>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-amber-accent/20 bg-gradient-to-br from-white/[0.04] to-transparent p-10 sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-accent/10 blur-3xl" />
          <Label>Start with clarity</Label>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Four weeks. A complete picture. No obligation beyond that.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            The Assessment gives you everything you need to make an informed
            decision — what to build, in what order, and what it returns.
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
