import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Foods from "../components/Foods";
import PickedFood from "../components/PickedFood";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <NavigationBar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Foods searchTerm={searchTerm}/>} />
        <Route path="/food/:id" element={<PickedFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App