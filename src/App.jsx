import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import FloatingTech from "./components/FloatingTech";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import ScrollAnimations from "./components/ScrollAnimations";
import NotFound from "./pages/NotFound";

// Lazy loaded below-the-fold components
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Achievements = lazy(() => import("./sections/Achievements"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [loading, setLoading] = useState(true);
  const [defer, setDefer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Defer mounting of non-critical background components until after first paint
      requestAnimationFrame(() => {
        setTimeout(() => {
          setDefer(false);
        }, 100);
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {!defer && <CursorGlow />}
                {!defer && <FloatingTech />}
                {!defer && <SmoothScroll />}
                {!defer && <ScrollProgress />}

                <Navbar />

                <Hero />
                
                {!defer && <ScrollAnimations />}

                <Suspense fallback={null}>
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Achievements />
                  <Contact />
                  <Footer />
                </Suspense>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LazyMotion>
    </BrowserRouter>
  );
}

export default App;




