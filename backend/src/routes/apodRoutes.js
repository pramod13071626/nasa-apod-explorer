import express from "express";
import {
  getTodayAPOD,
  getAPODByDate,
  getRecentAPODs
} from "../controllers/apodController.js";

const router = express.Router();

// Today’s APOD
router.get("/today", getTodayAPOD);

// APOD by date
router.get("/date/:date", getAPODByDate);

// Recent APODs
router.get("/recent", getRecentAPODs);

export default router;
