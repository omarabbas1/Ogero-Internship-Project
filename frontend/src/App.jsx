import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import AppRoutes from "./routes.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
