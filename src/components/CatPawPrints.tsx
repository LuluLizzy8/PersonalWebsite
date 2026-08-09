"use client";

import { useCallback, useEffect, useState } from "react";

interface Paw {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

let pawId = 0;

function PawSVG() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="22" rx="6" ry="5" fill="#e8a0b0" />
      <ellipse cx="7" cy="14" rx="3" ry="3.5" fill="#e8a0b0" />
      <ellipse cx="13" cy="10" rx="3" ry="3.5" fill="#e8a0b0" />
      <ellipse cx="19" cy="10" rx="3" ry="3.5" fill="#e8a0b0" />
      <ellipse cx="25" cy="14" rx="3" ry="3.5" fill="#e8a0b0" />
    </svg>
  );
}

export default function CatPawPrints() {
  const [paws, setPaws] = useState<Paw[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const id = pawId++;
    setPaws((prev) => [
      ...prev,
      { id, x: e.clientX, y: e.clientY, rotation: Math.random() * 60 - 30 },
    ]);
    setTimeout(() => {
      setPaws((prev) => prev.filter((p) => p.id !== id));
    }, 1400);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999]">
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute"
          style={{
            left: paw.x - 15,
            top: paw.y - 15,
            transform: `rotate(${paw.rotation}deg)`,
          }}
        >
          <div style={{ animation: "pawFade 1.4s ease-out forwards" }}>
            <PawSVG />
          </div>
        </div>
      ))}
    </div>
  );
}
