import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, animate } from "framer-motion";

function Animated404() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 404, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => controls.stop();
  }, []);

  return (
    <motion.span
      className="font-extrabold text-8xl sm:text-9xl bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent select-none drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]"
      animate={{ textShadow: ["0 0 20px rgba(139,92,246,0.3)", "0 0 40px rgba(217,70,239,0.5)", "0 0 20px rgba(139,92,246,0.3)"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {count}
    </motion.span>
  );
}

export default function NotFound() {
  const navigate = useNavigate();

  // Deterministic floating particles configuration
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: (i % 3) * 2 + 3, // 3px, 5px, 7px
    left: `${(i * 17) % 95 + 2.5}%`,
    top: `${(i * 23) % 95 + 2.5}%`,
    duration: 6 + (i % 4) * 2,
    delay: (i % 3) * 1.5,
  }));

  const popularLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <main className="min-h-screen bg-[#0B1020] text-slate-100 flex flex-col items-center justify-center relative overflow-hidden font-sans px-4 py-12">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Soft Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_65%)] pointer-events-none" />

      {/* Background Glowing Blobs */}
      <motion.div
        className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-violet-600/20 blur-[100px] sm:blur-[150px] -top-20 -left-20 pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-fuchsia-600/15 blur-[100px] sm:blur-[150px] -bottom-20 -right-20 pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-violet-400/20"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Glass Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative p-[1px] rounded-2xl bg-gradient-to-br from-violet-500/25 via-purple-500/10 to-fuchsia-500/25 shadow-2xl backdrop-blur-2xl w-full max-w-xl z-10"
      >
        <div className="bg-[#121A2F]/85 rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center">
          
          {/* Cyber hologram Portal / Illustration */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-40 h-40 flex items-center justify-center mb-6"
          >
            {/* Rotating Outer Dashed Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30"
            />
            {/* Counter-Rotating Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border border-fuchsia-500/40"
            />
            
            {/* Inner portal with grid pattern */}
            <div className="absolute w-24 h-24 rounded-full bg-violet-950/40 border border-violet-500/40 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              {/* Internal grid line overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.12)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none" />
              
              {/* Warning/Cyber Shield Icon */}
              <motion.svg
                className="w-10 h-10 text-fuchsia-500 filter drop-shadow-[0_0_6px_rgba(217,70,239,0.7)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </motion.svg>
            </div>
          </motion.div>

          {/* Animated 404 Counter */}
          <div className="mb-2">
            <Animated404 />
          </div>

          {/* Subtitle */}
          <h1 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-widest uppercase">
            PAGE NOT FOUND
          </h1>

          {/* Cyber theme fun message */}
          <p className="text-xs font-mono text-violet-400 mb-4 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
            📡 Looks like this page escaped into cyberspace.
          </p>

          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed max-w-md">
            Oops! The page you're looking for doesn't exist, has been moved, or the URL is incorrect.
          </p>

          {/* Buttons Action Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
            <Link
              to="/"
              aria-label="Back to Home Page"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-violet-500/35 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-violet-400 cursor-pointer"
              >
                🏠 Back to Home
              </motion.button>
            </Link>

            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go back to the previous page"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-white/10 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-violet-400 cursor-pointer"
            >
              ← Go Back
            </motion.button>
          </div>

          {/* Popular Links Divider */}
          <div className="w-full border-t border-white/5 pt-6">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-4">
              Popular Links
            </span>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {popularLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-xs sm:text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-violet-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </main>
  );
}
