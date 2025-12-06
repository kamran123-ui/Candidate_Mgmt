import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @route POST /api/admin/create-candidate
 * @desc Admin creates a candidate
 */
router.post("/create-candidate", protect(["admin"]), async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if candidate already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Candidate already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const candidate = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "candidate",
    });

    res.status(201).json({
      message: "Candidate created successfully",
      candidate: {
        _id: candidate._id,
        name: candidate.name,
        email: candidate.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

/**
 * @route GET /api/admin/candidates
 * @desc View all candidates
 */
router.get("/candidates", protect(["admin"]), async (req, res) => {
  try {
    const candidates = await User.find({ role: "candidate" }).select("-password");
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});



// erro aya to es code delete kar dena 58 to 98
/**
 * @route PUT /api/admin/update-candidate/:id
 * @desc Update candidate information by ID
 */
router.put("/update-candidate/:id", protect(["admin"]), async (req, res) => {
  const { name, email, mobile, address } = req.body;

  try {
    const candidate = await User.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Update allowed fields only
    candidate.name = name || candidate.name;
    candidate.email = email || candidate.email;
    candidate.mobile = mobile || candidate.mobile;
    candidate.address = address || candidate.address;

    // Note: Password update not allowed here for security
    // Note: Role update not allowed to avoid privilege issues

    await candidate.save();

    res.json({
      message: "Candidate updated successfully",
      candidate: {
        _id: candidate._id,
        name: candidate.name,
        email: candidate.email,
        mobile: candidate.mobile,
        address: candidate.address,
        role: candidate.role,
      },
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});



/**
 * @route DELETE /api/admin/delete-candidate/:id
 * @desc Delete a candidate by ID
 */
router.delete("/delete-candidate/:id", protect(["admin"]), async (req, res) => {
  try {
    const candidate = await User.findById(req.params.id);
    if (!candidate) return res.status(404).json({ message: "Candidate not found" });

    await candidate.deleteOne();
    res.json({ message: "Candidate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
