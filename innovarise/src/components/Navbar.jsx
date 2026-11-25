
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Users,
  Target,
  Lightbulb,
  Network,
} from "lucide-react";

import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services", dropdown: true },
  { name: "Technology Expertise", path: "/technology" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
];

const serviceLinks = [
  {
    name: "IT Staffing",
    path: "/services/it-staffing",
    icon: Users,
    description: "Connect with skilled IT professionals.",
  },
  {
    name: "Talent Acquisition",
    path: "/services/talent-acquisition",
    icon: Target,
    description: "Find the right talent for your business.",
  },
  {
    name: "Technology Consulting",
    path: "/services/technology-consulting",
    icon: Lightbulb,
    description: "Transform your business through technology.",
  },
  {
    name: "Workforce Solutions",
    path: "/services/workforce-solutions",
    icon: Network,
    description: "Build flexible and scalable teams.",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const location = useLocation();

  // Close menus whenever the route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const navClass = ({ isActive }) =>
    `whitespace-nowrap text-[15px] font-semibold transition-colors duration-200 ${
      isActive
        ? "text-blue-600"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-lg">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* COMPANY LOGO */}
        <Link to="/" onClick={closeMenus}>
          <img
            src={logo}
            alt="InnovaRise Technology"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex">

          {navLinks.map((link) =>
            link.dropdown ? (

              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setServicesOpen(false);
                  }
                }}
              >

                <div className="flex items-center gap-1">

                  <NavLink
                    to={link.path}
                    className={navClass}
                    onClick={closeMenus}
                  >
                    {link.name}
                  </NavLink>

                  <button
                    type="button"
                    aria-label="Toggle services menu"
                    aria-expanded={servicesOpen}
                    onClick={() =>
                      setServicesOpen((previous) => !previous)
                    }
                    className="cursor-pointer p-1 text-slate-600 hover:text-blue-600"
                  >
                    <ChevronDown
                      size={15}
                      className={`transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                </div>

                {/* SERVICES DROPDOWN */}
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[350px] -translate-x-1/2 pt-5">

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">

                      <p className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-blue-600">
                        Our Services
                      </p>

                      {serviceLinks.map((service) => {
                        const Icon = service.icon;

                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={closeMenus}
                            className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-blue-50"
                          >

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                              <Icon size={21} />
                            </div>

                            <div>
                              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                                {service.name}
                              </h3>

                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                {service.description}
                              </p>
                            </div>

                          </Link>
                        );
                      })}

                      <div className="mt-2 border-t border-slate-100 pt-2">

                        <Link
                          to="/services"
                          onClick={closeMenus}
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50"
                        >
                          View All Services
                          <ArrowUpRight size={17} />
                        </Link>

                      </div>

                    </div>

                  </div>
                )}

              </div>

            ) : (

              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={navClass}
                onClick={closeMenus}
              >
                {link.name}
              </NavLink>

            )
          )}

        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          to="/contact"
          onClick={closeMenus}
          className="hidden items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex"
        >
          Let's Connect
          <ArrowUpRight size={17} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-800 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-6 py-5 shadow-xl lg:hidden">

          <nav className="flex flex-col gap-2">

            {navLinks.map((link) =>
              link.dropdown ? (

                <div key={link.name}>

                  <div className="flex items-center justify-between rounded-xl px-4 py-3">

                    <NavLink
                      to="/services"
                      onClick={closeMenus}
                      className={navClass}
                    >
                      Services
                    </NavLink>

                    <button
                      type="button"
                      aria-label="Toggle mobile services"
                      aria-expanded={mobileServicesOpen}
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className="p-2 text-slate-700"
                    >
                      <ChevronDown
                        size={19}
                        className={`transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                  </div>

                  {mobileServicesOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-blue-100 pl-4">

                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={closeMenus}
                          className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {service.name}
                        </Link>
                      ))}

                    </div>
                  )}

                </div>

              ) : (

                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-[15px] font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              )
            )}

            <Link
              to="/contact"
              onClick={closeMenus}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white"
            >
              Let's Connect
              <ArrowUpRight size={18} />
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
};

export default Navbar;
