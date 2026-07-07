import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiLinux,
  SiGithub,
  SiArduino,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
      icon: <FaReact size={40} />,
    },

    {
      title: "Programming",
      skills: [
        "Python",
        "C",
        "C++",
      ],
      icon: <FaPython size={40} />,
    },

    {
      title: "Cybersecurity",
      skills: [
        "Linux",
        "Networking",
        "Security Fundamentals",
        "Kali Linux",
      ],
      icon: <SiLinux size={40} />,
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Arduino",
      ],
      icon: <FaGitAlt size={40} />,
    },
  ];

  return (
    <section
      id="skills"
      className="reveal py-20 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 sm:mb-20">

          <p className="text-violet-400 uppercase tracking-widest text-xs sm:text-sm">
            Technologies
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">
            Skills & Tools
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              sm:p-8
              hover:border-violet-500/50
              hover:-translate-y-2
              transition-all
              duration-300
              flex
              flex-col
              h-full
              "
            >

              <div className="text-violet-400 mb-5 sm:mb-6">
                {category.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                {category.title}
              </h3>

              <div className="space-y-2.5 sm:space-y-3 mt-auto">

                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                    px-3.5
                    sm:px-4
                    py-2
                    rounded-xl
                    bg-white/5
                    border
                    border-white/5
                    text-sm
                    sm:text-base
                    text-slate-300
                    "
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}


