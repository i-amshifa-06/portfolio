import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 128}px, ${e.clientY - 128}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  return (
    <div
      ref={glowRef}
      className="
      fixed
      pointer-events-none
      z-0
      w-64
      h-64
      rounded-full
      blur-3xl
      bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15
      "
      style={{
        left: 0,
        top: 0,
        transform: "translate3d(-999px, -999px, 0)",
        willChange: "transform",
      }}
    />
  );
}

