import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ "guess": guess });
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
      />
    </form>
  );
}

export default GuessInput;
