export type Project = {
  id: string;
  title: string;
  summary: string;
  shortDescription: string;
  longDescription: string;
  githubUrl: string;
  demoUrl?: string;
  year: string;
  status: string;
  meta: string;
  tech: string[];
  palette: string;
};

export const projects: Project[] = [
  {
    id: "weather-trade-bot",
    title: "Weather Trade Bot",
    summary:
      "Full-stack AI system that generates weather-driven trading recommendations using AWS Bedrock and historical climate data.",
    shortDescription:
      "Built a full-stack application that generates trading recommendations based on weather patterns using AWS Bedrock. The system combines historical climate data with LLM reasoning to simulate weather-driven market strategies. Developed a React frontend for user interaction and a serverless backend with AWS Lambda and Bedrock to analyze temperature trends and produce structured recommendations.",
    longDescription:
      "Built a full-stack application that generates trading recommendations based on weather patterns using AWS Bedrock. The system combines historical climate data with LLM reasoning to simulate weather-driven market strategies. Developed a React frontend for user interaction, allowing users to input their industry context and select geographic locations across all 50 U.S. states. Designed a serverless backend using AWS Lambda and Bedrock to process requests, analyze temperature trends (HDD/CDD), and generate structured trading recommendations with natural language explanations. Integrated NCEI weather data and implemented domain-specific logic (Heating Degree Days and Cooling Degree Days) to transform raw climate signals into actionable insights. The system demonstrates how LLMs can augment traditional data pipelines to produce interpretable, context-aware financial recommendations.",
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
    palette: "from-[#d7efe7] via-[#d9ecff] to-[#89b4fa]",
  },
  {
    id: "outfit-compatibility",
    title: "Outfit Compatibility Scoring",
    summary: "Computer vision pipeline for garment segmentation and outfit-level compatibility scoring.",
    shortDescription:
      "Built an end-to-end computer vision pipeline that predicts outfit compatibility from images. Fine-tuned a YOLOv8 segmentation model on DeepFashion2 to detect garments and extract clothing crops, then encoded items using a ResNet-18 embedding network. A learned compatibility model scores garment pairs and aggregates them to produce an overall outfit compatibility score while identifying poorly matched items.",
    longDescription:
      "This project implements an end-to-end computer vision pipeline that predicts the compatibility of clothing items within an outfit. The system first fine-tunes a YOLOv8 segmentation model on a subset of the DeepFashion2 dataset to detect and segment individual garments from full outfit images. After segmentation, the pipeline extracts garment crops and maps each item into coarse clothing categories (e.g., top, bottom, outerwear, dress). These garment images are then encoded using a ResNet-18 feature extractor trained on ImageNet, which produces normalized visual embeddings capturing style and appearance. A compatibility model combines these visual embeddings with learned type embeddings representing garment categories and feeds them into a multilayer perceptron to compute pairwise compatibility scores. The system aggregates pairwise scores to generate an overall outfit compatibility score and identifies the least compatible item combinations within an outfit. The project includes data preprocessing pipelines, hyperparameter tuning experiments, automated training workflows, and visualization tools for analyzing compatibility scores across thousands of outfit images.",
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
    palette: "from-[#D8E2DC] via-[#FFE5EC] to-[#F4ACB7]",
  },
  {
    id: "video-sharing-platform",
    title: "Video Sharing Platform",
    summary: "A web app centered on uploading, browsing, and watching video content.",
    shortDescription:
      "Developed a full-stack video sharing platform with REST APIs for authentication, video uploads, and database operations. Built the frontend using Angular to support video playback, comments, and user subscriptions. Implemented scalable backend services with Spring Boot to manage user accounts and video metadata.",
    longDescription:
      "This project is a full-stack video sharing platform developed by a four-person team using modern web development frameworks. The backend is implemented with Spring Boot and Node.js, providing RESTful APIs for user authentication, video uploads, metadata management, and database operations. The frontend is built using Angular and TypeScript, enabling users to upload videos, browse content, play videos, leave comments, and subscribe to other users. The application integrates persistent data storage for user accounts, video metadata, and interactions, supporting a dynamic content-driven platform. Development followed an Agile workflow, with responsibilities divided across team members to design the system architecture, implement backend services, and develop responsive frontend interfaces. The final product demonstrates a complete client-server architecture with asynchronous API communication and a scalable structure suitable for media-sharing applications.",
    githubUrl: "https://github.com/LuluLizzy8/Video-Sharing-Platform",
    demoUrl: "",
    year: "2024",
    status: "Web app",
    meta: "Creator Platform",
    tech: ["Java", "HTML", "CSS", "TypeScript", "Angular", "Spring Boot", "Node.js", "Maven"],
    palette: "from-[#c8d8d3] via-[#d9e6ff] to-[#8dc9f2]",
  },
  {
    id: "legal-qa-llm-evaluation",
    title: "Legal Q&A LLM Evaluation",
    summary: "NLP project focused on evaluating large language models for legal question answering.",
    shortDescription:
      "Developed an evaluation framework to benchmark large language models on legal multiple-choice question answering using the CaseHOLD dataset. Ran local inference across multiple LLMs and legal NLP models, standardized outputs using regex parsing, and compared performance across architectures. Proposed a Weighted Correctness Score to better evaluate reasoning quality beyond simple accuracy.",
    longDescription:
      "This research project benchmarks the performance of modern large language models on legal multiple-choice question answering tasks. Using the CaseHOLD dataset, the system evaluates models such as Llama, Gemma, Phi-3, and Mistral by running local inference pipelines through Ollama. The evaluation framework processes model outputs, cleans inconsistent responses using regular expressions, and converts them into standardized answer formats to enable reliable cross-model comparison. The project also evaluates specialized legal NLP models, including BERT-Double and Legal-BERT, to compare domain-specific architectures against general-purpose LLMs. To address shortcomings in traditional evaluation metrics, the project proposes a Weighted Correctness Score, which accounts for partial reasoning correctness rather than relying solely on strict accuracy. The final system includes automated experiment scripts, dataset preprocessing pipelines, structured output parsing, and comparative evaluation across multiple model architectures.",
    githubUrl: "https://github.com/LuluLizzy8/NLP-Evaluating-Large-Language-Models-for-Legal-Q-A",
    demoUrl: "",
    year: "2024",
    status: "NLP project",
    meta: "Legal NLP",
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "Ollama", "RegEx"],
    palette: "from-[#d9dde8] via-[#eef1f7] to-[#c6d2ea]",
  },
  {
    id: "recipe-book",
    title: "Recipe Book",
    summary: "Recipe-focused application for organizing and exploring cooking content.",
    shortDescription:
      "Designed and implemented a desktop recipe management application with a graphical interface built using Java Swing. The system supports creating, editing, deleting, and searching recipes while maintaining persistent storage across sessions. The project emphasizes modular object-oriented design and event-driven GUI programming.",
    longDescription:
      "This project is a desktop recipe management application designed with object-oriented programming principles and implemented in Java using Swing for the graphical user interface. The application allows users to create, edit, delete, and search recipes through an intuitive GUI interface while maintaining persistent data storage across sessions. The system architecture separates responsibilities across classes representing recipes, storage management, and user interaction logic, following modular design practices. Users can manage recipe ingredients, preparation steps, and metadata such as cooking time and categories. The application demonstrates the use of Java collections, event-driven GUI programming, and file-based persistence to support CRUD operations. Emphasis was placed on maintainable code structure and usability, resulting in a responsive application capable of organizing and retrieving recipes efficiently.",
    githubUrl: "https://github.com/LuluLizzy8/Recipe-Book",
    demoUrl: "",
    year: "2024",
    status: "App project",
    meta: "Food App",
    tech: ["Java", "Java Swing", "Maven"],
    palette: "from-[#f3d7c3] via-[#fff0db] to-[#f5b38b]",
  },
];
