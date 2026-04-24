"use client";
import { useEffect, useState } from "react";

type Props = {
  scene: string;
  fallback: string;
  alt: string;
  className?: string;
};

export function SplineScene({ scene, fallback, alt, className }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const isUrl = scene.startsWith("http");
  const showInteractive = mounted && !reducedMotion && isUrl;

  return (
    <div className={`${className ?? ""} relative`} aria-label={alt}>
      {showInteractive ? (
        <iframe
          src={scene}
          title={alt}
          className="w-full h-full border-0"
          loading="lazy"
          allow="autoplay"
        />
      ) : (
        <img src={fallback} alt={alt} className="w-full h-full object-contain" />
      )}
    </div>
  );
}
