import React from "react";
import { Container, Typography, Button, Box, Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { motion } from "framer-motion";

// Import image if using src/ folder (optional)
// import HeroImg from "./hero-gospel.jpg";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 2, textAlign: "center", pb:4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" fontWeight="bold" color="primary">
          Welcome to I-Survive Gospel Vibes
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          Discover inspiring gospel music, uplifting messages, and powerful testimonies.
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/music"
          startIcon={<MusicNoteIcon />}
          sx={{ mt: 4, px: 4 }}
        >
          Explore Music
        </Button>
      </Box>

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Card sx={{ transition: 'transform 0.3s', cursor: 'pointer', '&:hover': {transform: 'scale(1.05)'}, maxWidth: 400, mx: "auto", borderRadius: 3, boxShadow: 4 }}>
          <CardMedia
            component="img"
            height="400"
            image="/assets/banner.jpg"
            alt="Gospel Hero"
          />
        </Card>
      </motion.div>
    </Container>
  );
};

export default Home;