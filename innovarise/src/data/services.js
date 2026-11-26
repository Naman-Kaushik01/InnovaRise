import {
  Users,
  Target,
  Lightbulb,
  Network,
  Code2,
  HeartPulse,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

export const services = [
  {
    number: "01",
    title: "IT Staffing",
    description:
      "Access highly skilled IT professionals with the right technical expertise to meet your evolving business requirements.",
    shortDescription:
      "Connect with skilled IT professionals.",
    icon: Users,
    path: "/services/it-staffing",
  },
  {
    number: "02",
    title: "Talent Acquisition",
    description:
      "Identify, attract, and recruit exceptional professionals through strategic and customized recruitment solutions.",
    shortDescription:
      "Find the right talent for your business.",
    icon: Target,
    path: "/services/talent-acquisition",
  },
  {
    number: "03",
    title: "Technology Consulting",
    description:
      "Transform your business with expert technology guidance, innovative strategies, and practical digital solutions.",
    shortDescription:
      "Transform your business through technology.",
    icon: Lightbulb,
    path: "/services/technology-consulting",
  },
  {
    number: "04",
    title: "Workforce Solutions",
    description:
      "Build flexible, scalable, and capable teams aligned with your business objectives and workforce requirements.",
    shortDescription:
      "Build flexible and scalable teams.",
    icon: Network,
    path: "/services/workforce-solutions",
  },
  {
    number: "05",
    title: "Software Development",
    description:
      "Build secure, scalable, and customized software solutions designed to streamline operations and accelerate business growth.",
    shortDescription:
      "Custom software and enterprise solutions.",
    icon: Code2,
    path: "/services/software-development",
  },
  {
    number: "06",
    title: "Healthcare Staffing",
    description:
      "Connect healthcare organizations with qualified medical, clinical, and allied healthcare professionals aligned with their workforce needs.",
    shortDescription:
      "Connect with qualified healthcare professionals.",
    icon: HeartPulse,
    path: "/services/healthcare-staffing",
  },
  {
    number: "07",
    title: "AI Engineering",
    description:
      "Leverage artificial intelligence, machine learning, generative AI, and intelligent automation to solve complex business challenges.",
    shortDescription:
      "Build intelligent AI-powered solutions.",
    icon: BrainCircuit,
    path: "/services/ai-engineering",
  },
  {
    number: "08",
    title: "App Development",
    description:
      "Create intuitive, high-performance mobile and cross-platform applications that deliver seamless digital experiences.",
    shortDescription:
      "Build modern mobile applications.",
    icon: Smartphone,
    path: "/services/app-development",
  },
];

export default services;