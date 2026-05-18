"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ScanLine } from "lucide-react";

type Wear2EarnHeroProps = {
  language: "ar" | "en";
  onPrimaryAction: () => void;
};

export function Wear2EarnHero({ language, onPrimaryAction }: Wear2EarnHeroProps) {
  const copy = {
    ar: {
      badge: "مزيج بين الأزياء والربح الذكي",
      title: "حوّل تيشيرتك إلى مصدر دخل",
      description:
        "Wear2Earn يجعل كل تيشيرت قناة بيع وعمولات خاصة به عبر QR Code فريد، بتجربة بسيطة وسريعة ومناسبة لمتاجر streetwear الحديثة.",
      cta: "ابدأ الآن",
      secondary: "استعرض المنتجات",
    },
    en: {
      badge: "Fashion meets smart earnings",
      title: "Turn your T-shirt into an income stream",
      description:
        "Wear2Earn turns every T-shirt into a unique QR-powered sales channel with a clean, modern experience built for streetwear and simple affiliate growth.",
      cta: "Get started",
      secondary: "Browse products",
    },
  }[language];

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-center">
        <Badge className="mb-5 w-fit border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-lime-300 hover:bg-lime-400/10">
          {copy.badge}
        </Badge>
        <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
          {copy.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={onPrimaryAction}
            className="h-12 rounded-full bg-lime-400 px-6 text-sm font-bold text-black hover:bg-lime-300"
          >
            {copy.cta}
            <ArrowRight className="mr-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-full border-white/10 bg-white/5 px-6 text-sm font-medium text-white hover:bg-white/10 hover:text-white"
          >
            {copy.secondary}
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[2rem] bg-lime-400/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-lime-400/10">
          <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="min-h-[420px] rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(163,230,53,0.18),_transparent_42%),linear-gradient(180deg,#131313,#090909)] p-5">
              <div className="flex items-center justify-between text-xs text-white/45">
                <span>Wear2Earn / Drop 01</span>
                <span>QR Enabled</span>
              </div>
              <div className="mt-6 flex h-[340px] items-center justify-center rounded-[1.25rem] border border-dashed border-white/10 bg-black/40">
                <div className="relative h-64 w-48 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-lg">
                  <div className="absolute left-1/2 top-6 h-6 w-24 -translate-x-1/2 rounded-full bg-white/10" />
                  <div className="mt-6 h-48 rounded-[1.2rem] bg-[linear-gradient(180deg,#f3f4f6,#d1d5db)]">
                    <div className="flex h-full flex-col items-center justify-end gap-3 pb-5">
                      <div className="flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[10px] font-semibold text-lime-400">
                        <ScanLine className="h-3 w-3" />
                        QR CODE
                      </div>
                      <div className="grid grid-cols-5 gap-1 rounded-xl bg-white p-2">
                        {Array.from({ length: 25 }).map((_, index) => (
                          <span
                            key={index}
                            className={`h-2 w-2 rounded-[3px] ${index % 3 === 0 ? "bg-black" : "bg-transparent"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-lime-300/80">
                  Live stats
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    ["Revenue", "$12.8K"],
                    ["Clicks", "3.4K"],
                    ["Orders", "289"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                    >
                      <span className="text-sm text-white/55">{label}</span>
                      <span className="text-lg font-bold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-lime-400/20 bg-lime-400/10 p-5 text-white">
                <p className="text-sm font-medium text-lime-300">Affiliate flow</p>
                <p className="mt-2 text-sm leading-7 text-white/80">
                  Every scan opens a personalized page with purchase, signup,
                  and your own QR-generated referral link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}