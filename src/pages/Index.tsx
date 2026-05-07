"use client";

import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 text-right">
      <HeroSection />

      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-bold text-slate-900">تسجيل أصحاب الأعمال</h2>
              <p className="text-sm leading-7 text-slate-600">
                أنشئ حسابك وابدأ خلال دقائق، ثم احصل على لوحة تحكم خاصة بنشاطك.
              </p>
              <div className="grid gap-3">
                <Input placeholder="اسم النشاط التجاري" className="rounded-2xl" />
                <Input placeholder="البريد الإلكتروني" className="rounded-2xl" />
                <Input placeholder="كلمة المرور" type="password" className="rounded-2xl" />
              </div>
              <Button className="w-full rounded-2xl">إنشاء حساب مجاني</Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-bold text-slate-900">لماذا Dorak؟</h2>
              <p className="text-sm leading-7 text-slate-600">
                مناسب للمتاجر، المراكز الخدمية، والعيادات التي تريد تجربة انتظار بسيطة وواضحة.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>• تحديث مباشر للأدوار</li>
                <li>• واجهة عربية سهلة</li>
                <li>• QR لكل فرع أو متجر</li>
                <li>• تنبيهات بصوت واهتزاز للعميل</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <PricingSection />

      <div className="px-4 pb-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 text-right md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">لوحة إدارة التطبيق</h3>
              <p className="text-sm text-slate-600">رابط خاص بالمطورين والإدارة فقط.</p>
            </div>
            <Button className="rounded-2xl" variant="outline">
              دخول لوحة الإدارة
            </Button>
          </div>
        </div>
      </div>

      <MadeWithDyad />
    </main>
  );
};

export default Index;