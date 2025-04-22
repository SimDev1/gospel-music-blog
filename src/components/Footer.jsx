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
          background: "linear-gradient(135deg, #2d3436, #000000)",
          color: "#ffffff",
          py: 3, // Reduced padding
          mt: 10,
          fontSize: "0.8rem", // Reduce all text size
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{xs:2, sm:4, md:20}}>
            {/* Logo and Description */}
            <Grid item xs={10} sm={4} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                I-Survive Gospel Vibes
              </Typography>
              <Typography variant="caption">
                Your home for inspiring gospel music, blogs, and faith-based content.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={10} sm={4} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/music">Music</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </Box>
            </Grid>

            {/* Contact & Socials */}
            <Grid item xs={10} md={4}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Connect With Us
              </Typography>
              <Box>
                <IconButton color="inherit" size="small" href="https://facebook.com" target="_blank">
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton color="inherit" size="small" href="https://twitter.com" target="_blank">
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton color="inherit" size="small" href="https://instagram.com" target="_blank">
                  <Instagram fontSize="small" />
                </IconButton>
                <IconButton color="inherit" size="small" href="https://youtube.com" target="_blank">
                  <YouTube fontSize="small" />
                </IconButton>
                <IconButton color="inherit" size="small" href="mailto:gospelvibes@example.com">
                  <Email fontSize="small" />
                </IconButton>
              </Box>
              <Box sx={{display: "flex", flexwrap: "wrap", gap: 2, mt: 1}}>
              <Typography variant="caption">
                Email: gospelvibes@gmail.com 
              </Typography>
              <Typography variant="caption">
                Phone: +234 810 854 8344
              </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="caption" align="center" mt={4} display="block" color="gray">
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
      fontSize: "0.75rem",
      color: "#f1c40f",
      "&:hover": {
        textDecoration: "underline",
        color: "#ffffff",
      },
    }}
  >
    {children}
  </Link>
);

export default Footer;