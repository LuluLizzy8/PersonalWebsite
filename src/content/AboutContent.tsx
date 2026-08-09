import Chip from "../components/Chip";

const palFont = { fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" };

const languages = [
  "Python", "Java", "C", "C++", "SQL", "JavaScript", "TypeScript", "HTML", "CSS",
];

const aiml = [
  "PyTorch", "Hugging Face Transformers", "scikit-learn", "pandas", "NumPy", "OpenCV", "Ollama",
];

const systemsWebCloud = [
  "PostgreSQL", "MongoDB", "Supabase", "React", "Node.js", "Express", "Spring Boot", "AWS S3", "Vercel",
];

const devTools = [
  "Git/GitHub", "Linux/Unix", "Postman", "Jupyter", "Claude Code", "OpenAI Codex",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl italic text-[#e8a0b0] mt-6 mb-3" style={palFont}>
      ✦ {children}
    </h3>
  );
}

function TimelineItem({
  title,
  titleColor,
  subtitle,
  detail,
}: {
  title: string;
  titleColor: string;
  subtitle: string;
  detail: string;
}) {
  return (
    <div className="ml-2 border-l border-[rgba(100,155,125,0.4)] pl-4 mb-3">
      <div className="flex flex-col justify-between sm:flex-row sm:items-baseline gap-1">
        <span className="text-base font-semibold" style={{ color: titleColor }}>
          {title}
        </span>
        <span className="text-sm italic text-[#4a6a58]" style={palFont}>
          {subtitle}
        </span>
      </div>
      <p className="text-sm font-medium text-gray-700 mt-0.5">{detail}</p>
    </div>
  );
}

export default function AboutContent() {
  return (
    <div className="flex h-full flex-col">
      {/* Profile header */}
      <div className="shrink-0 flex flex-col items-center gap-4 border-b border-[rgba(100,155,125,0.35)] px-5 py-5 sm:flex-row sm:justify-center">
        <img
          src="./ProfilePhoto.jpg"
          alt="Profile Photo"
          className="h-24 w-24 rounded-full ring-2 ring-[#e8a0b0] ring-offset-2"
        />
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <h2 className="text-2xl italic text-[#e8a0b0]" style={palFont}>
                Elizabeth Lu
              </h2>
              <span className="text-lg italic text-[#e8a0b0]/70" style={palFont}>
                卢晶晶
              </span>
            </div>
            <p
              className="text-xs uppercase tracking-[0.2em] text-[#3d5e4a] font-semibold mt-0.5"
              style={palFont}
            >
              MSCS · Columbia Engineering
            </p>
          </div>
          <a
            href="./Elizabeth_Lu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[#8bbfa4] bg-[rgba(244,250,247,0.97)] px-4 py-1.5 text-sm italic text-[#3d5e4a] transition hover:scale-[1.02] hover:bg-white"
            style={palFont}
          >
            Resume
          </a>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 text-gray-700">
        <p className="text-sm leading-7 text-gray-700">
          I&apos;m a computer science master&apos;s student at Columbia University with a passion
          for blending artificial intelligence, design, and human-centered engineering. I enjoy
          exploring how technology can create experiences that are both functional and creative.
        </p>

        <SectionHeading>Education</SectionHeading>
        <TimelineItem
          title="Columbia Engineering"
          titleColor="#73b2de"
          subtitle="Expected May 2027"
          detail="MS in Computer Science"
        />
        <TimelineItem
          title="New York University"
          titleColor="#57058b"
          subtitle="December 2024"
          detail="BA in Computer Science & Economics, Minor in Physics & Math"
        />

        <SectionHeading>Experience</SectionHeading>
        <TimelineItem
          title="Amazon"
          titleColor="#4a6a58"
          subtitle="New York City, NY"
          detail="Software Development Engineer Intern"
        />
        <TimelineItem
          title="Federal Reserve of Philadelphia"
          titleColor="#4a6a58"
          subtitle="Philadelphia, PA"
          detail="SRC Gen AI Intern"
        />
        <TimelineItem
          title="Bain & Company"
          titleColor="#4a6a58"
          subtitle="Shanghai, China"
          detail="Consulting Part-Time Assistant"
        />
        <TimelineItem
          title="Haitong M&A PE Fund Management"
          titleColor="#4a6a58"
          subtitle="Shanghai, China"
          detail="PE Summer Analyst"
        />
        <TimelineItem
          title="Corigine Inc."
          titleColor="#4a6a58"
          subtitle="Santa Clara, CA"
          detail="Tech Intern"
        />

        <SectionHeading>Skills</SectionHeading>
        <div className="space-y-4">
          {[
            { label: "Languages", items: languages },
            { label: "AI/ML & Data", items: aiml },
            { label: "Systems, Web & Cloud", items: systemsWebCloud },
            { label: "Developer Tools", items: devTools },
          ].map(({ label, items }) => (
            <div key={label} className="ml-2 border-l border-[rgba(100,155,125,0.4)] pl-4">
              <p
                className="text-xs uppercase tracking-[0.2em] text-[#3d5e4a] font-semibold italic mb-2"
                style={palFont}
              >
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionHeading>Languages</SectionHeading>
        <ul className="ml-6 space-y-1 text-sm text-gray-700 list-disc">
          <li>Chinese (Fluent)</li>
          <li>French (Conversational)</li>
        </ul>

        <SectionHeading>Interests</SectionHeading>
        <ul className="ml-6 space-y-1 text-sm text-gray-700 list-disc mb-4">
          <li>Mantou 馒头 (My Cat)</li>
          <li>Golfing</li>
          <li>Baking</li>
          <li>Trying new dessert stores</li>
          <li>Guandan</li>
        </ul>
      </div>
    </div>
  );
}
