"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/systems", label: "Systems" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/why-keystone", label: "Why Keystone" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-900/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-site items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-accent text-sm font-bold text-navy-900">
            K
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Keystone <span className="text-amber-accent">AI</span>
          </span>
        </Link>

        {/* Center links — desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive(l.href)
                    ? "text-amber-accent"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-amber-accent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <Link href="/contact" className="hidden cta-primary md:inline-flex">
          Book an Assessment
        </Link>

        {/* Hamburger — mobile */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-900/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`block rounded-md px-3 py-3 text-base ${
                  isActive(l.href)
                    ? "bg-white/5 text-amber-accent"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link href="/contact" className="cta-primary w-full">
              Book an Assessment
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
