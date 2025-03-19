import { AppBar, Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import TableRowsIcon from '@mui/icons-material/TableRows';

type AppBarProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

const CollapsedAppBar: React.FC<AppBarProps> = ({ homeRef, aboutRef, experienceRef, educationRef, projectsRef, contactRef }) => {
  const [hideTopBar, setHideTopBar] = useState(false);
  // Set a state for the horizontal nav bar that appears when the TableRowsIcon is clicked
  const [navBarShown, setNavBarShown] = useState(false);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef === homeRef) {
      homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionRef === aboutRef) {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRef === experienceRef) {
      experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRef === educationRef) {
      educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRef === projectsRef) {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRef === contactRef) {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHideTopBar(true);
      }
      else {
        setHideTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const refs = [
    { sectionRef: homeRef, name: "Home"},
    { sectionRef: aboutRef, name: "About"},
    { sectionRef: experienceRef, name: "Experience"},
    { sectionRef: projectsRef, name: "Projects"},
    { sectionRef: educationRef, name: "Education"}
  ]

  return (
    <>
      {navBarShown && (
        <Box
          sx={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 100,
          }}
          onClick={() => setNavBarShown(false)}
        />
      )}
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "50svw",
          height: "100%",
          backgroundColor: "#444",
          zIndex: 100,
          // padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={navBarShown ? "visible-menu" : "collapsed-menu"}
      >
        {refs.map((ref, index) => (
          <Box
            sx={{
              width: "fit-content",
              padding: "10px 20px",
              cursor: "pointer",
              // ":hover": {
              //   backgroundColor: "#ccc",
              //   transition: "0.2s",
              // },
              transitionDelay: `${0.1 + index * 0.1}s`,
            }}
            fontSize="1.2rem"
            fontWeight="bold"
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
            onClick={() => {
              scrollToSection(ref.sectionRef);
              setNavBarShown(false);
            }}
            key={`nav-button-${ref.name}`}
            className={navBarShown ? "visible-menu" : "menu-item"}
          >
            {ref.name}
          </Box>
        ))}
      </Box>
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
          backgroundColor: hideTopBar && !navBarShown ? "#444" : "rgba(0, 0, 0, 0)",
          animation: hideTopBar && !navBarShown ? "disappear 0.5s ease" : "appear 0.5s ease",
        }}
      >
        <Box
          sx={{
            // position: "sticky",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid item xs={1}>
              <Box sx={{cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <TableRowsIcon 
                  sx={{
                    color: "#fff",
                    // padding: "0 10px",
                    fontSize: "35px",
                    transition: "0.2s",
                    ":hover": {
                      color: "#ccc",
                      transition: "0.2s",
                    }
                  }}
                  onClick={() => setNavBarShown(!navBarShown)}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={navBarShown ? 8 : 11}
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", transition: "0.3s ease" }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                onClick={() => scrollToSection(homeRef)}
              >
                <img src={logo} alt="logo" width="30px" height="30px"/>
              </Box>
            </Grid>
          </Grid>
          {/* </Button> */}
        </Box>
      </AppBar>
    </>
  );
};

export default CollapsedAppBar;