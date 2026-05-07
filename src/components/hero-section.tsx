"use client";

import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="px-4 pt-6">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-2 md:p-10">
        <div className="flex flex-col justify-center text-right">
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            منصة ذكية لإدارة الأدوار
          </span>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Dorak
            <span className="block text-emerald-300">دورك</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            اجعل تجربة الانتظار أكثر احترافية، وامنح عملاءك شعورًا بالثقة مع تحديثات مباشرة وتنبيهات واضحة.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button className="rounded-2xl bg-emerald-500 px-6 text-slate-950 hover:bg-emerald-400">
              ابدأ الآن
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">
              <ShieldCheck className="ml-2 h-4 w-4" />
              تجربة آمنة وسريعة
            </Button>
          </div>
        </div>
        <div className="rounded-[1.75rem] bg-white/5 p-5">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Team using Dorak"
            className="h-full min-h-72 w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;