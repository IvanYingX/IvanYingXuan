import { Stack, Typography } from "@mui/material";

interface ExperienceDescriptionProps {
  description: Array<string> | string;
}

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
  description,
}) => {
  return (
    typeof description === "string" ? (
      <Typography variant="body1">•  {description}</Typography>
    ) : (
      <Stack direction="column" spacing={1}>
        {description.map((paragraph) => (
          <Typography key={paragraph.substring(0, 10)} variant="body1">
            •  {paragraph}
          </Typography>
        ))}
      </Stack>
    )
  );
}

export default ExperienceDescription;
