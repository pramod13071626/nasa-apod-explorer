// Home.jsx
import { useEffect, useState } from "react";
import { getTodayAPOD } from "../services/api";

export default function Home({ setCurrentDate }) {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        console.log("Fetching today's APOD...");
        const data = await getTodayAPOD();
        console.log("APOD data received:", data);
        
        if (data) {
          setApod(data);
          setCurrentDate(data.date);
          console.log("Current date set to:", data.date);
        } else {
          setError("No data received from API");
        }
      } catch (err) {
        console.error("Error fetching APOD:", err);
        setError("Failed to fetch today's Astronomy Picture. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchAPOD();
  }, [setCurrentDate]);

  if (loading) return <div className="home"><p>Loading today's Astronomy Picture of the Day...</p></div>;
  if (error) return <div className="home"><p style={{color: 'red'}}>{error}</p></div>;
  if (!apod) return <div className="home"><p>No astronomy picture available today.</p></div>;

  return (
    <div className="home">
      <h1>Today's Astronomy Picture of the Day</h1>
      <h2>{apod.title}</h2>
      <p><strong>Date:</strong> {apod.date}</p>
      
      {apod.media_type === "image" ? (
        <img src={apod.url} alt={apod.title} className="apod-image" />
      ) : (
        <iframe
          title={apod.title}
          src={apod.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="apod-video"
        />
      )}
      
      <p>{apod.explanation}</p>
      
      {apod.hdurl && (
        <p>
          <a href={apod.hdurl} target="_blank" rel="noopener noreferrer">
            View HD Version
          </a>
        </p>
      )}
    </div>
  );
}