"use client";

import { motion, useDragControls } from "framer-motion";
import React from "react";

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
        width: `clamp(min(${minWidth}px, 100vw), ${width}vw, min(${maxWidth}px, 100vw))`,
        height: `clamp(min(${minHeight}px, 100vh), ${height}vh, min(${maxHeight}px, 100vh))`,
        position: "absolute",
        top:`${startY}vh`,
        left:`${startX}vw`,
      }}
      className="bg-white rounded-md border border-gray-300 shadow-lg z-50 flex flex-col"
    >
      {/* Header bar (handle) */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex items-center justify-between bg-[#D8E2DC] text-black px-4 py-2 rounded-t-md"
      >
        <span className="font-semibold text-gray-600 text-lg">{title}</span>
        <button
          onClick={onClose}
          className="text-gray-600 font-semibold text-lg hover:font-bold hover:scale-110 transition"
        >
          ✕
        </button>
      </div>
      {/* Content */}
      <div
        style={{
          height: `100%`,
        }}
        className="p-4 overflow-y-auto"
      >
        {children}
      </div>
    </motion.div>
  );
}
