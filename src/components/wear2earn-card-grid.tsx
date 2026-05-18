"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CardItem = {
  title: string;
  subtitle: string;
  price?: string;
  meta: string;
  accent: string;
};

type Wear2EarnCardGridProps = {
  items: CardItem[];
  ctaLabel: string;
  variant: "products" | "plans";
};

export function Wear2EarnCardGrid({
  items,
  ctaLabel,
  variant,
}: Wear2EarnCardGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
        >
          <div
            className={cn(
              "rounded-[1.2rem] p-4",
              variant === "products"
                ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]"
                : "bg-[linear-gradient(180deg,rgba(163,230,53,0.14),rgba(255,255,255,0.04))]",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge className="border border-lime-400/20 bg-black/40 text-lime-300 hover:bg-black/40">
                  {item.meta}
                </Badge>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{item.subtitle}</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-lime-300">
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span
                      key={index}
                      className={cn(
                        "h-2 w-2 rounded-[3px]",
                        index % 2 === 0 ? "bg-lime-400" : "bg-white/15",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div>
              {item.price ? (
                <p className="text-2xl font-black text-white">{item.price}</p>
              ) : (
                <p className="text-2xl font-black text-white">{item.accent}</p>
              )}
            </div>
            <Button className="rounded-full bg-lime-400 text-black hover:bg-lime-300">
              {ctaLabel}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}