"use client";

import { motion, useDragControls } from "framer-motion";
import React, { useEffect, useState } from "react";

interface DraggableWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  constraintRef: React.RefObject<null>;
  width: number;
  height: number;
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  startX?: number;
  startY?: number;
  style?: React.CSSProperties;
  onMouseDown?: () => void;
}

export default function DraggableWindow({
  title,
  onClose,
  children,
  constraintRef,
  width = 50,
  height = 50,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  startX,
  startY,
  style,
  onMouseDown,
}: DraggableWindowProps) {
  const dragControls = useDragControls();
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const gutter = 16;
  const safeWidth = Math.max(viewport.width - gutter * 2, 0);
  const safeHeight = Math.max(viewport.height - gutter * 2, 0);
  const resolvedWidth = viewport.width
    ? Math.min(Math.max((viewport.width * width) / 100, minWidth), maxWidth, safeWidth)
    : undefined;
  const resolvedHeight = viewport.height
    ? Math.min(Math.max((viewport.height * height) / 100, minHeight), maxHeight, safeHeight)
    : undefined;

  const resolvedLeft =
    viewport.width && resolvedWidth !== undefined
      ? Math.min(
          Math.max((viewport.width * (startX ?? 0)) / 100, gutter),
          Math.max(viewport.width - resolvedWidth - gutter, gutter),
        )
      : undefined;

  const resolvedTop =
    viewport.height && resolvedHeight !== undefined
      ? Math.min(
          Math.max((viewport.height * (startY ?? 0)) / 100, gutter),
          Math.max(viewport.height - resolvedHeight - gutter, gutter),
        )
      : undefined;

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={constraintRef}
      dragMomentum={false}
      dragElastic={0}
      onMouseDown={onMouseDown}
      style={{
        ...style,
        width: resolvedWidth ?? `min(${width}vw, 100vw)`,
        height: resolvedHeight ?? `min(${height}vh, 100vh)`,
        position: "absolute",
        top: resolvedTop ?? `${startY ?? 0}vh`,
        left: resolvedLeft ?? `${startX ?? 0}vw`,
      }}
      className="z-50 flex min-h-0 min-w-0 flex-col overflow-hidden rounded-xl border border-[rgba(160,205,175,0.55)] bg-white/90 shadow-[0_8px_28px_rgba(80,130,90,0.13)] backdrop-blur-md"
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex min-h-[50px] shrink-0 items-center justify-between border-b-2 border-[rgba(160,205,175,0.45)] bg-white/95 px-5 py-3"
      >
        <span
          className="pr-4 text-sm italic text-[#7a8a72]"
          style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" }}
        >
          ✦ {title}
        </span>
        <button
          onClick={onClose}
          aria-label="Close window"
          className="h-3 w-3 shrink-0 rounded-full border border-[#c88090] bg-[#e8a0b0] transition hover:scale-125 hover:brightness-90"
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
    </motion.div>
  );
}
