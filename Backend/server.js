require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error de conexión:", err));

// Test endpoint
app.get("/", (req, res) => {
  res.send("Bienvenido a MediConnect API");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

//Routes
const authRoutes = require("./routes/authRoutes.js");
app.use("/api/auth", authRoutes);


const userRoutes = require("./routes/userRoutes.js");
app.use("/api/users", userRoutes);


const dateRoutes = require("./routes/dateRoutes.js");
app.use("/api/dates", dateRoutes);

const prescriptionRoutes = require("./routes/prescriptionRoutes.js");
app.use("/api/prescriptions", prescriptionRoutes);


const reportRoutes = require("./routes/reportRoutes.js");
app.use("/api/reports", reportRoutes);


const medicalRecordRoutes = require("./routes/medicalRecordRoutes.js");
app.use("/api/medical-records", medicalRecordRoutes);


const chatbotRoutes = require("./routes/chatbotRoutes");
app.use("/api/chatbot", chatbotRoutes);