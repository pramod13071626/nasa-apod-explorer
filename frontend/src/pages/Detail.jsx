import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAPODByDate } from "../services/api";

export default function Detail() {
  const { date } = useParams();
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPODByDate(date);
      setApod(data);
      setLoading(false);
    };
    fetchData();
  }, [date]);

  if (loading) return <p>Loading details...</p>;
  if (!apod) return <p>No data found.</p>;

  return (
    <div className="detail">
      <h1>{apod.title}</h1>
      <p>Date: {apod.date}</p>
      {apod.media_type === "image" ? (
        <img src={apod.url} alt={apod.title} />
      ) : (
        <video src={apod.url} controls />
      )}
      <p>{apod.explanation}</p>
      {apod.hdurl && (
        <p>
          <a href={apod.hdurl} target="_blank" rel="noopener noreferrer">
            View HD
          </a>
        </p>
      )}
    </div>
  );
}
