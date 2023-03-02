import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AppNeighbourhood from "./NeighbourhoodPage/AppNeighbourhood";
import AppCorridor from "./ComponentsPage/AppCorridor";
import Test from "./HomePage/Test1";
import AllDesigns from "./HomePage/AllDesigns";

function NavigationBar() {
  return (
    <nav className="navbar">
      <h3 className="logo">HausCraft</h3>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/corridor">COMPONENTS</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/neighbourhood">NEIGHBOURHOOD</Link>
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
          <Route exact path="/corridor" element={<AppCorridor />} />
          <Route path="/neighbourhood" element={<AppNeighbourhood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
