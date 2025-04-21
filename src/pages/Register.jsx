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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>Register as Artist</Typography>
        <Box component="form" onSubmit={handleRegister}>
          <TextField
            fullWidth margin="normal" label="Name"
            value={name} onChange={(e) => setName(e.target.value)} required
          />
          <TextField
            fullWidth margin="normal" label="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} required
          />
          <TextField
            fullWidth margin="normal" type="password" label="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;