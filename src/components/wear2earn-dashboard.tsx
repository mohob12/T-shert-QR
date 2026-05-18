"use client";

import { Badge } from "@/components/ui/badge";

type Wear2EarnDashboardProps = {
  language: "ar" | "en";
};

export function Wear2EarnDashboard({ language }: Wear2EarnDashboardProps) {
  const copy = {
    ar: {
      title: "لوحة التحكم",
      stats: [
        ["الأرباح", "$2,480"],
        ["الزيارات", "18.2K"],
        ["الطلبات", "316"],
      ],
      qrTitle: "QR Code الخاص بك",
    },
    en: {
      title: "Dashboard",
      stats: [
        ["Revenue", "$2,480"],
        ["Visits", "18.2K"],
        ["Orders", "316"],
      ],
      qrTitle: "Your personal QR Code",
    },
  }[language];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{copy.title}</h3>
          <Badge className="border border-lime-400/20 bg-lime-400/10 text-lime-300 hover:bg-lime-400/10">
            Live
          </Badge>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {copy.stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/35 p-4"
            >
              <p className="text-sm text-white/50">{label}</p>
              <p className="mt-2 text-2xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-lime-400/20 bg-lime-400/10 p-5">
        <h3 className="text-xl font-bold text-white">{copy.qrTitle}</h3>
        <div className="mt-5 flex items-center justify-center rounded-[1.25rem] border border-white/10 bg-black/40 p-5">
          <div className="grid grid-cols-8 gap-1 rounded-2xl bg-white p-4">
            {Array.from({ length: 64 }).map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 rounded-[2px] ${index % 3 === 0 || index % 5 === 0 ? "bg-black" : "bg-transparent"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}