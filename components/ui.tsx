import Link from "next/link";
import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-site px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="section-label">// {children}</p>;
}

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="link-arrow">
      {children} <span aria-hidden>→</span>
    </Link>
  );
}

export function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-l border-amber-accent/40 pl-5">
      <span className="text-3xl font-semibold tracking-tight text-amber-accent sm:text-4xl">
        {value}
      </span>
      <span className="text-sm leading-relaxed text-white/60">{label}</span>
    </div>
  );
}

export function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="bg-grid border-b border-white/10 pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Label>{label}</Label>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function NumberedItem({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-5 border-t border-white/10 py-7">
      <span className="font-mono text-sm text-amber-accent">{num}</span>
      <div className="flex-1">
        <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/60">
          {children}
        </p>
      </div>
    </div>
  );
}

export function Gate({ n, text }: { n: string; text: string }) {
  return (
    <div className="card flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-amber-accent/50 font-mono text-xs text-amber-accent">
        {n}
      </span>
      <span className="text-sm leading-relaxed text-white/80">{text}</span>
    </div>
  );
}
