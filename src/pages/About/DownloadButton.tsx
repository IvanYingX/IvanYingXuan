import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useIsPhone } from '../../hooks';

const DownloadButton: React.FC = () => {
  const isPhone = useIsPhone();
  return (
    <Button
      sx={{
        marginTop: "30px",
        width: "fit-content",
        backgroundColor: "white",
        color: "#444",
        fontWeight: 600,
        display: "flex",
        marginLeft: "auto",
        marginRight: isPhone ? "auto" : "50px",
        padding: "5px 30px",
        ":hover": {
          backgroundColor: "#555",
          color: "#fff",
          transition: "0.2s"
        },
        fontSize: "1rem",
      }}
      href='https://ivan-resume-public-files.s3.eu-west-1.amazonaws.com/Ivan_Resume_v3-compressed.pdf'
      target="_blank"
      download="Ivan_Resume.pdf"
    >
      <FileDownloadIcon sx={{ marginRight: "10px" }} />
      Download CV
    </Button>
  );
}

export default DownloadButton;
