import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-[#0B1020]
      "
    >
      <div className="text-center">

        <h1
          className="
          text-4xl
          md:text-6xl
          font-black
          bg-gradient-to-r
          from-violet-400
          via-purple-500
          to-fuchsia-500
          bg-clip-text
          text-transparent
          "
        >
          Shifaul Kareem
        </h1>

        <p className="text-slate-400 mt-4">
          Loading Portfolio...
        </p>

      </div>
    </motion.div>
  );
}
