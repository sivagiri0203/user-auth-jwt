import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/connection.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", authRoutes);

app.listen(6000, () =>
  console.log("Server running at http://localhost:6000")
);
