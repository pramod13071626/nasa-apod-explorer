import axios from "axios";
import NodeCache from "node-cache";
import fs from "fs";
import path from "path";

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 }); // 1 hour cache
const NASA_API_KEY = process.env.NASA_API_KEY;

// Load mock data
const mockPath = path.resolve("src/api/mockAPOD.json");
const mockData = JSON.parse(fs.readFileSync(mockPath, "utf-8"));

export const fetchAPOD = async (date) => {
  const cacheKey = date || "today";

  // Return cached data if available
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // Build API URL
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}${date ? `&date=${date}` : ""}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    // Cache live API response
    cache.set(cacheKey, data);
    return data;
  } catch (err) {
    console.warn(`NASA API unavailable for ${cacheKey}, using mock data. Error: ${err.message}`);

    // Cache mock response to avoid repeated failures
    cache.set(cacheKey, mockData);
    return mockData;
  }
};
