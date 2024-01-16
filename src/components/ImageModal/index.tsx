import { Box, Modal } from '@mui/material';

interface ImageModalProps {
  image: string;
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 'none',
};

const ImageModal: React.FC<ImageModalProps> = ({ image, open, handleClose }) => {
  console.log('image', image)
  console.log('open', open)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="image-modal"
      aria-describedby="image-modal-description"
    >
      <Box
        sx={style}
        onClick={() => (
          handleClose()
        )}
      >
        <img src={image} alt="modal" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto', display: 'block' }} />
      </Box>
    </Modal>
  );
};

export default ImageModal;
