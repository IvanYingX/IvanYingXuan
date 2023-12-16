import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NotFound, NavBar } from './components';
import MainApp from './routes/MainApp';
import { useRef } from 'react';
import { ParallaxProvider } from "react-scroll-parallax"

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} />
                <MainApp homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;