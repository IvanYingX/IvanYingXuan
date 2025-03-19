import { Typography, Box, Stack } from "@mui/material";
import ExperienceDescription from "../ExperienceDescription";

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
}

const ExperienceStep: React.FC<ExperienceStepProps> = ({
  step,
}) => {
  const { title, company, from_date, to_date, description, logo } = step;

  return (
    <Box className="hidden" sx={{ paddingX: "20px" }}>
      <Stack direction="row" spacing={3} sx={{ marginBottom: "20px", alignItems: "center" }}>
        <Box sx={{ position: 'relative', width: "8%" }}>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
        </Box>
        <Stack direction="column" spacing={1} sx={{ width: "80%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ fontStyle: "italic", marginBottom: "10px" }}>
            {`${from_date} - ${to_date}`}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "20px", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", justifyItems: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                <Typography variant="h6" component="span" sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                  {company}
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <ExperienceDescription description={description} />
    </Box>
  );
}

export default ExperienceStep;
