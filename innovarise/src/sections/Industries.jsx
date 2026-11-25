
import { Link } from "react-router-dom";

import {
  Monitor,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  RadioTower,
  GraduationCap,
  Truck,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const industries = [
  {
    icon: Monitor,
    title: "Information Technology",
    description: "Technology talent and digital solutions.",
  },
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description: "Financial technology and workforce expertise.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Technology-enabled healthcare solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial technology and skilled professionals.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Digital commerce and customer-focused expertise.",
  },
  {
    icon: RadioTower,
    title: "Telecommunications",
    description: "Connectivity and technology capabilities.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Technology and talent for modern learning.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Digital operations and workforce solutions.",
  },
];

const Industries = () => {
  return (
    <section
      id="industries"
      className="bg-white py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Content */}
          <div>

            <SectionHeading
              eyebrow="Industries We Serve"
              title={
                <>
                  Industry Expertise.
                  <span className="block text-blue-600">
                    Solutions Without Boundaries.
                  </span>
                </>
              }
              description="Every industry has unique challenges, technology requirements, and workforce needs. We help organizations connect with the right expertise to achieve their business objectives."
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              Our flexible approach allows us to understand
              industry-specific requirements and align our
              technology and talent solutions accordingly.
            </p>

            <Link
              to="/industries"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore Industries
              <ArrowUpRight size={18} />
            </Link>

          </div>

          {/* Industry Cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.title}
                  to="/industries"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-bold leading-6 text-slate-900">
                      {industry.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {industry.description}
                    </p>

                  </div>

                  <ChevronRight
                    size={17}
                    className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                  />

                </Link>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Industries;
