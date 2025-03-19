import { Box, Typography } from '@mui/material';
import React from 'react';
import ExperienceStep from '../../components/ExperienceStep';
import { steps } from './constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const Experience: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <Box sx={{ alignItems: "center", marginLeft: "auto", marginRight: "auto", width: "80%" }}>
      <Typography variant="h3" sx={{ marginBottom: "20px" }} className='hidden'>Experience</Typography>
      <Slider {...settings}>
        {steps.map((step) => (
          <ExperienceStep
            key={`experience-step-${step.title}`}
            step={step}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Experience;