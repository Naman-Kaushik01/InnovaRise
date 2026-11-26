
import {
  Network,
  Users,
  Layers3,
  Target,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "Workforce Solutions",

  path: "/services/workforce-solutions",

  eyebrow: "Strategic Workforce Solutions",

  title: "Build Stronger Teams.",

  highlight: "Grow With Confidence.",

  description:
    "Flexible workforce strategies designed to help organizations build capable teams and adapt to changing business requirements.",

  overviewTitle:
    "Workforce Solutions for an Evolving Business Landscape.",

  overview: [
    "Modern businesses need workforce strategies that can adapt to changing priorities, project requirements, and market conditions.",

    "InnovaRise Technology helps organizations identify suitable workforce models and connect with professionals who support their operational objectives.",

    "We focus on flexibility, collaboration, and long-term workforce alignment to help businesses build capable and adaptable teams.",
  ],

  capabilities: [
    "Workforce Planning",
    "Flexible Staffing",
    "Team Augmentation",
    "Resource Management Support",
    "Project Workforce Solutions",
    "Strategic Workforce Consulting",
  ],

  offeringsTitle:
    "Workforce Solutions That Adapt to Your Needs.",

  offerings: [
    {
      icon: ClipboardList,
      title: "Workforce Planning",
      description:
        "Identify workforce requirements aligned with current and future business objectives.",
    },
    {
      icon: Users,
      title: "Flexible Staffing",
      description:
        "Support changing resource requirements through adaptable staffing arrangements.",
    },
    {
      icon: Layers3,
      title: "Team Augmentation",
      description:
        "Extend existing teams with professionals who bring relevant capabilities.",
    },
    {
      icon: Network,
      title: "Resource Coordination",
      description:
        "Support workforce allocation and coordination based on business needs.",
    },
    {
      icon: Target,
      title: "Project Workforce Solutions",
      description:
        "Identify suitable talent for project-specific workforce requirements.",
    },
    {
      icon: TrendingUp,
      title: "Workforce Scalability",
      description:
        "Develop workforce strategies that support evolving organizational requirements.",
    },
  ],

  benefits: [
    "Flexible workforce strategies",
    "Scalable resource planning",
    "Business-aligned staffing",
    "Access to relevant expertise",
    "Improved workforce adaptability",
    "Reduced recruitment complexity",
    "Support for project requirements",
    "Long-term workforce collaboration",
  ],

  process: [
    {
      title: "Analyze",
      description:
        "Understand your current workforce and future resource requirements.",
    },
    {
      title: "Plan",
      description:
        "Identify suitable workforce strategies and engagement models.",
    },
    {
      title: "Connect",
      description:
        "Identify professionals aligned with your workforce requirements.",
    },
    {
      title: "Collaborate",
      description:
        "Support workforce coordination and ongoing business communication.",
    },
  ],

  related: [
    "/services/it-staffing",
    "/services/talent-acquisition",
    "/services/healthcare-staffing",
  ],
};

const WorkforceSolutions = () => {
  return <ServicePageLayout service={service} />;
};

export default WorkforceSolutions;
