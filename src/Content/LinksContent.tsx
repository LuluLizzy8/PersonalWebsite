export default function LinksContent() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-gray-800 w-full max-w-3xl">
        {/* Github */}
        <a
          href="https://github.com/LuluLizzy8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition"
        >
          <img
            src="./GithubIcon.png"
            alt="Github Icon"
            className="w-14 h-14 mb-2"
          />
          <span className="font-semibold">Github</span>
        </a>

        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/elizabethvlu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition"
        >
          <img
            src="./LinkedinIcon.png"
            alt="Linkedin Icon"
            className="w-14 h-14 mb-2"
          />
          <span className="font-semibold">LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/evl._.8/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition"
        >
          <img
            src="./InstagramIcon.png"
            alt="Instagram Icon"
            className="w-14 h-14 mb-2"
          />
          <span className="font-semibold">Instagram</span>
        </a>

        {/* YouTube */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition"
        >
          <img
            src="./ComingSoonIcon.jpg"
            alt="YouTube Icon"
            className="w-14 h-14 mb-2"
          />
          <span className="font-semibold">YouTube</span>
        </a>

        {/* TikTok */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition"
        >
          <img
            src="./ComingSoonIcon.jpg"
            alt="TikTok Icon"
            className="w-14 h-14 mb-2"
          />
          <span className="font-semibold">TikTok</span>
        </a>

        {/* Xiaohongshu */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition"
        >
          <img
            src="./ComingSoonIcon.jpg"
            alt="Xiaohongshu Icon"
            className="w-14 h-14 mb-2"
          />
          <span className="font-semibold">RedNote</span>
        </a>
      </div>
    </div>
  );
}
