export type Project = {
  id: string;
  title: string;
  summary: string;
  shortDescription: string;
  longDescription: string;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  year: string;
  status: string;
  meta: string;
  tech: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    id: "tripable",
    title: "Tripable",
    summary: "Full-stack group travel planner with collaborative voting and shared itinerary generation.",
    shortDescription:
      "Tripable lets groups create a trip, share an invite link, submit destination and activity ideas, vote, and generate a shared itinerary. Built with React/Vite/TailwindCSS, Node.js/Express, and Supabase/PostgreSQL. Deployed on Vercel at tripable.pro; OpenAI Codex used throughout development.",
    longDescription:
      "Tripable started as a startup class project that four of us built together.\n\nThe idea came from a frustration we all shared: every time a friend group tries to plan a trip, the conversation falls apart across different group chats, everyone's suggestions get buried, and nothing gets decided. So we built Tripable to fix that. You create a trip, send out an invite link, everyone drops in their destination and activity ideas, the group votes, and you walk away with a shared itinerary.\n\nThe stack is React with Vite and TailwindCSS on the frontend, Node.js/Express on the backend, and Supabase/PostgreSQL for the database. Email invites go through Resend, and the app is deployed on Vercel.\n\nFor the class, we ran through the full startup process: user interviews, feature prioritization, prototyping, user acceptance testing, and a few rounds of iteration based on what people actually got confused by. OpenAI Codex helped speed up a lot of the implementation. It's live at tripable.pro.",
    githubUrl: "https://github.com/liangl5/Tripable",
    demoUrl: "https://www.tripable.pro/",
    demoLabel: "Website",
    year: "2026",
    status: "Live product",
    meta: "Travel Planning",
    tech: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "Vercel", "OpenAI Codex"],
    accent: "#177563",
  },
  {
    id: "guandan",
    title: "Guandan",
    summary: "Browser-based Guandan card game with AI opponents and WebSocket multiplayer.",
    shortDescription:
      "Full browser implementation of Guandan with solo play against three AI seats and real-time multiplayer rooms via PartyKit. Complete hand-ranking logic written in vanilla JavaScript: singles, pairs, triples, full houses, plates, tubes, bombs, level-card mechanics, and tribute rules.",
    longDescription:
      "Guandan is a Chinese card game I grew up playing, and I couldn't find a good browser version of it anywhere. Every existing app was either mobile-only or China-only. So I built one from scratch.\n\nThere are two modes: solo, where you play against three AI opponents, and multiplayer, where you share an invite link and up to four people join a live room. The real-time sync is handled by PartyKit, which keeps a persistent WebSocket connection between all players so moves and game state update instantly across everyone's screens.\n\nThe hardest part was implementing the full Guandan ruleset in JavaScript. The hand-ranking logic covers singles, pairs, triples, full houses, plates, tubes, and bombs. On top of that there are level-card mechanics where the \"wild\" cards change every round, plus tribute rules at the start of each game. Getting all of that right with no bugs took a while.\n\nThere are still features I want to add. One big one is letting players group and organize their hand, so you can drag cards around and arrange them by combination before you play. Right now the hand is just displayed in order, which makes it harder to think through your moves, especially in a complex game like this.",
    githubUrl: "https://github.com/LuluLizzy8/Guandan",
    demoUrl: "https://guandan-online.vercel.app",
    demoLabel: "Play Now",
    year: "2026",
    status: "In progress",
    meta: "Card Game",
    tech: ["HTML", "CSS", "JavaScript", "PartyKit"],
    accent: "#1f5b57",
  },
  {
    id: "weather-trade-bot",
    title: "Weather Trade Bot",
    summary: "LLM-powered trading recommendation engine driven by NCEI climate data and HDD/CDD signals.",
    shortDescription:
      "Users input industry context and U.S. state; the system fetches NCEI historical climate data, computes HDD/CDD metrics, and sends structured prompts to an LLM on Amazon Bedrock via AWS Lambda. Returns trading recommendations with natural language reasoning. React frontend, serverless backend.",
    longDescription:
      "This was a hackathon project built around a question: can you use an LLM to turn raw weather data into something a trader could actually act on?\n\nThe idea is that weather has a real impact on commodity markets: energy demand, agricultural futures, that kind of thing, but making sense of the data requires a layer of reasoning that's hard to automate with traditional rule-based systems. So we built a pipeline that does it with an LLM.\n\nThe user picks their industry and a U.S. state. The system pulls historical temperature data from the NOAA NCEI API and converts it into Heating Degree Days and Cooling Degree Days, which are standard energy-industry metrics for quantifying temperature-driven demand. Those numbers, combined with the user's industry context, get packaged into a structured prompt and sent to a language model running on Amazon Bedrock via an AWS Lambda function. The model comes back with a trading recommendation and an explanation of why.\n\nThe frontend is React. The backend is fully serverless so there's no always-on infrastructure. We built this in a single hackathon session, which made the scoping decisions interesting. The prompt engineering work ended up being as important as the data pipeline.",
    githubUrl: "https://github.com/LuluLizzy8/Weather-Trade-Bot",
    demoUrl: "",
    year: "2025",
    status: "Hackathon",
    meta: "Climate AI",
    tech: [
      "React.js",
      "AWS Lambda",
      "Amazon Bedrock",
      "Node.js",
      "NCEI Weather Data API",
      "REST APIs",
      "Prompt Engineering",
    ],
    accent: "#0284c7",
  },
  {
    id: "outfit-compatibility",
    title: "Outfit Compatibility Scoring",
    summary: "CV pipeline: YOLOv8 garment segmentation + ResNet-18 embeddings + MLP compatibility scoring.",
    shortDescription:
      "End-to-end computer vision pipeline for outfit compatibility prediction. Fine-tuned YOLOv8-Seg on DeepFashion2 for garment detection and segmentation. ResNet-18 encodes garment crops into visual embeddings, combined with learned type embeddings and passed through an MLP to predict pairwise compatibility scores aggregated into an outfit-level rating.",
    longDescription:
      "The question this project tries to answer is: can a model look at a photo of an outfit and tell you which pieces don't go together?\n\nThe pipeline has three stages. First, a YOLOv8 segmentation model fine-tuned on the DeepFashion2 dataset detects and isolates each garment in an outfit photo, and classifies it into a broad category like top, bottom, outerwear, or dress. Second, each cropped garment gets passed through a ResNet-18 encoder pre-trained on ImageNet, which compresses it down into a visual embedding that captures style and appearance. Third, those embeddings, along with learned embeddings that encode what category each garment belongs to, get fed into a small MLP that scores every possible garment pair for compatibility. The system then aggregates all the pairwise scores into a single outfit-level rating and flags the weakest combinations.\n\nThe interesting design challenge was figuring out how to represent \"does this top go with these pants\" mathematically. The type embeddings were key. Without them, the model couldn't distinguish between two items that look similar but play different roles in an outfit.\n\nI also built out preprocessing pipelines, ran hyperparameter tuning experiments, and wrote visualization tools for inspecting score distributions across large chunks of the dataset.",
    githubUrl: "https://github.com/LuluLizzy8/OutfitOps",
    demoUrl: "https://outfit-ops.vercel.app/",
    year: "2025",
    status: "Research project",
    meta: "Fashion AI",
    tech: [
      "Python",
      "PyTorch",
      "Torchvision",
      "YOLOv8-Seg",
      "OpenCV",
      "ResNet-18",
      "NumPy",
      "Pandas",
      "tqdm",
    ],
    accent: "#db2777",
  },
  {
    id: "video-sharing-platform",
    title: "Video Sharing Platform",
    summary: "Full-stack video sharing platform with REST APIs, Angular SPA frontend, and Spring Boot backend.",
    shortDescription:
      "Team of four. Spring Boot and Node.js backend exposing RESTful APIs for auth, video uploads, metadata, and interactions. Angular/TypeScript SPA frontend with async API communication for video playback, comments, and subscriptions. Agile workflow with distributed ownership across backend services and frontend UI.",
    longDescription:
      "A full-stack YouTube-style video sharing platform built as a class project with a team of four.\n\nUsers can create accounts, upload videos, browse a content feed, watch and comment on videos, and subscribe to other creators. Everything persists in a relational database: user accounts, video metadata, comments, subscription relationships. The backend is Spring Boot and Node.js, exposing REST APIs for all of that. The frontend is Angular with TypeScript, organized into reusable components: a video player, a comment thread, a subscription feed. All API calls are async so the page stays responsive while data loads.\n\nTypeScript made a real difference as the codebase grew. Catching type errors at compile time rather than at runtime saved a lot of debugging time, especially when the API response shapes kept changing early on.",
    githubUrl: "https://github.com/LuluLizzy8/Video-Sharing-Platform",
    demoUrl: "",
    year: "2024",
    status: "Web app",
    meta: "Creator Platform",
    tech: ["Java", "HTML", "CSS", "TypeScript", "Angular", "Spring Boot", "Node.js", "Maven"],
    accent: "#dc2626",
  },
  {
    id: "legal-qa-llm-evaluation",
    title: "Legal Q&A LLM Evaluation",
    summary: "Benchmarking LLMs on legal multiple-choice QA with a proposed Weighted Correctness Score metric.",
    shortDescription:
      "Evaluation framework benchmarking Llama, Gemma, Phi-3, and Mistral on CaseHOLD legal multiple-choice QA via Ollama. Also evaluates Legal-BERT and BERT-Double. Outputs normalized with regex parsing for cross-model comparison. Proposes a Weighted Correctness Score to capture partial reasoning quality beyond strict accuracy.",
    longDescription:
      "This was a class research project done as a group. The motivation was pretty straightforward: LLMs are increasingly being used in legal contexts, but how well do they actually reason about law? We wanted to test that rigorously rather than just vibe-checking a chatbot.\n\nWe used the CaseHOLD benchmark, which is built from real U.S. court citations. Each question gives you a case excerpt and asks you to pick the correct legal holding from five options. It's a hard task even for humans without legal training.\n\nWe ran Llama, Gemma, Phi-3, and Mistral locally using Ollama, so nothing was sent to external APIs. Because different models format their outputs differently, we wrote regex-based parsers to normalize everything into a consistent answer token before comparing. We also benchmarked Legal-BERT and BERT-Double as domain-specific baselines. Legal-BERT is fine-tuned on legal text, and BERT-Double stacks two encoders for richer representations.\n\nThe most interesting contribution was a proposed metric called the Weighted Correctness Score. Strict accuracy treats a near-miss the same as a random guess, which feels wrong. A model that consistently identifies the right reasoning pattern but picks the wrong holding is doing something meaningfully different. The WCS weights answers by how close they were to correct, giving a better picture of actual reasoning capability.\n\nThe full framework is automated: inference scripts, preprocessing, output parsing, and cross-model comparison all run end to end.",
    githubUrl: "https://github.com/LuluLizzy8/NLP-Evaluating-Large-Language-Models-for-Legal-Q-A",
    demoUrl: "",
    year: "2024",
    status: "NLP project",
    meta: "Legal NLP",
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "Ollama", "RegEx"],
    accent: "#4338ca",
  },
  {
    id: "recipe-book",
    title: "Recipe Book",
    summary: "Desktop recipe manager built in Java with Swing, file-based persistence, and OOP architecture.",
    shortDescription:
      "Java desktop application with a Swing GUI for CRUD operations on a recipe collection. Recipes store structured data: ingredients, steps, cook time, and category tags. File-based persistence across sessions. Architecture separates the data model, storage layer, and event-driven UI components into distinct classes.",
    longDescription:
      "This was a group project for an OOP class, a desktop app for managing a recipe collection built with Java Swing.\n\nYou can create, edit, delete, and search recipes. Each recipe stores ingredients, step-by-step instructions, cook time, and category tags. Everything gets saved to disk so your collection is there when you reopen the app.\n\nArchitecturally, I tried to keep things clean by separating the Recipe data model, the storage manager handling file I/O, and the Swing UI into distinct classes with clear responsibilities. The UI is event-driven, so instead of running top to bottom, the program just sits and waits for the user to do something: click a button, type in a field, and responds accordingly. Java collections handle in-memory search and filtering. Maven manages the build.\n\nIt's a fairly simple project, but it was a good exercise in OOP design and thinking about how to structure a real application rather than just writing scripts.",
    githubUrl: "https://github.com/LuluLizzy8/Recipe-Book",
    demoUrl: "",
    year: "2024",
    status: "App project",
    meta: "Food App",
    tech: ["Java", "Java Swing", "Maven"],
    accent: "#f78c28",
  },
];
