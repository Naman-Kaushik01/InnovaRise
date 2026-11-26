
import { Link } from "react-router-dom";
import services from "../data/services";

import {
  ArrowUpRight,
  ArrowRight,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const benefits = services.map((service) => service.title);

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="relative isolate overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-600 via-blue-700 to-[#123d9c] px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-20">

          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border-[55px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-48 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-[100px]" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Left Content */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-blue-100">
                <Handshake size={16} />
                Let's Move Forward Together
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[52px]">
                Let's Build Your
                <span className="block text-blue-200">
                  Next Success Story.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
                Whether you need skilled IT professionals,
                strategic recruitment support, or technology
                consulting expertise, InnovaRise Technology
                is ready to understand your requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Get in Touch
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  Explore Our Services
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            {/* Right Content */}
            <div className="rounded-[26px] border border-white/15 bg-white/10 p-7 backdrop-blur-md">

              <h3 className="text-xl font-bold">
                How Can We Help You?
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                Find the right solution for your business needs.
              </p>

              <div className="mt-6 space-y-4">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="shrink-0 text-blue-200"
                    />

                    <span className="text-sm font-semibold text-white">
                      {benefit}
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

export default ContactCTA;
