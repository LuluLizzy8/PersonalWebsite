"use client";

import { Project, projects } from "@/content/projectsData";

const palFont = { fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" };

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group w-full text-left rounded-xl overflow-hidden relative transition duration-200 hover:-translate-y-1 border border-[#8bbfa4] shadow-[0_8px_28px_rgba(80,130,90,0.13)]"
      style={{ backgroundColor: `${project.accent}15` }}
    >

      {/* Folder composite — drives card height, sits on top of back panel */}
      <div className="relative mt-9">

        {/* Tab — trapezoid with border on top/sides, open bottom */}
        <div
          className="absolute flex justify-center items-end pb-[3px]"
          style={{ top: "-20px", left: "14px", width: "72px", height: "24px" }}
        >
          <svg className="absolute inset-0" width="72" height="24" viewBox="0 0 72 24" fill="none">
            <path
              d="M 4.9 3.9 Q 6 0 10 0 L 62 0 Q 66 0 67.1 3.9 L 71 20.1 Q 72 24 68 24 L 4 24 Q 0 24 0.9 20.1 Z"
              fill="rgba(255,255,255,0.96)"
            />
            <path
              d="M 4 24 Q 0 24 0.9 20.1 L 4.9 3.9 Q 6 0 10 0 L 62 0 Q 66 0 67.1 3.9 L 71 20.1 Q 72 24 68 24"
              stroke="#8bbfa4"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          <span
            className="relative text-[0.82rem] italic font-medium whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ color: "#3d5e4a", ...palFont }}
          >
            {project.year}
          </span>
        </div>

        {/* Folder body — white panel, top-left corner flat (tab connects there) */}
        <div
          className="relative bg-white overflow-hidden p-5"
          style={{
            backgroundImage: "linear-gradient(to right, #8bbfa4 15px, transparent 15px, transparent 85px, #8bbfa4 85px)",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          {/* Title */}
          <h3
            className="relative text-xl italic text-[#e8a0b0] mb-2 leading-snug"
            style={palFont}
          >
            ✦ {project.title}
          </h3>

          {/* Summary */}
          <p className="relative text-sm leading-relaxed text-gray-700 mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Tech chips + open cue */}
          <div className="relative flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f0f6f1] px-2.5 py-0.5 text-xs font-medium text-[#3d5e4a] ring-1 ring-[rgba(160,205,175,0.35)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function ProjectsContent({
  onOpenProject,
}: {
  onOpenProject: (project: Project) => void;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="shrink-0 px-5 pt-4 pb-2">
        <p className="text-sm font-medium text-[#3d5e4a]">
          Click a card for more details
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-5">
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </div>
  );
}
