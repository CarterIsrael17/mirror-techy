import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <img 
            src="/mirror1.jpg" 
            alt="MirrorTechy Logo" 
            className="h-16 mb-4 object-contain" 
          />
          <p className="text-sm">
            MirrorTechy delivers modern web solutions, digital marketing, and branding 
            to help your business thrive online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Email: <a href="mailto:mirrortech@zohomail.com" className="hover:text-blue-500">mirrortech@zohomail.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+2348109920968" className="hover:text-blue-500">+234 810 992 0968</a></p>
          <p className="text-sm mt-2">Lagos, Nigeria</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} MirrorTechy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
