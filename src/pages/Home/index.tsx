import { Box, Button } from '@mui/material';
import PersonalInfo from './PersonalInfo';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React,{ useEffect, useState } from 'react';

const Home: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | HTMLElement | null>(null);

    // Get the bottom of the home section
  const [homeSectionBottom, setHomeSectionBottom] = useState<number | undefined>(undefined);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    ref.current = homeSection;
    const homeRef = homeSection?.getBoundingClientRect();
    const homeSectionBottom = homeRef?.bottom;
    setHomeSectionBottom(homeSectionBottom);
  }, []);
  
  useEffect(() => {
    const scrollMouseHandler = (e: WheelEvent) => {
      if (e.deltaY > 0 && homeSectionBottom && homeSectionBottom > 0) {
        window.scrollTo({ top: homeSectionBottom, behavior: "smooth" });
      }
    }
    ref.current?.addEventListener("wheel", (e) => scrollMouseHandler(e as WheelEvent));
    return () => {
      ref.current?.removeEventListener("wheel", (e) => scrollMouseHandler(e as WheelEvent));
    }
  }, [ref, homeSectionBottom]);

  return (
    <Box>
      <Box sx={{ alignItems: "center" }}>
        <PersonalInfo />
      </Box>
      <Box sx={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#444",
            transition: "0.2s",
            ":hover": {
              backgroundColor: "#111",
              transition: "0.2s",
            },
          }}
          onClick={() => window.scrollTo({ top: homeSectionBottom, behavior: "smooth" })}
        >
          <KeyboardDoubleArrowDownIcon />
        </Button> 

      </Box>
    </Box>
  );
};

export default Home
