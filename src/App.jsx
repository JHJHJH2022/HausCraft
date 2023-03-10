import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AppNeighbourhood from "./NeighbourhoodPage/AppNeighbourhood";
import AppCorridor from "./ComponentsPage/AppCorridor";
import NavigationBar from "./Navbar";

export default function App() {
  return (
    <div className="flex-column h-screen">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" />
          <Route exact path="/corridor" element={<AppCorridor />} />
          <Route path="/neighbourhood" element={<AppNeighbourhood />} />
          <Route path="/about" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
