
import { Link } from "react-router-dom";

import {
  TrendingUp,
  Lightbulb,
  Users,
  Target,
  ArrowUpRight,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const careerValues = [
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description: "Build your skills and advance your career.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Learning",
    description: "Explore new technologies and ideas.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Grow through teamwork and collaboration.",
  },
  {
    icon: Target,
    title: "Meaningful Opportunities",
    description: "Connect your expertise with business needs.",
  },
];

const Careers = () => {
  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-white py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
              <BriefcaseBusiness size={16} />
              Build Your Future
            </div>

            <SectionHeading
              eyebrow="Careers at InnovaRise"
              title={
                <>
                  Great Talent.
                  <span className="block text-blue-600">
                    Greater Opportunities.
                  </span>
                </>
              }
              description="We believe talented professionals are the driving force behind innovation and business success."
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              Whether you are an experienced technology
              professional or looking to take the next step
              in your career, InnovaRise Technology welcomes
              individuals who are passionate about learning,
              innovation, and creating meaningful impact.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Connect with us to explore opportunities that
              align with your skills, experience, and
              professional aspirations.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">

              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Careers
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3"
              >
                Connect With Us
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

          {/* Right Visual */}
          <div className="relative isolate overflow-hidden rounded-[32px] bg-[#07152f] p-7 text-white shadow-2xl shadow-slate-900/10 sm:p-10">

            <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-blue-600/25 blur-[90px]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Your Future Starts Here
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Learn. Grow. Make an Impact.
            </h3>

            <div className="mt-8 space-y-4">

              {careerValues.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>

                      <h4 className="text-sm font-bold text-white">
                        {value.title}
                      </h4>

                      <p className="mt-1 text-xs leading-6 text-slate-400">
                        {value.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Careers;
