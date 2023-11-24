import React, { useState } from "react";
import GuessInput from "../GuessInput/";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function updateUserGuesses(newGuess) {
    const newUserGuesses = [
      ...userGuesses,
      { guess: newGuess, id: crypto.randomUUID() },
    ];
    setUserGuesses(newUserGuesses);
    const newGuessStatus = checkGuess(newGuess, answer);
    let correctLettersCount = 0;
    newGuessStatus.map((val, index) => {
      if (val.status === "correct")
        correctLettersCount = correctLettersCount + 1;
    });
    if (correctLettersCount === 5) {
      setGameStatus("winner");
    }
    if (
      newUserGuesses.length === NUM_OF_GUESSES_ALLOWED &&
      gameStatus !== "winner"
    ) {
      setGameStatus("loss");
    }
  }
  return (
    <>
      <GuessResults userGuesses={userGuesses} answer={answer} />
      {gameStatus !== "running" && (
        <Banner
          gameEndStatus={gameStatus}
          attemptCount={userGuesses.length}
          answer={answer}
        />
      )}
      <GuessInput
        updateUserGuesses={updateUserGuesses}
        attemptCount={userGuesses.length}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
