import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/blogs`);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchPosts();
  }, [apiUrl]);

  return (
    <Container sx={{ py: 5, pb: 20 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
        Latest Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;