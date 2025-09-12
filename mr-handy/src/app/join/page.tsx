"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function JoinPage() {
  const { t } = useI18n();
  return (
    <section className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">{t("join_title")}</h1>
      <p className="mt-4 max-w-2xl opacity-80">{t("join_body")}</p>
    </section>
  );
}


