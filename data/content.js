// Portfolio Content Configuration
// Update this file to change your portfolio content

import { FileCode, Coffee, Zap, Brain, Network, Eye, Bot, Layers, Triangle, Palette, Flame, GitBranch, Container, Settings, Wrench, Award, Cpu, Code } from 'lucide-react'

// Personal Information
export const personalInfo = {
  name: 'Bhaumik',
  title: 'AI/ML Engineer & Software Developer',
  tagline: 'Building intelligent systems and scalable applications that push the boundaries of technology',
  email: 'bhaumik@example.com',
  heroImage: 'https://images.unsplash.com/photo-1606778303077-3780ea8d5420?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHxibHVlfDE3NzA5OTEwMzd8MA&ixlib=rb-4.1.0&q=85',
}

// Social Links
export const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  email: 'mailto:bhaumik@example.com',
  resume: '#', // Add your resume URL here
}

// About Me Section
export const aboutMe = {
  paragraphs: [
    "I'm a passionate AI/ML Engineer and Software Developer with expertise in building intelligent systems that solve real-world problems. My journey in technology spans across artificial intelligence, machine learning, web development, and robotics.",
    "With hands-on experience in Large Language Models (LLMs), computer vision, and full-stack development, I specialize in creating scalable applications that leverage cutting-edge AI technologies. From autonomous drones to sign language recognition systems, I thrive on transforming complex challenges into elegant solutions.",
    "As an active hackathon participant and problem solver, I continuously push myself to learn new technologies and contribute to the open-source community. I believe in writing clean, maintainable code and building products that make a meaningful impact."
  ]
}

// Skills Section
export const skills = {
  programming: [
    { name: 'Python', icon: FileCode },
    { name: 'Java', icon: Coffee },
    { name: 'JavaScript', icon: Zap },
  ],
  aiml: [
    { name: 'PyTorch', icon: Flame },
    { name: 'Whisper', icon: Network },
    { name: 'Computer Vision', icon: Eye },
    { name: 'LLMs', icon: Brain },
  ],
  web: [
    { name: 'React', icon: Layers },
    { name: 'Next.js', icon: Triangle },
    { name: 'Tailwind', icon: Palette },
    { name: 'Flask', icon: Bot },
  ],
  tools: [
    { name: 'Git', icon: GitBranch },
    { name: 'Docker', icon: Container },
    { name: 'ROS', icon: Settings },
    { name: 'Arduino', icon: Wrench },
  ],
}

// Projects Section
export const projects = [
  {
    title: 'Dynamic Sign Language to Speech System',
    description: 'Real-time sign language recognition system using computer vision and deep learning to convert sign language gestures into speech.',
    tags: ['Python', 'Computer Vision', 'PyTorch', 'OpenCV'],
    github: 'https://github.com/yourusername/sign-language-project',
    demo: '#',
  },
  {
    title: 'Autonomous Agricultural Drone',
    description: 'Autonomous drone system for precision agriculture with crop monitoring, pest detection, and automated surveying capabilities.',
    tags: ['ROS', 'Python', 'Computer Vision', 'Arduino'],
    github: 'https://github.com/yourusername/agri-drone',
    demo: '#',
  },
  {
    title: 'Driver Drowsiness Detection System',
    description: 'ML-based system that monitors driver alertness in real-time and provides warnings to prevent accidents caused by drowsiness.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi'],
    github: 'https://github.com/yourusername/drowsiness-detection',
    demo: '#',
  },
  {
    title: 'AI Music Recommendation Agent',
    description: 'Intelligent music recommendation system using LLMs and collaborative filtering to provide personalized music suggestions.',
    tags: ['Python', 'LLMs', 'Flask', 'React'],
    github: 'https://github.com/yourusername/music-agent',
    demo: '#',
  },
  {
    title: 'ML Dashboard (Streamlit)',
    description: 'Interactive dashboard for machine learning model training, evaluation, and visualization with real-time metrics.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/yourusername/ml-dashboard',
    demo: '#',
  },
]

// Experience & Achievements
export const achievements = [
  {
    icon: Award,
    title: 'Hackathon Enthusiast',
    description: 'Participated in multiple national-level hackathons, developing innovative solutions under tight deadlines.',
  },
  {
    icon: Cpu,
    title: 'AI/ML Development',
    description: 'Built production-ready AI/ML solutions focusing on computer vision, NLP, and robotics applications.',
  },
  {
    icon: Code,
    title: 'Open Source Contributor',
    description: 'Active contributor to open-source projects in the AI/ML and web development communities.',
  },
]

// Contact Section
export const contactInfo = {
  heading: 'Get In Touch',
  subheading: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  email: 'bhaumik@example.com',
}

// Footer
export const footer = {
  copyright: '2024 Bhaumik. Built with Next.js, Tailwind CSS, and Framer Motion.',
  tagline: 'Designed & Developed with 💙 by Bhaumik',
}
