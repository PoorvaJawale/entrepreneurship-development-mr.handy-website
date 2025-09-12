"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function PlumberLanding() {
  const { t } = useI18n();
  return (
    <section className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{t("plumbing_title")}</h1>
      <p className="mt-3 max-w-2xl opacity-80">{t("plumbing_desc")}</p>
    </section>
  );
}


