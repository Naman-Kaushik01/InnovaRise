
import {
  HeartPulse,
  Stethoscope,
  Users,
  Hospital,
  ClipboardCheck,
  BriefcaseBusiness,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "Healthcare Staffing",

  path: "/services/healthcare-staffing",

  eyebrow: "Healthcare Staffing Solutions",

  title: "Exceptional Healthcare Talent.",

  highlight: "Supporting Better Care.",

  description:
    "Connect healthcare organizations with qualified clinical, allied healthcare, and administrative professionals aligned with their workforce requirements.",

  overviewTitle:
    "Supporting Healthcare Through the Right Professionals.",

  overview: [
    "Healthcare organizations depend on qualified and capable professionals to support patient care and operational requirements.",

    "InnovaRise Technology aims to connect healthcare institutions with suitable professionals based on role-specific qualifications, experience, and organizational needs.",

    "Our healthcare staffing approach emphasizes candidate suitability, professional qualifications, communication, and applicable credential verification requirements.",
  ],

  capabilities: [
    "Clinical Staffing",
    "Nursing Recruitment",
    "Allied Healthcare Staffing",
    "Healthcare Administration",
    "Healthcare IT Staffing",
    "Credential Verification Coordination",
  ],

  offeringsTitle:
    "Specialized Healthcare Staffing Solutions.",

  offerings: [
    {
      icon: Stethoscope,
      title: "Clinical Staffing",
      description:
        "Identify appropriately qualified clinical professionals aligned with healthcare organization requirements.",
    },
    {
      icon: HeartPulse,
      title: "Nursing Recruitment",
      description:
        "Support recruitment of nursing professionals based on applicable qualifications and role requirements.",
    },
    {
      icon: Users,
      title: "Allied Healthcare Staffing",
      description:
        "Connect organizations with suitable allied healthcare and technical support professionals.",
    },
    {
      icon: Hospital,
      title: "Healthcare Administration",
      description:
        "Identify professionals for healthcare administration and operational support roles.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Healthcare IT Staffing",
      description:
        "Connect healthcare organizations with technology professionals supporting digital healthcare systems.",
    },
    {
      icon: ClipboardCheck,
      title: "Credential Coordination",
      description:
        "Support applicable qualification, registration, and professional credential verification processes.",
    },
  ],

  benefits: [
    "Role-specific healthcare recruitment",
    "Access to relevant professionals",
    "Qualification-focused screening",
    "Flexible workforce support",
    "Healthcare IT talent",
    "Structured recruitment coordination",
    "Professional communication",
    "Organization-specific staffing strategies",
  ],

  process: [
    {
      title: "Understand Staffing Needs",
      description:
        "Identify role requirements, qualifications, and applicable regulatory expectations.",
    },
    {
      title: "Source Professionals",
      description:
        "Identify healthcare professionals aligned with the specified requirements.",
    },
    {
      title: "Evaluate Credentials",
      description:
        "Coordinate relevant qualification, registration, and experience verification.",
    },
    {
      title: "Support Placement",
      description:
        "Coordinate selection and onboarding with the healthcare organization.",
    },
  ],

  related: [
    "/services/talent-acquisition",
    "/services/workforce-solutions",
    "/services/it-staffing",
  ],
};

const HealthcareStaffing = () => {
  return <ServicePageLayout service={service} />;
};

export default HealthcareStaffing;
