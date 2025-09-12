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
        <div className="relative w-56 h-[30rem] md:w-72 md:h-[36rem] overflow-hidden">
          {/* Base (neutral) image */}
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 224px, 288px"
            className={`object-cover ${hoverSrc ? "opacity-100 group-hover:opacity-0" : "opacity-100"}`}
            priority
          />
          {/* Hover image (expression change) */}
          {hoverSrc && (
            <Image
              src={hoverSrc}
              alt={`${title} hover`}
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover opacity-0 group-hover:opacity-100"
              priority
            />
          )}
          {/* Bottom fade to blend with background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(18, 19, 18, 0.3) 50%, #121312 100%)' }} />
        </div>
        <div className="mt-3 text-xl font-bold opacity-90 group-hover:opacity-100">
          {title}
        </div>
      </motion.div>
    </Link>
  );
}


