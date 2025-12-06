import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

import adminRoutes from "./routes/adminRoutes.js";
app.use("/api/admin", adminRoutes);

import candidateRoutes from "./routes/candidateRoutes.js";
app.use("/api/candidate", candidateRoutes);



// Test Route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

