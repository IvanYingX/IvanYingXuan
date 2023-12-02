import { AppBar, Box, Link, Stack, Typography } from "@mui/material";

const TopBar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      
      sx={{
        justifyContent: "center",
        zIndex: 3,
        padding: 2,
        paddingLeft: 3,
        height: "50px",
        backgroundColor: "white",
        margin: "0 auto",
      }}
    >
      {/* Add a three line menu icon for mobile
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      > */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Link href="/" underline="hover" sx={{ marginRight: 2, color: "black", fontWeight: "bold" }}>
            Home
          </Link>
          <Link href="/about" underline="none" sx={{ marginRight: 2, color: "black", fontWeight: "bold" }}>
            About
          </Link>
        </Stack>
      </Box>
    </AppBar>
  );
};

export default TopBar;
