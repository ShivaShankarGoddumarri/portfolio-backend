const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

// Get all experiences
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed experiences
router.post("/seed", async (req, res) => {
  try {
    const experiencesData = [
      {
        id: 2,
        img: "https://mma.prnewswire.com/media/1422658/UST_Logo.jpg",
        role: "Developer - I Software Engineering",
        company: "UST",
        date: "Aug 2024 - Present",
        desc: "Working in a client location - Applied Materials",
        skills: [
          "React",
          "Javascript",
          "TypeScript",
          "Sharepoint",
          "HTML",
          "CSS",
          "SCSS",
        ],
      },
      {
        id: 1,
        img: "https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/34b4ca41-be31-486c-8055-c55414c082a4",
        role: "Frontend Web Developer",
        company: "BeyInc",
        date: "Dec 2023 - July 2024",
        desc: "Domain : Web Development",
        skills: [
          "Javascript",
          "React",
          "Material UI",
          "HTML",
          "CSS",
          "Redux",
          "Git",
          "GitHub",
        ],
      },
      {
        id: 0,
        img: "https://tse4.mm.bing.net/th?id=OIP.uv1WkNpW_1mjufoqDIaQrwAAAA&pid=Api&P=0&h=180",
        role: "Graduate Engineer Trainee",
        company: "HCL Technologies",
        date: "Aug 2022 - Aug 2023",
        desc: "Domain : ERS-MMT-Transportation-AUTO-GBL_OEM",
        skills: ["C", "Embedded Systems", "CAN", "UDS"],
      },
    ];
    await Experience.insertMany(experiencesData);
    res.json({ message: "Experiences seeded!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
