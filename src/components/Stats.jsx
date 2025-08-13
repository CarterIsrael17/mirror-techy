import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 100, label: "Projects Completed", color: "text-blue-400", desc: "Successfully delivered innovative digital solutions across industries." },
  { number: 50,  label: "Happy Clients",      color: "text-green-400", desc: "Trusted by clients for creative and scalable digital experiences." },
  { number: 5,   label: "Years Experience",   color: "text-purple-400", desc: "A proven track record of delivering high-quality digital projects." },
  { number: 10,  label: "Team Members",        color: "text-pink-400", desc: "A passionate team dedicated to bringing your ideas to life." },
];

const Stats = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <motion.div
        className="relative max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto snap-x snap-mandatory">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="snap-center bg-gray-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center border border-gray-700 min-w-[250px]"
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                visible: { 
                  opacity: 1, scale: 1, rotate: 0,
                  transition: { type: "spring", stiffness: 200, damping: 12 }
                }
              }}
            >
              <span className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                <CountUp end={stat.number} duration={2.5} />+
              </span>
              <p className="mt-2 text-lg font-semibold">{stat.label}</p>
              <p className="text-gray-400 mt-2 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
