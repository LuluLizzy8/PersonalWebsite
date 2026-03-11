"use client";

import { Project, projects } from "@/content/projectsData";

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
      className="group overflow-hidden rounded-[28px] bg-white text-left shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <div className={`relative aspect-[16/8.4] overflow-hidden bg-gradient-to-br ${project.palette}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(17,24,39,0.18)_100%)]" />

        <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-600 shadow-sm">
          {project.status}
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
          {project.year}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85">{project.meta}</div>
            <div className="mt-2 max-w-[16rem] text-xl font-bold leading-tight text-white drop-shadow-sm sm:text-2xl">
              {project.title}
            </div>
          </div>
          <div className="rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white transition group-hover:scale-105">
            Open
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
        <p className="text-sm leading-6 text-gray-600">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#F7F7F8] px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
            >
              {item}
            </span>
          ))}
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
    <div className="relative flex h-full min-h-0 flex-col">
      <div className="border-b px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#F4ACB7]">Projects</h2>
            <p className="max-w-2xl text-sm text-gray-600">
              Selected work presented as standalone portfolio blocks. Click a card to open the full project window.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </div>
  );
}
