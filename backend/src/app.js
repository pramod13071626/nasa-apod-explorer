import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apodRoutes from "./routes/apodRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount APOD routes
app.use("/api/apod", apodRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
