import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurants/Restaurants";
import Contact from "./components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  once: true,
  delay: 800
});
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="restaurants" element={<Restaurants />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
