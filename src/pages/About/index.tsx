import { Box, Typography } from '@mui/material';
import React from 'react';
// import './styles.css';
import NavBar from '../../components/NavBar';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Box className="container">
        <Typography variant="h1">Home</Typography>
      </Box>
    </>
  );
};

export default Home;