const express = require("express");
const multer = require("multer");
const path = require("path");
const db = require("../db");
const router = express.Router();
const authenticateUser = require("../middleware/auth");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload route
router.post("/", authenticateUser, upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "File upload failed" });
  }

  const { title, artist } = req.body;
  const filePath = req.file.path.replace(/\\/g, "/"); // Ensure compatibility for Windows

  try {
    await db.execute(
      "INSERT INTO music (title, artist, file_path) VALUES (?, ?, ?)",
      [title, artist, filePath]
    );
    res.json({ success: true, path: filePath });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get music list
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM music ORDER BY uploaded_at DESC");
    res.json(rows);
  } catch (err) {
    console.error("Fetch Error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;