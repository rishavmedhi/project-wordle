import React from "react";

const statusMap = {
  winner: "happy",
  loss: "sad",
};

function Banner({ gameEndStatus, attemptCount, answer }) {
  return (
    <div className={`${statusMap[gameEndStatus]} banner`}>
      {statusMap[gameEndStatus] === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${attemptCount} guesses`}</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
