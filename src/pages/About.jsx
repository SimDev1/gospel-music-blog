import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container sx={{ mt: 8, pb:30 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          I-Survive gospel music blog is dedicated to spreading the message of hope, love, and faith through spirit-filled music, articles, and events.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  To inspire and uplift people around the world through gospel music, Christian news, and inspirational content that touches the soul and brings people closer to God.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image="/assets/home.jpg"
                alt="About Gospel"
              />
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;