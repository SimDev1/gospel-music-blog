import React, { useEffect, useState } from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 8, pb:16 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {blogs.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ borderRadius: 3, height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:5000${post.image}`}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" color="primary">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </CardContent>
              <Button
                onClick={() => navigate(`/blog/${post.id}`)}
                size="small"
                sx={{ m: 2 }}
                variant="contained"
                color="primary"
              >
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;