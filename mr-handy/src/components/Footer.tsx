import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="font-semibold">Mr. Handy</div>
          <p className="text-sm opacity-70 mt-2">House Maintenance, One Click Away.</p>
        </div>
        <div className="text-sm flex flex-col gap-2">
          <Link href="/about" className="hover:opacity-80 transition-opacity">About</Link>
          <Link href="#faq" className="hover:opacity-80 transition-opacity">FAQ</Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity"><Twitter size={20} /></Link>
          <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity"><Facebook size={20} /></Link>
          <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity"><Instagram size={20} /></Link>
        </div>
      </div>
      <div className="text-xs text-center opacity-60 py-4">© {new Date().getFullYear()} Mr. Handy. All rights reserved.</div>
    </footer>
  );
}


