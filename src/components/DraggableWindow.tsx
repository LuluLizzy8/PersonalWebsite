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
      className="z-50 flex min-h-0 min-w-0 flex-col overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg"
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex min-h-[58px] items-center justify-between rounded-t-md bg-[#D8E2DC] px-5 py-3"
      >
        <span className="pr-4 text-xl font-semibold text-gray-600">{title}</span>
        <button
          onClick={onClose}
          className="shrink-0 text-3xl leading-none text-gray-600 transition hover:scale-110"
        >
          ×
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
    </motion.div>
  );
}
