"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

type Props = {
  scene: string;
  fallback: string;
  alt: string;
  className?: string;
};

export function SplineScene({ scene, fallback, alt, className }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    timeoutRef.current = window.setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 2000);
    return () => {
      mq.removeEventListener("change", listener);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [loaded]);

  const showSpline = !reducedMotion && !failed;

  return (
    <div className={`${className ?? ""} relative`} aria-label={alt}>
      <img
        src={fallback}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          loaded && showSpline ? "opacity-0" : "opacity-100"
        }`}
      />
      {showSpline && (
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <Spline scene={scene} onLoad={() => setLoaded(true)} />
        </div>
      )}
    </div>
  );
}
