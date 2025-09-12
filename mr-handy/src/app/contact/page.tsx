"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <section className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">{t("contact_title")}</h1>
      <p className="mt-4 max-w-2xl opacity-80">{t("contact_body")}</p>
    </section>
  );
}


