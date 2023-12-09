import { Typography, Box, Grid, Collapse, Stack } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useEffect, useState } from "react";

interface ExperienceStepProps {
  title: string;
  company: string;
  from_date: string;
  to_date: string;
  description: React.ReactNode | string;
  logo: React.ReactNode;
  toggleAllExpanded: boolean | undefined;
}

const ExperienceStep: React.FC<ExperienceStepProps> = ({
  title,
  company,
  from_date,
  to_date,
  description,
  logo,
  toggleAllExpanded,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  useEffect(() => {
    console.log(toggleAllExpanded);
    if (toggleAllExpanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [toggleAllExpanded]);

  return (
    <Grid container spacing={2} sx={{ marginBottom: "50px" }}>
      <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
        {logo}
      </Grid>
      <Grid item xs={10}>
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
        <Collapse in={expanded}>
          <Typography variant="body1">{description}</Typography>
        </Collapse>
      </Grid>
    </Grid>
  );
}

export default ExperienceStep;
