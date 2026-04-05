"use client";

import { CharacterAvatar } from "@/components/CharacterAvatar";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { motion } from "framer-motion";
import { useI18n } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";

export default function Home() {
  const { t } = useI18n();
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    // Start typewriter after preloader ends (3.5 seconds total: 2s preloader + 0.5s fade)
    const timer = setTimeout(() => {
      setStartTypewriter(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[120vh] flex flex-col items-center justify-start pt-5 md:pt-9 rounded-br-[3rem] rounded-bl-[3rem]" style={{ backgroundColor: '#121312' }}>
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight"
        >
          <TypewriterEffect 
            words={["Carpentry", "Plumbing", "Electrical work", "Mr. Handy"]}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
            startAnimation={startTypewriter}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-lg opacity-80"
        >
          {t("tagline")}
        </motion.p>
      </div>

      <div className="mt-8 md:mt-10 flex items-stretch justify-center">
        <div className="flex">
        <CharacterAvatar
          href="/plumber"
          imgSrc="/plumber_default.png"
          hoverSrc="/plumber_hover.png"
          title={t("plumber")}
        />
        <CharacterAvatar
          href="/electrician"
          imgSrc="/electrician_default.png"
          hoverSrc="/electrician_hover.png"
          title={t("electrician")}
        />
        <CharacterAvatar
          href="/carpenter"
          imgSrc="/carpenter_default.png"
          hoverSrc="/carpenter_hover.png"
          title={t("carpenter")}
        />
        </div>
      </div>
    </div>
  );
}
