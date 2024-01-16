import { Typography, Box, Collapse, Stack, Modal } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExperienceDescription from "../ExperienceDescription";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface IProjectDescription {
  title: string;
  image: string;
  description: Array<string> | string;
}

interface IProjectProps {
  project: IProjectDescription;
  toggleAllExpanded: boolean | undefined;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '50svh',
  maxWidth: '90svw',
  outline: 'none',
};


const ProjectDescription: React.FC<IProjectProps> = ({
  project,
  toggleAllExpanded,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [openImageModal, setOpenImageModal] = useState<boolean>(false);

  const handleClose = () => {
    setOpenImageModal(false);
    console.log('openImageModal', openImageModal)
  }
  const handleOpen = () => {
    setOpenImageModal(true);
    console.log('openImageModal', openImageModal)
  }
  useEffect(() => {
    if (toggleAllExpanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [toggleAllExpanded]);

  const { title, image, description } = project;

  return (
    <Box className="hidden">
      <Stack direction="row" spacing={3} sx={{ marginBottom: "20px", alignItems: "center" }}>
        <Stack direction="column" spacing={1} sx={{ width: "80%", cursor: "pointer" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", justifyItems: "center" }} onClick={() => handleOpen()}>
            Open Image
          </Box>
          <Modal
            open={openImageModal}
            onClose={handleClose}
            aria-labelledby="image-modal"
            aria-describedby="image-modal-description"
          >
            <Box
              sx={style}
            >
              <CloseIcon onClick={() => handleClose()} sx={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} />
              <img src={image} alt="modal" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto', display: 'block' }} />
              
            </Box>
          </Modal>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "20px", alignItems: "center" }}>
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

export default ProjectDescription;
