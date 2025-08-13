// src/components/Contact.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState(""); // "sending", "success", "error"
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      setShowPopup(true);
      e.target.reset(); // Clear form

      // Hide popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.2),_transparent_50%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl p-10"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-10">
          Have a project in mind or just want to say hello? Fill out the form below.
        </p>

        {/* ✅ Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="access_key" value="22e7388f-6f45-425f-af9a-db52b382dccb" />
          <input type="hidden" name="from_name" value="MirrorTechy Website" />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 focus:border-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 focus:border-blue-500 outline-none"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 focus:border-blue-500 outline-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90 transition font-semibold"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* ✅ Status Message */}
        {status === "error" && (
          <p className="text-center mt-4 text-sm text-red-400">❌ Failed to send. Try again.</p>
        )}

        {/* Social Icons */}
        <div className="mt-10 flex flex-col items-center gap-3 text-gray-300">
          <p className="text-sm">📧 mirrortech@zohomail.com</p>
          <p className="text-sm">📞 +234 81099 20968</p>
          <div className="flex gap-6 text-2xl mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ✅ Animated Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm mx-auto"
            >
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Message Sent Successfully!</h3>
              <p className="text-gray-500 mt-2">We will get back to you soon.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
