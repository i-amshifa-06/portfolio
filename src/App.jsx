import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import FloatingTech from "./components/FloatingTech";
import SmoothScroll from "./components/SmoothScroll";
import ScrollAnimations from "./components/ScrollAnimations";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CursorGlow />
      <FloatingTech />
      <SmoothScroll />
      <ScrollAnimations />
      <ScrollProgress />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
