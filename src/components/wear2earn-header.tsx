"use client";

import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Wear2EarnHeaderProps = {
  language: "ar" | "en";
  onLanguageChange: (language: "ar" | "en") => void;
  activeRoute: string;
  onNavigate: (route: string) => void;
};

const navItems = [
  { route: "home", labelAr: "الرئيسية", labelEn: "Home" },
  { route: "how", labelAr: "كيف يعمل", labelEn: "How it Works" },
  { route: "products", labelAr: "المنتجات", labelEn: "Products" },
  { route: "plans", labelAr: "العضويات", labelEn: "Plans" },
  { route: "dashboard", labelAr: "لوحة التحكم", labelEn: "Dashboard" },
  { route: "auth", labelAr: "الدخول", labelEn: "Login" },
];

export function Wear2EarnHeader({
  language,
  onLanguageChange,
  activeRoute,
  onNavigate,
}: Wear2EarnHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/30 bg-lime-400/10 text-lime-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-white">
              Wear2Earn
            </div>
            <div className="text-xs text-white/50">Streetwear x Affiliate</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const label = language === "ar" ? item.labelAr : item.labelEn;
            const active = activeRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white text-black"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="rounded-full border border-white/10 bg-white/5 p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange("ar")}
              className={cn(
                "rounded-full px-3 text-xs",
                language === "ar"
                  ? "bg-lime-400 text-black hover:bg-lime-300 hover:text-black"
                  : "text-white/70 hover:bg-transparent hover:text-white",
              )}
            >
              AR
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange("en")}
              className={cn(
                "rounded-full px-3 text-xs",
                language === "en"
                  ? "bg-lime-400 text-black hover:bg-lime-300 hover:text-black"
                  : "text-white/70 hover:bg-transparent hover:text-white",
              )}
            >
              EN
            </Button>
          </div>

          <button className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}