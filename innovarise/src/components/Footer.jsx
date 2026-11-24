
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Technology Expertise", path: "/technology" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  {
    name: "IT Staffing",
    path: "/services/it-staffing",
  },
  {
    name: "Talent Acquisition",
    path: "/services/talent-acquisition",
  },
  {
    name: "Technology Consulting",
    path: "/services/technology-consulting",
  },
  {
    name: "Workforce Solutions",
    path: "/services/workforce-solutions",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#07152f] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">

        {/* Company Information */}
        <div>
          <Link
            to="/"
            className="inline-block rounded-xl bg-white px-4 py-3"
          >
            <img
              src={logo}
              alt="InnovaRise Technology"
              className="h-14 w-auto max-w-[220px] object-contain"
            />
          </Link>

          <p className="mt-6 text-base font-semibold leading-7 text-slate-200">
            Driving Innovation. Empowering Businesses.
            Connecting Talent with Opportunity.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Your trusted partner for technology consulting,
            IT staffing, talent acquisition and workforce
            solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold">
            Quick Links
          </h3>

          <div className="mt-3 h-0.5 w-10 bg-blue-500" />

          <ul className="mt-6 space-y-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <ArrowRight
                    size={13}
                    className="text-blue-400 transition group-hover:translate-x-1"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-bold">
            Our Services
          </h3>

          <div className="mt-3 h-0.5 w-10 bg-blue-500" />

          <ul className="mt-6 space-y-4">
            {serviceLinks.map((service) => (
              <li key={service.path}>
                <Link
                  to={service.path}
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <ArrowRight
                    size={13}
                    className="text-blue-400 transition group-hover:translate-x-1"
                  />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-bold">
            Let's Connect
          </h3>

          <div className="mt-3 h-0.5 w-10 bg-blue-500" />

          <p className="mt-6 text-sm leading-7 text-slate-400">
            Looking for the right talent or technology
            solutions? Let's discuss your business needs.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Contact Our Team
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row lg:px-8">

          <p>
            © {new Date().getFullYear()} InnovaRise Technology.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
