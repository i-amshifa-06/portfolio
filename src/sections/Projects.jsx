import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="reveal py-20 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 sm:mb-20">

          <p className="text-violet-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">
            Featured Projects
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 sm:mt-6 max-w-2xl mx-auto">
            A collection of cybersecurity, AI, software development
            and business projects built to solve real-world problems.
          </p>

        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          items-stretch
          "
        >

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`
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

              ${
                project.featured
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                  : "col-span-1"
              }
              `}
            >

              <div className="flex flex-col flex-grow">

                <p className="text-violet-400 text-xs sm:text-sm font-medium">
                  {project.category}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold mt-3 sm:mt-4 text-white">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 mt-3 sm:mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-white/5
                      border
                      border-white/10
                      text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10 pt-4 border-t border-white/5 mt-auto">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  hover:bg-white/10
                  active:scale-98
                  transition-all
                  text-sm
                  font-medium
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600
                  hover:scale-105
                  active:scale-98
                  transition-all
                  text-sm
                  font-medium
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

