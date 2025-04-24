const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const db = require("../db"); // must be a promise-based pool (from mysql2/promise)

const storage = multer.diskStorage({  destination: (req, file, cb) => 
  { cb(null, "uploads/blogs/");  },  filename: (req, file, cb) => 
    { const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix) },});
    const upload = multer({ storage });

    router.post("/", upload.single("image"), async (req, res) => {
      const { title, summary, content } = req.body;
      const imagePath = req.file ? `/uploads/blogs/${req.file.filename}` : null;

      try {
        await db.query(
          "INSERT INTO blogs (title, summary, content, image) VALUES (?, ?, ?, ?)",
          [title, summary, content, imagePath]
        );
        res.status(201).json({ message: "Blog post created" });
      } catch (err) {
        console.error("Error inserting blog:", err);
        res.status(500).json({ error: "Failed to create blog post" });
      }
    });

    router.get("/", async (req, res) => {
      try {
        const [results] = await db.query("SELECT * FROM blogs ORDER BY created_at DESC");
        res.json(results);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        res.status(500).json({ error: "Failed to fetch blogs" });
      }
    });

    router.get("/:id", async (req, res) => {
      try {
        const [results] = await db.query("SELECT * FROM blogs WHERE id = ?", [req.params.id]);
        if (results.length === 0) return res.status(404).json({ error: "Blog not found" });
        res.json(results[0]);
      } catch (err) {
        console.error("Error fetching blog by ID:", err);
        res.status(500).json({ error: "Failed to fetch blog" });
      }
    });
    
    module.exports = router;