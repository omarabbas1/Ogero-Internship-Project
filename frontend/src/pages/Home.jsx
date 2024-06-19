import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1 className="home-title">Welcome to Our Streaming Service!</h1>
        <p className="home-text">
          Watch your favorite movies and TV shows anytime, anywhere.
        </p>
        <p className="home-text">Sign up now to start streaming!</p>
      </div>
    </div>
  );
};

export default Home;
