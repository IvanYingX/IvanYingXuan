import { Typography, Stack, Box, Button, useMediaQuery } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";

const PersonalInfo: React.FC = () => {
  const [githubHover, setGithubHover] = useState<boolean>(false);
  const [linkedinHover, setLinkedinHover] = useState<boolean>(false);
  const [emailHover, setEmailHover] = useState<boolean>(false);
  const [phoneHover, setPhoneHover] = useState<boolean>(false);
  const isPhone = useMediaQuery('(max-width: 600px)');
  return (
    <>
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
      <Stack direction="row" spacing={2} sx={{ marginTop: "40px", animation: "fadeIn 1s" }}>
        <Stack direction="column" spacing={2} sx={{ marginBottom: "10px", marginTop: "40px", animation: "fadeIn 1s" }}>
          <Typography variant="body1" sx={{ alignItems: "center", display: "flex" }} onMouseEnter={() => setPhoneHover(true)} onMouseLeave={() => setPhoneHover(false)}>
            <LocalPhoneIcon sx={{ marginRight: "20px", transition: "0.2s" }} color={phoneHover ? "action" : "inherit"} />
              +34 622 588 772
          </Typography>
          <Typography variant="body1" sx={{ alignItems: "center", display: "flex" }} onMouseEnter={() => setEmailHover(true)} onMouseLeave={() => setEmailHover(false)}>
            <EmailIcon sx={{ marginRight: "20px", transition: "0.2s" }} color={emailHover ? "action" : "inherit"} />
            ivan@theaicore.com
          </Typography>
          {isPhone && (
            <>
              <Typography
                variant="body1"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                  ":hover": {
                    "textDecoration": "underline"
                  }
                }}
                onMouseEnter={() => setLinkedinHover(true)}
                onMouseLeave={() => setLinkedinHover(false)}
                onClick={() => window.open("https://www.linkedin.com/in/ivanyingxuan/", "_blank")}
              >
                <LinkedInIcon sx={{ marginRight: "20px", transition: "0.2s" }} color={linkedinHover ? "action" : "inherit"} />
                ivanyingxuan
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                  ":hover": {
                    "textDecoration": "underline"
                  }
                }}
                onMouseEnter={() => setGithubHover(true)}
                onMouseLeave={() => setGithubHover(false)}
                onClick={() => window.open("https://github.com/IvanYingX", "_blank")}
              >
                <GitHubIcon sx={{ marginRight: "20px", transition: "0.2s" }} color={githubHover ? "action" : "inherit"} />
                IvanYingX
              </Typography>
            </>
          )}
        </Stack>
        {!isPhone && (
          <Stack direction="column" spacing={2} sx={{ marginBottom: "10px", marginTop: "40px", animation: "fadeIn 1s" }}>
            <Typography
              variant="body1"
              sx={{
                alignItems: "center",
                display: "flex",
                cursor: "pointer",
                ":hover": {
                  "textDecoration": "underline"
                }
              }}
              onMouseEnter={() => setLinkedinHover(true)}
              onMouseLeave={() => setLinkedinHover(false)}
              onClick={() => window.open("https://www.linkedin.com/in/ivanyingxuan/", "_blank")}
            >
              <LinkedInIcon sx={{ marginRight: "20px", transition: "0.2s" }} color={linkedinHover ? "action" : "inherit"} />
              ivanyingxuan
            </Typography>
            <Typography
              variant="body1"
              sx={{
                alignItems: "center",
                display: "flex",
                cursor: "pointer",
                ":hover": {
                  "textDecoration": "underline"
                }
              }}
              onMouseEnter={() => setGithubHover(true)}
              onMouseLeave={() => setGithubHover(false)}
              onClick={() => window.open("https://github.com/IvanYingX", "_blank")}
            >
              <GitHubIcon sx={{ marginRight: "20px", transition: "0.2s" }} color={githubHover ? "action" : "inherit"} />
              IvanYingX
            </Typography>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default PersonalInfo;
