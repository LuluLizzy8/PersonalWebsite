import Chip from "../components/Chip";

const tools = ["GitHub", "MongoDB", "Postman", "AWS S3", "Ollama", "RegEx", "JSON",
  "Linux/Unix CLI", "Microsoft Office" ]

const languages = ["Python", "Java", "C", "C++", "R", "HTML", "CSS", "JavaScript", 
  "TypeScript", "SQL"]

const frameworks = ["PyTorch", "Hugging Face Transformers", "NLTK", "sklearn",
  "pandas", "Spring Boot", "Angular", "Node.js", "React"]

export default function AboutContent() {
  return (
    <div className="flex flex-col h-full">
      {/* Top profile section */}
      <div className="flex flex-row items-center p-4 border-b space-x-4 justify-center">
        <img
          src={`./ProfilePhoto.jpg`}
          alt="Profile Photo"
          className="w-24 h-24 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center space-x-2">
            <h2 className="text-2xl font-bold text-[#F4ACB7]">Elizabeth Lu</h2>
            <h2 className="text-lg text-[#F4ACB7]">卢晶晶</h2>
          </div>
          <p className="text-gray-600">
            MSCS at Columbia Engineering
          </p>
        </div>
      </div>

      {/* Scrollable text content */}
      <div className="flex-1 overflow-y-auto p-4 text-gray-700 space-y-4">
        <p>
          I&apos;m a computer science master&apos;s student at Columbia
          University with a passion for blending artificial intelligence,
          design, and human-centered engineering. I enjoy exploring how
          technology can create experiences that are both functional and
          creative.
        </p>

        <h3 className="text-2xl font-semibold text-[#F4ACB7]">Education</h3>
        <div className="border-l border-gray-200 pl-4 ml-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h2 className="text-l font-bold text-[#73b2de]">Columbia Engineering</h2>
            <h2 className="text-l italic">Expected December 2026</h2>
          </div>
          MS in Computer Science
        </div>
        <div className="border-l border-gray-200 pl-4 ml-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h2 className="text-l font-bold text-[#57058b]">New York University</h2>
            <h2 className="text-l italic">December 2024</h2>
          </div>
          BA in Computer Science & Economics, Minor in Physics & Math
        </div>

        <h3 className="text-2xl font-semibold text-[#F4ACB7]">Experience</h3>
        <div className="border-l border-gray-200 pl-4 ml-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h2 className="text-l font-bold text-gray-600">Bain & Company</h2>
            <h2 className="text-l italic">Shanghai, China</h2>
          </div>
          Consulting Part-Time Assistant
        </div>
        <div className="border-l border-gray-200 pl-4 ml-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h2 className="text-l font-bold text-gray-600">Haitong M&A PE Fund Management</h2>
            <h2 className="text-l italic">Shanghai, China</h2>
          </div>
          PE Summer Analyst
        </div>
        <div className="border-l border-gray-200 pl-4 ml-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h2 className="text-l font-bold text-gray-600">Corigine Inc.</h2>
            <h2 className="text-l italic">Santa Clara, CA</h2>
          </div>
          Tech Intern
        </div>

        <h3 className="text-2xl font-semibold text-[#F4ACB7]">Skills</h3>
          <div className="border-l border-gray-200 pl-4 ml-2">
            <h4 className="text-lg font-semibold text-[#F4ACB7]">Coding Languages</h4>
            <div className="flex flex-wrap gap-3">
              {languages.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4 ml-2">
            <h4 className="text-lg font-semibold text-[#F4ACB7]">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4 ml-2">
            <h4 className="text-lg font-semibold text-[#F4ACB7]">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>

        <h3 className="text-2xl font-semibold text-[#F4ACB7]">Languages</h3>
          <div className="pl-4 ml-2">
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Chinese (Fluent)</li>
              <li>French (Conversational)</li>
            </ul>
          </div>

        <h3 className="text-2xl font-semibold text-[#F4ACB7]">Interests</h3>
          <div className="pl-4 ml-2">
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Mantou 馒头 (My Cat)</li>
              <li>Golfing</li>
              <li>Baking</li>
              <li>Trying new dessert stores</li>
            </ul>
          </div>
      </div>
    </div>
  );
}
