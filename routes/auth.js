const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();
const JWT_SECRET = "your_jwt_secret"; // You can use dotenv for env vars

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute(
      "INSERT INTO artists (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );
    res.json({ message: "Artist registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.execute("SELECT * FROM artists WHERE email = ?", [email]);
    const artist = rows[0];

    if (!artist) return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, artist.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: artist.id, email: artist.email }, JWT_SECRET, { expiresIn: "2h" });
    res.json({ token, artist: { id: artist.id, name: artist.name, email: artist.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;