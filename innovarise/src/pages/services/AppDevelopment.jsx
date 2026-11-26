
import {
  Smartphone,
  Tablet,
  Layers3,
  Palette,
  Server,
  Settings,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "App Development",

  path: "/services/app-development",

  eyebrow: "Mobile Application Development",

  title: "Innovative Applications.",

  highlight: "Seamless Experiences.",

  description:
    "Create intuitive, scalable, and user-focused mobile applications designed to connect businesses with their customers and support digital transformation.",

  overviewTitle:
    "Turning Innovative Ideas Into Powerful Mobile Experiences.",

  overview: [
    "Mobile applications have become an essential part of how businesses connect with customers and deliver digital services.",

    "InnovaRise Technology offers application development solutions focused on user experience, performance, maintainability, and business requirements.",

    "Our approach covers application planning, interface design, development, testing, deployment, and agreed ongoing support.",
  ],

  capabilities: [
    "Android App Development",
    "iOS App Development",
    "Cross-Platform Applications",
    "Mobile UI/UX Design",
    "Backend & API Integration",
    "Application Maintenance",
  ],

  offeringsTitle:
    "Modern Mobile Application Solutions.",

  offerings: [
    {
      icon: Smartphone,
      title: "Android Development",
      description:
        "Develop Android applications tailored to business requirements and user expectations.",
    },
    {
      icon: Tablet,
      title: "iOS Development",
      description:
        "Create mobile applications designed for the Apple ecosystem and its user experience requirements.",
    },
    {
      icon: Layers3,
      title: "Cross-Platform Development",
      description:
        "Build applications that support multiple platforms using suitable shared development technologies.",
    },
    {
      icon: Palette,
      title: "Mobile UI/UX Design",
      description:
        "Design intuitive interfaces focused on accessibility, usability, and engaging user experiences.",
    },
    {
      icon: Server,
      title: "Backend Integration",
      description:
        "Connect mobile applications with backend services, databases, and third-party APIs.",
    },
    {
      icon: Settings,
      title: "App Maintenance",
      description:
        "Support application updates, performance improvements, and ongoing maintenance requirements.",
    },
  ],

  benefits: [
    "User-focused mobile experiences",
    "Modern application architecture",
    "Cross-platform opportunities",
    "Scalable backend integration",
    "Performance-focused development",
    "Customized application features",
    "Security-focused implementation",
    "Ongoing application improvement",
  ],

  process: [
    {
      title: "Discover & Plan",
      description:
        "Understand the application idea, target users, requirements, and business objectives.",
    },
    {
      title: "Design Experience",
      description:
        "Create user flows, interface designs, and application architecture.",
    },
    {
      title: "Develop & Test",
      description:
        "Implement application functionality and test usability and performance.",
    },
    {
      title: "Launch & Support",
      description:
        "Support application deployment, store submission where applicable, and agreed maintenance.",
    },
  ],

  related: [
    "/services/software-development",
    "/services/ai-engineering",
    "/services/technology-consulting",
  ],
};

const AppDevelopment = () => {
  return <ServicePageLayout service={service} />;
};

export default AppDevelopment;
