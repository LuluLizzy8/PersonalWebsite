"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import DraggableWindow from "@/components/DraggableWindow";
import AboutContent from "@/content/AboutContent";
import LinksContent from "@/content/LinksContent";
import ProjectsContent from "@/content/ProjectsContent";
import { Project } from "@/content/projectsData";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Button from "@/components/Button";

export default function Home() {
  // Show Hide Window
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showFullProjectDescription, setShowFullProjectDescription] = useState(false);
  
  // Drag Constraints
  const container = useRef(null);
  // Responsive
  const isMobile = !useMediaQuery("(min-width: 640px)");
  //Stack Order
  const [zOrder, setZOrder] = useState<{ [key: string]: number }>({});
  const topZRef = useRef(100);
  const activateWindow = (name: string) => {
    topZRef.current += 1;
    setZOrder((old) => ({ ...old, [name]: topZRef.current }));
  };
  const activeProjectWindowKey = activeProject ? `project:${activeProject.id}` : "project";

  useEffect(() => {
    setShowFullProjectDescription(false);
  }, [activeProject]);

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
          md:h-[min(68vh,640px)] md:w-[min(56vw,780px)]
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
            hi! i&apos;m lizzy
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
          width={isMobile ? 100 : 46}
          height={isMobile ? 100 : 64}
          maxWidth={1000}
          maxHeight={800}
          minWidth={isMobile ? 0 : 640}
          minHeight={isMobile ? 0 : 520}
          startX={isMobile ? 0 : 8}
          startY={isMobile ? 0 : 8}
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
          width={isMobile ? 100 : 68}
          height={isMobile ? 100 : 72}
          maxWidth={1200}
          maxHeight={900}
          minWidth={isMobile ? 0 : 860}
          minHeight={isMobile ? 0 : 620}
          startX={isMobile ? 0 : 10}
          startY={isMobile ? 0 : 8}
          style={{ zIndex: zOrder["Projects"] || 100 }}
          onMouseDown={() => activateWindow("Projects")}
        >
          <ProjectsContent
            onOpenProject={(project) => {
              setActiveProject(project);
              activateWindow(`project:${project.id}`);
            }}
          />
        </DraggableWindow>
      )}

      {activeProject && (
        <DraggableWindow
          title={activeProject.title}
          onClose={() => setActiveProject(null)}
          constraintRef={container}
          width={isMobile ? 100 : 54}
          height={isMobile ? 100 : 68}
          maxWidth={1100}
          maxHeight={900}
          minWidth={isMobile ? 0 : 760}
          minHeight={isMobile ? 0 : 560}
          startX={isMobile ? 0 : 18}
          startY={isMobile ? 0 : 10}
          style={{ zIndex: zOrder[activeProjectWindowKey] || 110 }}
          onMouseDown={() => activateWindow(activeProjectWindowKey)}
        >
          <div className="flex h-full min-h-0 flex-col px-2 py-2">
            <div
              className={`relative mb-5 aspect-[16/6] overflow-hidden rounded-[24px] bg-gradient-to-br ${activeProject.palette}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_38%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(17,24,39,0.18)_100%)]" />
              <div className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gray-600 shadow-sm">
                {activeProject.status}
              </div>
              <div className="absolute right-5 top-5 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                {activeProject.year}
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                  {activeProject.meta}
                </div>
                <div className="mt-2 text-2xl font-bold text-white drop-shadow-sm sm:text-3xl">
                  {activeProject.title}
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)]">
              <div className="space-y-5">
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Description</h3>
                  <div className="mt-3 max-h-[260px] overflow-y-auto pr-2">
                    <p className="text-base leading-7 text-gray-600">
                      {showFullProjectDescription
                        ? activeProject.longDescription
                        : activeProject.shortDescription}{" "}
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={() => setShowFullProjectDescription((old) => !old)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setShowFullProjectDescription((old) => !old);
                          }
                        }}
                        className="cursor-pointer text-sm font-medium text-gray-400 transition hover:scale-105 hover:text-gray-600"
                      >
                        {showFullProjectDescription ? "Show less" : "Show more"}
                      </span>
                    </p>
                  </div>
                </section>
              </div>

              <div className="space-y-5">
                <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Technology Used</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#F7F7F8] px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#D8E2DC] px-4 py-2 text-sm font-semibold text-gray-700 transition hover:scale-[1.02]"
                  >
                    View GitHub
                  </a>
                  {activeProject.demoUrl ? (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:scale-[1.02]"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-400"
                    >
                      Demo Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DraggableWindow>
      )}

      {/* Links window */}
      {showLinks && (
        <DraggableWindow
          title="Links"
          onClose={() => setShowLinks(false)}
          constraintRef={container}
          width={isMobile ? 100 : 38}
          height={isMobile ? 100 : 42}
          maxWidth={isMobile ? 1000 : 625}
          maxHeight={isMobile ? 1000 : 420}
          minWidth={isMobile ? 0 : 420}
          minHeight={isMobile ? 0 : 280}
          startX={isMobile ? 0 : 38}
          startY={isMobile ? 0 : 20}
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
