// server.js 
const express = require("express"); 
const cors = require("cors"); 
const uploadRoute = require("./routes/upload"); 
const authRoutes = require("./routes/auth"); 
const advertiseRoute = require("./routes/advertise"); 
const blogRoutes = require("./routes/blogRoutes"); 
require("dotenv").config();

const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use("/uploads", 
express.static("uploads"));

app.use("/api/upload", uploadRoute); 
app.use("/api/auth", authRoutes); 
app.use("/api/advertise", advertiseRoute); 
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));