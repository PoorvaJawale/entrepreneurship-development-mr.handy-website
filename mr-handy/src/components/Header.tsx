"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/components/LanguageProvider";

export function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/30">
      <div className="w-full px-16 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="justify-self-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/mr-handy-logo.png"
              alt={t("brand")}
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold justify-self-center">
          <Link href="/about" className="hover:opacity-80 transition-opacity">{t("nav_about")}</Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity">{t("nav_contact")}</Link>
          <Link href="/join" className="hover:opacity-80 transition-opacity">{t("nav_join")}</Link>
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <LanguageSwitcher />
          <Link href="#signup" className="rounded-md px-4 py-2 border border-black/15 dark:border-white/20 bg-black text-white dark:bg-white dark:text-black text-sm hover:opacity-90 transition">{t("signup")}</Link>
        </div>
      </div>
    </header>
  );
}


