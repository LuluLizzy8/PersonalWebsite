"use client";

import { useState } from "react";
import Image from "next/image";

export default function CatPeek() {
  const [popped, setPopped] = useState(false);

  return (
    <div
      className="fixed z-40 hidden md:block cursor-pointer select-none"
      style={{
        bottom: "calc(50% + min(34vh, 320px))",
        right: "calc(50% - min(28vw, 390px))",
        transform: `translateY(${popped ? "33%" : "67%"})`,
        transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      onClick={() => setPopped((p) => !p)}
    >
      <Image
        src="/mantou/mantou1.png"
        alt="Mantou"
        width={160}
        height={240}
        className="w-40 h-auto"
      />
    </div>
  );
}
