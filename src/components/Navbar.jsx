// src/components/Navbar.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white text-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer"
        >
          <img
            src="/mirror1.jpg"
            alt="MirrorTechy Logo"
            className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </ScrollLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="cursor-pointer hover:text-blue-600 transition"
                  onClick={closeMenu}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
