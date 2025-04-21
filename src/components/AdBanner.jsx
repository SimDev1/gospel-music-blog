import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { VolumeUp } from "@mui/icons-material";

const ads = [
  {
    text: "Advertise your Gospel Event with us!",
    link: "/advertise",
  },
  {
    text: "Reach thousands of believers daily through our platform.",
    link: "/advertise",
  },
  {
    text: "Promote your Gospel Music or Brand here!",
    link: "/upload",
  },

];

const AdBanner = () => {
  const controls = useAnimation();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(90deg, #5b3a29 0%, #f1c40f 100%)",
        py: 1.5,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 10,
        cursor: "pointer",
      }}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: ["100%", "-100%"],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          },
        })
      }
    >
      <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
        <VolumeUp sx={{ color: "#fff", mr: 2 }} />
        <Box sx={{ whiteSpace: "nowrap", overflow: "hidden", width: "100%" }}>
          <motion.div
            animate={controls}
            initial={{ x: "100%" }}
            style={{ display: "inline-flex" }}
          >
            {ads.map((ad, index) => (
              <MuiLink
                key={index}
                href={ad.link}
                underline="none"
                sx={{
                  px: 4,
                  color: "#fff",
                  fontSize: { xs: 18, sm: 26 },
                  fontWeight: 1000,
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#2d3436",
                    textDecoration: "underline",
                  },
                }}
              >
                {ad.text}
              </MuiLink>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default AdBanner;