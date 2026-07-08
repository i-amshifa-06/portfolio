import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="
        w-full
        max-w-7xl
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        "
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">

          <a
            href="#home"
            className="font-bold text-lg sm:text-xl tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg p-1"
          >
            <span className="text-white">
              Shifaul
            </span>

            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent ml-2">
              Kareem
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">

            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`
                  transition-all
                  duration-300
                  hover:text-violet-400
                  text-sm
                  font-medium
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-violet-400
                  rounded-lg
                  px-2
                  py-1

                  ${
                    active ===
                    link.href.replace("#", "")
                      ? "text-violet-400"
                      : "text-slate-300"
                  }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View Resume"
  className="
    hidden
    lg:flex
    items-center
    gap-2
    px-5
    py-2.5
    rounded-xl
    bg-gradient-to-r
    from-violet-600
    to-fuchsia-600
    hover:scale-105
    active:scale-95
    transition-all
    duration-300
    text-sm
    font-medium
    outline-none
    focus-visible:ring-2
    focus-visible:ring-violet-400
  "
>
  📄 Resume
</a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-xl text-slate-300 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 max-h-[75vh] overflow-y-auto">

            <ul className="flex flex-col py-3">

              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                    block
                    px-6
                    py-3.5
                    text-slate-300
                    hover:text-violet-400
                    text-base
                    font-medium
                    transition-all
                    outline-none
                    focus:bg-white/5
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="border-t border-white/5 mt-2 pt-2 px-6 pb-4">
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="
                  flex
                  items-center
                  justify-center
                  w-full
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600
                  text-center
                  text-sm
                  font-semibold
                  transition-all
                  active:scale-98
                  "
                >
                  Download Resume
                </a>
              </li>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
}

