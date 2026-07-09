import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import profile from "../assets/profile1.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="reveal relative min-h-screen overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center"
    >
      {/* Background Blobs */}

      <div className="absolute top-20 left-0 w-80 h-80 bg-violet-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-600/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* IMAGE - MOBILE FIRST */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">

              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 blur-3xl opacity-30 rounded-[32px] sm:rounded-[40px]" />

              <div
                className="
                relative
                w-full
                aspect-[3/4]
                rounded-[32px]
                sm:rounded-[40px]
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                shadow-2xl
                "
              >
                <img
                  src={profile}
                  alt="Shifaul Kareem"
                  className="w-full h-full object-cover"
                  width={380}
                  height={506}
                  fetchPriority="high"
                  decoding="async"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-black/40 backdrop-blur-xl">

                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                    Mohiadeen Shifaul Kareem
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    Aspiring Cybersecurity Engineer
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                    Full Stack Developer
                  </p>

                </div>

              </div>
            </div>
          </motion.div>

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-left"
          >

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs sm:text-sm text-slate-300">
              👋 Welcome to my portfolio
            </div>

            <p className="mt-6 sm:mt-8 text-slate-400 text-base sm:text-lg">
              Hi, I'm
            </p>

            <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Mohiadeen{" "}
              <span className="block sm:inline bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                Shifaul Kareem
              </span>
            </h1>

            <h2 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium">
              Aspiring Cybersecurity Engineer • Full Stack Developer • Tech Explorer
            </h2>

            <p className="mt-4 sm:mt-6 max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
              Passionate about building secure digital experiences,
              modern web applications, and innovative technology solutions.
              Currently exploring cybersecurity, full stack development,
              and IoT systems while continuously learning and improving.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 sm:mt-10">

              {/* View Projects */}

              <a
                href="#projects"
                className="
                group
                w-full
                sm:w-auto
                px-7
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                via-purple-600
                to-fuchsia-600
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                shadow-lg
                shadow-violet-500/20
                "
              >
                View Projects

                <FaArrowRight
                  className="
                  group-hover:translate-x-1
                  transition-all
                  duration-300
                  "
                />
              </a>

              {/* Download Resume */}

<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download Resume"
  className="
    w-full
    sm:w-auto
    px-7
    py-4
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    hover:bg-white/10
    hover:border-violet-500/30
    flex
    items-center
    justify-center
    active:scale-95
    transition-all
    duration-300
    font-medium
  "
>
  📄 Download Resume
</a>

            </div>


            {/* Social Links */}

            <div className="flex gap-4 sm:gap-5 mt-8 sm:mt-10">

              <a
                href="https://github.com/i-amshifa-06"
                target="_blank"
                rel="noreferrer"
                className="
                group
                relative
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-violet-500/50
                hover:-translate-y-2
                active:scale-95
                transition-all
                duration-300
                "
                aria-label="GitHub Profile"
              >
                <FaGithub size={22} className="sm:hidden" />
                <FaGithub size={24} className="hidden sm:block" />

                <span
                  className="
                  absolute
                  -top-10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  text-xs
                  bg-black/50
                  px-2
                  py-1
                  rounded-lg
                  pointer-events-none
                  "
                >
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/shifaulkareem06"
                target="_blank"
                rel="noreferrer"
                className="
                group
                relative
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-violet-500/50
                hover:-translate-y-2
                active:scale-95
                transition-all
                duration-300
                "
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={22} className="sm:hidden" />
                <FaLinkedin size={24} className="hidden sm:block" />

                <span
                  className="
                  absolute
                  -top-10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  text-xs
                  bg-black/50
                  px-2
                  py-1
                  rounded-lg
                  pointer-events-none
                  "
                >
                  LinkedIn
                </span>
              </a>

              <a
                href="https://www.instagram.com/i_amshifa_06"
                target="_blank"
                rel="noreferrer"
                className="
                group
                relative
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-violet-500/50
                hover:-translate-y-2
                active:scale-95
                transition-all
                duration-300
                "
                aria-label="Instagram Profile"
              >
                <FaInstagram size={22} className="sm:hidden" />
                <FaInstagram size={24} className="hidden sm:block" />

                <span
                  className="
                  absolute
                  -top-10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  text-xs
                  bg-black/50
                  px-2
                  py-1
                  rounded-lg
                  pointer-events-none
                  "
                >
                  Instagram
                </span>
              </a>

            </div>


            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-md">

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">7+</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">4+</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Months Freelancing
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">3rd</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Year B.Tech IT
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}


