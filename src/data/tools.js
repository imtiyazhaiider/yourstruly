import {
  FileText,
  Code2,
  Leaf,
  Users,
  BookOpen,
  Image,
  Dumbbell,
  Gamepad2,
  Map,
} from "lucide-react";

export const tools = [
  {
    id: "forge-resume",
    name: "ForgeResume",
    description:
      "Build ATS-friendly resumes, analyze job descriptions, and improve your resume before applying.",
    category: "Career",
    status: "Live",
    icon: FileText,
    url: "https://forge-resume-omega.vercel.app/",
    github: "https://github.com/imtiyazhaiider/forge-resume",
    technologies: ["React", "JavaScript", "Vite"],
    featured: true,
  },

  {
    id: "code-humanizer",
    name: "CodeHumanizer",
    description:
      "Make AI-generated code cleaner, more natural, readable, and easier for humans to understand.",
    category: "Developer",
    status: "Live",
    icon: Code2,
    url: "#",
    github: "#",
    technologies: ["React", "AI"],
    featured: true,
  },

  {
    id: "plant-disease",
    name: "Plant Disease Detection",
    description:
      "Upload a plant image and identify potential diseases using an AI-powered detection system.",
    category: "AI",
    status: "Live",
    icon: Leaf,
    url: "https://plantdiseasedetection-80k7.onrender.com",
    github: "#",
    technologies: ["Python", "Machine Learning"],
    featured: true,
  },

  {
    id: "help-yourself",
    name: "Help Yourself",
    description:
      "Find useful local service providers and important contacts when you need help nearby.",
    category: "Community",
    status: "Live",
    icon: Users,
    url: "#",
    github: "https://github.com/imtiyazhaiider/help-yourself",
    technologies: ["React", "Supabase", "PWA"],
    featured: true,
  },

  {
    id: "sukhan",
    name: "Sukhan",
    description:
      "A calm and elegant place to discover Urdu and Hindi poetry, ghazals, shers, and poets.",
    category: "Literature",
    status: "Live",
    icon: BookOpen,
    url: "https://sukhan-6889.onrender.com",
    github: "#",
    technologies: ["Django", "Tailwind CSS"],
    featured: false,
  },

  {
    id: "snapgrid",
    name: "SnapGrid",
    description:
      "Create beautiful photo collages quickly without creating an account.",
    category: "Creative",
    status: "Live",
    icon: Image,
    url: "#",
    github: "#",
    technologies: ["Python", "Flask", "Pillow"],
    featured: false,
  },

  {
    id: "ai-fitness",
    name: "AI Fitness Tracker",
    description:
      "An experimental fitness application that uses machine learning to estimate calories burned.",
    category: "AI",
    status: "Live",
    icon: Dumbbell,
    url: "#",
    github: "#",
    technologies: ["Python", "Machine Learning"],
    featured: false,
  },

 
  {
    id: "karbala",
    name: "Karbala",
    description:
      "A multilingual digital space documenting local history, places, culture, and community information.",
    category: "Community",
    status: "Live",
    icon: Map,
    url: "https://karbala-six.vercel.app/",
    github: "#",
    technologies: ["React", "Supabase", "PWA"],
    featured: false,
  },
];

export const categories = [
  "All",
  "Career",
  "Developer",
  "AI",
  "Community",
  "Literature",
  "Creative",
  "Games",
];