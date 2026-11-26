
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Existing pages
import HomePage from "./pages/Homepage";
import ServicesPage from "./pages/ServicesPage";

// Temporary page components
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

          {/* HOME PAGE */}
          <Route path="/" element={<HomePage />} />

          {/* ABOUT PAGE */}
          <Route path="/about" element={<AboutPage />} />

          {/* SERVICES PAGE */}
          <Route
            path="/services"
            element={<ServicesPage />}
          />

          {/* TECHNOLOGY PAGE */}
          <Route
            path="/technology"
            element={<Technology />}
          />

          {/* INDUSTRIES PAGE */}
          <Route
            path="/industries"
            element={<Industries />}
          />

          {/* CAREERS PAGE */}
          <Route
            path="/careers"
            element={<Careers />}
          />

          {/* CONTACT PAGE */}
          <Route
            path="/contact"
            element={<ContactCTA />}
          />

          {/* INDIVIDUAL SERVICE PAGES */}
          <Route
            path="/services/it-staffing"
            element={<ComingSoon />}
          />

          <Route
            path="/services/talent-acquisition"
            element={<ComingSoon />}
          />

          <Route
            path="/services/technology-consulting"
            element={<ComingSoon />}
          />

          <Route
            path="/services/workforce-solutions"
            element={<ComingSoon />}
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

          {/* FALLBACK PAGE */}
          <Route path="*" element={<ComingSoon />} />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}
