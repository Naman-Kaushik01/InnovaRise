
import { Link } from "react-router-dom";

import {
  Handshake,
  Users,
  Code2,
  Layers3,
  ShieldCheck,
  Building2,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const differentiators = [
  {
    number: "01",
    icon: Handshake,
    title: "Client-Centric Approach",
    description:
      "We take the time to understand your business objectives, challenges, and requirements to deliver solutions tailored to your unique needs.",
  },
  {
    number: "02",
    icon: Users,
    title: "Access to Skilled Talent",
    description:
      "We connect organizations with qualified professionals who bring relevant experience, technical expertise, and the right capabilities.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Technology-Driven Solutions",
    description:
      "We combine technology expertise with strategic thinking to help businesses adapt, innovate, and grow in an evolving digital landscape.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Flexible Workforce Models",
    description:
      "Our adaptable workforce solutions support changing business requirements, helping organizations build capable and scalable teams.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Commitment to Quality",
    description:
      "We emphasize professionalism, candidate suitability, responsiveness, and consistent service throughout every engagement.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Long-Term Partnerships",
    description:
      "We believe in building lasting business relationships through trust, transparency, collaboration, and a commitment to shared success.",
  },
];

const values = [
  "Transparency",
  "Professionalism",
  "Responsiveness",
  "Quality",
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="Why Choose InnovaRise"
          title={
            <>
              Your Success Is Our Priority.
              <span className="mt-2 block text-blue-600">
                Your Growth Is Our Commitment.
              </span>
            </>
          }
          description="We go beyond traditional staffing and technology services by combining the right expertise, strategic thinking, and a client-first approach to create meaningful business value."
          centered
        />

        {/* DIFFERENTIATOR CARDS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
              >

                {/* Decorative Hover Background */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon and Number */}
                <div className="relative flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-slate-400">
                    {item.number}
                  </span>

                </div>

                {/* Title */}
                <h3 className="relative mt-7 text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 h-px w-full bg-slate-100" />

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <CheckCircle2 size={16} />
                  The InnovaRise Advantage
                </div>

                {/* Hover Animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

              </article>
            );
          })}

        </div>

        {/* OUR PROMISE BANNER */}
        <div className="relative mt-20 isolate overflow-hidden rounded-[32px] bg-[#07152f] px-8 py-12 text-white lg:px-14 lg:py-16">

          {/* Background Effects */}
          <div className="pointer-events-none absolute -right-20 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/25 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[90px]" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

            {/* LEFT CONTENT */}
            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/5 px-4 py-2">

                <span className="h-2 w-2 rounded-full bg-blue-400" />

                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  Our Promise
                </span>

              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Your Business Goals.
                <span className="block text-blue-300">
                  Our Technology Expertise.
                </span>
                The Right Talent.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                We are committed to helping businesses move forward
                through innovative technology, exceptional talent,
                and partnerships built on trust and shared success.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Partner With Us
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white"
                >
                  More About InnovaRise
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

            {/* RIGHT CORE VALUES */}
            <div className="rounded-[26px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                What Defines Us
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                Our Core Values
              </h3>

              <div className="mt-7 space-y-4">

                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-400/40 hover:bg-white/10"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                      <CheckCircle2 size={19} />
                    </div>

                    <span className="text-sm font-semibold text-slate-100">
                      {value}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyUs;
