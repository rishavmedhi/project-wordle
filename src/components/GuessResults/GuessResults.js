import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ userGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess
          userGuess={userGuesses[index]}
          key={userGuesses[index] ? userGuesses[index].id : crypto.randomUUID()}
        />
      ))}
    </div>
  );
}

export default GuessResults;
