import React, { useState, useEffect } from "react";
import Confetti from "./Confetti";
import Timer from "./Timer";

import { motion } from "framer-motion";
import "./GameCSS.css";
import birb from "./pics/birb.jpg";
import oldMan from "./pics/oldMan.png";
import froge from "./pics/Froge.jpg";
import sekiro from "./pics/sekiro.jpg";
import monster from "./pics/monster.jpg";
import kura from "./pics/kura.jpg";
import smert from "./pics/smert.JPG";
import planet from "./pics/planet.png";
import mood from "./pics/mood.jpg";
import synthship from "./pics/synthShip.png";

import human from "./pics/humanButton.png";
import ai from "./pics/aiButton.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const [startTimer, setStartTimer] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [showCross, setShowCross] = useState(false);

  const [option, setOption] = useState("");

  const images = [
    birb,
    sekiro,
    smert,
    kura,
    planet,
    mood,
    monster,
    synthship,
    froge,
    oldMan,
  ];

  const handleStartTimer = () => {
    if (!startTimer) {
      setStartTimer(true);
    }
  };

  const handleHumanClick = () => {
    setOption("human");
    checkAnswer("human");
    setCurrentIndex(currentIndex + 1);
    handleStartTimer();
  };

  const handleAiClick = () => {
    setOption("ai");
    checkAnswer("ai");
    setCurrentIndex(currentIndex + 1);
    handleStartTimer();
  };

  const checkAnswer = (selectedOption) => {
    if (selectedOption === "human") {
      if (
        currentImage === birb ||
        currentImage === froge ||
        currentImage === monster ||
        currentImage === kura ||
        currentImage === mood
      ) {
        setShowTick(true);
        setCounter(counter + 1);
      } else {
        setShowCross(true);
      }
    } else if (selectedOption === "ai") {
      if (
        currentImage === sekiro ||
        currentImage === smert ||
        currentImage === planet ||
        currentImage === synthship ||
        currentImage === oldMan
      ) {
        setShowTick(true);
        setCounter(counter + 1);
      } else {
        setShowCross(true);
      }
    }

    // Hide the tick and cross after 1 second
    setTimeout(() => {
      setShowTick(false);
      setShowCross(false);
    }, 600);
  };

  const currentImage = images[currentIndex];

  const handleResetClick = () => {
    setCounter(0);
    setCurrentIndex(0);
    setOption("");
    setTimerKey((prevKey) => prevKey + 1);
    setStartTimer(false);
  };

  useEffect(() => {
    if (currentIndex >= images.length) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [currentIndex, images.length]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {/* {showConfetti && <Confetti />} */}

      <h1 id="title">Ai or Human?</h1>
      <div className="the-paragraphs">
        <p className="game-para" id="para-1">
          Is the picture you see before you create by a machine or by a human?
          See how many you can guess correctly in 20 seconds!
        </p>
        <p className="game-para" id="para-2">
          Click the <span id="human-pink">Human</span> or{" "}
          <span id="ai-blue">Ai </span>
          button to start the game and begin the countdown.
        </p>
      </div>
      <div className="counter-container">
        <p id="counter">
          {" "}
          <span style={{ color: counter > 0 ? "#32CD32" : "inherit" }}>
            {counter}
          </span>
          /10 Correct
        </p>
      </div>
      <Timer key={timerKey} startTimer={startTimer} />

      <div className="buttons-container">
        <div className="buttons">
          <img
            src={human}
            id="humanButton"
            onClick={handleHumanClick}
            style={{
              visibility: currentIndex < images.length ? "visible" : "hidden",
            }}
          ></img>
          <img
            src={ai}
            id="aiButton"
            onClick={handleAiClick}
            style={{
              visibility: currentIndex < images.length ? "visible" : "hidden",
            }}
          ></img>
        </div>
        <div className="the-images">
          <div className="the-icons">
            {showTick && <FontAwesomeIcon icon={faCheck} className="tick" />}
            {showCross && <FontAwesomeIcon icon={faXmark} className="cross" />}
          </div>

          {currentIndex < images.length ? (
            <img
              className={
                currentImage === oldMan ||
                currentImage === sekiro ||
                currentImage === smert ||
                currentImage === planet ||
                currentImage === synthship
                  ? "machine"
                  : "human"
              }
              src={currentImage}
              alt="current"
            />
          ) : (
            <div style={{ width: "100%", height: "0px" }} />
          )}
        </div>
      </div>

      <div className="parent-reset">
        <button
          className="resetButton center"
          onClick={handleResetClick}
          style={{
            visibility: currentIndex >= images.length ? "visible" : "hidden",
          }}
        >
          Reset
        </button>
      </div>
      {/* </div> */}
      {/* confetti falls down when after the last images has been shown and the game is over */}
    </motion.div>
  );
}

export default Game;
