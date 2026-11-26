
import {
  Target,
  Search,
  Users,
  ClipboardCheck,
  BriefcaseBusiness,
  Handshake,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "Talent Acquisition",

  path: "/services/talent-acquisition",

  eyebrow: "Strategic Talent Acquisition",

  title: "Exceptional Talent.",

  highlight: "Stronger Businesses.",

  description:
    "Identify, attract, and recruit the right professionals through strategic talent acquisition solutions aligned with your organizational goals.",

  overviewTitle:
    "Connecting Exceptional People With Meaningful Opportunities.",

  overview: [
    "Building a successful organization begins with finding the right people.",

    "InnovaRise Technology helps businesses identify and attract qualified professionals through a structured recruitment approach tailored to their requirements.",

    "We focus on understanding organizational needs, evaluating candidate suitability, and supporting recruitment decisions that contribute to long-term business growth.",
  ],

  capabilities: [
    "End-to-End Recruitment",
    "Candidate Sourcing",
    "Talent Screening",
    "Specialized Recruitment",
    "Strategic Hiring Support",
    "Recruitment Coordination",
  ],

  offeringsTitle:
    "Strategic Recruitment Solutions.",

  offerings: [
    {
      icon: Target,
      title: "End-to-End Recruitment",
      description:
        "Recruitment support from requirement analysis to candidate selection and onboarding coordination.",
    },
    {
      icon: Search,
      title: "Candidate Sourcing",
      description:
        "Identify suitable candidates through targeted sourcing strategies.",
    },
    {
      icon: Users,
      title: "Specialized Recruitment",
      description:
        "Find professionals with specialized skills aligned with specific organizational requirements.",
    },
    {
      icon: ClipboardCheck,
      title: "Candidate Evaluation",
      description:
        "Evaluate candidate qualifications, experience, and suitability for available roles.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Strategic Hiring",
      description:
        "Support recruitment initiatives aligned with long-term organizational growth.",
    },
    {
      icon: Handshake,
      title: "Recruitment Partnership",
      description:
        "Build collaborative recruitment relationships focused on quality and communication.",
    },
  ],

  benefits: [
    "Targeted candidate sourcing",
    "Structured recruitment process",
    "Improved candidate alignment",
    "Reduced internal hiring workload",
    "Flexible recruitment support",
    "Access to specialized professionals",
    "Transparent communication",
    "Long-term talent planning",
  ],

  process: [
    {
      title: "Requirement Analysis",
      description:
        "Understand the role, qualifications, expectations, and organizational requirements.",
    },
    {
      title: "Talent Identification",
      description:
        "Source professionals aligned with the defined recruitment criteria.",
    },
    {
      title: "Screening & Evaluation",
      description:
        "Evaluate candidate suitability and coordinate the selection process.",
    },
    {
      title: "Hiring Support",
      description:
        "Support final selection and onboarding coordination.",
    },
  ],

  related: [
    "/services/it-staffing",
    "/services/healthcare-staffing",
    "/services/workforce-solutions",
  ],
};

const TalentAcquisition = () => {
  return <ServicePageLayout service={service} />;
};

export default TalentAcquisition;
