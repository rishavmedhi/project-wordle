import React from "react";

const statusMap = {
  winner: "happy",
  loss: "sad",
};

function Banner({ gameEndStatus, attemptCount, answer, restartGame }) {
  function triggerRestart(e) {
    e.preventDefault();
    restartGame();
  }

  return (
    <div className={`${statusMap[gameEndStatus]} banner`}>
      {statusMap[gameEndStatus] === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${attemptCount} ${attemptCount>1?'guesses':'guess'}`}</strong>.
          <a href="/" onClick={triggerRestart} className="restart">
            Restart
          </a>
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
          <a href="/" onClick={triggerRestart} className="restart">
            Restart
          </a>
        </p>
      )}
    </div>
  );
}

export default Banner;
