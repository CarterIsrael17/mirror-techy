import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-white text-gray-800"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          About <span className="text-blue-600">MirrorTech</span>
        </h2>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          MirrorTech is a creative tech brand led by a passionate website designer 
          with expertise in modern CMS platforms like Shopify, Wix, Squarespace, 
          WordPress, and more.
        </p>

        <p className="text-md md:text-lg leading-loose text-gray-700">
          We specialize in building responsive, high-performance websites for businesses, 
          startups, and individuals. With a strong focus on user experience, aesthetics, 
          and results, we help brands grow their online presence through innovative web design.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
