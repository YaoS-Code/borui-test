import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Game from "./components/Game/Game";
import Course from "./components/Course/Course";
import About from "./components/About/About";
import Hangman from "./components/Game/Hangman";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="course" element={<Course />} />
        <Route path="about" element={<About />} />
        <Route path="game/hangman" element={<Hangman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
