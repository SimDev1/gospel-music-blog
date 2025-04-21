import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  return (
     <Container sx={{ mt: 8, pb:18 }}>
     <Typography
      variant="h4"
       align="center"
        fontWeight="bold"
         color="primary"
          gutterBottom>

        Contact Us
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 4 }}
        color="text.secondary"
      >
        We'd love to hear from you. Feel free to reach out with any questions or feedback!
      </Typography>  
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          
          <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19810.61162723784!2d3.3792052!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d6d0c8e0b69%3A0xbde3d5e7194d1575!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1685820095742!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card sx={{ borderRadius: 3, p: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Send Us a Message
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
            <TextField label="Full Name" fullWidth required />
                <TextField label="Email Address" type="email" fullWidth required />
                <TextField
                  label="Your Message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

