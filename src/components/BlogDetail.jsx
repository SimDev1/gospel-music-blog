import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container sx={{ mt: 10}}>
        <Typography variant="h6" color="error">Blog not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 1, pb:30 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        {blog.title}
      </Typography>
      <img
        src={`http://localhost:5000${blog.image}`}
        alt={blog.title}
        style={{ maxWidth: "30%", borderRadius: 10, marginBottom: 10 }}
      />
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {blog.summary}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 2 }}>
        {blog.content}
      </Typography>
    </Container>
  );
};

export default BlogDetails;