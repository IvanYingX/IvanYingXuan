import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NotFound, NavBar } from './components';
import MainApp from './routes/MainApp';
import { useRef, useEffect } from 'react';

const CONSTANT_SHOW_ANIMATION = false;

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (!CONSTANT_SHOW_ANIMATION) entry.target.classList.remove("hidden");
      } else if (CONSTANT_SHOW_ANIMATION) {
        entry.target.classList.remove("is-visible");
      }
    });
  };

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll(".hidden");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainApp homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} educationRef={educationRef} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;