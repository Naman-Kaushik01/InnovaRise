
import { ArrowRight, ArrowUpRight, Code2, Users, Cloud, BrainCircuit, CheckCircle2, Network, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#06152E] text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute -bottom-40 left-[25%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/5 px-4 py-2 text-xs font-semibold text-blue-100">
            <Sparkles size={14} className="text-cyan-300" />
            Technology. Talent. Transformation.
          </div>

          <h1 className="max-w-[680px] text-[40px] font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
            Driving Innovation.
            <span className="mt-2 block text-[#76B6FF]">
              Empowering Businesses.
            </span>
            <span className="mt-2 block">
              Connecting Talent with Opportunity.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            InnovaRise Technology empowers businesses through innovative
            technology consulting, strategic IT staffing, and exceptional
            talent solutions. We connect the right expertise with the right
            opportunities to accelerate business growth.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Let's Talk Business
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <CheckCircle2 size={21} />
            </div>
            <p className="text-sm font-medium text-slate-300">
              Your Business Goals. Our Technology Expertise.
              <span className="block text-white">The Right Talent.</span>
            </p>
          </div>
        </div>

        {/* RIGHT TECHNOLOGY ILLUSTRATION */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -inset-5 rounded-[36px] border border-blue-300/10" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#173463] via-[#10264A] to-[#09182F] p-7 shadow-2xl shadow-black/30 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  The InnovaRise Advantage
                </p>
                <h2 className="mt-3 max-w-xs text-xl font-bold leading-snug">
                  The right connections move business forward.
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-200">
                <Network size={24} />
              </div>
            </div>

            {/* Animated network */}
            <div className="relative my-10 flex h-[260px] items-center justify-center">
              <div className="absolute h-56 w-56 animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-blue-300/25" />
              <div className="absolute h-40 w-40 rounded-full border border-cyan-300/20" />
              <div className="absolute h-28 w-28 rounded-full bg-blue-500/20 blur-xl" />

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 500 260"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M110 65 L250 130 M390 65 L250 130 M110 200 L250 130 M390 200 L250 130"
                  stroke="#60A5FA"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  opacity=".7"
                />
              </svg>

              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] border border-blue-300/30 bg-gradient-to-br from-blue-400 to-blue-700 shadow-2xl shadow-blue-500/40">
                <span className="text-4xl font-black">
                  i<span className="text-cyan-200">.</span>
                </span>
              </div>

              <div className="absolute left-[8%] top-[15%] z-10 rounded-2xl border border-white/10 bg-[#193762] p-3 text-cyan-200 shadow-xl">
                <Code2 size={23} />
              </div>

              <div className="absolute right-[8%] top-[15%] z-10 rounded-2xl border border-white/10 bg-[#193762] p-3 text-blue-200 shadow-xl">
                <Users size={23} />
              </div>

              <div className="absolute bottom-[10%] left-[15%] z-10 rounded-2xl border border-white/10 bg-[#193762] p-3 text-blue-200 shadow-xl">
                <Cloud size={23} />
              </div>

              <div className="absolute bottom-[10%] right-[15%] z-10 rounded-2xl border border-white/10 bg-[#193762] p-3 text-cyan-200 shadow-xl">
                <BrainCircuit size={23} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {[
                ["People", "Exceptional talent"],
                ["Purpose", "Business alignment"],
                ["Progress", "Meaningful outcomes"],
              ].map(([title, description]) => (
                <div key={title}>
                  <p className="text-base font-bold text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-12 -left-6 hidden animate-[bounce_5s_ease-in-out_infinite] items-center gap-3 rounded-2xl bg-white p-4 text-slate-900 shadow-2xl sm:flex">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <p className="text-sm font-bold">Built Around Your Goals</p>
              <p className="mt-0.5 text-xs text-slate-500">
                A partner at every step
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
