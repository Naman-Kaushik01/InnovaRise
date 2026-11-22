
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Users,
  Target,
  Handshake,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technology Expertise",
    description: "Solutions that enable growth",
  },
  {
    icon: Users,
    title: "Exceptional Talent",
    description: "People who drive success",
  },
  {
    icon: Target,
    title: "Business Focus",
    description: "Strategies aligned with your goals",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Relationships built to last",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT VISUAL */}
          <div className="relative">

            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative rounded-[32px] bg-slate-100 p-6 sm:p-9">

              {/* Top heading */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    The InnovaRise Difference
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Technology Meets Talent
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-3 text-blue-600 shadow-sm">
                  <Sparkles size={23} />
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  const cardStyles = [
                    "bg-[#0B1B38] text-white",
                    "bg-blue-600 text-white",
                    "bg-white text-slate-900",
                    "bg-cyan-100 text-slate-900",
                  ];

                  const iconStyles = [
                    "text-blue-300",
                    "text-blue-100",
                    "text-blue-600",
                    "text-blue-700",
                  ];

                  return (
                    <div
                      key={item.title}
                      className={`group flex min-h-[190px] flex-col justify-between rounded-2xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                        cardStyles[index]
                      } ${index % 2 === 1 ? "translate-y-5" : ""}`}
                    >
                      <Icon
                        size={29}
                        className={iconStyles[index]}
                      />

                      <div>
                        <h4 className="text-lg font-bold leading-snug">
                          {item.title}
                        </h4>

                        <p
                          className={`mt-2 text-xs leading-5 ${
                            index < 2
                              ? "text-white/75"
                              : "text-slate-500"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom brand statement */}
              <div className="mt-12 rounded-2xl border border-blue-100 bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <CheckCircle2 size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Our Promise
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900">
                      Your Goals. Our Expertise. The Right Talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-[2px] w-9 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                About InnovaRise Technology
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              Driving Business Growth Through
              <span className="block text-blue-600">
                Innovation & Talent.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-base leading-8 text-slate-600">
              At <strong className="text-slate-900">
                InnovaRise Technology
              </strong>, we believe that the right technology and
              the right talent are the foundation of business success.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We are a technology consulting and IT staffing company
              committed to helping organizations navigate today's
              evolving digital landscape.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We partner with businesses to understand their unique
              challenges and deliver customized technology solutions,
              skilled professionals, and strategic talent acquisition
              services.
            </p>

            {/* Mission card */}
            <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-600">
                  <Target size={23} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Our Mission
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    To help businesses grow through innovation,
                    technology, and exceptional talent while building
                    long-term partnerships based on trust,
                    transparency, and quality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Let's Work Together
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
