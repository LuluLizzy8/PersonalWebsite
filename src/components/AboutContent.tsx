export default function AboutContent() {
  return (
    <div className="flex flex-col h-full">
      {/* Top profile section */}
      <div className="flex flex-row items-center p-4 border-b space-x-4 justify-center">
        <img
          src="/ProfilePhoto.jpg"
          alt="Profile Photo"
          className="w-24 h-24 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-2">
            <h2 className="text-2xl font-bold text-[#F4ACB7]">Elizabeth Lu</h2>
            <h2 className="text-lg text-[#F4ACB7]">卢晶晶</h2>
          </div>
          <p className="text-gray-600">
            CS Master's student at Columbia Engineering
          </p>
        </div>
      </div>

      {/* Scrollable text content */}
      <div className="flex-1 overflow-y-auto p-4 text-gray-700 space-y-4">
        <p>
          Hi! I'm Lizzy — a computer science master's student at Columbia
          University with a passion for blending artificial intelligence,
          design, and human-centered engineering. I enjoy exploring how
          technology can create experiences that are both functional and
          playful.
        </p>

        <h3 className="text-lg font-semibold text-[#F4ACB7]">Education</h3>
        <p>
          Columbia University, School of Engineering and Applied Science, New
          York, NY
          <br />
          Master of Science in Computer Science (Expected December 2026)
        </p>
        <p>
          New York University, College of Arts and Science, New York, NY
          <br />
          Bachelor of Arts in Computer Science & Economics, Minor in Physics &
          Math, GPA: 3.647 (December 2024)
        </p>

        <h3 className="text-lg font-semibold text-[#F4ACB7]">Experience</h3>
        <p>
          Bain & Company (Part-Time Consulting Assistant) — Shanghai, China
          (Remote)
          <br />
          Conducted industry trend analysis, market research, and cold calls to
          provide strategic insights supporting client decisions.
        </p>
        <p>
          Haitong M&A PE Fund Management (PE Summer Analyst) — Shanghai, China
          <br />
          Evaluated potential M&A deals in diverse sectors including
          semiconductors and green energy, performing financial modeling and
          on-site due diligence to identify high-potential investments.
        </p>
        <p>
          Corigine Inc. (Tech Intern) — Santa Clara, CA (Remote)
          <br />
          Collaborated on business strategy and system validation improvements,
          optimizing data processing and enhancing operational workflows.
        </p>

        <h3 className="text-lg font-semibold text-[#F4ACB7]">Skills</h3>
        <p>
          Languages: Python, Java, C, C++, R, HTML, CSS, JavaScript, TypeScript
          <br />
          Frameworks & Libraries: PyTorch, Hugging Face Transformers, NLTK,
          sklearn, pandas, Spring Boot, Angular, Node.js
          <br />
          Tools & Technologies: GitHub, MongoDB, Postman, AWS S3, Ollama, RegEx,
          JSON, Linux/Unix CLI, Microsoft Office
          <br />
          Languages: English (Native), Mandarin (Fluent), French
          (Conversational)
        </p>

        <h3 className="text-lg font-semibold text-[#F4ACB7]">Interests</h3>
        <p>
          Outside of code, you'll find me illustrating, learning new languages,
          exploring coffee shops, or playing cozy indie games. I enjoy creating
          visually engaging interfaces and someday hope to share my journey more
          widely through content and tutorials.
        </p>
      </div>
    </div>
  );
}
