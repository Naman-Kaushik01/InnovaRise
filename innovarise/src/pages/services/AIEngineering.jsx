
import {
  BrainCircuit,
  Bot,
  Database,
  Workflow,
  MessageSquare,
  Cpu,
} from "lucide-react";

import ServicePageLayout from "../../components/ServicePageLayout";

const service = {
  name: "AI Engineering",

  path: "/services/ai-engineering",

  eyebrow: "Artificial Intelligence Engineering",

  title: "Intelligent Technology.",

  highlight: "Limitless Possibilities.",

  description:
    "Explore the potential of artificial intelligence, machine learning, generative AI, and intelligent automation to address complex business challenges.",

  overviewTitle:
    "Engineering Intelligent Solutions for Modern Businesses.",

  overview: [
    "Artificial intelligence is transforming how organizations process information, automate workflows, and build digital products.",

    "InnovaRise Technology aims to help businesses identify practical AI opportunities and develop intelligent solutions aligned with their objectives.",

    "Our proposed AI engineering approach focuses on business use cases, responsible AI implementation, data privacy, model evaluation, and reliable integration with existing systems.",
  ],

  capabilities: [
    "Generative AI Solutions",
    "Large Language Model Integration",
    "Machine Learning Engineering",
    "AI Chatbots & Assistants",
    "Retrieval-Augmented Generation",
    "Intelligent Workflow Automation",
  ],

  offeringsTitle:
    "AI Engineering & Intelligent Automation.",

  offerings: [
    {
      icon: BrainCircuit,
      title: "Generative AI Solutions",
      description:
        "Develop AI-powered applications that support content generation, information processing, and business workflows.",
    },
    {
      icon: Cpu,
      title: "LLM Integration",
      description:
        "Integrate large language models into applications and business systems based on defined requirements.",
    },
    {
      icon: Bot,
      title: "AI Assistants",
      description:
        "Build intelligent assistants that support customer interactions and internal business operations.",
    },
    {
      icon: Database,
      title: "RAG Solutions",
      description:
        "Develop retrieval-augmented generation systems that connect AI applications with relevant knowledge sources.",
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description:
        "Explore AI-driven automation for repetitive tasks and information-intensive workflows.",
    },
    {
      icon: MessageSquare,
      title: "Machine Learning Solutions",
      description:
        "Develop and evaluate machine learning solutions for defined business use cases.",
    },
  ],

  benefits: [
    "Intelligent workflow automation",
    "AI-powered digital products",
    "Improved information accessibility",
    "Integration with existing applications",
    "Business-focused AI use cases",
    "Responsible AI development",
    "Data-driven decision support",
    "Scalable AI application architecture",
  ],

  process: [
    {
      title: "Identify Use Cases",
      description:
        "Understand business challenges and evaluate where AI may provide meaningful value.",
    },
    {
      title: "Design AI Solution",
      description:
        "Define data requirements, model selection, architecture, and evaluation criteria.",
    },
    {
      title: "Build & Evaluate",
      description:
        "Develop the AI solution and evaluate its performance, reliability, and limitations.",
    },
    {
      title: "Integrate & Improve",
      description:
        "Integrate the solution into business workflows and support ongoing evaluation.",
    },
  ],

  related: [
    "/services/software-development",
    "/services/technology-consulting",
    "/services/app-development",
  ],
};

const AIEngineering = () => {
  return <ServicePageLayout service={service} />;
};

export default AIEngineering;
