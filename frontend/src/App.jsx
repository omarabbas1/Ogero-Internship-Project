import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
