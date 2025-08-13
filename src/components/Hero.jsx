import { motion } from "framer-motion";

const Hero = () => {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/fazad.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          <span className="text-blue-400">Building Brands</span> through Creative Web Design
        </h1>

        <p className="text-base md:text-xl text-gray-200 mb-6 leading-relaxed">
          We help businesses grow online with powerful, responsive, and visually stunning websites using CMS tools like{" "}
          <span className="text-blue-300 font-medium">Wix</span>,{" "}
          <span className="text-blue-300 font-medium">Shopify</span>,{" "}
          <span className="text-blue-300 font-medium">Squarespace</span>,{" "}
          <span className="text-blue-300 font-medium">WordPress</span>, and more.
        </p>

        <button
          onClick={handleScrollToProjects}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Explore My Work
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
