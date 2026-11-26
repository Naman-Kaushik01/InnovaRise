
import { Link } from "react-router-dom";
import services from "../data/services";

import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Award,
  MessagesSquare,
  Lightbulb,
  Users,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Building2,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

import WhyUs from "../sections/WhyUs";
import Approach from "../sections/Approach";
import ContactCTA from "../sections/ContactCTA";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe in ethical business practices, honesty, and accountability in every engagement.",
  },
  {
    icon: MessagesSquare,
    title: "Transparency",
    description:
      "We encourage open communication and clarity throughout our business relationships.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We are committed to delivering solutions that meet our clients' requirements and expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace technology, new ideas, and continuous improvement to create meaningful value.",
  },
  {
    icon: Handshake,
    title: "Professionalism",
    description:
      "We approach every engagement with dedication, responsibility, and respect.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe shared knowledge and strong partnerships are essential for long-term success.",
  },
];

const expertise = services.map((service) => service.title);

const AboutPage = () => {
  return (
    <>

      {/* PAGE HERO */}
      <PageHero
        eyebrow="About InnovaRise Technology"
        title="Driven by Innovation."
        highlight="Powered by People."
        description="We bring technology, talent, and strategic expertise together to help organizations navigate challenges, unlock opportunities, and achieve sustainable business growth."
        breadcrumbs={[
          { label: "About Us" },
        ]}
        ctaText="Connect With Our Team"
        ctaLink="/contact"
      />

      {/* WHO WE ARE */}
      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>

              <SectionHeading
                eyebrow="Who We Are"
                title={
                  <>
                    Your Trusted Technology
                    <span className="block text-blue-600">
                      & Talent Partner.
                    </span>
                  </>
                }
              />

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">

                <p>
                  At InnovaRise Technology, we believe that
                  the right technology and the right talent
                  are the foundation of business success.
                </p>

                <p>
                  We are a technology consulting and IT
                  staffing company committed to helping
                  organizations navigate today's evolving
                  digital landscape.
                </p>

                <p>
                  We partner with businesses to understand
                  their unique challenges and deliver
                  customized technology solutions, skilled
                  professionals, and strategic talent
                  acquisition services.
                </p>

                <p>
                  Our approach focuses on building long-term
                  partnerships through transparency,
                  professionalism, responsiveness, and a
                  commitment to quality.
                </p>

              </div>

              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discover Our Services
                <ArrowUpRight size={18} />
              </Link>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative isolate overflow-hidden rounded-[32px] bg-[#07152f] p-8 text-white shadow-2xl sm:p-10">

              <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/25 blur-[100px]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                The InnovaRise Philosophy
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Technology Meets Talent.
                <span className="block text-blue-300">
                  Businesses Move Forward.
                </span>
              </h3>

              <div className="mt-9 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Code2
                    size={32}
                    className="text-blue-300"
                  />

                  <h4 className="mt-5 text-lg font-bold">
                    Technology
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Expertise that enables innovation.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Users
                    size={32}
                    className="text-blue-300"
                  />

                  <h4 className="mt-5 text-lg font-bold">
                    Talent
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Professionals who create value.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Building2
                    size={32}
                    className="text-blue-300"
                  />

                  <h4 className="mt-5 text-lg font-bold">
                    Business
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Solutions aligned with your goals.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Handshake
                    size={32}
                    className="text-blue-300"
                  />

                  <h4 className="mt-5 text-lg font-bold">
                    Partnership
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Relationships built on trust.
                  </p>

                </div>

              </div>

              <div className="mt-7 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">

                <p className="text-sm font-semibold leading-7 text-blue-100">
                  Your Business Goals. Our Technology
                  Expertise. The Right Talent.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION AND VISION */}
      <section className="bg-slate-50 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Purpose"
            title="What Drives Us Forward."
            description="Our mission and vision guide our approach to technology, talent, and business partnerships."
            centered
          />

          <div className="mt-14 grid gap-7 lg:grid-cols-2">

            {/* MISSION */}
            <article className="group rounded-[30px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl lg:p-12">

              <div className="inline-flex rounded-2xl bg-blue-50 p-5 text-blue-600">
                <Target size={36} strokeWidth={1.7} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Purpose
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-slate-950">
                Our Mission
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600">
                To help businesses grow through innovation,
                technology, and exceptional talent by
                delivering customized solutions aligned
                with their organizational goals.
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-blue-600 transition-all group-hover:w-28" />

            </article>

            {/* VISION */}
            <article className="group relative isolate overflow-hidden rounded-[30px] bg-[#07152f] p-8 text-white transition hover:-translate-y-1 hover:shadow-xl lg:p-12">

              <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/25 blur-[90px]" />

              <div className="inline-flex rounded-2xl bg-blue-500/15 p-5 text-blue-300">
                <Eye size={36} strokeWidth={1.7} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-widest text-blue-300">
                Our Aspiration
              </p>

              <h3 className="mt-3 text-3xl font-extrabold">
                Our Vision
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-300">
                To become a trusted technology and talent
                partner recognized for innovation,
                professionalism, quality, and meaningful
                contributions to business transformation.
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-blue-400 transition-all group-hover:w-28" />

            </article>

          </div>

        </div>

      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="What We Believe In"
            title="Our Core Values."
            description="The principles that shape our decisions, define our relationships, and guide the way we work."
            centered
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-[26px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >

                  <div className="inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* OUR EXPERTISE */}
      <section className="bg-slate-50 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <SectionHeading
                eyebrow="Our Expertise"
                title="One Partner. Multiple Possibilities."
                description="We bring complementary technology and talent capabilities together to support your evolving business requirements."
              />

              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-800"
              >
                Explore Our Capabilities
                <ArrowUpRight size={18} />
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6"
                >

                  <CheckCircle2
                    size={24}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="font-semibold text-slate-800">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* REUSABLE SECTIONS */}
      <WhyUs />

      <Approach />

      <ContactCTA />

    </>
  );
};

export default AboutPage;
