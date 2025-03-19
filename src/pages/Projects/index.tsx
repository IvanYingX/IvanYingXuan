import { Box, Typography } from '@mui/material';
import React from 'react';
import ProjectDescription from '../../components/ProjectDescription';
import { projects } from './constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../index.css';

const ProjectPage: React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Box sx={{ alignItems: "center", marginLeft: "auto", marginRight: "auto", width: "80%" }}>
      <Typography variant="h3" sx={{ marginBottom: "20px" }} className='hidden'>Projects</Typography>
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectDescription
            key={`project-${project.title}`}
            project={project}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectPage;
