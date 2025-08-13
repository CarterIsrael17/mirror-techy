import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+2348109920968"; // ✅ Your WhatsApp number
  const message = "Hello! I would like to know more about your services."; 

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.3, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      {/* Pulsing Glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-green-500"
      />

      {/* WhatsApp Icon */}
      <div className="relative bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition">
        <FaWhatsapp size={32} />
      </div>

      {/* Tooltip */}
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 hover:opacity-100 transition">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
