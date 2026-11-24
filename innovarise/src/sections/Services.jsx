
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Lightbulb,
  Network,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const services = [
  {
    number: "01",
    title: "IT Staffing",
    description:
      "Access highly skilled IT professionals with the right technical expertise to meet your evolving business requirements.",
    icon: Users,
    path: "/services/it-staffing",
  },
  {
    number: "02",
    title: "Talent Acquisition",
    description:
      "Identify, attract, and recruit exceptional professionals through strategic and customized recruitment solutions.",
    icon: Target,
    path: "/services/talent-acquisition",
  },
  {
    number: "03",
    title: "Technology Consulting",
    description:
      "Transform your business with expert technology guidance, innovative strategies, and practical digital solutions.",
    icon: Lightbulb,
    path: "/services/technology-consulting",
  },
  {
    number: "04",
    title: "Workforce Solutions",
    description:
      "Build flexible, scalable, and capable teams aligned with your business objectives and workforce requirements.",
    icon: Network,
    path: "/services/workforce-solutions",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Solutions. One Trusted Partner."
            description="We bring technology, talent, and strategic expertise together to help businesses overcome challenges and achieve sustainable growth."
          />

          <Link
            to="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-800"
          >
            View All Services
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* SERVICE CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                to={service.path}
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number and Icon */}
                <div className="relative flex items-center justify-between">

                  <span className="text-sm font-bold tracking-[0.18em] text-slate-400">
                    {service.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                </div>

                {/* Service Title */}
                <h3 className="relative mt-9 text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="mt-7 h-px w-full bg-slate-100" />

                {/* Learn More */}
                <div className="mt-5 flex items-center justify-between">

                  <span className="text-sm font-bold text-blue-600">
                    Learn More
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowRight size={17} />
                  </span>

                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

              </Link>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-blue-100 bg-blue-50/70 px-7 py-8 md:flex-row lg:px-10">

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Looking for a customized solution?
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Let's discuss your business requirements and find
              the right solution together.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Discuss Your Requirements
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Services;
