import { Typography, Box, Chip } from "@mui/material";
import { useState } from "react";
import ExperienceDescription from "../ExperienceDescription";
import LaunchIcon from '@mui/icons-material/Launch';
interface IProjectDescription {
  title: string;
  image?: string;
  description: Array<string> | string;
  url?: string;
  techStack?: Array<string>;
}

interface IProjectProps {
  project: IProjectDescription;
}

const ProjectDescription: React.FC<IProjectProps> = ({ project }) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleToggle = () => {
    if (project.image) {
      setShowDescription((prev) => !prev);
    }
  };

  const { title, image, description, url, techStack } = project;

  return (
    <Box
      sx={{
        paddingX: "20px",
        perspective: image ? "1000px" : "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginRight: "10px" }}>
          {title}
        </Typography>
        {url && (
          <LaunchIcon onClick={() => window.open(url, "_blank")} sx={{ cursor: "pointer" }}/>
        )}
      </Box>

      {techStack && (
        <Box sx={{ display: "flex", width: "100%", flexDirection: "row", marginBottom: "20px", flexWrap: "wrap", rowGap: "10px" }}>
          {techStack.map((tech) => (
            <Chip key={tech} label={tech} variant="outlined"sx={{ marginRight: "10px", color: "#222", backgroundColor: "#999", borderColor: "#999", fontSize: "14px" }}/>
          ))}
        </Box>
      )}
      <Box onClick={handleToggle}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "auto",
      }}>
        {image ? (
          // Flipping behavior when image is present
          <Box
          sx={{
            width: "100%",
            height: "500px",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            transform: showDescription ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Image */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backfaceVisibility: "hidden",
              opacity: showDescription ? 0 : 1,
              visibility: showDescription ? "hidden" : "visible",
              transition: showDescription
                ? "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out"
                : "opacity 0.4s ease-in, visibility 0.4s ease-in",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <img 
              src={image} 
              alt="project" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "contain", 
                maxWidth: "100%", 
                maxHeight: "100%" 
              }} 
            />
          </Box>

          {/* Back - Description */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backfaceVisibility: "hidden",
              display: "flex",
              justifyContent: "center",
              borderRadius: "8px",
              transform: "rotateY(180deg)",
              backgroundColor: "transparent",
              color: "inherit",
              cursor: image ? "pointer" : "default",
            }}
          >
            <ExperienceDescription description={description} />
          </Box>
        </Box>
      ) : (
        // Just show description if there's no image
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backgroundColor: "transparent",
            color: "inherit",
          }}
        >
            <ExperienceDescription description={description} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDescription;
