"use client";
import { useEffect, useState } from "react";

// Spline scene loading is deferred until scene files are authored in Spline
// editor and committed to /public/spline/. Until then, this component renders
// only the static fallback PNG. To re-enable Spline:
// 1. Add scene files to public/spline/
// 2. Install any Next 15 webpack fix for @splinetool/react-spline exports
// 3. Restore the dynamic import + loader logic (see git history for the full version)

type Props = {
  scene: string;
  fallback: string;
  alt: string;
  className?: string;
};

export function SplineScene({ fallback, alt, className }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  // reducedMotion state is intentionally tracked for future Spline re-enablement
  void reducedMotion;

  return (
    <div className={`${className ?? ""} relative`} aria-label={alt}>
      <img src={fallback} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
}
