import { Typography, Stack, Box } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useIsPhone } from "../../hooks";
import { LogoDescription } from "../../components";

const PersonalInfo: React.FC = () => {
  const isPhone = useIsPhone();
  const handleLinkedInClick = () => window.open("https://www.linkedin.com/in/ivanyingxuan/", "_blank");
  const handleGitHubClick = () => window.open("https://github.com/IvanYingX", "_blank");

  return (
    <Stack direction="column" spacing={2} >
      <Stack direction="column" spacing={2}>
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
            animation: "fadeIn 0.5s",
          }}>
            Welcome to my interactive resume
          </Typography>
        </Box>
        <Typography id="full-name">
          Ivan Ying Xuan
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", animation: "fadeIn 1s" }}>
          Full Stack Developer
        </Typography>
      </Stack>
      <Stack direction="row" spacing={6} sx={{ marginTop: "40px", animation: "fadeIn 1s" }}>
        <Stack direction="column" spacing={2} sx={{ marginBottom: "10px", marginTop: "40px", animation: "fadeIn 1s" }}>
          <LogoDescription Icon={LocalPhoneIcon} text="+34 622 588 772" />
          <LogoDescription Icon={EmailIcon} text="ivan.ying.xuan@gmail.com" />
          {isPhone && (
            <>
              <LogoDescription Icon={LinkedInIcon} text="ivanyingxuan" onClick={handleLinkedInClick} />
              <LogoDescription Icon={GitHubIcon} text="IvanYingX" onClick={handleGitHubClick} />
            </>
          )}
        </Stack>
        {!isPhone && (
          <Stack direction="column" spacing={2} sx={{ marginBottom: "10px", marginTop: "40px", animation: "fadeIn 1s" }}>
            <LogoDescription Icon={LinkedInIcon} text="ivanyingxuan" onClick={handleLinkedInClick} />
            <LogoDescription Icon={GitHubIcon} text="IvanYingX" onClick={handleGitHubClick} />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default PersonalInfo;
