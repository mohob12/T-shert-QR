"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "شهريًا",
    features: ["صفحة انتظار واحدة", "إدارة بسيطة للطابور", "QR Code أساسي"],
    cta: "ابدأ مجانًا",
  },
  {
    name: "Premium",
    price: "$19",
    period: "شهريًا",
    features: ["كل مزايا Free", "تنبيهات متقدمة", "QR قابل للتحميل", "دعم أفضل للعلامة التجارية"],
    cta: "اختر Premium",
    highlighted: true,
  },
  {
    name: "تجربة مجانية",
    price: "$0",
    period: "لمدة 3 أيام",
    features: ["كل مزايا Premium", "بدون التزام", "جربه بثقة قبل الاشتراك"],
    cta: "ابدأ التجربة",
  },
];

const PricingSection = () => {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-emerald-600">أسعار واضحة ومناسبة</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">اختر الخطة التي تناسب نشاطك</h2>
          <p className="mt-3 text-slate-600">Dorak يمنحك تجربة بسيطة واحترافية لإدارة الأدوار بثقة وسهولة.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`rounded-3xl border bg-white shadow-sm ${
                plan.highlighted ? "border-emerald-400 ring-1 ring-emerald-200" : "border-slate-200"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-right text-2xl">{plan.name}</CardTitle>
                <div className="text-right">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="mr-2 text-sm text-slate-500">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-right text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start justify-end gap-2">
                      <span>{feature}</span>
                      <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-2xl">{plan.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;