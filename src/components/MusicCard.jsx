import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeroImage from "/assets/hero-gospel.jpeg"

const MotionCard = motion.create(Card);

const MusicCard = ({ music }) => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      elevation={4}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#ffe",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {music.cover && (
        <CardMedia
          component="img"
          height="180"
          image={HeroImage}
          alt={`${music.title} Cover`}
        />
      )}

      <CardContent>
        <Typography variant="h6" component="div" color="primary">
          {music.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {music.artist}
        </Typography>
        <audio controls style={{ marginTop: "10px", width: "100%" }}>
          <source src={music.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </CardContent>

      <CardActions sx={{ mt: "auto", justifyContent: "flex-end" }}>
        <Button
          size="small"
          color="primary"
          href={music.audioUrl}
          target="_blank"
          startIcon={<PlayArrowIcon />}
        >
          Play Full Track
        </Button>
      </CardActions>
    </MotionCard>
  );
};

export default MusicCard;