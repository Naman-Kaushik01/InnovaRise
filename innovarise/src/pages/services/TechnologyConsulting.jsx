
import {
  Lightbulb,
  Cloud,
  Layers3,
  Workflow,
  ShieldCheck,
  Code2,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "Technology Consulting",

  path: "/services/technology-consulting",

  eyebrow: "Technology Consulting Services",

  title: "Transform Your Business.",

  highlight: "Through Technology.",

  description:
    "Navigate complex technology challenges with strategic guidance, modern solutions, and expertise aligned with your business objectives.",

  overviewTitle:
    "Technology Strategies Built Around Your Business.",

  overview: [
    "Technology plays a critical role in how modern businesses operate, innovate, and compete.",

    "At InnovaRise Technology, we help organizations understand technology opportunities, evaluate challenges, and identify practical solutions that support business transformation.",

    "Our consulting approach brings together strategic thinking and technical expertise to help businesses make informed technology decisions.",
  ],

  capabilities: [
    "Technology Strategy",
    "Digital Transformation",
    "Cloud Consulting",
    "Software Architecture",
    "Process Automation",
    "Technology Modernization",
  ],

  offeringsTitle:
    "Technology Consulting Capabilities.",

  offerings: [
    {
      icon: Lightbulb,
      title: "Technology Strategy",
      description:
        "Develop technology roadmaps aligned with organizational goals and future requirements.",
    },
    {
      icon: Cloud,
      title: "Cloud Consulting",
      description:
        "Evaluate cloud adoption, infrastructure modernization, and scalable architecture opportunities.",
    },
    {
      icon: Layers3,
      title: "Digital Transformation",
      description:
        "Identify opportunities to modernize business operations through digital technologies.",
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description:
        "Explore automation solutions that can simplify repetitive workflows and improve efficiency.",
    },
    {
      icon: Code2,
      title: "Software Architecture",
      description:
        "Support technology selection and application architecture planning.",
    },
    {
      icon: ShieldCheck,
      title: "Technology Assessment",
      description:
        "Evaluate existing technology environments and identify potential areas for improvement.",
    },
  ],

  benefits: [
    "Informed technology decisions",
    "Business-aligned technology strategies",
    "Scalable architecture planning",
    "Improved operational efficiency",
    "Technology modernization support",
    "Identification of automation opportunities",
    "Reduced technology complexity",
    "Long-term transformation planning",
  ],

  process: [
    {
      title: "Discover",
      description:
        "Understand your existing technology environment and business challenges.",
    },
    {
      title: "Assess",
      description:
        "Evaluate requirements, opportunities, and potential technology solutions.",
    },
    {
      title: "Strategize",
      description:
        "Develop a practical technology roadmap aligned with your goals.",
    },
    {
      title: "Support",
      description:
        "Provide guidance throughout the agreed implementation and improvement process.",
    },
  ],

  related: [
    "/services/software-development",
    "/services/ai-engineering",
    "/services/app-development",
  ],
};

const TechnologyConsulting = () => {
  return <ServicePageLayout service={service} />;
};

export default TechnologyConsulting;
