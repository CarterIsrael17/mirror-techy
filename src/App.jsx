import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import Stats from "./components/Stats";
import AdminUpload from "./pages/AdminUpload";
import Footer from "./components/Footer"; // ✅ New footer
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-black text-white min-h-screen">
                <Navbar />

                {/* Hero Section */}
                <section id="home">
                  <Hero />
                </section>

                {/* About Section */}
                <section id="about">
                  <About />
                </section>

                {/* Services Section */}
                <section id="services">
                  <Services />
                </section>

                {/* Stats Section */}
                <section id="stats">
                  <Stats />
                </section>

                {/* Projects Section */}
                <section id="projects">
                  <Projects />
                </section>

                {/* Testimonials Section */}
                <section id="testimonials">
                  <Testimonials />
                </section>

                {/* Contact Section */}
                <section id="contact">
                  <Contact />
                </section>

                {/* Footer Section */}
                <Footer />

                {/* Floating WhatsApp Button */}
                <a
                  href="https://wa.me/2348109920968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
                >
                  <FaWhatsapp size={28} />
                </a>
              </div>
            }
          />

          {/* Admin Upload Page */}
          <Route path="/adminupload" element={<AdminUpload />} />
        </Routes>
      )}
    </Router>
  );
}
