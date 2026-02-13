// Portfolio Content Configuration
// Update this file to change your portfolio content

import {
  FileCode,
  Coffee,
  Zap,
  Brain,
  Network,
  Eye,
  Bot,
  Layers,
  Triangle,
  Palette,
  Flame,
  GitBranch,
  Container,
  Settings,
  Wrench,
  Award,
  Cpu,
  Code,
} from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Bhaumik",
  title: "AI/ML Engineer & Software Developer",
  tagline:
    "Building intelligent systems and scalable applications that push the boundaries of technology",
  email: "bhaumiksenwal99@gmail.com",
  heroImage:
    "https://images.unsplash.com/photo-1606778303077-3780ea8d5420?crop=entropy&cs=srgb&fm=jpg&q=85",
};

// Social Links
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",

  // Gmail web compose (desktop friendly)
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=bhaumiksenwal99@gmail.com&su=Portfolio%20Contact&body=Hi%20Bhaumik,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",

  resume: '/resume.pdf' ,
};

// About Me Section
export const aboutMe = {
  paragraphs: [
    "I'm a passionate AI/ML Engineer and Software Developer with expertise in building intelligent systems that solve real-world problems.",
    "With hands-on experience in Large Language Models (LLMs), computer vision, and full-stack development, I specialize in scalable AI-powered applications.",
    "As an active hackathon participant and problem solver, I continuously learn new technologies and build impactful solutions.",
  ],
};

// Skills Section
export const skills = {
  programming: [
    { name: "Python", icon: FileCode },
    { name: "Java", icon: Coffee },
    { name: "JavaScript", icon: Zap },
  ],
  aiml: [
    { name: "PyTorch", icon: Flame },
    { name: "Whisper", icon: Network },
    { name: "Computer Vision", icon: Eye },
    { name: "LLMs", icon: Brain },
  ],
  web: [
    { name: "React", icon: Layers },
    { name: "Next.js", icon: Triangle },
    { name: "Tailwind", icon: Palette },
    { name: "Flask", icon: Bot },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Container },
    { name: "ROS", icon: Settings },
    { name: "Arduino", icon: Wrench },
  ],
};

// Projects Section
export const projects = [
  {
    title: "Dynamic Sign Language to Speech System",
    description:
      "Real-time sign language recognition system converting gestures into speech using computer vision.",
    tags: ["Python", "Computer Vision", "PyTorch", "OpenCV"],
    github: "https://github.com/yourusername/sign-language-project",
    demo: "#",
  },
  {
    title: "Autonomous Agricultural Drone",
    description:
      "Precision agriculture drone with crop monitoring and automated surveying.",
    tags: ["ROS", "Python", "Computer Vision", "Arduino"],
    github: "https://github.com/yourusername/agri-drone",
    demo: "#",
  },
];

// Achievements
export const achievements = [
  {
    icon: Award,
    title: "Hackathon Enthusiast",
    description:
      "Participated in multiple national-level hackathons solving real-world problems.",
  },
  {
    icon: Cpu,
    title: "AI/ML Development",
    description:
      "Built production-ready AI/ML solutions across computer vision and NLP.",
  },
  {
    icon: Code,
    title: "Open Source Contributor",
    description: "Active contributor to open-source AI and web projects.",
  },
];

// Contact Section
export const contactInfo = {
  heading: "Get In Touch",
  subheading:
    "I'm always open to discussing projects, ideas, or opportunities.",
  email: "bhaumiksenwal99@gmail.com",
};

// Footer
export const footer = {
  copyright:
    "2024 Bhaumik. Built with Next.js, Tailwind CSS, and Framer Motion.",
  tagline: "Designed & Developed with 💙 by Bhaumik",
};
