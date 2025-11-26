import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPODByDate } from "../services/api";

export default function ApodDetail() {
  const { date } = useParams();
  const [apod, setApod] = useState(null);

  useEffect(() => {
    fetchAPODByDate(date).then(setApod).catch(console.error);
  }, [date]);

  if (!apod) return <p>Loading...</p>;

  return (
    <div className="apod-detail">
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
