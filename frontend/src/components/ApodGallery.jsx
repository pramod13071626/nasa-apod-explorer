import { useEffect, useState } from "react";
import { fetchRecentAPODs } from "../services/api";
import { Link } from "react-router-dom";

export default function ApodGallery() {
  const [apods, setApods] = useState([]);

  useEffect(() => {
    fetchRecentAPODs().then(setApods).catch(console.error);
  }, []);

  if (!apods.length) return <p>Loading gallery...</p>;

  return (
    <div className="apod-gallery">
      {apods.map((apod) => (
        <Link key={apod.date} to={`/detail/${apod.date}`}>
          <div className="gallery-item">
            <img src={apod.url} alt={apod.title} />
            <p>{apod.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
