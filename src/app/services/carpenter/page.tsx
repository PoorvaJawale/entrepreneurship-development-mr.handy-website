"use client";

import Link from "next/link";
import { useI18n } from "@/components/LanguageProvider";

export default function CarpenterPage() {
  const { t } = useI18n();
  return (
    <section className="py-16">
      <div className="rounded-3xl p-8 border border-black/5 dark:border-white/10 bg-[linear-gradient(135deg,#f8ead8,#e9d5b7)] text-stone-900">
        <h1 className="text-4xl font-semibold tracking-tight">{t("carpentry_title")}</h1>
        <p className="mt-3 max-w-2xl opacity-80">{t("carpentry_desc")}</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-md px-6 py-3 bg-stone-900 text-stone-100 hover:opacity-90 transition">{t("book_now")}</button>
          <Link href="/" className="rounded-md px-6 py-3 border border-stone-900/20 hover:bg-white/50 transition">{t("back_home")}</Link>
        </div>
      </div>
    </section>
  );
}


