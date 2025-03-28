import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DownloadButton: React.FC = () => {
  return (
    <Button
      sx={{
        marginTop: "30px",
        width: "fit-content",
        backgroundColor: "white",
        color: "#444",
        fontWeight: 600,
        display: "flex",
        // marginLeft: "auto",
        padding: "5px 30px",
        ":hover": {
          backgroundColor: "#555",
          color: "#fff",
          transition: "0.2s"
        },
        fontSize: "1rem",
      }}
      href='https://ivan-resume-public-files.s3.eu-west-1.amazonaws.com/Ivan-Ying-Xuan-Resume.pdf'
      target="_blank"
      download="Ivan_Resume.pdf"
    >
      <FileDownloadIcon sx={{ marginRight: "10px" }} />
      Download CV
    </Button>
  );
}

export default DownloadButton;
