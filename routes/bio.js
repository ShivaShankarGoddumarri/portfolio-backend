const express = require("express");
const router = express.Router();
const Bio = require("../models/Bio");

// Get Bio
router.get("/", async (req, res) => {
  try {
    const bio = await Bio.findOne();
    res.json(bio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed Bio (for initial setup, you can remove this after seeding)
router.post("/seed", async (req, res) => {
  try {
    const bioData = {
      name: "Shiva Shankar",
      roles: [
        "Frontend Developer ",
        "Software Engineer",
        "SharePoint Developer",
        "Electronics Engineer",
      ],
      description:
        "I am a dynamic and adaptable professional, driven by a relentless passion for learning and growth. As a Developer - I Software Engineering at UST, I bring a strong commitment to delivering excellence, a positive attitude, and a growth mindset to every challenge.",
      github: "https://github.com/ShivaShankarGoddumarri",
    };
    const bio = new Bio(bioData);
    await bio.save();
    res.json(bio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
