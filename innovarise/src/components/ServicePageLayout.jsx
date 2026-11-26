
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import ContactCTA from "../sections/ContactCTA";

import services from "../data/services";

const ServicePageLayout = ({ service }) => {
  const relatedServices = services
    .filter((item) => item.path !== service.path)
    .filter((item) => service.related.includes(item.path));

  return (
    <>

      {/* PAGE HERO */}
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        highlight={service.highlight}
        description={service.description}
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label: service.name,
          },
        ]}
        ctaText="Discuss Your Requirements"
        ctaLink="/contact"
      />

      {/* SERVICE OVERVIEW */}
      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Overview Content */}
            <div>

              <SectionHeading
                eyebrow="Service Overview"
                title={service.overviewTitle}
              />

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">

                {service.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Talk to Our Experts
                <ArrowUpRight size={18} />
              </Link>

            </div>

            {/* Key Capabilities */}
            <div className="relative isolate overflow-hidden rounded-[32px] bg-[#07152f] p-8 text-white sm:p-10">

              <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/25 blur-[100px]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Our Capabilities
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                {service.name}
              </h3>

              <div className="mt-8 space-y-4">

                {service.capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      size={21}
                      className="shrink-0 text-blue-300"
                    />

                    <span className="text-sm font-medium text-slate-100">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICE OFFERINGS */}
      <section className="bg-slate-50 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="What We Offer"
            title={service.offeringsTitle}
            description="Solutions designed around your unique business requirements and organizational goals."
            centered
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {service.offerings.map((offering) => {
              const Icon = offering.icon;

              return (
                <article
                  key={offering.title}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-950">
                    {offering.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {offering.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* BUSINESS BENEFITS */}
      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <SectionHeading
                eyebrow="Business Benefits"
                title="Designed to Create Meaningful Value."
                description="Our approach focuses on helping organizations achieve their objectives through the right expertise, technology, and strategic support."
              />

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-800"
              >
                Discover How We Can Help
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50"
                >

                  <CheckCircle2
                    size={22}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-semibold leading-6 text-slate-800">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* WORKING PROCESS */}
      <section className="bg-slate-50 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="How We Work"
            title="A Structured Approach to Delivery."
            description="We work collaboratively with your organization throughout every stage of the engagement."
            centered
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {service.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <SectionHeading
                eyebrow="Explore More"
                title="Related Services."
                description="Discover additional ways InnovaRise Technology can support your business."
              />

              <Link
                to="/services"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600"
              >
                View All Services
                <ArrowUpRight size={18} />
              </Link>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              {relatedServices.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >

                    <div className="flex items-center justify-between">

                      <div className="rounded-2xl bg-blue-50 p-4 text-blue-600">
                        <Icon size={26} />
                      </div>

                      <ArrowUpRight
                        size={21}
                        className="text-slate-400 transition group-hover:text-blue-600"
                      />

                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </Link>
                );
              })}

            </div>

          </div>

        </section>
      )}

      {/* CONTACT CTA */}
      <ContactCTA />

    </>
  );
};

export default ServicePageLayout;
