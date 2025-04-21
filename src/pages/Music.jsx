import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const Music = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/upload");
        setMusicList(res.data);
      } catch (err) {
        console.error("Failed to fetch music:", err);
      }
    };
    fetchMusic();
  }, []);

  return (
    <Container sx={{ py: 5, pb:30 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
        Latest Gospel Tracks
      </Typography>
      <Grid container spacing={4}>
        {musicList.map((track, index) => (
          <Grid item key={track.id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6">{track.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    by {track.artist}
                  </Typography>
                  <audio
                    controls
                    style={{ width: "100%", marginTop: "10px" }}
                    src={`http://localhost:5000/${track.file_path}`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Music;