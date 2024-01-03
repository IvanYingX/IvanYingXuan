import { Typography, Box, Collapse, Stack } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExperienceDescription from "../ExperienceDescription";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    if (toggleAllExpanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [toggleAllExpanded]);

  const { title, company, from_date, to_date, description, logo } = step;

  return (
    <Box className="hidden">
      <Stack direction="row" spacing={3} sx={{ marginBottom: "20px", alignItems: "center" }} onClick={() => setExpanded(!expanded)}>
        <Box sx={{ position: 'relative', width: "8%" }}>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
        </Box>
        <Stack direction="column" spacing={1} sx={{ width: "80%", cursor: "pointer" }}>
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
    </Box>
  );
}

export default ExperienceStep;
