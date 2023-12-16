import { Button, Typography } from "@mui/material";
import { useIsPhone } from "../../hooks";

interface ToggleButtonProps {
  show: boolean;
  textOn: string;
  textOff: string;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  show,
  textOn,
  textOff,
  onClick,
}) => {
  const isPhone = useIsPhone();
  return (
    <Button
      sx={{
        width: "fit-content",
        backgroundColor: show ? "#222" : "white",
        color: show ? "white" : "#444",
        // fontWeight: 600,
        display: "flex",
        padding: "5px 30px",
        ":hover": {
          backgroundColor: show ? "white" : "#222",
          color: show ? "#444" : "white",
          transition: "0.2s"
        },        
      }}
      onClick={onClick}
    >
      <Typography variant="body1" sx={{ fontWeight: 600, fontSize: isPhone ? "0.8rem" : "1rem" }} textTransform={"none"}>
        {show ? textOn : textOff}
      </Typography>
    </Button>
  );
}

export default ToggleButton;