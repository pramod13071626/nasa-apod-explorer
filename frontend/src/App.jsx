// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail";
import "./styles/global.css";

export default function App() {
  const [currentDate, setCurrentDate] = useState("");

  return (
    <Router>
      <Navbar currentDate={currentDate} />
      <Routes>
        <Route path="/" element={<Home setCurrentDate={setCurrentDate} />} />
        <Route path="/gallery" element={<Gallery setCurrentDate={setCurrentDate} />} />
        <Route path="/detail/:date" element={<Detail />} />
      </Routes>
    </Router>
  );
}