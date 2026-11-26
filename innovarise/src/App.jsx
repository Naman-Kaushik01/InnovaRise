
import { Routes, Route, Link } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Completed Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

// Individual Service Pages
import ITStaffing from "./pages/services/ITStaffing";
import TalentAcquisition from "./pages/services/TalentAcquisition";
import TechnologyConsulting from "./pages/services/TechnologyConsulting";
import WorkforceSolutions from "./pages/services/WorkforceSolutions";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import HealthcareStaffing from "./pages/services/HealthcareStaffing";
import AIEngineering from "./pages/services/AIEngineering";
import AppDevelopment from "./pages/services/AppDevelopment";

// Temporary Pages
import Technology from "./sections/Technology";
import Industries from "./sections/Industries";
import Careers from "./sections/Careers";
import ContactCTA from "./sections/ContactCTA";

const ComingSoon = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">

      <h1 className="text-3xl font-bold text-slate-900">
        Page Coming Soon
      </h1>

      <p className="mt-4 text-slate-600">
        We are currently developing this page.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans antialiased">

      <ScrollToTop />

      <Navbar />

      <main className="flex-1">

        <Routes>

          {/* MAIN PAGES */}
          <Route path="/" element={<HomePage />} />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          {/* INDIVIDUAL SERVICE PAGES */}
          <Route
            path="/services/it-staffing"
            element={<ITStaffing />}
          />

          <Route
            path="/services/talent-acquisition"
            element={<TalentAcquisition />}
          />

          <Route
            path="/services/technology-consulting"
            element={<TechnologyConsulting />}
          />

          <Route
            path="/services/workforce-solutions"
            element={<WorkforceSolutions />}
          />

          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />

          <Route
            path="/services/healthcare-staffing"
            element={<HealthcareStaffing />}
          />

          <Route
            path="/services/ai-engineering"
            element={<AIEngineering />}
          />

          <Route
            path="/services/app-development"
            element={<AppDevelopment />}
          />

          {/* TEMPORARY MAIN PAGES */}
          <Route
            path="/technology"
            element={<Technology />}
          />

          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/careers"
            element={<Careers />}
          />

          <Route
            path="/contact"
            element={<ContactCTA />}
          />

          {/* LEGAL PAGES */}
          <Route
            path="/privacy-policy"
            element={<ComingSoon />}
          />

          <Route
            path="/terms"
            element={<ComingSoon />}
          />

          {/* FALLBACK */}
          <Route
            path="*"
            element={<ComingSoon />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}
