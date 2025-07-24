const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a project (for future admin panel)
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Seed projects (for initial setup)
router.post("/seed", async (req, res) => {
  try {
    await Project.deleteMany({}); // Clear existing projects
    const projectsData = [
      {
        id: 6,
        title: "Portfolio",
        date: "September 2023",
        description:
          "Portfolio is a web application and mobile app  which showcase all about my skills , experience , education and my projects",
        image:
          "https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/1b431e7c-23d1-4181-8a80-3e66778521c6",
        tags: ["HTML", "CSS", "Java Script", "React"],
        category: "web app",
        github: "",
        webapp: "https://shiva-shankar-portfolio.vercel.app/",
      },
      {
        id: 0,
        title: "BeyInc",
        date: "December 2023 - Present",
        description:
          "This project is an innovative social media platform designed to facilitate connections between entrepreneurs, mentors, and investors. This platform aims to nurture startup ideas by providing a collaborative space where entrepreneurs can seek guidance, share their visions, and secure investment opportunities. By bridging the gap between startup enthusiasts and seasoned professionals, our platform fosters an environment conducive to business growth and innovation.",
        image:
          "https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/0dceca9a-3d50-433d-ba7e-634ff5f828f7",
        tags: ["HTML", "CSS", "Java Script", "React", "Redux", "Material UI"],
        category: "web app",
        github: "",
        webapp: "https://www.beyinc.org/",
      },
      {
        id: 1,
        title: "Dr. Medicine",
        date: "September 2023",
        description:
          "Dr. Medicine is a web application, used to check the symptoms and get an advisable medicine who can cure their symptoms with specific medicine",
        image:
          "https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/a65797ce-63e4-485a-84a9-04172f29085d",
        tags: ["React", "HTML", "CSS", "Java Script"],
        category: "web app",
        github: "https://github.com/ShivaShankarGoddumarri/Dr.Medicine",
        webapp: "https://dr-medicine-adviser.vercel.app/",
      },
      {
        id: 2,
        title: "Amazon Clone",
        date: "Aug 2023",
        description:
          "Amazon Clone is a web application designed to enhance my Frontend knowledge by cloning the Amazon Frontend",
        image:
          "https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/8b34a415-7476-4edc-8aa8-3033d0cd308c",
        tags: ["HTML", "CSS"],
        category: "web app",
        github: "https://github.com/ShivaShankarGoddumarri/Amazon-Clone",
        webapp: "https://amazon-clone-pi-ten.vercel.app/",
      },
      {
        id: 3,
        title: "Self Core Projects",
        date: "Jan 2022 - Present",
        description:
          "I have included my top self core projects in this website",
        image:
          "https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/fa59f6d2-809b-4bc5-9543-5d324888cddb",
        tags: ["React", "HTML", "CSS", "Java Script"],
        category: "Self Core Projects",
        github: "https://github.com/ShivaShankarGoddumarri/Self-Core-Projects",
        webapp: "https://self-core-projects.vercel.app/",
      },
      {
        id: 4,
        title: "Enigma 2K22",
        date: "Dec 2021 - Jan 2022",
        description:
          "Enigma-2k22 is a web application designed to streamline Registration management and enhance productivity for the departmental fest. It provides a user-friendly interface for students to register for the events and fest related posters and designs.",
        image:
          "https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/ffbffd9d-f645-430d-89b8-510073f98c97",
        tags: ["HTML", "CSS", "SCSS"],
        category: "web app",
        github: "https://github.com/ShivaShankarGoddumarri/Enigma-2k22",
        webapp: "https://enigma-2k22.vercel.app/",
      },
    ];
    await Project.insertMany(projectsData);
    res.json({ message: "Projects seeded!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
