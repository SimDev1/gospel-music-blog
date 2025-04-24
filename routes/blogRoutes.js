const React = require('recat');
const {useEffect, useState} = React;
const useParams =  require('react-router-dom');
const { Container, Typography, CircularProgress } = require('@mui/material');
const axios = require ('axios');

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/blogs/${id}`);
        setBlog(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, apiUrl]);

  if (loading) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h6" color="error">
          Blog not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5, pb: 30 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        {blog.title}
      </Typography>
      {blog.image && (
        <img
          src={`${apiUrl}${blog.image}`}
          alt={blog.title}
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            borderRadius: 10,
            marginBottom: 16,
          }}
        />
      )}
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