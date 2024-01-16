import React, { RefObject, useEffect } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import ProjectPage from '../pages/Projects';
import backgroundImage from '../images/8.jpg';
import { Box, Button, Fade } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Education from '../pages/Education';
import { NavBar } from '../components';
import CollapsedApp from '../components/CollapsedAppBar';
import { useIsPhone } from '../hooks';

type MainAppProps = {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  educationRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
};

const MainApp: React.FC<MainAppProps> = ({ homeRef, aboutRef, experienceRef, educationRef, projectsRef }) => {
  const [isScrollAtTop, setIsScrollAtTop] = React.useState<boolean>(true);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY < 50) {
        setIsScrollAtTop(true);
      } else {
        setIsScrollAtTop(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [homeRef, aboutRef, experienceRef, isScrollAtTop]);

  const isPhone = useIsPhone();

  return (
    <>
      {isPhone && <CollapsedApp homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} educationRef={educationRef} />}
      {!isPhone && <NavBar homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} educationRef={educationRef} />}
      {/* <NavBar homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} educationRef={educationRef}/> */}
      <Box sx={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "repeat", backgroundSize: "30%", zIndex: -1 }} >
        <Box ref={homeRef} id="home" className="home" sx={{ display: "flex", flexDirection: "column", marginTop: "-65px", position: "relative" }}>
          <Home/>
        </Box>
        <Box ref={aboutRef} className="container" sx={{ display: "flex", flexDirection: "column" }} id="about">
          <About />
        </Box>
        <Box ref={experienceRef} className="container" sx={{ display: "flex", flexDirection: "flex-start" }} id="experience" >
          <Experience />
        </Box>
        <Box ref={projectsRef} className="container" sx={{ display: "flex", flexDirection: "flex-start" }} id="projects" >
          <ProjectPage />
        </Box>
        <Box ref={educationRef} className="container" sx={{ display: "flex", flexDirection: "flex-start" }} id="education" >
          <Education />
        </Box>
        <Fade in={!isScrollAtTop} timeout={500}>
          <Button
            variant="contained"
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 100,
              backgroundColor: "#444",
              transition: "0.2s",
              ":hover": {
                backgroundColor: "#111",
                transition: "0.2s",
              }
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUpwardIcon />
          </Button>
        </Fade>
      </Box>
    </>
  );
};

export default MainApp;