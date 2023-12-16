import { Box, Stack, Typography, Collapse } from '@mui/material';
import React from 'react';
import ExperienceStep from '../../components/ExperienceStep';
import ToggleButton from './ToggleButton';
import { steps } from './constants';


const Experience: React.FC = () => {
  const [showWork, setShowWork] = React.useState<boolean>(true);
  const [showEducation, setShowEducation] = React.useState<boolean>(true);
  const [toggleAllExpanded, setToggleAllExpanded] = React.useState<boolean>(true);

  const toggleWork = () => {
    setShowWork(!showWork);
  }
  const toggleEducation = () => {
    setShowEducation(!showEducation);
  }
  const toggleAll = () => {
    setToggleAllExpanded(!toggleAllExpanded);
  }

  return (
    <Box sx={{ alignItems: "center", marginLeft: "auto", marginRight: "auto", width: "80%" }}>
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>Experience</Typography>
      <Stack direction="column" spacing={5} sx={{ marginBottom: "20px" }}>
        <Stack direction="row" spacing={2} sx={{ marginBottom: "20px" }} >
          <ToggleButton show={showWork} textOn='Hide Work Experience' textOff='Show Work Experience' onClick={toggleWork} />
          <ToggleButton show={showEducation} textOn='Hide Education' textOff='Show Education' onClick={toggleEducation} />
          <ToggleButton show={toggleAllExpanded} textOn='Collapse Descriptions' textOff='Expand Descriptions' onClick={toggleAll} />
        </Stack>
          {steps.map((step) => (
            <Collapse in={((step.type === "work" && showWork) || (step.type === "education" && showEducation))} key={`experience-step-${step.title}`} sx={{ marginBottom: "30px" }}>
                <ExperienceStep
                  key={`experience-step-${step.title}`}
                  step={step}
                  toggleAllExpanded={toggleAllExpanded}
                />
            </Collapse>
          ))}
      </Stack>      
    </Box>
  );
};

export default Experience;