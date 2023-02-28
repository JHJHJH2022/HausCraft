import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AppNeighbourhood from "./AppNeighbourhood";
import AppCorridor from "./AppCorridor";
import AllDesigns from "./AllDesigns";

function NavigationBar() {
  return (
    <nav className="navbar">
      <h3 className="logo">HausCraft</h3>
      <ul>
        <li>
          <Link to="/">All Designs</Link>
        </li>
        <li>
          <Link to="/corridor">Corridor</Link>
        </li>
        <li>
          <Link to="/neighbourhood">Neighbourhood</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="fullPage">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<AllDesigns />} />
          <Route path="/corridor" element={<AppCorridor />} />
          <Route path="/neighbourhood" element={<AppNeighbourhood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
