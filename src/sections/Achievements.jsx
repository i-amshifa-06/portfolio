import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaProjectDiagram size={30} />,
      value: "7+",
      title: "Projects Built",
      description:
        "Cybersecurity, AI, Web Development and Business Projects.",
    },

    {
      icon: <FaLaptopCode size={30} />,
      value: "4+",
      title: "Months Freelancing",
      description:
        "Worked with local businesses and real-world clients.",
    },

    {
      icon: <FaCode size={30} />,
      value: "10+",
      title: "Technologies",
      description:
        "React, Python, FastAPI, Linux, JavaScript and more.",
    },

    {
      icon: <FaGraduationCap size={30} />,
      value: "3rd",
      title: "Year B.Tech IT",
      description:
        "Focused on Cybersecurity and Software Development.",
    },
  ];

  return (
    <section
      id="achievements"
      className="reveal py-20 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 sm:mb-20">

          <p className="text-violet-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
            Highlights
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">
            Achievements
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              sm:p-8
              hover:border-violet-500/40
              hover:-translate-y-2
              transition-all
              duration-300
              flex
              flex-col
              h-full
              "
            >

              <div className="text-violet-400 mb-5 sm:mb-6">
                {item.icon}
              </div>

              <h3 className="text-4xl sm:text-5xl font-black text-white">
                {item.value}
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 text-white">
                {item.title}
              </h4>

              <p className="text-sm sm:text-base text-slate-400 mt-2 sm:mt-3 leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}


