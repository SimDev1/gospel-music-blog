import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const navigate = useNavigate();
  const artist = JSON.parse(localStorage.getItem("artist"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("artist");
    navigate("/login");
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Music", to: "/music" },
    { label: "Blog", to: "/blog" },
    { label: "Advertise", to: "/advertise" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Upload", to: "/upload" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #2d3436 0%, #636e72 100%)",
        py: 1,
      }}
      elevation={4}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            I-Survive Gospel Vibes
          </Link>
        </Typography>
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250, p: 2 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem button key={link.to} component={Link} to={link.to}>
                      <ListItemText primary={link.label} />
                    </ListItem>
                  ))}
                  {artist ? (
                    <>
                      <ListItem>
                        <Typography variant="body2">Welcome, {artist.name}</Typography>
                      </ListItem>
                      <ListItem button onClick={handleLogout}>
                        <ListItemText primary="Logout" />
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem button component={Link} to="/login">
                        <ListItemText primary="Login" />
                      </ListItem>
                      {/*<ListItem button component={Link} to="/register">
                        <ListItemText primary="Register" />
                      </ListItem>*/}
                    </>
                  )}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {navLinks.map((link) => (
              <NavLink key={link.to} label={link.label} to={link.to} />
            ))}
            {artist ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ color: "#fff", fontSize: 14 }}>
                  Welcome, {artist.name}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleLogout}
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <>
                <NavButton label="Login" to="/login" />
                {/*<NavButton label="Register" to="/register" />*/}
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

const NavLink = ({ label, to }) => (
  <Typography
    component={Link}
    to={to}
    sx={{
      color: "#fff",
      textDecoration: "none",
      fontSize: 16,
      "&:hover": {
        color: "#f1c40f",
      },
    }}
  >
    {label}
  </Typography>
);

const NavButton = ({ label, to }) => (
  <Button
    component={Link}
    to={to}
    size="small"
    variant="outlined"
    sx={{
      color: "#fff",
      borderColor: "#fff",
      "&:hover": {
        borderColor: "#f1c40f",
        color: "#f1c40f",
      },
    }}
  >
    {label}
  </Button>
);

export default Navbar;
