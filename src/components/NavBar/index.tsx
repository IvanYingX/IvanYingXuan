import { AppBar, Box, Stack, Typography } from '@mui/material';
import { useIsPhone } from '../../hooks';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';

type NavBarProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
};

const NavBar: React.FC<NavBarProps> = ({ homeRef, aboutRef, experienceRef }) => {
  const [disappear, setDisappear] = useState(false);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef === homeRef) {
      homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionRef === aboutRef) {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRef === experienceRef) {
      experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refs = [
    { sectionRef: homeRef, name: "Home"},
    { sectionRef: aboutRef, name: "About"},
    { sectionRef: experienceRef, name: "Experience"}
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setDisappear(true);
      }
      else {
        setDisappear(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeRef, aboutRef, experienceRef]);
  const isPhone = useIsPhone();

  return (
    
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        justifyContent: isPhone ? "center" : "flex-start",
        zIndex: 3,
        padding: 2,
        paddingLeft: isPhone ? 2 : 10,
        height: "fit-content",
        backgroundColor: disappear ?  "#444" : "rgba(0, 0, 0, 0)",
        margin: "0 auto",
        width: "100%",
        animation: disappear ? "disappear 0.5s ease" : "appear 0.5s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Stack direction="row" spacing={4} sx={{ alignItems: "center", display: "flex" }}>
          <img src={logo} alt="logo" width="30px" height="30px" style={{ cursor: "pointer" }}/>
          {refs.map((ref, index) => (
            <Typography
              key={`nav-button-${ref.name}`}
              onClick={() => scrollToSection(ref.sectionRef)}
              sx={{ color: "white", cursor: "pointer", fontSize: "1.2rem" }}
              fontWeight="bold"
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}

            >
              {ref.name}
            </Typography>
          ))}

        </Stack>
      </Box>
    </AppBar>
  );
};

export default NavBar;