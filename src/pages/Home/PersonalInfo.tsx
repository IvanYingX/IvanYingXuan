import { Typography, Stack, Box, Grid } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LogoDescription } from "../../components";

const PersonalInfo: React.FC = () => {
  const handleLinkedInClick = () => window.open("https://www.linkedin.com/in/ivanyingxuan/", "_blank");
  const handleGitHubClick = () => window.open("https://github.com/IvanYingX", "_blank");

  return (
    <Stack direction="column" spacing={2} paddingLeft={2} >
      <Stack direction="column" spacing={2}  className="hidden">
        <Box sx={{ width: "fit-content", marginBottom: "20px", paddingBottom: "10px"}}>
          <Typography
            variant="body1"
            fontWeight={600}
            sx={{
              backgroundColor: "white",
              color: "#444",
              padding: "5px 30px",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
          }}>
            Welcome to my interactive resume
          </Typography>
        </Box>
        <Typography id="full-name">
          Ivan Ying Xuan
        </Typography>
        <Grid container className="hidden">
          <Grid item xs={12} sm={1.5} md={1.4}>
            <Typography variant="h5">
              I am a 
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={10.5}>
            <Box className="rotating-words-container">
              <Typography variant="h5">
                Full Stack Developer
              </Typography>
              <Typography variant="h5">
                Chemical Engineer
              </Typography>
              <Typography variant="h5">
                Process Engineer
              </Typography>
              <Typography variant="h5">
                Full Stack Developer
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Grid container sx={{ marginTop: "40px"}} className="hidden" rowSpacing={2}>
        <Grid item xs={12} sm={5}>
          <LogoDescription Icon={LocalPhoneIcon} text="+34 622 588 772" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <LogoDescription Icon={EmailIcon} text="ivan.ying.xuan@gmail.com" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <LogoDescription Icon={LinkedInIcon} text="ivanyingxuan" onClick={handleLinkedInClick} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <LogoDescription Icon={GitHubIcon} text="IvanYingX" onClick={handleGitHubClick} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PersonalInfo;
