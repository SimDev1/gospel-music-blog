import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  CardMedia,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";

const Advertise = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await axios.post("http://localhost:5000/api/advertise", formData);
      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 8, pb:30 }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
        Advertise With Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }} color="text.secondary">
        Promote your gospel content, music events, or Christian brand to a wide and engaged audience.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image="/assets/banner.jpg"
                alt="Advertise Gospel"
              />
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Why Advertise With Us?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our gospel blog reaches a growing audience of Christians passionate about music,
                  worship, and spiritual growth. Connect your message with the right audience.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card sx={{ borderRadius: 3, p: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Request an Advertisement
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" disabled={loading}>
                  {loading ? <CircularProgress size={22} color="inherit" /> : "Submit Request"}
                </Button>

                {submitted && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    Your request has been submitted! A confirmation email has been sent to you.
                  </Alert>
                )}
                {error && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {error}
                  </Alert>
                )}
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Advertise;