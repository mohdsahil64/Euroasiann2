import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/euroasiann";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// Mongoose Schema & Model
const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  companyName: { type: String, required: true },
  companySize: { type: String, required: true },
  position: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// API Route for Form Submission
app.post('/api/contact', async (req, res) => {
  console.log("📥 Incoming contact form request...", req.body);
  try {
    const { fullName, email, phone, companyName, companySize, position, message } = req.body;

    // Basic Validation check on server side too
    if (!fullName || !email || !phone || !companyName || !companySize || !position) {
      console.warn("⚠️ Validation FAILED: Missing fields.");
      return res.status(400).json({ success: false, error: "Please fill all required fields." });
    }

    console.log("✅ Validation passed. Saving to MongoDB...");
    const newContact = new Contact({
      fullName,
      email,
      phone,
      companyName,
      companySize,
      position,
      message
    });

    await newContact.save();
    console.log("🏆 Contact data saved SUCCESSFULLY!");

    res.status(201).json({ success: true, message: "Thank you! We will contact you shortly." });
  } catch (error) {
    console.error("❌ Save Error details:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message, 
      details: error.stack 
    });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
