import Link from "next/link";

const cols = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/solutions", label: "Solutions" },
      { href: "/contact", label: "Book an Assessment" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/systems", label: "Systems" },
      { href: "/playbooks", label: "Playbooks" },
      { href: "/solutions", label: "How We Work" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="mx-auto max-w-site px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-accent text-sm font-bold text-navy-900">
                K
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Keystone <span className="text-amber-accent">AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              The coaching operating system company. We assess, build, and
              operate the AI systems that transform coaching enterprises.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="section-label mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-amber-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h4 className="section-label mb-4">Get Started</h4>
            <p className="mb-4 text-sm text-white/60">
              Four weeks to clarity.
            </p>
            <Link href="/contact" className="cta-primary">
              Book an Assessment
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Keystone AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-white/70">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
