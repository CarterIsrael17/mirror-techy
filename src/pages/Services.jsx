// src/components/Services.jsx
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCogs,
  FaSearch,
  FaBullhorn,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

const services = [
  { 
    icon: <FaLaptopCode />, 
    title: "Web Design", 
    desc: "Crafting sleek, modern, and fully responsive websites tailored to your brand and business goals." 
  },
  { 
    icon: <FaCogs />, 
    title: "Automation", 
    desc: "Streamline your workflow with smart automation solutions to save time and boost productivity." 
  },
  { 
    icon: <FaSearch />, 
    title: "SEO", 
    desc: "Enhance your online visibility and drive traffic with search engine optimization strategies that work." 
  },
  { 
    icon: <FaBullhorn />, 
    title: "Digital Marketing", 
    desc: "Reach and engage your target audience through result-driven social media and online marketing campaigns." 
  },
  { 
    icon: <FaMobileAlt />, 
    title: "App Development", 
    desc: "Transform your ideas into powerful mobile applications for iOS and Android users worldwide." 
  },
  { 
    icon: <FaPalette />, 
    title: "Branding", 
    desc: "Build a lasting impression with visually striking brand identities, logos, and style guides." 
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url('/service.jpg')`, // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Section Header */}
      <motion.div
        className="relative text-center mb-12 z-10"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          At MirrorTechy, we empower businesses with modern web solutions, stunning designs, and growth-driven digital strategies.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center text-gray-900 hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
