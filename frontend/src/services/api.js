// services/api.js
const API_KEY = "W5KUqXR5haqB3JqK0tFWT68OkifSrjiKRSb5AZpr"; 
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export const getTodayAPOD = async () => {
  try {
    console.log("🔍 Fetching today's APOD from NASA API...");
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`NASA API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log("✅ APOD data received:", data.title);
    return data;
    
  } catch (error) {
    console.error("❌ NASA API Error:", error);
    throw new Error(`Failed to fetch from NASA API: ${error.message}`);
  }
};

export const getRecentAPODs = async () => {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 9);
    
    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];
    
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&start_date=${startDateStr}&end_date=${endDateStr}`
    );
    
    if (!response.ok) {
      throw new Error(`NASA API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data.reverse() : [data];
    
  } catch (error) {
    console.error("❌ Error fetching recent APODs:", error);
    throw error;
  }
};

export const getAPODByDate = async (date) => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&date=${date}`);
    
    if (!response.ok) {
      throw new Error(`NASA API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("❌ Error fetching APOD by date:", error);
    throw error;
  }
};