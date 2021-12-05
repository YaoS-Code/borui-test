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
import Error404 from "./components/404";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="game" element={<Game />} />
        <Route exact path="course" element={<Course />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="game/hangman" element={<Hangman />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
