import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube, Email } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "linear-gradient(135deg, #2d3436, #000000)",
          color: "#ffffff",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 2, md: 3 },
          zIndex: 1300,
          boxShadow: "0 -2px 8px rgba(0,0,0,0.3)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                I-Survive Gospel Vibes
              </Typography>
              <Typography variant="body2">
                Your home for inspiring gospel music, blogs, and faith-based content.
              </Typography>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/music">Music</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </Box>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Connect With Us
              </Typography>
              <Box>
                <IconButton color="inherit" href="https://facebook.com" target="_blank"><Facebook /></IconButton>
                <IconButton color="inherit" href="https://twitter.com" target="_blank"><Twitter /></IconButton>
                <IconButton color="inherit" href="https://instagram.com" target="_blank"><Instagram /></IconButton>
                <IconButton color="inherit" href="https://youtube.com" target="_blank"><YouTube /></IconButton>
                <IconButton color="inherit" href="mailto:gospelvibes@gmail.com"><Email /></IconButton>
              </Box>
              <Typography variant="body2" mt={1}>
                Email: gospelvibes@gmail.com
              </Typography>
              <Typography variant="body2">
                Phone: +234 810 854 8344
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body2" align="center" mt={3} color="gray">
            &copy; {new Date().getFullYear()} I-Survive Gospel Vibes. All rights reserved. Developed by SimDev
          </Typography>
        </Container>
      </Box>
    </motion.div>
  );
};

const FooterLink = ({ to, children }) => (
  <Link
    href={to}
    underline="hover"
    sx={{
      color: "#f1c40f",
      fontSize: "0.875rem",
      "&:hover": {
        color: "#ffffff",
        textDecoration: "underline",
      },
    }}
  >
    {children}
  </Link>
);

export default Footer;