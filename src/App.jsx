import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import TripPage from "./pages/TripPage";
import NextPage from "./pages/NextPage";


function App() {
  return (
    <div>
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Individual Pages */}
        <Route path="/about" element={<><HomePage /></>} />
        <Route path="/trip" element={<><TripPage /></>} />
        <Route path="/personal" element={<><NextPage /></>} />
      </Routes>
    </div>
  );
}

export default App;
