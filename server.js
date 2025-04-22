const express = require("express");
const cors = require("cors");
const uploadRoute = require("./routes/upload");
const app = express();
const authRoutes = require("./routes/auth");
const advertiseRoute= require("./routes/advertise");
const blogRoutes= require("./routes/blogRoutes");


app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/upload", uploadRoute);
app.use("/api/auth", authRoutes);
app.use("/api/advertise", advertiseRoute);
app.use("/api/blogs", blogRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));