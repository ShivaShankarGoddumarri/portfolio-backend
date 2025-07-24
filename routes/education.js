const express = require("express");
const router = express.Router();
const Education = require("../models/Education");

// Get all education
router.get("/", async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed education
router.post("/seed", async (req, res) => {
  try {
    const educationData = [
      {
        id: 0,
        school: "Jawaharlal Nehru Technological University, Anantapur",
        date: "June 2018 - July 2022",
        degree: "Bachelor of Technology",
        branch: "Electronics and Communication Engineering",
      },
      {
        id: 1,
        school: "Sri Sai Krupa Junior College, Dharmavaram",
        date: "March 2016 - March 2018",
        degree: "Intermediate",
        branch: "MPC",
      },
      {
        id: 2,
        school: "Sri Gayathri English Medium High School, Dharmavaram",
        date: "March 2015 - March 2016",
        degree: "Class X",
        branch: "SSC",
      },
    ];
    await Education.insertMany(educationData);
    res.json({ message: "Education seeded!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
