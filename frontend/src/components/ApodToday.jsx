import { useEffect, useState } from "react";
import { fetchTodayAPOD } from "../services/api";

export default function ApodToday() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    fetchTodayAPOD().then(setApod).catch(console.error);
  }, []);

  if (!apod) return <p>Loading...</p>;

  return (
    <div className="apod-today">
      <h2>{apod.title}</h2>
      {apod.media_type === "image" ? (
        <img src={apod.url} alt={apod.title} />
      ) : (
        <iframe src={apod.url} title={apod.title}></iframe>
      )}
      <p>{apod.explanation}</p>
      <p><strong>Date:</strong> {apod.date}</p>
    </div>
  );
}
