import React, { useState } from "react";
import GuessInput from "../GuessInput/";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = useState([]);

  function updateUserGuesses(newGuess) {
    const newUserGuesses = [
      ...userGuesses,
      { guess: newGuess, id: crypto.randomUUID() },
    ];
    setUserGuesses(newUserGuesses);
  }
  return (
    <>
      <GuessResults userGuesses={userGuesses} answer={answer}/>
      <GuessInput updateUserGuesses={updateUserGuesses} />
    </>
  );
}

export default Game;
