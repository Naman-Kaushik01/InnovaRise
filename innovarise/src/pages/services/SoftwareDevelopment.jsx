
import {
  Code2,
  Globe,
  Database,
  Server,
  Layers3,
  Settings,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "Software Development",

  path: "/services/software-development",

  eyebrow: "Custom Software Development",

  title: "Engineering Software.",

  highlight: "Empowering Businesses.",

  description:
    "Build scalable, reliable, and customized software solutions designed to address business challenges and support digital growth.",

  overviewTitle:
    "Transforming Business Ideas Into Digital Solutions.",

  overview: [
    "Every business has unique operational requirements that demand the right technology solutions.",

    "InnovaRise Technology offers software development solutions focused on creating applications aligned with business objectives and user requirements.",

    "From application planning and architecture to development, testing, and deployment, our approach emphasizes maintainability, usability, security, and scalability.",
  ],

  capabilities: [
    "Custom Software Development",
    "Full-Stack Web Development",
    "Enterprise Applications",
    "API Development & Integration",
    "Application Modernization",
    "Software Maintenance",
  ],

  offeringsTitle:
    "End-to-End Software Development Solutions.",

  offerings: [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Develop customized applications tailored to your business workflows and requirements.",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Build responsive, user-friendly web applications using modern development technologies.",
    },
    {
      icon: Layers3,
      title: "Enterprise Applications",
      description:
        "Develop business applications designed to support organizational operations and scalability.",
    },
    {
      icon: Server,
      title: "API Development",
      description:
        "Create and integrate APIs that enable communication between applications and services.",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Design data storage solutions aligned with application requirements and performance needs.",
    },
    {
      icon: Settings,
      title: "Software Modernization",
      description:
        "Improve existing applications through architectural updates and technology modernization.",
    },
  ],

  benefits: [
    "Customized business applications",
    "Scalable software architecture",
    "Improved operational workflows",
    "Maintainable codebases",
    "Modern user experiences",
    "System integration capabilities",
    "Security-focused development",
    "Long-term application support",
  ],

  process: [
    {
      title: "Discovery & Planning",
      description:
        "Understand business requirements, application objectives, and project scope.",
    },
    {
      title: "Design & Architecture",
      description:
        "Plan application architecture, user experience, and technology requirements.",
    },
    {
      title: "Development & Testing",
      description:
        "Implement application features and validate functionality through testing.",
    },
    {
      title: "Deployment & Support",
      description:
        "Deploy the application and provide agreed maintenance and improvement support.",
    },
  ],

  related: [
    "/services/app-development",
    "/services/ai-engineering",
    "/services/technology-consulting",
  ],
};

const SoftwareDevelopment = () => {
  return <ServicePageLayout service={service} />;
};

export default SoftwareDevelopment;
