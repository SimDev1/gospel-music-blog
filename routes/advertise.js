// routes/advertise.js
const express = require("express");
const router = express.Router();
const pool = require("../db"); // your MySQL connection
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to database
    await pool.query(
      "INSERT INTO ad_requests (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    // Send auto-reply
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Gospel Vibes" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Ad Request Received - Gospel Vibes",
      html: `<p>Dear ${name},</p>
              <p>Thank you for reaching out to advertise with Gospel Vibes. Our team will review your request and get back to you shortly.</p>
              <p>Blessings,<br/>Gospel Vibes Team</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error handling ad request:", error);
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
});

module.exports = router;