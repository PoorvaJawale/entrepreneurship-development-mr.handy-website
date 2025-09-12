"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CharacterAvatarProps = {
  href: string;
  imgSrc: string; // neutral/default expression
  hoverSrc?: string; // alternate expression shown on hover
  title: string;
};

export function CharacterAvatar({ href, imgSrc, hoverSrc, title }: CharacterAvatarProps) {
  return (
    <Link href={href} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <div className="relative w-56 h-80 md:w-72 md:h-[28rem] rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-black">
          {/* Base (neutral) image */}
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 160px, 192px"
            className={`object-cover transition-opacity duration-300 ${hoverSrc ? "opacity-100 group-hover:opacity-0" : "opacity-100"}`}
            priority
          />
          {/* Hover image (expression change) */}
          {hoverSrc && (
            <Image
              src={hoverSrc}
              alt={`${title} hover`}
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              priority
            />
          )}
        </div>
        {/* Subtle shadow under the character */}
        <div className="mt-2 h-3 w-44 md:w-64 rounded-full bg-black/10 blur-md group-hover:bg-black/20 transition" />
        <div className="mt-3 text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
          {title}
        </div>
      </motion.div>
    </Link>
  );
}


