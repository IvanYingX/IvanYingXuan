import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ProjectDescription from '../../components/ProjectDescription';
import ToggleButton from '../../components/ToggleButton';
import { projects } from './constants';


const ProjectPage: React.FC = () => {
  const [toggleAllExpanded, setToggleAllExpanded] = React.useState<boolean>(true);

  const toggleAll = () => {
    setToggleAllExpanded(!toggleAllExpanded);
  }

  return (
    <Box sx={{ alignItems: "center", marginLeft: "auto", marginRight: "auto", width: "80%" }}>
      <Typography variant="h3" sx={{ marginBottom: "20px" }} className='hidden'>Projects</Typography>
      <Stack direction="column" spacing={5} sx={{ marginBottom: "20px" }}>
        <ToggleButton
          show={toggleAllExpanded}
          textOn='Collapse Descriptions'
          textOff='Expand Descriptions'
          onClick={toggleAll}
        />
        {projects.map((project) => (
          <ProjectDescription
            key={`project-${project.title}`}
            project={project}
            toggleAllExpanded={toggleAllExpanded}
          />
        ))}
      </Stack>      
    </Box>
  );
};

export default ProjectPage;
