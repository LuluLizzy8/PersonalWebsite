"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function VantaBackground() {
  const fogEl = useRef<HTMLDivElement>(null);
  const birdsEl = useRef<HTMLDivElement>(null);
  const fogEffect = useRef<{ destroy: () => void } | null>(null);
  const birdsEffect = useRef<{ destroy: () => void } | null>(null);
  const [birdsReady, setBirdsReady] = useState(false);

  // Fog
  useEffect(() => {
    if (fogEffect.current) return;
    let cancelled = false;

    (async () => {
      const THREE = await import("three");
      const { default: FOG } = await import("vanta/dist/vanta.fog.min");
      if (cancelled || !fogEl.current) return;

      fogEffect.current = FOG({
        el: fogEl.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: 0xffffff,
        midtoneColor: 0xedebec,
        lowlightColor: 0xedfff4,
        baseColor: 0xfff2f7,
        blurFactor: 0.7,
        speed: 2.2
      });
    })();

    return () => {
      cancelled = true;
      fogEffect.current?.destroy();
      fogEffect.current = null;
    };
  }, []);

  // Birds
  useEffect(() => {
    if (!birdsReady || birdsEffect.current || !birdsEl.current) return;
    const w = window as any;
    if (!w.VANTA?.BIRDS) return;

    birdsEffect.current = w.VANTA.BIRDS({
      el: birdsEl.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color1: 0xffffff,
      color2: 0xffffff,
      birdSize: 0.70,
      wingSpan: 13,
      speedLimit: 4,
      separation: 100,
      alignment: 76,
      cohesion: 100,
      quantity: 3,
      backgroundColor: 0x000000
    });

    return () => {
      birdsEffect.current?.destroy();
      birdsEffect.current = null;
    };
  }, [birdsReady]);

  return (
    <>
      {/* THREE r134 must load before vanta.birds — onLoad chains them */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const s = document.createElement("script");
          s.src = "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js";
          s.onload = () => setBirdsReady(true);
          document.head.appendChild(s);
        }}
      />
      <div ref={fogEl} className="fixed inset-0 -z-10 pointer-events-none" />
      <div ref={birdsEl} className="fixed inset-0 z-0 pointer-events-none" style={{ mixBlendMode: "screen" }} />
    </>
  );
}
