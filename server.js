// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require("./routes/projects");
const bioRoutes = require("./routes/bio");
const skillsRoutes = require("./routes/skills");
const experiencesRoutes = require("./routes/experiences");
const educationRoutes = require("./routes/education");
app.use("/api/projects", projectRoutes);
app.use("/api/bio", bioRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/experiences", experiencesRoutes);
app.use("/api/education", educationRoutes);

// DB + Server Start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
  })
  .catch((err) => console.error("DB connection failed ❌", err));
