
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ChevronRight,
  Handshake,
  Target,
  ShieldCheck,
  Layers3,
} from "lucide-react";

import Services from "../sections/Services";
import SectionHeading from "../components/SectionHeading";

const benefits = [
  {
    icon: Target,
    title: "Customized Solutions",
    description:
      "Services designed around your specific business goals and requirements.",
  },
  {
    icon: Layers3,
    title: "Flexible Engagement",
    description:
      "Adaptable service models that support your changing business needs.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Quality",
    description:
      "A structured approach focused on professionalism and quality delivery.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Long-term relationships built on transparency and collaboration.",
  },
];

const ServicesPage = () => {
  return (
    <>

      {/* PAGE HERO */}
      <section className="relative isolate overflow-hidden bg-[#07152f] text-white">

        {/* Background Effects */}
        <div className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/25 blur-[120px]" />

        <div className="absolute -bottom-48 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          {/* Breadcrumb */}
          <div className="mb-9 flex items-center gap-2 text-sm text-slate-400">

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <span className="font-medium text-blue-300">
              Our Services
            </span>

          </div>

          <div className="max-w-4xl">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              Technology. Talent. Transformation.
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Solutions That Empower
              <span className="block text-blue-300">
                Your Business Growth.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From connecting you with exceptional talent to
              providing strategic technology expertise, InnovaRise
              Technology delivers solutions aligned with your
              business objectives.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Let's Discuss Your Needs
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* SERVICES OVERVIEW */}
      <Services />

      {/* WHY OUR SERVICES */}
      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Commitment"
            title="More Than a Service Provider. A Growth Partner."
            description="We work closely with businesses to understand their challenges and deliver technology and talent solutions that create meaningful value."
            centered
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}
      <section className="bg-slate-50 py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[32px] bg-blue-600 px-8 py-14 text-white lg:px-14">

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/10" />

            <div className="relative max-w-2xl">

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Build Your Next Success Story.
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Discover how InnovaRise Technology can support
                your technology, recruitment, and workforce needs.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Connect With Our Team
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default ServicesPage;
