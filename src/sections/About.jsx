import { motion } from "framer-motion";
import profile from "../assets/profile1.webp";

export default function About() {
  return (
    <section
      id="about"
      className="reveal relative py-20 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20 text-center"
        >
          <p className="text-violet-400 uppercase tracking-widest text-xs sm:text-sm">
            Get To Know Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center w-full"
          >
            <div
              className="
              w-full
              max-w-[280px]
              sm:max-w-[340px]
              lg:max-w-[400px]
              aspect-[3/4]
              rounded-[32px]
              sm:rounded-[40px]
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              "
            >
              <img
                src={profile}
                alt="About"
                className="w-full h-full object-cover"
                width={400}
                height={533}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >

            <h3 className="text-2xl sm:text-3xl font-bold">
              Mohiadeen Shifaul Kareem
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-violet-400 font-medium">
              Aspiring Cybersecurity Engineer • Full Stack Developer • Tech Explorer
            </p>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-slate-400 leading-relaxed">
              I'm currently pursuing B.Tech Information Technology
              with a strong interest in Cybersecurity, Full Stack
              Development and IoT technologies.

              I enjoy building practical solutions that solve
              real-world problems while continuously learning
              emerging technologies and security concepts.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">

                <h4 className="text-base sm:text-lg font-semibold">
                  Education
                </h4>

                <p className="text-sm text-slate-400 mt-2">
                  B.Tech
                </p>

                <p className="text-sm text-slate-400">
                  Information Technology
                </p>

              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">

                <h4 className="text-base sm:text-lg font-semibold">
                  Current Focus
                </h4>

                <p className="text-sm text-slate-400 mt-2">
                  Web Development
                </p>

                <p className="text-sm text-slate-400">
                  Cybersecurity
                </p>

              </div>

            </div>

            {/* Highlights */}

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2.5 sm:gap-3">

              <span className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10">
                Cybersecurity
              </span>

              <span className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10">
                React
              </span>

              <span className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10">
                Linux
              </span>

              <span className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10">
                IoT
              </span>

              <span className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10">
                Web Development
              </span>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}


