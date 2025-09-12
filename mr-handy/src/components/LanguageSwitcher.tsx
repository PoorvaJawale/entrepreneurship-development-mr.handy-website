"use client";

import React, { useState } from "react";
import { useI18n } from "@/components/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const label = locale === "en" ? "English" : locale === "hi" ? "हिंदी" : "मराठी";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-md border border-black/15 dark:border-white/20 px-3 py-2 text-sm bg-white dark:bg-black hover:bg-black/[.03] dark:hover:bg-white/[.06] transition"
      >
        {label}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-black shadow-sm p-1 z-50">
          <button
            onClick={() => {
              setLocale("en");
              setOpen(false);
            }}
            className="w-full text-left text-sm px-3 py-2 rounded hover:bg-black/[.04] dark:hover:bg-white/[.08]"
          >
            English
          </button>
          <button
            onClick={() => {
              setLocale("hi");
              setOpen(false);
            }}
            className="w-full text-left text-sm px-3 py-2 rounded hover:bg-black/[.04] dark:hover:bg-white/[.08]"
          >
            हिंदी
          </button>
          <button
            onClick={() => {
              setLocale("mr");
              setOpen(false);
            }}
            className="w-full text-left text-sm px-3 py-2 rounded hover:bg-black/[.04] dark:hover:bg-white/[.08]"
          >
            मराठी
          </button>
        </div>
      )}
    </div>
  );
}


