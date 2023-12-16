import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useState } from "react";

interface LogoDescriptionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
  onClick?: () => void;
}

const LogoDescription: React.FC<LogoDescriptionProps> = ({
  onClick,
  Icon,
  text
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Typography
      variant="body1"
      sx={{
      alignItems: "center",
      display: "flex",
      cursor: "pointer",
      ":hover": {
          "textDecoration": "underline"
      }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <Icon sx={{ marginRight: "20px", transition: "0.2s" }} color={hover ? "action" : "inherit"} />
      {text}
    </Typography>
  );
}
  
export default LogoDescription;