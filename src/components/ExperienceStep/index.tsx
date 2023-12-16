import { Typography, Box, Collapse, Stack } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExperienceDescription from "../ExperienceDescription";
import { useEffect, useState } from "react";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { useIsPhone } from "../../hooks";
interface IExperienceStep {
  title: string;
  company: string;
  from_date: string;
  to_date: string;
  description: Array<string> | string;
  logo: string;
  type: string;
}

interface ExperienceStepProps {
  step: IExperienceStep;
  toggleAllExpanded: boolean | undefined;
}

const ExperienceStep: React.FC<ExperienceStepProps> = ({
  step,
  toggleAllExpanded,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const isPhone = useIsPhone();
  useEffect(() => {
    if (toggleAllExpanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [toggleAllExpanded]);

  const logoStyle = {
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#444', // Optional, if you want your icon to have a specific color
    backgroundColor: 'background.paper', // Optional, if you want to add background
    borderRadius: '50%', // Optional, if you want rounded edges
    padding: '3px', // Optional, for spacing inside the icon
    fontSize: isPhone ? '1.2rem' : '1.5rem',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' // Optional, for better visibility against the logo
  };

  const { title, company, from_date, to_date, description, logo, type } = step;

  return (
    <>
      <Stack direction="row" spacing={3} sx={{ marginBottom: "20px", alignItems: "center" }} onClick={() => setExpanded(!expanded)}>
        <Box sx={{ position: 'relative', width: isPhone ? "20%" : "8%" }}>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
          {type === "education" && (<SchoolIcon sx={logoStyle}/>)}
          {type === "work" && (<WorkIcon sx={logoStyle}/>)}
        </Box>
        <Stack direction="column" spacing={1} sx={{ width: "80%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "20px", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", justifyItems: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                <Typography variant="h6" component="span" sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                  {company}
                </Typography>
                <Typography variant="subtitle1" component="span">
                  {` • ${from_date} - ${to_date}`}
                </Typography>
              </Typography>
            </Box>
            <KeyboardArrowUpIcon sx={{ cursor: "pointer", transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "0.2s" }} onClick={() => setExpanded(!expanded)} />
          </Stack>
        </Stack>
      </Stack>
      <Collapse in={expanded}>
        <ExperienceDescription description={description} />
      </Collapse>
    </>
  );
}

export default ExperienceStep;
