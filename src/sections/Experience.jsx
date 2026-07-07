import { motion } from "framer-motion";

export default function Experience() {
  const timeline = [
    {
      year: "2024",
      title: "Started Web Development",
      description:
        "Began learning HTML, CSS and JavaScript while building responsive websites and exploring modern web development.",
    },

    {
      year: "2025",
      title: "Started Freelancing",
      description:
        "Started working with local businesses and clients, helping them establish their online presence through professional websites.",
    },

    {
      year: "2025",
      title: "Safa Brownie",
      description:
        "Designed and developed a business website for a dessert brand, focusing on branding, product presentation and customer engagement.",
    },

    {
      year: "2025",
      title: "Melt Avadi",
      description:
        "Built a premium dessert shop website featuring menu showcases, business information and a modern customer experience.",
    },

    {
      year: "2026",
      title: "CyberShield",
      description:
        "Developed a cybersecurity monitoring platform with threat analysis, network intelligence and security monitoring capabilities.",
    },

    {
      year: "2026",
      title: "SpeakerFlow AI",
      description:
        "Created an AI-powered English speaking and communication improvement application using modern AI technologies.",
    },

    {
      year: "2026",
      title: "Cybersecurity Journey",
      description:
        "Started focusing deeply on cybersecurity, ethical hacking, network security and secure application development.",
    },
  ];

  return (
    <section
      id="experience"
      className="reveal relative py-20 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-violet-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
            Growth Timeline
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">
            Journey & Experience
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 sm:mt-6 max-w-2xl mx-auto">
            My journey from learning web development to building
            real-world projects, freelancing and exploring cybersecurity.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-[2px] bg-white/10" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="relative pl-10 sm:pl-16 pb-10 sm:pb-12"
            >
              {/* Dot */}

              <div
                className="
                absolute
                left-0
                top-2.5
                w-6
                h-6
                sm:w-8
                sm:h-8
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-fuchsia-500
                border
                border-white/20
                "
              />

              {/* Card */}

              <div
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-5
                sm:p-6
                hover:border-violet-500/40
                transition-all
                duration-300
                "
              >

                <span className="text-violet-400 text-xs sm:text-sm font-medium">
                  {item.year}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold mt-1.5 sm:mt-2 text-white">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 mt-2.5 sm:mt-3 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

