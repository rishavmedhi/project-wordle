import React, { useState } from "react";
import GuessInput from "../GuessInput/";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";
import VisualKeyboard from "../VisualKeyboard";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  const [keyboardMap, setkeyboardMap] = useState({});
  const [answer, setAnswer] = useState(sample(WORDS));

  function updateUserGuesses(newGuess) {
    const newUserGuesses = [
      ...userGuesses,
      { guess: newGuess, id: crypto.randomUUID() },
    ];
    let newKeyboardMap = { ...keyboardMap };
    setUserGuesses(newUserGuesses);
    const newGuessStatus = checkGuess(newGuess, answer);
    let correctLettersCount = 0;
    newGuessStatus.map((val, index) => {
      if (val.status === "correct") {
        correctLettersCount = correctLettersCount + 1;
        newKeyboardMap[val["letter"]] = val["status"];
      }
      if (!newKeyboardMap[val["letter"]]) {
        newKeyboardMap[val["letter"]] = val["status"];
      }
    });
    if (correctLettersCount === 5) {
      setGameStatus("winner");
    } else if (
      newUserGuesses.length === NUM_OF_GUESSES_ALLOWED &&
      gameStatus !== "winner"
    ) {
      setGameStatus("loss");
    }
    setkeyboardMap(newKeyboardMap);
  }

  function restartGame(){
    setUserGuesses([]);
    setGameStatus("running");
    setkeyboardMap({});
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults userGuesses={userGuesses} answer={answer} />
      {gameStatus !== "running" && (
        <Banner
          gameEndStatus={gameStatus}
          attemptCount={userGuesses.length}
          answer={answer}
          restartGame={restartGame}
        />
      )}
      <GuessInput
        updateUserGuesses={updateUserGuesses}
        attemptCount={userGuesses.length}
        gameStatus={gameStatus}
      />
      <VisualKeyboard keyboardMap={keyboardMap} />
    </>
  );
}

export default Game;
