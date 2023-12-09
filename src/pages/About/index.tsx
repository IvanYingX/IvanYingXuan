import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import ProfilePicture from './ProfilePicture';
import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DownloadButton from './DownloadButton';

const About: React.FC = () => {
  const isPhone = useMediaQuery('(max-width: 600px)');
  return (
    <Box className="container" sx={{ display: "flex", flexDirection: "column" }} id="about">
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%"}}>
        {!isPhone && (
          <Box sx={{alignItems: "center", marginTop: "auto", marginBottom: "auto", flex: "1 1 30%"}}>
            <ProfilePicture />
            <DownloadButton />
          </Box>
        )}
        <Box sx={{ alignItems: "center", marginTop: "auto", marginBottom: "auto", flex: isPhone ? "1 1 100%" : "1 1 70%"}}>
          <Typography variant="h3">About Me</Typography>
          <Typography variant="body1" sx={{ marginTop: "20px" }}>
            I am a versatile Full Stack Developer with a background in chemical engineering,
            adept at merging backend and frontend development to deliver dynamic, user-centric
            web solutions. With expertise in React, Node, Python, and the AWS stack, I
            specialize in crafting end-to-end applications that seamlessly blend frontend
            aesthetics with backend functionality, prioritizing performance optimization while
            ensuring user-centric design.
          </Typography>
          <Typography variant="body1">
            <br />
            My transition from chemical engineering to technology has equipped me with a unique
            approach—combining analytical thinking with technological prowess. This fusion
            allows me to deliver high-quality, industry-tailored web solutions that meet business
            needs while elevating user experiences through thoughtful design and optimized performance.
          </Typography>
          {isPhone && (
            <Box sx={{ marginTop: "30px" }}>
              {/* <ProfilePicture /> */}
              <DownloadButton />
            </Box>
          )}
        </Box>
      </Box>
      
    </Box>
  );
};

export default About;