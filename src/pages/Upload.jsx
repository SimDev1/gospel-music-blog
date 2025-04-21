import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Input,
  Paper,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";

const Upload = () => {
  const [formData, setFormData] = useState({ title: "", artist: "" });
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploadedFilePath, setUploadedFilePath] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You need to be logged in to upload a song.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("artist", formData.artist);
    formDataToSend.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(true);
      setUploadedFilePath(response.data.path);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Please ensure you're logged in.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
            Upload New Gospel Track
          </Typography>

          {!isLoggedIn ? (
            <Alert severity="warning" sx={{ mt: 2, mb: 2, fontSize: "1rem" }}>
              You need to be logged in to upload a song.
            </Alert>
          ) : null}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Song Title"
              name="title"
              fullWidth
              required
              value={formData.title}
              onChange={handleChange}
              disabled={!isLoggedIn}
            />
            <TextField
              label="Artist Name"
              name="artist"
              fullWidth
              required
              value={formData.artist}
              onChange={handleChange}
              disabled={!isLoggedIn}
            />
            <Input type="file" fullWidth required onChange={handleFileChange} disabled={!isLoggedIn} />
            <Button variant="contained" color="secondary" type="submit" disabled={!isLoggedIn}>
              Upload
            </Button>
            {success && (
              <Alert severity="success">Track uploaded successfully!</Alert>
            )}
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Upload;