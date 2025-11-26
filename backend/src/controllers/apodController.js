import { fetchAPOD } from "../api/nasaClient.js";

// Today’s APOD
export const getTodayAPOD = async (req, res) => {
  try {
    const data = await fetchAPOD(); // will fallback automatically if API fails
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// APOD by date
export const getAPODByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const data = await fetchAPOD(date);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Recent APODs (last 5 days)
export const getRecentAPODs = async (req, res) => {
  try {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      dates.push(d.toISOString().split("T")[0]);
    }

    const dataArr = await Promise.all(dates.map((date) => fetchAPOD(date)));
    res.json(dataArr);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
