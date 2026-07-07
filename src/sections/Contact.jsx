import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method || "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your network connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="reveal py-20 sm:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-violet-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">
            Let's Work Together
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 sm:mt-6 max-w-2xl mx-auto">
            Have a project idea, internship opportunity, or just want
            to connect? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            sm:p-8
            flex
            flex-col
            justify-between
            "
          >

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Get In Touch
              </h3>

              <p className="text-sm sm:text-base text-slate-400 mt-3 sm:mt-4">
                I'm always open to discussing new projects,
                cybersecurity opportunities and collaborations.
              </p>

              <div className="space-y-5 mt-8 sm:mt-10">

                <div className="flex items-center gap-3 sm:gap-4">
                  <FaEnvelope className="text-violet-400 flex-shrink-0" size={18} />
                  <a
                    href="mailto:shifaulkareem06@gmail.com"
                    className="text-sm sm:text-base text-slate-300 hover:text-violet-400 transition break-all"
                  >
                    shifaulkareem06@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <FaMapMarkerAlt className="text-violet-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Avadi IAF, Muthapudupet, Chennai, Tamil Nadu, India – 600055
                  </span>
                </div>

              </div>
            </div>

            <div className="flex gap-5 mt-8 sm:mt-10">

              <a
                href="https://github.com/i-amshifa-06"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-300 hover:text-violet-400 focus-visible:text-violet-400 outline-none transition duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shifaulkareem06"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-300 hover:text-violet-400 focus-visible:text-violet-400 outline-none transition duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/i_amshifa_06"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-300 hover:text-violet-400 focus-visible:text-violet-400 outline-none transition duration-300"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mnjkrlbn"
            method="POST"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            sm:p-8
            "
          >

            <div className="space-y-4 sm:space-y-5">
              
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="
                w-full
                p-3.5
                sm:p-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                outline-none
                text-base
                text-white
                placeholder-slate-500
                focus:border-violet-500/50
                transition-all
                duration-300
                "
                required
                aria-label="Your Name"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="
                w-full
                p-3.5
                sm:p-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                outline-none
                text-base
                text-white
                placeholder-slate-500
                focus:border-violet-500/50
                transition-all
                duration-300
                "
                required
                aria-label="Your Email"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                className="
                w-full
                p-3.5
                sm:p-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                outline-none
                text-base
                text-white
                placeholder-slate-500
                focus:border-violet-500/50
                transition-all
                duration-300
                "
                required
                aria-label="Your Message"
              />

              {success && (
                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium transition-all duration-300">
                  🎉 Message sent successfully! Thank you for reaching out.
                </div>
              )}

              {error && (
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 text-sm font-medium transition-all duration-300">
                  ⚠️ {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="
                w-full
                py-3.5
                sm:py-4
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-600
                font-semibold
                text-sm
                sm:text-base
                text-white
                hover:scale-[1.02]
                active:scale-98
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:hover:scale-100
                "
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
