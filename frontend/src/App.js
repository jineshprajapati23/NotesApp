import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Screens/Home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./components/Screens/Notes/Notes";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
