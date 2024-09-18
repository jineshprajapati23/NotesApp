import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Organize your <br /> work and life, finally.
        </h1>
        <p className="text-center">
          Become focused , organized , calm with <br /> Notes App. The World's
          #1 taks manager app.
        </p>
        <button className="home-btn">Create Note</button>
      </div>
    </div>
  );
};

export default Home;
