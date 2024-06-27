import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import AppRoutes from "./routes.js";
import { UserProvider } from "./contexts/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Header />
          <div className="main-content">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;
