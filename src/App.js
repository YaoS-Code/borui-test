import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import Course from "./components/Course/Course";
import Arts from "./components/Arts/Arts";
import About from "./components/About/About";
import Hangman from "./components/Game/Hangman/Hangman";
import FlappyBird from "./components/Game/FlappyBird/FlappyBird";
import Arkanoid from  "./components/Game/Arkanoid/Arkanoid";
import Error from "./components/Error/Error";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/arts" element={<Arts />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/game/hangman" element={<Hangman />} />
        <Route exact path="/game/flappybird" element={<FlappyBird />} />
        <Route exact path="/game/Arkanoid" element={<Arkanoid />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
