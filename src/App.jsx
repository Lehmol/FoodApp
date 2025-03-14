import React, { useState } from "react";
import Foods from "../components/Foods";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <NavigationBar onSearch={setSearchTerm} />
      <Foods searchTerm={searchTerm} />
    </BrowserRouter>
  )
}

export default App