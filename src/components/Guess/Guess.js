import React from "react";
import { range } from "../../utils";

function Guess({ userGuess, letterStatus }) {
  return (
    <>
      {userGuess ? (
        <p className="guess">
          {[...userGuess.guess].map((letter, index) => (
            <span className={`cell ${letterStatus[index].status}`} key={index}>
              {letter}
            </span>
          ))}
        </p>
      ) : (
        <p className="guess">
          {range(5).map((value) => (
            <span className="cell" key={value}></span>
          ))}
        </p>
      )}
    </>
  );
}

export default Guess;
