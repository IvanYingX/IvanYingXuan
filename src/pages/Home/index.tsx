import { Box, Button, useMediaQuery } from '@mui/material';
import PersonalInfo from './PersonalInfo';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useEffect } from 'react';

interface HomeProps {
  nextRef?: HTMLDivElement
}

const Home: React.FC<HomeProps> = ({ nextRef }) => {
  const media = useMediaQuery('(max-width: 600px)');
  useEffect(() => {
    console.log("Media", media);
    const scrollKeyHandler = (e: KeyboardEvent) => {
      const nextSection = document.getElementById("about");
      const nextSectionTop = nextSection?.getBoundingClientRect().top;
      if (e.key === "ArrowDown" && nextSectionTop && nextSectionTop > 0) {
        window.scrollTo({ top: nextRef?.offsetTop, behavior: "smooth" });
      }
    }
    const scrollMouseHandler = (e: WheelEvent) => {
      //  Scroll down only if the scroll is down and the next section is not visible (deltaY is positive when scrolling down)
      const nextSection = document.getElementById("about");
      const nextSectionTop = nextSection?.getBoundingClientRect().top;
      // nextSectionTop is positive when the next section is down the screen
      if (e.deltaY > 0 && nextSectionTop && nextSectionTop > 0) {
        window.scrollTo({ top: nextRef?.offsetTop, behavior: "smooth" });
      }
    }
    window.addEventListener("keydown", scrollKeyHandler);
    window.addEventListener("wheel", scrollMouseHandler);
    return () => {
      window.removeEventListener("keydown", scrollKeyHandler);
      window.removeEventListener("wheel", scrollMouseHandler);
    }
  }, [nextRef, media]);

  return (
    <Box className="home" sx={{ display: "flex", flexDirection: "column", marginTop: "-65px", position: "relative" }} id="home" >
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
          onClick={() => window.scrollTo({ top: nextRef?.offsetTop, behavior: "smooth" })}
        >
          <KeyboardDoubleArrowDownIcon />
        </Button> 

      </Box>
    </Box>
  );
};

export default Home
