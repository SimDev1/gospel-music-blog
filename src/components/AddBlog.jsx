import React, { useState } from "react";
import { Container, TextField, Typography, Button, Alert, Box } from "@mui/material";
import axios from "axios";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    image: null,
  });
  const [success, setSuccess] = useState(false);
  const artist = JSON.parse(localStorage.getItem("artist"));

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("summary", formData.summary);
    data.append("content", formData.content);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/blogs", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess(true);
      setFormData({ title: "", summary: "", content: "", image: null });
    } catch (err) {
      console.error("Error submitting blog:", err);
    }
  };

  if (!artist) {
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h6" color="error">Please log in to submit a blog post.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom color="primary">Add New Blog Post</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {success && <Alert severity="success">Blog post submitted!</Alert>}
        <TextField label="Title" name="title" value={formData.title} onChange={handleChange} required />
        <TextField label="Summary" name="summary" value={formData.summary} onChange={handleChange} multiline rows={2} required />
        <TextField label="Content" name="content" value={formData.content} onChange={handleChange} multiline rows={4} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <Button variant="contained" type="submit" color="primary">Submit</Button>
      </Box>
    </Container>
  );
};

export default AddBlog;