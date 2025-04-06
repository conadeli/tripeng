import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AirportEnglishPage from "./pages/AirportEnglishPage";
import HotelEnglishPage from "./pages/HotelEnglishPage";
import RestaurantEnglishPage from "./pages/RestaurantEnglishPage";
import ShoppingEnglishPage from "./pages/ShoppingEnglishPage";
import TransportationEnglishPage from "./pages/TransportationEnglishPage";
import EmergencyEnglishPage from "./pages/EmergencyEnglishPage";
import InflightEnglishPage from "./pages/InflightEnglishPage";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  return (
    <Router>
      {/* <WelcomePopup /> */}
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/1" element={<AirportEnglishPage />} />
          <Route path="/category/2" element={<HotelEnglishPage />} />
          <Route path="/category/3" element={<RestaurantEnglishPage />} />
          <Route path="/category/4" element={<ShoppingEnglishPage />} />
          <Route path="/category/5" element={<TransportationEnglishPage />} />
          <Route path="/category/6" element={<EmergencyEnglishPage />} />
          <Route path="/category/7" element={<InflightEnglishPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
