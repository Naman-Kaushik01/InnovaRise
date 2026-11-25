
import {
  Search,
  ClipboardList,
  Users,
  CheckCircle2,
  Handshake,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We understand your business goals, challenges, technical needs, and workforce requirements.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Strategize",
    description:
      "We develop a customized staffing, recruitment, or technology consulting strategy.",
  },
  {
    number: "03",
    icon: Users,
    title: "Identify",
    description:
      "We identify suitable professionals, technical expertise, and relevant solutions.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Deliver",
    description:
      "We coordinate delivery with a focus on quality, communication, and your expectations.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Partner",
    description:
      "We build lasting relationships through collaboration and continuous improvement.",
  },
];

const Approach = () => {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A Partnership Built Around
              <span className="block text-blue-600">
                Your Success.
              </span>
            </>
          }
          description="Our structured and collaborative approach helps us understand your needs, identify opportunities, and deliver solutions aligned with your business objectives."
          centered
        />

        {/* Process Timeline */}
        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative"
              >

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-10 hidden h-px w-full border-t-2 border-dashed border-blue-200 lg:block" />
                )}

                <div className="relative z-10 flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

                  {/* Step Icon */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

                    <Icon size={32} strokeWidth={1.8} />

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#07152f] text-xs font-bold text-white">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-12 max-w-2xl text-center">

          <p className="text-sm font-semibold leading-7 text-slate-600">
            From the first conversation to long-term collaboration,
            your business objectives remain at the center of
            everything we do.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Approach;
