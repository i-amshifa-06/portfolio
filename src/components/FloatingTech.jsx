import { m } from "framer-motion";

export default function FloatingTech() {
  const techs = [
    "React",
    "Python",
    "JavaScript",
    "Linux",
    "Cybersecurity",
    "FastAPI",
    "Tailwind",
    "ESP32",
    "GitHub",
    "IoT",
    "Node.js",
    "Dart",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {techs.map((tech, index) => (
        <m.div
          key={tech}
          className="
          absolute
          text-white/5
          font-bold
          select-none
          "
          style={{
            left: `${(index * 8) % 90}%`,
            top: `${(index * 12) % 90}%`,
            fontSize: `${20 + (index % 4) * 10}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tech}
        </m.div>
      ))}
    </div>
  );
}

