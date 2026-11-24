
import { Link } from "react-router-dom";
import {
  Code2,
  Cloud,
  Database,
  BrainCircuit,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const technologies = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Modern application development and full-stack engineering expertise.",
    skills: ["Java", "Python", "React", ".NET"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Cloud infrastructure, migration, and scalable architecture expertise.",
    skills: ["AWS", "Azure", "Google Cloud"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Data engineering, business intelligence, and analytical solutions.",
    skills: ["SQL", "Power BI", "Data Engineering"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Intelligent technologies that support innovation and automation.",
    skills: ["Machine Learning", "Generative AI", "NLP"],
  },
  {
    icon: Workflow,
    title: "DevOps & Automation",
    description:
      "Streamlined development, deployment, and infrastructure operations.",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security-focused expertise to support resilient digital environments.",
    skills: ["Network Security", "Cloud Security", "IAM"],
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="relative isolate overflow-hidden bg-[#07152f] py-24 text-white lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <SectionHeading
            eyebrow="Technology Expertise"
            title={
              <>
                The Right Technology.
                <span className="block text-blue-300">
                  The Right Expertise.
                </span>
              </>
            }
            description="We connect organizations with specialized technical expertise to support innovation, digital transformation, and sustainable business growth."
            dark
          />

          <Link
            to="/technology"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white"
          >
            Explore All Technologies
            <ArrowUpRight size={18} />
          </Link>

        </div>

        {/* Technology Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <Link
                key={tech.title}
                to="/technology"
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.08]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-cyan-300 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                  />

                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {tech.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {tech.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />

              </Link>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:flex-row">

          <div>
            <h3 className="text-xl font-bold">
              Need Specialized Technical Expertise?
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Let's identify the right technology and talent
              for your business requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Talk to Our Team
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Technology;
