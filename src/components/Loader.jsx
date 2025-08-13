// src/components/Loader.jsx
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Spinning Gradient Ring */}
      <motion.div
        className="w-20 h-20 border-4 border-t-transparent border-b-transparent border-l-blue-500 border-r-purple-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
      />

      {/* Brand Name */}
      <motion.h1
        className="text-white text-2xl font-bold mt-6 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MirrorTechy
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
