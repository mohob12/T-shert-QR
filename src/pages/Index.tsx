"use client";

import { useMemo, useState } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Wear2EarnHeader } from "@/components/wear2earn-header";
import { Wear2EarnHero } from "@/components/wear2earn-hero";
import { Wear2EarnSection } from "@/components/wear2earn-section";
import { Wear2EarnCardGrid } from "@/components/wear2earn-card-grid";
import { Wear2EarnDashboard } from "@/components/wear2earn-dashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const productItems = [
  {
    title: "QR Core Tee",
    subtitle: "تيشيرت أساسي بطباعة نظيفة وحضور streetwear هادئ.",
    price: "$49",
    meta: "Best Seller",
    accent: "Lime Drop",
  },
  {
    title: "Signal Oversized",
    subtitle: "قصّة واسعة مناسبة للمظهر العصري مع QR مخفي وراقي.",
    price: "$59",
    meta: "New",
    accent: "Urban Fit",
  },
  {
    title: "Affiliate Blackout",
    subtitle: "قطعة سوداء كلاسيكية مع هوية قوية ونظام عمولات ذكي.",
    price: "$69",
    meta: "Premium",
    accent: "Elite Wear",
  },
];

const planItems = [
  {
    title: "Starter",
    subtitle: "مناسب للبداية مع لوحة بسيطة ورابط QR فردي.",
    meta: "10% عمولة",
    accent: "Basic growth",
  },
  {
    title: "Pro",
    subtitle: "خطة متوازنة للمنشئين والمتاجر الصغيرة مع أداء أفضل.",
    meta: "18% عمولة",
    accent: "Balanced",
  },
  {
    title: "Elite",
    subtitle: "للعلامات الجادة مع عمولات أعلى وأولوية في التتبع.",
    meta: "25% عمولة",
    accent: "Top tier",
  },
];

const authTabs = [
  { key: "login", ar: "تسجيل الدخول", en: "Login" },
  { key: "signup", ar: "إنشاء حساب", en: "Sign up" },
];

const Index = () => {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [activeRoute, setActiveRoute] = useState("home");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const copy = useMemo(
    () => ({
      ar: {
        howTitle: "كيف يعمل النظام",
        howDesc: "ثلاث خطوات بسيطة لتحويل كل تيشيرت إلى قناة بيع وعمولة.",
        productsTitle: "المنتجات",
        productsDesc: "تشكيلة مختصرة بتصميم احترافي وسعر واضح وزر شراء مباشر.",
        plansTitle: "العضويات",
        plansDesc: "اختر الخطة المناسبة لنسبة الأرباح التي تريدها.",
        dashboardTitle: "مقتطف من لوحة التحكم",
        dashboardDesc: "نظرة سريعة على الأرباح والزيارات والطلبات والـ QR الشخصي.",
        authTitle: "تسجيل الدخول وإنشاء حساب",
        authDesc: "واجهة خفيفة لإنشاء حساب سريع أو الدخول للوصول إلى لوحة التحكم.",
        formName: "الاسم",
        formEmail: "البريد الإلكتروني",
        formPassword: "كلمة المرور",
        formCTA: "ادخل إلى المنصة",
        formHelp: "منصة بسيطة وسريعة للبدء في البيع والربح.",
      },
      en: {
        howTitle: "How it works",
        howDesc: "Three simple steps to turn every shirt into a sales channel.",
        productsTitle: "Products",
        productsDesc: "A clean product showcase with direct purchase actions.",
        plansTitle: "Memberships",
        plansDesc: "Pick the plan that matches the commission level you want.",
        dashboardTitle: "Dashboard preview",
        dashboardDesc: "A quick look at revenue, visits, orders, and your QR code.",
        authTitle: "Login and create account",
        authDesc: "A lightweight interface to sign in or register and access the dashboard.",
        formName: "Name",
        formEmail: "Email",
        formPassword: "Password",
        formCTA: "Enter platform",
        formHelp: "A fast, simple platform to start selling and earning.",
      },
    }),
    [],
  );

  const handlePrimaryAction = () => {
    setActiveRoute("auth");
    setAuthMode("signup");
    showSuccess(language === "ar" ? "تم الانتقال إلى التسجيل" : "Moved to sign up");
  };

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.12),_transparent_28%),linear-gradient(180deg,#070707,#000000)]" />
      <Wear2EarnHeader
        language={language}
        onLanguageChange={setLanguage}
        activeRoute={activeRoute}
        onNavigate={setActiveRoute}
      />

      <main>
        <div id="home">
          <Wear2EarnHero language={language} onPrimaryAction={handlePrimaryAction} />
        </div>

        <div id="how">
          <Wear2EarnSection
            eyebrow={language === "ar" ? "النظام" : "SYSTEM"}
            title={copy[language].howTitle}
            description={copy[language].howDesc}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {[
                language === "ar"
                  ? ["اشترِ تيشيرتك", "اختَر القطعة التي تحمل QR فريدًا وتبدأ منها رحلة البيع."]
                  : ["Buy your shirt", "Choose a shirt with a unique QR code to start selling."],
                language === "ar"
                  ? ["احصل على QR Code خاص بك", "يتم ربط الحساب والمنتج والعمولات برابطك الخاص."]
                  : ["Get your personal QR code", "Your account, product, and commissions are linked to your own code."],
                language === "ar"
                  ? ["اربح عند كل عملية بيع", "كل إحالة أو بيع عبر الرابط الخاص بك يضيف عمولتك مباشرة."]
                  : ["Earn on every sale", "Each referral or purchase through your link adds commission instantly."],
              ].map(([title, text], index) => (
                <Card
                  key={index}
                  className="border-white/10 bg-white/5 text-white shadow-none"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400 text-black font-black">
                      0{index + 1}
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/60">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Wear2EarnSection>
        </div>

        <div id="products">
          <Wear2EarnSection
            eyebrow="SHOP"
            title={copy[language].productsTitle}
            description={copy[language].productsDesc}
          >
            <Wear2EarnCardGrid
              items={productItems}
              ctaLabel={language === "ar" ? "شراء" : "Buy"}
              variant="products"
            />
          </Wear2EarnSection>
        </div>

        <div id="plans">
          <Wear2EarnSection
            eyebrow="MEMBERSHIPS"
            title={copy[language].plansTitle}
            description={copy[language].plansDesc}
          >
            <Wear2EarnCardGrid
              items={planItems}
              ctaLabel={language === "ar" ? "اختيار" : "Choose"}
              variant="plans"
            />
          </Wear2EarnSection>
        </div>

        <div id="dashboard">
          <Wear2EarnSection
            eyebrow="CONTROL"
            title={copy[language].dashboardTitle}
            description={copy[language].dashboardDesc}
          >
            <Wear2EarnDashboard language={language} />
          </Wear2EarnSection>
        </div>

        <div id="auth">
          <Wear2EarnSection
            eyebrow="ACCESS"
            title={copy[language].authTitle}
            description={copy[language].authDesc}
          >
            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <Card className="border-white/10 bg-white/5 text-white shadow-none">
                <CardContent className="p-6">
                  <div className="flex rounded-full border border-white/10 bg-black/40 p-1">
                    {authTabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setAuthMode(tab.key as "login" | "signup")}
                        className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          authMode === tab.key
                            ? "bg-lime-400 text-black"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        {language === "ar" ? tab.ar : tab.en}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    {authMode === "signup" && (
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/70">
                          {copy[language].formName}
                        </Label>
                        <Input id="name" className="border-white/10 bg-black/40 text-white" />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/70">
                        {copy[language].formEmail}
                      </Label>
                      <Input id="email" className="border-white/10 bg-black/40 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white/70">
                        {copy[language].formPassword}
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        className="border-white/10 bg-black/40 text-white"
                      />
                    </div>
                    <Button className="w-full rounded-full bg-lime-400 text-black hover:bg-lime-300">
                      {copy[language].formCTA}
                    </Button>
                    <p className="text-sm leading-7 text-white/50">
                      {copy[language].formHelp}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                <div className="rounded-[1.25rem] border border-lime-400/20 bg-black/40 p-5">
                  <div className="text-sm font-medium text-lime-300">QR Generator</div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    كل مستخدم يحصل على QR Code خاص به يمكن استخدامه في التيشيرتات، الصفحات الخاصة، والعمولات.
                  </p>
                  <div className="mt-5 flex justify-center rounded-3xl border border-white/10 bg-white p-5">
                    <div className="grid grid-cols-8 gap-1 rounded-2xl bg-white p-3">
                      {Array.from({ length: 64 }).map((_, index) => (
                        <span
                          key={index}
                          className={`h-2.5 w-2.5 rounded-[2px] ${index % 4 === 0 || index % 7 === 0 ? "bg-black" : "bg-transparent"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wear2EarnSection>
        </div>
      </main>

      <footer className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Wear2Earn — Streetwear affiliate MVP</span>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;