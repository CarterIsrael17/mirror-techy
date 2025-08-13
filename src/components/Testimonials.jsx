// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightTech",
    image: "/testimonials/user1.jpg",
    feedback:
      "MirrorTechy transformed our online presence. The website they built is not only beautiful but also fast and responsive. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "Founder, ShopEase",
    image: "/testimonials/user2.jpg",
    feedback:
      "Working with this team was effortless. They understood our vision and delivered an e-commerce platform that exceeded expectations.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director, NovaAds",
    image: "/testimonials/user3.jpg",
    feedback:
      "Their SEO and digital marketing strategies increased our website traffic by 70% in just three months. Truly amazing!",
  },
  {
    name: "David Smith",
    role: "App Developer, CloudWorks",
    image: "/testimonials/user4.jpg",
    feedback:
      "They built a seamless and intuitive app for our startup. The UI/UX design is superb and our users love it!",
  },
  {
    name: "Sophia Williams",
    role: "Brand Manager, LuxeStyle",
    image: "/testimonials/she.png",
    feedback:
      "MirrorTechy created a stunning brand identity for our company. Our logo and visual style now truly reflect who we are.",
  },
  {
    name: "James Carter",
    role: "Entrepreneur",
    image: "/testimonials/user6.jpg",
    feedback:
      "From website development to marketing, the entire experience was professional and efficient. A reliable tech partner!",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Cards animate one by one
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: "url('/testimonials-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Eye-catching gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-3">What Our Clients Say</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Trusted by brands and businesses worldwide. Here’s how we’ve made an impact.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:-translate-y-2"
              variants={cardVariants}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-md"
              />
              <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>

              {/* 5-Star Rating */}
              <div className="flex justify-center mt-2 mb-4 text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              <p className="text-gray-700 text-sm italic leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
