import { useNavigate } from "react-router";
import { Typography, Button, CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";

interface Props {}


const NotFound: React.FC<Props> = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Page not found.
        </Typography>
        <Typography variant="body2">
          The page you are looking for does not exist or you do not have right access to view page.
        </Typography>
      </CardContent>
      <CardActions sx={{ textAlign: "center", justifyContent: "center" }}>
        <Button
          size="large"
          onClick={() => navigate("/")}
          sx={{
            transition: ".2s ease !important",
            backgroundColor: "unset !important",
            "&:hover": {
              opacity: "0.8 !important",
              backgroundColor: "unset !important"
            }
          }}
        >
          Go to homepage
        </Button>
      </CardActions>
    </Card>
  );
};

export default NotFound;
