const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const dotenv = require("dotenv");
dotenv.config();

const { connectDB } = require("./config/db");
connectDB();

// Import the CORS package
const cors = require("cors");

// Configure CORS to allow requests from http://localhost:3000
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
