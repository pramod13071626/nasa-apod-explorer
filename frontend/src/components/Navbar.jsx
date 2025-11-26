// Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <nav>
      <h1>NASA APOD Explorer</h1>
      <div>
        {location.pathname === "/" && (
          <>
            <Link to="/">Home</Link> |{" "}
            <Link to="/gallery">Gallery</Link> |{" "}
            <Link to={`/detail/${getTodayDate()}`}>Detail</Link>
          </>
        )}

        {location.pathname === "/gallery" && (
          <>
            <Link to="/">Home</Link> |{" "}
            <Link to="/gallery">Gallery</Link> |{" "}
            <Link to={`/detail/${getTodayDate()}`}>Detail</Link>
          </>
        )}

        {location.pathname.includes("/detail") && (
          <>
            <Link to="/">Home</Link> |{" "}
            <Link to="/gallery">Gallery</Link>
          </>
        )}
      </div>
    </nav>
  );
}