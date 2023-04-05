import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AppNeighbourhood from "./NeighbourhoodPage/AppNeighbourhood";
import AppCorridor from "./ComponentsPage/AppCorridor";
import NavigationBar from "./Navbar";
import WipPage from "./WipPage/WipPage";

export default function App() {
  return (
    <div className="flex-column h-screen">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<AppNeighbourhood />} />
          <Route exact path="/home" element={<WipPage />} />
          <Route exact path="/corridor" element={<WipPage />} /> //AppCorridor
          <Route path="/neighbourhood" element={<AppNeighbourhood />} />
          <Route path="/about" element={<WipPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
