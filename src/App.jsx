import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";

// Pages
import Home from "./pages/Home";
import Music from "./pages/Music";
import Blog from "./pages/Blog";
import Advertise from "./pages/Advertise";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";

const theme = createTheme({
  palette: {
    background: {
      default: "transparent",
    },
    primary: {
      main: "#5b3a29",
    },
    secondary: {
      main: "#f1c40f",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Segoe UI', 'Helvetica', 'Arial', sans-serif",
  },
});

function AppWrapper() {
  const location = useLocation();
  const hideBanner = location.pathname === "/login" || location.pathname === "/register";

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
    <Navbar />
    {!hideBanner && <AdBanner />}
    <Box component="main" flexGrow={1} px={2} py={4} sx={{ pb:12 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </Box>
    <Footer />
    </Box>
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppWrapper />
    </ThemeProvider>
  );
}


export default App;