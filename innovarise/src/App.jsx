import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";


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

