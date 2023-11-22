import React from "react";

function GuessResults({ userGuesses }) {
  return (
    <div className="guess-results">
      {userGuesses.map(({ guess, id }) => (
        <p className="guess" key={id}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
