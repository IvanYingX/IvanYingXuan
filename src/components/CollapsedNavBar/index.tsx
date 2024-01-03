import { AppBar, Box, Stack, Typography, Collapse, Button, Grid } from '@mui/material';
import { useIsPhone } from '../../hooks';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import TableRowsIcon from '@mui/icons-material/TableRows';

type NavBarProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
};

const CollapsedNavBar: React.FC<NavBarProps> = ({ homeRef, aboutRef, experienceRef, educationRef }) => {
  const [disappear, setDisappear] = useState(false);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef === homeRef) {
      homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionRef === aboutRef) {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRef === experienceRef) {
      experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRef === educationRef) {
      educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
  }, []);

  const refs = [
    { sectionRef: homeRef, name: "Home"},
    { sectionRef: aboutRef, name: "About"},
    { sectionRef: experienceRef, name: "Experience"},
    { sectionRef: educationRef, name: "Education"}
  ]

  console.log("CollapsedNavBar");

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        height: "fit-content",
        padding: "10px 0",
        // margin: "auto",
        width: "100%",
        backgroundColor: disappear ?  "#444" : "rgba(0, 0, 0, 0)",
        animation: disappear ? "disappear 0.5s ease" : "appear 0.5s ease",
      }}
    >
      <Box
        sx={{
          // position: "sticky",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
          <Grid item xs={1}>
            <TableRowsIcon 
              sx={{
                color: "#fff",
                padding: "0 10px",
                fontSize: "35px",
                transition: "0.2s",
                marginRight: "20px",
                ":hover": {
                  color: "#ccc",
                  transition: "0.2s",
                }
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Grid>
          <Grid item xs={11} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <img src={logo} alt="logo" style={{ height: "40px", width: "40px", padding: "0 10px" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
          </Grid>
        </Grid>
        {/* </Button> */}
      </Box>
    </AppBar>
  );
};

export default CollapsedNavBar;