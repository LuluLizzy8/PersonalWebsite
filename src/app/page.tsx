"use client";

import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import DraggableWindow from "@/components/DraggableWindow";
import AboutContent from "@/content/AboutContent";
import LinksContent from "@/content/LinksContent";
import ProjectsContent from "@/content/ProjectsContent";
import { Project } from "@/content/projectsData";
import SilkBackground from "@/components/SilkBackground";
import Button from "@/components/Button";

export default function Home() {
  // Show Hide Window
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => setShowMore(false), [activeProject]);

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

  return (
    <main
      ref={container}
      className="relative min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Fixed Home window */}
      <div
        className="
          fixed transform
          bg-white/90 rounded-xl border border-[#8bbfa4]
          shadow-[0_8px_28px_rgba(80,130,90,0.13)] backdrop-blur-md
          z-50 flex flex-col
          w-full h-full
          md:h-[min(68vh,640px)] md:w-[min(56vw,780px)]
          md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
        "
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between border-b border-[#8bbfa4] bg-[rgba(244,250,247,0.97)] px-5 rounded-t-xl"
          style={{ height: "50px" }}
        >
          <span
            className="text-base text-[#3d5e4a]"
            style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" }}
          >
            ⌂ home
          </span>
        </div>

        {/* Inner content */}
        <div className="flex flex-col items-center justify-center flex-1 p-8">
          <h1
            className="text-6xl italic mb-2"
            style={{
              fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif",
              color: "#e8a0b0",
            }}
          >
            hi! i&apos;m elizabeth lu
          </h1>
          <p className="mb-6 text-center text-base text-[#3d5e4a]" style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" }}>
            MSCS at Columbia
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => { setShowAbout(true); activateWindow("About"); }}>
              About Me
            </Button>
            <Button onClick={() => { setShowProjects(true); activateWindow("Projects"); }}>
              Projects
            </Button>
            <Button onClick={() => { setShowLinks(true); activateWindow("Links"); }}>
              Links
            </Button>
          </div>
        </div>
      </div>


      {/* About window */}
      {showAbout && (
        <DraggableWindow
          title="About"
          icon="✎"
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
          icon="◈"
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
          icon="◈"
          onClose={() => setActiveProject(null)}
          constraintRef={container}
          width={isMobile ? 100 : 54}
          height={isMobile ? 100 : undefined}
          autoHeight={!isMobile}
          maxWidth={1100}
          maxHeight={900}
          minWidth={isMobile ? 0 : 760}
          minHeight={isMobile ? 0 : 0}
          startX={isMobile ? 0 : 18}
          startY={isMobile ? 0 : 10}
          style={{ zIndex: zOrder[activeProjectWindowKey] || 110 }}
          onMouseDown={() => activateWindow(activeProjectWindowKey)}
        >
          <div className={isMobile ? "flex h-full min-h-0 flex-col" : undefined}>
            <div className={isMobile ? "min-h-0 flex-1 overflow-y-auto px-5 py-5 space-y-5" : "px-5 py-5 space-y-5"}>
              {/* Title + meta */}
              <div className="flex items-baseline justify-between gap-4">
                <h2
                  className="text-2xl italic text-[#e8a0b0] leading-snug"
                  style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" }}
                >
                  ✦ {activeProject.title}
                </h2>
                <span className="shrink-0 text-xs font-medium text-[#4a6a58]">{activeProject.year} · {activeProject.status}</span>
              </div>

              {/* Description */}
              <section>
                <h3
                  className="text-xs uppercase tracking-[0.2em] text-[#3d5e4a] font-semibold italic mb-2"
                  style={{ fontFamily: "'Palatino Linotype', Palatino, serif" }}
                >
                  About
                </h3>
                {showMore
                  ? activeProject.longDescription.split("\n\n").map((para, i) => (
                      <p key={i} className="text-sm leading-7 text-gray-700">
                        {para}
                      </p>
                    ))
                  : <p className="text-sm leading-7 text-gray-700">{activeProject.shortDescription}</p>
                }
                {activeProject.longDescription && (
                  <button
                    onClick={() => setShowMore((v) => !v)}
                    className="mt-2 text-xs italic text-[#3d5e4a] underline underline-offset-2 hover:text-[#8bbfa4] transition-colors"
                    style={{ fontFamily: "'Palatino Linotype', Palatino, serif" }}
                  >
                    {showMore ? "view summary" : "view detailed description"}
                  </button>
                )}
              </section>

              {/* Tech */}
              <section className="rounded-xl border border-[#8bbfa4] bg-white/60 p-4">
                <h3
                  className="text-xs uppercase tracking-[0.2em] text-[#3d5e4a] font-semibold italic mb-2"
                  style={{ fontFamily: "'Palatino Linotype', Palatino, serif" }}
                >
                  Technology
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f0f6f1] px-3 py-1 text-sm font-medium text-[#3d5e4a] ring-1 ring-[rgba(160,205,175,0.35)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#8bbfa4] bg-[rgba(244,250,247,0.97)] px-4 py-2 text-sm italic text-[#3d5e4a] transition hover:scale-[1.02] hover:bg-white"
                  style={{ fontFamily: "'Palatino Linotype', Palatino, serif" }}
                >
                  View GitHub
                </a>
                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#8bbfa4] bg-[rgba(244,250,247,0.97)] px-4 py-2 text-sm italic text-[#3d5e4a] transition hover:scale-[1.02] hover:bg-white"
                    style={{ fontFamily: "'Palatino Linotype', Palatino, serif" }}
                  >
                    {activeProject.demoLabel ?? "Live Demo"}
                  </a>
                )}
              </div>
            </div>
          </div>
        </DraggableWindow>
      )}

      {/* Links window */}
      {showLinks && (
        <DraggableWindow
          title="Links"
          icon="↗"
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

      <SilkBackground />
    </main>
  );
}
