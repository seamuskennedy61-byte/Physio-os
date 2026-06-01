import Link from "next/link";
import { Section, Label, ArrowLink, Stat } from "@/components/ui";

const heroStats = [
  { value: "30 months", label: "average coaching client lifetime before churn" },
  { value: "2x", label: "how much faster AI helps clients extract value" },
  { value: "5x", label: "lifetime value difference between knowledge model and infrastructure model" },
  { value: "18 months", label: "window to move before this becomes table stakes" },
];

const problems = [
  {
    num: "01",
    title: "Your lifetime value is compressing",
    body: "Your clients are getting what they need faster than ever. AI helps them implement quicker. The knowledge that used to take 30 months to absorb now takes 15. Same monthly fee. Half the lifetime value. The business looks fine on the surface because new clients replace churning ones. But the engine is working twice as hard to stand still — and it gets harder every year as AI accelerates.",
  },
  {
    num: "02",
    title: "Your methodology is being copied",
    body: "The frameworks you spent years building. The way you coach coaches. The systems you've refined across hundreds of clients. A motivated competitor with access to your content and AI assistance can now replicate 80% of what you do in months not years. The head start you built is compressing faster than most coaching enterprise owners have realised.",
  },
];

const steps = [
  {
    num: "STEP 01",
    title: "Assess",
    meta: "4 weeks",
    body: "A hands-on diagnostic of your coaching enterprise. We map your methodology, your client journey, where lifetime value is leaking, and where your IP is most exposed. You get a complete transformation blueprint — whether you proceed with us or not.",
  },
  {
    num: "STEP 02",
    title: "Build",
    meta: "12-16 weeks",
    body: "A dedicated pod works inside your business to build the infrastructure. Not tools layered on top of your existing model — a new layer underneath it. Systems your clients depend on. Data that compounds. Infrastructure that makes leaving genuinely irrational.",
  },
  {
    num: "STEP 03",
    title: "Operate",
    meta: "Ongoing",
    body: "Once live your infrastructure needs monitoring, improvement, and evolution. Every client on the platform makes the intelligence smarter. Every month embedded makes leaving more disruptive. The value compounds continuously.",
  },
];

const systems = [
  {
    tag: "/ IMPLEMENT",
    sub: "The delivery layer",
    body: "We build the systems inside your clients' businesses. Not coaching them on what to build — building it for them. Recall systems. Performance dashboards. Hiring infrastructure. Marketing automation. Every system that runs through your platform is a reason they can't leave.",
  },
  {
    tag: "/ INTELLIGENCE",
    sub: "The AI layer",
    body: "Custom AI trained on your methodology. Predictive models that tell you which clients are at risk before they know it themselves. Network benchmarking that makes every client smarter from every other client's data. Intelligence that compounds the longer they stay.",
  },
  {
    tag: "/ COMMUNITY",
    sub: "The retention layer",
    body: "We rebuild your community from a support mechanism into the core product. Curated peer groups. Structured accountability. In person event infrastructure. The relationships that make leaving mean losing their most valuable professional network.",
  },
];

const whyUs = [
  {
    vs: "vs Generic AI firms",
    body: "They learn your industry on your budget. We already know it. We work exclusively with coaching enterprises.",
  },
  {
    vs: "vs Building it yourself",
    body: "You built a coaching business not a technology business. We built the technology so you can focus on what you do best.",
  },
  {
    vs: "vs Doing nothing",
    body: "Your clients are already implementing faster. Your competitors are already researching this. The window is 18 months.",
  },
  {
    vs: "vs Layering AI tools on top",
    body: "Tools on top of a broken model don't fix the model. We replace what's underneath.",
  },
];

const lvmKnowledge = [
  "Client extracts value. Client leaves. Repeat.",
  "Average lifetime — shrinking.",
  "Lifetime value — compressing.",
];

const lvmInfrastructure = [
  "Client embeds. Client depends. Client stays.",
  "Average lifetime — structural.",
  "Lifetime value — compounding.",
];

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-grid relative overflow-hidden border-b border-white/10 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="section-label">// The coaching operating system company</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            AI into <span className="text-amber-accent">Coaching.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            We build the infrastructure that transforms coaching enterprises from
            businesses clients graduate from into operating systems clients can't
            leave.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="cta-primary">
              Book an Assessment →
            </Link>
            <Link href="/solutions" className="cta-secondary">
              See How We Work
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-20 max-w-site px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — THE RISK NOBODY IS TALKING ABOUT */}
      <Section className="border-b border-white/10 bg-white/[0.015]">
        <Label>The risk nobody is talking about</Label>

        <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-4xl">
          Ten years to build a reputation.
          <br />
          <span className="text-amber-accent">
            One bad AI interaction to damage it.
          </span>
        </p>

        <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Most AI being built right now is built by people who learned prompt
            engineering six months ago. Vibe coders connecting tools together and
            calling it a strategy.
          </p>
          <p className="text-white">That's not what your reputation deserves.</p>
          <p>
            Keystone AI is built on serious AI engineering. Machine learning
            engineers who have shipped production systems at scale. Technical
            architects who know the difference between something that works in a
            demo and something that works at 11pm on a Sunday with no human in
            the loop.
          </p>
        </div>

        <div className="mt-14 max-w-3xl space-y-5">
          <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            We don't ship anything we wouldn't stake your reputation on.
          </p>
          <p className="text-xl leading-snug text-white/80 sm:text-2xl">
            Quality is not a feature.{" "}
            <span className="text-amber-accent">It's the foundation.</span>
          </p>
        </div>
      </Section>

      {/* SECTION 2 — THE TWO PROBLEMS */}
      <Section>
        <Label>The two problems every coaching enterprise is facing</Label>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {problems.map((p) => (
            <div key={p.num} className="card flex flex-col">
              <span className="font-mono text-sm text-amber-accent">{p.num}</span>
              <h3 className="mt-4 text-2xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-white/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION — TWO PROBLEMS. ONE PLATFORM. */}
      <Section>
        <Label>Two problems. One platform.</Label>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Most coaching enterprises are fighting on two fronts simultaneously.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Protecting what they've built — clients churning, IP being copied,
            competitors getting closer than they should be able to.
          </p>
          <p>
            And growing what they're building — leads not converting fast enough,
            clients not implementing quickly enough, coaches not performing
            consistently enough.
          </p>
          <p className="text-white">
            These aren't separate problems with separate solutions.
          </p>
          <p>
            The coaching enterprise that embeds itself into how its clients
            operate doesn't just retain them longer. It helps them get better
            results faster. Better results mean longer retention. Longer retention
            means more data. More data means smarter systems. Smarter systems mean
            better results.
          </p>
          <p className="text-white">That flywheel is what we build.</p>
        </div>

        <div className="mt-14 max-w-3xl space-y-3">
          <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            Not just infrastructure that stops clients leaving.
          </p>
          <p className="text-2xl font-semibold leading-snug tracking-tight text-amber-accent sm:text-3xl">
            Infrastructure that makes clients genuinely better — and impossible to
            leave as a result.
          </p>
        </div>
      </Section>

      {/* SECTION 3 — THE UNDERLYING ISSUE */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>The underlying issue</Label>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Both problems have the same root cause.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Your competitive advantage lives in knowledge — in documents, in
            content, in people's heads. And knowledge can be uploaded, copied,
            and replicated.
          </p>
          <p>
            The most valuable businesses in the world don't retain clients
            through great service or better content. They retain them by becoming
            infrastructure clients can't operate without.
          </p>
          <p>
            When everything in a client's business flows through your platform —
            their data, their systems, their benchmarking, their automations —
            leaving isn't just cancelling a subscription. It's dismantling their
            operation.
          </p>
          <p className="text-white">
            That's not a coaching business anymore. That's an operating system.
            And operating systems don't churn.
          </p>
        </div>
      </Section>

      {/* SECTION 4 — THE LIFETIME VALUE GAP */}
      <Section>
        <Label>The lifetime value gap</Label>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          The difference between a knowledge business and an infrastructure
          business isn't price. It's architecture.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card">
            <span className="font-mono text-sm tracking-[0.2em] text-white/50">
              KNOWLEDGE MODEL
            </span>
            <ul className="mt-6 space-y-4">
              {lvmKnowledge.map((l) => (
                <li
                  key={l}
                  className="flex gap-3 leading-relaxed text-white/65"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/30" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-amber-accent/30 bg-amber-accent/[0.04]">
            <span className="font-mono text-sm tracking-[0.2em] text-amber-accent">
              INFRASTRUCTURE MODEL
            </span>
            <ul className="mt-6 space-y-4">
              {lvmInfrastructure.map((l) => (
                <li
                  key={l}
                  className="flex gap-3 leading-relaxed text-white/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
          The gap between those two models — across your existing client base —
          is the size of the opportunity.
        </p>
      </Section>

      {/* SECTION 5 — HOW WE WORK */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>How we work</Label>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Assess. Build. Operate.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          A proven path from coaching business to coaching operating system.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="card flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-amber-accent">
                  {s.num}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
                  {s.meta}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-white/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/solutions">See full engagement detail</ArrowLink>
        </div>
      </Section>

      {/* SECTION 6 — THE SYSTEMS */}
      <Section>
        <Label>What we build</Label>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Three systems. One goal.
        </h2>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-amber-accent sm:text-3xl">
          Make leaving irrational.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {systems.map((s) => (
            <div key={s.tag} className="card flex flex-col">
              <span className="font-mono text-sm font-semibold text-amber-accent">
                {s.tag}
              </span>
              <span className="mt-1 text-sm text-white/50">{s.sub}</span>
              <p className="mt-5 flex-1 leading-relaxed text-white/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/systems">Explore the full system</ArrowLink>
        </div>
      </Section>

      {/* SECTION 7 — WHY US */}
      <Section className="border-y border-white/10 bg-white/[0.015]">
        <Label>Why Keystone AI</Label>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Built by people who understand coaching enterprises — not just AI.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
          We are not a generic AI firm that will learn your industry on your
          budget. We work exclusively with coaching enterprises. We understand
          the methodology, the client psychology, the delivery model, and the
          economics.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.vs} className="card">
              <h3 className="text-lg font-semibold text-amber-accent">{w.vs}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 8 — CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-amber-accent/20 bg-gradient-to-br from-white/[0.04] to-transparent p-10 sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-accent/10 blur-3xl" />
          <Label>The Assessment</Label>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Four weeks to clarity.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            We map your methodology, your lifetime value gap, your IP exposure,
            and exactly what needs to be built — in that order. You get
            everything you need to make an informed decision whether you proceed
            with us or not.
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
