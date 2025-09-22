"use client";

import { useState, useRef } from "react";
import DraggableWindow from "@/components/DraggableWindow";
import AboutContent from "@/components/AboutContent";
import LinksContent from "@/components/LinksContent";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Button from "@/components/Button";

export default function Home() {
  // Show Hide Window
  const [showAbout, setShowAbout] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  // Drag Constraints
  const container = useRef(null);
  //Stack Order
  const [zOrder, setZOrder] = useState<{ [key: string]: number }>({});
  const [currentTopZ, setCurrentTopZ] = useState(100);
  const activateWindow = (name: string) => {
    setCurrentTopZ((prev) => {
      const newZ = prev + 1;
      setZOrder((old) => ({ ...old, [name]: newZ }));
      return newZ;
    });
  };

  return (
    <main
      ref={container}
      className="relative min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Fixed Home window */}
      <div
        className="
          fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-white rounded-md border border-gray-300 shadow-lg z-50
          flex flex-col
        "
        style={{
          width: `40vw`,
          height: `50vh`,
          maxWidth: `1000px`,
          maxHeight: `800px`,
          minWidth: `750px`,
          minHeight: `600px`,
        }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between bg-[#D8E2DC] text-black px-4 rounded-t-md"
          style={{ height: "50px" }}
        >
          <span className="font-semibold text-lg text-gray-600">Home</span>
        </div>

        {/* Inner content */}
        <div className="flex flex-col items-center justify-center flex-1 p-8">
          <h1 className="text-5xl text-[#FFCAD4] font-bold mb-2">
            hi! i'm lizzy
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            MCS Student at Columbia
          </p>
          <div className="flex gap-4 ">
            <Button
              onClick={() => {
                setShowAbout(true);
                activateWindow("About");
              }}
            >
              About Me
            </Button>
            <Button
              onClick={() => {
                setShowLinks(true);
                activateWindow("Links");
              }}
            >
              Links
            </Button>
          </div>
        </div>
      </div>

      {/* About window */}
      {showAbout && (
        <DraggableWindow
          title="About"
          onClose={() => setShowAbout(false)}
          constraintRef={container}
          width={40}
          height={50}
          maxWidth={1000}
          maxHeight={800}
          minWidth={750}
          minHeight={600}
          startX={10}
          startY={10}
          style={{ zIndex: zOrder["About"] || 100 }}
          onMouseDown={() => activateWindow("About")}
        >
          <AboutContent />
        </DraggableWindow>
      )}

      {/* Links window */}
      {showLinks && (
        <DraggableWindow
          title="Links"
          onClose={() => setShowLinks(false)}
          constraintRef={container}
          width={40}
          height={40}
          maxWidth={625}
          maxHeight={375}
          minWidth={500}
          minHeight={300}
          startX={40}
          startY={25}
          style={{ zIndex: zOrder["Links"] || 100 }}
          onMouseDown={() => activateWindow("Links")}
        >
          <LinksContent />
        </DraggableWindow>
      )}

      <BackgroundBlobs />
    </main>
  );
}
