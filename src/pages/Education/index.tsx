import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ExperienceStep from '../../components/ExperienceStep';
import ToggleButton from '../../components/ToggleButton';
import { steps } from './constants';


const Education: React.FC = () => {
  const [toggleAllExpanded, setToggleAllExpanded] = React.useState<boolean>(true);

  const toggleAll = () => {
    setToggleAllExpanded(!toggleAllExpanded);
  }

  return (
    <Box sx={{ alignItems: "center", marginLeft: "auto", marginRight: "auto", width: "80%" }}>
      <Typography variant="h3" sx={{ marginBottom: "20px" }} className='hidden'>Education</Typography>
      <Stack direction="column" spacing={5} sx={{ marginBottom: "20px" }}>
        <ToggleButton
          show={toggleAllExpanded}
          textOn='Collapse Descriptions'
          textOff='Expand Descriptions'
          onClick={toggleAll}
        />
        {steps.map((step) => (
          <ExperienceStep
            key={`education-step-${step.title}`}
            step={step}
            toggleAllExpanded={toggleAllExpanded}
          />
        ))}
      </Stack>      
    </Box>
  );
};

export default Education;
