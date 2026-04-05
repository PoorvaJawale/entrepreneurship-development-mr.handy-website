"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type CharacterCardProps = {
  title: string;
  href: string;
  theme: "wood" | "water" | "electric";
  emoji: string;
};

const themeToClasses: Record<CharacterCardProps["theme"], string> = {
  wood: "bg-[linear-gradient(135deg,#f8ead8,#e9d5b7)] text-stone-900",
  water: "bg-[linear-gradient(135deg,#d6ecff,#bfe1ff)] text-blue-900",
  electric: "bg-[linear-gradient(135deg,#fffbd6,#fff3a3)] text-yellow-900",
};

export function CharacterCard({ title, href, theme, emoji }: CharacterCardProps) {
  return (
    <Link href={href} className="group">
      <motion.div
        whileHover={{ y: -6, rotate: -1 }}
        whileTap={{ scale: 0.98 }}
        className={`rounded-2xl p-6 shadow-sm border border-black/5 dark:border-white/10 ${themeToClasses[theme]} transition-transform`}
      >
        <div className="text-5xl mb-3 drop-shadow-sm">{emoji}</div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-sm opacity-70 mt-1">Tap to explore</div>
      </motion.div>
    </Link>
  );
}


