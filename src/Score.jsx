import React from "react";

const Score = ({ score, totalQuestions, handleRestartClick }) => {
  return (
    <div className="score-section">
      <div>
        You scored {score} out of {totalQuestions}
      </div>
      <button onClick={handleRestartClick}>Restart Game</button>
    </div>
  );
};

export default Score;
