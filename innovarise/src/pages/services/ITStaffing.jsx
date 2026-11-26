
import {
  Users,
  BriefcaseBusiness,
  Code2,
  Clock,
  Search,
  Network,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "IT Staffing",

  path: "/services/it-staffing",

  eyebrow: "IT Staffing Solutions",

  title: "The Right Talent.",

  highlight: "At the Right Time.",

  description:
    "Connect your organization with skilled technology professionals who bring the right expertise, experience, and capabilities to support your business objectives.",

  overviewTitle:
    "Empowering Businesses Through Exceptional IT Talent.",

  overview: [
    "In today's rapidly evolving technology landscape, finding the right IT professionals is essential for business success.",

    "At InnovaRise Technology, we help organizations identify and connect with qualified technology professionals aligned with their technical requirements, organizational culture, and business goals.",

    "Our IT staffing approach focuses on understanding your requirements, identifying suitable candidates, and supporting flexible workforce strategies that help your organization move forward.",
  ],

  capabilities: [
    "Contract IT Staffing",
    "Permanent IT Staffing",
    "Technical Recruitment",
    "Project-Based Staffing",
    "IT Staff Augmentation",
    "Specialized Technology Talent",
  ],

  offeringsTitle:
    "Flexible IT Staffing Solutions.",

  offerings: [
    {
      icon: Users,
      title: "Contract Staffing",
      description:
        "Access skilled IT professionals for short-term and long-term contractual requirements.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Permanent Staffing",
      description:
        "Identify qualified professionals for permanent positions aligned with your long-term business goals.",
    },
    {
      icon: Code2,
      title: "Technical Recruitment",
      description:
        "Connect with professionals across software development, cloud, data, AI, and other technology domains.",
    },
    {
      icon: Clock,
      title: "Project-Based Staffing",
      description:
        "Build project-specific teams with expertise aligned to your technical and delivery requirements.",
    },
    {
      icon: Search,
      title: "Candidate Screening",
      description:
        "Evaluate candidates based on relevant skills, experience, and suitability for your requirements.",
    },
    {
      icon: Network,
      title: "Staff Augmentation",
      description:
        "Extend your existing technology teams with specialized professionals as your business needs evolve.",
    },
  ],

  benefits: [
    "Access to specialized IT talent",
    "Flexible staffing arrangements",
    "Reduced recruitment effort",
    "Business-aligned candidate selection",
    "Scalable technology teams",
    "Professional recruitment support",
    "Support for evolving project needs",
    "Long-term workforce partnerships",
  ],

  process: [
    {
      title: "Understand Requirements",
      description:
        "Understand your technical requirements, business objectives, and hiring expectations.",
    },
    {
      title: "Source Talent",
      description:
        "Identify professionals with relevant technical expertise and experience.",
    },
    {
      title: "Evaluate Candidates",
      description:
        "Screen candidates based on skills, qualifications, and role suitability.",
    },
    {
      title: "Coordinate Onboarding",
      description:
        "Support candidate selection, onboarding coordination, and ongoing communication.",
    },
  ],

  related: [
    "/services/talent-acquisition",
    "/services/workforce-solutions",
    "/services/technology-consulting",
  ],
};

const ITStaffing = () => {
  return <ServicePageLayout service={service} />;
};

export default ITStaffing;
