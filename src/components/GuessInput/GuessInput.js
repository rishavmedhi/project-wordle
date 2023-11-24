import React, { useState } from "react";

function GuessInput({updateUserGuesses, attemptCount, gameStatus}) {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if(guess.length!==5){
      window.alert("Your guess should be of 5 characters");
      return;
    }
    console.log({ "guess": guess });
    updateUserGuesses(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default GuessInput;
