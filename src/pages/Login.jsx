import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("artist", JSON.stringify(res.data.artist));

      navigate("/upload"); // Redirect to Upload after login
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>Artist Login</Typography>
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth margin="normal" label="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} required
          />
          <TextField
            fullWidth margin="normal" type="password" label="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;