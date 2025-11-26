// Gallery.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentAPODs } from "../services/api";

export default function Gallery({ setCurrentDate }) {  
  const [apods, setApods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecentAPODs();
      setApods(data);
      if (data.length > 0) {
        setCurrentDate(data[0].date);  
      }
      setLoading(false);
    };
    fetchData();
  }, [setCurrentDate]);  

  if (loading) return <p>Loading gallery...</p>;

  return (
    <div className="gallery">
      <h1>Recent Astronomy Pictures</h1>
      <div className="gallery-grid">
        {apods.map((apod) => (
          <div key={apod.date} className="gallery-item">
            <Link to={`/detail/${apod.date}`}>
              {apod.media_type === "image" ? (
                <img src={apod.url} alt={apod.title} className="gallery-image" />
              ) : (
                <video src={apod.url} controls className="gallery-video" />
              )}
              <h3>{apod.title}</h3>
              <p>{apod.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}