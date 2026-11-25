
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const PageHero = ({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumbs = [],
  ctaText,
  ctaLink = "/contact",
}) => {
  return (
    <section className="relative isolate overflow-hidden bg-[#07152f] text-white">

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-blue-600/25 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-48 left-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[110px]" />

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 hidden h-[420px] w-[420px] rounded-full border-[45px] border-white/[0.03] lg:block" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400"
        >
          <Link
            to="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          {breadcrumbs.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <ChevronRight size={15} />

              {item.path ? (
                <Link
                  to={item.path}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="font-semibold text-blue-300"
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Main Content */}
        <div className="max-w-4xl">

          {eyebrow && (
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[64px]">

            {title}

            {highlight && (
              <span className="mt-2 block text-blue-300">
                {highlight}
              </span>
            )}

          </h1>

          {description && (
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}

          {ctaText && (
            <Link
              to={ctaLink}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              {ctaText}
              <ArrowUpRight size={18} />
            </Link>
          )}

        </div>

      </div>
    </section>
  );
};

export default PageHero;
