"use client";

import { cn } from "@/lib/utils";

type Wear2EarnSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

export function Wear2EarnSection({
  eyebrow,
  title,
  description,
  children,
  className,
}: Wear2EarnSectionProps) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8", className)}>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-300/80">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-white/60">{description}</p>
      </div>
      {children}
    </section>
  );
}