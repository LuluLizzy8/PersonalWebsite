"use client";

import { useState, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import DraggableWindow from "@/components/DraggableWindow";
import AboutContent from "@/Content/AboutContent";
import LinksContent from "@/Content/LinksContent";
import ProjectsContent from "@/Content/ProjectsContent";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Button from "@/components/Button";

export default function Home() {
  // Show Hide Window
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  
  // Drag Constraints
  const container = useRef(null);
  // Responsive
  const isMobile = !useMediaQuery("(min-width: 640px)");
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
          fixed transform
          bg-white rounded-md border border-gray-300 shadow-lg
          z-50 flex flex-col
          w-full h-full
          md:w-[50vw] md:h-[60vh]
          md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
        "
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
          <div className="flex flex-col sm:flex-row gap-4 ">
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
                setShowProjects(true);
                activateWindow("Projects");
              }}
            >
              Projects
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
          width={isMobile ? 100 : 40}
          height={isMobile ? 100 : 50}
          maxWidth={1000}
          maxHeight={800}
          minWidth={isMobile ? 0 : 750}
          minHeight={isMobile ? 0 : 600}
          startX={isMobile ? 0 : 10}
          startY={isMobile ? 0 : 10}
          style={{ zIndex: zOrder["About"] || 100 }}
          onMouseDown={() => activateWindow("About")}
        >
          <AboutContent />
        </DraggableWindow>
      )}

      {/* Projects window */}
      {showProjects && (
        <DraggableWindow
          title="Projects"
          onClose={() => setShowProjects(false)}
          constraintRef={container}
          width={isMobile ? 100 : 50}
          height={isMobile ? 100 : 60}
          maxWidth={1000}
          maxHeight={800}
          minWidth={isMobile ? 0 : 750}
          minHeight={isMobile ? 0 : 600}
          startX={isMobile ? 0 : 22}
          startY={isMobile ? 0 : 15}
          style={{ zIndex: zOrder["Projects"] || 100 }}
          onMouseDown={() => activateWindow("Projects")}
        >
          <ProjectsContent />
        </DraggableWindow>
      )}

      {/* Links window */}
      {showLinks && (
        <DraggableWindow
          title="Links"
          onClose={() => setShowLinks(false)}
          constraintRef={container}
          width={isMobile ? 100 : 40}
          height={isMobile ? 100 : 40}
          maxWidth={isMobile ? 1000 : 625}
          maxHeight={isMobile ? 1000 : 375}
          minWidth={isMobile ? 0 : 500}
          minHeight={isMobile ? 0 : 300}
          startX={isMobile ? 0 : 40}
          startY={isMobile ? 0 : 25}
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
