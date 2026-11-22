import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Users,
  Lightbulb,
  Network,
  ShieldCheck,
  Target,
  Handshake,
  Layers3,
  Cloud,
  Database,
  BrainCircuit,
  Workflow,
  Building2,
  ChevronRight,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "IT Staffing",
    description:
      "Access qualified IT professionals with the technical expertise and experience needed to support your business goals.",
    icon: Users,
    link: "Explore IT Staffing",
  },
  {
    number: "02",
    title: "Talent Acquisition",
    description:
      "Identify, attract and hire the right professionals through a structured recruitment approach tailored to your needs.",
    icon: Target,
    link: "Explore Talent Acquisition",
  },
  {
    number: "03",
    title: "Technology Consulting",
    description:
      "Navigate technology challenges with expert guidance and practical strategies designed to support business growth.",
    icon: Lightbulb,
    link: "Explore Technology Consulting",
  },
  {
    number: "04",
    title: "Workforce Solutions",
    description:
      "Build flexible, capable teams with workforce strategies that align with your goals and evolving resource needs.",
    icon: Network,
    link: "Explore Workforce Solutions",
  },
];

const differentiators = [
  {
    title: "Client-Centric Approach",
    description: "We understand your business objectives and shape solutions around your specific requirements.",
    icon: Handshake,
  },
  {
    title: "Access to Skilled Talent",
    description: "We connect organizations with professionals who bring relevant experience and technical capabilities.",
    icon: Users,
  },
  {
    title: "Technology-Driven Solutions",
    description: "We combine technology expertise and strategic thinking to help businesses adapt and grow.",
    icon: Code2,
  },
  {
    title: "Flexible Workforce Models",
    description: "We support changing hiring and resource requirements with adaptable workforce solutions.",
    icon: Layers3,
  },
  {
    title: "Commitment to Quality",
    description: "We emphasize professionalism, candidate suitability and consistent service throughout every engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Partnerships",
    description: "We build relationships through trust, transparency, communication and shared success.",
    icon: Building2,
  },
];

const technologies = [
  { name: "Software Development", icon: Code2 },
  { name: "Cloud Computing", icon: Cloud },
  { name: "Data & Analytics", icon: Database },
  { name: "AI & Machine Learning", icon: BrainCircuit },
  { name: "DevOps & Automation", icon: Workflow },
  { name: "Cybersecurity", icon: ShieldCheck },
];

const industries = [
  "Information Technology",
  "Banking & Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail & E-commerce",
  "Telecommunications",
  "Education",
  "Logistics & Supply Chain",
];

const processSteps = [
  ["01", "Understand your requirements", "We learn about your business goals, challenges, technical needs and workforce requirements."],
  ["02", "Develop the right strategy", "We identify the staffing, recruitment or consulting approach that best fits your needs."],
  ["03", "Identify the right expertise", "We draw on our talent and technology capabilities to identify suitable professionals and solutions."],
  ["04", "Deliver with quality", "We coordinate delivery with a focus on quality, communication and alignment with your expectations."],
  ["05", "Build a lasting partnership", "We value ongoing collaboration and continuous improvement as your business evolves."],
];



function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}



  // return (
  //   <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
  //     <div className="section-shell flex h-[76px] items-center justify-between">
  //       <Logo />
  //       <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
  //         {links.map(([label, href]) => (
  //           <a key={label} href={href} className="text-[13px] font-semibold text-slate-600 transition hover:text-blue-600">
  //             {label}
  //           </a>
  //         ))}
  //       </nav>
  //       <a href="#contact" className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex">
  //         Let's Connect <ArrowUpRight size={16} />
  //       </a>
  //       <button
  //         type="button"
  //         className="rounded-lg p-2 text-slate-800 lg:hidden"
  //         onClick={() => setMenuOpen(!menuOpen)}
  //         aria-label={menuOpen ? "Close menu" : "Open menu"}
  //         aria-expanded={menuOpen}
  //       >
  //         {menuOpen ? <X size={24} /> : <Menu size={24} />}
  //       </button>
  //     </div>
  //     {menuOpen && (
  //       <nav className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden" aria-label="Mobile navigation">
  //         <div className="section-shell flex flex-col gap-4">
  //           {links.map(([label, href]) => (
  //             <a key={label} href={href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-slate-700">
  //               {label}
  //             </a>
  //           ))}
  //           <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white">
  //             Let's Connect <ArrowUpRight size={16} />
  //           </a>
  //         </div>
  //       </nav>
  //     )}
  //   </header>
  // );


function Hero() {
  return (
    <section id="home" className="hero-grid relative isolate overflow-hidden bg-[#07152f] text-white">
      <div className="absolute -right-40 -top-44 -z-10 h-[560px] w-[560px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-72 left-[30%] -z-10 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="section-shell grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-blue-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Technology. Talent. Transformation.
          </div>
          <h1 className="text-[42px] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[62px]">
            Driving Innovation.
            <span className="block text-blue-300">Empowering Businesses.</span>
            Connecting Talent with Opportunity.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Your trusted partner for technology consulting, IT staffing and workforce solutions. We help businesses overcome technology challenges, access exceptional talent and accelerate digital transformation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-blue-400">
              Explore Our Services <ArrowRight size={17} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              Let's Talk Business <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="mt-9 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Your business goals. Our technology expertise. The right talent.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[530px]">
          <div className="absolute -inset-5 rounded-[36px] border border-blue-300/10" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#142d58] via-[#102448] to-[#09162e] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">The InnovaRise advantage</p>
                <p className="mt-2 text-xl font-bold">The right connections move business forward.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-200">
                <Network size={25} />
              </div>
            </div>
            <div className="relative my-9 flex h-[245px] items-center justify-center">
              <div className="absolute h-56 w-56 rounded-full border border-blue-300/20" />
              <div className="absolute h-40 w-40 rounded-full border border-cyan-300/25" />
              <div className="absolute h-28 w-28 rounded-full bg-blue-500/20 blur-xl" />
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] border border-cyan-200/30 bg-gradient-to-br from-blue-400 to-blue-700 shadow-2xl shadow-blue-500/40">
                <span className="text-4xl font-black">i<span className="text-cyan-200">.</span></span>
              </div>
              <div className="absolute left-[8%] top-[17%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#193762] text-cyan-200 shadow-xl"><Code2 size={21} /></div>
              <div className="absolute right-[8%] top-[20%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#193762] text-blue-200 shadow-xl"><Users size={21} /></div>
              <div className="absolute bottom-[8%] left-[17%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#193762] text-blue-200 shadow-xl"><Cloud size={21} /></div>
              <div className="absolute bottom-[7%] right-[16%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#193762] text-cyan-200 shadow-xl"><BrainCircuit size={21} /></div>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 245" fill="none" aria-hidden="true">
                <path d="M105 62 L205 122 M395 67 L295 122 M150 207 L215 153 M365 208 L285 153" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="5 7" />
                <defs><linearGradient id="lineGradient" x1="105" y1="62" x2="395" y2="208"><stop stopColor="#60A5FA" /><stop offset="1" stopColor="#67E8F9" /></linearGradient></defs>
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
              <div><p className="text-lg font-bold text-white">People</p><p className="mt-1 text-xs text-slate-400">Exceptional talent</p></div>
              <div><p className="text-lg font-bold text-white">Purpose</p><p className="mt-1 text-xs text-slate-400">Business alignment</p></div>
              <div><p className="text-lg font-bold text-white">Progress</p><p className="mt-1 text-xs text-slate-400">Meaningful outcomes</p></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/10 bg-white p-4 text-slate-900 shadow-2xl sm:block">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-blue-50 p-3 text-blue-600"><CheckCircle2 size={22} /></span>
              <div><p className="text-sm font-bold">Built around your goals</p><p className="mt-1 text-xs text-slate-500">A partner at every step</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell grid gap-12 py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-28">
      <div className="relative">
        <div className="rounded-[28px] bg-slate-100 p-7 sm:p-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex min-h-44 flex-col justify-between rounded-2xl bg-[#0b1b38] p-5 text-white">
              <Code2 className="text-blue-300" size={27} />
              <div><p className="text-2xl font-bold">Technology</p><p className="mt-1 text-xs text-slate-300">Expertise that enables</p></div>
            </div>
            <div className="mt-8 flex min-h-44 flex-col justify-between rounded-2xl bg-blue-600 p-5 text-white">
              <Users className="text-blue-100" size={27} />
              <div><p className="text-2xl font-bold">Talent</p><p className="mt-1 text-xs text-blue-100">People who make it happen</p></div>
            </div>
            <div className="flex min-h-44 flex-col justify-between rounded-2xl bg-white p-5 text-slate-900 shadow-sm">
              <Target className="text-blue-600" size={27} />
              <div><p className="text-2xl font-bold">Purpose</p><p className="mt-1 text-xs text-slate-500">Solutions with direction</p></div>
            </div>
            <div className="mt-8 flex min-h-44 flex-col justify-between rounded-2xl bg-cyan-100 p-5 text-slate-900">
              <MoveUpRight className="text-blue-700" size={27} />
              <div><p className="text-2xl font-bold">Progress</p><p className="mt-1 text-xs text-slate-600">Growth that lasts</p></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-slate-900/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Our promise</p>
          <p className="mt-1 text-sm font-bold text-slate-900">Partnership with purpose.</p>
        </div>
      </div>
      <div>
        <SectionHeading
          eyebrow="Who we are"
          title="Empowering Businesses Through Technology and Talent"
          description="At InnovaRise Technology, we believe that the right technology and the right talent are the foundation of business success."
        />
        <p className="mt-5 leading-8 text-slate-600">
          We partner with organizations to understand their unique business challenges and deliver customized technology solutions, skilled professionals and strategic talent acquisition services.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          With expertise across IT staffing, technology consulting and workforce solutions, we help businesses build capable teams, optimize operations and stay ahead in an increasingly competitive digital world.
        </p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3">
          Discover InnovaRise <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 lg:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Comprehensive Solutions. One Trusted Partner."
            description="From finding the right professionals to delivering specialized technology expertise, we provide flexible solutions designed around your business needs."
          />
          <a href="#contact" className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600">Discuss your needs <ArrowUpRight size={17} /></a>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.number} className="group rounded-3xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-slate-400">{service.number}</span>
                  <span className="rounded-2xl bg-blue-50 p-3 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={23} /></span>
                </div>
                <h3 className="mt-9 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-4 min-h-[105px] text-sm leading-7 text-slate-600">{service.description}</p>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-blue-600">
                  {service.link} <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section-shell py-24 lg:py-28">
      <SectionHeading
        eyebrow="Why InnovaRise"
        title="Your Success Is Our Priority"
        description="We go beyond traditional staffing and technology services. We focus on understanding your business, identifying the right opportunities and delivering solutions that create lasting value."
        centered
      />
      <div className="mt-14 grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={22} /></div>
              <div>
                <p className="mb-2 text-xs font-bold tracking-widest text-blue-600">0{index + 1}</p>
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="overflow-hidden bg-[#081832] py-24 text-white lg:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Technology expertise"
            title="Connecting Businesses with the Right Technology Expertise"
            description="We help organizations access the specialized skills and technical knowledge needed to embrace change, improve capabilities and achieve their digital objectives."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.name} className="flex min-h-28 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-blue-300/40 hover:bg-white/[0.08]">
                  <Icon className="text-cyan-300" size={22} />
                  <p className="text-sm font-semibold text-slate-100">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-9 border-t border-white/10 pt-6">
          <p className="text-xs leading-6 text-slate-400">Technology areas shown are proposed website categories. Retain only the technologies InnovaRise genuinely supports.</p>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="section-shell py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Supporting Businesses Across Diverse Industries"
            description="Every industry has unique technology and workforce requirements. We connect organizations with the expertise needed to move forward."
          />
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-600 hover:text-blue-600">
            Talk to our team <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {industries.map((industry, index) => (
            <div key={industry} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-blue-500">0{index + 1}</span>
                <span className="text-sm font-bold text-slate-800">{industry}</span>
              </div>
              <ChevronRight size={17} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-slate-50 py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How we work"
          title="A Partnership Built Around Your Success"
          description="We follow a collaborative and structured approach to understand your requirements, identify opportunities and deliver solutions that support your business objectives."
          centered
        />
        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {processSteps.map(([number, title, description], index) => (
            <div key={number} className="relative">
              {index < processSteps.length - 1 && <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-24px)] bg-blue-200 md:block" />}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">{number}</div>
              <h3 className="mt-6 text-base font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="section-shell py-20 lg:py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-blue-600 px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/10" />
        <div className="absolute -bottom-40 right-[25%] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">Let's move forward together</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[46px]">Let's Build Your Next Success Story.</h2>
          <p className="mt-5 max-w-xl leading-8 text-blue-100">Whether you're looking for skilled IT professionals, strategic recruitment support or technology consulting expertise, InnovaRise Technology is ready to help.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:hello@innovarisetechnology.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50">Get in Touch <ArrowUpRight size={17} /></a>
            <a href="mailto:hello@innovarisetechnology.com?subject=Business%20requirements" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Discuss Your Requirements <ArrowRight size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="careers" className="bg-[#07152f] text-white">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-xl bg-white px-3 py-2">
            <a href="#home">
                <img
                  src={logo}
                  alt="InnovaRise Technology"
                  className="h-12 w-auto max-w-[200px] object-contain"
              />
            </a>
      </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">Driving innovation. Empowering businesses. Connecting talent with opportunity.</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">We help businesses grow through technology consulting, IT staffing, talent acquisition and workforce solutions.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><a className="hover:text-white" href="#home">Home</a></li>
            <li><a className="hover:text-white" href="#about">About Us</a></li>
            <li><a className="hover:text-white" href="#services">Services</a></li>
            <li><a className="hover:text-white" href="#industries">Industries</a></li>
            <li><a className="hover:text-white" href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold">Our Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {services.map((service) => <li key={service.title}><a className="hover:text-white" href="#services">{service.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold">Get in Touch</h3>
          <p className="mt-5 text-sm leading-7 text-slate-400">Have a requirement or want to explore a partnership?</p>
          <a href="mailto:hello@innovarisetechnology.com" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white">Email our team <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} InnovaRise Technology. All Rights Reserved.</p>
          <div className="flex gap-5"><a href="#contact" className="hover:text-white">Privacy Policy</a><a href="#contact" className="hover:text-white">Terms & Conditions</a></div>
        </div>
      </div>
    </footer>
  );
}


export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Website Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Technology />
        <Industries />
        <Approach />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

