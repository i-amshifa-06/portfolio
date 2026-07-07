import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  return (
    <div
      className="
      fixed
      pointer-events-none
      z-0
      w-64
      h-64
      rounded-full
      blur-3xl
      bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15
      transition-transform
      duration-100
      "
      style={{
        left: position.x - 128,
        top: position.y - 128,
      }}
    />
  );
}
